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
      <div className="px-4 sm:px-6 py-10 sm:py-16 border-b border-neutral-200/50 dark:border-white/[0.05]">
        <div className="max-w-4xl">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-neutral-900 dark:text-white break-words leading-tight">
                  {title}
                </h1>
                {isComponent && (
                  <Badge
                    variant="secondary"
                    className="font-mono text-[10px] self-start bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 px-2 py-0.5"
                  >
                    Component
                  </Badge>
                )}
                {isMotion && (
                  <Badge
                    variant="secondary"
                    className="font-mono text-[10px] self-start bg-purple-100/50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 px-2 py-0.5"
                  >
                    Motion
                  </Badge>
                )}
              </div>
              <p className="text-lg sm:text-xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed max-w-2xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Mobile TOC (collapsible) — below header ─── */}
      {hasToc && (
        <div className="xl:hidden px-4 sm:px-6 py-4 border-b border-neutral-200/50 dark:border-white/[0.05] bg-neutral-50/50 dark:bg-transparent">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer list-none">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">On this page</span>
              <ChevronDown className="h-4 w-4 text-neutral-400 transition-transform group-open:rotate-180" />
            </summary>
            <div className="mt-4 space-y-1 max-h-64 overflow-y-auto pl-2 border-l border-neutral-200/50 dark:border-white/5 relative">
              {tocs.map(({ href, level, text }) => {
                const isActive = activeId === href.slice(1);
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => handleTocClick(e, href)}
                    className={cn(
                      "relative block py-1.5 pr-3 text-[13px] transition-all duration-300",
                      level === 2 ? "pl-3" : level === 3 ? "pl-6" : "pl-9",
                      isActive
                        ? "text-neutral-900 dark:text-white font-medium"
                        : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                    )}
                  >
                    {isActive && (
                      <span className="absolute left-[-1px] top-0 bottom-0 w-[2px] rounded-full bg-neutral-900 dark:bg-white" />
                    )}
                    <span className="truncate">{text}</span>
                  </a>
                );
              })}
            </div>
          </details>
        </div>
      )}

      {/* ─── Content + sticky TOC (grid layout) ─── */}
      <div
        className={cn(
          "relative",
          hasToc
            ? "xl:grid xl:grid-cols-[1fr_240px] xl:gap-12"
            : ""
        )}
      >
        {/* Main prose */}
        <div className="min-w-0 px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-4xl min-w-0 docs-content">
            <Typography>
              <div className="prose prose-neutral dark:prose-invert max-w-none prose-sm sm:prose-base">
                {content}
              </div>
            </Typography>

            {/* Prev / Next navigation */}
            <div className="mt-20 pt-8 border-t border-neutral-200/50 dark:border-white/[0.05]">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                {prevPage ? (
                  <Link
                    href={`/docs${prevPage.href}`}
                    className="group flex flex-col gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors w-full sm:w-auto text-left"
                  >
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-neutral-400">
                      Previous
                    </span>
                    <div className="flex items-center gap-2">
                      <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                      <span className="font-medium text-[15px]">{prevPage.title}</span>
                    </div>
                  </Link>
                ) : (
                  <div className="w-full sm:w-auto" />
                )}
                {nextPage ? (
                  <Link
                    href={`/docs${nextPage.href}`}
                    className="group flex flex-col gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors w-full sm:w-auto text-right items-end"
                  >
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-neutral-400">
                      Next
                    </span>
                    <div className="flex items-center justify-end gap-2">
                       <span className="font-medium text-[15px]">{nextPage.title}</span>
                       <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ) : (
                  <div className="w-full sm:w-auto" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ─── Desktop TOC — sticky ─── */}
        {hasToc && (
          <div className="hidden xl:block pl-8 pr-4">
            <div className="sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto py-8">
              <div className="space-y-6">
                <h3 className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                  On this page
                </h3>

                <nav className="space-y-1 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-neutral-200/50 dark:bg-white/5" />
                  {tocs.map(({ href, level, text }) => {
                    const isActive = activeId === href.slice(1);
                    return (
                      <a
                        key={href}
                        href={href}
                        onClick={(e) => handleTocClick(e, href)}
                        className={cn(
                          "relative block py-1.5 pr-3 text-[13px] leading-relaxed transition-all duration-300",
                          isActive
                            ? "text-neutral-900 dark:text-white font-medium"
                            : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white",
                          level === 2
                            ? "pl-4"
                            : level === 3
                            ? "pl-8"
                            : "pl-12"
                        )}
                      >
                        {isActive && (
                           <span className="absolute left-[-0.5px] top-1/2 -translate-y-1/2 h-4 w-[2px] rounded-full bg-neutral-900 dark:bg-white transition-all duration-300" />
                        )}
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
