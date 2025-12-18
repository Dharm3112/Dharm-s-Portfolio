"use client";

import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <Link href="/" className="flex items-center gap-2">
        <div className="relative h-7 w-7 overflow-hidden rounded-full border border-accent/60 bg-black">
          <Image
            src="/images/GitHub%20Profile%20Pic.jpg"
            alt="Dharm Patel logo"
            fill
            sizes="28px"
            className="object-cover"
            priority
          />
        </div>
        <span className="text-sm font-semibold tracking-tight uppercase text-accent">
          Dharm Patel
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm text-zinc-200">
        <Link href="#projects" className="hover:text-accent transition-colors">
          Projects
        </Link>
        <Link href="#contact" className="hover:text-accent transition-colors">
          Contact
        </Link>
      </nav>
    </header>
  );
}


