"use client";

import { useState } from "react";
import { divisions } from "@/lib/data";

const field =
  "w-full border-b border-line bg-transparent py-4 text-lg outline-none transition-colors placeholder:text-muted focus:border-accent";

// UI only — no backend wired yet
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return sent ? (
    <div className="py-20">
      <p className="font-display text-5xl font-semibold">
        Thank you<span className="text-accent">.</span>
      </p>
      <p className="mt-4 text-muted">We&apos;ll get back to you shortly.</p>
    </div>
  ) : (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-6"
    >
      <input required name="name" placeholder="Your name" className={field} />
      <input required type="email" name="email" placeholder="Email" className={field} />
      <input name="phone" placeholder="Phone" className={field} />
      <select name="interest" defaultValue="" className={`${field} text-muted`}>
        <option value="" disabled>
          I&apos;m interested in…
        </option>
        {divisions.map((d) => (
          <option key={d.slug} value={d.slug} className="text-black">
            {d.short}
          </option>
        ))}
      </select>
      <textarea name="message" rows={3} placeholder="Tell us about your project" className={field} />
      <button className="mt-4 rounded-full bg-accent px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-transform hover:scale-105">
        Send enquiry →
      </button>
    </form>
  );
}
