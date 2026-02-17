"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { trackComponentCopy } from "@/lib/analytics";

export default function Copy({ content }: { content: string }) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(content);
    setIsCopied(true);

    // Track the copy event — extract a meaningful name from the content
    const firstLine = content.split("\n")[0]?.trim() || "unknown";
    const componentName = firstLine.replace(/^(import|export|const|function)\s+/, "").slice(0, 50);
    trackComponentCopy(componentName);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={handleCopy}
      className="h-8 w-8 p-0 sm:h-9 sm:w-auto sm:px-3"
      aria-label={isCopied ? "Copied!" : "Copy code"}
    >
      {isCopied ? (
        <CheckIcon className="w-3 h-3" />
      ) : (
        <CopyIcon className="w-3 h-3" />
      )}
      <span className="sr-only sm:not-sr-only sm:ml-2 text-xs">
        {isCopied ? "Copied!" : "Copy"}
      </span>
    </Button>
  );
}

