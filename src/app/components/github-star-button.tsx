"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Star, Github } from "lucide-react";

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
      className={`inline-flex items-center rounded-md border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 ${className}`}
    >
      <div className="flex items-center gap-1 border-r border-gray-300 px-3 py-1.5 dark:border-gray-700">
        <Github className="h-4 w-4" />
        <span>Star</span>
      </div>
      <div className="px-3 py-1.5">{renderStarCount()}</div>
    </Link>
  );
}
