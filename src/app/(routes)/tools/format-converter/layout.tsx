import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "Color Format Converter | HEX RGB HSL HSV CMYK Converter",
  description:
    "Convert between HEX, RGB, HSL, HSV, and CMYK color formats instantly. Live preview with copy-ready color values for CSS and design.",
  keywords: [
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
  ],
  alternates: { canonical: `${baseUrl}/tools/format-converter` },
  openGraph: {
    title: "Color Format Converter | HEX RGB HSL Converter",
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
