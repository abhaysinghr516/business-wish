import React, { useState } from "react";
import "../styles/responsive-preview.css";

interface ResponsivePreviewProps {
  children: React.ReactNode;
}

const screenSizes = {
  mobile: { width: "375px" },
  desktop: { width: "1024px" },
};

const ResponsivePreview: React.FC<ResponsivePreviewProps> = ({ children }) => {
  const [screen, setScreen] = useState<"mobile" | "desktop">("desktop");

  const handleScreenChange = (size: "mobile" | "desktop") => {
    setScreen(size);
  };

  const { width } = screenSizes[screen];

  return (
    <div>
      <div className=" justify-center mb-4 hidden md:flex">
        <button
          className={`rounded-l-lg border px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 ${
            screen === "mobile" ? "bg-blue-500 text-white" : "bg-white"
          }`}
          onClick={() => handleScreenChange("mobile")}
        >
          Mobile
        </button>
        <button
          className={`rounded-r-md border px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 ${
            screen === "desktop" ? "bg-blue-500 text-white" : "bg-white"
          }`}
          onClick={() => handleScreenChange("desktop")}
        >
          Desktop
        </button>
      </div>
      <div
        style={{
          width,
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
    </div>
  );
};

export default ResponsivePreview;
