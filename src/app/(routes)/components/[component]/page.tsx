"use client";
import { usePathname } from "next/navigation";
import {
  AccordionDocs,
  AvatarDocs,
  BadgeDocs,
  BannerDocs,
} from "../../../docs/index";

// src/components/ComponentPage.tsx
import { ComponentData, componentsData } from "../../../../data/componentsData";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";

type ComponentKey = "Accordion" | "Avatar" | "Badge" | "Banner";

const components = {
  Accordion: AccordionDocs,
  Avatar: AvatarDocs,
  Badge: BadgeDocs,
  Banner: BannerDocs,
};

export default function ComponentPage() {
  const pathname = usePathname();
  const componentData: ComponentData | undefined = componentsData.find(
    (data) => data.href === pathname
  );
  const Component = componentData
    ? components[componentData.title as ComponentKey]
    : null;

  return (
    <>
      <main className="relative max-w-screen-2xl mx-auto">
        <div className="fixed z-50 top-0 right-0 w-full bg-white lg:border-b">
          <Navbar />
        </div>
        <div className="lg:flex h-screen">
          <Sidebar />
          <div className="flex-1 overflow-auto  lg:mt-16">
            <div className="flex justify-center mt-10 mb-20">
              {Component ? <Component /> : null}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
