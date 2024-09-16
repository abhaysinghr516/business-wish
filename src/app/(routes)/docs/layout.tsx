import { Leftbar } from "@/app/components/leftbar";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-14">
      <Leftbar key="leftbar" />
      <div className="flex-[4]">{children}</div>{" "}
    </div>
  );
}
