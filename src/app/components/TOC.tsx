import React, { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";

interface TocItemProps {
  text: string;
  id: string;
  level: number;
  isActive: boolean;
}

const TocItem: React.FC<TocItemProps> = ({ text, id, level, isActive }) => (
  <a
    href={`#${id}`}
    className={`block text-sm my-2 pl-${
      level * 4
    } hover:text-blue-500 transition-colors ${
      isActive ? "text-blue-500 font-semibold" : "text-gray-700"
    }`}
    onClick={(e) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }}
  >
    {text}
  </a>
);

const TOC: React.FC = () => {
  const [headings, setHeadings] = useState<TocItemProps[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const pathname = usePathname();

  const extractHeadings = useCallback(() => {
    const content = document.querySelector(".prose");
    if (!content) return [];
    const headingElements = content.querySelectorAll("h1, h2, h3, h4, h5, h6");
    return Array.from(headingElements).map((el, index) => {
      const id = el.id || `heading-${index}`;
      if (!el.id) el.id = id;
      return {
        text: el.textContent || "",
        id,
        level: parseInt(el.tagName[1], 10),
        isActive: false,
      };
    });
  }, []);

  useEffect(() => {
    setHeadings(extractHeadings());
  }, [pathname, extractHeadings]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="fixed right-0 top-16 w-64 h-full overflow-y-auto p-4 border-l hidden lg:block">
      <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
      {headings.map((heading) => (
        <TocItem
          key={heading.id}
          {...heading}
          isActive={heading.id === activeId}
        />
      ))}
    </nav>
  );
};

export default TOC;
