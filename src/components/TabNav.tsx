"use client";

import { BarChart3, FolderGit2, Sparkles, History, ShieldCheck, Mail } from "lucide-react";

interface TabNavProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  projectCount: number;
}

export function TabNav({ activeTab, onTabChange, projectCount }: TabNavProps) {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "projects", label: `Projects (${projectCount})` },
    { id: "skills", label: "Top Skills" },
    { id: "experience", label: "Experience" },
    { id: "qa-lab", label: "QA Testing Lab", badge: "100%" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="border-b border-border bg-surface sticky top-14 z-30 transition-colors shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <nav
          className="flex space-x-1 sm:space-x-3 overflow-x-auto no-scrollbar -mb-px"
          aria-label="Sub-navigation Tabs"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                type="button"
                className={`flex items-center gap-1.5 py-3 px-2 sm:px-4 text-xs sm:text-sm font-medium border-b-2 whitespace-nowrap transition-all duration-150 focus:outline-none ${
                  isActive
                    ? "border-accent text-accent font-semibold"
                    : "border-transparent text-text-muted hover:text-text hover:border-border"
                }`}
              >
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-emerald-500/15 text-emerald-600 font-semibold border border-emerald-500/25">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
