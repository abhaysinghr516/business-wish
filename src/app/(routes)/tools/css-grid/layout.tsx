import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "CSS Grid Generator | Visual Grid Layout Builder",
  description:
    "Build CSS Grid layouts visually with an interactive editor. Set rows, columns, gaps, and areas with generated code. Free, no signup required.",
  keywords: [
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
  ],
  alternates: { canonical: `${baseUrl}/tools/css-grid` },
  openGraph: {
    title: "CSS Grid Generator | Visual Grid Layout Builder",
    description: "Build CSS Grid layouts visually with interactive controls and generated code.",
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
