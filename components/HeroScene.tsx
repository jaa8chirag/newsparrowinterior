"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

export default function HeroScene({ color }: { color?: string }) {
  return (
    <div className="pointer-events-none absolute inset-0">
      <Scene color={color} />
    </div>
  );
}
