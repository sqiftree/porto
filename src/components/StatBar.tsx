"use client";

import { FolderGit2, GitCommit, Award, CheckCircle2, Radio, Layers } from "lucide-react";

interface StatItem {
  label: string;
  value: string;
  sublabel: string;
  icon: React.ElementType;
}

const stats: StatItem[] = [
  {
    label: "Curated Projects",
    value: "5",
    sublabel: "Web, Mobile, UAV & Client",
    icon: Layers,
  },
  {
    label: "GitHub Repositories",
    value: "4+",
    sublabel: "@sqiftree public",
    icon: FolderGit2,
  },
  {
    label: "KRTI Division",
    value: "1st Place",
    sublabel: "Bengawan UV Racing Plane",
    icon: Award,
  },
  {
    label: "Education",
    value: "UNS '24",
    sublabel: "Informatics Engineering",
    icon: Radio,
  },
  {
    label: "QA Test Pass",
    value: "100%",
    sublabel: "Bingilo zero regression",
    icon: CheckCircle2,
  },
  {
    label: "GitHub Badges",
    value: "Pull Shark x2",
    sublabel: "Pair Extraordinaire, YOLO",
    icon: GitCommit,
  },
];

export function StatBar() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 py-1">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div
            key={i}
            className="lastfm-card p-3 rounded-lg flex flex-col justify-between group hover:border-accent/40"
          >
            <div className="flex items-center justify-between text-text-muted mb-1">
              <span className="text-[11px] font-mono uppercase tracking-wider truncate">
                {stat.label}
              </span>
              <Icon className="w-3.5 h-3.5 group-hover:text-accent transition-colors flex-shrink-0 ml-1" />
            </div>
            <div className="flex items-baseline gap-1 my-1">
              <span className="text-xl sm:text-2xl font-mono font-bold text-text tabular-nums tracking-tight group-hover:text-accent transition-colors">
                {stat.value}
              </span>
            </div>
            <span className="text-[10px] text-text-muted font-mono truncate">
              {stat.sublabel}
            </span>
          </div>
        );
      })}
    </div>
  );
}
