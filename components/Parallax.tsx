"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** vertical travel of the image in % while scrolling */
  speed?: number;
  reveal?: boolean;
  contain?: boolean;
};

/** Image that reveals with a clip-path wipe and drifts slowly as you scroll. */
export default function Parallax({ src, alt, className = "", sizes = "100vw", priority, speed = 4, reveal = true, contain }: Props) {
  const box = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (reveal) {
        gsap.fromTo(
          box.current,
          { clipPath: "inset(12% 12% 12% 12%)" },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.4,
            ease: "power4.out",
            scrollTrigger: { trigger: box.current, start: "top 90%" },
          }
        );
      }
      gsap.fromTo(
        "[data-img]",
        { yPercent: -speed, scale: 1.1 },
        {
          yPercent: speed,
          scale: 1.1,
          ease: "none",
          scrollTrigger: { trigger: box.current, scrub: true, start: "top bottom", end: "bottom top" },
        }
      );
    },
    { scope: box }
  );

  return (
    <div ref={box} className={`relative overflow-hidden ${className}`}>
      <div data-img className="absolute inset-0">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={contain ? "object-contain" : "object-cover"} />
      </div>
    </div>
  );
}
