"use client";

import { useState, useEffect, useRef } from "react";
import { Project, projectsData } from "@/data/projects";
import { ChevronLeft, ChevronRight, ArrowUpRight, Cpu, Sparkles, ShieldCheck, Layers, ExternalLink } from "lucide-react";

interface ProjectCarouselProps {
  onSelectProject: (project: Project) => void;
}

export function ProjectCarousel({ onSelectProject }: ProjectCarouselProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [animatingKey, setAnimatingKey] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const total = projectsData.length;
  // Show 3 items per view on desktop, 1 on mobile
  const visibleCount = 3;

  const nextSlide = () => {
    setDirection("next");
    setStartIndex((prev) => (prev + 1) % total);
    setAnimatingKey((k) => k + 1);
  };

  const prevSlide = () => {
    setDirection("prev");
    setStartIndex((prev) => (prev - 1 + total) % total);
    setAnimatingKey((k) => k + 1);
  };

  const goToSlide = (idx: number) => {
    if (idx === startIndex) return;
    setDirection(idx > startIndex ? "next" : "prev");
    setStartIndex(idx);
    setAnimatingKey((k) => k + 1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") return;
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Compute visible projects with cyclic wrap-around
  const visibleProjects = Array.from({ length: visibleCount }, (_, i) => {
    const idx = (startIndex + i) % total;
    return { project: projectsData[idx], originalIndex: idx };
  });

  const getCategoryIcon = (category: Project["category"]) => {
    switch (category) {
      case "Robotics & UAV":
        return <Cpu className="w-3.5 h-3.5 text-accent" />;
      case "Mobile & Apps":
        return <Sparkles className="w-3.5 h-3.5 text-highlight" />;
      case "Client & Public Sector":
        return <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-accent" />;
    }
  };

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section className="space-y-3.5">
      {/* Top Header Row with Navigation Controls */}
      <div className="flex items-center justify-between gap-3 pb-2.5 border-b border-border">
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[11px] font-mono font-medium uppercase tracking-widest text-text-muted">
              Featured Works &middot; Last.fm Chart Flow
            </span>
          </div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-text tracking-tight">
            Proyek Unggulan &amp; Rekayasa Terfokus
          </h2>
        </div>

        {/* Carousel Slider Controls (Last.fm circular arrow style) */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-text-muted hidden sm:inline tabular-nums mr-1">
            {startIndex + 1} &ndash; {((startIndex + visibleCount - 1) % total) + 1} dari {total}
          </span>

          <button
            onClick={prevSlide}
            type="button"
            className="w-8 h-8 rounded-full border border-border bg-surface hover:bg-surface-hover text-text hover:text-accent flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Proyek sebelumnya"
            title="Slide sebelumnya"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={nextSlide}
            type="button"
            className="w-8 h-8 rounded-full border border-border bg-surface hover:bg-surface-hover text-text hover:text-accent flex items-center justify-center transition-all duration-200 shadow-2xs hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Proyek berikutnya"
            title="Slide berikutnya"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3-Card Carousel Container with Silky Soft Fade & Slide */}
      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          key={animatingKey}
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 ${
            direction === "next" ? "animate-fade-slide-next" : "animate-fade-slide-prev"
          }`}
        >
          {visibleProjects.map(({ project, originalIndex }) => (
            <div
              key={`${project.id}-${originalIndex}`}
              onClick={() => onSelectProject(project)}
              className="lastfm-card p-5 sm:p-6 rounded-xl flex flex-col justify-between group cursor-pointer bg-surface border border-border hover:border-accent/40 shadow-xs hover:shadow-md transition-all duration-300 relative text-left"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelectProject(project);
                }
              }}
            >
              <div className="space-y-4">
                {/* Card Top Row: Plate Number + Category Pill */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-display font-semibold text-sm text-text-muted/75 group-hover:text-accent transition-colors">
                    № 0{originalIndex + 1}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] bg-bg border border-border/80 text-text font-sans">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </span>
                </div>

                {/* Circular Vinyl Art Sleeve (Faithfully Mirroring Last.fm Discover Cards) */}
                <div className="flex items-center gap-4 pt-1">
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-bg border-2 border-border group-hover:border-accent flex items-center justify-center shadow-xs relative overflow-hidden transition-all duration-300 group-hover:scale-105">
                      {/* Subtle concentric sound grooves */}
                      <div className="absolute inset-1 rounded-full border border-border/50 pointer-events-none" />
                      <div className="absolute inset-2.5 rounded-full border border-border/30 pointer-events-none" />
                      <span
                        className="font-heading font-extrabold text-base tracking-tighter"
                        style={{ color: project.coverAccent }}
                      >
                        {project.title.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="min-w-0 space-y-0.5">
                    <span className="text-[10px] font-mono text-highlight uppercase tracking-wider block font-medium">
                      {project.year} &middot; {project.role.split(" ")[0]}
                    </span>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-text group-hover:text-accent transition-colors leading-snug line-clamp-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Structured Tagline / Impact Statement */}
                <p className="text-xs text-text-muted leading-relaxed line-clamp-2 font-sans">
                  {project.tagline}
                </p>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 mt-4 border-t border-border/70 flex items-center justify-between text-xs font-mono">
                <div className="flex flex-wrap gap-1 max-w-[170px] truncate">
                  {project.stack.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] px-1.5 py-0.5 rounded bg-bg border border-border text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 2 && (
                    <span className="text-[9px] text-text-muted self-center">
                      +{project.stack.length - 2}
                    </span>
                  )}
                </div>

                <div className="inline-flex items-center gap-1 text-accent font-semibold group-hover:translate-x-0.5 transition-transform text-[11px]">
                  <span>Studi Kasus</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Slider Indicator Dots (Soft smooth expansion) */}
      <div className="flex items-center justify-center gap-1.5 pt-1">
        {projectsData.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => goToSlide(dotIdx)}
            className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
              dotIdx === startIndex
                ? "w-7 bg-accent shadow-xs"
                : "w-1.5 bg-border hover:bg-text-muted"
            }`}
            aria-label={`Buka slide proyek ${dotIdx + 1}`}
            title={`Proyek ${dotIdx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
