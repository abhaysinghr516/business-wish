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
          <div className="relative flex-1 max-w-md cursor-pointer">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-500 dark:text-stone-400" />
            <Input
              className="md:w-full rounded-md dark:bg-stone-950/95 bg-stone-50 border h-9 pl-10 pr-0 sm:pr-4 text-sm shadow-sm overflow-ellipsis"
              placeholder="Search Components..."
              type="search"
            />
            <div className="sm:flex hidden absolute top-1/2 -translate-y-1/2 right-2 text-xs font-medium font-mono items-center gap-0.5 dark:bg-stone-900 bg-stone-200/65 p-1 rounded-sm">
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
        <DialogContent className="p-0 max-w-[700px] sm:top-[38%] top-[45%] !rounded-md">
          <DialogTitle className="sr-only">Search</DialogTitle>
          <DialogHeader>
            <input
              ref={inputRef}
              value={searchedInput}
              onChange={(e) => setSearchedInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type something to search..."
              className="h-14 px-6 bg-transparent border-b text-[14px] outline-none"
            />
          </DialogHeader>
          {filteredResults.length == 0 && searchedInput && (
            <p className="text-muted-foreground mx-auto mt-2 text-sm">
              No results found for{" "}
              <span className="text-primary">{`"${searchedInput}"`}</span>
            </p>
          )}
          <div className="max-h-[350px] overflow-y-auto" ref={containerRef}>
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
                      "dark:hover:bg-stone-900 hover:bg-stone-100 w-full px-3 rounded-sm text-sm flex items-center gap-2.5 cursor-pointer",
                      paddingClass,
                      index === selectedIndex &&
                        "bg-stone-100 dark:bg-stone-800"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center w-fit h-full py-3 gap-1.5 px-2",
                        level > 1 && "border-l pl-4"
                      )}
                    >
                      <FileIcon className="h-[1.1rem] w-[1.1rem] mr-1" />{" "}
                      {item.title}
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
