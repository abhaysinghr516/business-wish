import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "Color Palette Generator | Free Online Color Scheme Tool",
  description:
    "Generate harmonious color palettes using complementary, triadic, analogous, monochromatic, and tetradic color schemes. Free online tool with export options.",
  keywords: [
    "color palette generator",
    "color scheme generator",
    "complementary colors",
    "triadic color scheme",
    "analogous colors",
    "monochromatic palette",
    "color theory tool",
    "free color tool",
    "web design colors",
    "CSS colors",
    "color harmony",
  ],
  alternates: { canonical: `${baseUrl}/tools/palette-generator` },
  openGraph: {
    title: "Color Palette Generator | Free Online Color Scheme Tool",
    description:
      "Generate harmonious color palettes using color theory. Complementary, triadic, analogous, and more.",
    url: `${baseUrl}/tools/palette-generator`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Color Palette Generator",
    description:
      "Generate harmonious color palettes using color theory. Free online tool.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
