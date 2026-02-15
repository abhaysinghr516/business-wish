import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "CSS Box Shadow Generator | Visual Shadow Designer",
  description:
    "Design sophisticated CSS box shadows with real-time preview. Multiple layers, inset shadows, and optimized CSS output. Copy-paste ready code.",
  keywords: [
    "css box shadow generator",
    "box shadow tool",
    "css shadow designer",
    "box shadow css",
    "shadow generator",
    "css visual editor",
    "inset shadow",
    "multiple shadows",
    "css3 box shadow",
    "shadow preview tool",
  ],
  alternates: { canonical: `${baseUrl}/tools/box-shadow` },
  openGraph: {
    title: "CSS Box Shadow Generator | Visual Shadow Designer",
    description: "Design CSS box shadows with real-time preview and copy-ready code.",
    url: `${baseUrl}/tools/box-shadow`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Box Shadow Generator",
    description: "Visual box shadow designer with real-time preview.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
