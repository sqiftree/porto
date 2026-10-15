"use client";

import { useState, useEffect } from "react";
import { testCasesData, qaMetrics } from "@/data/qa-report";
import { ShieldCheck, CheckCircle2, Gauge, Eye, Monitor, Cpu, Sparkles, Filter } from "lucide-react";

export function QATestingTab() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [clientInfo, setClientInfo] = useState({
    viewport: "Mengukur...",
    prefersReducedMotion: false,
    colorScheme: "dark",
  });

  useEffect(() => {
    const updateClientInfo = () => {
      setClientInfo({
        viewport: `${window.innerWidth} x ${window.innerHeight} px`,
        prefersReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        colorScheme: document.documentElement.classList.contains("light") ? "Light" : "Dark",
      });
    };
    updateClientInfo();
    window.addEventListener("resize", updateClientInfo);
    return () => window.removeEventListener("resize", updateClientInfo);
  }, []);

  const categories = [
    "All",
    "Visual & Responsive",
    "Accessibility (a11y)",
    "Performance & Core Web Vitals",
    "State & Theme",
    "Motion Preferences",
  ];

  const filteredTests = testCasesData.filter((tc) =>
    selectedFilter === "All" ? true : tc.category === selectedFilter
  );

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="lastfm-card p-5 rounded-lg border-l-4 border-l-emerald-500 space-y-2">
        <div className="flex items-center gap-2 mb-1">
          <ShieldCheck className="w-4 h-4 text-emerald-500" />
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-text-muted">
            Shift-Left Verification &middot; Audit Lab
          </span>
        </div>
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text tracking-tight">
          Metodologi &amp; Audit Mutu Portofolio
        </h2>
        <p className="text-xs sm:text-sm text-text-muted leading-relaxed font-sans">
          Sebagai engineer dengan fokus pada Frontend dan Quality Assurance (QA), setiap komponen diuji secara sistematis menggunakan metodologi <em>Shift-Left Testing</em>. Mulai dari audit aksesibilitas otomatis, kepatuhan rasio kontras WCAG AA, penanganan <code>prefers-reduced-motion</code>, hingga verifikasi layout di berbagai dimensi viewport.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="lastfm-card p-3.5 rounded-lg">
          <div className="flex items-center justify-between text-text-muted text-[11px] font-mono uppercase">
            <span>Pass Rate</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <span className="text-2xl font-mono font-bold text-text tabular-nums">
            {qaMetrics.overallTestPassRate}
          </span>
          <span className="text-[10px] text-text-muted block font-mono">
            Zero critical regressions
          </span>
        </div>

        <div className="lastfm-card p-3.5 rounded-lg">
          <div className="flex items-center justify-between text-text-muted text-[11px] font-mono uppercase">
            <span>Lighthouse</span>
            <Gauge className="w-4 h-4 text-highlight" />
          </div>
          <span className="text-2xl font-mono font-bold text-text tabular-nums">
            {qaMetrics.lighthouseScore}
            <span className="text-xs text-text-muted">/100</span>
          </span>
          <span className="text-[10px] text-emerald-500 block font-mono">
            Green category benchmark
          </span>
        </div>

        <div className="lastfm-card p-3.5 rounded-lg">
          <div className="flex items-center justify-between text-text-muted text-[11px] font-mono uppercase">
            <span>Standar Aksesibilitas</span>
            <Eye className="w-4 h-4 text-accent" />
          </div>
          <span className="text-lg sm:text-xl font-mono font-bold text-text">
            WCAG 2.1 AA
          </span>
          <span className="text-[10px] text-text-muted block font-mono">
            Axe-core verified
          </span>
        </div>

        <div className="lastfm-card p-3.5 rounded-lg">
          <div className="flex items-center justify-between text-text-muted text-[11px] font-mono uppercase">
            <span>Viewport Resolution</span>
            <Monitor className="w-4 h-4 text-accent" />
          </div>
          <span className="text-base sm:text-lg font-mono font-bold text-text tabular-nums truncate block">
            {clientInfo.viewport}
          </span>
          <span className="text-[10px] text-text-muted block font-mono">
            Theme: {clientInfo.colorScheme}
          </span>
        </div>
      </div>

      {/* Test Cases Checklist */}
      <div className="lastfm-card p-4 sm:p-5 rounded-lg space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border">
          <div>
            <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-text">
              Matriks Test Case & Hasil Verifikasi
            </h3>
            <span className="text-[11px] font-mono text-text-muted">
              Menampilkan {filteredTests.length} skenario pengujian
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            <Filter className="w-3.5 h-3.5 text-text-muted flex-shrink-0 mr-1 hidden sm:inline" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                type="button"
                className={`text-[10px] font-mono px-2.5 py-1 rounded transition-colors whitespace-nowrap ${
                  selectedFilter === cat
                    ? "bg-accent text-white font-medium"
                    : "bg-surface hover:bg-surface-hover text-text-muted hover:text-text border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Test Case Cards */}
        <div className="space-y-2.5">
          {filteredTests.map((tc) => (
            <div
              key={tc.id}
              className="p-3.5 rounded-lg bg-surface-hover/30 border border-border/70 hover:border-emerald-500/50 transition-colors space-y-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-bg border border-border text-text font-bold">
                    {tc.id}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-text">
                    {tc.name}
                  </span>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg border border-border text-text-muted">
                    {tc.tool}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/30 text-emerald-500 font-bold">
                    <CheckCircle2 className="w-3 h-3" />
                    {tc.status}
                  </span>
                </div>
              </div>

              <div className="text-xs text-text-muted bg-bg/50 p-2.5 rounded border border-border/40 font-mono leading-relaxed">
                <strong className="text-text">Kriteria Keberhasilan:</strong> {tc.expectedResult}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture & Docker Environment Highlight */}
      <div className="lastfm-card p-4 sm:p-5 rounded-lg space-y-3 bg-gradient-to-br from-surface to-surface-hover">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-accent" />
          <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-text">
            Lingkungan Pengujian Docker & WSL2
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
          Seluruh dependensi pengujian dijalankan dalam kontainer multi-stage Docker yang terisolasi di dalam subsistem WSL2. Hal ini menjamin konsistensi reproduksi bug (zero environment drift) antara laptop lokal pengembang dan pipeline CI/CD di GitHub Actions.
        </p>
        <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-mono">
          <span className="px-2 py-0.5 rounded bg-bg border border-border text-text-muted">
            Base: node:20-alpine
          </span>
          <span className="px-2 py-0.5 rounded bg-bg border border-border text-text-muted">
            File Watcher: WATCHPACK_POLLING=true
          </span>
          <span className="px-2 py-0.5 rounded bg-bg border border-border text-text-muted">
            Build Mode: Standalone
          </span>
        </div>
      </div>
    </div>
  );
}
