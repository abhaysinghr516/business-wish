"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Star, Github } from "lucide-react";
import { trackGitHubStar } from "@/lib/analytics";
import { cn } from "@/app/lib/utils";

interface GitHubStarButtonProps {
  repo: string; // Format: "owner/repo"
  className?: string;
}

export default function GitHubStarButton({
  repo,
  className = "",
}: GitHubStarButtonProps) {
  const [starCount, setStarCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`, {
          next: { revalidate: 3600 },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch star count");
        }

        const data = await response.json();
        setStarCount(data.stargazers_count);
      } catch (error) {
        console.error("Failed to fetch star count:", error);
        setError("Error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchStarCount();
  }, [repo]);

  const formatStarCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  const renderStarCount = () => {
    if (isLoading) {
      return (
        <div className="h-5 w-10 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700" />
      );
    }
    if (error) {
      return <div className="text-red-500">{error}</div>;
    }
    if (starCount !== null) {
      return <div>{formatStarCount(starCount)}</div>;
    }
    return null;
  };

  return (
    <Link
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Star ${repo} on GitHub`}
      onClick={() => trackGitHubStar()}
      className={cn(
        "group inline-flex items-center rounded-full bg-neutral-100/80 dark:bg-neutral-800/50 text-[13px] font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white shadow-sm border border-neutral-200/50 dark:border-white/5 transition-all duration-200 active:scale-95 backdrop-blur-sm",
        className
      )}
    >
      <div className="flex items-center gap-1.5 px-3 py-1.5 border-r border-neutral-200/50 dark:border-white/5 transition-colors group-hover:bg-neutral-200/50 dark:group-hover:bg-white/[0.02] rounded-l-full">
        <Github className="h-[14px] w-[14px] opacity-70 group-hover:opacity-100 transition-opacity" />
        <span>Star</span>
      </div>
      <div className="px-3 py-1.5 min-w-[3.5rem] text-center transition-colors group-hover:bg-neutral-200/30 dark:group-hover:bg-white/[0.01] rounded-r-full font-semibold">
        {renderStarCount()}
      </div>
    </Link>
  );
}

