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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl my-8 bg-surface border border-border rounded-xl shadow-2xl overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="p-5 sm:p-6 border-b border-border bg-surface-hover/60 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-bg border border-border text-text-muted">
                {project.category}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-accent/15 border border-accent/20 text-accent font-semibold">
                {project.scopeTag}
              </span>
              <span className="text-[11px] font-mono text-text-muted">
                {project.year}
              </span>
            </div>
            <h2 id="modal-title" className="font-heading text-2xl sm:text-3xl font-bold text-text tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-text-muted font-sans">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            type="button"
            className="p-2 rounded-lg border border-border bg-surface hover:bg-surface-hover text-text-muted hover:text-text transition-colors focus:ring-2 focus:ring-accent"
            aria-label="Tutup detail modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Case Study Content */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Metadata quick row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-lg bg-bg border border-border text-xs font-mono">
            <div>
              <span className="text-text-muted block text-[10px] uppercase tracking-wider">Peran</span>
              <span className="font-semibold text-text">{project.role}</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px] uppercase tracking-wider">Durasi / Periode</span>
              <span className="font-semibold text-text">{project.year}</span>
            </div>
            <div>
              <span className="text-text-muted block text-[10px] uppercase tracking-wider">Status</span>
              <span className="font-semibold text-emerald-500">Verified & Production</span>
            </div>
          </div>

          {/* Masalah (Problem Statement) */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-accent font-semibold">
              <Target className="w-3.5 h-3.5" />
              <span>№ 01 / Masalah &amp; Tantangan Sistem</span>
            </div>
            <p className="text-xs sm:text-sm text-text leading-relaxed bg-surface-hover/40 p-3.5 rounded-lg border border-border/70 font-sans">
              {caseStudy.problem}
            </p>
          </div>

          {/* Solusi Teknis */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-highlight font-semibold">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>№ 02 / Arsitektur &amp; Pendekatan Teknis</span>
            </div>
            <p className="text-xs sm:text-sm text-text leading-relaxed bg-surface-hover/40 p-3.5 rounded-lg border border-border/70 font-sans">
              {caseStudy.solution}
            </p>
          </div>

          {/* Kontribusi Saya */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted font-semibold">
              <CheckCircle className="w-3.5 h-3.5 text-accent" />
              <span>№ 03 / Kontribusi Saya (Aksi &amp; Hasil Terukur)</span>
            </div>
            <ul className="space-y-2">
              {caseStudy.myContribution.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-text bg-surface-hover/30 p-2.5 rounded-lg border border-border/50 font-sans leading-relaxed"
                >
                  <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hasil & Metrik Terukur */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-500 font-semibold">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>№ 04 / Dampak &amp; Hasil Nyata</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {caseStudy.results.map((res, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-text flex items-start gap-2 font-sans"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pelajaran / Key Takeaways */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-text-muted font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-highlight" />
              <span>№ 05 / Refleksi Rekayasa &amp; Pelajaran</span>
            </div>
            <p className="text-xs sm:text-sm text-text-muted italic bg-surface-hover/20 p-3.5 rounded-lg border border-border/60 font-sans leading-relaxed">
              &ldquo;{caseStudy.lessons}&rdquo;
            </p>
          </div>

          {/* Tech Stack Full Tags */}
          <div className="space-y-2 pt-2 border-t border-border">
            <span className="text-[11px] font-mono uppercase text-text-muted block">
              Tech Stack & Libraries:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded bg-bg border border-border text-text"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="p-4 sm:p-5 border-t border-border bg-surface-hover/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {caseStudy.links.demo && (
              <a
                href={caseStudy.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-accent hover:bg-accent-hover text-white transition-colors"
              >
                <span>Buka Demo Proyek</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {(caseStudy.links.github || project.repoUrl) && (
              <a
                href={caseStudy.links.github || project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono border border-border bg-surface hover:bg-surface-hover text-text transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Lihat di GitHub</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            type="button"
            className="px-4 py-1.5 rounded-md text-xs font-mono border border-border hover:bg-surface text-text-muted hover:text-text transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
