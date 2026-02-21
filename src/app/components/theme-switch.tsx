"use client";
import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100/80 hover:bg-neutral-200/80 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/80 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white backdrop-blur-sm border border-neutral-200/50 dark:border-white/5 transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400/50 dark:focus-visible:ring-white/20"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 transition-all" />
      ) : (
        <Moon className="h-4 w-4 transition-all" />
      )}
    </button>
  );
}
