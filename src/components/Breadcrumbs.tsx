export const BasicBreadcrumb: React.FC = () => (
  <nav>
    <ol className="flex items-center space-x-2 list-none">
      <li>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Home
        </a>
      </li>
      <li>
        <span className="text-gray-500">/</span>
      </li>
      <li>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Products
        </a>
      </li>
      <li>
        <span className="text-gray-500">/</span>
      </li>
      <li>
        <span className="text-gray-500">Product Details</span>
      </li>
    </ol>
  </nav>
);

export const BreadcrumbwithIcons: React.FC = () => (
  <nav>
    <ol className="flex items-center space-x-2 list-none">
      <li>
        <a
          href="#"
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Home
        </a>
      </li>
      <li>
        <span className="text-gray-500">/</span>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Products
        </a>
      </li>
      <li>
        <span className="text-gray-500">/</span>
      </li>
      <li>
        <span className="text-gray-500">Product Details</span>
      </li>
    </ol>
  </nav>
);

export const BreadcrumbwithSeparators: React.FC = () => (
  <nav>
    <ol className="flex items-center list-none">
      <li>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Home
        </a>
      </li>
      <li className="mx-2">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </li>
      <li>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          Products
        </a>
      </li>
      <li className="mx-2">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </li>
      <li>
        <span className="text-gray-500">Product Details</span>
      </li>
    </ol>
  </nav>
);
