export interface ProjectCaseStudy {
  problem: string;
  role: string;
  solution: string;
  myContribution: string[];
  results: string[];
  lessons: string;
  links: {
    github?: string;
    demo?: string;
    docs?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Robotics & UAV" | "Frontend & Web" | "Mobile & Apps" | "Client & Public Sector";
  year: string;
  role: string;
  stack: string[];
  featured: boolean;
  coverAccent: string;
  scrobbleMetric: string; // Last.fm flavor metric
  repoUrl?: string;
  caseStudy: ProjectCaseStudy;
}

export const projectsData: Project[] = [
  {
    id: "narash-buv",
    title: "Narash BUV — Ground Control Station (GCS)",
    tagline: "Sistem kendali telemetri darat MAVLink dan arsitektur interface untuk wahana Narash BUV Tim Bengawan UV UNS di KRTI 2026.",
    category: "Robotics & UAV",
    year: "2024–2026",
    role: "GCS & Telemetry Interface Programmer",
    stack: ["TypeScript", "React", "MAVLink", "ROS2 Bridge", "WebSockets", "Leaflet", "C++"],
    featured: true,
    coverAccent: "#B3263A",
    scrobbleMetric: "KRTI 2026 Regional Selection",
    repoUrl: "https://github.com/sqiftree",
    caseStudy: {
      problem:
        "Misi wahana tanpa awak pada Kontes Robot Terbang Indonesia (KRTI) membutuhkan pemantauan parameter telemetri (attitude, GPS, battery voltage, airspeed, failsafe state) secara instan tanpa latency lag.",
      role: "GCS & Programming untuk tim Narash BUV (bersama tim Ambalap - Bengawan UV Team UNS) yang berkompetisi pada KRTI 2026. Bertanggung jawab atas konfigurasi telemetri MAVLink darat dan monitoring visual.",
      solution:
        "Merancang antarmuka GCS responsif dengan parsing stream paket biner MAVLink berkecepatan tinggi, integrasi peta waypoint dinamis, dan visualisasi artificial horizon yang presisi.",
      myContribution: [
        "Mengembangkan modul parsing telemetri MAVLink dan integrasi data stream serial radio ke dashboard web.",
        "Merancang antarmuka status wahana (altitude, heading, airspeed, mode penerbangan) dengan rendering hemat daya.",
        "Mengonfigurasi fail-safe audio & visual alerts saat koneksi telemetri atau RSSI mengalami degradasi di lapangan."
      ],
      results: [
        "Menjadi basis sistem Ground Control Station resmi wahana Narash BUV untuk seleksi KRTI 2026.",
        "Mendukung keandalan data telemetry tim Bengawan UV UNS (peraih Juara 1 Divisi Racing Plane KRTI Nasional).",
        "Zero packet dropping pada transmisi radio darat frekuensi tinggi."
      ],
      lessons:
        "Dalam sistem robotika mission-critical, stabilitas parsing biner dan feedback visual operator jauh lebih krusial daripada animasi visual yang berlebihan.",
      links: {
        github: "https://github.com/sqiftree"
      }
    }
  },
  {
    id: "bingilo-ledger",
    title: "Bingilo — Aplikasi Pembukuan & Ledger",
    tagline: "Platform pembukuan keuangan dan manajemen ledger terintegrasi: dari riset requirement klien, frontend engineering, hingga QA otomatis.",
    category: "Frontend & Web",
    year: "2024",
    role: "End-to-End Frontend & QA Developer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "Playwright", "Jest"],
    featured: true,
    coverAccent: "#C9B28A",
    scrobbleMetric: "Full Cycle: Client to QA",
    repoUrl: "https://github.com/sqiftree",
    caseStudy: {
      problem:
        "Klien membutuhkan sistem ledger pembukuan yang andal, mudah digunakan oleh staf non-teknis, namun memiliki validasi data finansial yang sangat ketat untuk mencegah selisih hitung.",
      role: "Full-cycle developer: turun langsung mencari klien, mengidentifikasi requirement bisnis, merancang antarmuka frontend, hingga memimpin proses Quality Assurance (QA).",
      solution:
        "Membangun arsitektur form reaktif berbasis validasi skema Zod dan TypeScript strictly-typed, dilengkapi suite automated regression test untuk menjamin keakuratan kalkulasi neraca.",
      myContribution: [
        "Menggali proses bisnis klien dan merumuskan spesifikasi fungsional menjadi backlog teknis yang terukur.",
        "Membangun antarmuka dashboard ledger dengan Next.js dan Tailwind CSS berfokus pada kecepatan input data keyboard.",
        "Menerapkan pengujian QA fungsional dan automated edge-case test untuk seluruh alur transaksi kredit & debit."
      ],
      results: [
        "Menghilangkan potensi human error pada input data transaksi berkat validasi schema real-time.",
        "Sistem berhasil diadopsi klien dengan zero regression bug saat rilis produksi perdana.",
        "Meningkatkan kecepatan pembukuan harian operasional klien hingga 40%."
      ],
      lessons:
        "Kunci keberhasilan proyek klien adalah empati terhadap kebutuhan operasional nyata dan penjaminan kualitas (QA) sejak hari pertama perancangan.",
      links: {
        github: "https://github.com/sqiftree"
      }
    }
  },
  {
    id: "website-desa-jetis",
    title: "Website Desa Jetis Karanganyar",
    tagline: "Portal layanan publik, transparansi informasi, dan profil potensi Desa Jetis, Kecamatan Jaten, Kabupaten Karanganyar.",
    category: "Client & Public Sector",
    year: "2024",
    role: "Lead Web Developer",
    stack: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
    featured: true,
    coverAccent: "#38A169",
    scrobbleMetric: "Public Service Portal",
    repoUrl: "https://github.com/sqiftree/website-desa-jetis",
    caseStudy: {
      problem:
        "Masyarakat Desa Jetis dan pihak luar membutuhkan akses informasi publik yang cepat, transparan, dan dapat diakses dengan mudah melalui perangkat mobile dengan koneksi terbatas.",
      role: "Lead Web Developer merancang dan membangun website resmi profil desa dari awal hingga dapat diakses publik.",
      solution:
        "Membangun website publik yang ramah pengguna, ringan, dan informatif dengan navigasi intuitif untuk layanan administrasi kependudukan dan berita desa.",
      myContribution: [
        "Merancang arsitektur informasi dan tata letak layanan publik agar mudah dipahami warga berbagai usia.",
        "Mengoptimalkan aset gambar dan skrip web agar waktu loading tetap di bawah 1.5 detik pada koneksi 3G/4G.",
        "Menghubungkan saluran kontak layanan langsung aparatur desa untuk mempermudah aduan warga."
      ],
      results: [
        "Website resmi aktif dan menjadi rujukan informasi warga Desa Jetis, Kecamatan Jaten.",
        "Skor performa dan aksesibilitas tinggi berkat markup semantik yang bersih.",
        "Repositori publik terawat di GitHub: `sqiftree/website-desa-jetis`."
      ],
      lessons:
        "Membangun teknologi untuk sektor publik membutuhkan fokus utama pada kesederhanaan navigasi dan inklusivitas akses bagi semua kalangan masyarakat.",
      links: {
        github: "https://github.com/sqiftree/website-desa-jetis"
      }
    }
  },
  {
    id: "halombg-mobile",
    title: "HaloMBG — Mobile Application",
    tagline: "Aplikasi mobile berbasis Android Kotlin dengan arsitektur modern untuk sistem layanan terpadu.",
    category: "Mobile & Apps",
    year: "2024",
    role: "Android Developer",
    stack: ["Kotlin", "Android SDK", "Jetpack", "Material Design", "Gradle"],
    featured: true,
    coverAccent: "#A97BFF",
    scrobbleMetric: "Native Kotlin Android",
    repoUrl: "https://github.com/sqiftree/HaloMBG-mobile",
    caseStudy: {
      problem:
        "Kebutuhan antarmuka seluler yang responsif dan native untuk mendukung alur interaksi pengguna secara real-time pada perangkat Android.",
      role: "Mobile App Developer mengembangkan antarmuka dan logika aplikasi berbasis Kotlin.",
      solution:
        "Mengadopsi pola arsitektur bersih di Kotlin Android menggunakan komponen Jetpack dan Material UI yang konsisten.",
      myContribution: [
        "Mengimplementasikan komponen UI native Android dengan Material Design guidelines.",
        "Mengelola lifecycle aplikasi dan asynchronous data flow agar bebas dari ANR (Application Not Responding).",
        "Menata struktur Gradle build dan modularitas kode pada repositori `sqiftree/HaloMBG-mobile`."
      ],
      results: [
        "Aplikasi berjalan mulus pada berbagai versi Android dengan performa native 60fps.",
        "Repositori open source di GitHub dengan kode Kotlin yang terstruktur rapi."
      ],
      lessons:
        "Pemahaman siklus hidup Activity dan Fragment pada Kotlin Android sangat penting untuk stabilitas memori aplikasi seluler.",
      links: {
        github: "https://github.com/sqiftree/HaloMBG-mobile"
      }
    }
  },
  {
    id: "prototype-neomypertamina",
    title: "Prototype NEO MyPertamina",
    tagline: "Eksplorasi perancangan antarmuka interaktif UI/UX modern untuk layanan digital bahan bakar dan loyalty.",
    category: "Frontend & Web",
    year: "2024",
    role: "Frontend & UI Prototyper",
    stack: ["HTML5", "CSS3", "JavaScript", "Figma", "UI/UX Architecture"],
    featured: false,
    coverAccent: "#E34C26",
    scrobbleMetric: "Interactive UI Concept",
    repoUrl: "https://github.com/sqiftree/prototype_NEOMyPertamina",
    caseStudy: {
      problem:
        "Aplikasi layanan publik skala besar membutuhkan antarmuka yang cepat diakses, minim klik, dan memberikan kejelasan status transaksi dalam hitungan detik bagi pengemudi.",
      role: "UI Prototyper & Frontend Engineer merancang konsep alur transaksi digital yang lebih ramping.",
      solution:
        "Membangun prototipe web interaktif 'NEO MyPertamina' yang mendemonstrasikan perbaikan UX pada alur pembayaran dan pemilihan produk bahan bakar.",
      myContribution: [
        "Menerjemahkan wireframe Figma ke dalam prototipe web interaktif dengan transisi mulus.",
        "Merancang tata letak pembayaran cepat (quick-checkout) dengan feedback visual yang tegas."
      ],
      results: [
        "Menjadi bahan studi UX dan eksplorasi antarmuka pada repositori `sqiftree/prototype_NEOMyPertamina`."
      ],
      lessons:
        "Desain yang baik selalu memprioritaskan pengurangan friksi kognitif pengguna di situasi nyata yang terburu-buru.",
      links: {
        github: "https://github.com/sqiftree/prototype_NEOMyPertamina"
      }
    }
  }
];
