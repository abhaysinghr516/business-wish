import type { Metadata } from "next";
import { ThemeProvider } from "./components/theme-provider";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Business Wish",
  metadataBase: new URL("https://business-wish.vercel.app"),
  description: "Business Wish || Free Tailwind CSS UI components library",
  keywords:
    "Tailwind CSS, UI components, free components, web development, Business Wish",
  openGraph: {
    title: "Business Wish",
    description: "Free Tailwind CSS UI components library",
    type: "website",
    url: "https://business-wish.vercel.app",
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-Y0FKJQ2T12" />
    </html>
  );
}
