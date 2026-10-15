# Yashif Victoriawan — Engineering & Portfolio Dashboard

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-WSL2_Ready-2496ED?style=flat-square&logo=docker)](https://www.docker.com/)
[![Last.fm](https://img.shields.io/badge/Last.fm-53k+_Scrobbles-D92323?style=flat-square&logo=last.fm)](https://www.last.fm/user/sqiftree)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

**Personal Portfolio & Engineering Showcase inspired by Last.fm's data-driven identity system.**  
*Crafted for Frontend Engineering, UAV Ground Control Station (GCS) telemetry, and web systems development.*

[Live Overview](http://localhost:3000) &middot; [GitHub Profil](https://github.com/sqiftree) &middot; [LinkedIn](https://www.linkedin.com/in/yashif-victoriawan/) &middot; [Last.fm Profile](https://www.last.fm/user/sqiftree)

</div>

---

## 🧭 Konsep & Desain: "Profile as an Interactive Chart"

Portofolio ini mengadopsi pendekatan visual dan struktur profil **Last.fm**, mengubah tampilan portofolio konvensional menjadi sebuah dashboard rekayasa personal yang kaya data dan otentik:

* **Header Profil Sinematik:**
  * *Dusk Twilight Sky Banner* bergradasi senja dengan ambient horizon glow halus.
  * Avatar bulat `sqiftree` (Eren Yeager pixel art) bertumpuk memotong garis hero banner.
  * *Top Project Widget* di pojok kanan atas banner yang memutar spotlight proyek utama (*Narash BUV GCS*).
  * Bar statistik otentik langsung dari data riil: **53,773 Scrobbles**, **2,643 Artists**, **29 Loved Tracks**, dan **5 Projects**.

* **Palet Warna Cerah & Multi-Accent Engine:**
  * Menggunakan kanvas terang yang bersih (`#F8FAFC` slate canvas dengan kartu `#FFFFFF` putih) untuk kontras tinggi dan kenyamanan membaca.
  * Aksen default **Electric Cobalt (`#0062FF`)** — merepresentasikan identitas teknologi kedirgantaraan, UAV, dan rekayasa perangkat lunak modern.
  * Dilengkapi **Interactive Accent Picker (`<AccentPicker />`)** di navbar atas dengan 4 preset warna instan:
    * ⚡ **Electric Cobalt (`#0062FF`)** — *Default: modern high-tech engineering*.
    * 🌅 **Sunset Tangerine (`#FF5500`)** — *Warm, energetic, and punchy*.
    * 🌿 **Cyber Emerald (`#059669`)** — *Clean, natural, and crisp telemetry*.
    * 🔴 **Classic Garnet (`#D92338`)** — *Last.fm original red tone*.

* **Showcase Proyek Slide & Fade (Smooth Carousel):**
  * Modul 3-kartu sejajar (*3-card sliding window*) dengan vinyl artwork melingkar bertekstur piringan hitam konsentris.
  * Transisi animasi slide & fade super halus menggunakan kurva cubic-bezier kustom `(0.22, 1, 0.36, 1)`.
  * Navigasi lengkap: tombol panah samping, *expanding capsule dot indicators*, touch swipe untuk mobile, dan tombol panah keyboard (`←` / `→`).

* **Sistem Tipografi Modern:**
  * **Outfit** (`font-heading`): Tipografi geometric modern berbobot tebal untuk judul utama dan nama profil.
  * **Space Grotesk** (`font-display`): Font teknikal berkarakter kuat untuk angka statistik, counter scrobble, dan peringkat keahlian.
  * **Plus Jakarta Sans** (`font-sans`): Tipografi teks isi (body copy) yang sangat nyaman dibaca.
  * **JetBrains Mono** (`font-mono`): Monospace untuk protokol MAVLink, telemetry payload, tag stack, dan cap waktu.

---

## 🛠️ Tech Stack & Arsitektur

| Kategori | Teknologi | Deskripsi / Penggunaan |
|---|---|---|
| **Core Framework** | [Next.js 14](https://nextjs.org/) (App Router) | Server-Side Rendering (SSR) & Client Hydration efisien |
| **Bahasa Utama** | [TypeScript 5.7](https://www.typescriptlang.org/) | Strict static typing untuk seluruh data model dan komponen |
| **Styling & Design System** | [Tailwind CSS 3.4](https://tailwindcss.com/) | Utilitas CSS fleksibel dengan token CSS variables dinamis |
| **Ikonografi** | [Lucide React](https://lucide.dev/) | Icon set modern dan ringan berformat SVG |
| **Validasi Skema** | [Zod](https://zod.dev/) | Validasi runtime skema data formulir kas |
| **Kontainerisasi** | [Docker](https://www.docker.com/) & Compose | Lingkungan terisolasi multi-stage untuk WSL2 & deployment |
| **Lingkungan OS** | Linux / Ubuntu (WSL2) | Ekosistem pengembangan native Linux di mesin Windows |

---

## 💼 Proyek Pilihan (Case Studies)

1. **[Narash BUV — Ground Control Station (GCS)](https://github.com/sqiftree)**  
   *Divisi Robotics & UAV · 2024–Sekarang*  
   * **Stack:** React, TypeScript, MAVLink Protocol, Leaflet, WebSockets, Tailwind CSS  
   * **Fokus:** Antarmuka pemantauan telemetri darat wahana tanpa awak pada tim Bengawan UV UNS. Mengintegrasikan pembacaan data koordinat GPS, attitude artificial horizon, status altitude, dan voltase baterai untuk kenyamanan observasi operator darat.

2. **[Bingilo — Aplikasi Pembukuan Kas UMKM](https://github.com/sqiftree)**  
   *Divisi Frontend & Web · 2024*  
   * **Stack:** Next.js, TypeScript, Tailwind CSS, Zod  
   * **Fokus:** Perancangan antarmuka pencatatan kas dan transaksi keuangan harian dengan validasi formulir Zod real-time guna mencegah kesalahan input angka bagi operator kasir non-teknis.

3. **[Website Profil Desa Jetis Karanganyar](https://github.com/sqiftree/website-desa-jetis)**  
   *Sektor Publik · 2024*  
   * **Stack:** HTML5, CSS3, JavaScript, Tailwind CSS, Responsive Design  
   * **Fokus:** Portal informasi publik dan profil Desa Jetis, Jaten, Karanganyar yang ringan, cepat dimuat di koneksi seluler, dan ramah akses warga berbagai kalangan.

4. **[HaloMBG — Mobile App Interface](https://github.com/sqiftree/HaloMBG-mobile)**  
   *Eksplorasi Mobile · 2024*  
   * **Stack:** Kotlin, Android SDK, Material Design, Gradle  
   * **Fokus:** Eksplorasi perancangan antarmuka aplikasi Android native berpedoman pada Material Design guidelines dan pengelolaan Activity lifecycle.

5. **[Prototype NEO MyPertamina](https://github.com/sqiftree/prototype_NEOMyPertamina)**  
   *Eksplorasi UI/UX · 2024*  
   * **Stack:** HTML5, CSS3, JavaScript, Figma  
   * **Fokus:** Studi konsep perbaikan alur pengguna (UX) untuk menyederhanakan langkah pemilihan produk bahan bakar dan transaksi digital.

---

## 🚀 Menjalankan Secara Lokal (WSL2 & Docker)

Seluruh dependensi dienkapsulasi ke dalam Docker sehingga Anda tidak perlu menginstal Node.js di host mesin.

### 1. Menjalankan Server Development
```bash
# Opsi 1: Menggunakan skrip cepat
./dev.sh up

# Opsi 2: Menggunakan Make
make dev

# Opsi 3: Menggunakan Docker Compose langsung
docker compose up
```
Akses di browser: **`http://localhost:3000`**

### 2. Menjalankan di Background (Detached Mode)
```bash
./dev.sh detached
# atau
make up
```

### 3. Menghentikan Server
```bash
./dev.sh stop
# atau
make down
```

### 4. Menjalankan Preview Produksi Standalone
```bash
./dev.sh prod
# atau
docker compose --profile prod up --build prod-preview
```
Akses di browser: **`http://localhost:3001`**

---

## 📂 Struktur Direktori Proyek

```text
porto/
├── .github/                # GitHub configurations & workflows
├── agent/                  # Yashif AI Companion Agent (YCA) Framework
│   ├── blueprint.md        # System prompt & skill modules
│   └── context/            # Context pack profil, proyek, & pencapaian
├── public/                 # Aset statis & favicon SVG
├── src/
│   ├── app/
│   │   ├── globals.css     # CSS variables, multi-accent tokens, & fade-slide keyframes
│   │   ├── layout.tsx      # Google Fonts (Outfit, Space Grotesk, Plus Jakarta Sans, JetBrains Mono)
│   │   └── page.tsx        # Shell utama & interaksi tab portofolio
│   ├── components/         # Komponen UI modular
│   │   ├── AccentPicker.tsx     # Color switcher 4 tema warna instan
│   │   ├── ProfileHeader.tsx    # Last.fm twilight banner, avatar, & real stats
│   │   ├── ProjectCarousel.tsx  # 3-card sliding showcase dengan transisi fade-slide halus
│   │   ├── ProjectModal.tsx     # Modal detail case study proyek
│   │   ├── RankedSkillList.tsx  # Peringkat keahlian proporsional Last.fm style
│   │   ├── PhilosophySection.tsx# 3 pilar rekayasa & sound atmosphere ribbon
│   │   ├── ActivityFeed.tsx     # Rekap aktivitas rekayasa & timeline
│   │   ├── Sidebar.tsx          # Quick actions & profil terverifikasi
│   │   ├── QATestingTab.tsx     # Standar verifikasi kualitas & responsivitas
│   │   ├── ExperienceTab.tsx    # Riwayat pendidikan & organisasi
│   │   ├── ContactTab.tsx       # Formulir kontak & kanal terhubung
│   │   └── ThemeToggle.tsx      # Dark/Light mode toggle switch
│   └── data/               # Single Source of Truth konten
│       ├── projects.ts          # Metadata 5 proyek & studi kasus
│       ├── skills.ts            # Peringkat keahlian & jam terbang
│       ├── experience.ts        # Rekam jejak S1 Informatika & Bengawan UV
│       ├── activity.ts          # Feed pembaruan aktivitas
│       └── qa-report.ts         # Kriteria pengujian kualitas
├── COMMANDS.md             # Cheatsheet perintah operasi Docker & WSL
├── Dockerfile              # Multi-stage Docker build untuk Next.js
├── docker-compose.yml      # Orkestrasi container dev & prod-preview
├── package.json            # Daftar dependensi aplikasi
├── tailwind.config.ts      # Konfigurasi Tailwind & mapping font family
└── tsconfig.json           # Konfigurasi TypeScript strictly-typed
```

---

## 🧪 Jaminan Kualitas & Aksesibilitas

* **WCAG 2.1 AA Contrast Compliance:** Seluruh teks utama dan aksen warna memenuhi rasio kontras minimal 4.5:1 untuk mode terang dan gelap.
* **Fluid Breakpoints:** Tata letak bertransisi mulus dari layar mobile 375px hingga monitor ultrawide tanpa ada horizontal layout overflow.
* **Keyboard Accessibility:** Modal studi kasus dapat dibuka, dinavigasi, dan ditutup menggunakan tombol keyboard (`Esc`, `Tab`, `Enter`).
* **Performance & Core Web Vitals:** Desain ringan tanpa ketergantungan library animasi berat pihak ketiga — memanfaatkan native CSS keyframes dan CSS variables.

---

## 📬 Kontak & Tautan Resmi

* **Nama:** Yashif Victoriawan (Vic)
* **Status:** Mahasiswa S1 Informatika, Universitas Sebelas Maret (UNS) &middot; Angkatan 2024
* **Organisasi:** Bengawan UV Team UNS (Tim Narash BUV)
* **Email:** [yashif.vkt@gmail.com](mailto:yashif.vkt@gmail.com)
* **GitHub:** [@sqiftree](https://github.com/sqiftree)
* **LinkedIn:** [linkedin.com/in/yashif-victoriawan](https://www.linkedin.com/in/yashif-victoriawan/)
* **Last.fm:** [last.fm/user/sqiftree](https://www.last.fm/user/sqiftree)

---

<div align="center">
  <sub>Didesain dengan presisi dan integritas data &middot; Surakarta, Indonesia</sub>
</div>
