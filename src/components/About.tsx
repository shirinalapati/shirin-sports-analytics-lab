import { socials } from "../data/projects";

export function Contact() {
  return (
    <section id="contact" className="relative z-10 max-w-2xl px-6 py-20 md:px-12 lg:px-20">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
        — get in touch
      </p>
      <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
        let&apos;s talk sports and data.
      </h2>
      <div className="mt-6 flex flex-wrap gap-6">
        <a
          href={socials.github}
          target="_blank"
          rel="noreferrer"
          className="underline-swap text-sm"
        >
          github ↗
        </a>
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="underline-swap text-sm"
        >
          linkedin ↗
        </a>
        <a
          href={socials.x}
          target="_blank"
          rel="noreferrer"
          className="underline-swap text-sm"
        >
          x ↗
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 flex max-w-2xl flex-col items-start gap-3 px-6 py-12 md:px-12 lg:px-20">
      <p className="font-mono text-[11px] text-[var(--muted)]">
        © {new Date().getFullYear()} shirin alapati
      </p>
    </footer>
  );
}
