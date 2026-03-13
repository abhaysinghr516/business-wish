import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Duotone Image Filter - Business Wish Tools",
  description:
    "Instantly apply a striking dual-color duotone effect to any image directly in your browser. Fully customizable colors and export options.",
  openGraph: {
    title: "Duotone Image Filter",
    description: "Create striking two-color duotone effects from any photo instantly.",
  },
};

export default function DuotoneFilterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
