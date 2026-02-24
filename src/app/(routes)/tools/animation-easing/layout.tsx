import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "Tailwind Animation Easing Generator | CSS Timing Functions",
  description:
    "Explore and create Tailwind CSS animation timing functions with interactive cubic-bezier curves. Live preview, presets, and copy-ready Tailwind configuration.",
  keywords: [
    "Tailwind animation easing generator",
    "Tailwind timing functions",
    "Tailwind bezier curves",
    "animation easing generator",
    "css timing function",
    "cubic bezier tool",
    "css animation curves",
    "easing function generator",
    "css transition timing",
    "animation preview",
    "ease in out",
    "css cubic bezier",
    "motion curves tool",
    "Businesswish"
  ],
  alternates: { canonical: `${baseUrl}/tools/animation-easing` },
  openGraph: {
    title: "Tailwind Animation Easing Generator | CSS Timing Tool",
    description: "Create Tailwind CSS animation timing functions with interactive curves.",
    url: `${baseUrl}/tools/animation-easing`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Animation Easing Generator",
    description: "Interactive CSS cubic-bezier and timing function tool.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
