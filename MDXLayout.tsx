import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "./mdx-components";

const components = useMDXComponents({});

interface MDXLayoutProps {
  children: React.ReactNode;
}

const MDXLayout: React.FC<MDXLayoutProps> = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <div className="custom-mdx-layout">{children}</div>
    </MDXProvider>
  );
};

export default MDXLayout;
