"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

// deterministic PRNG so renders stay pure
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function Particles({ color }: { color: string }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const rand = mulberry32(7);
    const count = 2200;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.2 + rand() * 4;
      const theta = rand() * Math.PI * 2;
      const phi = Math.acos(2 * rand() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.02} sizeAttenuation transparent opacity={0.85} depthWrite={false} />
    </points>
  );
}

function Rig({ color }: { color: string }) {
  const group = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });

  useFrame((state, dt) => {
    const g = group.current;
    const base = state.size.width < 768 ? 0.5 : 1;
    if (!g) return;
    target.current.x = THREE.MathUtils.lerp(target.current.x, state.pointer.x, 0.05);
    target.current.y = THREE.MathUtils.lerp(target.current.y, state.pointer.y, 0.05);
    const scroll = typeof window !== "undefined" ? window.scrollY / window.innerHeight : 0;
    g.rotation.y += dt * 0.15;
    g.rotation.x = target.current.y * 0.5 + scroll * 0.6;
    g.position.x = target.current.x * 0.6;
    g.position.y = scroll * 1.2;
    g.scale.setScalar(base * (1 + scroll * 0.35));
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
        <mesh>
          <icosahedronGeometry args={[1.7, 12]} />
          <MeshDistortMaterial color={color} distort={0.45} speed={1.6} roughness={0.2} metalness={0.7} wireframe />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene({ color = "#ff5a1f" }: { color?: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={40} color={color} />
      <pointLight position={[-5, -3, 2]} intensity={15} color="#ffffff" />
      <Rig color={color} />
      <Particles color={color} />
    </Canvas>
  );
}
