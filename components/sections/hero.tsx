import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="flex flex-col gap-8 text-left">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Dharm Patel
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
          Clean code.{" "}
          <span className="text-accent">Intelligent design.</span>
          <br />
          Seamless experiences.
        </h1>
        <p className="text-sm text-zinc-200 sm:text-base">
          I&apos;m Dharm Patel, a front-end engineer focused on immersive
          interfaces, motion, and clean, scalable design systems.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
        <Link
          href="#projects"
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2 text-sm font-medium text-black shadow-lg shadow-cyan-500/40 transition hover:shadow-cyan-400/60"
        >
          View projects
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link
          href="#contact"
          className="text-sm text-zinc-200 underline-offset-4 hover:underline"
        >
          Let&apos;s work together
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-4 text-xs text-zinc-300 sm:justify-start">
        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur">
          HTML
        </span>
        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur">
          CSS
        </span>
        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur">
          JavaScript
        </span>
        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur">
          TypeScript
        </span>
        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur">
          Python
        </span>
        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur">
          Java
        </span>
        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur">
          PHP
        </span>
        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur">
          Anaconda
        </span>
        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur">
          Bootstrap
        </span>
        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur">
          Tailwind CSS
        </span>
        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur">
          Node.js
        </span>
        <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur">
          Next.js
        </span>
      </div>
    </section>
  );
}


