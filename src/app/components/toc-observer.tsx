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
    <div className="flex flex-col gap-0.5 text-[13px] ml-1 relative">
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-neutral-200/50 dark:bg-white/5" />
      {data.map(({ href, level, text }) => {
        const isActive = activeId === href.slice(1);
        return (
          <Link
            key={href}
            href={href}
            onClick={(e) => handleClick(e, href)}
            className={clsx(
              "relative block py-1.5 pr-3 transition-all duration-300",
              {
                "pl-4": level === 2,
                "pl-8": level === 3,
                "pl-12": level === 4,
                "text-neutral-900 dark:text-white font-medium": isActive,
                "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white": !isActive,
              }
            )}
          >
            {isActive && (
              <span className="absolute left-[0.5px] top-1/2 -translate-y-1/2 h-4 w-[2px] rounded-full bg-neutral-900 dark:bg-white transition-all duration-300" />
            )}
            <span className="line-clamp-2">{text}</span>
          </Link>
        );
      })}
    </div>
  );
}
