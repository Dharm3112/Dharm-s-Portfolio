export function Skills() {
  return (
    <section
      id="skills"
      className="mt-12 text-sm text-zinc-200"
    >
      <h2 className="text-base font-semibold uppercase tracking-[0.25em] text-zinc-400">
        Skills
      </h2>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        <div className="space-y-1.5 rounded-lg border border-white/5 bg-zinc-950/60 p-3">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-300">
            Frontend Development &amp; UI/UX
          </h3>
          <p className="text-xs text-zinc-400">
            <span className="font-semibold text-zinc-300">Languages:</span> JavaScript (ES6+), TypeScript, HTML5,
            CSS3
          </p>
          <p className="text-xs text-zinc-400">
            <span className="font-semibold text-zinc-300">Frameworks &amp; Libraries:</span> Next.js, Tailwind CSS,
            Bootstrap, jQuery
          </p>
          <p className="text-xs text-zinc-400">
            <span className="font-semibold text-zinc-300">Design Tools:</span> Figma, Canva
          </p>
        </div>

        <div className="space-y-1.5 rounded-lg border border-white/5 bg-zinc-950/60 p-3">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-300">
            Backend Engineering &amp; Databases
          </h3>
          <p className="text-xs text-zinc-400">
            <span className="font-semibold text-zinc-300">Server-side:</span> Node.js, Django (Python), PHP,
            Socket.io
          </p>
          <p className="text-xs text-zinc-400">
            <span className="font-semibold text-zinc-300">Databases:</span> PostgreSQL, MySQL, MongoDB, SQLite
          </p>
          <p className="text-xs text-zinc-400">
            <span className="font-semibold text-zinc-300">Web Servers:</span> Apache
          </p>
        </div>

        <div className="space-y-1.5 rounded-lg border border-white/5 bg-zinc-950/60 p-3">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-300">
            Core Programming &amp; Data Science
          </h3>
          <p className="text-xs text-zinc-400">
            <span className="font-semibold text-zinc-300">Languages:</span> Python, Java, C, C++
          </p>
          <p className="text-xs text-zinc-400">
            <span className="font-semibold text-zinc-300">Data Analysis:</span> Pandas, NumPy, Matplotlib
          </p>
          <p className="text-xs text-zinc-400">
            <span className="font-semibold text-zinc-300">Environment:</span> Anaconda
          </p>
        </div>

        <div className="space-y-1.5 rounded-lg border border-white/5 bg-zinc-950/60 p-3">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-300">
            Tools, Deployment &amp; Infrastructure
          </h3>
          <p className="text-xs text-zinc-400">
            <span className="font-semibold text-zinc-300">Version Control:</span> Git, GitHub
          </p>
          <p className="text-xs text-zinc-400">
            <span className="font-semibold text-zinc-300">Cloud &amp; Hosting:</span> Netlify, Render
          </p>
          <p className="text-xs text-zinc-400">
            <span className="font-semibold text-zinc-300">Networking:</span> Cisco Packet Tracer
          </p>
        </div>
      </div>
    </section>
  );
}


