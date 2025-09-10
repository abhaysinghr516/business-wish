"use client";

import {
  CommandIcon,
  FileIcon,
  SearchIcon,
  XIcon,
  ComponentIcon,
  BookOpenIcon,
  FolderIcon,
  SparklesIcon,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useMemo, useState, useRef, useCallback } from "react";
import { advanceSearch, cn } from "@/app/lib/utils";
import { useRouter } from "next/navigation";

type SearchProps = {
  hideTrigger?: boolean; // hide input trigger (useful for mobile sheet)
  triggerOnly?: boolean; // only render a trigger that opens search
};

export default function Search({
  hideTrigger = false,
  triggerOnly = false,
}: SearchProps) {
  const [searchedInput, setSearchedInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMac, setIsMac] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    setIsMac(navigator.userAgent.toUpperCase().includes("MAC"));

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((isMac ? event.metaKey : event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setIsOpen(true);
      }
      if (event.key === "Escape" && isOpen) {
        event.preventDefault();
        setIsOpen(false);
      }
    };

    const handleOpenSearch = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-search", handleOpenSearch as EventListener);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener(
        "open-search",
        handleOpenSearch as EventListener
      );
    };
  }, [isMac, isOpen]);

  const filteredResults = useMemo(() => {
    const trimmedInput = searchedInput.trim();
    return advanceSearch(trimmedInput);
  }, [searchedInput]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchedInput, filteredResults]);

  useEffect(() => {
    if (itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex]?.scrollIntoView({
        behavior: "instant",
        block: "nearest",
      });
    }
  }, [selectedIndex]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const maxIndex = filteredResults.length - 1;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prevIndex) =>
          prevIndex === maxIndex ? 0 : prevIndex + 1
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prevIndex) =>
          prevIndex === 0 ? maxIndex : prevIndex - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredResults.length > 0) {
          const selectedItem = filteredResults[selectedIndex];
          handleItemClick(selectedItem.href);
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
      }
    },
    [filteredResults, selectedIndex]
  );

  const handleItemClick = useCallback(
    (href: string) => {
      router.push(`/docs${href}`);
      setIsOpen(false);
    },
    [router]
  );

  const getItemIcon = useCallback((href: string, title: string) => {
    const path = href.toLowerCase();

    if (path.includes("/components/"))
      return (
        <ComponentIcon className="h-4 w-4 text-blue-500 dark:text-blue-400" />
      );
    if (path.includes("/pages/") || path.includes("/docs/"))
      return (
        <BookOpenIcon className="h-4 w-4 text-green-500 dark:text-green-400" />
      );
    if (path.split("/").length <= 2)
      return (
        <FolderIcon className="h-4 w-4 text-amber-500 dark:text-amber-400" />
      );
    if (
      title.toLowerCase().includes("new") ||
      title.toLowerCase().includes("latest")
    )
      return (
        <SparklesIcon className="h-4 w-4 text-purple-500 dark:text-purple-400" />
      );
    return <FileIcon className="h-4 w-4 text-stone-500 dark:text-stone-400" />;
  }, []);

  // If only trigger is needed
  if (triggerOnly) {
    return (
      <div
        onClick={() => window.dispatchEvent(new Event("open-search"))}
        className="relative flex-1 max-w-md cursor-pointer group"
      >
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500 dark:text-stone-400 group-hover:text-stone-700 dark:group-hover:text-stone-200 transition-all duration-200 group-hover:scale-110" />
        <Input
          className="md:w-full rounded-xl dark:bg-stone-900/90 bg-stone-50/90 border-stone-200 dark:border-stone-800 h-10 pl-10 pr-0 sm:pr-4 text-sm shadow-sm"
          placeholder="Search Components..."
          type="search"
          readOnly
        />
        <div className="sm:flex hidden absolute top-1/2 -translate-y-1/2 right-2 text-xs font-medium font-mono items-center gap-0.5 dark:bg-stone-800/80 bg-stone-200/80 p-1.5 rounded-md">
          {isMac ? (
            <>
              <CommandIcon className="w-3 h-3" />
              <span>K</span>
            </>
          ) : (
            <>
              <span>Ctrl</span>
              <span>K</span>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          setSearchedInput("");
          setSelectedIndex(0);
        } else {
          setTimeout(() => inputRef.current?.focus(), 0);
        }
        setIsOpen(open);
      }}
    >
      {!hideTrigger && (
        <DialogTrigger asChild>
          <div className="relative flex-1 max-w-md cursor-pointer group">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500 dark:text-stone-400 group-hover:text-stone-700 dark:group-hover:text-stone-200 transition-all duration-200 group-hover:scale-110" />
            <Input
              className="md:w-full rounded-xl dark:bg-stone-900/90 bg-stone-50/90 border-stone-200 dark:border-stone-800 h-10 pl-10 pr-0 sm:pr-4 text-sm shadow-sm"
              placeholder="Search Components..."
              type="search"
              readOnly
            />
            <div className="sm:flex hidden absolute top-1/2 -translate-y-1/2 right-2 text-xs font-medium font-mono items-center gap-0.5 dark:bg-stone-800/80 bg-stone-200/80 p-1.5 rounded-md">
              {isMac ? (
                <>
                  <CommandIcon className="w-3 h-3" />
                  <span>K</span>
                </>
              ) : (
                <>
                  <span>Ctrl</span>
                  <span>K</span>
                </>
              )}
            </div>
          </div>
        </DialogTrigger>
      )}
      <DialogContent className="p-0 max-w-2xl sm:top-[38%] top-[45%] rounded-2xl border dark:border-stone-800 shadow-2xl dark:shadow-stone-950/50 dark:bg-stone-900/90 bg-stone-50/90">
        <DialogTitle className="sr-only">Search Components</DialogTitle>
        <DialogHeader>
          <div className="relative">
            <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-500 dark:text-stone-400" />
            <input
              ref={inputRef}
              value={searchedInput}
              onChange={(e) => setSearchedInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search components or browse all..."
              className="h-16 w-full pl-14 pr-12 bg-transparent border-b border-stone-200 dark:border-stone-800 text-base outline-none placeholder:text-stone-500 dark:placeholder:text-stone-400"
            />
            {searchedInput && (
              <button
                onClick={() => setSearchedInput("")}
                className="absolute right-6 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 p-0.5 transition-all duration-200 hover:scale-110"
                aria-label="Clear search"
              >
                <XIcon className="h-3 w-3" />
              </button>
            )}
          </div>
        </DialogHeader>

        {/* Hints */}
        <div className="px-4 py-2 border-b border-stone-200 dark:border-stone-800 bg-stone-50/50 dark:bg-stone-800/50 text-xs text-stone-500 dark:text-stone-400 flex justify-center gap-4">
          <div className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-stone-200 dark:bg-stone-700 rounded">
              ↑↓
            </kbd>{" "}
            Navigate
          </div>
          <div className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-stone-200 dark:bg-stone-700 rounded">
              ↵
            </kbd>{" "}
            Select
          </div>
          <div className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-stone-200 dark:bg-stone-700 rounded">
              Esc
            </kbd>{" "}
            Close
          </div>
        </div>

        {/* Results */}
        {filteredResults.length === 0 && searchedInput && (
          <div className="flex flex-col items-center py-8 text-center text-stone-500 dark:text-stone-400">
            <SearchIcon className="h-12 w-12 text-stone-300 dark:text-stone-600 mb-4" />
            <p>
              No results for{" "}
              <span className="font-medium">&quot;{searchedInput}&quot;</span>
            </p>
            <p className="text-sm mt-1">Try adjusting your search term</p>
          </div>
        )}
        {filteredResults.length > 0 && (
          <div
            className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-stone-200 dark:scrollbar-thumb-stone-800 scrollbar-track-transparent"
            ref={containerRef}
          >
            <div className="flex flex-col items-start overflow-y-auto sm:px-2 px-1 pb-4">
              {filteredResults.map((item, index) => {
                const level = (item.href.split("/").slice(1).length -
                  1) as keyof typeof paddingMap;
                const paddingClass = paddingMap[level];
                return (
                  <div
                    key={item.href}
                    id={`search-item-${index}`}
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    onClick={() => handleItemClick(item.href)}
                    className={cn(
                      "group w-full px-3 rounded-lg transition-colors cursor-pointer",
                      paddingClass,
                      index === selectedIndex
                        ? "bg-stone-100 dark:bg-stone-800"
                        : "hover:bg-stone-50 dark:hover:bg-stone-800/50"
                    )}
                    role="option"
                    aria-selected={index === selectedIndex}
                  >
                    <div
                      className={cn(
                        "flex items-center w-fit h-full py-3 gap-1.5 px-2",
                        level > 1 &&
                          "border-l border-stone-200 dark:border-stone-700 pl-4"
                      )}
                    >
                      <div className="mr-2 flex-shrink-0">
                        {getItemIcon(item.href, item.title)}
                      </div>
                      <span className="text-sm font-medium truncate text-stone-700 dark:text-stone-300 group-hover:text-stone-900 dark:group-hover:text-stone-100">
                        {item.title}
                      </span>
                      {index === selectedIndex && (
                        <div className="ml-auto flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

const paddingMap = {
  1: "pl-2",
  2: "pl-4",
  3: "pl-10",
} as const;
