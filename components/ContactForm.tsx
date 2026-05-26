"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function ContactForm({
  dict,
  areas,
}: {
  dict: Dictionary;
  areas: { slug: string; name: string }[];
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center border border-ink/10 bg-paper-warm p-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-paper">
          <Check className="h-8 w-8" />
        </div>
        <p className="mt-8 max-w-sm text-lg leading-relaxed text-ink/80">
          {dict.contact.formSuccess}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-8"
    >
      <div className="grid gap-8 sm:grid-cols-2">
        <Field label={dict.contact.formName} required>
          <input type="text" required className={inputClass} />
        </Field>
        <Field label={dict.contact.formEmail} required>
          <input type="email" required className={inputClass} />
        </Field>
        <Field label={dict.contact.formCompany}>
          <input type="text" className={inputClass} />
        </Field>
        <Field label={dict.contact.formPhone}>
          <input type="tel" className={inputClass} />
        </Field>
      </div>

      <Field label={dict.contact.formArea}>
        <select required defaultValue="" className={inputClass}>
          <option value="" disabled>
            {dict.contact.formSelectArea}
          </option>
          {areas.map((a) => (
            <option key={a.slug} value={a.slug}>
              {a.name}
            </option>
          ))}
        </select>
      </Field>

      <Field label={dict.contact.formMessage} required>
        <textarea rows={5} required className={`${inputClass} resize-none`} />
      </Field>

      <p className="text-sm leading-relaxed text-ink/50">
        {dict.contact.privacyNote}
      </p>

      <button
        type="submit"
        className="group inline-flex items-center gap-3 bg-accent px-8 py-4 text-sm font-medium uppercase tracking-widest text-paper transition-colors hover:bg-accent-dark"
      >
        {dict.contact.formSubmit}
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}

const inputClass =
  "w-full border-0 border-b border-ink/20 bg-transparent py-3 text-ink transition-colors placeholder:text-ink/40 focus:border-accent focus:outline-none focus:ring-0";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-widest2 text-ink/50">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
