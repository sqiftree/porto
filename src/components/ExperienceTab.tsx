"use client";

import { experienceData } from "@/data/experience";
import { GraduationCap, Award, Briefcase, Users, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function ExperienceTab() {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Education":
        return <GraduationCap className="w-4 h-4 text-highlight" />;
      case "Team & Competition":
        return <Award className="w-4 h-4 text-accent" />;
      case "Work / Freelance":
        return <Briefcase className="w-4 h-4 text-emerald-400" />;
      default:
        return <Users className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Intro Banner */}
      <div className="lastfm-card p-5 rounded-lg border-l-4 border-l-accent flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-mono font-medium uppercase tracking-widest text-text-muted">
              Chronology &middot; Track Record
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text tracking-tight">
            Perjalanan Rekayasa &amp; Rekam Jejak
          </h2>
          <p className="text-xs sm:text-sm text-text-muted mt-1 leading-relaxed font-sans">
            Kombinasi fondasi akademis Informatika UNS, rekayasa stasiun kendali drone kompetisi nasional, serta pengalaman klien nyata dengan standar QA ketat.
          </p>
        </div>
        <div className="flex-shrink-0 px-3 py-1.5 rounded bg-bg border border-border text-xs font-mono text-highlight">
          Tahun Aktif: 2023 – Sekarang
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l border-border space-y-6">
        {experienceData.map((item) => (
          <div key={item.id} className="relative group">
            {/* Timeline bullet beacon */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-border group-hover:border-accent group-hover:bg-accent transition-all duration-200 flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-white" />
            </div>

            {/* Experience Card */}
            <div className="lastfm-card p-4 sm:p-5 rounded-lg space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-border">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-bg border border-border text-text">
                      {getTypeIcon(item.type)}
                      <span>{item.type}</span>
                    </span>
                    <h3 className="text-base sm:text-lg font-heading font-bold text-text group-hover:text-accent transition-colors">
                      {item.role}
                    </h3>
                  </div>
                  <p className="text-xs font-medium text-highlight font-mono">
                    {item.organization}
                  </p>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </span>
                </div>
              </div>

              {/* Achievements Bullet List */}
              <ul className="space-y-2 pt-1">
                {item.achievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-text leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Used */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/60">
                {item.skillsUsed.map((sk) => (
                  <span
                    key={sk}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg border border-border text-text-muted"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
