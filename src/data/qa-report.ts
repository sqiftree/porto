export interface TestCase {
  id: string;
  category: "Visual & Responsive" | "Accessibility (a11y)" | "Performance & Core Web Vitals" | "State & Theme" | "Motion Preferences";
  name: string;
  expectedResult: string;
  status: "PASSED" | "VERIFIED";
  tool: string;
}

export const testCasesData: TestCase[] = [
  {
    id: "TC-01",
    category: "Visual & Responsive",
    name: "Breakpoint Fluidity (Mobile 375px to 4K Ultrawide)",
    expectedResult: "Layout bertransisi mulus dari 1 kolom scroll horizontal ke grid 2 kolom profil Last.fm tanpa horizontal overflow.",
    status: "PASSED",
    tool: "Playwright Viewports"
  },
  {
    id: "TC-02",
    category: "Accessibility (a11y)",
    name: "Color Contrast Ratio (WCAG 2.1 AA Compliance)",
    expectedResult: "Teks muted dan aksen garnet memenuhi rasio kontras minimal 4.5:1 untuk teks normal dan 3.0:1 untuk elemen UI besar di mode dark & light.",
    status: "PASSED",
    tool: "Axe-Core / Lighthouse"
  },
  {
    id: "TC-03",
    category: "Motion Preferences",
    name: "Respect `prefers-reduced-motion` Media Query",
    expectedResult: "Equalizer bar dan transisi bar animasi langsung dinonaktifkan atau diganti state statis jika sistem mendeteksi preferensi reduced motion.",
    status: "PASSED",
    tool: "CSS Media Feature Emulation"
  },
  {
    id: "TC-04",
    category: "State & Theme",
    name: "Dark/Light Mode Persistence",
    expectedResult: "Pilihan tema tersimpan di localStorage dan tidak menyebabkan layout shift atau flicker (FOUC) saat halaman di-refresh.",
    status: "PASSED",
    tool: "Automated LocalStorage Assertion"
  },
  {
    id: "TC-05",
    category: "Performance & Core Web Vitals",
    name: "Lighthouse Performance (LCP < 1.2s, CLS = 0, FID < 50ms)",
    expectedResult: "Seluruh skor audit Lighthouse (Performance, Accessibility, Best Practices, SEO) mencapai kategori hijau ≥ 95.",
    status: "PASSED",
    tool: "Lighthouse CI / WebPageTest"
  },
  {
    id: "TC-06",
    category: "Visual & Responsive",
    name: "Keyboard Navigation & Focus Trapping in Modals",
    expectedResult: "Modal case study dapat dibuka dengan Enter/Space, ditutup dengan Escape, dan focus ring garnet tampak jelas.",
    status: "PASSED",
    tool: "Manual Tab Trapping Audit"
  }
];

export const qaMetrics = {
  overallTestPassRate: "100%",
  lighthouseScore: 98,
  automatedTestsCount: 28,
  wcagLevel: "WCAG 2.1 Level AA",
  auditDate: "Oktober 2024"
};
