import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Business Wish",
  description: "Business Wish || Free Tailwind CSS UI components library",
  keywords:
    "Tailwind CSS, UI components, free components, web development, Business Wish",
  openGraph: {
    title: "Business Wish",
    description: "Free Tailwind CSS UI components library",
    type: "website",
    url: "https://businesswish.com",
    images: [
      {
        url: "https://business-wish.vercel.app/home.png",
        width: 800,
        height: 600,
        alt: "Business Wish Tailwind CSS UI Components",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@abhaysinghr516",
    title: "Business Wish",
    description: "Free Tailwind CSS UI components library",
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
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-Y0FKJQ2T12" />
    </html>
  );
}
