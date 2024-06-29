import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import TOC from "./TOC";

interface DocLayoutProps {
  children: ReactNode;
}

const DocLayout: React.FC<DocLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      <div className="fixed z-50 top-0 right-0 w-full lg:border-b">
        <Navbar />
      </div>
      <div className="flex h-full w-full ">
        <Sidebar />
        <main className="md: overflow-y-auto flex-1">
          <div className="prose prose-2xl p-4 md:p-8 py-16">{children}</div>
        </main>
        <TOC />
      </div>
    </div>
  );
};

export default DocLayout;
