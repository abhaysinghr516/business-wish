import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "Word Counter | Text Analysis & Reading Time Calculator",
  description:
    "Count words, characters, sentences, and paragraphs with reading time estimation. Keyword density analysis and text statistics. Free, works offline.",
  keywords: [
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
  ],
  alternates: { canonical: `${baseUrl}/tools/word-counter` },
  openGraph: {
    title: "Word Counter | Text Analysis & Reading Time",
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
