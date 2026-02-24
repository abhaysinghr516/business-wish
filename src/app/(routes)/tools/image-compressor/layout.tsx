import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "Tailwind Image Compressor | Compress JPEG PNG WebP Online",
  description:
    "Compress JPEG, PNG, and WebP images for your Tailwind CSS projects with adjustable quality controls. Batch processing, side-by-side preview, and instant download.",
  keywords: [
    "Tailwind image compressor",
    "Tailwind image optimizer",
    "image compressor",
    "compress images online",
    "jpeg compressor",
    "png compressor",
    "webp compressor",
    "image optimizer",
    "reduce image size",
    "batch image compression",
    "free image compressor",
    "photo compressor",
    "Businesswish"
  ],
  alternates: { canonical: `${baseUrl}/tools/image-compressor` },
  openGraph: {
    title: "Tailwind Image Compressor | Compress JPEG PNG WebP",
    description: "Compress images with quality controls and batch processing. Free, browser-based.",
    url: `${baseUrl}/tools/image-compressor`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Compressor",
    description: "Compress JPEG, PNG, and WebP images online for free.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
