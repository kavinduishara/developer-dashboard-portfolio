import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteShell } from "../components/layout/SiteShell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-5us7.vercel.app"),
  title: "Kavindu Ishara | Full-Stack Developer & Cloud Enthusiast",
  description:
    "Creative portfolio for Kavindu Ishara, a full-stack developer and cloud enthusiast specializing in modern web apps, distributed systems, and DevOps workflows.",
  keywords: ["developer portfolio", "full-stack developer", "cloud engineer", "Next.js", "React", "Spring Boot"],
  authors: [{ name: "Kavindu Ishara Rathnayaka" }],
  openGraph: {
    title: "Kavindu Ishara | Full-Stack Developer & Cloud Enthusiast",
    description:
      "Creative portfolio for Kavindu Ishara, a full-stack developer and cloud enthusiast specializing in modern web apps, distributed systems, and DevOps workflows.",
    url: "https://portfolio-5us7.vercel.app/",
    type: "website",
    images: ["/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavindu Ishara | Full-Stack Developer & Cloud Enthusiast",
    description:
      "Creative portfolio for Kavindu Ishara, a full-stack developer and cloud enthusiast specializing in modern web apps, distributed systems, and DevOps workflows.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }, { url: "/favicon.ico" }],
  },
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#020617" }, { media: "(prefers-color-scheme: light)", color: "#f8fafc" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
