import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "CSV to JSON Converter | Free Online Data Transformer",
  description:
    "Transform CSV data into structured JSON with automatic field mapping and validation. Supports large files, custom delimiters, and instant download.",
  keywords: [
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
  ],
  alternates: { canonical: `${baseUrl}/tools/csv-to-json` },
  openGraph: {
    title: "CSV to JSON Converter | Free Online Data Transformer",
    description: "Transform CSV data into structured JSON with field mapping and validation.",
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
