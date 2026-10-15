export interface RankedSkill {
  rank: number;
  name: string;
  category: "Frontend & Web" | "Systems & UAV" | "QA & Testing" | "Languages & Tools";
  percentage: number; // 0 to 100 for bar width
  experience: string; // e.g. "Daily Driver", "KRTI Mission"
  scrobbles: string; // Last.fm playful count e.g. "Main Stack"
  description: string;
}

export const topSkillsData: RankedSkill[] = [
  {
    rank: 1,
    name: "React & Next.js Ecosystem",
    category: "Frontend & Web",
    percentage: 100,
    experience: "Active Daily Driver",
    scrobbles: "Primary Web Stack",
    description: "App Router, SSR/CSR, Tailwind CSS, Component Architecture, Bingilo Client Platform"
  },
  {
    rank: 2,
    name: "TypeScript & JavaScript",
    category: "Frontend & Web",
    percentage: 94,
    experience: "Production Grade",
    scrobbles: "Strictly Typed",
    description: "Strong typing, Async pipelines, Zod schema validation, Web Workers"
  },
  {
    rank: 3,
    name: "UAV Telemetry & MAVLink / GCS",
    category: "Systems & UAV",
    percentage: 86,
    experience: "KRTI 2026 Mission",
    scrobbles: "Bengawan UV Team",
    description: "Narash BUV Ground Control Station, packet parsing, serial radio stream, Leaflet attitude HUD"
  },
  {
    rank: 4,
    name: "Quality Assurance & Testing (QA)",
    category: "QA & Testing",
    percentage: 82,
    experience: "Full Lifecycle",
    scrobbles: "End-to-End Verified",
    description: "Manual & Automated testing, Jest, Playwright, WCAG 2.1 AA accessibility audit, zero-regression focus"
  },
  {
    rank: 5,
    name: "C & C++ Programming",
    category: "Languages & Tools",
    percentage: 76,
    experience: "Robotics & Algorithms",
    scrobbles: "Hardware & Core",
    description: "Data structures, memory management, algorithm optimization, embedded systems"
  },
  {
    rank: 6,
    name: "Python",
    category: "Languages & Tools",
    percentage: 72,
    experience: "Scripting & Data",
    scrobbles: "Automation & Telemetry",
    description: "Telemetry log parsing, socket communication, backend scripting, automation utilities"
  },
  {
    rank: 7,
    name: "Android Kotlin",
    category: "Languages & Tools",
    percentage: 68,
    experience: "Mobile Engineering",
    scrobbles: "HaloMBG App",
    description: "Native Android development, Jetpack components, Material UI, Gradle lifecycle"
  },
  {
    rank: 8,
    name: "Linux, Git, GitHub & Docker",
    category: "Languages & Tools",
    percentage: 88,
    experience: "Pull Shark x2, Pair Extraordinaire",
    scrobbles: "WSL2 & CI/CD",
    description: "Containerization, multi-stage Docker builds, git branching strategies, bash automation"
  }
];

export const skillCategories = ["All", "Frontend & Web", "Systems & UAV", "QA & Testing", "Languages & Tools"] as const;
