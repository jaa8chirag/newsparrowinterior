"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type Props = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  scrub?: boolean;
};

/** Masked word-by-word reveal, fires when scrolled into view. */
export default function SplitHeading({ text, as: Tag = "h2", className = "", delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-w]", {
        yPercent: 115,
        rotate: 4,
        duration: 1.1,
        ease: "power4.out",
        stagger: 0.05,
        delay,
        scrollTrigger: { trigger: ref.current, start: "top 88%" },
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref}>
      <Tag className={className} aria-label={text}>
        {text.split(" ").map((w, i) => (
          <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-top">
            <span data-w className="inline-block origin-left">
              {w}&nbsp;
            </span>
          </span>
        ))}
      </Tag>
    </div>
  );
}
