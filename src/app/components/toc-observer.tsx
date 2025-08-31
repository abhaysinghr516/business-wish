"use client";

import { getDocsTocs } from "@/app/lib/markdown";
import clsx from "clsx";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type Props = { data: Awaited<ReturnType<typeof getDocsTocs>> };

export default function TocObserver({ data }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setActiveId(visibleEntry.target.id);
      }
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-20px 0px 0px 0px",
      threshold: 0.1,
    });

    const elements = data.map((item) =>
      document.getElementById(item.href.slice(1))
    );

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
  }, [data]);

  return (
    <div className="flex flex-col gap-2.5 text-sm dark:text-neutral-300/85 text-neutral-800 ml-0.5">
      {data.map(({ href, level, text }) => {
        return (
          <Link
            key={href}
            href={href}
            className={clsx(
              "py-1.5 px-2 -mx-2 rounded-md transition-colors hover:bg-muted/50 block",
              {
                "pl-2": level == 2,
                "pl-6": level == 3,
                "pl-10": level == 4,
                "font-medium text-primary bg-muted/30":
                  activeId == href.slice(1),
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
