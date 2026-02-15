import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "CSS Gradient Generator | Linear & Radial Gradient Maker",
  description:
    "Create stunning linear, radial, and conic CSS gradients with an intuitive visual editor. Presets, export as PNG, and copy-paste ready CSS code.",
  keywords: [
    "css gradient generator",
    "gradient maker",
    "linear gradient",
    "radial gradient",
    "css gradient tool",
    "gradient css code",
    "color gradient generator",
    "gradient preview",
    "web gradient maker",
    "css3 gradient",
  ],
  alternates: { canonical: `${baseUrl}/tools/gradient` },
  openGraph: {
    title: "CSS Gradient Generator | Linear & Radial Gradient Maker",
    description: "Create beautiful CSS gradients with live preview and copy-ready code.",
    url: `${baseUrl}/tools/gradient`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Gradient Generator",
    description: "Create linear and radial CSS gradients with live preview.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
