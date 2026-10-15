"use client";

import { Project } from "@/data/projects";
import { ArrowUpRight, Cpu, Sparkles, ShieldCheck, Layers } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index?: number;
}

export function ProjectCard({ project, onSelect, index }: ProjectCardProps) {
  const getCategoryIcon = (category: Project["category"]) => {
    switch (category) {
      case "Robotics & UAV":
        return <Cpu className="w-3.5 h-3.5 text-accent" />;
      case "Mobile & Apps":
        return <Sparkles className="w-3.5 h-3.5 text-highlight" />;
      case "Client & Public Sector":
        return <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-indigo-400" />;
    }
  };

  const formattedIndex = index !== undefined ? String(index + 1).padStart(2, "0") : null;

  return (
    <div
      onClick={() => onSelect(project)}
      className="lastfm-card rounded-xl overflow-hidden flex flex-col cursor-pointer group text-left relative bg-surface border border-border hover:border-accent/50 transition-all duration-300"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
        }
      }}
    >
      {/* 1:1 Aspect Ratio Cover — Inspired by Album Sleeves & Editorial Monograph Covers */}
      <div className="aspect-square w-full relative bg-surface-hover/70 flex flex-col justify-between p-5 overflow-hidden border-b border-border/80">
        {/* Subtle architectural grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ECEAE6_1px,transparent_1px),linear-gradient(to_bottom,#ECEAE6_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Top Meta Bar */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono bg-bg/85 border border-border backdrop-blur-md text-text">
            {getCategoryIcon(project.category)}
            <span>{project.category}</span>
          </span>

          {formattedIndex && (
            <span className="font-display font-semibold text-sm text-text-muted/60 group-hover:text-accent transition-colors">
              № {formattedIndex}
            </span>
          )}
        </div>

        {/* Center Minimalist Art Typography */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto py-3 text-center">
          <div className="w-20 h-20 rounded-2xl bg-bg/90 border border-border group-hover:border-accent/40 flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-500 relative overflow-hidden">
            <span
              className="font-heading font-extrabold text-2xl tracking-tighter transition-colors"
              style={{ color: project.coverAccent }}
            >
              {project.title.substring(0, 2).toUpperCase()}
            </span>
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <span className="mt-3.5 text-[11px] font-mono text-highlight bg-bg/80 px-2.5 py-0.5 rounded-full border border-border/70 backdrop-blur-sm">
            {project.scopeTag}
          </span>
        </div>

        {/* Bottom Metadata Label */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-text-muted border-t border-border/40 pt-2.5">
          <span className="truncate max-w-[180px]">{project.role}</span>
          <div className="flex items-center gap-1 text-text group-hover:text-accent transition-colors">
            <span className="text-[10px] uppercase tracking-wider font-semibold">Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Card Info Details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-heading font-bold text-base sm:text-lg text-text group-hover:text-accent transition-colors line-clamp-1">
              {project.title}
            </h3>
            <span className="text-[10px] font-mono text-text-muted flex-shrink-0">
              {project.year}
            </span>
          </div>

          <p className="text-xs text-text-muted line-clamp-2 leading-relaxed font-sans">
            {project.tagline}
          </p>
        </div>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/60">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[9px] font-mono px-2 py-0.5 rounded bg-bg border border-border/70 text-text-muted"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="text-[9px] font-mono px-1 py-0.5 text-text-muted">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
