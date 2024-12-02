"use client";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { useState } from "react";

const baseButtonStyles = `
  relative overflow-hidden
  disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none
`;

const rippleEffect = (event: React.MouseEvent<HTMLButtonElement>) => {
  const button = event.currentTarget;
  const ripple = document.createElement("span");
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;

  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    top: ${y}px;
    left: ${x}px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    pointer-events: none;
  `;

  button.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
};

export const BasicPagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  return (
    <nav className="flex text-base justify-center">
      <ul className="flex list-none items-center gap-2">
        <li>
          <button
            className={`${baseButtonStyles} px-4 py-2 rounded-lg bg-white border border-gray-200 
              text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 
              dark:text-gray-300 dark:hover:bg-gray-700`}
            onClick={(e) => {
              rippleEffect(e);
              setCurrentPage((p) => Math.max(1, p - 1));
            }}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {[1, 2, 3].map((page) => (
          <li key={page}>
            <button
              className={`${baseButtonStyles} w-10 h-10 rounded-lg font-medium
                ${
                  currentPage === page
                    ? "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              onClick={(e) => {
                rippleEffect(e);
                setCurrentPage(page);
              }}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            className={`${baseButtonStyles} px-4 py-2 rounded-lg bg-white border border-gray-200 
              text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 
              dark:text-gray-300 dark:hover:bg-gray-700`}
            onClick={(e) => {
              rippleEffect(e);
              setCurrentPage((p) => Math.min(totalPages, p + 1));
            }}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export const PaginationwithIcons: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  return (
    <nav className="flex text-base justify-center">
      <ul className="flex list-none items-center gap-2">
        <li>
          <button
            className={`${baseButtonStyles} px-4 py-2 rounded-lg bg-white border border-gray-200 
              text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 
              dark:text-gray-300 dark:hover:bg-gray-700 flex items-center gap-2`}
            onClick={(e) => {
              rippleEffect(e);
              setCurrentPage((p) => Math.max(1, p - 1));
            }}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
        </li>
        {[1, 2, 3].map((page) => (
          <li key={page}>
            <button
              className={`${baseButtonStyles} w-10 h-10 rounded-lg font-medium
                ${
                  currentPage === page
                    ? "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              onClick={(e) => {
                rippleEffect(e);
                setCurrentPage(page);
              }}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            className={`${baseButtonStyles} px-4 py-2 rounded-lg bg-white border border-gray-200 
              text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 
              dark:text-gray-300 dark:hover:bg-gray-700 flex items-center gap-2`}
            onClick={(e) => {
              rippleEffect(e);
              setCurrentPage((p) => Math.min(totalPages, p + 1));
            }}
            disabled={currentPage === totalPages}
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export const PaginationwithInputField: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState("1");
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setInputValue(page.toString());
    }
  };

  return (
    <nav className="flex text-base justify-center">
      <ul className="flex list-none items-center gap-3">
        <li>
          <button
            className={`${baseButtonStyles} p-2 rounded-lg bg-white border border-gray-200 
              text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 
              dark:text-gray-300 dark:hover:bg-gray-700`}
            onClick={(e) => {
              rippleEffect(e);
              handlePageChange(1);
            }}
            disabled={currentPage === 1}
          >
            <ChevronsLeft className="w-4 h-4" />
          </button>
        </li>
        <li>
          <button
            className={`${baseButtonStyles} p-2 rounded-lg bg-white border border-gray-200 
              text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 
              dark:text-gray-300 dark:hover:bg-gray-700`}
            onClick={(e) => {
              rippleEffect(e);
              handlePageChange(currentPage - 1);
            }}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </li>
        <li className="flex items-center gap-2">
          <input
            type="text"
            className="w-16 px-3 py-2 rounded-lg border border-gray-200 text-center 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
            value={inputValue}
            onChange={(e) => {
              const value = e.target.value;
              setInputValue(value);
              const page = parseInt(value, 10);
              if (!isNaN(page) && page >= 1 && page <= totalPages) {
                handlePageChange(page);
              }
            }}
            onBlur={() => {
              const page = parseInt(inputValue, 10);
              if (isNaN(page) || page < 1 || page > totalPages) {
                setInputValue(currentPage.toString());
              }
            }}
          />
          <span className="text-gray-600 dark:text-gray-400">
            of {totalPages}
          </span>
        </li>
        <li>
          <button
            className={`${baseButtonStyles} p-2 rounded-lg bg-white border border-gray-200 
              text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 
              dark:text-gray-300 dark:hover:bg-gray-700`}
            onClick={(e) => {
              rippleEffect(e);
              handlePageChange(currentPage + 1);
            }}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </li>
        <li>
          <button
            className={`${baseButtonStyles} p-2 rounded-lg bg-white border border-gray-200 
              text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 
              dark:text-gray-300 dark:hover:bg-gray-700`}
            onClick={(e) => {
              rippleEffect(e);
              handlePageChange(totalPages);
            }}
            disabled={currentPage === totalPages}
          >
            <ChevronsRight className="w-4 h-4" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export const PaginationwithDots: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers.map((number, index) => (
      <li key={index}>
        <button
          className={`${baseButtonStyles} w-10 h-10 rounded-lg font-medium
            ${
              number === currentPage
                ? "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                : number === "..."
                ? "bg-transparent text-gray-400 hover:bg-transparent cursor-default"
                : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          onClick={(e) => {
            if (number !== "...") {
              rippleEffect(e);
              setCurrentPage(Number(number));
            }
          }}
          disabled={number === "..."}
        >
          {number}
        </button>
      </li>
    ));
  };

  return (
    <nav className="flex text-base justify-center">
      <ul className="flex list-none items-center gap-2">
        <li>
          <button
            className={`${baseButtonStyles} p-2 rounded-lg bg-white border border-gray-200 
              text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 
              dark:text-gray-300 dark:hover:bg-gray-700`}
            onClick={(e) => {
              rippleEffect(e);
              setCurrentPage((p) => Math.max(1, p - 1));
            }}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </li>
        {renderPageNumbers()}
        <li>
          <button
            className={`${baseButtonStyles} p-2 rounded-lg bg-white border border-gray-200 
              text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 
              dark:text-gray-300 dark:hover:bg-gray-700`}
            onClick={(e) => {
              rippleEffect(e);
              setCurrentPage((p) => Math.min(totalPages, p + 1));
            }}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </li>
      </ul>
    </nav>
  );
};
