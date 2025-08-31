import type { Metadata } from "next";
import { ThemeProvider } from "./components/theme-provider";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import {
  generateWebsiteSchema,
  generateSoftwareApplicationSchema,
} from "../lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Enhanced JSON-LD schema data
const websiteSchema = generateWebsiteSchema();
const softwareSchema = generateSoftwareApplicationSchema();

export const metadata: Metadata = {
  metadataBase: new URL("https://business-wish.vercel.app"),
  title: {
    default: "Business Wish - Free Tailwind CSS UI Components Library",
    template: "%s | Business Wish",
  },
  description:
    "Discover a comprehensive library of free, high-quality Tailwind CSS UI components for web developers. Boost your project's design and efficiency with our ready-to-use components.",
  keywords: [
    "Tailwind CSS components",
    "free Tailwind CSS components",
    "Tailwind CSS UI library",
    "accessible Tailwind CSS components",
    "React UI components",
    "Next.js components",
    "dark mode components",
    "Tailwind CSS button",
    "Tailwind CSS form",
    "Tailwind CSS navigation bar",
    "Tailwind CSS card",
    "free Tailwind CSS components for beginners",
    "best free Tailwind CSS component library",
    "Tailwind CSS component examples",
    "updated Tailwind CSS components",
  ],
  alternates: {
    canonical: "https://business-wish.vercel.app",
  },
  openGraph: {
    title: "Business Wish - Free Tailwind CSS UI Components Library",
    description:
      "Discover a comprehensive library of free, high-quality Tailwind CSS UI components for web developers.",
    type: "website",
    url: "https://business-wish.vercel.app",
    siteName: "Business Wish",
    locale: "en_US",
    images: [
      {
        url: "https://business-wish.vercel.app/home.png",
        width: 1200,
        height: 630,
        alt: "Business Wish - Free Tailwind CSS UI Components Library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@abhaysinghr516",
    creator: "@abhaysinghr516",
    title: "Business Wish - Free Tailwind CSS UI Components Library",
    description:
      "Discover a comprehensive library of free, high-quality Tailwind CSS UI components for web developers.",
    images: ["https://business-wish.vercel.app/home.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "E3mJ7FmDGq_oavG_R1BuNHw9T-F668kZYl5awkWs3VI",
  },
  authors: [
    {
      name: "Abhay Singh Rathore",
      url: "https://abhay-singh-rathore.vercel.app/",
    },
  ],
  category: "Technology",
  classification: "UI Components Library",
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://vercel.live" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />

        {/* Preload critical resources */}
        <link rel="preload" href="/logo.webp" as="image" type="image/webp" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
        <GoogleAnalytics gaId="G-Y0FKJQ2T12" />
        <Analytics />
      </body>
    </html>
  );
}
