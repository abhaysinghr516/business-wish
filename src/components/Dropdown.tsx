"use client";
import { ChevronDown, LogOut, Mail, Search, Settings } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const SimpleDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Choose an option");

  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selected}
            <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options.map((option) => (
                <a
                  key={option}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const DropdownwithIcons: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: "Messages", icon: Mail },
    { label: "Settings", icon: Settings },
    { label: "Logout", icon: LogOut },
  ];

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => setIsOpen(!isOpen)}
          >
            Options
            <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {options.map((option) => (
                <a
                  key={option.label}
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    // Handle option selection here
                  }}
                >
                  <option.icon
                    className="mr-3 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  {option.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const SearchableDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Kiwi",
    "Lemon",
  ];

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative inline-block text-left" ref={dropdownRef}>
        <div>
          <button
            type="button"
            className="inline-flex justify-between w-64 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selected || "Select a fruit"}
            <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white">
            <div className="p-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border rounded-md text-sm"
                  placeholder="Search fruits..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="max-h-60 overflow-y-auto">
              {filteredOptions.map((option) => (
                <a
                  key={option}
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelected(option);
                    setIsOpen(false);
                  }}
                >
                  {option}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const DropdownwithHeaders: React.FC = () => (
  <div className=" bg-gray-100 text-base pt-2 h-56 w-full flex justify-center">
    <div className="relative inline-block">
      <button className="inline-flex items-center rounded bg-gray-800 px-4 py-2 font-semibold text-white hover:bg-gray-700">
        <span>Dropdown</span>
        <svg className="ml-2 h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>
      <div className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg">
        <div className="border-b bg-gray-100 px-4 py-2">
          <span className="font-semibold text-gray-800">Header</span>
        </div>
        <div className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Option 1
        </div>
        <div className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Option 2
        </div>
      </div>
    </div>
  </div>
);

export const GroupedOptionsDropdown: React.FC = () => (
  <div className=" bg-gray-100 text-base pt-2 h-96 w-full flex justify-center">
    <div className="relative inline-block">
      <button className="inline-flex items-center rounded bg-orange-500 px-4 py-2 font-semibold text-white hover:bg-orange-600">
        <span>Dropdown</span>
        <svg className="ml-2 h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>
      <div className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg">
        <div className="px-4 py-2">
          <span className="text-xs font-semibold uppercase text-gray-800">
            Group 1
          </span>
        </div>
        <div className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Option 1
        </div>
        <div className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Option 2
        </div>
        <div className="px-4 py-2">
          <span className="text-xs font-semibold uppercase text-gray-800">
            Group 2
          </span>
        </div>
        <div className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Option 3
        </div>
        <div className="px-4 py-2">
          <span className="text-xs font-semibold uppercase text-gray-800">
            Group 3
          </span>
        </div>
        <div className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Option 4
        </div>
      </div>
    </div>
  </div>
);
