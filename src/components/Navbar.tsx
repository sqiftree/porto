"use client";

import { ThemeToggle } from "./ThemeToggle";
import { AccentPicker } from "./AccentPicker";
import { ShieldCheck, Github, Search, Disc } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function Navbar({ activeTab, onTabChange }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#16171B] text-white border-b border-[#282A30] shadow-sm transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand / Logo (Last.fm signature lowercase brand style with custom bright accent) */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => onTabChange("overview")}
            className="flex items-center gap-2 group text-left focus:outline-none"
          >
            {/* Dynamic vibrant wordmark adopting active accent tone */}
            <span className="text-xl sm:text-2xl font-extrabold tracking-tighter text-accent group-hover:brightness-110 transition-all font-heading">
              last.fm<span className="text-white/40 font-normal text-sm ml-1.5 hidden sm:inline font-sans">/sqiftree</span>
            </span>
          </button>

          {/* Top Quick Category Links */}
          <nav className="hidden md:flex items-center gap-5 text-xs font-medium text-white/75">
            <button
              onClick={() => onTabChange("projects")}
              className={`hover:text-white transition-colors ${
                activeTab === "projects" ? "text-white font-semibold" : ""
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => onTabChange("skills")}
              className={`hover:text-white transition-colors ${
                activeTab === "skills" ? "text-white font-semibold" : ""
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => onTabChange("experience")}
              className={`hover:text-white transition-colors ${
                activeTab === "experience" ? "text-white font-semibold" : ""
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => onTabChange("qa-lab")}
              className={`hover:text-white transition-colors flex items-center gap-1 ${
                activeTab === "qa-lab" ? "text-white font-semibold" : ""
              }`}
            >
              <span>QA Lab</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </button>
          </nav>
        </div>

        {/* Quick Actions on Right */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => onTabChange("qa-lab")}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] font-mono bg-white/10 hover:bg-white/15 text-white/90 border border-white/10 transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% QA Pass</span>
          </button>

          <a
            href="https://github.com/sqiftree"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md bg-white/10 hover:bg-white/15 text-white/80 hover:text-white transition-colors"
            aria-label="GitHub Profile @sqiftree"
            title="GitHub @sqiftree"
          >
            <Github className="w-4 h-4" />
          </a>

          <AccentPicker />

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
