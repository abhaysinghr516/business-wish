import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "Tailwind CSV to JSON Converter | Free Online Config Tool",
  description:
    "Transform CSV data into structured JSON with automatic field mapping for Tailwind config arrays. Supports large files, custom delimiters, and instant download.",
  keywords: [
    "Tailwind csv to json converter",
    "Tailwind data tool",
    "Tailwind config generator",
    "csv to json converter",
    "csv converter online",
    "convert csv to json",
    "data transformer",
    "csv json tool",
    "csv parser",
    "data format converter",
    "free csv converter",
    "json from csv",
    "tabular data converter",
    "Businesswish"
  ],
  alternates: { canonical: `${baseUrl}/tools/csv-to-json` },
  openGraph: {
    title: "Tailwind CSV to JSON Converter | Free Online Tool",
    description: "Transform CSV data into configured JSON with field mapping and validation.",
    url: `${baseUrl}/tools/csv-to-json`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSV to JSON Converter",
    description: "Convert CSV files to JSON format instantly. Free online tool.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
