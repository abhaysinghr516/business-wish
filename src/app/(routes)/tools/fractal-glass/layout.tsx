import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linear Fractal Glass Generator - Components UI",
  description:
    "Generate and export sophisticated fluted, ribbed, and frosted linear fractal glass effects using CSS and SVG filters.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
