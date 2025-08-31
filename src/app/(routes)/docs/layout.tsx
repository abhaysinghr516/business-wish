import { Leftbar } from "@/app/components/leftbar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto w-[88vw] h-auto">
      <div className="flex items-start gap-14">
        <aside
          className="flex-[1]"
          aria-label="Documentation navigation"
          role="navigation"
        >
          <Leftbar key="leftbar" />
        </aside>
        <main
          className="flex-[4] min-w-0"
          role="main"
          aria-label="Documentation content"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
