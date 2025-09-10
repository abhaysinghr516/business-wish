"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export function ConditionalFooter() {
  const pathname = usePathname();

  // Don't show footer on docs pages
  if (pathname.startsWith("/docs")) {
    return null;
  }

  return <Footer />;
}
