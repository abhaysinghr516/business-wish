import type { Metadata } from "next";
import { ThemeProvider } from "./components/theme-provider";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://business-wish.vercel.app"),
  title: {
    default: "Business Wish - Free Tailwind CSS UI Components Library",
    template: "%s | Business Wish",
  },
  description:
    "Discover a comprehensive library of free, high-quality Tailwind CSS UI components for web developers. Boost your project's design and efficiency with our ready-to-use components.",
  keywords: [
    "Tailwind CSS",
    "UI components",
    "free web components",
    "web development",
    "responsive design",
    "frontend library",
    "open-source UI",
    "web design resources",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <GoogleAnalytics gaId="G-Y0FKJQ2T12" />
        <Analytics />
      </body>
    </html>
  );
}
