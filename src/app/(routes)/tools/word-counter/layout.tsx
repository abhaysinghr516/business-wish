import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "Tailwind Word Counter | Text Analysis & Reading Time",
  description:
    "Count words, characters, sentences, and paragraphs for your Tailwind typography with reading time estimation. Keyword density analysis. Free, works offline.",
  keywords: [
    "Tailwind word counter",
    "Tailwind typography tool",
    "word counter",
    "character counter",
    "text analysis tool",
    "reading time calculator",
    "word count online",
    "character count",
    "keyword density",
    "sentence counter",
    "paragraph counter",
    "free word counter",
    "Businesswish"
  ],
  alternates: { canonical: `${baseUrl}/tools/word-counter` },
  openGraph: {
    title: "Tailwind Word Counter | Text Analysis & Reading Time",
    description: "Count words, characters, sentences with reading time and keyword density.",
    url: `${baseUrl}/tools/word-counter`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Word Counter",
    description: "Text analysis with word count, reading time, and keyword density.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
