/**
 * World definitions for 3D "The House" (Blueprint 8.1 & 8.2)
 * Room A: WORKSHOP (UAV & Telemetry)
 * Room B: WEB STUDIO (Bingilo, Jetis, HaloMBG, NEO)
 * Room C: PROFIL & KONTAK (Stand Stats, Race Log, Mailbox)
 * Room D: LOBBY & SPAWN (Turntable, Front Door)
 */

export interface HotspotDef {
  id: string;
  room: "WORKSHOP" | "WEB STUDIO" | "PROFIL & KONTAK" | "LOBBY";
  title: string;
  label: string;
  position: [number, number, number]; // [x, y, z]
  targetPosition?: [number, number, number]; // Floating diamond target position
  projectId?: string;
  type: "project" | "skills" | "experience" | "contact" | "turntable" | "exit";
  icon?: string;
}

export const ROOM_BOUNDS = {
  WORKSHOP: { minX: -8, maxX: 0, minZ: -5, maxZ: 0 },
  WEB_STUDIO: { minX: 0, maxX: 8, minZ: -5, maxZ: 0 },
  LOBBY: { minX: -8, maxX: 0, minZ: 0, maxZ: 5 },
  PROFIL: { minX: 0, maxX: 8, minZ: 0, maxZ: 5 },
};

// Dinding AABB: [pusatX, pusatZ, lebar, dalam]
// Plafon 3m, tebal dinding 0.3m
export const WALL_DEFS: [number, number, number, number][] = [
  // Dinding luar (Keliling rumah 16m x 10m)
  [0, -5, 16, 0.3],     // Dinding Utara (Workshop & Web Studio)
  [0, 5, 16, 0.3],      // Dinding Selatan (Lobby & Profil)
  [-8, 0, 0.3, 10],     // Dinding Barat
  [8, 0, 0.3, 10],      // Dinding Timur

  // Pembagi Ruang Utara-Selatan (z = 0) dengan pintu lebar 2.2m di tengah koridor
  [-5, 0, 6, 0.3],      // Pembagi Workshop & Lobby (bagian kiri)
  [5, 0, 6, 0.3],       // Pembagi Web Studio & Profil (bagian kanan)

  // Pembagi Ruang Barat-Timur (x = 0)
  [0, -2.5, 0.3, 5],    // Pembagi Workshop & Web Studio (dengan bukaan pintu di z = -0.5)
  [0, 3.5, 0.3, 3],     // Pembagi Lobby & Profil (dengan bukaan pintu di z = 1.0)
];

export const HOTSPOTS_DATA: HotspotDef[] = [
  // ─── ROOM A: WORKSHOP (UAV & TELEMETRY) ──────────────────────────
  {
    id: "gcs-desk",
    room: "WORKSHOP",
    title: "Narash BUV — Ground Control Station",
    label: "GCS Telemetry Workstation",
    position: [-5.5, 0.8, -3.8],
    targetPosition: [-5.5, 2.0, -3.8],
    projectId: "narash-buv",
    type: "project",
  },
  {
    id: "rc-plane",
    room: "WORKSHOP",
    title: "Wahana Nirawak Narash BUV",
    label: "Bengawan UV Fixed-Wing Hangar",
    position: [-2.5, 1.8, -3.2],
    targetPosition: [-2.5, 2.3, -3.2],
    projectId: "narash-buv",
    type: "project",
  },

  // ─── ROOM B: WEB STUDIO (SOFTWARE & APPS) ────────────────────────
  {
    id: "kas-terminal",
    room: "WEB STUDIO",
    title: "Bingilo — Aplikasi Pembukuan Kas",
    label: "UMKM Ledger POS Terminal",
    position: [2.5, 0.8, -3.8],
    targetPosition: [2.5, 2.0, -3.8],
    projectId: "bingilo-ledger",
    type: "project",
  },
  {
    id: "window-desa",
    room: "WEB STUDIO",
    title: "Website Desa Jetis Karanganyar",
    label: "Peta & Portal Layanan Publik",
    position: [6.2, 1.3, -4.7],
    targetPosition: [6.2, 2.1, -4.7],
    projectId: "website-desa-jetis",
    type: "project",
  },
  {
    id: "phone-halombg",
    room: "WEB STUDIO",
    title: "HaloMBG — Mobile App Interface",
    label: "Android Kotlin Test Device",
    position: [6.5, 0.8, -2.0],
    targetPosition: [6.5, 2.0, -2.0],
    projectId: "halombg-mobile",
    type: "project",
  },
  {
    id: "neo-board",
    room: "WEB STUDIO",
    title: "Prototype NEO MyPertamina",
    label: "UX Flow Exploration Board",
    position: [3.2, 1.3, -0.2],
    targetPosition: [3.2, 2.1, -0.2],
    projectId: "prototype-neomypertamina",
    type: "project",
  },

  // ─── ROOM C: PROFIL & KONTAK ─────────────────────────────────────
  {
    id: "stats-board",
    room: "PROFIL & KONTAK",
    title: "Stand Stats & Tech Skills",
    label: "Engineering Capabilities Radar",
    position: [5.8, 1.4, 3.2],
    targetPosition: [5.8, 2.1, 3.2],
    type: "skills",
  },
  {
    id: "race-log",
    room: "PROFIL & KONTAK",
    title: "Race Log — Rekam Jejak & Pengalaman",
    label: "Bengawan UV & Informatics UNS",
    position: [2.8, 1.4, 4.7],
    targetPosition: [2.8, 2.1, 4.7],
    type: "experience",
  },
  {
    id: "mailbox",
    room: "PROFIL & KONTAK",
    title: "Kotak Kontak — yashif.vkt@gmail.com",
    label: "Kirim Pesan / Salin Email",
    position: [6.5, 0.8, 4.5],
    targetPosition: [6.5, 1.8, 4.5],
    type: "contact",
  },

  // ─── ROOM D: LOBBY & SPAWN ───────────────────────────────────────
  {
    id: "turntable",
    room: "LOBBY",
    title: "Turntable Ambient Audio",
    label: "Toggle Suara Latar",
    position: [-4.5, 0.8, 3.8],
    targetPosition: [-4.5, 1.8, 3.8],
    type: "turntable",
  },
  {
    id: "front-door",
    room: "LOBBY",
    title: "Pintu Depan — Kembali ke Portofolio Klasik",
    label: "Keluar dari The House (Classic Mode)",
    position: [0, 1.2, 4.7],
    targetPosition: [0, 2.2, 4.7],
    type: "exit",
  },
];
