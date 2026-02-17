"use client";

import { getDocsTocs } from "@/app/lib/markdown";
import clsx from "clsx";
import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";

type Props = { data: Awaited<ReturnType<typeof getDocsTocs>> };

export default function TocObserver({ data }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const headingElementsRef = useRef<
    Record<string, IntersectionObserverEntry>
  >({});

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      headingElementsRef.current = entries.reduce((map, entry) => {
        map[entry.target.id] = entry;
        return map;
      }, headingElementsRef.current);

      const visible = Object.values(headingElementsRef.current).filter(
        (e) => e.isIntersecting
      );

      if (visible.length > 0) {
        const sorted = visible.sort(
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
    if (observer.current) observer.current.disconnect();
    headingElementsRef.current = {};

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-80px 0px -40% 0px",
      threshold: [0, 0.25, 0.5, 1],
    });

    const timer = setTimeout(() => {
      const elements = data.map((item) =>
        document.getElementById(item.href.slice(1))
      );

      elements.forEach((el) => {
        if (el && observer.current) observer.current.observe(el);
      });

      if (elements[0]) setActiveId(elements[0].id);
    }, 150);

    return () => {
      clearTimeout(timer);
      observer.current?.disconnect();
    };
  }, [data, handleIntersect]);

  const handleClick = (
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

  return (
    <div className="flex flex-col gap-0.5 text-sm dark:text-neutral-300/85 text-neutral-800 ml-0.5">
      {data.map(({ href, level, text }) => {
        const isActive = activeId === href.slice(1);
        return (
          <Link
            key={href}
            href={href}
            onClick={(e) => handleClick(e, href)}
            className={clsx(
              "py-1.5 px-2 -mx-2 rounded-md transition-all duration-200 hover:bg-muted/50 block border-l-2",
              {
                "pl-2": level === 2,
                "pl-6": level === 3,
                "pl-10": level === 4,
                "font-medium text-primary bg-muted/30 border-blue-600":
                  isActive,
                "border-transparent": !isActive,
              }
            )}
          >
            <span className="line-clamp-2">{text}</span>
          </Link>
        );
      })}
    </div>
  );
}
