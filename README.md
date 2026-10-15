# Yashif Victoriawan — Personal Portfolio ("Profile as a Chart")

> Portofolio berbasis data personal yang terinspirasi oleh sistem visual dan statistik profil **Last.fm**. Dirancang khusus untuk menonjolkan keahlian di bidang **Frontend Engineering**, **Quality Assurance (QA)**, dan **UAV Ground Control Station (GCS) Telemetry**.

---

## 🌟 Filosofi Desain: "Profile as a Chart" (Referensi Last.fm)

Alih-alih hero banner generik, portofolio ini menampilkan identitas melalui pembuktian data nyata:
- **Profile-First:** Header profil dengan avatar persegi, status live building, dan metrik data tabular.
- **Top Skills (Last.fm Top Tracks):** Daftar keahlian berperingkat dengan bar garnet proporsional beranimasi halus.
- **Featured Projects (Top Artists/Albums):** Kartu cover rasio 1:1 persegi dengan case study interaktif (Masalah → Solusi → Kontribusi → Metrik Hasil → Pelajaran).
- **Currently Building:** Modul live mission dengan visualizer equalizer musik animasi (menghargai preferensi `prefers-reduced-motion`).
- **Recent Activity (Recent Tracks):** Timeline commit, release, dan pengujian telemetri secara real-time.
- **QA Testing Lab:** Showcase transparansi pengujian (100% test pass rate, WCAG AA contrast, Lighthouse score 98+).

### Palet Warna
- **Latar Belakang:** `--bg: #0E0F12` (Dark) / `#F7F5F2` (Light)
- **Permukaan Kartu:** `--surface: #16181D` / `#FFFFFF`
- **Aksen Utama:** `--accent: #B3263A` (Garnet Last.fm) / Hover `#CF3A4F`
- **Aksen Peringkat:** `--highlight: #C9B28A` (Champagne) / `#9A8156`

---

## 🚀 Menjalankan di WSL dengan Docker

Proyek ini sepenuhnya diorkestrasikan menggunakan Docker untuk memastikan isolasi dependensi dan kemudahan eksekusi di lingkungan Windows Subsystem for Linux (WSL2).

### 1. Menjalankan Server Development (Hot-Reloading Aktif)
Jalankan perintah berikut di root direktori `/home/vic/porto`:

```bash
docker compose up
```
atau jalankan di background (detached mode):
```bash
docker compose up -d
```

Buka peramban di: **`http://localhost:3000`**

Setiap perubahan file di WSL (`src/components/`, `src/data/`, dll.) akan otomatis ter-update di browser berkat konfigurasi `WATCHPACK_POLLING=true`.

### 2. Menghentikan Layanan
```bash
docker compose down
```

### 3. Build & Preview Image Produksi Standalone
```bash
docker compose --profile prod up --build prod-preview
```
Akses di: **`http://localhost:3001`**

---

## 📁 Struktur Direktori

```
porto/
├── agent/                  # Yashif AI Companion Agent (YCA) Framework
│   ├── blueprint.md        # System prompt & skill modules (curator, ideation, career)
│   ├── context/            # Context pack (profile, projects, achievements, targets)
│   │   ├── profile.md
│   │   ├── projects.md
│   │   ├── achievements.md
│   │   └── targets.md
│   └── outputs/            # Hasil kurasi & artefak agent
├── src/
│   ├── app/
│   │   ├── globals.css     # CSS variables & Last.fm design tokens
│   │   ├── layout.tsx      # Font Inter & JetBrains Mono, SEO meta
│   │   └── page.tsx        # Halaman utama Overview & tab switcher
│   ├── components/         # Komponen UI modular
│   │   ├── ProfileHeader.tsx
│   │   ├── StatBar.tsx
│   │   ├── TabNav.tsx
│   │   ├── NowBuilding.tsx (Equalizer)
│   │   ├── ProjectCard.tsx (1:1 Square Cover)
│   │   ├── ProjectModal.tsx (Case Study Modal)
│   │   ├── RankedSkillList.tsx (Top Tracks Bars)
│   │   ├── ActivityFeed.tsx (Recent Tracks Feed)
│   │   ├── Sidebar.tsx
│   │   ├── QATestingTab.tsx (Bagaimana saya menguji situs)
│   │   ├── ExperienceTab.tsx
│   │   ├── ContactTab.tsx
│   │   └── ThemeToggle.tsx
│   └── data/               # Data-driven content (Single Source of Truth)
│       ├── projects.ts
│       ├── skills.ts
│       ├── activity.ts
│       ├── experience.ts
│       └── qa-report.ts
├── Dockerfile              # Multi-stage Docker build
├── docker-compose.yml      # Orchestrasi dev & prod
└── package.json
```

---

## 🛠️ Cara Menambah Proyek Baru
Data proyek dikelola secara deklaratif di `src/data/projects.ts`. Cukup tambahkan objek baru ke array `projectsData`:
```typescript
{
  id: "proyek-baru",
  title: "Judul Proyek",
  tagline: "Satu kalimat ringkasan",
  category: "Frontend & Web",
  year: "2024",
  role: "Peran Anda",
  stack: ["Next.js", "TypeScript"],
  featured: true,
  coverAccent: "#B3263A",
  scrobbleMetric: "Metrik Dampak",
  caseStudy: {
    problem: "...",
    role: "...",
    solution: "...",
    myContribution: ["..."],
    results: ["..."],
    lessons: "...",
    links: { github: "...", demo: "..." }
  }
}
```

---

## 🧪 Jaminan Kualitas (QA Standards)
- **Aksesibilitas:** Rasio kontras teks minimum 4.5:1 (WCAG AA) pada mode gelap & terang.
- **Reduced Motion:** Animasi equalizer otomatis berhenti jika sistem mengaktifkan `prefers-reduced-motion`.
- **Keyboard Trapping:** Modal case study dapat diakses penuh dengan navigasi keyboard (`Esc`, `Tab`, `Enter`).
- **Core Web Vitals:** Desain ringan, responsif tanpa layout shift (CLS = 0).
