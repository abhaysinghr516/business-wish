"use client";
import React from "react";
import { usePathname } from "next/navigation"; // Adjust import based on Next.js version

// Import documentation components
import { ButtonDocs, AlertDocs } from "../../../doc/index";

// Assuming this data structure exists
import {
  ComponentData,
  componentsData,
} from "../../../../data/newcomponentData";

// Import application components
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";

// Define a type for component keys
type ComponentKey = "Button" | "Alert";

// Mapping between component titles and their corresponding documentation components
const components: Record<ComponentKey, React.FC> = {
  Button: ButtonDocs,
  Alert: AlertDocs,
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
