"use client";
import { usePathname } from "next/navigation";
import {
  Error404Docs,
  AccordionDocs,
  AlertDocs,
  AvatarDocs,
  BadgeDocs,
  BannerDocs,
  BentoDocs,
  BlogListDocs,
  BottomNavigationDocs,
  BreadcrumbsDocs,
  ButtonDocs,
  CtaDocs,
  CardDocs,
  DividerDocs,
  DropdownDocs,
  FeaturesDocs,
  FooterDocs,
  HeroDocs,
  HeaderDocs,
  LoaderDocs,
  ModalDocs,
  PaginationDocs,
  SettingsDocs,
  SidebarDocs,
  SkeletonDocs,
  TabsDocs,
  TestimonialsDocs,
} from "../../../docs/index";

// src/components/ComponentPage.tsx
import { ComponentData, componentsData } from "../../../../data/componentsData";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";

type ComponentKey =
  | "Error404"
  | "Accordion"
  | "Alert"
  | "Avatar"
  | "Badge"
  | "Banner"
  | "Bento"
  | "BlogList"
  | "BottomNavigation"
  | "Breadcrumbs"
  | "Button"
  | "CTA"
  | "Card"
  | "Divider"
  | "Dropdown"
  | "Features"
  | "Footer"
  | "Hero"
  | "Header"
  | "Loader"
  | "Modal"
  | "Pagination"
  | "Settings"
  | "Sidebar"
  | "Skeleton"
  | "Tabs"
  | "Testimonials";

const components = {
  Error404: Error404Docs,
  Accordion: AccordionDocs,
  Alert: AlertDocs,
  Avatar: AvatarDocs,
  Badge: BadgeDocs,
  Banner: BannerDocs,
  Bento: BentoDocs,
  BlogList: BlogListDocs,
  BottomNavigation: BottomNavigationDocs,
  Breadcrumbs: BreadcrumbsDocs,
  Button: ButtonDocs,
  CTA: CtaDocs,
  Card: CardDocs,
  Divider: DividerDocs,
  Dropdown: DropdownDocs,
  Features: FeaturesDocs,
  Footer: FooterDocs,
  Hero: HeroDocs,
  Header: HeaderDocs,
  Loader: LoaderDocs,
  Modal: ModalDocs,
  Pagination: PaginationDocs,
  Settings: SettingsDocs,
  Sidebar: SidebarDocs,
  Skeleton: SkeletonDocs,
  Tabs: TabsDocs,
  Testimonials: TestimonialsDocs,
};

export default function ComponentPage() {
  const pathname = usePathname();
  const componentData: ComponentData | undefined = componentsData.find(
    (data) => data.href === pathname
  );
  const Component = componentData
    ? components[componentData.title as ComponentKey]
    : null;

  return <div className=" ">{Component ? <Component /> : null}</div>;
}
