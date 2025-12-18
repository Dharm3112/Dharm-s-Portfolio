export function Contact() {
  return (
    <section
      id="contact"
      className="mt-12 pb-16 text-sm text-zinc-200"
    >
      <h2 className="text-base font-semibold uppercase tracking-[0.25em] text-zinc-400">
        Contact
      </h2>
      <p className="mt-4 text-sm text-zinc-300">
        Interested in working together or just want to say hi? Reach out:
      </p>
      <div className="mt-3 space-y-1 text-xs text-zinc-400">
        <p>Email: <span className="text-accent">your.email@example.com</span></p>
        <p>GitHub: <span className="text-accent">github.com/your-username</span></p>
        <p>LinkedIn: <span className="text-accent">linkedin.com/in/your-username</span></p>
      </div>
    </section>
  );
}


