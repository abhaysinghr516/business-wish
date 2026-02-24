import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "Tailwind CSS Grid Generator | Visual Grid Layout Builder",
  description:
    "Build Tailwind CSS Grid layouts visually with an interactive editor. Set rows, columns, gaps, and areas with generated Tailwind code. Free, no signup required.",
  keywords: [
    "Tailwind CSS grid generator",
    "Tailwind grid layout builder",
    "Tailwind grid tool",
    "Tailwind grid area generator",
    "css grid generator",
    "grid layout builder",
    "css grid tool",
    "grid template columns",
    "grid template rows",
    "css grid editor",
    "grid area generator",
    "visual grid builder",
    "css layout generator",
    "responsive grid tool",
    "Businesswish"
  ],
  alternates: { canonical: `${baseUrl}/tools/css-grid` },
  openGraph: {
    title: "Tailwind CSS Grid Generator | Visual Grid Layout Builder",
    description: "Build Tailwind CSS Grid layouts visually with interactive controls and generated code.",
    url: `${baseUrl}/tools/css-grid`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Grid Generator",
    description: "Visual CSS Grid layout builder with copy-ready code.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
