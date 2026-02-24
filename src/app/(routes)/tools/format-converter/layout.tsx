import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "Tailwind Color Format Converter | HEX RGB HSL Converter",
  description:
    "Convert between HEX, RGB, HSL, HSV, and CMYK color formats instantly. Live preview with copy-ready Tailwind CSS color values for design.",
  keywords: [
    "Tailwind color converter",
    "Tailwind hex to rgb",
    "Tailwind hsl converter",
    "color converter",
    "hex to rgb",
    "rgb to hsl",
    "color format converter",
    "hex to hsl",
    "cmyk converter",
    "css color converter",
    "color code converter",
    "web color tool",
    "design color converter",
    "Businesswish"
  ],
  alternates: { canonical: `${baseUrl}/tools/format-converter` },
  openGraph: {
    title: "Tailwind Color Format Converter | Free Tool",
    description:
      "Convert between HEX, RGB, HSL, HSV, and CMYK color formats with live preview.",
    url: `${baseUrl}/tools/format-converter`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Color Format Converter",
    description: "Convert between HEX, RGB, HSL, HSV, and CMYK instantly.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
