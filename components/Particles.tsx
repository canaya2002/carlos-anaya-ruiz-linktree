"use client";

import { useEffect, useRef } from "react";

export default function Particles() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    let mouse = { x: -1000, y: -1000 };
    let animId: number;

    function mkP() {
      return {
        x: Math.random() * W, y: Math.random() * H,
        s: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        o: Math.random() * 0.3 + 0.08,
        p: Math.random() * Math.PI * 2, ps: Math.random() * 0.015 + 0.004,
      };
    }

    const N = W < 600 ? 35 : 60;
    const particles = Array.from({ length: N }, mkP);

    const onResize = () => { W = canvas.width = innerWidth; H = canvas.height = innerHeight; };
    const onMouse = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener("resize", onResize);
    document.addEventListener("mousemove", onMouse);

    function animate() {
      ctx!.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy; p.p += p.ps;
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 110) { const f = (110 - d) / 110 * 0.7; p.x += (dx / d) * f; p.y += (dy / d) * f; }
        if (p.x < -20 || p.x > W + 20 || p.y < -20 || p.y > H + 20) Object.assign(p, mkP());
        const o = p.o * (0.6 + Math.sin(p.p) * 0.4);
        ctx!.beginPath(); ctx!.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(201,168,76,${o})`; ctx!.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            const o = (1 - d / 90) * 0.045;
            ctx!.beginPath(); ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(201,168,76,${o})`; ctx!.lineWidth = 0.4; ctx!.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    }
    animate();

    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); document.removeEventListener("mousemove", onMouse); };
  }, []);

  return <canvas ref={ref} id="particles-canvas" />;
}
