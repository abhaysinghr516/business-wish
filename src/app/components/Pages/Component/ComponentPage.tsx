"use client";

import { usePathname } from "next/navigation";
import { ComponentData, componentsData } from "../../../../data/componentsData";
import { components } from "./components";

type ComponentKey = keyof typeof components;

export default function ComponentPage() {
  const pathname = usePathname();
  const componentData: ComponentData | undefined = componentsData.find(
    (data) => data.href === pathname
  );
  const Component = componentData
    ? components[componentData.title as ComponentKey]
    : null;

  return <div className="">{Component ? <Component /> : null}</div>;
}
