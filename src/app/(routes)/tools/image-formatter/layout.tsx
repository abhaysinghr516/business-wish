import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "Image Format Converter | Convert PNG JPEG WebP SVG Online",
  description:
    "Convert between PNG, JPEG, WebP, and SVG image formats with quality settings. Batch conversion, instant preview, and free download. 100% browser-based.",
  keywords: [
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
  ],
  alternates: { canonical: `${baseUrl}/tools/image-formatter` },
  openGraph: {
    title: "Image Format Converter | PNG JPEG WebP Converter",
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
