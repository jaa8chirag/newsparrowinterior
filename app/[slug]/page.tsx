import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import HeroBg from "@/components/HeroBg";
import Parallax from "@/components/Parallax";
import HeroScene from "@/components/HeroScene";
import HeroText from "@/components/HeroText";
import SplitHeading from "@/components/SplitHeading";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Cities from "@/components/Cities";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";
import { divisions, getDivision, clients } from "@/lib/data";

export function generateStaticParams() {
  return divisions.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const d = getDivision(slug);
  return d ? { title: `${d.name} — Sparroh Group`, description: d.description } : {};
}

const label = "mb-8 text-sm uppercase tracking-[0.25em] text-muted";
const h2 = "font-display text-[clamp(3rem,9vw,8rem)] font-semibold leading-[0.9]";
const section = "px-5 pb-20 md:px-10 md:pb-48";

export default async function DivisionPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const d = getDivision(slug);
  if (!d) notFound();

  const next = divisions[(divisions.indexOf(d) + 1) % divisions.length];
  const hasProcess = ["pmc", "retail-intelligence", "design", "shopfits"].includes(d.slug);

  return (
    <>
      <section className="relative h-svh overflow-hidden">
        <HeroBg src={d.image} />
        <HeroScene color={d.accent} />
        <HeroText eyebrow={`${d.index} — ${d.short}`} lines={d.name.split(" ")} sub={d.tagline} delay={0.2} />
      </section>

      <section className="px-6 py-20 md:px-10 md:py-48">
        <SplitHeading
          as="p"
          className="max-w-6xl font-display text-[clamp(2rem,5vw,5rem)] font-medium leading-[1.05]"
          text={d.description}
        />
      </section>

      <section className={section}>
        <Stats stats={d.stats} />
      </section>

      <section className={`${section} grid gap-4 md:grid-cols-3`}>
        {d.gallery.map((src, n) => (
          <Parallax
            key={src}
            src={src}
            alt={`${d.name} ${n + 1}`}
            sizes="33vw"
                        contain={/(audit|workprog|g\d)\./.test(src)}
            className={`aspect-[4/3] ${/(audit|workprog|g\d)\./.test(src) ? "bg-white" : ""}`}
          />
        ))}
      </section>

      <section className={section}>
        <p className={label}>Services</p>
        <ul>
          {d.services.map((s, n) => (
            <li
              key={s.title}
              data-cursor
              className="group grid items-baseline gap-2 border-t border-line py-6 transition-[padding] duration-500 last:border-b hover:pl-6 md:grid-cols-[4rem_1.4fr_1fr] md:gap-6 md:py-8"
            >
              <span className="text-sm text-muted">{String(n + 1).padStart(2, "0")}</span>
              <span className="font-display text-[clamp(1.8rem,4.5vw,4rem)] font-semibold leading-none transition-colors duration-500 group-hover:text-(--hover)" style={{ ["--hover" as string]: d.accent }}>
                {s.title}
              </span>
              <span className="text-muted">{s.text}</span>
            </li>
          ))}
        </ul>
      </section>

      {hasProcess && (
        <section className={section}>
          <Process />
        </section>
      )}

      {d.slug === "shopfits" && (
        <section className={section}>
          <SplitHeading className={`${h2} mb-16`} text="Portfolio" />
          <Projects />
        </section>
      )}

      {d.slug === "pmc" && (
        <>
          <section className={section}>
            <p className={label}>Leadership & team</p>
            <SplitHeading className={`${h2} mb-16`} text="The people on site." />
            <Team />
          </section>
          <section className={section}>
            <p className={label}>Operational presence</p>
            <SplitHeading className={`${h2} mb-16`} text="35+ cities." />
            <Cities />
          </section>
        </>
      )}

      {d.slug === "academy" && (
        <section className={section}>
          <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-sm">
            <Image src="/images/wa6.jpeg" alt="Founder speaking on retail" fill sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <button data-cursor className="relative flex h-28 w-28 items-center justify-center rounded-full bg-white text-3xl text-black transition-transform hover:scale-110" aria-label="Play PMC training video">
              ▶
            </button>
            <span className="absolute bottom-6 left-6 text-sm uppercase tracking-[0.2em] text-white">PMC Training Video Program</span>
          </div>
        </section>
      )}

      {(d.slug === "pmc" || d.slug === "shopfits") && (
        <section className="border-y border-line py-16">
          <p className="mb-8 px-6 text-sm uppercase tracking-[0.25em] text-muted md:px-10">Trusted by</p>
          <Marquee items={clients} />
        </section>
      )}

      {d.slug !== "academy" && (
        <section className="px-6 py-20 md:px-10 md:py-48">
          <Testimonials />
        </section>
      )}

      <section className="px-5 py-16 md:px-10 md:py-24">
        <Link
          href="/contact"
          className="inline-block rounded-full bg-accent px-12 py-5 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-transform hover:scale-105"
        >
          Start a {d.name} project →
        </Link>
      </section>

      <Link href={`/${next.slug}`} className="group block border-t border-line px-5 py-16 md:px-10 md:py-24 md:py-40">
        <p className="text-sm uppercase tracking-[0.25em] text-muted">Next division</p>
        <p className="mt-4 flex items-center justify-between font-display text-[clamp(3rem,11vw,10rem)] font-semibold leading-none transition-transform duration-500 group-hover:translate-x-4">
          {next.name}
          <span className="transition-transform duration-500 group-hover:-rotate-45">→</span>
        </p>
      </Link>
    </>
  );
}
