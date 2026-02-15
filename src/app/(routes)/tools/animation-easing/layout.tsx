import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "Animation Easing Generator | CSS Timing Functions Tool",
  description:
    "Explore and create CSS animation timing functions with interactive cubic-bezier curves. Live preview, presets, and copy-ready CSS transitions.",
  keywords: [
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
  ],
  alternates: { canonical: `${baseUrl}/tools/animation-easing` },
  openGraph: {
    title: "Animation Easing Generator | CSS Timing Functions Tool",
    description: "Create CSS animation timing functions with interactive cubic-bezier curves.",
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
