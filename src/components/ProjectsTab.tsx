"use client";

import { useState } from "react";
import { projectsData, Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Search, Filter, Layers } from "lucide-react";

interface ProjectsTabProps {
  onSelectProject: (project: Project) => void;
}

export function ProjectsTab({ onSelectProject }: ProjectsTabProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Robotics & UAV",
    "Frontend & Web",
    "Mobile & Apps",
    "Client & Public Sector",
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" ? true : project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.stack.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Editorial Intro Banner */}
      <div className="lastfm-card p-5 rounded-lg border-l-4 border-l-accent flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-mono font-medium uppercase tracking-widest text-text-muted">
              Exhibition Archive &middot; 5 Curated Releases
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text tracking-tight">
            Katalog Proyek &amp; Rekayasa Terverifikasi
          </h2>
          <p className="text-xs sm:text-sm text-text-muted mt-1 leading-relaxed font-sans">
            Kumpulan artefak perangkat lunak, sistem telemetri drone balap KRTI Bengawan UV, aplikasi mobile Kotlin, dan sistem pembukuan akuntansi produksi.
          </p>
        </div>
        <div className="flex-shrink-0 px-3 py-1.5 rounded bg-bg border border-border text-xs font-mono text-highlight">
          Total: {filteredProjects.length} Proyek
        </div>
      </div>

      {/* Controls & Filter Bar */}
      <div className="lastfm-card p-4 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari proyek berdasarkan judul, stack, atau topik..."
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-bg border border-border rounded-md text-text placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          <Filter className="w-3.5 h-3.5 text-text-muted flex-shrink-0 mr-1 hidden sm:inline" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              type="button"
              className={`text-xs font-mono px-3 py-1.5 rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-accent text-white font-medium shadow-sm"
                  : "bg-surface hover:bg-surface-hover text-text-muted hover:text-text border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid (Square Cover Ratio) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredProjects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            onSelect={onSelectProject}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="lastfm-card p-12 text-center rounded-lg space-y-2">
          <Layers className="w-8 h-8 text-text-muted mx-auto" />
          <h3 className="text-sm font-semibold text-text">Tidak ada proyek yang sesuai</h3>
          <p className="text-xs text-text-muted">
            Coba ubah kata kunci pencarian atau pilih kategori yang berbeda.
          </p>
        </div>
      )}
    </div>
  );
}
