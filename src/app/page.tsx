"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProfileHeader } from "@/components/ProfileHeader";
import { TabNav } from "@/components/TabNav";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { RankedSkillList } from "@/components/RankedSkillList";
import { ActivityFeed } from "@/components/ActivityFeed";
import { Sidebar } from "@/components/Sidebar";
import { ProjectsTab } from "@/components/ProjectsTab";
import { ExperienceTab } from "@/components/ExperienceTab";
import { QATestingTab } from "@/components/QATestingTab";
import { ContactTab } from "@/components/ContactTab";
import { PhilosophySection } from "@/components/PhilosophySection";
import { projectsData, Project } from "@/data/projects";
import { Sparkles, ArrowRight, Layers, FolderGit2 } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter featured projects for Overview
  const featuredProjects = projectsData.filter((p) => p.featured);

  const handleOpenProjectById = (projectId: string) => {
    const found = projectsData.find((p) => p.id === projectId);
    if (found) setSelectedProject(found);
  };

  return (
    <div className="min-h-screen bg-bg text-text transition-colors flex flex-col">
      {/* 1. Global Navbar */}
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* 2. Last.fm Style Profile Header with Stats */}
      <ProfileHeader
        onContactClick={() => setActiveTab("contact")}
        onOpenTopProject={() => handleOpenProjectById("narash-buv")}
      />

      {/* 3. Horizontal Navigation Tabs */}
      <TabNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        projectCount={projectsData.length}
      />

      {/* 4. Main Body Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* TAB: OVERVIEW (Master Last.fm Profile Chart Layout) */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Left Column (Desktop 8 cols) */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              {/* 4.1 Smooth Project Showcase Carousel (Last.fm 3-card slide & fade) */}
              <ProjectCarousel onSelectProject={(p) => setSelectedProject(p)} />

              {/* 4.2 Engineering Philosophy & Pillars (Canva Monograph Feature) */}
              <PhilosophySection />

              {/* 4.2 Featured Projects (Square 1:1 Cover Cards) */}
              <section className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-3.5 border-b border-border">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-xs font-mono font-medium uppercase tracking-widest text-text-muted">
                        Featured Releases &middot; Curated Works
                      </span>
                    </div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text tracking-tight">
                      Proyek Unggulan &amp; Rekayasa Sistem
                    </h2>
                  </div>
                  <button
                    onClick={() => setActiveTab("projects")}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-accent transition-colors self-start sm:self-auto"
                  >
                    <span>Lihat Semua ({projectsData.length})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* 2-column grid of 1:1 square project covers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {featuredProjects.map((project, i) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={i}
                      onSelect={(p) => setSelectedProject(p)}
                    />
                  ))}
                </div>
              </section>

              {/* 4.3 Top Skills (Ranked List with Proportional Garnet Bars) */}
              <section>
                <RankedSkillList limit={5} showFilters={false} />
                <div className="mt-2 text-right">
                  <button
                    onClick={() => setActiveTab("skills")}
                    className="text-xs font-mono text-text-muted hover:text-accent transition-colors inline-flex items-center gap-1"
                  >
                    <span>Lihat Rincian Seluruh Skill & Frekuensi</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </section>

              {/* 4.4 Recent Activity Feed (Recent Tracks) */}
              <section>
                <ActivityFeed />
              </section>
            </div>

            {/* Right Column / Sidebar (Desktop 4 cols, Mobile Bottom) */}
            <div className="lg:col-span-4">
              <Sidebar onContactClick={() => setActiveTab("contact")} />
            </div>
          </div>
        )}

        {/* TAB: PROJECTS (Full Explorer) */}
        {activeTab === "projects" && (
          <ProjectsTab onSelectProject={(p) => setSelectedProject(p)} />
        )}

        {/* TAB: SKILLS (Full Ranked List with Filters) */}
        {activeTab === "skills" && (
          <div className="space-y-6">
            <div className="lastfm-card p-5 rounded-lg border-l-4 border-l-highlight">
              <h2 className="text-base font-bold text-text">
                Top Skills & Penguasaan Teknologi
              </h2>
              <p className="text-xs sm:text-sm text-text-muted mt-1 leading-relaxed">
                Diurutkan berdasarkan intensitas penggunaan (scrobbles/commits), jam terbang produksi, dan implementasi nyata pada sistem GCS robotika serta platform klien.
              </p>
            </div>
            <RankedSkillList showFilters={true} />
          </div>
        )}

        {/* TAB: EXPERIENCE */}
        {activeTab === "experience" && <ExperienceTab />}

        {/* TAB: QA TESTING LAB */}
        {activeTab === "qa-lab" && <QATestingTab />}

        {/* TAB: CONTACT */}
        {activeTab === "contact" && <ContactTab />}
      </main>

      {/* 5. Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* 6. Footer */}
      <footer className="mt-auto border-t border-border bg-surface/30 py-6 text-center text-xs font-mono text-text-muted transition-colors">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>Yashif Victoriawan (@sqiftree) © 2024–2026</span>
            <span>•</span>
            <span>Profile as a Chart</span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span>Next.js + Tailwind + Docker (WSL2)</span>
            <span>•</span>
            <button
              onClick={() => setActiveTab("qa-lab")}
              className="text-emerald-500 hover:underline"
            >
              100% QA Tested
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
