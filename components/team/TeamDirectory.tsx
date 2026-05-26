"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TeamCard } from "@/components/cards/TeamCard";
import type { TeamMember } from "@/lib/data/types";
import type { Locale } from "@/lib/i18n/config";

interface PracticeOption {
  slug: string;
  name: string;
}

export function TeamDirectory({
  members,
  practices,
  locale,
  roleLabels,
  allLabel,
}: {
  members: TeamMember[];
  practices: PracticeOption[];
  locale: Locale;
  roleLabels: Record<string, string>;
  allLabel: string;
}) {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? members
      : members.filter((m) => m.practices.includes(filter));

  return (
    <div>
      <div className="flex flex-wrap gap-3 border-b border-ink/10 pb-8">
        <FilterChip
          active={filter === "all"}
          onClick={() => setFilter("all")}
          label={allLabel}
        />
        {practices.map((p) => (
          <FilterChip
            key={p.slug}
            active={filter === p.slug}
            onClick={() => setFilter(p.slug)}
            label={p.name}
          />
        ))}
      </div>

      <motion.div
        layout
        className="mt-12 grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((m) => (
            <motion.div
              key={m.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <TeamCard
                member={m}
                locale={locale}
                roleLabel={roleLabels[m.role]}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-xs font-medium uppercase tracking-widest transition-colors ${
        active
          ? "bg-ink text-paper"
          : "border border-ink/15 text-ink/60 hover:border-ink/40 hover:text-ink"
      }`}
    >
      {label}
    </button>
  );
}
