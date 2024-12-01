"use client";

import { CommandIcon, FileIcon, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useMemo, useState, useRef } from "react";
import { advanceSearch, cn } from "@/app/lib/utils";
import { useRouter } from "next/navigation";

export default function Search() {
  const [searchedInput, setSearchedInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMac, setIsMac] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf("MAC") >= 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if ((isMac ? event.metaKey : event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setIsOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMac]);

  const filteredResults = useMemo(
    () => advanceSearch(searchedInput.trim()),
    [searchedInput]
  );

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prevIndex) =>
        prevIndex === filteredResults.length - 1 ? 0 : prevIndex + 1
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prevIndex) =>
        prevIndex === 0 ? filteredResults.length - 1 : prevIndex - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredResults.length > 0) {
        handleItemClick(filteredResults[selectedIndex].href);
      }
    }
  };

  const handleItemClick = (href: string) => {
    setIsOpen(false);
    router.push(`/docs${href}`);
  };

  return (
    <div>
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
        <DialogTrigger asChild>
          <div className="relative flex-1 max-w-md cursor-pointer group">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500 dark:text-stone-400 transition-colors group-hover:text-stone-700 dark:group-hover:text-stone-200" />
            <Input
              className="md:w-full rounded-xl dark:bg-stone-900/90 bg-stone-50/90 border-stone-200 dark:border-stone-800 h-10 pl-10 pr-0 sm:pr-4 text-sm shadow-sm transition-all duration-200 hover:border-stone-300 dark:hover:border-stone-700 focus:ring-2 focus:ring-stone-200 dark:focus:ring-stone-800"
              placeholder="Search Components..."
              type="search"
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
        <DialogContent className="p-0 max-w-2xl sm:top-[38%] top-[45%] rounded-2xl border dark:border-stone-800 shadow-2xl dark:shadow-stone-950/50 dark:bg-stone-900/90 bg-stone-50/90">
          <DialogTitle className="sr-only">Search</DialogTitle>
          <DialogHeader>
            <div className="relative">
              <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-500 dark:text-stone-400" />
              <input
                ref={inputRef}
                value={searchedInput}
                onChange={(e) => setSearchedInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type something to search..."
                className="h-16 w-full pl-14 pr-6 bg-transparent border-b border-stone-200 dark:border-stone-800 text-base outline-none focus:outline-none transition-colors placeholder:text-stone-500 dark:placeholder:text-stone-400 focus:border-stone-300 dark:focus:border-stone-700"
              />
            </div>
          </DialogHeader>
          {filteredResults.length === 0 && searchedInput && (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <p className="text-stone-500 dark:text-stone-400 text-sm">
                No results found for{" "}
                <span className="text-stone-900 dark:text-stone-100 font-medium">{`"${searchedInput}"`}</span>
              </p>
              <p className="text-stone-400 dark:text-stone-500 text-sm mt-1">
                Try adjusting your search term
              </p>
            </div>
          )}
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
                    ref={(el) => {
                      itemRefs.current[index] = el;
                    }}
                    onClick={() => handleItemClick(item.href)}
                    className={cn(
                      "group w-full px-3 rounded-lg transition-colors duration-150",
                      paddingClass,
                      index === selectedIndex
                        ? "bg-stone-100 dark:bg-stone-800"
                        : "hover:bg-stone-50 dark:hover:bg-stone-800/50"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center w-fit h-full py-3 gap-1.5 px-2 transition-colors",
                        level > 1 &&
                          "border-l border-stone-200 dark:border-stone-700 pl-4"
                      )}
                    >
                      <FileIcon className="h-[1.1rem] w-[1.1rem] mr-1 text-stone-500 dark:text-stone-400 group-hover:text-stone-700 dark:group-hover:text-stone-200 transition-colors" />
                      <span className="text-sm text-stone-700 dark:text-stone-300 group-hover:text-stone-900 dark:group-hover:text-stone-100">
                        {item.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const paddingMap = {
  1: "pl-2",
  2: "pl-4",
  3: "pl-10",
} as const;
