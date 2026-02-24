import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "Tailwind CSS Box Shadow Generator | Visual Shadow Designer",
  description:
    "Design sophisticated Tailwind CSS box shadows with real-time preview. Multiple layers, inset shadows, and optimized Tailwind CSS output. Copy-paste ready code.",
  keywords: [
    "Tailwind CSS box shadow generator",
    "Tailwind shadow generator",
    "Tailwind shadow designer",
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
    "Businesswish"
  ],
  alternates: { canonical: `${baseUrl}/tools/box-shadow` },
  openGraph: {
    title: "Tailwind CSS Box Shadow Generator | Visual Shadow Designer",
    description: "Design Tailwind CSS box shadows with real-time preview and copy-ready code.",
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
