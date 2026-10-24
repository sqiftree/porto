import type { Metadata } from "next";
import { Bebas_Neue, DM_Serif_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--ff-display",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--ff-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--ff-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--ff-mono",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Yashif Victoriawan — Portofolio Rekayasa | Frontend & UAV Telemetry",
  description:
    "Portofolio rekayasa Yashif Victoriawan (@sqiftree). Mahasiswa S1 Informatika UNS '24, Programmer GCS di Bengawan UV Team (Tim Narash BUV).",
  keywords: [
    "Yashif Victoriawan",
    "sqiftree",
    "Informatika UNS",
    "Bengawan UV Team",
    "Narash BUV",
    "Frontend Engineer",
    "Ground Control Station",
    "MAVLink",
    "Next.js",
    "TypeScript"
  ],
  authors: [{ name: "Yashif Victoriawan", url: "https://github.com/sqiftree" }],
  icons: {
    icon: "/favicon.svg",
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
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body
        className={`${bebas.variable} ${dmSerif.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
