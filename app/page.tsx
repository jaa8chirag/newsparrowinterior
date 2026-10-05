import Link from "next/link";
import Preloader from "@/components/Preloader";
import HeroBg from "@/components/HeroBg";
import HeroScene from "@/components/HeroScene";
import HeroText from "@/components/HeroText";
import SplitHeading from "@/components/SplitHeading";
import DivisionList from "@/components/DivisionList";
import Showcase from "@/components/Showcase";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Cities from "@/components/Cities";
import { divisions, clients, brand } from "@/lib/data";

const label = "mb-8 text-sm uppercase tracking-[0.25em] text-muted";
const h2 = "font-display text-[clamp(3rem,9vw,8rem)] font-semibold leading-[0.9]";

export default function Home() {
  return (
    <>
      <Preloader />

      <section className="relative h-svh overflow-hidden">
        <HeroBg src="/images/wa1.jpeg" />
        <HeroScene />
        <HeroText
          delay={2.4}
          eyebrow={`${brand.group} — PMC · Retail Intelligence · Design · Shopfits · Academy`}
          lines={["Turning spaces", "into success."]}
          sub="Retail store design, fit-out and project management — one group taking brands from site survey to opening day."
        />
      </section>

      <section className="px-6 py-32 md:px-10 md:py-48">
        <p className={label}>About</p>
        <SplitHeading
          as="p"
          className="max-w-6xl font-display text-[clamp(2rem,5.5vw,5.5rem)] font-medium leading-[1.02]"
          text="We integrate AI-driven technology with a skilled workforce to redefine how modern retail stores are designed, built and delivered."
        />
        <div className="mt-20">
          <Stats
            stats={[
              { value: 1100, suffix: "+", label: "Sites completed" },
              { value: 35, suffix: "+", label: "Indian cities" },
              { value: 20, suffix: "+", label: "Years of experience" },
            ]}
          />
        </div>
      </section>

      <Marquee items={divisions.map((d) => d.name)} />

      <section className="px-6 py-32 md:px-10 md:py-48">
        <div className="mb-16 flex items-end justify-between">
          <SplitHeading className={h2} text="Our divisions" />
          <p className="hidden max-w-xs text-sm text-muted md:block">
            Previously two websites — Shopfits and PMC. Now every discipline lives under one domain.
          </p>
        </div>
        <DivisionList />
      </section>

      <Showcase />

      <section className="px-6 py-32 md:px-10 md:py-48">
        <Process />
      </section>

      <section className="px-6 pb-32 md:px-10 md:pb-48">
        <div className="mb-16 flex items-end justify-between gap-6">
          <SplitHeading className={h2} text="Recent work" />
          <Link href="/shopfits" className="hidden text-sm uppercase tracking-[0.2em] underline underline-offset-8 md:block">
            View Shopfits →
          </Link>
        </div>
        <Projects />
      </section>

      <section className="border-y border-line py-16">
        <p className="mb-8 px-6 text-sm uppercase tracking-[0.25em] text-muted md:px-10">Trusted by</p>
        <Marquee items={clients} />
      </section>

      <section className="px-6 py-32 md:px-10 md:py-48">
        <Testimonials />
      </section>

      <section className="px-6 pb-32 md:px-10 md:pb-48">
        <p className={label}>Presence</p>
        <SplitHeading className={`${h2} mb-16`} text="35+ cities across India." />
        <Cities />
      </section>
    </>
  );
}
