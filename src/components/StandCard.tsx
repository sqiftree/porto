"use client";

import { StatRadar } from "./StatRadar";
import { standStatsData } from "@/data/skills";
import { Sparkles, Shield, Zap } from "lucide-react";

interface StandCardProps {
  className?: string;
  compact?: boolean;
}

export function StandCard({ className = "", compact = false }: StandCardProps) {
  return (
    <div
      className={`relative rounded-editorial bg-surface border border-brass/40 overflow-hidden shadow-2xl transition-all duration-300 hover:border-brass hover:shadow-[0_0_30px_rgba(46,230,214,0.15)] ${className}`}
    >
      {/* Halftone texture background */}
      <div className="absolute inset-0 halftone-overlay pointer-events-none" />

      {/* Decorative Brass Corner Accents */}
      <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-brass/60 pointer-events-none" />
      <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-brass/60 pointer-events-none" />
      <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-brass/60 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-brass/60 pointer-events-none" />

      {/* Card Header & Spec Label */}
      <div className="relative p-5 pb-3 border-b border-brass/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-stand animate-pulse" />
          <span className="font-mono text-[11px] font-bold tracking-widest text-sand uppercase">
            STAND ARCHIVE // NO. 01
          </span>
        </div>
        <div className="px-2 py-0.5 rounded bg-brass/15 border border-brass/40 text-[10px] font-mono font-bold text-sand uppercase tracking-wider">
          SPEC CARD
        </div>
      </div>

      {/* Stand Identity Metadata */}
      <div className="p-5 pb-2 space-y-2 font-mono text-xs">
        <div className="grid grid-cols-[100px_1fr] items-baseline gap-2">
          <span className="text-muted uppercase tracking-wider text-[11px]">STAND USER</span>
          <span className="font-bold text-text tracking-wide">YASHIF VICTORIAWAN</span>
        </div>
        <div className="grid grid-cols-[100px_1fr] items-baseline gap-2">
          <span className="text-muted uppercase tracking-wider text-[11px]">ALIAS</span>
          <span className="font-semibold text-sand tracking-wide">sqiftree</span>
        </div>
        <div className="grid grid-cols-[100px_1fr] items-baseline gap-2">
          <span className="text-muted uppercase tracking-wider text-[11px]">STAND</span>
          <span className="font-poster text-stand text-sm tracking-widest uppercase text-shadow-sm">
            KING KRULE
          </span>
        </div>
        <div className="grid grid-cols-[100px_1fr] items-baseline gap-2">
          <span className="text-muted uppercase tracking-wider text-[11px]">TYPE</span>
          <span className="text-text/90 font-medium">Companion / Long-range</span>
        </div>
      </div>

      {/* Radar Chart Centerpiece */}
      <div className="px-2 py-3 flex justify-center items-center">
        <StatRadar data={standStatsData} size={compact ? 270 : 300} />
      </div>

      {/* Stand Abilities Footer */}
      <div className="p-4 pt-3 border-t border-brass/20 bg-bg/40">
        <div className="text-[10px] font-mono uppercase text-muted tracking-widest mb-2 flex items-center justify-between">
          <span>SPECIAL ABILITIES</span>
          <span className="text-sand">ACTIVE STATS</span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center font-mono">
          <div className="p-1.5 rounded bg-surface/80 border border-border/80 text-[10px]">
            <div className="text-stand font-bold tracking-wider">REVERB SHOT</div>
            <div className="text-[9px] text-muted">Primary Fire</div>
          </div>
          <div className="p-1.5 rounded bg-surface/80 border border-border/80 text-[10px]">
            <div className="text-sand font-bold tracking-wider">ECHO PULSE</div>
            <div className="text-[9px] text-muted">Hotspot Scan</div>
          </div>
          <div className="p-1.5 rounded bg-surface/80 border border-border/80 text-[10px]">
            <div className="text-accent font-bold tracking-wider">DUSK DASH</div>
            <div className="text-[9px] text-muted">Sprint Trail</div>
          </div>
        </div>
      </div>
    </div>
  );
}
