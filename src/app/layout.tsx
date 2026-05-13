import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Priyanshu Pandey | Full Stack Developer & Software Engineer",
  description:
    "Portfolio of Priyanshu Pandey — BTech CSE student passionate about building scalable full-stack products, AI systems, and elegant software solutions. Open for internships.",
  keywords: [
    "Priyanshu Pandey",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js",
    "AI",
    "Portfolio",
    "BTech CSE",
  ],
  authors: [{ name: "Priyanshu Pandey" }],
  creator: "Priyanshu Pandey",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Priyanshu Pandey | Full Stack Developer",
    description:
      "Crafting scalable, modern software products. Open for software engineering internships.",
    siteName: "Priyanshu Pandey Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Pandey | Full Stack Developer",
    description: "Crafting scalable, modern software products.",
    creator: "@priyanshupandey",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050510] text-slate-100 antialiased overflow-x-hidden">
        <SmoothScrollProvider>
          <div className="noise-overlay" aria-hidden="true" />
          <ScrollProgress />
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
