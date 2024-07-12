export const SimpleDropdown: React.FC = () => (
  <div className="bg-gray-100 text-base pt-2 h-56 w-full flex justify-center">
    <div className="relative inline-block">
      <button className="inline-flex items-center rounded bg-gray-200 px-4 py-2 font-semibold text-gray-700 hover:bg-gray-300">
        <span>Dropdown</span>
        <svg className="ml-2 h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>
      <div className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white py-2 shadow-lg">
        <div className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Option 1
        </div>
        <div className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Option 2
        </div>
        <div className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Option 3
        </div>
      </div>
    </div>
  </div>
);

export const DropdownwithIcons: React.FC = () => (
  <div className=" bg-gray-100 text-base pt-2 h-56 w-full flex justify-center">
    <div className="relative inline-block">
      <button className="inline-flex items-center rounded bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700">
        <span>Dropdown</span>
        <svg className="ml-2 h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>
      <div className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white py-2 shadow-lg">
        <div className="cursor-pointer flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="mr-5 h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <span>Home</span>
        </div>
        <div className="cursor-pointer flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="mr-5 h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
          <span>Help</span>
        </div>
        <div className="cursor-pointer flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="mr-5 h-5 w-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>
          <span>Sign Out</span>
        </div>
      </div>
    </div>
  </div>
);

export const DropdownwithDividers: React.FC = () => (
  <div className=" bg-gray-100 text-base pt-2 h-56 w-full flex justify-center">
    <div className="relative inline-block">
      <button className="inline-flex items-center rounded bg-green-500 px-4 py-2 font-semibold text-white hover:bg-green-600">
        <span>Dropdown</span>
        <svg className="ml-2 h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>
      <div className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white py-2 shadow-lg">
        <div className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Option 1
        </div>
        <div className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Option 2
        </div>
        <div className="border-b border-gray-200"></div>
        <div className="cursor-pointer block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Option 3
        </div>
      </div>
    </div>
  </div>
);

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
