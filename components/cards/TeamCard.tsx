import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { type TeamMember } from "@/lib/data/types";
import type { Locale } from "@/lib/i18n/config";

export function TeamCard({
  member,
  locale,
  roleLabel,
}: {
  member: TeamMember;
  locale: Locale;
  roleLabel: string;
}) {
  return (
    <Link href={`/${locale}/equipo/${member.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-ink/5">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center bg-accent text-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
      <div className="pt-5">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          {roleLabel}
        </p>
        <h3 className="mt-2 font-serif text-xl tracking-tight transition-colors group-hover:text-accent">
          {member.name}
        </h3>
      </div>
    </Link>
  );
}
