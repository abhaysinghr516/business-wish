"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import {
  List,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Typography } from "./typography";
import { cn } from "@/lib/utils";
import { page_routes } from "@/app/lib/routes-config";
import Link from "next/link";

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
}: DocsPageContentProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const headingElementsRef = useRef<Record<string, IntersectionObserverEntry>>(
    {}
  );

  const isComponent = pathname.includes("components/");
  const isMotion = pathname.includes("motion/");
  const hasToc = tocs && tocs.length > 0;

  // ── Scroll-spy ───────────────────────────────────────────────────
  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      headingElementsRef.current = entries.reduce((map, entry) => {
        map[entry.target.id] = entry;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings = Object.values(headingElementsRef.current).filter(
        (e) => e.isIntersecting
      );

      if (visibleHeadings.length > 0) {
        const sorted = visibleHeadings.sort(
          (a, b) =>
            a.target.getBoundingClientRect().top -
            b.target.getBoundingClientRect().top
        );
        setActiveId(sorted[0].target.id);
      }
    },
    []
  );

  useEffect(() => {
    if (!hasToc) return;

    if (observer.current) observer.current.disconnect();
    headingElementsRef.current = {};

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-80px 0px -40% 0px",
      threshold: [0, 0.25, 0.5, 1],
    });

    const timer = setTimeout(() => {
      const elements = tocs
        .map((t) => document.getElementById(t.href.slice(1)))
        .filter(Boolean);

      elements.forEach((el) => {
        if (el && observer.current) observer.current.observe(el);
      });

      if (elements[0]) setActiveId(elements[0].id);
    }, 150);

    return () => {
      clearTimeout(timer);
      observer.current?.disconnect();
    };
  }, [tocs, hasToc, handleIntersect]);

  // ── Navigation ───────────────────────────────────────────────────
  const currentPath = `/${pathname}`;
  const idx = page_routes.findIndex((r) => r.href === currentPath);
  const prevPage = idx > 0 ? page_routes[idx - 1] : null;
  const nextPage = idx < page_routes.length - 1 ? page_routes[idx + 1] : null;

  // ── Smooth scroll for TOC clicks ─────────────────────────────────
  const handleTocClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveId(id);
    }
  };

  // ── Render ────────────────────────────────────────────────────────
  return (
    <div className="w-full">
      {/* ─── Page header ─── */}
      <div className="px-4 sm:px-6 py-6 sm:py-8 border-b border-border/40">
        <div className="max-w-4xl">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
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
                {isMotion && (
                  <Badge
                    variant="outline"
                    className="font-mono text-xs self-start bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800"
                  >
                    Motion
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

      {/* ─── Mobile TOC (collapsible) — below header ─── */}
      {hasToc && (
        <div className="xl:hidden px-4 sm:px-6 py-3 border-b border-border/40 bg-muted/10">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <div className="flex items-center space-x-2">
                <List className="h-4 w-4 text-blue-600" />
                <h3 className="font-semibold text-sm">On this page</h3>
              </div>
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <div className="mt-3 space-y-0.5 max-h-64 overflow-y-auto">
              {tocs.map(({ href, level, text }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleTocClick(e, href)}
                  className={cn(
                    "block py-1.5 px-3 text-sm rounded-md hover:bg-muted/50 transition-colors",
                    level === 2 ? "ml-0" : level === 3 ? "ml-4" : "ml-8",
                    activeId === href.slice(1)
                      ? "bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  <span className="truncate">{text}</span>
                </a>
              ))}
            </div>
          </details>
        </div>
      )}

      {/* ─── Content + sticky TOC (grid layout) ─── */}
      <div
        className={cn(
          "relative",
          hasToc
            ? "xl:grid xl:grid-cols-[1fr_220px] xl:gap-0"
            : ""
        )}
      >
        {/* Main prose */}
        <div className="min-w-0 px-4 sm:px-6 py-6 sm:py-8">
          <div className="max-w-4xl min-w-0 docs-content">
            <Typography>
              <div className="prose prose-gray dark:prose-invert max-w-none prose-sm sm:prose-base lg:prose-lg">
                {content}
              </div>
            </Typography>

            {/* Prev / Next navigation */}
            <div className="mt-12 pt-6 border-t border-border/40">
              <div className="flex items-center justify-between">
                {prevPage ? (
                  <Link
                    href={`/docs${prevPage.href}`}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">
                        Previous
                      </span>
                      <span className="font-medium">{prevPage.title}</span>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}
                {nextPage ? (
                  <Link
                    href={`/docs${nextPage.href}`}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors text-right"
                  >
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">
                        Next
                      </span>
                      <span className="font-medium">{nextPage.title}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ─── Desktop TOC — sticky ─── */}
        {hasToc && (
          <div className="hidden xl:block border-l border-border/40">
            <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-6 px-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <List className="h-4 w-4 text-blue-600" />
                  <h3 className="font-semibold text-sm">On this page</h3>
                </div>

                <nav className="space-y-0.5">
                  {tocs.map(({ href, level, text }) => {
                    const isActive = activeId === href.slice(1);
                    return (
                      <a
                        key={href}
                        href={href}
                        onClick={(e) => handleTocClick(e, href)}
                        className={cn(
                          "block py-1.5 px-3 text-[13px] leading-snug rounded-md transition-all duration-200 border-l-2",
                          isActive
                            ? "bg-blue-50 dark:bg-blue-950/30 border-blue-600 text-blue-700 dark:text-blue-300 font-medium"
                            : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50 hover:border-blue-600/30",
                          level === 2
                            ? "ml-0"
                            : level === 3
                            ? "ml-3"
                            : "ml-6"
                        )}
                      >
                        <span className="line-clamp-2">{text}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
