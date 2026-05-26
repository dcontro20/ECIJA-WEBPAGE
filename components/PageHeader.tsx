import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative bg-ink pb-20 pt-40 text-paper lg:pb-28 lg:pt-48">
      <div className="absolute left-6 top-0 hidden h-full w-px bg-paper/10 sm:left-8 lg:left-12 lg:block" />
      <div className="container-x">
        {breadcrumbs && (
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-paper/40">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {b.href ? (
                  <Link href={b.href} className="transition-colors hover:text-accent-light">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-paper/70">{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}
        <p className="eyebrow text-accent-light">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl display-1 font-light text-balance">{title}</h1>
        {subtitle && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
