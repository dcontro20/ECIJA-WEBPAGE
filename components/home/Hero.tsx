"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const words = dict.home.heroTitle.split(" ");

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-ink text-paper">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-transparent to-transparent" />
      </div>

      {/* Decorative grid line */}
      <div className="absolute inset-x-0 top-0 z-10 h-px bg-paper/10" />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="absolute left-6 top-0 z-10 hidden h-full w-px origin-top bg-paper/10 sm:left-8 lg:left-12 lg:block"
      />

      <div className="container-x relative z-20 pb-20 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="eyebrow text-accent-light"
        >
          {dict.home.heroEyebrow}
        </motion.p>

        <h1 className="mt-8 max-w-5xl display-1 font-light">
          {words.map((word, i) => (
            <span key={i} className="mr-[0.25em] inline-block overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.4 + i * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70"
        >
          {dict.home.heroSubtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link
            href={`/${locale}/areas`}
            className="group inline-flex items-center justify-center gap-2 bg-accent px-8 py-4 text-sm font-medium uppercase tracking-widest text-paper transition-colors hover:bg-accent-dark"
          >
            {dict.home.heroCtaPrimary}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href={`/${locale}/estudio`}
            className="group inline-flex items-center justify-center gap-2 border border-paper/30 px-8 py-4 text-sm font-medium uppercase tracking-widest text-paper transition-colors hover:border-paper hover:bg-paper hover:text-ink"
          >
            {dict.home.heroCtaSecondary}
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-10 right-6 z-20 hidden items-center gap-3 text-xs uppercase tracking-widest2 text-paper/50 sm:right-8 lg:right-12 lg:flex"
      >
        <span>Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
