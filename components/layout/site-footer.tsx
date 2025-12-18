export function SiteFooter() {
  return (
    <footer className="flex items-center justify-between px-6 py-4 text-xs text-zinc-400">
      <span>&copy; {new Date().getFullYear()} Dharm Patel. All rights reserved.</span>
      <span className="hidden sm:inline">
        Built with Next.js, Tailwind CSS, and a liquid background effect.
      </span>
    </footer>
  );
}


