"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Star, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  useEffect(() => {
    const fetchStarCount = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo}`);
        if (response.ok) {
          const data = await response.json();
          setStarCount(data.stargazers_count);
        }
      } catch (error) {
        console.error("Failed to fetch star count:", error);
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

  return (
    <Link
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <Button
        variant="outline"
        size="sm"
        className="h-8 px-3 text-xs font-medium border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        <Github className="h-3 w-3 mr-1.5" />
        <Star className="h-3 w-3 mr-1.5" />
        Star
        {!isLoading && starCount !== null && (
          <span className="ml-1.5 px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs">
            {formatStarCount(starCount)}
          </span>
        )}
      </Button>
    </Link>
  );
}
