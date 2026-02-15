import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "Color Blindness Simulator | Vision Deficiency Preview Tool",
  description:
    "Visualize how your designs appear to users with different types of color vision deficiency. Simulate protanopia, deuteranopia, tritanopia, and more.",
  keywords: [
    "color blindness simulator",
    "vision deficiency tool",
    "protanopia simulator",
    "deuteranopia preview",
    "tritanopia test",
    "color vision deficiency",
    "accessibility design tool",
    "inclusive design",
    "colorblind test",
    "web accessibility",
  ],
  alternates: { canonical: `${baseUrl}/tools/blindness-simulator` },
  openGraph: {
    title: "Color Blindness Simulator | Vision Deficiency Preview",
    description:
      "See how your designs appear to users with color vision deficiency. Free accessibility tool.",
    url: `${baseUrl}/tools/blindness-simulator`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Color Blindness Simulator",
    description: "Visualize designs through different types of color blindness.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
