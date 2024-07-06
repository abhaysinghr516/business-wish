import React, { useState } from "react";
import "../styles/responsive-preview.css";

interface PreviewProps {
  children: React.ReactNode;
}

const Preview: React.FC<PreviewProps> = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1rem",
        borderRadius: "0.5rem",
        overflow: "auto",
        margin: "20px auto",
      }}
      className="responsive-preview-container"
    >
      {children}
    </div>
  );
};

export default Preview;
