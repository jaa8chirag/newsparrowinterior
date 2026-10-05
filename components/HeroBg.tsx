"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

/** Full-bleed hero photo: slow zoom-in on load, parallax + fade on scroll. */
export default function HeroBg({ src, alt = "" }: { src: string; alt?: string }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo("[data-hero-img]", { scale: 1.3 }, { scale: 1.05, duration: 3, ease: "power3.out" });
      gsap.to(root.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: root }
  );

  return (
    <div ref={root} className="pointer-events-none absolute inset-0">
      <div data-hero-img className="absolute inset-0">
        <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover opacity-90" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-linear-to-t from-black/85 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-background via-background/10 to-background/30" />
    </div>
  );
}
