"use client";

import { useEffect } from "react";
import { Project } from "@/data/projects";
import { X, ExternalLink, Github, BookOpen, CheckCircle, ArrowRight, Lightbulb, Target } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-surface border border-border rounded shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="p-5 sm:p-6 border-b border-border bg-bg/50 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-surface border border-border text-muted">
                {project.category}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-gold/15 border border-gold/30 text-gold font-semibold">
                {project.scopeTag}
              </span>
              <span className="text-[11px] font-mono text-muted">
                {project.year}
              </span>
            </div>
            <h2 id="modal-title" className="font-serif text-2xl sm:text-3xl text-black">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-mid font-sans">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded border border-border bg-surface hover:border-gold text-muted hover:text-gold transition-colors"
            aria-label="Tutup detail modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Case Study Content */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Metadata quick row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded bg-bg border border-border text-xs font-mono">
            <div>
              <span className="text-muted block text-[10px] uppercase tracking-wider">Peran</span>
              <span className="font-semibold text-black">{project.role}</span>
            </div>
            <div>
              <span className="text-muted block text-[10px] uppercase tracking-wider">Durasi / Periode</span>
              <span className="font-semibold text-black">{project.year}</span>
            </div>
            <div>
              <span className="text-muted block text-[10px] uppercase tracking-wider">Status</span>
              <span className="font-semibold text-gold">Tervalidasi &amp; Teruji</span>
            </div>
          </div>

          {/* Masalah (Problem Statement) */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gold font-semibold">
              <Target className="w-3.5 h-3.5 text-gold" />
              <span>№ 01 / Masalah &amp; Kebutuhan Sistem</span>
            </div>
            <p className="text-xs sm:text-sm text-black leading-relaxed bg-bg/40 p-3.5 rounded border border-border/70 font-sans">
              {caseStudy.problem}
            </p>
          </div>

          {/* Solusi Teknis */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gold font-semibold">
              <Lightbulb className="w-3.5 h-3.5 text-gold" />
              <span>№ 02 / Arsitektur &amp; Pendekatan Teknis</span>
            </div>
            <p className="text-xs sm:text-sm text-black leading-relaxed bg-bg/40 p-3.5 rounded border border-border/70 font-sans">
              {caseStudy.solution}
            </p>
          </div>

          {/* Kontribusi Saya */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted font-semibold">
              <CheckCircle className="w-3.5 h-3.5 text-gold" />
              <span>№ 03 / Kontribusi Saya (Aksi Nyata)</span>
            </div>
            <ul className="space-y-2">
              {caseStudy.myContribution.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-black bg-bg/30 p-2.5 rounded border border-border/50 font-sans leading-relaxed"
                >
                  <ArrowRight className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hasil & Metrik Terukur */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gold font-semibold">
              <CheckCircle className="w-3.5 h-3.5 text-gold" />
              <span>№ 04 / Dampak &amp; Hasil Pengujian</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {caseStudy.results.map((res, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded bg-gold/10 border border-gold/20 text-xs text-black flex items-start gap-2 font-sans"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pelajaran / Key Takeaways */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-gold" />
              <span>№ 05 / Refleksi Rekayasa &amp; Pelajaran</span>
            </div>
            <p className="text-xs sm:text-sm text-muted italic bg-bg/20 p-3.5 rounded border border-border font-sans leading-relaxed">
              &ldquo;{caseStudy.lessons}&rdquo;
            </p>
          </div>

          {/* Tech Stack Full Tags */}
          <div className="space-y-2 pt-2 border-t border-border">
            <span className="text-[11px] font-mono uppercase text-muted block">
              Tech Stack &amp; Libraries:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-bg border border-border text-black"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="p-4 sm:p-5 border-t border-border bg-bg/50 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {caseStudy.links.demo && (
              <a
                href={caseStudy.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono font-medium bg-black hover:bg-gold text-white transition-colors"
              >
                <span>Demo Proyek</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {(caseStudy.links.github || project.repoUrl) && (
              <a
                href={caseStudy.links.github || project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono border border-border bg-surface hover:border-gold text-black transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repositori</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            type="button"
            className="px-4 py-1.5 rounded text-xs font-mono border border-border hover:border-gold text-muted hover:text-black transition-colors"
          >
            Tutup (ESC)
          </button>
        </div>
      </div>
    </div>
  );
}
