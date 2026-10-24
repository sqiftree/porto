"use client";

import { useState } from "react";
import { recentActivityData, ActivityItem } from "@/data/activity";
import { Play, Heart, ExternalLink, GitCommit, Settings2, Disc, ArrowUpRight } from "lucide-react";

export function ActivityFeed() {
  const [lovedTracks, setLovedTracks] = useState<Record<string, boolean>>({
    "act-1": true,
    "act-3": true,
  });

  const toggleLove = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLovedTracks((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="lastfm-card p-5 sm:p-6 rounded-xl space-y-4 bg-surface border border-border">
      {/* Header (Mirroring "Recent Tracks" in Last.fm screenshot) */}
      <div className="flex items-center justify-between pb-3.5 border-b border-border">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          <h2 className="text-lg sm:text-xl font-bold font-heading text-text tracking-tight flex items-center gap-2">
            <span>Recent Tracks &middot; Rekam Jejak Kode</span>
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
          <span title="Pengaturan tampilan feed">
            <Settings2 className="w-4 h-4 hover:text-accent cursor-pointer transition-colors" />
          </span>
        </div>
      </div>

      {/* Tracklist Rows (Exact Last.fm Row Structure with Play button, Heart, Title, Artist, Timestamp) */}
      <div className="divide-y divide-border/60">
        {recentActivityData.map((item) => {
          const isLoved = lovedTracks[item.id] ?? false;

          return (
            <div
              key={item.id}
              className="py-3 px-2 flex items-center justify-between gap-3 group hover:bg-surface-hover/70 rounded-lg transition-colors text-left"
            >
              {/* Left Column: Play Button + Thumbnail + Heart + Title + Artist */}
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                {/* Play Triangle Action */}
                <button
                  type="button"
                  className="w-7 h-7 rounded-full bg-bg border border-border group-hover:border-accent/60 group-hover:bg-accent group-hover:text-white flex items-center justify-center text-text-muted transition-all flex-shrink-0"
                  aria-label={`Play ${item.repo}`}
                  title="Lihat riwayat aktivitas"
                >
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </button>

                {/* Square Track Artwork / Sleeve Thumbnail */}
                <div className="w-10 h-10 rounded-md bg-bg border border-border/80 flex items-center justify-center font-mono font-bold text-xs text-text-muted flex-shrink-0 relative overflow-hidden group-hover:border-accent/40">
                  <span className="font-heading font-extrabold text-xs text-accent">
                    {item.repo.substring(0, 2).toUpperCase()}
                  </span>
                </div>

                {/* Favorite / Loved Heart Icon (Last.fm signature feature) */}
                <button
                  type="button"
                  onClick={(e) => toggleLove(item.id, e)}
                  className="text-text-muted hover:text-accent transition-colors flex-shrink-0 focus:outline-none"
                  aria-label={isLoved ? "Batalkan sukai track" : "Sukai track ini"}
                  title={isLoved ? "Loved track" : "Tandai suka"}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isLoved ? "text-accent fill-accent" : "text-text-muted hover:text-accent"
                    }`}
                  />
                </button>

                {/* Track Title + Organization/Artist */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs sm:text-sm font-semibold text-text group-hover:text-accent transition-colors truncate">
                      {item.repo}
                    </span>
                    {item.hash && (
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-bg border border-border text-text-muted">
                        {item.hash}
                      </span>
                    )}
                    <span className="text-[10px] font-mono px-2 py-0.2 rounded-full bg-bg border border-border/80 text-highlight hidden sm:inline">
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-[11px] sm:text-xs text-text-muted truncate mt-0.5 font-sans">
                    {item.message}
                  </p>
                </div>
              </div>

              {/* Right Column: Relative Timestamp + Link (Mirroring 44 minutes ago in screenshot) */}
              <div className="text-right flex-shrink-0 pl-2">
                <span className="text-xs font-mono text-text-muted block whitespace-nowrap tabular-nums">
                  {item.relativeTime}
                </span>

                {item.url !== "#" && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-text-muted hover:text-accent transition-colors mt-0.5"
                  >
                    <span>repo</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
