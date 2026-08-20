import { useEffect, useRef } from "react";
import { useTheme } from "../lib/theme";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hot: boolean;
};

export function NetworkBg() {
  const ref = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mouse = { x: -9999, y: -9999 };
    let nodes: Node[] = [];
    let raf = 0;
    let w = 0;
    let h = 0;

    const spawn = () => {
      const count = Math.min(140, Math.floor((w * h) / 14000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() < 0.18 ? 2.4 : 1.5,
        hot: Math.random() < 0.12,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      spawn();
    };

    const dark = theme === "dark";
    const ink = dark ? "155, 176, 182" : "74, 96, 104";
    const hot = dark ? "255, 77, 166" : "180, 0, 107";

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const linkDist = Math.min(140, w * 0.12);

      for (const n of nodes) {
        if (!reduce) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const d = Math.hypot(dx, dy);
        if (d < 120) {
          n.x += (dx / (d || 1)) * 0.35;
          n.y += (dy / (d || 1)) * 0.35;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist > linkDist) continue;
          const t = 1 - dist / linkDist;
          const glow = a.hot || b.hot;
          ctx.strokeStyle = glow
            ? `rgba(${hot}, ${0.18 * t})`
            : `rgba(${ink}, ${0.16 * t})`;
          ctx.lineWidth = glow ? 1.1 : 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const n of nodes) {
        const near = Math.hypot(n.x - mouse.x, n.y - mouse.y) < 90;
        ctx.fillStyle = n.hot || near ? `rgb(${hot})` : `rgba(${ink}, 0.55)`;
        const s = n.r + (near ? 0.8 : 0);
        ctx.fillRect(n.x - s / 2, n.y - s / 2, s, s);
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [theme]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
