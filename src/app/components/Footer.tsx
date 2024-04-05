import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-center w-full h-16 border-t">
        <Link
          className="flex items-center justify-center"
          href="https://x.com/abhaysinghr1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow on{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
        </Link>
      </footer>
      <p className="flex items-center justify-center pb-4 text-sm">
        &copy; 2024 Business Wish
      </p>
    </>
  );
};

export default Footer;
