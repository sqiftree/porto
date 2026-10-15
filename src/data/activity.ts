export interface ActivityItem {
  id: string;
  type: "commit" | "release" | "test" | "flight";
  repo: string;
  message: string;
  relativeTime: string;
  hash?: string;
  badge: string;
  url: string;
}

export const recentActivityData: ActivityItem[] = [
  {
    id: "act-1",
    type: "flight",
    repo: "bengawan-uv/narash-buv",
    message: "telemetry: optimize MAVLink radio packet buffer for KRTI 2026 regional selection",
    relativeTime: "Aktif",
    hash: "GCS v2.2",
    badge: "MAVLink Telemetry",
    url: "https://github.com/sqiftree"
  },
  {
    id: "act-2",
    type: "commit",
    repo: "sqiftree/website-desa-jetis",
    message: "feat: update public service directory & mobile accessibility for warga Desa Jetis",
    relativeTime: "Kemarin",
    hash: "6f4a81b",
    badge: "Public Portal",
    url: "https://github.com/sqiftree/website-desa-jetis"
  },
  {
    id: "act-3",
    type: "test",
    repo: "client/bingilo-ledger",
    message: "qa(testing): automated edge-case assertion for multi-entry balance reconciliation",
    relativeTime: "2 hari lalu",
    hash: "verified",
    badge: "Zero Regression",
    url: "https://github.com/sqiftree"
  },
  {
    id: "act-4",
    type: "commit",
    repo: "sqiftree/HaloMBG-mobile",
    message: "build(gradle): configure Material UI components & Jetpack navigation graph in Kotlin",
    relativeTime: "4 hari lalu",
    hash: "8c21a9e",
    badge: "Kotlin Android",
    url: "https://github.com/sqiftree/HaloMBG-mobile"
  },
  {
    id: "act-5",
    type: "commit",
    repo: "sqiftree/prototype_NEOMyPertamina",
    message: "ui(prototype): interactive quick-checkout flow with responsive CSS layout",
    relativeTime: "1 minggu lalu",
    hash: "31d04ba",
    badge: "UI Concept",
    url: "https://github.com/sqiftree/prototype_NEOMyPertamina"
  },
  {
    id: "act-6",
    type: "release",
    repo: "sqiftree/sqiftree",
    message: "docs(profile): update active stack, Arlecchino garnet theme, and contact links",
    relativeTime: "Terbaru",
    hash: "main",
    badge: "Pull Shark x2",
    url: "https://github.com/sqiftree/sqiftree"
  }
];
