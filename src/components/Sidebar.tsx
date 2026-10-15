"use client";

import { Github, Linkedin, Mail, ExternalLink, Sparkles, Activity, Disc, Instagram, Play } from "lucide-react";

interface SidebarProps {
  onContactClick: () => void;
  onTabChange?: (tab: string) => void;
}

export function Sidebar({ onContactClick, onTabChange }: SidebarProps) {
  const interests = [
    "Frontend Engineering",
    "UAV GCS Telemetry",
    "Bengawan UV Team",
    "Narash BUV (KRTI 2026)",
    "MAVLink Protocol",
    "QA & Automated Testing",
    "Next.js App Router",
    "Kotlin Android",
    "Linux & Docker",
  ];

  // 12-week simulated activity matrix (mini GitHub / Last.fm scrobble chart)
  const activityWeeks = Array.from({ length: 12 }, (_, col) => {
    return Array.from({ length: 7 }, (_, row) => {
      const val = (col * 3 + row * 2 + 1) % 5;
      return val > 3 ? 3 : val;
    });
  });

  const getHeatColor = (level: number) => {
    switch (level) {
      case 3:
        return "bg-accent";
      case 2:
        return "bg-accent/70";
      case 1:
        return "bg-accent/30";
      default:
        return "bg-bg border border-border/60";
    }
  };

  return (
    <aside className="space-y-4">
      {/* Quick Actions (Exact replica of "Play your library / mix / recommendations" from Last.fm screenshot) */}
      <div className="lastfm-card p-4 rounded-xl space-y-2.5 bg-surface border border-border shadow-2xs">
        <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-muted pb-2 border-b border-border">
          Aksi Cepat &middot; Quick Play
        </h3>
        <div className="space-y-1.5 text-xs font-mono">
          <button
            onClick={() => onTabChange?.("projects")}
            type="button"
            className="w-full flex items-center justify-between p-2.5 rounded-lg bg-bg hover:bg-surface-hover border border-border/80 text-text transition-colors group text-left"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span className="font-semibold text-xs">Jelajahi Semua Proyek</span>
            </div>
            <span className="text-[11px] text-text-muted">5 Rilis</span>
          </button>

          <button
            onClick={() => onTabChange?.("qa-lab")}
            type="button"
            className="w-full flex items-center justify-between p-2.5 rounded-lg bg-bg hover:bg-surface-hover border border-border/80 text-text transition-colors group text-left"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span className="font-semibold text-xs">Audit QA &amp; Testing</span>
            </div>
            <span className="text-[11px] text-emerald-600 font-bold">100% Pass</span>
          </button>

          <button
            onClick={onContactClick}
            type="button"
            className="w-full flex items-center justify-between p-2.5 rounded-lg bg-bg hover:bg-surface-hover border border-border/80 text-text transition-colors group text-left"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-full bg-highlight text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                <Mail className="w-3 h-3" />
              </div>
              <span className="font-semibold text-xs">Hubungi Langsung</span>
            </div>
            <span className="text-[11px] text-highlight">Email</span>
          </button>
        </div>
      </div>

      {/* Status Card */}
      <div className="lastfm-card p-4 rounded-xl space-y-2 border-l-4 border-l-accent bg-surface border border-border shadow-2xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-text">
            Status Ketersediaan
          </span>
        </div>
        <p className="text-xs text-text leading-relaxed font-medium">
          Mahasiswa Informatika UNS &middot; Aktif di Bengawan UV Team (KRTI 2026) &middot; Terbuka untuk Magang (Frontend / QA / UAV GCS).
        </p>
        <span className="inline-block text-[10px] font-mono text-highlight bg-bg px-2 py-0.5 rounded border border-border">
          Surakarta &amp; Remote Available
        </span>
      </div>

      {/* Verified Profile Links */}
      <div className="lastfm-card p-4 rounded-xl space-y-3 bg-surface border border-border shadow-2xs">
        <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-muted pb-2 border-b border-border">
          Profil Resmi Terverifikasi
        </h3>
        <div className="space-y-1.5 text-xs font-mono">
          {/* GitHub */}
          <a
            href="https://github.com/sqiftree"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2 rounded hover:bg-surface-hover text-text transition-colors group"
          >
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
              <span>GitHub</span>
            </div>
            <span className="text-text-muted text-[11px] flex items-center gap-1 group-hover:text-accent">
              @sqiftree
              <ExternalLink className="w-3 h-3 opacity-60" />
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yashif-victoriawan/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2 rounded hover:bg-surface-hover text-text transition-colors group"
          >
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
              <span>LinkedIn</span>
            </div>
            <span className="text-text-muted text-[11px] flex items-center gap-1 group-hover:text-accent">
              yashif-victoriawan
              <ExternalLink className="w-3 h-3 opacity-60" />
            </span>
          </a>

          {/* Last.fm */}
          <a
            href="https://www.last.fm/user/sqiftree"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2 rounded hover:bg-surface-hover text-text transition-colors group"
          >
            <div className="flex items-center gap-2">
              <Disc className="w-4 h-4 text-accent" />
              <span className="text-accent font-semibold">Last.fm Profile</span>
            </div>
            <span className="text-highlight text-[11px] flex items-center gap-1 font-bold">
              sqiftree
              <ExternalLink className="w-3 h-3 opacity-60" />
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/yashifvictoriawan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-2 rounded hover:bg-surface-hover text-text transition-colors group"
          >
            <div className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
              <span>Instagram</span>
            </div>
            <span className="text-text-muted text-[11px] flex items-center gap-1 group-hover:text-accent">
              @yashifvictoriawan
              <ExternalLink className="w-3 h-3 opacity-60" />
            </span>
          </a>
        </div>
      </div>

      {/* Mini Activity Heatmap Chart */}
      <div className="lastfm-card p-4 rounded-xl space-y-2.5 bg-surface border border-border shadow-2xs">
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-highlight" />
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-text">
              Activity Heatmap
            </h3>
          </div>
          <span className="text-[10px] font-mono text-text-muted">12 Minggu</span>
        </div>

        {/* Heatmap Grid */}
        <div className="flex gap-1 justify-between pt-1 overflow-x-auto no-scrollbar">
          {activityWeeks.map((week, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-1">
              {week.map((level, dIdx) => (
                <div
                  key={dIdx}
                  className={`w-2.5 h-2.5 rounded-sm ${getHeatColor(level)} transition-colors`}
                  title={`Aktivitas minggu ${wIdx + 1}, hari ${dIdx + 1}`}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-text-muted pt-1">
          <span>Less</span>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-sm bg-bg border border-border" />
            <span className="w-2 h-2 rounded-sm bg-accent/30" />
            <span className="w-2 h-2 rounded-sm bg-accent/70" />
            <span className="w-2 h-2 rounded-sm bg-accent" />
          </div>
          <span>More</span>
        </div>
      </div>

      {/* Focus & Research Tags */}
      <div className="lastfm-card p-4 rounded-xl space-y-2.5 bg-surface border border-border shadow-2xs">
        <div className="flex items-center gap-1.5 pb-2 border-b border-border">
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-text">
            Fokus &amp; Minat Riset
          </h3>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {interests.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg border border-border text-text-muted hover:border-accent hover:text-text transition-colors"
            >
              #{tag.toLowerCase().replace(/[\s\(\)]+/g, "-")}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
