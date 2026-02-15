import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "CSS Flexbox Generator | Visual Flexbox Layout Builder",
  description:
    "Master CSS Flexbox layouts with an interactive visual editor. Adjust flex properties, see changes in real-time, and copy generated CSS code.",
  keywords: [
    "flexbox generator",
    "css flexbox tool",
    "flexbox layout builder",
    "flex direction",
    "justify content",
    "align items",
    "flex wrap",
    "css layout tool",
    "visual flexbox editor",
    "flexbox playground",
  ],
  alternates: { canonical: `${baseUrl}/tools/flexbox` },
  openGraph: {
    title: "CSS Flexbox Generator | Visual Layout Builder",
    description: "Interactive CSS Flexbox editor with real-time preview and generated code.",
    url: `${baseUrl}/tools/flexbox`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Flexbox Generator",
    description: "Visual Flexbox layout builder with copy-ready CSS code.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
