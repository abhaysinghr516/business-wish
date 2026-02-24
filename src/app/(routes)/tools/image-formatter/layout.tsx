import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "Tailwind Image Format Converter | PNG JPEG WebP SVG",
  description:
    "Convert between PNG, JPEG, WebP, and SVG image formats for your Tailwind projects with quality settings. Batch conversion, instant preview, and free download.",
  keywords: [
    "Tailwind image format converter",
    "Tailwind image tool",
    "image format converter",
    "convert png to jpeg",
    "png to webp converter",
    "image converter online",
    "jpeg to png",
    "webp converter",
    "image format tool",
    "batch image converter",
    "free image converter",
    "photo format converter",
    "Businesswish"
  ],
  alternates: { canonical: `${baseUrl}/tools/image-formatter` },
  openGraph: {
    title: "Tailwind Image Format Converter | PNG JPEG WebP SVG",
    description: "Convert between image formats with quality settings. Free, browser-based.",
    url: `${baseUrl}/tools/image-formatter`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Format Converter",
    description: "Convert images between PNG, JPEG, WebP, and SVG formats online.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
