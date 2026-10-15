"use client";

import { Cpu, Layout, ShieldCheck, Disc, Radio, ExternalLink } from "lucide-react";

export function PhilosophySection() {
  const pillars = [
    {
      number: "01",
      roman: "I",
      title: "Robotics & UAV Telemetry",
      subtitle: "MAVLink Telemetry & Ground Interface",
      description:
        "Pengembangan antarmuka stasiun kendali darat (GCS) wahana tanpa awak Narash BUV di Bengawan UV Team UNS. Berfokus pada pembacaan telemetri MAVLink, visualisasi attitude instrumen, dan kemudahan observasi penerbangan bagi operator darat.",
      icon: Cpu,
      accent: "text-accent",
      borderAccent: "group-hover:border-accent/50",
      tags: ["Bengawan UV UNS", "Narash BUV", "MAVLink", "Leaflet"],
    },
    {
      number: "02",
      roman: "II",
      title: "Tactile Frontend & UX",
      subtitle: "Komponen Modular & Desain Bersih",
      description:
        "Antarmuka web yang rapi, responsif, dan mudah dipahami. Memadukan tipografi modern Outfit & Space Grotesk yang presisi, palet warna cerah berkejelasan tinggi, serta navigasi yang nyaman diakses di layar ponsel maupun desktop.",
      icon: Layout,
      accent: "text-highlight",
      borderAccent: "group-hover:border-highlight/50",
      tags: ["Next.js App Router", "TypeScript", "Tailwind CSS", "UI/UX"],
    },
    {
      number: "03",
      roman: "III",
      title: "Keandalan Input & Pengujian Form",
      subtitle: "Validasi Data & User Experience",
      description:
        "Perancangan formulir dan alur transaksi yang teliti pada aplikasi web seperti Bingilo. Menerapkan validasi skema Zod untuk mencegah kesalahan format nominal kas, serta pengujian tampilan responsif di berbagai perangkat.",
      icon: ShieldCheck,
      accent: "text-emerald-500",
      borderAccent: "group-hover:border-emerald-500/50",
      tags: ["Zod Validation", "TypeScript", "Functional QA", "Responsive Audit"],
    },
  ];

  return (
    <section className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3.5 border-b border-border">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-mono font-medium uppercase tracking-widest text-text-muted">
              Pillars &middot; Engineering Philosophy
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text tracking-tight">
            Tiga Pilar Rekayasa &amp; Disiplin Sistem
          </h2>
        </div>
        <span className="text-xs font-mono text-text-muted self-start sm:self-auto">
          Arsitektur &amp; Integritas Karya
        </span>
      </div>

      {/* 3 Pillars Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.number}
              className={`lastfm-card p-5 sm:p-6 rounded-xl flex flex-col justify-between group bg-surface border border-border ${pillar.borderAccent} transition-all duration-300 relative overflow-hidden`}
            >
              <div className="space-y-4">
                {/* Monograph Plate Header */}
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-lg text-highlight">
                      [{pillar.roman}]
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted">
                      Pillar {pillar.number}
                    </span>
                  </div>
                  <Icon className={`w-4 h-4 ${pillar.accent}`} />
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-text group-hover:text-accent transition-colors leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] font-mono text-highlight font-medium">
                    {pillar.subtitle}
                  </p>
                </div>

                <p className="text-xs text-text-muted leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-border/60">
                {pillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-mono px-2 py-0.5 rounded bg-bg border border-border/70 text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Music & Last.fm Ambient Culture Ribbon */}
      <div className="lastfm-card p-4 sm:p-5 rounded-xl bg-surface border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-bg border border-border flex items-center justify-center flex-shrink-0 text-accent">
            <Disc className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-semibold">
                Sound Atmosphere &middot; Heavy Rotation
              </span>
              <span className="text-border">•</span>
              <span className="text-[10px] font-mono text-text-muted">last.fm/user/sqiftree</span>
            </div>
            <p className="text-xs sm:text-sm text-text font-heading font-medium mt-0.5">
              Tame Impala &middot; Daft Punk &middot; Radiohead &middot; Hindia &middot; Tyler, The Creator
            </p>
          </div>
        </div>

        <a
          href="https://www.last.fm/user/sqiftree"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-border bg-bg hover:border-accent hover:text-accent text-text transition-colors self-start sm:self-auto flex-shrink-0"
        >
          <span>Lihat Scrobbles</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
