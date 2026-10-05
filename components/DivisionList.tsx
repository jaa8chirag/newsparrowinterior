"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { divisions } from "@/lib/data";

export default function DivisionList() {
  const root = useRef<HTMLDivElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      if (!window.matchMedia("(pointer: fine)").matches) return;
      const px = gsap.quickTo(preview.current, "x", { duration: 0.6, ease: "power3" });
      const py = gsap.quickTo(preview.current, "y", { duration: 0.6, ease: "power3" });
      const move = (e: MouseEvent) => {
        const r = root.current!.getBoundingClientRect();
        px(e.clientX - r.left);
        py(e.clientY - r.top);
      };
      const el = root.current!;
      el.addEventListener("mousemove", move);

      gsap.from("[data-row]", {
        opacity: 0,
        y: 60,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 80%" },
      });
      return () => el.removeEventListener("mousemove", move);
    },
    { scope: root }
  );

  const show = (i: number) => {
    setActive(i);
    gsap.to(preview.current, { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out" });
  };
  const hide = () => gsap.to(preview.current, { scale: 0.6, opacity: 0, duration: 0.3 });

  return (
    <div ref={root} className="relative" onMouseLeave={hide}>
      {divisions.map((d, i) => (
        <Link
          key={d.slug}
          href={`/${d.slug}`}
          data-row
          onMouseEnter={() => show(i)}
          className="group flex items-center justify-between gap-6 border-t border-line py-8 transition-[padding,color] duration-500 last:border-b hover:pl-6 hover:text-accent md:py-12"
        >
          <span className="w-10 text-sm text-muted">{d.index}</span>
          <span className="flex-1 font-display text-[clamp(2.2rem,7vw,6.5rem)] font-semibold leading-none">
            {d.name}
          </span>
          <span className="hidden text-sm uppercase tracking-[0.2em] text-muted md:block">/{d.slug}</span>
          <span className="text-3xl transition-transform duration-500 group-hover:-rotate-45">→</span>
        </Link>
      ))}

      <div
        ref={preview}
        className="pointer-events-none absolute left-0 top-0 z-10 hidden h-72 w-96 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-sm opacity-0 md:block"
        style={{ scale: 0.6 }}
      >
        {divisions.map((d, i) => (
          <Image
            key={d.slug}
            src={d.image}
            alt=""
            fill
            sizes="384px"
            className={`object-cover transition-all duration-500 ${active === i ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
          />
        ))}
        <span className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1 text-xs uppercase tracking-[0.15em] text-white">
          {divisions[active].short}
        </span>
      </div>
    </div>
  );
}
