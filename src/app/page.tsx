"use client";

import { useState } from "react";
import Image from "next/image";
import { projectsData, Project } from "@/data/projects";
import { experienceData } from "@/data/experience";
import { topSkillsData } from "@/data/skills";
import { ProjectModal } from "@/components/ProjectModal";
import { 
  Mail, 
  Check, 
  Github, 
  Linkedin, 
  Disc, 
  ArrowUpRight, 
  ExternalLink, 
  Cpu, 
  Layers, 
  Sparkles, 
  ChevronRight,
  Code2
} from "lucide-react";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("yashif.vkt@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-bg text-text transition-colors">
      {/* 1. Minimal Floating Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-bg/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
            <span className="font-heading font-bold text-sm tracking-tight text-white group-hover:text-accent transition-colors">
              sqiftree
            </span>
            <span className="text-muted text-xs hidden sm:inline">&middot; Yashif Victoriawan</span>
          </a>

          <nav className="flex items-center gap-5 sm:gap-7 text-xs font-mono">
            <a href="#karya" className="text-muted hover:text-white transition-colors">
              Karya
            </a>
            <a href="#rekam-jejak" className="text-muted hover:text-white transition-colors">
              Rekam Jejak
            </a>
            <a href="#keahlian" className="text-muted hover:text-white transition-colors">
              Keahlian
            </a>
            <a href="#kontak" className="text-muted hover:text-white transition-colors">
              Kontak
            </a>
            <a
              href="https://www.last.fm/user/sqiftree"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface border border-border text-accent hover:border-accent transition-colors"
            >
              <Disc className="w-3 h-3" />
              <span>53k Scrobbles</span>
            </a>
          </nav>
        </div>
      </header>

      {/* 2. Hero Section (Inspired by user's Canva layout: Serene Landscape & Bold Minimal Typography) */}
      <section className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 px-4 sm:px-6 overflow-hidden">
        {/* Cinematic Backdrop Image with Last.fm Dusk Horizon Glow */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/hero-twilight.jpg"
            alt="Misty twilight landscape"
            className="w-full h-full object-cover object-center"
          />
          {/* Deep dark gradient overlay ensuring high contrast and Last.fm atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/40" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-bg/40 to-bg/90 pointer-events-none" />
        </div>

        {/* Top spacer for navbar */}
        <div className="w-full max-w-6xl mx-auto pt-6" />

        {/* Main Content Box (Aligned left, breathing, spacious) */}
        <div className="w-full max-w-6xl mx-auto my-auto py-12">
          <div className="max-w-3xl space-y-6">
            {/* Subtle Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-mono text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>S1 INFORMATIKA UNS &middot; ANGKATAN 2024</span>
            </div>

            {/* Massive Headline (Directly matching Canva style) */}
            <h1 className="font-heading font-extrabold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.04] drop-shadow-sm">
              Yashif<br />Victoriawan
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-base sm:text-lg text-white/80 max-w-xl leading-relaxed">
              Mahasiswa S1 Informatika Universitas Sebelas Maret &middot; Programmer GCS di Bengawan UV Team &amp; Pengembang Antarmuka Web Modern.
            </p>

            {/* Minimalist Outline Buttons (Exact replica of Canva [KIRIM EMAIL]) */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a href="#kontak" className="canva-outline-btn">
                KIRIM EMAIL
              </a>

              <a
                href="#karya"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-mono text-white/80 hover:text-white uppercase tracking-widest hover:bg-white/10 transition-all border border-transparent hover:border-white/20"
              >
                <span>JELAJAHI KARYA</span>
                <span>&darr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Hero Ribbon */}
        <div className="w-full max-w-6xl mx-auto pt-8 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-white/70">
          <div className="flex items-center gap-3">
            <span>SURAKARTA, INDONESIA</span>
            <span>&middot;</span>
            <span className="text-white/90 font-medium">BENGAWAN UV TEAM (NARASH BUV)</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sqiftree"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              github.com/sqiftree
            </a>
            <span>&middot;</span>
            <a
              href="https://www.last.fm/user/sqiftree"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              last.fm/user/sqiftree (53k+)
            </a>
          </div>
        </div>
      </section>

      {/* 3. Main Content Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-24">
        {/* SECTION 1: KARYA PILIHAN */}
        <section id="karya" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b border-border">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block mb-1">
                01 / KARYA PILIHAN
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Rekayasa Perangkat Lunak &amp; Antarmuka
              </h2>
            </div>
            <span className="text-xs font-mono text-muted">
              5 Proyek Terkurasi
            </span>
          </div>

          {/* Clean, Spacious Project Cards (No cluttered carousels, purely smooth & readable) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {projectsData.map((project, idx) => (
              <div
                key={project.id}
                className="minimal-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  {/* Category & Year Ribbon */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2.5 py-1 rounded-md bg-bg border border-border text-muted">
                      {project.category}
                    </span>
                    <span className="text-muted tabular-nums">
                      {project.year}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-accent transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed font-sans">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Summary of solution */}
                  <div className="pt-2 text-xs font-sans text-muted/90 leading-relaxed border-t border-border/50">
                    <span className="text-white/80 font-medium">Fokus &amp; Peran: </span>
                    {project.role} &middot; {project.caseStudy.solution}
                  </div>
                </div>

                {/* Bottom: Stack & Action Buttons */}
                <div className="space-y-4 pt-4 border-t border-border/60">
                  {/* Stack Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg/80 border border-border/80 text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Buttons */}
                  <div className="flex items-center justify-between pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      type="button"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-white hover:text-accent transition-colors group-hover:translate-x-0.5 duration-200"
                    >
                      <span>Buka Detail Studi Kasus</span>
                      <ChevronRight className="w-3.5 h-3.5 text-accent" />
                    </button>

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-white transition-colors"
                        title="Lihat Repositori GitHub"
                      >
                        <Github className="w-4 h-4" />
                        <span className="hidden sm:inline">GitHub</span>
                        <ArrowUpRight className="w-3 h-3 text-muted" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: REKAM JEJAK & ORGANISASI */}
        <section id="rekam-jejak" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b border-border">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block mb-1">
                02 / REKAM JEJAK
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Pendidikan &amp; Keterlibatan Tim
              </h2>
            </div>
            <span className="text-xs font-mono text-muted">
              Rekam Jejak Otentik
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {experienceData.map((item) => (
              <div
                key={item.id}
                className="minimal-card rounded-2xl p-6 sm:p-7 space-y-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-bg border border-border text-accent font-semibold">
                    {item.type}
                  </span>
                  <span className="text-xs font-mono text-muted tabular-nums">
                    {item.period}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                    {item.role}
                  </h3>
                  <p className="text-xs font-mono text-muted">
                    {item.organization} &middot; {item.location}
                  </p>
                </div>

                <ul className="space-y-2 pt-2 border-t border-border/50 text-xs text-muted leading-relaxed font-sans">
                  {item.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-0.5 font-bold">&ndash;</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                  {item.skillsUsed.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg border border-border/60 text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: KEAHLIAN TEKNIS */}
        <section id="keahlian" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b border-border">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block mb-1">
                03 / KEAHLIAN
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Disiplin Teknis &amp; Tooling
              </h2>
            </div>
            <span className="text-xs font-mono text-muted">
              Stack Terbiasa &amp; Eksplorasi
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {topSkillsData.map((skill) => (
              <div
                key={skill.name}
                className="minimal-card rounded-xl p-5 space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-bg border border-border text-muted">
                    {skill.category}
                  </span>
                  <span className="text-accent font-semibold">
                    {skill.experience}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-base text-white">
                  {skill.name}
                </h3>

                <p className="text-xs text-muted leading-relaxed font-sans">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: KONTAK & TERHUBUNG */}
        <section id="kontak" className="space-y-8 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 border-b border-border">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block mb-1">
                04 / TERHUBUNG
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Mari Berdiskusi atau Berkolaborasi
              </h2>
            </div>
            <span className="text-xs font-mono text-muted">
              Terbuka untuk Magang
            </span>
          </div>

          <div className="minimal-card rounded-2xl p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-6">
            <div className="w-14 h-14 rounded-full bg-accent/15 border border-accent/30 text-accent flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                yashif.vkt@gmail.com
              </h3>
              <p className="text-sm text-muted font-sans max-w-md mx-auto">
                Silakan kirim surel untuk peluang magang mahasiswa, kolaborasi proyek rekayasa perangkat lunak, atau sekadar bertukar pikiran seputar teknologi.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={copyEmail}
                type="button"
                className="px-6 py-2.5 rounded-lg text-xs font-mono font-semibold bg-accent hover:bg-accent-hover text-white transition-all shadow-md inline-flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>Email Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    <span>Salin Alamat Email</span>
                  </>
                )}
              </button>

              <a
                href="mailto:yashif.vkt@gmail.com"
                className="px-6 py-2.5 rounded-lg text-xs font-mono font-semibold bg-bg hover:bg-surface border border-border text-white transition-colors"
              >
                Buka Email Client &rarr;
              </a>
            </div>

            {/* Social channels */}
            <div className="pt-8 border-t border-border/50 flex flex-wrap items-center justify-center gap-4 text-xs font-mono">
              <a
                href="https://github.com/sqiftree"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg border border-border text-muted hover:text-white hover:border-accent transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub @sqiftree</span>
              </a>

              <a
                href="https://www.linkedin.com/in/yashif-victoriawan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg border border-border text-muted hover:text-white hover:border-accent transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn /yashif-victoriawan</span>
              </a>

              <a
                href="https://www.last.fm/user/sqiftree"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg border border-border text-muted hover:text-white hover:border-accent transition-colors"
              >
                <Disc className="w-4 h-4 text-accent" />
                <span>Last.fm @sqiftree</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Minimalist Footer */}
      <footer className="border-t border-border py-8 text-center text-xs font-mono text-muted">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>&copy; {new Date().getFullYear()} Yashif Victoriawan</span>
          <span>Didesain dengan pendekatan minimalis &middot; Surakarta, ID</span>
          <a href="#" className="hover:text-white transition-colors">
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
