"use client";

import { useState } from "react";
import { projectsData, Project } from "@/data/projects";
import { experienceData } from "@/data/experience";
import { topSkillsData } from "@/data/skills";
import { ProjectModal } from "@/components/ProjectModal";
import { 
  Mail, 
  Check, 
  Github, 
  Linkedin, 
  Instagram,
  ArrowUpRight, 
  ExternalLink,
  ChevronRight,
  Sun,
  Moon,
  Briefcase,
  Terminal,
  MapPin
} from "lucide-react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);
  const [isLight, setIsLight] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("yashif.vkt@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleTheme = () => {
    if (isLight) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("yashif-theme", "dark");
      setIsLight(false);
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("yashif-theme", "light");
      setIsLight(true);
    }
  };

  // Specific projects for layout sections
  const narashBUV = projectsData.find((p) => p.id === "narash-buv") || projectsData[0];
  const bingilo = projectsData.find((p) => p.id === "bingilo-ledger") || projectsData[1];
  const desaJetis = projectsData.find((p) => p.id === "website-desa-jetis") || projectsData[2];
  const haloMBG = projectsData.find((p) => p.id === "halombg-mobile") || projectsData[3];

  return (
    <div className="min-h-screen bg-bg text-text transition-colors">
      {/* 1. Minimal Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-bg/90 backdrop-blur-md border-b border-border transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 h-14 flex items-center justify-between">
          <a href="#" className="font-heading font-black text-sm tracking-tight uppercase hover:text-accent transition-colors flex items-center gap-2 text-text">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>sqiftree</span>
          </a>

          <nav className="flex items-center gap-5 sm:gap-7 text-xs font-mono uppercase tracking-wider">
            <a href="#bio" className="text-muted hover:text-text transition-colors hidden sm:inline">
              Bio
            </a>
            <a href="#proyek-terbaru" className="text-muted hover:text-text transition-colors">
              Proyek
            </a>
            <a href="#profil" className="text-muted hover:text-text transition-colors hidden sm:inline">
              Profil
            </a>
            <a href="#kontak" className="text-muted hover:text-text transition-colors">
              Kontak
            </a>
            <button
              onClick={toggleTheme}
              type="button"
              className="p-1.5 rounded-md border border-border hover:border-accent text-text hover:text-accent transition-colors"
              title="Ganti Mode Terang / Gelap"
              aria-label="Toggle theme"
            >
              {isLight ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* 2. Hero Section (Canva Header: Bold Headline Over Cinematic Anime Scenery Backdrop) */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between pt-24 pb-8 px-4 sm:px-8 overflow-hidden border-b border-border">
        {/* Full-bleed visual backdrop with permanent contrast scrim for both light and dark mode */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/hero-eren-twilight.jpg"
            alt="Eren Yeager twilight anime landscape"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30 dark:from-bg dark:via-bg/60 dark:to-bg/30" />
        </div>

        {/* Top spacer */}
        <div className="w-full max-w-5xl mx-auto" />

        {/* Big Canva-style typography - crisp white over cinematic backdrop */}
        <div className="w-full max-w-5xl mx-auto py-12">
          <div className="space-y-4">
            <span className="text-xs font-mono tracking-widest uppercase text-accent font-bold block drop-shadow-sm">
              S1 Informatika UNS &middot; Angkatan 2024
            </span>

            <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase text-white leading-[0.95] drop-shadow-md">
              Portofolio<br />Rekayasa
            </h1>
          </div>
        </div>

        {/* Bottom Hero Ribbon matching Canva footer bar */}
        <div className="w-full max-w-5xl mx-auto pt-6 border-t border-white/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-white/90 uppercase tracking-widest">
          <div>
            <span className="font-bold text-white">Yashif Victoriawan</span>
            <span className="text-white/40 mx-2">&middot;</span>
            <span>Frontend &amp; UAV Telemetry</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#kontak"
              className="canva-outline-btn"
            >
              KIRIM EMAIL
            </a>
          </div>
        </div>
      </section>

      {/* 3. Main Editorial Content Container (Direct translation of Canva layout) */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-16 sm:py-24 space-y-24 sm:space-y-32">
        {/* SECTION 1: BIO */}
        <section id="bio" className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center scroll-mt-20">
          {/* Left Text */}
          <div className="md:col-span-7 space-y-6">
            <h2 className="font-heading font-black text-4xl sm:text-6xl tracking-tighter uppercase text-text">
              BIO
            </h2>

            <p className="font-heading font-bold text-xl sm:text-2xl text-text leading-snug">
              Mahasiswa S1 Informatika UNS yang berfokus pada pengembangan antarmuka web modern, telemetri wahana nirawak, dan pengujian keandalan sistem.
            </p>

            <p className="font-sans text-sm text-muted leading-relaxed">
              Aktif sebagai anggota Bengawan UV Team (wahana Narash BUV) dalam pengembangan stasiun kendali darat (GCS) berbasis web dan integrasi telemetri MAVLink. Terbiasa memadukan ketelitian logika sistem dengan antarmuka yang bersih, responsif, dan mudah dipahami pengguna.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded bg-surface border border-border text-text">Surakarta, Indonesia</span>
              <span className="px-3 py-1 rounded bg-surface border border-border text-text">Bengawan UV UNS</span>
              <span className="px-3 py-1 rounded bg-surface border border-border text-accent font-semibold">Frontend &amp; UAV Telemetry</span>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="md:col-span-5">
            <div className="minimal-card rounded-2xl p-6 sm:p-8 bg-surface text-left space-y-4 relative overflow-hidden">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-bg border border-border overflow-hidden shadow-md">
                <img
                  src="/eren-avatar.jpg"
                  alt="Eren Yeager / sqiftree avatar"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://avatars.githubusercontent.com/u/244948029?v=4";
                  }}
                />
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-bold text-lg text-text">
                    Yashif Victoriawan
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/15 border border-accent/30 text-accent font-semibold">
                    @sqiftree
                  </span>
                </div>
                <p className="text-xs font-mono text-muted">
                  S1 Informatika UNS &middot; Angkatan 2024
                </p>
              </div>

              <p className="text-xs font-sans text-muted leading-relaxed pt-2 border-t border-border">
                Terbuka untuk kesempatan magang mahasiswa di bidang Frontend Web Development, Quality Assurance (QA), dan integrasi telemetri UAV GCS.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-mono">
                <a
                  href="https://github.com/sqiftree"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <span className="text-border">&middot;</span>
                <a
                  href="https://www.linkedin.com/in/yashif-victoriawan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <span className="text-border">&middot;</span>
                <a
                  href="https://instagram.com/yashifvictoriawan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: PROYEK TERBARU (Asymmetrical Canva Two-Item Gallery) */}
        <section id="proyek-terbaru" className="space-y-8 scroll-mt-20">
          <h2 className="font-heading font-black text-4xl sm:text-6xl tracking-tighter uppercase text-text">
            PROYEK TERBARU
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Left Item (Wide Card: Narash BUV GCS) */}
            <div 
              onClick={() => setSelectedProject(narashBUV)}
              className="md:col-span-7 minimal-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                {/* Visual Header Banner */}
                <div className="h-44 sm:h-52 rounded-xl bg-gradient-to-tr from-[#0F141C] via-[#1A2233] to-[#0F141C] border border-border/80 p-5 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/70">
                    <span className="px-2 py-0.5 rounded bg-accent/20 border border-accent/40 text-accent font-semibold">
                      MAVLink Protocol
                    </span>
                    <span>2024–Sekarang</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 block">
                      Ground Control Station
                    </span>
                    <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                      Narash BUV &middot; GCS
                    </h3>
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2 pt-2">
                  <h4 className="font-heading font-bold text-xl text-text group-hover:text-accent transition-colors">
                    {narashBUV.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                    {narashBUV.tagline}
                  </p>
                </div>
              </div>

              {/* Bottom Caption Row */}
              <div className="pt-6 border-t border-border/60 flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-text">Bengawan UV UNS</span>
                <span className="text-accent group-hover:underline inline-flex items-center gap-1 font-semibold">
                  <span>Lihat Studi Kasus</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Right Item (Vertical Card: Bingilo Ledger) */}
            <div 
              onClick={() => setSelectedProject(bingilo)}
              className="md:col-span-5 minimal-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                {/* Visual Header Banner */}
                <div className="h-44 sm:h-52 rounded-xl bg-gradient-to-br from-[#1C140F] via-[#2D1E15] to-[#1C140F] border border-border/80 p-5 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/70">
                    <span className="px-2 py-0.5 rounded bg-[#FF5500]/20 border border-[#FF5500]/40 text-[#FF5500] font-semibold">
                      Next.js &amp; Zod
                    </span>
                    <span>2024</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 block">
                      Kas &amp; Pembukuan UMKM
                    </span>
                    <h3 className="font-heading font-black text-2xl text-white tracking-tight">
                      Bingilo
                    </h3>
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2 pt-2">
                  <h4 className="font-heading font-bold text-lg text-text group-hover:text-accent transition-colors">
                    {bingilo.title}
                  </h4>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    {bingilo.tagline}
                  </p>
                </div>
              </div>

              {/* Bottom Caption Row */}
              <div className="pt-6 border-t border-border/60 flex items-center justify-between text-xs font-mono">
                <span className="text-muted">Validasi Kas Real-Time</span>
                <span className="text-accent group-hover:underline inline-flex items-center gap-1 font-semibold">
                  <span>Detail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: STATEMENT / VALUE PROPOSITION (Canva Big Quote Style) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center py-6 border-y border-border/80">
          <div className="md:col-span-8 space-y-4">
            <p className="font-heading font-bold text-2xl sm:text-4xl text-text leading-tight tracking-tight">
              &ldquo;Saya merancang perangkat lunak yang mengutamakan kejelasan fungsi, validasi data yang ketat, serta antarmuka yang tenang dan mudah dipahami pengguna.&rdquo;
            </p>

            <div className="flex items-center gap-3 text-xs font-mono text-muted uppercase tracking-widest pt-2">
              <span className="text-accent font-bold">2024–Sekarang</span>
              <span>&middot;</span>
              <span>Prinsip Rekayasa Sistem &amp; Web</span>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="p-6 rounded-2xl bg-surface border border-border space-y-3 text-xs font-mono">
              <span className="text-accent font-bold uppercase tracking-wider block">
                Disiplin Utama
              </span>
              <ul className="space-y-1.5 text-muted">
                <li>&bull; Validasi Runtime Ketat (Zod)</li>
                <li>&bull; Parsing Paket Telemetri MAVLink</li>
                <li>&bull; Arsitektur Komponen Next.js</li>
                <li>&bull; Aksesibilitas &amp; Responsivitas Layar</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: PROYEK UNGGULAN (Canva Second Project Gallery Row) */}
        <section id="proyek-unggulan" className="space-y-8 scroll-mt-20">
          <h2 className="font-heading font-black text-4xl sm:text-6xl tracking-tighter uppercase text-text">
            PROYEK UNGGULAN
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Left Item (Wide Card: Website Desa Jetis) */}
            <div 
              onClick={() => setSelectedProject(desaJetis)}
              className="md:col-span-7 minimal-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                {/* Visual Header Banner */}
                <div className="h-44 sm:h-52 rounded-xl bg-gradient-to-tr from-[#0F1C15] via-[#162D20] to-[#0F1C15] border border-border/80 p-5 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/70">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-semibold">
                      Layanan Publik
                    </span>
                    <span>2024</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 block">
                      Karanganyar &middot; Jawa Tengah
                    </span>
                    <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                      Desa Jetis
                    </h3>
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2 pt-2">
                  <h4 className="font-heading font-bold text-xl text-text group-hover:text-accent transition-colors">
                    {desaJetis.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted font-sans leading-relaxed">
                    {desaJetis.tagline}
                  </p>
                </div>
              </div>

              {/* Bottom Caption Row */}
              <div className="pt-6 border-t border-border/60 flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-text">Portal Informasi Desa</span>
                <span className="text-accent group-hover:underline inline-flex items-center gap-1 font-semibold">
                  <span>Lihat Detail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Right Item (Vertical Card: Mobile & UI Concept) */}
            <div 
              onClick={() => setSelectedProject(haloMBG)}
              className="md:col-span-5 minimal-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                {/* Visual Header Banner */}
                <div className="h-44 sm:h-52 rounded-xl bg-gradient-to-br from-[#1C0F1A] via-[#2E182B] to-[#1C0F1A] border border-border/80 p-5 flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between text-[11px] font-mono text-white/70">
                    <span className="px-2 py-0.5 rounded bg-purple-500/20 border border-purple-500/40 text-purple-300 font-semibold">
                      Kotlin &amp; UI Concept
                    </span>
                    <span>2024</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/60 block">
                      Android Native
                    </span>
                    <h3 className="font-heading font-black text-2xl text-white tracking-tight">
                      HaloMBG &amp; NEO
                    </h3>
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-2 pt-2">
                  <h4 className="font-heading font-bold text-lg text-text group-hover:text-accent transition-colors">
                    HaloMBG &middot; Mobile App
                  </h4>
                  <p className="text-xs text-muted font-sans leading-relaxed">
                    Eksplorasi antarmuka aplikasi seluler native berbasis Android Kotlin dengan prinsip Material Design.
                  </p>
                </div>
              </div>

              {/* Bottom Caption Row */}
              <div className="pt-6 border-t border-border/60 flex items-center justify-between text-xs font-mono">
                <span className="text-muted">Android SDK &amp; UI</span>
                <span className="text-accent group-hover:underline inline-flex items-center gap-1 font-semibold">
                  <span>Detail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: PROFIL (Pendidikan, Organisasi & Keahlian) */}
        <section id="profil" className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-start scroll-mt-20">
          {/* Left Column Visual / Focus Plate */}
          <div className="md:col-span-4">
            <div className="minimal-card rounded-2xl p-6 sm:p-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold block">
                Fokus Akademik
              </span>
              <h3 className="font-heading font-bold text-2xl text-text leading-snug">
                S1 Informatika UNS
              </h3>
              <p className="text-xs text-muted leading-relaxed font-sans">
                Fakultas Teknologi Informasi dan Sains Data, Universitas Sebelas Maret, Surakarta. Mendalami struktur data, algoritma pemrograman, dan rekayasa perangkat lunak.
              </p>
              <div className="pt-3 border-t border-border/60 text-xs font-mono text-muted">
                Angkatan 2024 &middot; Aktif
              </div>
            </div>
          </div>

          {/* Right Column: Profil Lists */}
          <div className="md:col-span-8 space-y-8">
            <h2 className="font-heading font-black text-4xl sm:text-6xl tracking-tighter uppercase text-text">
              PROFIL
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
              {/* Column 1: Pendidikan & Pengalaman */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-accent font-bold pb-2 border-b border-border/60">
                  Pendidikan &amp; Organisasi
                </h4>

                <ul className="space-y-3.5 text-xs font-sans text-muted">
                  {experienceData.map((exp) => (
                    <li key={exp.id} className="space-y-0.5">
                      <span className="text-text font-bold block">
                        {exp.role}
                      </span>
                      <span className="text-muted block font-mono text-[11px]">
                        {exp.organization} &middot; {exp.period}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2: Keahlian & Teknologi */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-accent font-bold pb-2 border-b border-border/60">
                  Keahlian &amp; Tooling
                </h4>

                <ul className="space-y-3.5 text-xs font-sans text-muted">
                  <li className="space-y-0.5">
                    <span className="text-text font-bold block">Frontend Web</span>
                    <span className="text-muted block font-mono text-[11px]">React, Next.js, TypeScript, Tailwind CSS</span>
                  </li>
                  <li className="space-y-0.5">
                    <span className="text-text font-bold block">Systems &amp; Telemetry</span>
                    <span className="text-muted block font-mono text-[11px]">MAVLink Protocol, Leaflet, C/C++</span>
                  </li>
                  <li className="space-y-0.5">
                    <span className="text-text font-bold block">Mobile &amp; Data Validation</span>
                    <span className="text-muted block font-mono text-[11px]">Android Kotlin, Zod Schema Validation</span>
                  </li>
                  <li className="space-y-0.5">
                    <span className="text-text font-bold block">Dev Environment</span>
                    <span className="text-muted block font-mono text-[11px]">Linux (WSL2), Docker, Git &amp; GitHub</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: HUBUNGI SAYA (Canva Bottom Contact Section) */}
        <section id="kontak" className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center scroll-mt-20 pt-8 border-t border-border">
          {/* Left Column: Contact details */}
          <div className="md:col-span-7 space-y-6">
            <h2 className="font-heading font-black text-4xl sm:text-6xl tracking-tighter uppercase text-text">
              HUBUNGI SAYA
            </h2>

            <div className="space-y-4 text-xs font-mono">
              <div>
                <span className="text-muted block mb-1 uppercase tracking-wider text-[11px]">Surel / Email</span>
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:yashif.vkt@gmail.com"
                    className="font-heading font-bold text-lg sm:text-xl text-text hover:text-accent transition-colors"
                  >
                    yashif.vkt@gmail.com
                  </a>
                  <button
                    onClick={copyEmail}
                    type="button"
                    className="px-2.5 py-1 rounded border border-border hover:border-accent text-muted hover:text-accent transition-colors text-[11px]"
                  >
                    {copied ? "Tersalin!" : "Salin"}
                  </button>
                </div>
              </div>

              <div>
                <span className="text-muted block mb-1 uppercase tracking-wider text-[11px]">Lokasi</span>
                <span className="text-text font-medium text-sm">Surakarta, Jawa Tengah, Indonesia</span>
              </div>

              <div>
                <span className="text-muted block mb-1 uppercase tracking-wider text-[11px]">Kanal Resmi Terverifikasi</span>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="https://github.com/sqiftree"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border hover:border-accent hover:text-accent transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>@sqiftree</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/yashif-victoriawan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border hover:border-accent hover:text-accent transition-colors text-text"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://instagram.com/yashifvictoriawan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border hover:border-accent hover:text-accent transition-colors text-text"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card - Status & Kolaborasi */}
          <div className="md:col-span-5">
            <div className="rounded-2xl bg-gradient-to-tr from-[#1A1012] via-[#241316] to-[#120B0D] border border-border/80 p-8 space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 border border-accent/40 text-accent flex items-center justify-center mx-auto">
                <Briefcase className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">
                  Status Ketersediaan
                </span>
                <h4 className="font-heading font-bold text-lg text-white">
                  Terbuka untuk Magang
                </h4>
              </div>

              <p className="text-xs text-white/70 font-sans leading-relaxed max-w-xs mx-auto">
                Mahasiswa aktif Informatika UNS siap berkontribusi pada pengembangan Frontend Web, Quality Assurance (QA), dan integrasi telemetri perangkat lunak.
              </p>

              <div className="pt-2">
                <a
                  href="mailto:yashif.vkt@gmail.com"
                  className="canva-outline-btn text-[11px] py-2 px-5"
                >
                  KIRIM SUREL SEKARANG
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Minimalist Footer */}
      <footer className="border-t border-border py-8 text-center text-xs font-mono text-muted">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>&copy; {new Date().getFullYear()} Yashif Victoriawan</span>
          <span>Didesain dengan pendekatan editorial Canva &middot; Surakarta, ID</span>
          <a href="#" className="hover:text-text transition-colors">
            Kembali ke Atas &uarr;
          </a>
        </div>
      </footer>

      {/* 5. Project Detail Modal (Clean, Bug-Free, Accessible) */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
