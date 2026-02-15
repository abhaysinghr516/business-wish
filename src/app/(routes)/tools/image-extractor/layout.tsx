import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "Image Color Picker | Extract Colors from Images",
  description:
    "Extract dominant colors and generate complete palettes from uploaded images. Pick any color from your photos and get HEX, RGB, HSL values.",
  keywords: [
    "image color picker",
    "extract colors from image",
    "color picker tool",
    "image color extractor",
    "photo color palette",
    "dominant colors",
    "eyedropper tool",
    "color sampling",
    "image palette generator",
    "design color tool",
  ],
  alternates: { canonical: `${baseUrl}/tools/image-extractor` },
  openGraph: {
    title: "Image Color Picker | Extract Colors from Images",
    description:
      "Extract dominant colors and generate palettes from uploaded images.",
    url: `${baseUrl}/tools/image-extractor`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Color Picker",
    description: "Extract colors from images and generate palettes.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
