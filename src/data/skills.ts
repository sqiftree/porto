export interface RankedSkill {
  rank: number;
  name: string;
  category: "Frontend & Web" | "Systems & UAV" | "QA & Testing" | "Languages & Tools";
  percentage: number;
  experience: string;
  level: string;
  description: string;
}

export const topSkillsData: RankedSkill[] = [
  {
    rank: 1,
    name: "React & Next.js",
    category: "Frontend & Web",
    percentage: 82,
    experience: "Fokus Utama",
    level: "Proyek Web",
    description: "App Router, Tailwind CSS, struktur komponen modular, dan integrasi antarmuka web"
  },
  {
    rank: 2,
    name: "TypeScript & JavaScript",
    category: "Frontend & Web",
    percentage: 78,
    experience: "Bahasa Harian",
    level: "Strictly Typed",
    description: "Static typing, validasi skema form (Zod), manipulasi DOM, dan async programming"
  },
  {
    rank: 3,
    name: "UAV Telemetry & MAVLink / GCS",
    category: "Systems & UAV",
    percentage: 70,
    experience: "Bengawan UV Team",
    level: "Narash BUV",
    description: "Parsing paket telemetri MAVLink, visualisasi attitude instrument, dan Leaflet waypoint HUD"
  },
  {
    rank: 4,
    name: "C & C++ Programming",
    category: "Languages & Tools",
    percentage: 68,
    experience: "Perkuliahan & Algoritma",
    level: "Dasar Sistem",
    description: "Dasar algoritma pemrograman, struktur data, pengelolaan memori, dan logika sistem"
  },
  {
    rank: 5,
    name: "Linux, Git & Docker",
    category: "Languages & Tools",
    percentage: 74,
    experience: "Workflow Pengembangan",
    level: "WSL & Terminal",
    description: "Lingkungan WSL2, kontainerisasi Docker untuk dev lokal, serta version control Git"
  },
  {
    rank: 6,
    name: "Android Kotlin",
    category: "Languages & Tools",
    percentage: 58,
    experience: "Eksplorasi Mobile",
    level: "HaloMBG App",
    description: "Dasar pengembangan aplikasi Android, Activity/Fragment lifecycle, dan Material Design"
  },
  {
    rank: 7,
    name: "Quality Assurance & Form Testing",
    category: "QA & Testing",
    percentage: 62,
    experience: "Pengujian Antarmuka",
    level: "Manual & Form Audit",
    description: "Validasi alur input form, pengujian fungsional UI, responsive testing, dan perbaikan bug"
  },
  {
    rank: 8,
    name: "Python",
    category: "Languages & Tools",
    percentage: 60,
    experience: "Dasar Pemrograman",
    level: "Scripting & Data",
    description: "Skrip otomasi sederhana, pengolahan data dasar, dan pemrograman berorientasi objek"
  }
];

export const skillCategories = ["All", "Frontend & Web", "Systems & UAV", "QA & Testing", "Languages & Tools"] as const;
