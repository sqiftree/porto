# BLUEPRINT — "SQIFTREE RUN" (Portofolio Yashif Victoriawan)

> Dokumen ini adalah SUMBER KEBENARAN desain. Agent TIDAK boleh berimprovisasi di luar dokumen ini.
> Jika ada yang ambigu: pilih opsi paling sederhana, lalu catat asumsi di akhir jawaban.
> Simpan file ini di `agent/context/BLUEPRINT-SQIFTREE-RUN.md` dan baca penuh sebelum menulis kode.

---

## 0. CARA KERJA AGENT (WAJIB)

1. Sebelum coding tiap fase, tulis ulang dalam 5-8 baris: apa yang akan dibuat, file apa yang disentuh, dan kriteria selesai (Definition of Done / DoD) dari bagian 12.
2. Kerjakan SATU fase per giliran. Berhenti, tunjukkan hasil, tunggu konfirmasi.
3. Urutan kerja desain: **tokens → mock statis → motion → data → 3D**. Jangan lompat ke 3D sebelum UI 2D lolos DoD.
4. Setelah tiap fase jalankan: `npm run lint`, `npx tsc --noEmit`, `npm run build` (semua lewat Docker Compose).
5. Verifikasi visual: ambil screenshot (Playwright jika bisa, atau minta user kirim screenshot) lalu cocokkan satu per satu dengan checklist DoD. Jangan klaim "sudah sesuai" tanpa memeriksa checklist.
6. Jangan menghapus/menimpa konten di `src/data/*`. Semua konten dibaca dari sana (Single Source of Truth).
7. Jangan menambah library di luar daftar bagian 11 tanpa izin.

---

## 1. IDENTITAS

| Field | Nilai |
|---|---|
| Nama asli | **Yashif Victoriawan** |
| Alias / nama tampil | **sqiftree** (kadang "Vic") |
| Peran | Mahasiswa S1 Informatika UNS '24 · Frontend & UAV Telemetry |
| Organisasi | Bengawan UV Team UNS (Tim Narash BUV) |
| Stand | **KING KRULE** |
| Kota | Surakarta, Indonesia |
| Email | yashif.vkt@gmail.com |

**Format penulisan nama di UI:**
- Judul besar: `YASHIF VICTORIAWAN`
- Subjudul: `a.k.a. sqiftree`
- Label stand: `STAND : KING KRULE`

**Tagline (pilih satu untuk hero, sisanya untuk loading tips):**
- "Dua puluh checkpoint menuju satu tujuan: sistem yang bekerja tanpa membuat pengguna berpikir keras."
- "Engineer. Racer. Stand user."
- "The run never stops."

---

## 2. BATASAN IP & ORISINALITAS (WAJIB DIPATUHI)

Tema terinspirasi dari **suasana** manga balapan lintas padang gurun bergaya Wild West: pose dramatis, tipografi tebal, efek suara komikal, "roh pendamping" (stand). Ini adalah **homage dengan desain orisinal**.

DILARANG:
- Memakai karakter, nama karakter, logo, panel, ilustrasi, font logo resmi, atau aset resmi dari JoJo's Bizarre Adventure / Steel Ball Run.
- Meniru desain karakter tertentu dari seri tersebut (topi, kostum, rambut, pose persis).
- Memakai lirik, cover album, foto, atau rekaman audio King Krule. **"King Krule" hanya dipakai sebagai nama stand (penghormatan).**
- Memakai aset GTA atau aset berhak cipta lain.

BOLEH:
- Konsep generik: "stand" sebagai roh pendamping, kartu statistik radar, efek suara komikal, speed lines, halftone, panel diagonal.
- Efek suara teks ORISINAL (contoh: `RUMBLE`, `KRRK`, `DOON`, `WHUMM`) dalam huruf latin.
- Aset CC0 (Kenney, Quaternius, Poly Pizza) dan animasi Mixamo. Catat sumber di `public/models/CREDITS.md`.
- Musik latar: hanya file bebas royalti/buatan sendiri yang disediakan user. Defaultnya MUTE (autoplay dilarang).

---

## 3. NARASI SINGKAT (untuk loading screen & copy)

> Surakarta. Seorang mahasiswa Informatika mendaftar ke perlombaan terpanjang yang pernah ada: karier rekayasa. Di sisinya melayang roh pendamping bernama **KING KRULE**. Setiap checkpoint adalah satu proyek. Setiap proyek meninggalkan jejak.

Istilah UI:
- Proyek = **STAGE** (Stage 01-05)
- Skill = **STAND STATS**
- Pengalaman = **RACE LOG**
- Kontak = **FINISH LINE**
- Mulai = **PRESS START**

---

## 4. DESIGN TOKENS

### 4.1 Warna (tambahkan ke CSS variables `globals.css`; Dark = default)

| Token | Dark | Light | Pemakaian |
|---|---|---|---|
| `--bg` | `#0C0D12` | `#F8F9FB` | kanvas |
| `--surface` | `#14161F` | `#FFFFFF` | kartu |
| `--text` | `#F2EFE9` | `#0D0F14` | teks utama |
| `--muted` | `#9A9CA8` | `#5B5F6B` | teks sekunder |
| `--accent` (garnet) | `#D92338` | `#C01C30` | aksen utama, CTA |
| `--sand` | `#E9C58A` | `#B9894A` | aksen padang pasir, garis checkpoint |
| `--brass` | `#C8A24A` | `#9A7A2A` | detail kartu, border stat |
| `--stand` | `#2EE6D6` | `#0FB5A6` | glow stand KING KRULE |
| `--dusk` | `#2A2B44` | `#D9DCEB` | gradien langit senja |

Aturan: kontras teks minimal WCAG AA 4.5:1. `--stand` HANYA untuk elemen stand/interaktif aktif, bukan teks panjang.

### 4.2 Tipografi

Pertahankan: Outfit (`font-heading`), Space Grotesk (`font-display`), Plus Jakarta Sans (`font-sans`), JetBrains Mono (`font-mono`).
Tambahkan: **Anton** (`font-poster`) lewat `next/font/google`, khusus judul poster, angka stage, dan efek suara.

| Peran | Font | Ukuran (clamp) |
|---|---|---|
| Hero name | Anton, uppercase | `clamp(3rem, 11vw, 10rem)`, line-height 0.9 |
| Section title | Anton | `clamp(2rem, 6vw, 5rem)` |
| Label/metadata | Space Grotesk, uppercase, tracking 0.12em | 0.75-0.875rem |
| Body | Plus Jakarta Sans | 1rem / 1.7 |
| Kode/tag | JetBrains Mono | 0.8125rem |
| SFX | Anton, miring -6° | bebas, 3-8rem |

### 4.3 Motion tokens

```
--ease-out:   cubic-bezier(0.16, 1, 0.3, 1);     /* utama */
--ease-inout: cubic-bezier(0.76, 0, 0.24, 1);    /* transisi panel */
--dur-fast: 150ms; --dur-base: 350ms; --dur-slow: 700ms; --dur-hero: 1100ms;
--stagger: 60ms;
```

Aturan motion:
- Animasikan hanya `transform` dan `opacity` (plus `clip-path` untuk panel wipe).
- Semua animasi dimatikan/disederhanakan bila `prefers-reduced-motion: reduce`.
- Tidak ada animasi yang memblokir interaksi lebih dari 1.2 detik.

### 4.4 Bentuk & efek
- Radius kartu: 4px (tegas/editorial), bukan bulat.
- Border: 1px `--brass` @ 40% opacity; hover → 100% + glow `--stand` tipis bila interaktif.
- Overlay halftone (dot pattern) opacity 4-6% di hero; noise film grain 3%.
- Speed lines: SVG/CSS conic gradient radial, hanya muncul saat transisi atau saat stand dipanggil.

---

## 5. PORTOFOLIO 2D MODERN ("Classic Mode") — SPESIFIKASI PER BAGIAN

Library motion: `framer-motion@11` + `lenis` (smooth scroll). Tanpa GSAP.

### 5.1 Global
- **Smooth scroll** (Lenis, lerp 0.1), nonaktif jika reduced-motion.
- **Custom cursor** (desktop saja): titik 10px + ring 36px yang mengikuti dengan lag; membesar + teks "VIEW"/"PLAY" di atas elemen interaktif. Sembunyikan di touch.
- **Navbar**: logo `sqiftree` kiri, anchor tengah (Bio, Stages, Profil, Kontak), kanan: `ThemeToggle` + tombol `▶ PLAY INTRO`. Sticky, background blur, hilang saat scroll turun dan muncul saat scroll naik.
- **Scroll progress "race track"**: garis vertikal tipis di kanan layar; ikon kecil (pesawat RC V-tail) bergerak turun mengikuti progres scroll; titik checkpoint di tiap section.
- **Transisi section**: reveal teks per baris (mask slide-up, stagger 60ms), kartu fade+translateY 24px.
- **Tombol magnetik**: CTA bergeser mengikuti kursor (radius 80px, kekuatan 0.25).

### 5.2 Hero
- Latar: gambar twilight yang ada di `public/` + overlay gradien `--dusk` → `--bg`, parallax lambat (translateY 0 → 8vh saat scroll).
- Teks: label kecil `STAND USER · S1 INFORMATIKA UNS '24`, lalu `YASHIF VICTORIAWAN` (Anton raksasa, reveal per huruf), lalu `a.k.a. sqiftree`.
- Samping/bawah: **Stand Card** (lihat 7) dengan efek tilt 3D mengikuti kursor (max ±8°).
- Tombol: `[ ▶ MULAI INTRO GAME ]` (aksen garnet, solid) dan `[ LIHAT STAGES ]` (outline).
- Marquee berjalan di bawah hero: `FRONTEND ✦ MAVLINK ✦ TELEMETRY ✦ NEXT.JS ✦ KOTLIN ✦ DOCKER ✦` (kecepatan 40s/loop, pause saat hover).

### 5.3 Bio
- Layout asimetris 7/5 kolom. Teks bio kiri, kartu foto pixel-art `@sqiftree` kanan dengan frame ala panel komik (border tebal, bayangan offset 8px `--accent`).
- Teks muncul per kata saat masuk viewport.

### 5.4 Stages (Proyek)
- Judul: `STAGES` + subjudul `5 checkpoint · 1 perlombaan`.
- Desktop: **horizontal scroll sticky** (section dipin; kartu bergeser kiri saat scroll vertikal). Mobile: kartu vertikal biasa.
- Tiap kartu: angka besar `01`-`05` (Anton, outline stroke), judul, peran·tahun, stack tag (mono), ringkasan 2 baris, tombol `BUKA STAGE` → `ProjectModal` yang sudah ada.
- Garis checkpoint horizontal (`--sand`, dashed) menghubungkan kartu, dengan titik yang menyala saat kartu aktif.
- Hover kartu: naik 6px, border `--stand`, gambar zoom 1.04.

### 5.5 Prinsip Rekayasa
- Satu kutipan raksasa: "Antarmuka terbaik adalah yang bekerja tanpa membuat pengguna berpikir keras." (reveal per baris, latar speed lines samar).
- Di bawahnya chip disiplin teknikal (MAVLink, Zod Schema, Docker) dengan hover glow.

### 5.6 Profil (Stand Stats + Race Log)
- **Stand Stats**: radar chart 6 sumbu (SVG buatan sendiri, tanpa library) — lihat 7.
- **Race Log**: timeline vertikal dari `experience.ts`; tiap entri muncul bergantian kiri/kanan dengan garis `--sand`.

### 5.7 Kontak = FINISH LINE
- Latar bendera finish (pola kotak-kotak hitam/putih sangat samar).
- Email besar, klik = copy ke clipboard + toast `COPIED!` dengan efek SFX teks kecil.
- Tautan GitHub, LinkedIn, Instagram sebagai tombol outline magnetik. Kartu ketersediaan magang tetap ada.

### 5.8 Transisi antar mode
- Dari Classic → Intro: wipe diagonal (`clip-path: polygon`) 700ms warna `--accent`, lalu loading screen.
- Dari Intro → Classic: kebalikannya.

---

## 6. LOADING / TITLE SCREEN ("Stage 00")

State: `loading → title → cinematic → play`.

**Loading**
- Latar `--bg` + halftone. Tengah: teks `SQIFTREE RUN` (Anton, besar).
- Progress bar horizontal gaya "jalur balap": garis `--sand`, ikon pesawat RC bergerak sepanjang progres (pakai `useProgress` dari drei, nilai 0-100).
- Persentase besar di pojok kanan bawah (`74%`), font Anton.
- Tips acak (ganti tiap 3 detik, fade): 
  1. `WASD — bergerak · SHIFT — lari · SPACE — lompat`
  2. `Tekan E dekat benda bercahaya untuk melihat detail proyek.`
  3. `Klik kiri untuk menembak target Stage.`
  4. `Tekan ESC kapan saja untuk membuka menu.`
  5. `Setiap Stage adalah satu proyek nyata.`
  6. `Stand KING KRULE selalu mengikutimu.`
  7. `Tidak suka game? Tekan SKIP untuk portofolio klasik.`
- Tombol `SKIP → PORTOFOLIO KLASIK` kecil di pojok kiri bawah, selalu terlihat dan dapat difokus keyboard.

**Title**
- Setelah 100%: progress bar berubah jadi tombol `▶ PRESS START` (berkedip lembut, 1.2s). Enter/klik/tap memulai.
- Mencegah autoplay audio: audio baru dinyalakan setelah gestur ini (default tetap mute, toggle di HUD).

**Cinematic (±6 detik, bisa di-skip dengan tombol apa pun)**
1. 0-2s: kamera dolly dari jauh menuju pintu rumah saat senja.
2. 2-4s: pintu terbuka, kamera masuk lobby, berhenti di belakang karakter.
3. 4-6s: **Stand summon** — layar bergetar 0.4s, speed lines radial, teks SFX `DOON` slam-in, lalu `STAND : KING KRULE` muncul huruf per huruf di bawah; stand muncul sebagai siluet glow `--stand` di samping kanan-belakang karakter.
4. Fade HUD masuk → `play`.

---

## 7. KARAKTER, STAND, & STAND CARD

### 7.1 Karakter "sqiftree" (DESAIN ORISINAL)
Pemuda kurus, jaket panjang gelap bergaya frontier-modern (kerah tinggi, lengan digulung), celana kargo, sepatu bot, topi/beanie sederhana, tas selempang kecil. Palet gelap + aksen garnet pada syal atau lining jaket. Jangan meniru kostum karakter manapun. Low-poly stylized, cel/toon shading.

Placeholder awal: model humanoid Mixamo/Quaternius dengan material dibuat sendiri. Boleh diganti belakangan.

### 7.2 Stand "KING KRULE" (DESAIN ORISINAL)
- Siluet tinggi dan agak membungkuk, setengah transparan, glow `--stand` dengan outline `--accent`.
- Detail visual: lengan panjang menyerupai leher gitar yang menjadi "laras" saat menembak; kepala tertunduk; aura seperti kabut senja.
- Perilaku: mengambang di offset (+0.9, +0.4, -0.8) dari pemain, bob sinus (amplitudo 0.08m, periode 2.4s), menghadap arah bidik.
- **Kemampuan** (dipakai di game dan sebagai istilah UI):
  | Nama | Fungsi |
  |---|---|
  | **Reverb Shot** | Tembakan gelombang cincin (klik kiri) untuk memicu target Stage |
  | **Echo Pulse** | Tahan `Q`: semua hotspot terdekat menyala dan terlihat menembus dinding 3 detik (cooldown 8s) |
  | **Dusk Dash** | `Shift` + `W`: lari cepat dengan jejak glow (stamina 3s, recharge 4s) |

### 7.3 Stand Card (komponen UI, dipakai di hero & menu)
Kartu portrait (rasio 3:4), border `--brass`, tilt 3D.
Isi:
```
STAND USER   : YASHIF VICTORIAWAN
ALIAS        : sqiftree
STAND        : KING KRULE
TYPE         : Companion / Long-range
```
Plus radar chart 6 sumbu.

### 7.4 Stand Stats (radar chart)
Enam sumbu, nilai 0-5, dibaca dari `src/data/skills.ts` (tambahkan field `stat` bila belum ada). Usulan awal (UBAH sesuai kenyataan, jangan dikarang agent):

| Sumbu | Usulan nilai |
|---|---|
| FRONTEND | 4 |
| TELEMETRY / UAV | 3 |
| BACKEND & DATA | 2 |
| MOBILE | 2 |
| RELIABILITY | 3 |
| GROWTH POTENTIAL | 5 |

Animasi: poligon tumbuh dari titik tengah (700ms, `--ease-out`) saat masuk viewport; label sumbu memakai Space Grotesk uppercase.

---

## 8. DUNIA 3D ("The House")

### 8.1 Denah (meter, tampak atas; Utara di atas)

```
        0m                 8m                 16m
   0m   +------------------+------------------+
        |  A. WORKSHOP     |  B. WEB STUDIO   |
        |  UAV & Telemetry |  Bingilo, Jetis, |
        |                  |  HaloMBG, NEO    |
   6m   +--------+---------+---------+--------+
        |  D. LOBBY (spawn) | C. PROFIL &     |
        |  pintu depan (S)  |    KONTAK       |
  10m   +-------------------+-----------------+
                  ▲ pintu depan
```
Tinggi plafon 3m. Pintu antar ruangan lebar 1.4m. Lantai kayu, dinding plester hangat, pencahayaan senja dari jendela.

### 8.2 Hotspot (tekan `E`) & objek

| ID | Ruangan | Objek 3D | Konten (sumber data) | Aksi |
|---|---|---|---|---|
| `gcs-desk` | A | Meja + 2 monitor menampilkan artificial horizon palsu (shader sederhana) | Narash BUV GCS (`projects.ts`) | buka `ProjectModal` |
| `rc-plane` | A | Pesawat RC V-tail pusher digantung di plafon + rak drone | Hiasan, juga hotspot ke Race Log Bengawan UV | modal pengalaman |
| `kas-terminal` | B | Terminal kasir | Bingilo | `ProjectModal` |
| `window-desa` | B | Poster peta desa di dinding / jendela | Website Desa Jetis | `ProjectModal` |
| `phone-halombg` | B | Ponsel di dudukan | HaloMBG | `ProjectModal` |
| `neo-board` | B | Papan mockup UI | Prototype NEO MyPertamina | `ProjectModal` |
| `stats-board` | C | Papan besar berisi radar Stand Stats | `skills.ts` | overlay Stand Card |
| `race-log` | C | Papan gabus + foto/tiket | `experience.ts` | overlay timeline |
| `mailbox` | C | Kotak surat | Kontak | overlay kontak + copy email |
| `turntable` | D | Pemutar piringan hitam kecil | Toggle musik latar (default mute) | toggle audio |
| `front-door` | D | Pintu depan | Keluar | kembali ke Classic Mode |

Tambahkan `src/data/world.ts` berisi array `{ id, room, position:[x,y,z], rotationY, projectId?, type }`. Scene HARUS dirender dari data ini.

### 8.3 Mekanik

**Kontrol**

| Aksi | Desktop | Mobile |
|---|---|---|
| Gerak | WASD / panah | Joystick virtual kiri |
| Kamera | Mouse (pointer lock) | Geser layar kanan |
| Lari | Shift | Tombol RUN |
| Lompat | Space | Tombol JUMP |
| Interaksi | E | Tombol E |
| Tembak | Klik kiri | Tombol FIRE |
| Bidik | Klik kanan (tahan) | Tombol AIM |
| Echo Pulse | Q | Tombol Q |
| Menu | Esc | Ikon menu |

**Parameter pemain**
- Tinggi collider 1.8m, radius 0.35m. Jalan 2.5 m/s, lari 5 m/s, lompat 4.5 m/s (gravitasi 12).
- Rotasi badan lerp 0.15 menuju arah gerak.

**Kamera third-person**
- Jarak 3.2m, offset bahu kanan 0.6m, tinggi 1.6m.
- Saat AIM: jarak 2.0m, FOV 60 → 48, crosshair muncul, offset bahu 0.8m.
- Tabrak dinding: kamera maju (raycast anti-clipping).

**Menembak (Reverb Shot)**
- Raycast dari tengah kamera, jarak max 30m, cooldown 0.25s. Tanpa peluru fisik.
- Visual: cincin gelombang `--stand` memancar dari ujung "laras" stand ke titik hit; SFX teks kecil `KRRK`.
- Target: lambang melayang (diamond) di atas tiap hotspot Stage. Kena tembak → target berdenyut, SFX `DOON`, lalu `ProjectModal` terbuka.
- Tembak selain target: efek percikan kecil, tanpa dampak.

**HUD**
- Kiri atas: `STAGE` indikator (berapa Stage sudah dibuka: `2/5`).
- Bawah tengah: prompt `[E] Buka Narash BUV GCS` saat dekat hotspot.
- Kanan bawah: ikon kemampuan (Echo Pulse, Dusk Dash) dengan cooldown ring.
- Kanan atas: toggle audio, tombol `SKIP → KLASIK`, tombol menu.
- Minimap kecil opsional (stretch).

### 8.4 Gaya visual (agar terasa "game", bukan demo)
- **Cel/toon shading**: `MeshToonMaterial` dengan gradient map 3-4 tingkat.
- **Outline tinta**: inverted-hull (mesh duplikat skala 1.03, backface, hitam) untuk karakter dan benda penting. Murah dan cocok gaya manga.
- **Pencahayaan golden hour**: directional light `#FFB070` intensitas 2.2 dari jendela barat, ambient `#2A2B44` 0.6, hemisphere ringan. Bayangan lembut (map 2048, radius 4).
- **Fog** `#1a1b2e` near 8, far 40 untuk kedalaman.
- **Postprocessing** (`@react-three/postprocessing`): Bloom (intensitas 0.6, luminanceThreshold 0.85, hanya benda emissive), Vignette (0.35), ChromaticAberration sangat halus (0.0006), Noise (0.03), ToneMapping ACES.
- **Partikel debu** di sinar jendela (±150 partikel, sprite kecil).
- Material emissive `--stand` pada hotspot agar terlihat jelas.

### 8.5 Anggaran performa
- Target 60fps di laptop GPU integrasi; turun otomatis ke "low" (matikan postprocessing & bayangan) jika FPS rata-rata < 40 selama 3 detik.
- Total aset 3D < 15 MB (glb + Draco), tekstur maks 1024px, 1 draw call untuk furnitur statis jika memungkinkan (instancing/merge).
- Bundle intro dimuat lazy; **tidak boleh menambah JS di halaman Classic Mode lebih dari ±30 KB** sebelum tombol Play ditekan.

---

## 9. EFEK KOMIK (SFX, SPEED LINES, PANEL)

| Efek | Pemicu | Spesifikasi |
|---|---|---|
| Teks SFX | Stand summon, hit target, copy email | Anton, miring -6°, stroke `--bg` 4px, warna `--accent`/`--sand`; muncul scale 1.6→1 + shake 200ms, hilang 900ms |
| Speed lines | Cinematic, buka modal, transisi mode | Radial conic gradient, opacity 0→0.5→0 dalam 500ms |
| Panel wipe | Pindah mode, buka modal besar | `clip-path` polygon diagonal 700ms `--ease-inout` |
| Halftone | Hero, modal | Pola titik 6px, opacity 5% |
| Screen shake | Summon, target hit | translate acak ±4px, 300-400ms, dimatikan saat reduced-motion |

Daftar SFX teks yang boleh dipakai: `DOON`, `KRRK`, `WHUMM`, `RUMBLE`, `SHHHK`, `COPIED!`.

---

## 10. STRUKTUR FILE & STATE

```
src/
├── app/
│   ├── page.tsx              # Classic Mode + pintu masuk intro
│   └── globals.css           # tambah tokens bagian 4
├── components/
│   ├── StandCard.tsx
│   ├── StatRadar.tsx
│   ├── Marquee.tsx
│   ├── Cursor.tsx
│   ├── MagneticButton.tsx
│   ├── RaceTrackProgress.tsx
│   ├── PanelWipe.tsx
│   ├── SfxText.tsx
│   └── (existing) ProjectModal, ProjectCard, ThemeToggle
├── game/
│   ├── GameRoot.tsx          # dynamic import, ssr:false
│   ├── Scene.tsx
│   ├── House.tsx
│   ├── Player.tsx
│   ├── StandCompanion.tsx
│   ├── Hotspot.tsx
│   ├── Targets.tsx
│   ├── Shooting.ts
│   ├── LoadingScreen.tsx
│   ├── Cinematic.tsx
│   ├── HUD.tsx
│   ├── controls.ts
│   ├── quality.ts            # auto low/high
│   └── store.ts              # zustand
└── data/
    ├── projects.ts | skills.ts | experience.ts   (existing)
    └── world.ts                                   (baru)
public/models/ (+ CREDITS.md)
```

**State machine (`store.ts`)**
```
mode:   'classic' | 'intro'
phase:  'loading' | 'title' | 'cinematic' | 'play' | 'modal' | 'paused'
quality:'high' | 'low'
audio:  boolean (default false)
opened: Set<projectId>
```

---

## 11. DEPENDENSI (HANYA INI)

```
three@0.169  @types/three@0.169 (dev)
@react-three/fiber@8   @react-three/drei@9
@react-three/rapier@1  @react-three/postprocessing@2
zustand  framer-motion@11  lenis
```
Instal lewat: `docker compose run --rm dev npm i <paket>`. Jangan upgrade ke fiber v9 (butuh React 19).

---

## 12. FASE & DEFINITION OF DONE

**Fase 1 — Tokens & UI 2D statis**
- [ ] Tokens bagian 4 ada di `globals.css`, dark & light.
- [ ] Anton ter-load, kelas `font-poster` tersedia.
- [ ] Hero, Bio, Stages, Prinsip, Profil, Kontak sesuai bagian 5 (tanpa motion dulu).
- [ ] Stand Card & Stat Radar tampil dengan data dari `skills.ts`.
- [ ] Tidak ada overflow horizontal di 375px.

**Fase 2 — Motion Classic Mode**
- [ ] Lenis, custom cursor, magnetic button, marquee, reveal per baris.
- [ ] Horizontal sticky Stages (desktop), vertikal (mobile).
- [ ] Race track progress di kanan.
- [ ] Reduced-motion mematikan semuanya dengan rapi.

**Fase 3 — Loading/Title/Skip**
- [ ] Tombol `▶ PLAY INTRO` memicu panel wipe → loading screen sesuai bagian 6.
- [ ] Progress nyata, tips berganti, `PRESS START`, tombol Skip.

**Fase 4 — Blockout rumah + pemain**
- [ ] Rumah kotak abu-abu sesuai denah, collider Rapier, tidak bisa tembus dinding.
- [ ] Player + kamera bahu + sprint + lompat. Tanpa jitter.

**Fase 5 — Hotspot, tembak, modal**
- [ ] Semua hotspot bagian 8.2 muncul dari `world.ts`.
- [ ] `E` dan tembak target membuka `ProjectModal` yang benar. `Esc` menutup.
- [ ] HUD sesuai 8.3. Counter Stage terbuka berfungsi.

**Fase 6 — Stand & efek**
- [ ] Stand mengikuti pemain, Reverb Shot, Echo Pulse, Dusk Dash.
- [ ] Cinematic summon + SFX teks + speed lines.

**Fase 7 — Aset & polish**
- [ ] Ganti blockout dengan model .glb ringan, toon + outline, pencahayaan, postprocessing, partikel.
- [ ] `CREDITS.md` lengkap. Total aset < 15 MB.

**Fase 8 — Fallback & rilis**
- [ ] Auto-quality low, fallback mobile/WebGL gagal/reduced-motion ke Classic.
- [ ] Kontrol sentuh berfungsi atau fallback jelas.
- [ ] `./dev.sh prod` jalan tanpa error; Lighthouse Classic Mode: Performance ≥ 85, Accessibility ≥ 95.

**Stretch (hanya setelah semua di atas selesai)**
- "THE RUN": jalur padang pasir di luar rumah dengan 5 checkpoint (= 5 Stage), dilintasi dengan pesawat RC / kuda stylized. Tidak boleh dikerjakan sebelum Fase 8 lulus.

---

## 13. PROMPT PEMULIHAN (jika agent menyimpang)

```
Berhenti. Kamu menyimpang dari BLUEPRINT-SQIFTREE-RUN.md.
1) Sebutkan fase aktif dan DoD-nya (salin checklist dari bagian 12).
2) Tandai tiap item: sudah / belum, beserta file bukti.
3) Daftar semua hal yang kamu ubah di luar fase ini, lalu revert.
4) Lanjutkan hanya item yang belum, satu per satu.
Jangan menambah library, jangan mengubah src/data/*, jangan mengubah desain tokens.
```

**Prompt awal (tempel di agent):**
```
Baca penuh agent/context/BLUEPRINT-SQIFTREE-RUN.md. Itu satu-satunya sumber desain.
Ikuti bagian 0 (cara kerja). Mulai dari Fase 1. Sebelum menulis kode, restate rencana
dan DoD Fase 1 dalam maksimal 8 baris. Setelah selesai, jalankan lint/tsc/build dan
tunjukkan checklist DoD yang sudah diperiksa.
```

---

## 14. SUMBER ASET (lisensi bebas)

- Model: Kenney (kenney.nl), Quaternius (quaternius.com), Poly Pizza (poly.pizza); filter lisensi CC0 di Sketchfab.
- Animasi karakter: Mixamo.
- Kompres: `gltf-transform` (Draco/meshopt) atau `gltfjsx --transform`.
- Font: Google Fonts (Anton, Outfit, Space Grotesk, Plus Jakarta Sans, JetBrains Mono).
- Audio: file buatan sendiri / bebas royalti; JANGAN memakai lagu atau sampel King Krule.

---

## 15. HAL YANG HARUS DIKONFIRMASI USER SEBELUM FASE TERKAIT

1. Nilai Stand Stats (7.4) — usulan di atas hanya tebakan awal.
2. Referensi reel: tambahkan 3-5 poin ciri khas (transisi, layout, mood) di sini agar agent menyesuaikan Fase 1-2:
   - `[REFERENSI REEL 1]`
   - `[REFERENSI REEL 2]`
   - `[REFERENSI REEL 3]`
3. Foto/pixel-art karakter untuk dijadikan acuan model 3D (opsional).
4. File musik latar milik sendiri (opsional).
