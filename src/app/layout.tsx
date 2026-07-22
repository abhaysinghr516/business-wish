import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "./components/theme-provider";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ConditionalFooter } from "./components/conditional-footer";
import { Analytics } from "@vercel/analytics/react";
import AnalyticsProvider from "./components/AnalyticsProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  generateWebsiteSchema,
  generateSoftwareApplicationSchema,
  generateOrganizationSchema,
} from "../lib/seo";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
});

// Enhanced JSON-LD schema data
const websiteSchema = generateWebsiteSchema();
const softwareSchema = generateSoftwareApplicationSchema();
const organizationSchema = generateOrganizationSchema();

export const metadata: Metadata = {
  metadataBase: new URL("https://www.businesswish.tech"),
  title: {
    default: "Business Wish - Free React & Tailwind CSS UI Components Library",
    template: "%s | Business Wish",
  },
  description:
    "Discover a comprehensive library of free, high-quality React & Tailwind CSS UI components and motion primitives for web developers. Boost your project's design and efficiency with ready-to-use React components.",
  keywords: [
    "React components",
    "React Tailwind CSS components",
    "free React components",
    "React UI components",
    "React UI library",
    "Tailwind CSS components",
    "free Tailwind CSS components",
    "Tailwind CSS UI library",
    "accessible React components",
    "Next.js components",
    "dark mode React components",
    "React Tailwind CSS button",
    "React Tailwind CSS form",
    "React Tailwind CSS navigation bar",
    "React Tailwind CSS card",
    "best free React component library",
    "React component examples",
    "updated React Tailwind components",
    "React motion components",
    "framer motion components",
  ],
  alternates: {
    canonical: "https://www.businesswish.tech",
  },
  openGraph: {
    title: "Business Wish - Free React & Tailwind CSS UI Components & Motion",
    description:
      "Discover a comprehensive library of free, high-quality React & Tailwind CSS UI components and motion primitives for web developers.",
    type: "website",
    url: "https://www.businesswish.tech",
    siteName: "Business Wish",
    locale: "en_US",
    images: [
      {
        url: "https://www.businesswish.tech/business-wish-hero.png",
        width: 1200,
        height: 630,
        alt: "Business Wish - Free React & Tailwind CSS UI Components & Motion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@abhaysinghr516",
    creator: "@abhaysinghr516",
    title: "Business Wish - Free React & Tailwind CSS UI Components & Motion",
    description:
      "Discover a comprehensive library of free, high-quality React & Tailwind CSS UI components and motion primitives for web developers.",
    images: ["https://www.businesswish.tech/business-wish-hero.png"],
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
      url: "https://abhaysr.in",
    },
  ],
  category: "Technology",
  classification: "React UI Components Library",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        {/* Mobile optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://vercel.live" />

        {/* Google AdSense */}
        {adsenseClientId && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`}
            crossOrigin="anonymous"
          />
        )}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

      </head>
      <body className={jakarta.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main id="main-content">{children}</main>
          <ConditionalFooter />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </ThemeProvider>
        <GoogleAnalytics gaId="G-Y0FKJQ2T12" />
        <Analytics />
        <AnalyticsProvider />
      </body>
    </html>
  );
}
