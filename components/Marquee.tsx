"use client";

import { PracticeIcon } from "./PracticeIcon";

export function Marquee({
  items,
}: {
  items: { icon: string; label: string }[];
}) {
  const doubled = [...items, ...items];
  return (
    <div className="group relative flex overflow-hidden border-y border-ink/10 py-8">
      <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center gap-3">
            <PracticeIcon name={item.icon} className="h-6 w-6 text-accent" />
            <span className="whitespace-nowrap font-serif text-xl text-ink/80">
              {item.label}
            </span>
            <span className="ml-16 h-1.5 w-1.5 rounded-full bg-accent/40" />
          </div>
        ))}
      </div>
    </div>
  );
}
