import { useState } from "react";
import {
  projects,
  sportSections,
  type Project,
} from "../data/projects";

export function Projects() {
  return (
    <>
      {sportSections.map((section) => {
        const items = projects.filter((p) => p.sport === section.id);
        return (
          <section
            key={section.id}
            id={section.id}
            className="relative z-10 max-w-2xl px-6 py-16 first:pt-8 md:px-12 lg:px-20"
          >
            <SectionKicker
              n={section.n}
              title={section.id}
              heading={`${section.id}.`}
            />
            <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {items.map((p) => (
                <ProjectRow key={p.slug} project={p} />
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}

function SectionKicker({
  n,
  title,
  heading,
}: {
  n: string;
  title: string;
  heading: string;
}) {
  return (
    <div className="mb-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
        § {n} — {title}
      </p>
      <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
        {heading}
      </h2>
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="group py-7">
      <p className="font-mono text-[11px] text-[var(--accent)]">{project.dates}</p>
      <div className="mt-1 flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="font-display text-xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-1 md:text-2xl">
          <a href={project.href} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        </h3>
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="underline-swap shrink-0 font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)]"
        >
          {project.hrefLabel} →
        </a>
      </div>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--muted)]">
        {project.blurb}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span
            key={t}
            className="rounded-[4px] border border-[var(--line)] bg-[var(--bg-elev)] px-2 py-0.5 font-mono text-[10px] text-[var(--muted)]"
          >
            {t}
          </span>
        ))}
      </div>
      {project.note && (
        <p className="mt-3 font-mono text-[11px] text-[var(--accent)]">{project.note}</p>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-3 font-mono text-[11px] text-[var(--muted)] hover:text-[var(--fg)]"
      >
        {open ? "less ←" : "more →"}
      </button>
      {open && (
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--fg)]/80">
          {project.detail}
        </p>
      )}
    </article>
  );
}
