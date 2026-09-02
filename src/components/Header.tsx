import { useEffect, useState } from "react";
import { socials } from "../data/projects";
import { useTheme } from "../lib/theme";

const links = [
  { href: "#baseball", label: "baseball" },
  { href: "#basketball", label: "basketball" },
  { href: "#football", label: "football" },
  { href: "#soccer", label: "soccer" },
  { href: "#hockey", label: "hockey" },
];

export function Header() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-4 md:px-8 ${
          scrolled ? "backdrop-blur-[2px]" : ""
        }`}
      >
        <a href="#top" className="group flex items-baseline gap-1.5" aria-label="home">
          <span className="font-serif text-[1.7rem] italic leading-none tracking-tight text-[var(--fg)]">
            sa
          </span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)] align-middle transition-transform group-hover:scale-125" />
        </a>

        <nav className="hidden items-center gap-5 lg:gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-sm tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg-elev)] text-[var(--fg)] shadow-[0_1px_6px_rgba(11,26,32,0.08)] md:flex"
          >
            <GitHubIcon />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg-elev)] text-[var(--fg)] shadow-[0_1px_6px_rgba(11,26,32,0.08)] md:flex"
          >
            <LinkedInIcon />
          </a>
          <a
            href={socials.x}
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg-elev)] text-[var(--fg)] shadow-[0_1px_6px_rgba(11,26,32,0.08)] md:flex"
          >
            <XIcon />
          </a>
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark mode"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg-elev)] text-[var(--fg)] shadow-[0_1px_6px_rgba(11,26,32,0.08)]"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--bg-elev)] text-[var(--fg)] shadow-[0_1px_6px_rgba(11,26,32,0.08)] md:hidden"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-30 flex flex-col justify-end bg-[var(--bg)]/95 px-6 pb-10 pt-24 md:hidden">
          <nav className="flex flex-col gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl font-semibold tracking-tight"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-4 flex gap-4">
              <a href={socials.github} target="_blank" rel="noreferrer" className="underline-swap text-sm">
                github
              </a>
              <a href={socials.linkedin} target="_blank" rel="noreferrer" className="underline-swap text-sm">
                linkedin
              </a>
              <a href={socials.x} target="_blank" rel="noreferrer" className="underline-swap text-sm">
                x
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12.4c0 5.26 3.4 9.72 8.12 11.3.6.1.82-.26.82-.58v-2.02c-3.3.73-4-1.44-4-1.44-.54-1.38-1.32-1.75-1.32-1.75-1.08-.75.08-.73.08-.73 1.2.09 1.83 1.25 1.83 1.25 1.06 1.84 2.78 1.31 3.46 1 .1-.79.41-1.31.75-1.61-2.64-.3-5.42-1.34-5.42-5.96 0-1.32.46-2.4 1.23-3.24-.12-.3-.54-1.53.12-3.18 0 0 1-.33 3.3 1.24a11.3 11.3 0 0 1 6 0c2.28-1.57 3.28-1.24 3.28-1.24.67 1.65.25 2.88.13 3.18.77.84 1.22 1.92 1.22 3.24 0 4.63-2.78 5.65-5.44 5.95.43.38.81 1.12.81 2.26v3.35c0 .32.22.7.83.58A11.5 11.5 0 0 0 23.5 12.4 11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5A2.48 2.48 0 1 1 2.5 6a2.48 2.48 0 0 1 2.48-2.5zM3 8.75h3.96V21H3zM9.34 8.75H13.1v1.67h.05c.52-.98 1.8-2.02 3.7-2.02 3.96 0 4.7 2.6 4.7 6V21h-3.96v-5.46c0-1.3-.02-2.98-1.82-2.98-1.82 0-2.1 1.42-2.1 2.88V21H9.34z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
