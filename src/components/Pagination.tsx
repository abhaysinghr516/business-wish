export const BasicPagination: React.FC = () => (
  <nav className="flex justify-center">
    <ul className="flex list-none">
      <li className="mx-1">
        <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
          Previous
        </button>
      </li>
      <li className="mx-1">
        <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
          1
        </button>
      </li>
      <li className="mx-1">
        <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
          2
        </button>
      </li>
      <li className="mx-1">
        <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
          3
        </button>
      </li>
      <li className="mx-1">
        <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
          Next
        </button>
      </li>
    </ul>
  </nav>
);

export const PaginationwithActiveState: React.FC = () => (
  <nav className="flex justify-center">
    <ul className="flex list-none">
      <li className="mx-1">
        <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
          Previous
        </button>
      </li>
      <li className="mx-1">
        <button className="px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">
          1
        </button>
      </li>
      <li className="mx-1">
        <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
          2
        </button>
      </li>
      <li className="mx-1">
        <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
          3
        </button>
      </li>
      <li className="mx-1">
        <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
          Next
        </button>
      </li>
    </ul>
  </nav>
);

export const PaginationwithIcons: React.FC = () => (
  <nav className="flex justify-center">
    <ul className="flex list-none">
      <li className="mx-1">
        <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200 flex items-center">
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Previous
        </button>
      </li>
      <li className="mx-1">
        <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
          1
        </button>
      </li>
      <li className="mx-1">
        <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
          2
        </button>
      </li>
      <li className="mx-1">
        <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
          3
        </button>
      </li>
      <li className="mx-1">
        <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200 flex items-center">
          Next
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </li>
    </ul>
  </nav>
);

export const PaginationwithInputField: React.FC = () => (
  <nav className="flex justify-center">
    <ul className="flex list-none items-center">
      <li className="mx-1">
        <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
          Previous
        </button>
      </li>
      <li className="mx-1">
        <input
          type="text"
          className="px-4 py-2 border rounded w-12 text-center outline-purple-500"
          placeholder="1"
        />
      </li>
      <li className="mx-1">
        <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded hover:bg-gray-200">
          Next
        </button>
      </li>
    </ul>
  </nav>
);

export const PaginationwithDots: React.FC = () => (
  <nav className="flex justify-center">
    <ul className="flex list-none">
      <li className="mx-1">
        <button className="rounded bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">
          Previous
        </button>
      </li>
      <li className="mx-1">
        <button className="rounded bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">
          1
        </button>
      </li>
      <li className="mx-1">
        <button className="rounded bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">
          2
        </button>
      </li>
      <li className="mx-1">
        <button className="rounded bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">
          ...
        </button>
      </li>
      <li className="mx-1">
        <button className="rounded bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">
          9
        </button>
      </li>
      <li className="mx-1">
        <button className="rounded bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">
          10
        </button>
      </li>
      <li className="mx-1">
        <button className="rounded bg-gray-100 px-4 py-2 text-gray-700 hover:bg-gray-200">
          Next
        </button>
      </li>
    </ul>
  </nav>
);
