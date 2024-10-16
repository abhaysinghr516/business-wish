"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const BasicPagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <nav className="flex text-base justify-center">
      <ul className="flex list-none">
        <li className="mx-1">
          <button
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {[1, 2, 3].map((page) => (
          <li key={page} className="mx-1">
            <button
              className={`px-4 py-2 rounded ${
                currentPage === page
                  ? "text-white bg-purple-600 hover:bg-purple-700"
                  : "text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li className="mx-1">
          <button
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
            onClick={() => handlePageChange(currentPage + 1)}
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

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <nav className="flex text-base justify-center">
      <ul className="flex list-none">
        <li className="mx-1">
          <button
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200 flex items-center dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </button>
        </li>
        {[1, 2, 3].map((page) => (
          <li key={page} className="mx-1">
            <button
              className={`px-4 py-2 rounded ${
                currentPage === page
                  ? "text-white bg-purple-600 hover:bg-purple-700"
                  : "text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        <li className="mx-1">
          <button
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200 flex items-center dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPage = parseInt(inputValue, 10);
    handlePageChange(newPage);
  };

  return (
    <nav className="flex text-base justify-center">
      <ul className="flex list-none items-center">
        <li className="mx-1">
          <button
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        <li className="mx-1">
          <form onSubmit={handleInputSubmit}>
            <input
              type="text"
              className="px-4 py-2 border rounded w-16 text-center outline-purple-500 dark:border-gray-600 dark:text-gray-300 dark:bg-gray-800"
              value={inputValue}
              onChange={handleInputChange}
            />
          </form>
        </li>
        <li className="mx-1">
          <span className="px-2 dark:text-gray-300">of {totalPages}</span>
        </li>
        <li className="mx-1">
          <button
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export const PaginationwithDots: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
      <li key={index} className="mx-1">
        <button
          className={`rounded px-4 py-2 ${
            number === currentPage
              ? "text-white bg-purple-600 hover:bg-purple-700"
              : "text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
          }`}
          onClick={() => number !== "..." && handlePageChange(Number(number))}
          disabled={number === "..."}
        >
          {number}
        </button>
      </li>
    ));
  };

  return (
    <nav className="flex text-base justify-center">
      <ul className="flex list-none">
        <li className="mx-1">
          <button
            className="rounded bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {renderPageNumbers()}
        <li className="mx-1">
          <button
            className="rounded bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};
