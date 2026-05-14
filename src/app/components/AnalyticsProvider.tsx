"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initClarity, tagClaritySession, trackDocumentationView, trackMotionComponentView } from "@/lib/analytics";

export default function AnalyticsProvider() {
    const pathname = usePathname();

    // Initialize Clarity once on mount
    useEffect(() => {
        initClarity();
    }, []);

    // Track page-level events based on route
    useEffect(() => {
        if (!pathname) return;

        // Tag Clarity with current section
        if (pathname.startsWith("/docs/motion/")) {
            const componentName = pathname.split("/").pop() || "";
            trackMotionComponentView(componentName);
            tagClaritySession("section", "motion");
        } else if (pathname.startsWith("/docs/")) {
            const componentName = pathname.split("/").pop() || "";
            trackDocumentationView(pathname, componentName);
            tagClaritySession("section", "docs");
        } else {
            tagClaritySession("section", "main");
        }
    }, [pathname]);

    return null;
}
