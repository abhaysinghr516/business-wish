import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "Tailwind Pomodoro Timer | Free Focus & Productivity Tool",
  description:
    "Boost Tailwind development productivity with the Pomodoro technique. Customizable work and break intervals, session tracking, and focus statistics. Works offline.",
  keywords: [
    "Tailwind pomodoro timer",
    "Tailwind productivity timer",
    "pomodoro timer",
    "focus timer",
    "productivity timer",
    "pomodoro technique",
    "work timer",
    "study timer",
    "time management tool",
    "free pomodoro",
    "online timer",
    "focus tracker",
    "Businesswish"
  ],
  alternates: { canonical: `${baseUrl}/tools/pomodoro-timer` },
  openGraph: {
    title: "Tailwind Pomodoro Timer | Free Focus & Productivity Tool",
    description: "Boost productivity with customizable Pomodoro timer. Free, works offline.",
    url: `${baseUrl}/tools/pomodoro-timer`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pomodoro Timer",
    description: "Free Pomodoro timer for focus and productivity.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
