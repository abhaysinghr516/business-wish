import React from "react";
import type { MDXComponents } from "mdx/types";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: (props) => <pre {...props} />,
    code: ({ children, className }) => {
      const language = className
        ? className.replace("language-", "")
        : "plaintext";

      const textToCopy = React.Children.toArray(children)
        .map((child) => {
          if (typeof child === "string") {
            return child;
          } else if (React.isValidElement(child) && child.props.children) {
            return React.Children.toArray(child.props.children).join("");
          }
          return "";
        })
        .join("");

      const childrenForSyntaxHighlighter = React.Children.toArray(children).map(
        (child) => {
          if (typeof child === "string") {
            return child;
          } else if (React.isValidElement(child) && child.props.children) {
            return React.Children.toArray(child.props.children).join("");
          }
          return "";
        }
      );

      const handleCopySuccess = () => {
        toast.success("Code copied successfully!");
      };

      return (
        <div className="custom-code-block">
          <CopyToClipboard text={textToCopy} onCopy={handleCopySuccess}>
            <button
              className="copy-button"
              style={{
                color: "black",
                background: "white",
                padding: "5px",
                borderRadius: "5px",
                width: "100px",
                height: "40px",
                marginTop: "20px",
              }}
            >
              Copy
            </button>
          </CopyToClipboard>
          <SyntaxHighlighter language={language} style={dracula}>
            {childrenForSyntaxHighlighter}
          </SyntaxHighlighter>
          <ToastContainer />
        </div>
      );
    },
  };
}
