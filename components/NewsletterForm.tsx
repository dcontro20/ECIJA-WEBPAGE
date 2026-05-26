"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function NewsletterForm({ dict }: { dict: Dictionary }) {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="flex items-center gap-2 text-accent-light">
        <Check className="h-5 w-5" />
        {dict.contact.formSuccess}
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="flex items-center border-b border-paper/30 focus-within:border-accent"
    >
      <input
        type="email"
        required
        placeholder={dict.footer.newsletterPlaceholder}
        className="w-full bg-transparent py-3 text-paper placeholder:text-paper/40 focus:outline-none"
      />
      <button
        type="submit"
        aria-label={dict.footer.newsletterButton}
        className="shrink-0 p-3 text-accent transition-transform hover:translate-x-1"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </form>
  );
}
