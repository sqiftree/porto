# Yashif Victoriawan — Engineering & Portfolio Dashboard

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-WSL2_Ready-2496ED?style=flat-square&logo=docker)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

**Personal Portfolio & Engineering Showcase of Yashif Victoriawan (@sqiftree).**  
*Crafted for Frontend Engineering, UAV Ground Control Station (GCS) telemetry, and modern web systems.*

[GitHub Profil](https://github.com/sqiftree) &middot; [LinkedIn](https://www.linkedin.com/in/yashif-victoriawan/) &middot; [Kirim Email](mailto:yashif.vkt@gmail.com)

</div>

---

## 🧭 Konsep & Desain: Editorial Engineering Showcase

Portofolio ini dibangun dengan pendekatan visual editorial minimalis berlatar senja berkontras tinggi (*dusk twilight*), menggabungkan ketajaman tipografi grotesque dengan tata letak editorial asimetris:

* **Hero Banner Sinematik & Tipografi Bold:**
  * Latar belakang lanskap senja berkabut (*misty twilight*) dengan judul tegas berbobot ekstra tebal: **`PORTOFOLIO REKAYASA`**.
  * Dilengkapi tombol navigasi outline instan `[ KIRIM EMAIL ]` dan status identitas *S1 Informatika UNS '24 &middot; Frontend & UAV Telemetry*.

* **Tata Letak Asimetris Terstruktur (Editorial Grid):**
  * **BIO:** Narasi fokus rekayasa antarmuka web, telemetri wahana nirawak, dan pengujian keandalan sistem bersanding dengan kartu foto profil pixel art otentik (@sqiftree).
  * **PROYEK TERBARU:** Kartu lanskap utama untuk stasiun kendali darat (*Narash BUV GCS — Bengawan UV UNS*) bersanding dengan kartu vertikal aplikasi pembukuan kas UMKM (*Bingilo*).
  * **PRINSIP REKAYASA:** Pernyataan filosofi arsitektur sistem (*"Antarmuka terbaik adalah yang bekerja tanpa membuat pengguna berpikir keras."*) bersanding dengan disiplin teknikal (MAVLink, Zod Schema, Docker).
  * **PROYEK UNGGULAN:** Portal informasi publik (*Website Desa Jetis Karanganyar*) dan eksplorasi antarmuka seluler (*HaloMBG Kotlin Android*).
  * **PROFIL:** Rekam jejak akademik S1 Informatika UNS, divisi wahana nirawak Bengawan UV Team, dan inventaris penguasaan tools.
  * **HUBUNGI SAYA:** Surel langsung yang dapat disalin dengan sekali klik, tautan profil resmi GitHub dan LinkedIn, serta kartu ketersediaan magang.

* **Sistem Tipografi Modern & Berkarakter:**
  * **Outfit** (`font-heading`): Tipografi geometric modern berbobot tebal untuk judul utama dan nama profil.
  * **Space Grotesk** (`font-display`): Font teknikal berkarakter kuat untuk subjudul, metadata proyek, dan label taksonomi.
  * **Plus Jakarta Sans** (`font-sans`): Tipografi teks isi (*body copy*) yang sangat nyaman dibaca.
  * **JetBrains Mono** (`font-mono`): Monospace untuk protokol MAVLink, stack tag, dan kode instruksi.

* **Palet Warna & Tema Gelap/Terang:**
  * **Dark Mode (Default):** Kanvas obsidian pekat (`#0C0D12`), kartu permukaan elevasi (`#14161F`), dan aksen garnet crimson (`#D92338`).
  * **Light Mode:** Kanvas warm slate (`#F8F9FB`) dengan kartu putih bersih (`#FFFFFF`) dan kontras teks tajam (`#0D0F14`).
  * Tersedia tombol penggantian mode terang/gelap pada bilah navigasi atas.

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
├── public/                 # Aset statis (hero twilight, avatar sqiftree, favicon)
├── src/
│   ├── app/
│   │   ├── globals.css     # CSS variables, tema dark/light, & tombol outline Canva
│   │   ├── layout.tsx      # Google Fonts (Outfit, Space Grotesk, Plus Jakarta Sans, JetBrains Mono)
│   │   └── page.tsx        # Halaman utama portofolio editorial responsif
│   ├── components/         # Komponen UI modular
│   │   ├── ProjectModal.tsx     # Modal detail studi kasus proyek
│   │   ├── ProjectCard.tsx      # Kartu proyek modular
│   │   └── ThemeToggle.tsx      # Dark/Light mode toggle
│   └── data/               # Single Source of Truth konten
│       ├── projects.ts          # Metadata 5 proyek & studi kasus terverifikasi
│       ├── skills.ts            # Peringkat keahlian teknis
│       └── experience.ts        # Rekam jejak S1 Informatika & Bengawan UV
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
* **Accessible Modal Interaction:** Modal studi kasus dapat dibuka, dinavigasi, dan ditutup menggunakan tombol keyboard (`Esc`) atau tombol tutup yang jelas.
* **Smooth Scrolling & Anchor Navigation:** Navigasi cepat ke bagian `#bio`, `#proyek-terbaru`, `#profil`, dan `#kontak` tanpa bug tab switching.
* **Performance & Core Web Vitals:** Desain ringan tanpa ketergantungan library animasi berat pihak ketiga.

---

## 📬 Kontak & Tautan Resmi

* **Nama:** Yashif Victoriawan (Vic)
* **Status:** Mahasiswa S1 Informatika, Universitas Sebelas Maret (UNS) &middot; Angkatan 2024
* **Organisasi:** Bengawan UV Team UNS (Tim Narash BUV)
* **Email:** [yashif.vkt@gmail.com](mailto:yashif.vkt@gmail.com)
* **GitHub:** [@sqiftree](https://github.com/sqiftree)
* **LinkedIn:** [linkedin.com/in/yashif-victoriawan](https://www.linkedin.com/in/yashif-victoriawan/)

---

<div align="center">
  <sub>Didesain dengan presisi dan integritas data &middot; Surakarta, Indonesia</sub>
</div>
