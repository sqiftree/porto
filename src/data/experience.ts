export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  type: "Education" | "Robotics & Competition" | "Client Project" | "Public Sector";
  achievements: string[];
  skillsUsed: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "uns-informatics",
    role: "S1 Informatika (Informatics Engineering)",
    organization: "Universitas Sebelas Maret (UNS)",
    period: "2024 – Sekarang",
    location: "Surakarta, Jawa Tengah",
    type: "Education",
    achievements: [
      "Mahasiswa aktif S1 Informatika UNS, mendalami Algoritma & Pemrograman, Struktur Data, Rekayasa Perangkat Lunak, dan Sistem Cerdas.",
      "Aktif berkolaborasi dalam tim riset teknologi wahana nirawak dan perancangan antarmuka web modern.",
      "Menerapkan standar pengujian perangkat lunak (QA) dan clean architecture pada setiap tugas rekayasa sistem."
    ],
    skillsUsed: ["TypeScript", "C/C++", "Python", "Algorithms", "Software Engineering", "Linux"]
  },
  {
    id: "bengawan-uv-narash",
    role: "GCS & Telemetry Interface Programmer",
    organization: "Bengawan UV Team UNS (Wahana Narash BUV & Tim Ambalap)",
    period: "2024 – Sekarang",
    location: "Surakarta, Indonesia",
    type: "Robotics & Competition",
    achievements: [
      "Mengembangkan sistem Ground Control Station (GCS) dan konfigurasi telemetri MAVLink untuk wahana Narash BUV pada Kontes Robot Terbang Indonesia (KRTI) 2026.",
      "Berkolaborasi bersama tim Ambalap dan divisi Bengawan UV UNS (tim peraih Juara 1 Divisi Racing Plane KRTI Nasional).",
      "Memastikan keandalan stream telemetri dan feedback instan fail-safe bagi operator darat pada seleksi regional dan latihan terbang."
    ],
    skillsUsed: ["MAVLink Protocol", "React", "TypeScript", "ROS2 Bridge", "Radio Telemetry", "C++", "Leaflet"]
  },
  {
    id: "bingilo-client-project",
    role: "End-to-End Developer: Client Acquisition, Frontend & QA",
    organization: "Bingilo Ledger & Accounting System",
    period: "2024",
    location: "Indonesia",
    type: "Client Project",
    achievements: [
      "Menjalankan siklus pengembangan penuh: mencari klien langsung, membedah requirement proses bisnis, merancang antarmuka frontend, hingga memimpin proses QA.",
      "Membangun dashboard pembukuan & ledger reaktif berbasis Next.js dan TypeScript dengan validasi schema Zod ketat.",
      "Mencapai zero regression bug saat rilis produksi berkat pengujian fungsional dan edge-case testing yang teliti."
    ],
    skillsUsed: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "Quality Assurance", "Playwright", "Jest"]
  },
  {
    id: "desa-jetis-web",
    role: "Lead Web Developer",
    organization: "Pemerintah Desa Jetis, Kec. Jaten, Kab. Karanganyar",
    period: "2024",
    location: "Karanganyar, Jawa Tengah",
    type: "Public Sector",
    achievements: [
      "Merancang dan membangun website resmi profil dan layanan publik Desa Jetis dari tahap konsepsi hingga live publik.",
      "Memastikan aksesibilitas informasi desa mudah dipahami oleh seluruh kalangan warga melalui perangkat seluler.",
      "Mempublikasikan kode secara open source dan terdokumentasi rapi di repositori GitHub `sqiftree/website-desa-jetis`."
    ],
    skillsUsed: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Public Service UX", "Git"]
  }
];
