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
        bg: "var(--clr-bg)",
        black: "var(--clr-black)",
        surface: "var(--clr-surface)",
        gold: {
          DEFAULT: "var(--clr-gold)",
          light: "var(--clr-gold-light)",
        },
        border: "var(--clr-border)",
        mid: "var(--clr-mid)",
        muted: "var(--clr-muted)",
        white: "var(--clr-white)",
      },
      fontFamily: {
        display: ["var(--ff-display)", "Bebas Neue", "sans-serif"],
        serif: ["var(--ff-serif)", "DM Serif Display", "serif"],
        sans: ["var(--ff-body)", "DM Sans", "sans-serif"],
        mono: ["var(--ff-mono)", "JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
