"use client";

import { useState } from "react";
import { Mail, Check, Play, Github, Linkedin, Disc, ArrowUpRight, Award, FolderGit2, CheckCircle2 } from "lucide-react";

interface ProfileHeaderProps {
  onContactClick: () => void;
  onOpenTopProject: () => void;
}

export function ProfileHeader({ onContactClick, onOpenTopProject }: ProfileHeaderProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("yashif.vkt@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative bg-surface transition-colors">
      {/* 1. Cinematic Dusk Twilight Sky Banner (Last.fm User Profile Banner) */}
      <div className="relative w-full h-44 sm:h-52 bg-gradient-to-r from-[#0F141C] via-[#182030] to-[#111722] overflow-hidden border-b border-border/60">
        {/* Soft twilight horizon with subtle accent and amber sky illumination */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-accent/25 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -bottom-8 -left-10 w-96 h-36 bg-highlight/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-80 h-32 bg-accent/15 rounded-full blur-2xl pointer-events-none" />

        {/* Top Folio Micro-Info Strip */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-3 flex items-center justify-between text-[11px] font-mono text-white/60">
          <div className="flex items-center gap-2">
            <span className="text-white/90 font-medium">SURAKARTA, ID</span>
            <span>&middot;</span>
            <span>UNS INFORMATIKA &apos;24</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-white/80">AVAILABLE FOR INTERNSHIP 2026</span>
          </div>
        </div>

        {/* Content inside banner (Bottom-aligned: Profile identity text + Top Project widget) */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-full flex items-end justify-between pb-4 sm:pb-5">
          {/* Left spacing for circular avatar overlap */}
          <div className="pl-32 sm:pl-36 md:pl-40 text-left">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-none drop-shadow-sm font-heading">
                sqiftree
              </h1>
              <span className="text-white/40 text-lg hidden sm:inline">&middot;</span>
              <span className="text-xs sm:text-sm font-medium text-white/80 hidden sm:inline font-sans">
                Yashif Victoriawan
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/70 mt-1 font-sans">
              Vic &middot; S1 Informatika UNS &apos;24 &middot; Bengawan UV Team (KRTI)
            </p>
          </div>

          {/* Right: TOP PROJECT Widget (Exact replica of TOP TRACK widget in Last.fm screenshot) */}
          <div
            onClick={onOpenTopProject}
            className="hidden md:flex items-center gap-3 bg-black/45 hover:bg-black/60 border border-white/15 hover:border-accent/60 p-2 rounded-xl backdrop-blur-md cursor-pointer transition-all duration-200 group text-left"
            title="Buka Top Project: Narash BUV GCS"
          >
            <div className="relative w-12 h-12 rounded-lg bg-accent flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
              <span className="font-heading font-extrabold text-white text-base">NB</span>
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                <Play className="w-4 h-4 text-white fill-white group-hover:scale-110 transition-transform" />
              </div>
            </div>

            <div className="space-y-0.5 pr-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/60 block">
                Top Project
              </span>
              <div className="text-xs font-semibold text-white group-hover:text-accent transition-colors truncate max-w-[170px]">
                Narash BUV — GCS
              </div>
              <div className="text-[11px] text-white/75 truncate max-w-[170px]">
                Bengawan UV UNS
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Profile Header Row on Clean Bright Canvas */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Circular Avatar Overlapping Banner (Last.fm circular portrait) */}
        <div className="absolute -top-16 sm:-top-20 left-4 sm:left-6 z-20">
          <div className="relative group">
            <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full ring-4 ring-surface bg-surface shadow-lg overflow-hidden border border-border">
              <img
                src="https://avatars.githubusercontent.com/u/244948029?v=4"
                alt="sqiftree - Yashif Victoriawan"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-surface flex flex-col items-center justify-center -z-10">
                <span className="font-heading font-extrabold text-3xl text-accent">YV</span>
              </div>
            </div>

            {/* Active Status Beacon */}
            <div
              className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-surface border-2 border-surface flex items-center justify-center shadow-xs"
              title="Status: Aktif Membangun Sistem"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
          </div>
        </div>

        {/* Stats & Quick Action Bar (Mirroring Last.fm's Stats Row from Screenshot) */}
        <div className="pt-3 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border">
          {/* Spacer for avatar on left */}
          <div className="pl-32 sm:pl-36 md:pl-40 flex flex-wrap items-center gap-2 text-xs font-mono">
            <a
              href="https://github.com/sqiftree"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface border border-border hover:border-accent hover:text-accent text-text transition-colors shadow-2xs"
            >
              <Github className="w-3.5 h-3.5" />
              <span>@sqiftree</span>
            </a>

            <a
              href="https://www.last.fm/user/sqiftree"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface border border-border hover:border-accent hover:text-accent text-accent transition-colors shadow-2xs"
            >
              <Disc className="w-3.5 h-3.5" />
              <span>last.fm/sqiftree</span>
            </a>

            <span className="hidden lg:inline-flex items-center px-2 py-1 rounded-md bg-bg border border-border text-[11px] text-text-muted">
              Pull Shark x2 &middot; KRTI Juara 1
            </span>
          </div>

          {/* Real Stats Row from Last.fm + GitHub */}
          <div className="flex flex-wrap items-center justify-between sm:justify-end gap-5 sm:gap-7 text-left">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block">
                Scrobbles
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-text tabular-nums tracking-tight">
                53,773
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block">
                Artists
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-text tabular-nums tracking-tight">
                2,643
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block">
                Projects
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-text tabular-nums tracking-tight">
                5
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block">
                Commits
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-text tabular-nums tracking-tight">
                420+
              </span>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block">
                QA Pass
              </span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-600 tabular-nums tracking-tight">
                100%
              </span>
            </div>

            {/* Red Action Button (Mirroring the red SET OBSESSION button in Last.fm screenshot) */}
            <div className="flex items-center gap-2 pt-1 sm:pt-0">
              <button
                onClick={onContactClick}
                type="button"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-semibold bg-accent hover:bg-accent-hover text-white transition-all shadow-md focus:ring-2 focus:ring-accent"
              >
                <span>HUBUNGI SAYA</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={copyEmail}
                type="button"
                className="p-2.5 rounded-lg border border-border bg-surface hover:bg-surface-hover text-text-muted hover:text-text transition-colors shadow-2xs"
                title="Salin email yashif.vkt@gmail.com"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Mail className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
