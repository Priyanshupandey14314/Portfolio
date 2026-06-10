import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Priyanshu Pandey | Full Stack Developer & Systems Engineer",
  description:
    "Developer portfolio of Priyanshu Pandey — specializing in Java, Spring Boot, Distributed Systems, and AI-powered applications.",
  keywords: [
    "Priyanshu Pandey",
    "Full Stack Developer",
    "Systems Engineer",
    "Java Developer",
    "Spring Boot",
    "Distributed Systems",
    "AI",
    "Next.js",
    "Portfolio",
  ],
  authors: [{ name: "Priyanshu Pandey" }],
  creator: "Priyanshu Pandey",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Priyanshu Pandey | Systems & Software Engineer",
    description:
      "Building scalable backend systems and intelligent software products.",
    siteName: "Priyanshu Pandey Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Pandey | Systems & Software Engineer",
    description: "Building scalable backend systems and intelligent software products.",
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
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-zinc-100 antialiased overflow-x-hidden selection:bg-zinc-100 selection:text-black">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
