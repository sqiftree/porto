"use client";

import { useMemo, useCallback } from "react";
import { standStatsData, StandStat } from "@/data/skills";

interface StatRadarProps {
  data?: StandStat[];
  size?: number;
  className?: string;
  showLabels?: boolean;
}

const RADAR_LEVELS = [1, 2, 3, 4, 5];

export function StatRadar({
  data = standStatsData,
  size = 320,
  className = "",
  showLabels = true,
}: StatRadarProps) {
  const cx = 160;
  const cy = 160;
  const radius = 95;
  const numAxes = data.length; // 6

  // Calculate coordinates for a given axis and value fraction (0 to 1)
  const getCoordinates = useCallback(
    (index: number, fraction: number, rOffset = 0) => {
      // Top axis starts at -90deg (-PI/2)
      const angle = -Math.PI / 2 + (index * 2 * Math.PI) / numAxes;
      const r = radius * fraction + rOffset;
      return {
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle),
      };
    },
    [numAxes]
  );

  // Hexagon grid points for each level (1 to 5)
  const gridPolygons = useMemo(() => {
    return RADAR_LEVELS.map((lvl) => {
      const fraction = lvl / 5;
      const points = Array.from({ length: numAxes }, (_, i) => {
        const { x, y } = getCoordinates(i, fraction);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      }).join(" ");
      return { lvl, points };
    });
  }, [numAxes, getCoordinates]);

  // Data polygon points
  const dataPolygonPoints = useMemo(() => {
    return data
      .map((item, i) => {
        const fraction = Math.min(Math.max(item.value / item.fullMark, 0.1), 1);
        const { x, y } = getCoordinates(i, fraction);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");
  }, [data, getCoordinates]);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 320 320"
        width={size}
        height={size}
        className="w-full max-w-[320px] h-auto overflow-visible select-none"
      >
        <defs>
          {/* Subtle gradient fill for Stand Radar polygon */}
          <radialGradient id="standRadarGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--stand)" stopOpacity="0.45" />
            <stop offset="85%" stopColor="var(--stand)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.05" />
          </radialGradient>

          {/* Golden glow for grid axes */}
          <filter id="radarGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer and Inner Hexagon Grid Lines */}
        {gridPolygons.map(({ lvl, points }) => (
          <polygon
            key={lvl}
            points={points}
            fill="none"
            stroke="var(--brass)"
            strokeOpacity={lvl === 5 ? 0.45 : 0.18}
            strokeWidth={lvl === 5 ? 1.5 : 0.75}
            strokeDasharray={lvl % 2 === 0 ? "3 3" : undefined}
          />
        ))}

        {/* Radial Axis Spokes */}
        {data.map((_, i) => {
          const outer = getCoordinates(i, 1);
          return (
            <line
              key={`axis-${i}`}
              x1={cx}
              y1={cy}
              x2={outer.x}
              y2={outer.y}
              stroke="var(--brass)"
              strokeOpacity="0.25"
              strokeWidth="1"
            />
          );
        })}

        {/* Center Origin Mark */}
        <circle cx={cx} cy={cy} r="2.5" fill="var(--sand)" opacity="0.6" />

        {/* Data Shape (Radar Polygon) */}
        <polygon
          points={dataPolygonPoints}
          fill="url(#standRadarGlow)"
          stroke="var(--stand)"
          strokeWidth="2"
          className="transition-all duration-700 ease-out"
          style={{ filter: "drop-shadow(0 0 6px rgba(46, 230, 214, 0.4))" }}
        />

        {/* Vertex Dots & Values */}
        {data.map((item, i) => {
          const fraction = item.value / item.fullMark;
          const { x, y } = getCoordinates(i, fraction);
          return (
            <g key={`vertex-${i}`} className="group">
              <circle
                cx={x}
                cy={y}
                r="4"
                fill="var(--bg)"
                stroke="var(--stand)"
                strokeWidth="2"
                className="transition-transform duration-200 hover:scale-125"
              />
              <circle cx={x} cy={y} r="1.5" fill="var(--text)" />
            </g>
          );
        })}

        {/* Axis Labels */}
        {showLabels &&
          data.map((item, i) => {
            const labelPos = getCoordinates(i, 1, 26);
            // Anchor alignment based on horizontal position
            let anchor: "middle" | "start" | "end" = "middle";
            if (labelPos.x > cx + 15) anchor = "start";
            else if (labelPos.x < cx - 15) anchor = "end";

            return (
              <g key={`label-${i}`} className="cursor-default">
                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor={anchor}
                  dominantBaseline="central"
                  className="fill-text font-display font-bold text-[9.5px] tracking-wider uppercase select-none transition-colors"
                >
                  {item.axis}
                </text>
                {/* Value stamp */}
                <text
                  x={labelPos.x}
                  y={labelPos.y + 11}
                  textAnchor={anchor}
                  dominantBaseline="central"
                  className="fill-sand font-mono font-semibold text-[8px] tracking-widest select-none"
                >
                  [{item.value}/5]
                </text>
              </g>
            );
          })}
      </svg>
    </div>
  );
}
