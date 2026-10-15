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
  scrobbleMetric: string;
  repoUrl?: string;
  caseStudy: ProjectCaseStudy;
}

export const projectsData: Project[] = [
  {
    id: "narash-buv",
    title: "Narash BUV — Ground Control Station (GCS)",
    tagline: "Antarmuka Ground Control Station berbasis web untuk visualisasi telemetri wahana Narash BUV pada tim Bengawan UV UNS.",
    category: "Robotics & UAV",
    year: "2024–Sekarang",
    role: "GCS & Telemetry Programmer",
    stack: ["React", "TypeScript", "MAVLink", "Leaflet", "WebSockets", "Tailwind CSS"],
    featured: true,
    coverAccent: "#0062FF",
    scrobbleMetric: "Bengawan UV UNS",
    repoUrl: "https://github.com/sqiftree",
    caseStudy: {
      problem:
        "Operator darat wahana tanpa awak membutuhkan dashboard pemantau data penerbangan (attitude horizon, koordinat GPS, altitude, dan status daya) yang mudah dibaca secara langsung dari stasiun darat.",
      role: "Programmer GCS pada sub-tim Narash BUV (Bengawan UV Team UNS), berfokus pada pengembangan antarmuka visual stasiun kendali darat dan integrasi pembacaan telemetri MAVLink.",
      solution:
        "Membangun dashboard stasiun kendali darat berbasis web yang memetakan data koordinat ke peta interaktif Leaflet serta instrumen status wahana yang bersih dan mudah dipantau.",
      myContribution: [
        "Merancang antarmuka pemantauan status penerbangan (altitude, heading, artificial horizon, voltase baterai).",
        "Mengintegrasikan peta interaktif Leaflet untuk pelacakan pergerakan koordinat wahana.",
        "Menyusun tata letak dashboard yang responsif dan mengutamakan kenyamanan pandangan operator saat pengujian."
      ],
      results: [
        "Membantu sub-tim Narash BUV dalam proses uji coba komunikasi data telemetri darat.",
        "Memberikan alternatif antarmuka visual yang ringan untuk keperluan observasi pengujian wahana."
      ],
      lessons:
        "Dalam sistem kendali darat, kejelasan pembacaan instrumen dan kestabilan tampilan jauh lebih krusial dibandingkan efek visual yang terlalu padat.",
      links: {
        github: "https://github.com/sqiftree"
      }
    }
  },
  {
    id: "bingilo-ledger",
    title: "Bingilo — Aplikasi Pembukuan Kas",
    tagline: "Aplikasi web pembukuan kas dan pencatatan transaksi terstruktur untuk membantu pengelolaan keuangan harian UMKM.",
    category: "Frontend & Web",
    year: "2024",
    role: "Frontend Developer",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Zod"],
    featured: true,
    coverAccent: "#FF5500",
    scrobbleMetric: "Web App Solution",
    repoUrl: "https://github.com/sqiftree",
    caseStudy: {
      problem:
        "Pelaku usaha mikro dan staf non-teknis membutuhkan aplikasi pencatatan kas masuk dan keluar yang sederhana, cepat diinput, dan minim potensi salah catat nominal.",
      role: "Frontend Developer yang merancang tata letak dan logika form interaktif pencatatan kas harian.",
      solution:
        "Membangun antarmuka berbasis Next.js dengan validasi form Zod real-time untuk memastikan setiap transaksi kas memiliki format nominal dan tanggal yang benar.",
      myContribution: [
        "Membangun komponen UI dashboard transaksi kas menggunakan Next.js dan Tailwind CSS.",
        "Menerapkan validasi skema form berbasis Zod untuk mencegah kesalahan input pengguna.",
        "Mengoptimalkan alur interaksi pencatatan agar nyaman digunakan melalui keyboard pada perangkat desktop dan laptop."
      ],
      results: [
        "Mempermudah pengguna dalam mencatat arus kas harian tanpa kebingungan fungsi akuntansi yang rumit.",
        "Tampilan form bersih dengan pesan validasi yang jelas bagi pengguna."
      ],
      lessons:
        "Mendengarkan kebiasaan input data pengguna secara nyata sangat membantu dalam merancang formulir yang cepat dan tidak melelahkan.",
      links: {
        github: "https://github.com/sqiftree"
      }
    }
  },
  {
    id: "website-desa-jetis",
    title: "Website Desa Jetis Karanganyar",
    tagline: "Portal layanan informasi publik, profil wilayah, dan transparansi kegiatan warga Desa Jetis, Jaten, Karanganyar.",
    category: "Client & Public Sector",
    year: "2024",
    role: "Web Developer",
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Responsive Design"],
    featured: true,
    coverAccent: "#059669",
    scrobbleMetric: "Public Portal",
    repoUrl: "https://github.com/sqiftree/website-desa-jetis",
    caseStudy: {
      problem:
        "Masyarakat Desa Jetis dan pihak luar memerlukan sarana informasi digital resmi yang mudah diakses lewat ponsel pintar untuk mengetahui profil, pengumuman, dan kontak layanan desa.",
      role: "Web Developer yang merancang dan membangun website profil dan informasi desa.",
      solution:
        "Mengembangkan website profil desa berbasis web statis yang ringan, mudah dibaca di layar ponsel, dan terstruktur dengan rapi.",
      myContribution: [
        "Merancang struktur informasi profil desa, susunan perangkat desa, dan publikasi pengumuman kegiatan.",
        "Mengoptimalkan tata letak responsif agar nyaman dibaca warga melalui koneksi seluler.",
        "Mempublikasikan kode secara terbuka dan terdokumentasi di repositori GitHub `sqiftree/website-desa-jetis`."
      ],
      results: [
        "Website resmi profil desa dapat diakses oleh masyarakat umum secara online.",
        "Repositori kode terdokumentasi secara publik di GitHub."
      ],
      lessons:
        "Membangun situs layanan masyarakat mengutamakan navigasi yang ramah pembaca awam dan pemilihan ukuran font yang mudah dibaca.",
      links: {
        github: "https://github.com/sqiftree/website-desa-jetis"
      }
    }
  },
  {
    id: "halombg-mobile",
    title: "HaloMBG — Mobile App Interface",
    tagline: "Eksplorasi antarmuka aplikasi seluler berbasis Android Kotlin dengan prinsip Material Design.",
    category: "Mobile & Apps",
    year: "2024",
    role: "Android Developer",
    stack: ["Kotlin", "Android SDK", "Material Design", "Gradle"],
    featured: true,
    coverAccent: "#8B5CF6",
    scrobbleMetric: "Kotlin Android",
    repoUrl: "https://github.com/sqiftree/HaloMBG-mobile",
    caseStudy: {
      problem:
        "Kebutuhan eksplorasi antarmuka seluler yang modern dan terstruktur untuk alur layanan interaktif pada platform Android.",
      role: "Android Developer mengeksplorasi perancangan antarmuka aplikasi seluler menggunakan Kotlin dan Android SDK.",
      solution:
        "Mengimplementasikan komponen UI native Android dengan berpedoman pada panduan Material Design agar konsisten dan nyaman dipandang.",
      myContribution: [
        "Menyusun komponen antarmuka pengguna berbasis Kotlin dan XML/Material Components.",
        "Mengatur navigasi antar layar dan alur interaksi form dasar pada aplikasi.",
        "Mengelola struktur repositori dan konfigurasi build Gradle di GitHub `sqiftree/HaloMBG-mobile`."
      ],
      results: [
        "Prototipe antarmuka aplikasi berhasil dijalankan pada perangkat pengujian Android.",
        "Repositori kode terbuka dan tersusun rapi di GitHub."
      ],
      lessons:
        "Memahami arsitektur Activity dan Fragment pada Kotlin menjadi fondasi penting dalam membangun aplikasi mobile Android yang stabil.",
      links: {
        github: "https://github.com/sqiftree/HaloMBG-mobile"
      }
    }
  },
  {
    id: "prototype-neomypertamina",
    title: "Prototype NEO MyPertamina",
    tagline: "Eksplorasi konsep antarmuka interaktif web untuk perbaikan alur pemilihan produk bahan bakar dan pembayaran digital.",
    category: "Frontend & Web",
    year: "2024",
    role: "Frontend & UI Prototyper",
    stack: ["HTML5", "CSS3", "JavaScript", "Figma", "UI/UX"],
    featured: false,
    coverAccent: "#EC4899",
    scrobbleMetric: "UI Concept",
    repoUrl: "https://github.com/sqiftree/prototype_NEOMyPertamina",
    caseStudy: {
      problem:
        "Mengeksplorasi perbaikan pengalaman pengguna (UX) pada transaksi aplikasi layanan publik agar alur pembayaran lebih ringkas dan jelas bagi pengendara.",
      role: "UI Prototyper yang mengeksplorasi konsep tata letak baru dan menerjemahkannya ke dalam prototipe web interaktif.",
      solution:
        "Membangun prototipe web interaktif 'NEO MyPertamina' yang mendemonstrasikan penyederhanaan langkah pada proses pengisian saldo dan pemilihan bahan bakar.",
      myContribution: [
        "Mengeksplorasi wireframe dan tata letak UI yang lebih bersih dan minim distraksi.",
        "Membangun prototipe berbasis web dengan interaksi tombol dan feedback transaksi yang jelas.",
        "Mendokumentasikan konsep pada repositori GitHub `sqiftree/prototype_NEOMyPertamina`."
      ],
      results: [
        "Menjadi bahan studi perancangan antarmuka dan portofolio eksplorasi UI/UX interaktif."
      ],
      lessons:
        "Desain antarmuka yang baik berfokus pada pengurangan kebingungan pengguna di setiap langkah transaksi.",
      links: {
        github: "https://github.com/sqiftree/prototype_NEOMyPertamina"
      }
    }
  }
];
