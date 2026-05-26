import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center bg-ink text-paper">
      <div className="container-x">
        <p className="font-serif text-[clamp(6rem,20vw,16rem)] leading-none text-accent-light">
          404
        </p>
        <h1 className="mt-6 display-3 max-w-xl">
          La página que buscás no existe.
        </h1>
        <Link
          href="/es"
          className="group mt-10 inline-flex items-center gap-3 border border-paper/30 px-8 py-4 text-sm font-medium uppercase tracking-widest transition-colors hover:bg-paper hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
