import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "JSON Formatter & Validator | Free Online JSON Tool",
  description:
    "Format, validate, and beautify JSON data with syntax highlighting and error detection. Minify JSON for production. Free online tool with no signup.",
  keywords: [
    "json formatter",
    "json validator",
    "json beautifier",
    "json minifier",
    "format json online",
    "validate json",
    "json pretty print",
    "json tool",
    "json linter",
    "free json formatter",
  ],
  alternates: { canonical: `${baseUrl}/tools/json-formatter` },
  openGraph: {
    title: "JSON Formatter & Validator | Free Online Tool",
    description:
      "Format, validate, and minify JSON data. Pretty-print with syntax highlighting.",
    url: `${baseUrl}/tools/json-formatter`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Formatter & Validator",
    description: "Format, validate, and beautify JSON data online for free.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
