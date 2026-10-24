"use client";

import { useMemo } from "react";

interface Particle {
  id: number;
  size: number;
  left: number;
  bottom: number;
  dur: string;
  delay: string;
  drift: string;
  maxOpacity: number;
}

export function DustParticles() {
  // Generate 18 deterministic particles for SSR consistency
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 18 }, (_, i) => {
      // Deterministic pseudo-random generation based on index
      const seed = (i * 9301 + 49297) % 233280;
      const rnd1 = seed / 233280;
      const rnd2 = ((seed * 9301 + 49297) % 233280) / 233280;
      const rnd3 = ((seed * 7 + 13) % 100) / 100;

      const size = Math.round((rnd1 * 3.5 + 2) * 10) / 10;
      const left = Math.round(rnd2 * 100);
      const bottom = Math.round(rnd3 * 30);
      const dur = (rnd1 * 5 + 6.5).toFixed(1) + "s";
      const delay = (rnd2 * 7.5).toFixed(1) + "s";
      const drift = Math.round(rnd3 * 50 - 25) + "px";
      const maxOpacity = Math.round((rnd1 * 0.25 + 0.18) * 100) / 100;

      return {
        id: i,
        size,
        left,
        bottom,
        dur,
        delay,
        drift,
        maxOpacity,
      };
    });
  }, []);

  return (
    <div className="dust-particles" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="dust-particle"
          style={
            {
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              bottom: `${p.bottom}%`,
              "--dur": p.dur,
              "--delay": p.delay,
              "--drift": p.drift,
              "--max-opacity": p.maxOpacity,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
