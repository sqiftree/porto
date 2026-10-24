"use client";

import { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { projectsData, Project } from "@/data/projects";
import { experienceData } from "@/data/experience";
import { topSkillsData } from "@/data/skills";
import { ProjectModal } from "@/components/ProjectModal";
import { ThemeToggle } from "@/components/ThemeToggle";
import { DustParticles } from "@/components/DustParticles";

// Dynamic import of 3D GameRoot (T3: ssr: false)
const GameRoot = dynamic(() => import("@/game/GameRoot"), { ssr: false });

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [gameMode, setGameMode] = useState(false);

  // Search & Filter state for Stages (reference Riders filter)
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Accordion state for Skills (reference Stands accordion)
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  // Navbar scroll & BackToTop visibility listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);
      setShowBackToTop(scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filtered projects for Stages section
  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.stack.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!matchesSearch) return false;
      if (selectedCategory === "all") return true;
      if (selectedCategory === "uav") return p.category === "Robotics & UAV";
      if (selectedCategory === "web") return p.category === "Frontend & Web" || p.category === "Client & Public Sector";
      if (selectedCategory === "mobile") return p.category === "Mobile & Apps";
      return true;
    });
  }, [searchQuery, selectedCategory]);

  // Grouped skills for the Accordion section
  const groupedSkills = useMemo(() => {
    return [
      {
        title: "FRONTEND & WEB SYSTEMS",
        subtitle: "Next.js · TypeScript · Tailwind CSS · Zod",
        desc: "Arsitektur komponen modular berbasis React dan Next.js App Router, penanganan state asynchronous, validasi formulir real-time menggunakan Zod, serta kepatuhan standar web modern dan aksesibilitas.",
        skills: topSkillsData.filter((s) => s.category === "Frontend & Web"),
      },
      {
        title: "UAV TELEMETRY & GCS PROTOCOLS",
        subtitle: "MAVLink · Ground Control Station · Leaflet HUD",
        desc: "Parsing dan integrasi paket data telemetri darat protokol MAVLink, visualisasi attitude instrument (artificial horizon), serta pelacakan koordinat GPS real-time pada peta interaktif Leaflet untuk wahana nirawak Narash BUV.",
        skills: topSkillsData.filter((s) => s.category === "Systems & UAV"),
      },
      {
        title: "LANGUAGES, TOOLS & WORKFLOW",
        subtitle: "C/C++ · Python · Linux WSL · Docker · Git",
        desc: "Fondasi algoritma dan struktur data dalam C/C++, skrip otomasi Python, lingkungan pengembangan terminal Linux/WSL2, kontainerisasi Docker untuk lingkungan pengujian terisolasi, dan version control Git.",
        skills: topSkillsData.filter((s) => s.category === "Languages & Tools"),
      },
      {
        title: "QUALITY ASSURANCE & TESTING",
        subtitle: "Manual UI Audit · Form Validation · Edge Cases",
        desc: "Pengujian fungsional formulir transaksi, audit batas input pengguna, pengujian lintas resolusi layar responsif, serta pelaporan dan verifikasi bug antarmuka secara terstruktur.",
        skills: topSkillsData.filter((s) => s.category === "QA & Testing"),
      },
    ];
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("yashif.vkt@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-bg text-black transition-colors relative">
      {/* ─── 3D INTRO GAME ROOT (T3 & T4) ────────────────── */}
      {gameMode && (
        <GameRoot
          projects={projectsData}
          paused={selectedProject !== null}
          onOpen={(p) => setSelectedProject(p)}
          onExit={() => setGameMode(false)}
        />
      )}

      {/* ─── NAVBAR (reference/index.html) ────────────────── */}
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <a href="#hero" className="nav-brand">
          <span className="brand-star">☆</span>
          <span>SQIFTREE</span>
        </a>

        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#stages">Stages</a></li>
          <li><a href="#philosophy">Prinsip</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Race Log</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button
              onClick={() => setGameMode(true)}
              type="button"
              className="text-[0.72rem] font-sans uppercase tracking-[0.14em] px-2.5 py-1 border border-gold text-gold hover:bg-gold hover:text-white transition-colors"
              title="Buka Intro 3D The House"
            >
              ▶ PLAY INTRO
            </button>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setGameMode(true)}
            type="button"
            className="text-[0.7rem] font-sans uppercase tracking-wider px-2 py-0.5 border border-gold text-gold"
          >
            ▶ INTRO
          </button>
          <ThemeToggle />
          <button
            type="button"
            className="nav-toggle"
            id="navToggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile nav menu */}
      <div className={`nav-mobile ${mobileMenuOpen ? "open" : ""}`} id="mobileNav">
        <a href="#hero" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
        <a href="#stages" onClick={() => setMobileMenuOpen(false)}>Stages</a>
        <a href="#philosophy" onClick={() => setMobileMenuOpen(false)}>Prinsip</a>
        <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
        <a href="#experience" onClick={() => setMobileMenuOpen(false)}>Race Log</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
      </div>

      {/* ─── HERO SECTION (reference/index.html) ─────────── */}
      <section id="hero">
        <DustParticles />
        <div className="hero-content">
          <p className="hero-sub">— SURAKARTA · S1 INFORMATIKA UNS &apos;24 · STAND USER —</p>
          <h1 className="hero-title">
            YASHIF<br />
            <span>VICTORIAWAN</span><br />
            ENGINEERING
          </h1>
          <p className="hero-desc">
            Saya Yashif Victoriawan (sqiftree), mahasiswa S1 Informatika Universitas Sebelas Maret
            dan Programmer Divisi GCS di Bengawan UV Team (Tim Narash). Berfokus pada rekayasa
            antarmuka web modern dengan Next.js dan telemetri wahana tanpa awak.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#stages" className="btn-hero">
              LIHAT STAGES ➤
            </a>
            <button
              onClick={() => setGameMode(true)}
              type="button"
              className="btn-hero cursor-pointer"
              style={{ background: "transparent", color: "var(--clr-black)", borderColor: "var(--clr-gold)" }}
            >
              ▶ PLAY INTRO 3D
            </button>
          </div>
        </div>

        <div className="hero-decor">
          <div className="spinning-ball" id="spinBall">
            ✦
          </div>
        </div>
      </section>

      {/* ─── ABOUT / BIO (reference/index.html: About Grid + Route Visual) ─── */}
      <section id="about">
        <div className="section-label">BAGIAN 01</div>
        <h2 className="section-title">Profil &amp; Orientasi</h2>
        <div className="about-grid">
          {/* Kolom Kiri: Paragraf Faktual Orang Pertama + Fact Pills */}
          <div className="about-text">
            <p>
              Saya <strong>Yashif Victoriawan</strong> (dikenal sebagai <strong>sqiftree</strong> atau Vic),
              mahasiswa aktif S1 Informatika Universitas Sebelas Maret (UNS) angkatan 2024 di Surakarta.
            </p>
            <p>
              Fokus teknis saya berada pada pengembangan antarmuka web modular menggunakan <strong>Next.js</strong>,
              <strong> TypeScript</strong>, dan <strong>Tailwind CSS</strong>, serta antarmuka Ground Control Station
              (GCS) darat untuk pembacaan paket telemetri wahana tanpa awak bersama tim <strong>Narash BUV di Bengawan UV Team UNS</strong>.
            </p>
            <p>
              Saya terbiasa membedah kebutuhan pengguna menjadi tata letak yang bersih, instrumen yang mudah dipantau sekilas,
              serta alur input formulir yang tervalidasi ketat tanpa beban interaksi berlebih.
            </p>

            <div className="fact-pills">
              <span className="pill">Surakarta, Indonesia</span>
              <span className="pill">S1 Informatika UNS &apos;24</span>
              <span className="pill">Bengawan UV Team</span>
              <span className="pill">Stand: King Krule</span>
              <span className="pill">Frontend &amp; UAV Telemetry</span>
            </div>
          </div>

          {/* Kolom Kanan: Route Visual Vertikal SBR Lama */}
          <div className="about-visual">
            <div className="route-visual">
              <div className="route-step">
                <div className="step-dot" />
                <div className="step-info">
                  <span className="step-label">START · AKADEMIK</span>
                  <span className="step-city">Informatika UNS</span>
                </div>
              </div>
              <div className="route-line" />
              <div className="route-step">
                <div className="step-dot" />
                <div className="step-info">
                  <span className="step-label">CHECKPOINT · RISET WAHANA</span>
                  <span className="step-city">Bengawan UV Team</span>
                </div>
              </div>
              <div className="route-line" />
              <div className="route-step">
                <div className="step-dot" />
                <div className="step-info">
                  <span className="step-label">CHECKPOINT · SOLUSI WEB</span>
                  <span className="step-city">Bingilo &amp; Jetis</span>
                </div>
              </div>
              <div className="route-line" />
              <div className="route-step">
                <div className="step-dot" />
                <div className="step-info">
                  <span className="step-label">TARGET BERIKUTNYA</span>
                  <span className="step-city">Frontend Internship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STAGES / RIDERS (reference/index.html: Search & Category Filter) ─── */}
      <section id="stages">
        <div className="section-label">BAGIAN 02</div>
        <h2 className="section-title">Stages / Proyek</h2>

        {/* Filter Controls (Search + Buttons) */}
        <div className="filter-controls">
          <input
            type="text"
            id="riderSearch"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama proyek atau teknologi..."
            aria-label="Cari proyek"
          />
          <div className="filter-buttons">
            <button
              className={`filter-btn ${selectedCategory === "all" ? "active" : ""}`}
              onClick={() => setSelectedCategory("all")}
              type="button"
            >
              SEMUA
            </button>
            <button
              className={`filter-btn ${selectedCategory === "uav" ? "active" : ""}`}
              onClick={() => setSelectedCategory("uav")}
              type="button"
            >
              UAV &amp; TELEMETRI
            </button>
            <button
              className={`filter-btn ${selectedCategory === "web" ? "active" : ""}`}
              onClick={() => setSelectedCategory("web")}
              type="button"
            >
              WEB APP
            </button>
            <button
              className={`filter-btn ${selectedCategory === "mobile" ? "active" : ""}`}
              onClick={() => setSelectedCategory("mobile")}
              type="button"
            >
              MOBILE
            </button>
          </div>
        </div>

        {/* Riders Grid */}
        <div className="riders-grid" id="ridersGrid">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="rider-card"
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              <div className="card-badge">STAGE 0{idx + 1}</div>
              <h3>{project.title}</h3>
              <p className="card-role">{project.role} · {project.year}</p>
              <p className="card-desc">{project.tagline}</p>

              <div className="card-stats">
                <span>
                  <strong>Kategori:</strong> {project.category}
                </span>
                <span>
                  <strong>Stack:</strong> {project.stack.slice(0, 4).join(" · ")}
                </span>
                <div className="pt-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-black hover:text-gold flex items-center gap-1">
                    Buka Detail Proyek ➤
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="no-results">Proyek tidak ditemukan untuk kata kunci tersebut.</p>
        )}
      </section>

      {/* ─── PRINSIP REKAYASA (Quote & Technical Chips) ────── */}
      <section id="philosophy" className="border-t border-border">
        <div className="section-label">BAGIAN 03</div>
        <h2 className="section-title">Prinsip Rekayasa</h2>
        <div className="max-w-3xl space-y-6">
          <blockquote className="font-serif italic text-2xl sm:text-3xl text-black leading-snug">
            &ldquo;Antarmuka terbaik adalah yang bekerja tanpa membuat pengguna berpikir keras.&rdquo;
          </blockquote>
          <p className="text-mid text-justify leading-relaxed">
            Baik pada instrumen stasiun kendali darat wahana nirawak saat observasi penerbangan,
            maupun formulir pembukuan kas harian: visualisasi yang tepat, arsitektur skema yang ketat,
            dan zero-distraction adalah standar mutlak dalam setiap kode yang saya tulis.
          </p>

          <div className="fact-pills pt-2">
            <span className="pill">MAVLink Stream</span>
            <span className="pill">Zod Strict Validation</span>
            <span className="pill">Dockerized Setup</span>
            <span className="pill">Leaflet Map HUD</span>
            <span className="pill">Modular Components</span>
          </div>
        </div>
      </section>

      {/* ─── STANDS / ACCORDION SKILLS (reference/index.html) ── */}
      <section id="skills">
        <div className="section-label">BAGIAN 04</div>
        <h2 className="section-title">Stand &amp; Skill Spotlight</h2>

        <div className="stands-accordion">
          {groupedSkills.map((cat, i) => {
            const isOpen = openAccordion === i;
            return (
              <div key={cat.title} className="accordion-item">
                <div
                  className={`accordion-header ${isOpen ? "open" : ""}`}
                  onClick={() => setOpenAccordion(isOpen ? null : i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpenAccordion(isOpen ? null : i);
                    }
                  }}
                >
                  <div>
                    <span>{cat.title}</span>
                    <span className="block text-xs font-sans text-muted font-normal mt-0.5">
                      {cat.subtitle}
                    </span>
                  </div>
                  <span className="accordion-arrow">▼</span>
                </div>

                {isOpen && (
                  <div className="accordion-body" style={{ display: "block" }}>
                    <p>{cat.desc}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6">
                      {cat.skills.map((skill) => (
                        <div key={skill.name} className="p-3 bg-bg border border-border rounded">
                          <div className="flex justify-between items-center text-xs font-sans font-semibold text-black mb-1">
                            <span>{skill.name}</span>
                            <span className="font-mono text-gold">{skill.percentage}%</span>
                          </div>
                          <div className="text-[11px] text-muted">{skill.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── RACE LOG / EXPERIENCE (Route Visual Timeline) ─── */}
      <section id="experience">
        <div className="section-label">BAGIAN 05</div>
        <h2 className="section-title">Race Log / Pengalaman</h2>

        <div className="route-visual">
          {experienceData.map((exp) => (
            <div key={exp.id}>
              <div className="route-step">
                <div className="step-dot" />
                <div className="step-info">
                  <span className="step-label">{exp.period} · {exp.location}</span>
                  <span className="step-city">{exp.role}</span>
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider mt-0.5">
                    {exp.organization}
                  </span>
                  <ul className="mt-2 space-y-1 text-xs text-mid list-disc list-inside">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {exp.skillsUsed.map((sk) => (
                      <span key={sk} className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg text-muted border border-border">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="route-line" />
            </div>
          ))}
        </div>
      </section>

      {/* ─── FINISH LINE / KONTAK (reference/index.html) ───── */}
      <section id="contact" className="pb-20">
        <div className="section-label">BAGIAN 06</div>
        <h2 className="section-title">Finish Line / Kontak</h2>

        <div className="max-w-xl space-y-5">
          <p className="text-mid text-justify">
            Perlombaan tidak pernah benar-benar berhenti. Saya terbuka untuk peluang magang, proyek rekayasa antarmuka web,
            maupun kolaborasi sistem darat telemetri UAV.
          </p>

          <div className="flex flex-wrap gap-4 items-center pt-2">
            <button
              onClick={copyEmail}
              type="button"
              className="btn-hero cursor-pointer text-xs"
            >
              {copied ? "EMAIL DISALIN ✓" : "SALIN EMAIL (yashif.vkt@gmail.com)"}
            </button>

            <a
              href="https://github.com/sqiftree"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans uppercase tracking-wider font-semibold text-mid hover:text-gold"
            >
              GitHub ↗
            </a>

            <a
              href="https://linkedin.com/in/yashif"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-sans uppercase tracking-wider font-semibold text-mid hover:text-gold"
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="pt-4">
            <div className="inline-block px-3 py-1 border border-gold text-xs font-sans text-mid">
              <strong>Status:</strong> Terbuka untuk magang Frontend Engineer 2025/2026
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER (reference/index.html) ───────────────── */}
      <footer>
        <div className="footer-inner">
          <p className="footer-title">YASHIF VICTORIAWAN</p>
          <p className="footer-sub">Frontend Engineer &amp; UAV Telemetry · Informatika UNS &apos;24 · Stand: King Krule</p>
          <hr className="footer-divider" />
          <p className="footer-note">sqiftree &nbsp;·&nbsp; Surakarta, Jawa Tengah, Indonesia &nbsp;·&nbsp; yashif.vkt@gmail.com</p>
        </div>
      </footer>

      {/* ─── BACK TO TOP BUTTON (reference/index.html) ────── */}
      <button
        id="backToTop"
        onClick={scrollToTop}
        style={{ display: showBackToTop ? "block" : "none" }}
        aria-label="Kembali ke atas"
      >
        ↑
      </button>

      {/* ─── PROJECT MODAL (Z-Index > 50 so it works in 2D & 3D) ─── */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
