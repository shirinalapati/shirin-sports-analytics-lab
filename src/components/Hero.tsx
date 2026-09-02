import { useEffect, useState } from "react";

const PHRASES = [
  "building the 2026 mls value index",
  "scoring keepers beyond goals allowed",
  "forecasting nba player trajectories",
  "measuring nfl pre-snap predictability",
  "ranking college basketball development",
  "scoring hidden nba impact",
  "modeling nhl expected goals",
  "measuring mlb pitch stuff+",
  "building sports analytics for free",
];

export function Hero() {
  const text = useTypewriter(PHRASES);

  return (
    <section
      id="top"
      className="relative z-10 max-w-2xl px-6 pb-6 pt-28 md:px-12 lg:px-20"
    >
      <p className="reveal font-sans text-[11px] uppercase tracking-[0.22em] text-[var(--muted)]">
        shirin alapati · portfolio · 2026
      </p>
      <h1 className="reveal mt-4 font-display text-[2.35rem] font-semibold leading-[1.05] tracking-[-0.045em] text-[var(--fg)] sm:text-5xl md:text-[3.4rem]">
        shirin&apos;s sports analytics lab.
      </h1>
      <p className="reveal mt-4 max-w-xl font-sans text-base leading-relaxed text-[var(--fg)]/85 delay-100 sm:text-lg">
        i build insightful sports analytics across baseball, basketball, football,
        soccer, and hockey — for free.
      </p>

      <p className="reveal mt-8 font-mono text-[13px] text-[var(--fg)] delay-200 sm:text-sm">
        <span className="text-[var(--muted)]">currently:</span> {text}
        <span className="caret ml-0.5 text-[var(--accent)]">|</span>
      </p>

      <div className="reveal mt-10 flex flex-wrap items-center justify-between gap-6 delay-300">
        <a
          href="#baseball"
          className="group inline-flex items-center gap-3 text-sm tracking-wide"
        >
          <span className="underline-swap">selected work</span>
          <span className="h-px w-8 bg-[var(--fg)]/40 transition-colors group-hover:bg-[var(--accent)]" />
          <span className="font-serif italic text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]">
            ↓
          </span>
        </a>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
          fig. 01 — san josé, ca
        </p>
      </div>
    </section>
  );
}

function useTypewriter(phrases: string[]) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setSub(phrases[0]);
      return;
    }

    const current = phrases[index];
    const delay = deleting ? 28 : sub === current ? 1800 : 42;
    const id = window.setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, sub.length + 1);
        setSub(next);
        if (next === current) setDeleting(true);
      } else {
        const next = current.slice(0, Math.max(0, sub.length - 1));
        setSub(next);
        if (next.length === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % phrases.length);
        }
      }
    }, delay);
    return () => window.clearTimeout(id);
  }, [deleting, index, phrases, sub]);

  return sub;
}
