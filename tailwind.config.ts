import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: {
          DEFAULT: "var(--surface)",
          hover: "var(--surface-hover)",
          active: "var(--surface-active)",
        },
        border: "var(--border)",
        text: {
          DEFAULT: "var(--text)",
          muted: "var(--muted)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          subtle: "var(--accent-subtle)",
        },
        highlight: {
          DEFAULT: "var(--highlight)",
          subtle: "var(--highlight-subtle)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-heading)", "Outfit", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "Courier New", "monospace"],
      },
      keyframes: {
        equalizer1: {
          "0%, 100%": { height: "20%" },
          "50%": { height: "95%" },
        },
        equalizer2: {
          "0%, 100%": { height: "70%" },
          "50%": { height: "30%" },
        },
        equalizer3: {
          "0%, 100%": { height: "40%" },
          "50%": { height: "100%" },
        },
        equalizer4: {
          "0%, 100%": { height: "85%" },
          "50%": { height: "25%" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        rankBar: {
          from: { width: "0%" },
          to: { width: "var(--bar-width)" },
        },
      },
      animation: {
        "eq-1": "equalizer1 1.2s ease-in-out infinite",
        "eq-2": "equalizer2 0.9s ease-in-out infinite",
        "eq-3": "equalizer3 1.4s ease-in-out infinite",
        "eq-4": "equalizer4 1.1s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "rank-bar": "rankBar 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
