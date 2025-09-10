"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  List,
  Code,
  Smartphone,
  Monitor,
  Maximize,
  ChevronDown,
} from "lucide-react";
import { Typography } from "./typography";
import { cn } from "@/lib/utils";
import { page_routes } from "@/app/lib/routes-config";

interface DocsPageContentProps {
  title: string;
  description: string;
  content: React.ReactNode;
  tocs: Array<{
    level: number;
    text: string;
    href: string;
  }>;
  pathname: string;
  slug: string[];
}

export function DocsPageContent({
  title,
  description,
  content,
  tocs,
  pathname,
  slug,
}: DocsPageContentProps) {
  const [viewMode, setViewMode] = useState<"desktop" | "mobile" | "fullscreen">(
    "desktop"
  );
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const isComponent = pathname.includes("/components/");

  // Set up intersection observer for TOC active states
  useEffect(() => {
    if (!tocs || tocs.length === 0) return;

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Find the first visible entry
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setActiveId(visibleEntry.target.id);
      }
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-80px 0px -80% 0px", // Adjust for sticky header
      threshold: 0.1,
    });

    // Observe all heading elements
    const elements = tocs
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter(Boolean);

    elements.forEach((el) => {
      if (el && observer.current) {
        observer.current.observe(el);
      }
    });

    return () => {
      if (observer.current) {
        elements.forEach((el) => {
          if (el) {
            observer.current!.unobserve(el);
          }
        });
      }
    };
  }, [tocs]);

  // Get navigation data
  const getNavigation = () => {
    const currentIndex = page_routes.findIndex(
      (route) => `/docs${route.href}` === pathname
    );
    const prevPage = currentIndex > 0 ? page_routes[currentIndex - 1] : null;
    const nextPage =
      currentIndex < page_routes.length - 1
        ? page_routes[currentIndex + 1]
        : null;

    return { prevPage, nextPage };
  };

  const { prevPage, nextPage } = getNavigation();

  return (
    <div className="flex-1">
      {/* Main Content */}
      <div className="w-full">
        {/* Page Header */}
        <div className="px-4 sm:px-6 py-6 sm:py-8 border-b border-border/40">
          <div className="max-w-4xl">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-3">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight break-words">
                    {title}
                  </h1>
                  {isComponent && (
                    <Badge
                      variant="outline"
                      className="font-mono text-xs self-start"
                    >
                      Component
                    </Badge>
                  )}
                </div>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Component Preview (if applicable) */}
        {isComponent && (
          <div className="px-4 sm:px-6 py-6 border-b border-border/40 bg-muted/10">
            <div className="max-w-4xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <h2 className="text-lg font-semibold">Preview</h2>
                {/* Hide preview mode buttons on mobile screens */}
                <div className="hidden sm:flex flex-wrap items-center gap-2">
                  <Button
                    variant={viewMode === "desktop" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("desktop")}
                    className="text-sm"
                  >
                    <Monitor className="h-4 w-4 mr-2" />
                    Desktop
                  </Button>
                  <Button
                    variant={viewMode === "mobile" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("mobile")}
                    className="text-sm"
                  >
                    <Smartphone className="h-4 w-4 mr-2" />
                    Mobile
                  </Button>
                  <Button
                    variant={viewMode === "fullscreen" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("fullscreen")}
                    className="text-sm"
                  >
                    <Maximize className="h-4 w-4 mr-2" />
                    Full View
                  </Button>
                </div>
              </div>

              <div
                className={cn(
                  "border border-border rounded-lg bg-background p-4 sm:p-6 min-h-[200px] flex items-center justify-center overflow-hidden",
                  viewMode === "mobile" && "max-w-sm mx-auto",
                  viewMode === "fullscreen" && "min-h-[400px]"
                )}
              >
                <div className="text-center text-muted-foreground">
                  <Code className="h-8 w-8 mx-auto mb-2" />
                  <p className="text-sm sm:text-base">
                    Component preview will be rendered here
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex flex-col xl:flex-row">
          <div className="flex-1 min-w-0 px-4 sm:px-6 py-6 sm:py-8">
            <div className="max-w-4xl min-w-0 docs-content">
              <Typography>
                <div className="prose prose-gray dark:prose-invert max-w-none prose-sm sm:prose-base lg:prose-lg">
                  {content}
                </div>
              </Typography>
            </div>
          </div>

          {/* Table of Contents */}
          {tocs && tocs.length > 0 && (
            <div className="xl:w-64 xl:flex-shrink-0 xl:order-last">
              {/* Mobile TOC */}
              <div className="xl:hidden px-4 sm:px-6 py-4 border-t border-border/40 bg-muted/10">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <div className="flex items-center space-x-2">
                      <List className="h-4 w-4 text-blue-600" />
                      <h3 className="font-semibold text-sm">On this page</h3>
                    </div>
                    <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="mt-4 space-y-1 max-h-64 overflow-y-auto">
                    {tocs.map(({ href, level, text }) => (
                      <a
                        key={href}
                        href={href}
                        className={cn(
                          "flex items-center space-x-2 py-2 px-3 text-sm rounded-md hover:bg-muted/50 transition-colors group",
                          level === 2 ? "ml-0" : level === 3 ? "ml-4" : "ml-8"
                        )}
                      >
                        <span className="group-hover:text-foreground transition-colors truncate">
                          {text}
                        </span>
                      </a>
                    ))}
                  </div>
                </details>
              </div>

              {/* Desktop TOC */}
              <div className="hidden xl:block xl:border-l border-border/40">
                <div className="sticky top-16 h-[calc(100vh-4rem)] p-6 overflow-hidden">
                  <div className="space-y-4 h-full flex flex-col">
                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <List className="h-4 w-4 text-blue-600" />
                      <h3 className="font-semibold text-sm">On this page</h3>
                    </div>

                    <ScrollArea className="flex-1 pr-2">
                      <div className="space-y-1">
                        {tocs.map(({ href, level, text }) => {
                          const isActive = activeId === href.slice(1);
                          return (
                            <a
                              key={href}
                              href={href}
                              className={cn(
                                "flex items-center space-x-2 py-2 px-3 text-sm rounded-md transition-all duration-200 group border-l-2",
                                isActive
                                  ? "bg-blue-50 dark:bg-blue-950/30 border-blue-600 text-blue-700 dark:text-blue-300"
                                  : "border-transparent hover:bg-muted/50 hover:border-blue-600/30",
                                level === 2
                                  ? "ml-0"
                                  : level === 3
                                  ? "ml-4"
                                  : "ml-8"
                              )}
                            >
                              <span
                                className={cn(
                                  "transition-colors line-clamp-2",
                                  isActive
                                    ? "text-blue-700 dark:text-blue-300 font-medium"
                                    : "group-hover:text-foreground"
                                )}
                              >
                                {text}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    </ScrollArea>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
