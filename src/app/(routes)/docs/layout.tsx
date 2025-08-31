import { Leftbar } from "@/app/components/leftbar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto w-full max-w-7xl px-2 sm:px-4 lg:px-8 h-auto">
      <div className="flex items-start gap-6 lg:gap-14">
        {/* Desktop Sidebar - Hidden on mobile/tablet */}
        <aside
          className="hidden lg:flex flex-[1] max-w-[280px]"
          aria-label="Documentation navigation"
          role="navigation"
        >
          <Leftbar key="leftbar" />
        </aside>

        {/* Main content - Full width on mobile */}
        <main
          className="flex-1 lg:flex-[4] min-w-0 w-full"
          role="main"
          aria-label="Documentation content"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
