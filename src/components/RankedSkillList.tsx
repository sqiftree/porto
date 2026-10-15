"use client";

import { useState } from "react";
import { topSkillsData, skillCategories, RankedSkill } from "@/data/skills";
import { Sparkles } from "lucide-react";

interface RankedSkillListProps {
  limit?: number;
  showFilters?: boolean;
}

export function RankedSkillList({ limit, showFilters = true }: RankedSkillListProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredSkills = topSkillsData
    .filter((skill) => (activeCategory === "All" ? true : skill.category === activeCategory))
    .slice(0, limit || topSkillsData.length);

  return (
    <div className="lastfm-card p-5 sm:p-6 rounded-xl space-y-5 bg-surface border border-border">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <h2 className="text-xs font-mono font-medium uppercase tracking-widest text-text-muted">
              Top Disciplines &middot; Technical Chart
            </h2>
          </div>
          <p className="font-heading font-bold text-lg sm:text-xl text-text">
            Peringkat Penguasaan &amp; Jam Terbang Rekayasa
          </p>
        </div>

        {/* Categories Filter Pills */}
        {showFilters && (
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {skillCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                type="button"
                className={`text-[11px] font-mono px-3 py-1 rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "bg-accent text-white font-medium shadow-sm"
                    : "bg-bg hover:bg-surface-hover text-text-muted hover:text-text border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Ranked List Rows (Last.fm Top Tracks Style) */}
      <div className="space-y-2">
        {filteredSkills.map((skill) => {
          const formattedRank = String(skill.rank).padStart(2, "0");
          return (
            <div
              key={skill.name}
              className="group p-3 rounded-xl bg-surface-hover/30 hover:bg-surface-hover border border-border/40 hover:border-accent/40 transition-all flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4"
            >
              {/* Rank Number (Display Font) */}
              <div className="flex items-center gap-2 sm:w-10 flex-shrink-0">
                <span className="font-display font-bold text-lg sm:text-xl text-highlight/80 group-hover:text-accent transition-colors tabular-nums">
                  {formattedRank}
                </span>
              </div>

              {/* Skill Name & Info */}
              <div className="sm:w-60 flex-shrink-0 space-y-0.5">
                <h3 className="text-sm font-semibold text-text group-hover:text-accent transition-colors">
                  {skill.name}
                </h3>
                <div className="flex items-center gap-2 text-[10px] font-mono text-text-muted">
                  <span className="px-1.5 py-0.2 rounded bg-bg border border-border text-text-muted">
                    {skill.category}
                  </span>
                  <span>&middot;</span>
                  <span className="text-highlight">{skill.experience}</span>
                </div>
              </div>

              {/* Proportional Garnet Bar (Last.fm Track Frequency) */}
              <div className="flex-1 w-full flex items-center gap-3">
                <div className="flex-1 h-2.5 rounded-full bg-bg border border-border/80 overflow-hidden relative">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-700 ease-out group-hover:bg-accent-hover"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
                <span className="font-mono text-xs font-semibold text-text-muted w-10 text-right tabular-nums group-hover:text-text">
                  {skill.percentage}%
                </span>
              </div>

              {/* Scrobbles / Play Count on right */}
              <div className="sm:w-36 text-left sm:text-right flex-shrink-0 text-[11px] font-mono text-text-muted border-t sm:border-t-0 border-border/40 pt-1.5 sm:pt-0">
                <span className="text-text font-medium">{skill.scrobbles}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
