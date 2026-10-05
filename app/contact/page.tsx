import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import SplitHeading from "@/components/SplitHeading";
import { brand, socials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact — Sparroh Group",
  description: "Start your next retail project with Sparroh Group.",
};

export default function ContactPage() {
  return (
    <section className="min-h-screen px-6 pb-32 pt-40 md:px-10">
      <p className="mb-8 text-sm uppercase tracking-[0.25em] text-muted">Contact us</p>
      <SplitHeading
        as="h1"
        className="font-display text-[clamp(3.5rem,12vw,12rem)] font-semibold leading-[0.88]"
        text="Let's build what's next."
      />

      <div className="mt-24 grid gap-20 md:grid-cols-2">
        <div className="space-y-10">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">Studio</p>
            <p className="max-w-sm text-xl">{brand.address}</p>
          </div>
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">Call</p>
            <a href={brand.phoneHref} className="font-display text-4xl font-semibold transition-colors hover:text-accent">
              {brand.phone}
            </a>
          </div>
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-muted">Follow</p>
            <ul className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block rounded-full border border-line px-5 py-2 text-sm transition-colors hover:bg-foreground hover:text-background"
                  >
                    {s.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
