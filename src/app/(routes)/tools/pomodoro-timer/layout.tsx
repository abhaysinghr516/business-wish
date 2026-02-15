import { Metadata } from "next";

const baseUrl = "https://www.businesswish.tech";

export const metadata: Metadata = {
  title: "Pomodoro Timer | Free Focus & Productivity Timer",
  description:
    "Boost productivity with the Pomodoro technique. Customizable work and break intervals, session tracking, and focus statistics. Works offline in your browser.",
  keywords: [
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
  ],
  alternates: { canonical: `${baseUrl}/tools/pomodoro-timer` },
  openGraph: {
    title: "Pomodoro Timer | Free Focus & Productivity Timer",
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
