"use client";
import React from "react";
import { usePathname } from "next/navigation"; // Adjust import based on Next.js version

// Import documentation components
import {
  ButtonDocs,
  AlertDocs,
  AccordionDocs,
  AvatarDocs,
  BadgeDocs,
  BannerDocs,
  BentoDocs,
  BlogListDocs,
} from "../../../doc/index";

import {
  ComponentData,
  componentsData,
} from "../../../../data/newcomponentData";

// Define a type for component keys
type ComponentKey =
  | "Button"
  | "Alert"
  | "Accordion"
  | "Avatar"
  | "Badge"
  | "Banner"
  | "Bento"
  | "BlogList";

// Mapping between component titles and their corresponding documentation components
const components: Record<ComponentKey, React.FC> = {
  Button: ButtonDocs,
  Alert: AlertDocs,
  Accordion: AccordionDocs,
  Avatar: AvatarDocs,
  Badge: BadgeDocs,
  Banner: BannerDocs,
  Bento: BentoDocs,
  BlogList: BlogListDocs,
};

// Main ComponentPage function
export default function ComponentPage() {
  const pathname = usePathname(); // Get the current pathname
  const componentData: ComponentData | undefined = componentsData.find(
    (data) => data.href === pathname
  ); // Find component data based on the current pathname

  // Determine which component to render based on componentData
  const Component = componentData
    ? components[componentData.title as ComponentKey]
    : null;

  return <div className=" ">{Component ? <Component /> : null}</div>;
}
