import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const heading = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Yashif Victoriawan (@sqiftree) — Profile as a Chart | Frontend, QA & UAV GCS",
  description:
    "Portofolio personal Yashif Victoriawan (@sqiftree). Mahasiswa S1 Informatika UNS '24, GCS & Telemetry Bengawan UV Team (KRTI 2026), Frontend Engineer, dan QA Specialist.",
  keywords: [
    "Yashif Victoriawan",
    "sqiftree",
    "Informatics UNS",
    "Bengawan UV Team",
    "Narash BUV",
    "KRTI 2026",
    "Frontend Engineer",
    "QA Engineer",
    "UAV Ground Control Station",
    "MAVLink",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Last.fm portfolio"
  ],
  authors: [{ name: "Yashif Victoriawan", url: "https://github.com/sqiftree" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Yashif Victoriawan (@sqiftree) — Profile as a Chart",
    description:
      "Data-driven personal portfolio inspired by Last.fm profile charts. Frontend, QA Automation, and UAV GCS Telemetry.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const savedTheme = localStorage.getItem('yashif-theme');
                if (savedTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                } else {
                  document.documentElement.classList.add('light');
                  document.documentElement.classList.remove('dark');
                }

                const savedAccent = localStorage.getItem('yashif-accent');
                if (savedAccent) {
                  document.documentElement.setAttribute('data-accent', savedAccent);
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${sans.variable} ${heading.variable} ${display.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-bg text-text selection:bg-accent selection:text-white font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
