"use client";

import { useCallback, useRef, type ReactNode } from "react";

interface Props { href: string; className: string; children: ReactNode; }

export default function TiltCard({ href, className, children }: Props) {
  const el = useRef<HTMLAnchorElement>(null);

  const onMove = useCallback((e: React.MouseEvent) => {
    const card = el.current; if (!card) return;
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const cx = r.width / 2, cy = r.height / 2;
    card.style.transform = `translateY(-3px) rotateX(${(y - cy) / cy * -3}deg) rotateY(${(x - cx) / cx * 3}deg) scale(1.015)`;
    card.style.background = `radial-gradient(circle at ${x / r.width * 100}% ${y / r.height * 100}%, rgba(201,168,76,0.06) 0%, transparent 45%), rgba(255,255,255,0.035)`;
  }, []);

  const onLeave = useCallback(() => {
    const card = el.current; if (!card) return;
    card.style.transform = ""; card.style.background = "";
  }, []);

  return (
    <a ref={el} href={href} className={className} target="_blank" rel="noopener noreferrer"
      onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </a>
  );
}
