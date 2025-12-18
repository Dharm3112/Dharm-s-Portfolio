export function ProjectsPreview() {
  return (
    <section
      id="projects"
      className="mt-12 text-sm text-zinc-200"
    >
      <h2 className="text-base font-semibold uppercase tracking-[0.25em] text-zinc-400">
        Projects
      </h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <a
          href="https://github.com/Dharm3112/IntelliCircle"
          target="_blank"
          rel="noreferrer"
          className="block h-full rounded-lg border border-white/5 bg-zinc-950/60 p-4 hover:border-accent hover:bg-zinc-900/80 transition-colors"
        >
          <h3 className="text-sm font-semibold text-white">IntelliCircle</h3>
          <p className="mt-1 text-xs text-zinc-400">
            AI-powered productivity and collaboration hub, combining task
            management, notes, and smart insights in a single workspace.
          </p>
          <p className="mt-2 text-[11px] text-zinc-500">
            Next.js · TypeScript · AI workflows
          </p>
        </a>

        <a
          href="https://github.com/Dharm3112/EduMetrics"
          target="_blank"
          rel="noreferrer"
          className="block h-full rounded-lg border border-white/5 bg-zinc-950/60 p-4 hover:border-accent hover:bg-zinc-900/80 transition-colors"
        >
          <h3 className="text-sm font-semibold text-white">EduMetrics</h3>
          <p className="mt-1 text-xs text-zinc-400">
            Python-based student performance dashboard for automated grading,
            PDF report cards, and interactive visualizations for educators.
          </p>
          <p className="mt-2 text-[11px] text-zinc-500">
            Python · Pandas · NumPy · Matplotlib · Streamlit
          </p>
        </a>

        <a
          href="https://github.com/Dharm3112/TicketHive"
          target="_blank"
          rel="noreferrer"
          className="block h-full rounded-lg border border-white/5 bg-zinc-950/60 p-4 hover:border-accent hover:bg-zinc-900/80 transition-colors"
        >
          <h3 className="text-sm font-semibold text-white">TicketHive</h3>
          <p className="mt-1 text-xs text-zinc-400">
            Full-stack Django movie ticketing platform with seat selection,
            payments-ready architecture, and dark-themed responsive UI.
          </p>
          <p className="mt-2 text-[11px] text-zinc-500">
            Django · HTML · CSS · PostgreSQL
          </p>
        </a>

        <a
          href="https://github.com/Dharm3112/Serenipy"
          target="_blank"
          rel="noreferrer"
          className="block h-full rounded-lg border border-white/5 bg-zinc-950/60 p-4 hover:border-accent hover:bg-zinc-900/80 transition-colors"
        >
          <h3 className="text-sm font-semibold text-white">Serenipy</h3>
          <p className="mt-1 text-xs text-zinc-400">
            Wellness and mindfulness assistant built with Python, focused on
            guided routines, habit tracking, and mood-aware recommendations.
          </p>
          <p className="mt-2 text-[11px] text-zinc-500">
            Python · Data processing · CLI / desktop tooling
          </p>
        </a>

        <a
          href="https://github.com/Dharm3112/RetailPulse"
          target="_blank"
          rel="noreferrer"
          className="block h-full rounded-lg border border-white/5 bg-zinc-950/60 p-4 hover:border-accent hover:bg-zinc-900/80 transition-colors"
        >
          <h3 className="text-sm font-semibold text-white">RetailPulse</h3>
          <p className="mt-1 text-xs text-zinc-400">
            Retail analytics toolkit for sales trends, product performance, and
            customer insights with clean dashboards and CSV-based workflows.
          </p>
          <p className="mt-2 text-[11px] text-zinc-500">
            Python · Pandas · Data visualization
          </p>
        </a>

        <a
          href="https://github.com/Dharm3112/WaterPulse"
          target="_blank"
          rel="noreferrer"
          className="block h-full rounded-lg border border-white/5 bg-zinc-950/60 p-4 hover:border-accent hover:bg-zinc-900/80 transition-colors"
        >
          <h3 className="text-sm font-semibold text-white">WaterPulse</h3>
          <p className="mt-1 text-xs text-zinc-400">
            Water quality and consumption monitoring project that tracks usage
            patterns and visualizes metrics for sustainability insights.
          </p>
          <p className="mt-2 text-[11px] text-zinc-500">
            Python · Data analysis · Dashboards
          </p>
        </a>
      </div>
    </section>
  );
}


