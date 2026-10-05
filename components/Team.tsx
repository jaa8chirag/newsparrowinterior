import Image from "next/image";
import { team } from "@/lib/data";

export default function Team() {
  return (
    <ul className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
      {team.map((m) => (
        <li key={m.name} data-cursor className="group bg-background p-8 transition-colors duration-500 hover:bg-foreground hover:text-background">
          {"photo" in m && m.photo ? (
            <div className="relative mb-10 h-24 w-24 overflow-hidden rounded-full">
              <Image src={m.photo} alt={m.name} fill sizes="96px" className="object-cover" />
            </div>
          ) : (
            <div className="mb-10 flex h-24 w-24 items-center justify-center rounded-full bg-accent font-display text-3xl font-semibold text-black">
              {m.name[0]}
            </div>
          )}
          <p className="font-display text-2xl font-semibold">{m.name}</p>
          <p className="mt-1 text-sm text-muted transition-colors group-hover:text-background/60">{m.role}</p>
        </li>
      ))}
    </ul>
  );
}
