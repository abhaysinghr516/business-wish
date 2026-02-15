import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "Contrast Checker | WCAG Accessibility Color Contrast Tool",
  description:
    "Check color contrast ratios against WCAG 2.1 accessibility standards. Ensure your text is readable with real-time AA and AAA compliance scoring.",
  keywords: [
    "contrast checker",
    "WCAG contrast",
    "color contrast tool",
    "accessibility checker",
    "WCAG 2.1",
    "AA compliance",
    "AAA compliance",
    "color accessibility",
    "readable text colors",
    "web accessibility tool",
  ],
  alternates: { canonical: `${baseUrl}/tools/contrast-checker` },
  openGraph: {
    title: "Contrast Checker | WCAG Accessibility Tool",
    description:
      "Check color contrast ratios against WCAG 2.1 standards. Real-time AA and AAA compliance scoring.",
    url: `${baseUrl}/tools/contrast-checker`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WCAG Contrast Checker",
    description: "Check color contrast ratios for WCAG accessibility compliance.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
