"use client";

import { useState } from "react";
import { Mail, Check, Send, Github, Linkedin, MessageSquare, Terminal, MapPin, Disc, Instagram } from "lucide-react";

export function ContactTab() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Peluang Magang / Kolaborasi",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("yashif.vkt@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:yashif.vkt@gmail.com?subject=${encodeURIComponent(
        formState.subject
      )}&body=${encodeURIComponent(
        `Halo Yashif,\n\nSaya ${formState.name} (${formState.email}).\n\n${formState.message}`
      )}`;
      setSubmitted(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="lastfm-card p-5 rounded-lg border-l-4 border-l-accent flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-mono font-medium uppercase tracking-widest text-text-muted">
              Inquiries &middot; Dispatch Desk
            </span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text tracking-tight">
            Mari Terhubung &amp; Berkolaborasi
          </h2>
          <p className="text-xs sm:text-sm text-text-muted mt-1 leading-relaxed font-sans">
            Terbuka untuk peluang magang (Frontend Engineering, QA Testing, UAV GCS Telemetry), proyek web reaktif berbasis Next.js/Tailwind, dan beasiswa riset akademis.
          </p>
        </div>
        <div className="flex-shrink-0 flex items-center gap-2 text-xs font-mono text-text-muted">
          <MapPin className="w-4 h-4 text-accent" />
          <span>Surakarta, ID / Remote</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Contact Info Cards (2 cols) */}
        <div className="md:col-span-2 space-y-4">
          <div className="lastfm-card p-4 rounded-lg space-y-3">
            <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-text-muted pb-2 border-b border-border">
              Kanal Komunikasi Langsung
            </h3>

            {/* Email Box */}
            <div className="p-3 rounded-lg bg-bg border border-border space-y-2">
              <span className="text-[10px] font-mono uppercase text-text-muted block">
                Email Resmi
              </span>
              <p className="text-xs font-mono font-semibold text-text truncate">
                yashif.vkt@gmail.com
              </p>
              <button
                onClick={copyEmail}
                type="button"
                className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded text-xs font-mono border border-border bg-surface hover:bg-surface-hover text-text transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-500 font-semibold">Tersalin ke Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3.5 h-3.5 text-text-muted" />
                    <span>Salin Alamat Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Verified Direct Links */}
            <div className="space-y-1.5 pt-1 text-xs font-mono">
              <a
                href="https://github.com/sqiftree"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-bg hover:bg-surface-hover border border-border text-text transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
                  <span>GitHub Profile</span>
                </div>
                <span className="text-text-muted text-[11px] group-hover:text-accent">@sqiftree</span>
              </a>

              <a
                href="https://www.linkedin.com/in/yashif-victoriawan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-bg hover:bg-surface-hover border border-border text-text transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
                  <span>LinkedIn Profile</span>
                </div>
                <span className="text-highlight text-[11px]">Connect</span>
              </a>

              <a
                href="https://www.last.fm/user/sqiftree"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-bg hover:bg-surface-hover border border-border text-text transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Disc className="w-4 h-4 text-accent" />
                  <span>Last.fm</span>
                </div>
                <span className="text-accent text-[11px]">sqiftree</span>
              </a>

              <a
                href="https://instagram.com/yashifvictoriawan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-bg hover:bg-surface-hover border border-border text-text transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors" />
                  <span>Instagram</span>
                </div>
                <span className="text-text-muted text-[11px]">@yashifvictoriawan</span>
              </a>
            </div>
          </div>

          <div className="lastfm-card p-4 rounded-lg space-y-2 text-xs text-text-muted font-mono">
            <div className="flex items-center gap-2 text-text font-semibold">
              <Terminal className="w-3.5 h-3.5 text-accent" />
              <span>Response Time</span>
            </div>
            <p className="leading-relaxed">
              Respon pesan email via <code>yashif.vkt@gmail.com</code> aktif dalam 24 jam kerja.
            </p>
          </div>
        </div>

        {/* Message Dispatcher Form (3 cols) */}
        <div className="md:col-span-3">
          <div className="lastfm-card p-5 rounded-lg space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-border">
              <MessageSquare className="w-4 h-4 text-accent" />
              <h3 className="text-sm font-mono font-semibold uppercase tracking-wider text-text">
                Kirim Pesan Langsung
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-mono text-text-muted text-[11px]">Nama Lengkap *</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Nama Anda / Perusahaan"
                    className="w-full px-3 py-2 rounded-md bg-bg border border-border text-text placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-text-muted text-[11px]">Email Anda *</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="nama@email.com"
                    className="w-full px-3 py-2 rounded-md bg-bg border border-border text-text placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-mono text-text-muted text-[11px]">Subjek Pertemuan / Diskusi</label>
                <select
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-3 py-2 rounded-md bg-bg border border-border text-text focus:outline-none focus:ring-1 focus:ring-accent font-mono text-xs"
                >
                  <option value="Peluang Magang / Internship">Peluang Magang / Internship (Frontend / QA / UAV)</option>
                  <option value="Proyek Robotics & UAV GCS">Proyek UAV GCS / MAVLink Telemetry</option>
                  <option value="Proyek Web Next.js / Tailwind">Proyek Web Application (Next.js / TypeScript)</option>
                  <option value="Peluang Beasiswa & Riset">Peluang Beasiswa & Riset Akademis UNS</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-mono text-text-muted text-[11px]">Pesan Anda *</label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Ceritakan detail peluang magang, lingkup proyek, atau tawaran kolaborasi Anda..."
                  className="w-full px-3 py-2 rounded-md bg-bg border border-border text-text placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-accent leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-md text-xs font-mono font-semibold bg-accent hover:bg-accent-hover text-white transition-all shadow-md focus:ring-2 focus:ring-accent disabled:opacity-50"
              >
                {submitted ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Membuka Client Email...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Pesan ke yashif.vkt@gmail.com</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
