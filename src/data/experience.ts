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
      "Mahasiswa aktif S1 Informatika UNS (Angkatan 2024), mendalami Algoritma & Pemrograman, Struktur Data, dan Dasar Rekayasa Perangkat Lunak.",
      "Aktif mengeksplorasi pengembangan antarmuka web modern, clean code, serta arsitektur sistem berbasis komponen.",
      "Terlibat dalam komunitas teknologi kampus dan tim riset wahana nirawak mahasiswa."
    ],
    skillsUsed: ["C/C++", "Python", "JavaScript", "TypeScript", "Algorithms", "Linux", "Git"]
  },
  {
    id: "bengawan-uv-narash",
    role: "Programmer Divisi GCS (Ground Control Station)",
    organization: "Bengawan UV Team UNS — Tim Narash BUV",
    period: "2024 – Sekarang",
    location: "Surakarta, Indonesia",
    type: "Robotics & Competition",
    achievements: [
      "Mengembangkan antarmuka Ground Control Station (GCS) berbasis web untuk visualisasi data telemetri wahana Narash BUV.",
      "Mengimplementasikan integrasi protokol MAVLink untuk membaca parameter attitude, altitude, koordinat GPS, dan status daya.",
      "Bekerja sama secara lintas disiplin dengan anggota tim mekanik dan avionik dalam pengujian komunikasi radio telemetri darat."
    ],
    skillsUsed: ["MAVLink", "React", "TypeScript", "Leaflet", "Telemetry", "WebSockets"]
  },
  {
    id: "bingilo-client-project",
    role: "Frontend Developer",
    organization: "Bingilo — Sistem Pembukuan & Kas UMKM",
    period: "2024",
    location: "Indonesia",
    type: "Client Project",
    achievements: [
      "Membangun antarmuka web pencatatan kas dan ledger transaksi keuangan berbasis Next.js dan Tailwind CSS.",
      "Merancang validasi formulir input real-time menggunakan Zod untuk mencegah kesalahan input nominal dan tanggal transaksi.",
      "Mengoptimalkan alur interaksi pengguna (UX) agar proses pencatatan kas harian dapat diselesaikan dengan cepat dan intuitif."
    ],
    skillsUsed: ["Next.js", "TypeScript", "Tailwind CSS", "Zod", "Responsive Design"]
  },
  {
    id: "desa-jetis-web",
    role: "Web Developer",
    organization: "Website Profil & Informasi Desa Jetis",
    period: "2024",
    location: "Karanganyar, Jawa Tengah",
    type: "Public Sector",
    achievements: [
      "Membangun website profil dan transparansi informasi publik Desa Jetis, Kecamatan Jaten, Kabupaten Karanganyar.",
      "Menata arsitektur informasi struktur organisasi desa, pengumuman publik, serta direktori kontak layanan warga.",
      "Menyediakan repositori kode terbuka dan dokumentasi yang rapi di GitHub `sqiftree/website-desa-jetis`."
    ],
    skillsUsed: ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Git"]
  }
];
