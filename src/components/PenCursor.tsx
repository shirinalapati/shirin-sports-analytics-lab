import { useEffect, useRef } from "react";
import { useTheme } from "../lib/theme";

const TAPER =
  "M 0 0 L -10 -4 L -26 -2.6 Q -28 0 -26 2.6 L -10 4 Z";
const GLEAM = "M -10 -4 L -24 -2 Q -25 -1.5 -24 -1 L -10 -3 Z";

type Trail = { x: number; y: number; life: number };

export function PenCursor() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    document.body.classList.add("has-custom-cursor");

    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: mouse.x, y: mouse.y };
    const vel = { x: 0, y: 0 };
    let angle = 0;
    let scale = 1;
    let hovering = false;
    let raf = 0;
    const trail: Trail[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const isInteractive = (el: EventTarget | null) => {
      if (!(el instanceof Element)) return false;
      return Boolean(
        el.closest("a, button, [data-cursor='hover'], input, textarea, select"),
      );
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      hovering = isInteractive(e.target);
    };

    const tick = () => {
      pos.x += (mouse.x - pos.x) * 0.28;
      pos.y += (mouse.y - pos.y) * 0.28;
      vel.x = mouse.x - pos.x;
      vel.y = mouse.y - pos.y;
      const speed = Math.hypot(vel.x, vel.y);
      if (speed > 0.4) {
        const next = Math.atan2(vel.y, vel.x);
        let diff = next - angle;
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;
        angle += diff * 0.22;
      }
      const targetScale = hovering ? 1.35 : 1;
      scale += (targetScale - scale) * 0.18;

      wrap.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) rotate(${angle}rad) scale(${scale})`;

      trail.push({ x: pos.x, y: pos.y, life: 1 });
      if (trail.length > 28) trail.shift();
      for (const t of trail) t.life *= 0.86;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      const fill =
        theme === "dark" ? "rgba(230, 238, 239, " : "rgba(11, 26, 32, ";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      if (trail.length > 1) {
        ctx.beginPath();
        ctx.moveTo(trail[0].x, trail[0].y);
        for (let i = 1; i < trail.length; i++) {
          ctx.lineTo(trail[i].x, trail[i].y);
        }
        ctx.strokeStyle = `${fill}${0.12 + (hovering ? 0.08 : 0)})`;
        ctx.lineWidth = hovering ? 2.2 : 1.4;
        ctx.stroke();
      }

      raf = requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [theme]);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[9998] hidden md:block"
      />
      <div
        ref={wrapRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[10000] hidden h-9 w-9 will-change-transform md:block"
        style={{ transform: "translate3d(-100px,-100px,0)" }}
      >
        <svg viewBox="-32 -8 40 16" width="36" height="36" className="block overflow-visible">
          <path d={TAPER} fill="var(--cursor-fill)" />
          <line
            x1="-2"
            y1="0"
            x2="-20"
            y2="0"
            stroke="#ffffff"
            strokeOpacity="0.4"
            strokeWidth="0.6"
          />
          <circle cx="-14" cy="0" r="1.3" fill="#ffffff" fillOpacity="0.4" />
          <path d={GLEAM} fill="#ffffff" fillOpacity="0.12" />
        </svg>
      </div>
    </>
  );
}
