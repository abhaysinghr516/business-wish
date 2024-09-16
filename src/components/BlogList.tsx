import { Calendar } from "lucide-react";

export const BasicBlogList: React.FC = () => (
  <div className="flex flex-wrap text-base gap-2 justify-center">
    {/* Blog Card 1  */}
    <div className="m-4 mx-auto max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
      <div className="p-4">
        <div className="text-lg font-semibold text-gray-800">
          Title of the Blog Post
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="flex items-baseline justify-between">
          <div className="text-gray-500 text-sm">9 aug 3030</div>
          <div className="text-sm cursor-pointer mt-2 block hover:underline">
            Read more
          </div>
        </div>
      </div>
    </div>

    {/* Blog Card 2  */}
    <div className="m-4 mx-auto max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
      <div className="p-4">
        <div className="text-lg font-semibold text-gray-800">
          Title of the Blog Post
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="flex items-baseline justify-between">
          <div className="text-gray-500 text-sm">9 aug 3030</div>
          <div className="text-sm cursor-pointer mt-2 block hover:underline">
            Read more
          </div>
        </div>
      </div>
    </div>

    {/* Add more blog cards as needed  */}
  </div>
);

export const MinimalCardBlogList: React.FC = () => (
  <div className="flex flex-wrap gap-2 justify-center">
    {/* Blog Card 1  */}
    <div className="mx-auto max-w-xs overflow-hidden rounded-lg bg-white shadow-md m-4">
      <img
        className="h-32 m-0 w-full object-cover object-center"
        src="https://source.unsplash.com/random"
        alt="Blog Image"
      />
      <div className="p-4">
        <div className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
          Featured
        </div>
        <div className="cursor-pointer text-lg font-semibold text-gray-800">
          Title of the Blog Post
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>

    {/* Blog Card 2  */}
    <div className="mx-auto max-w-xs overflow-hidden rounded-lg bg-white shadow-md m-4">
      <img
        className="h-32 m-0 w-full object-cover object-center"
        src="https://source.unsplash.com/random"
        alt="Blog Image"
      />
      <div className="p-4">
        <div className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
          Featured
        </div>
        <div className="cursor-pointer text-lg font-semibold text-gray-800">
          Title of the Blog Post
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>

    {/* Add more blog cards as needed  */}
  </div>
);

export const HorizontalCardBlogList: React.FC = () => (
  <div className="flex flex-wrap justify-center">
    {/* Blog Card 1  */}
    <div className="mx-auto max-w-md overflow-hidden bg-white shadow-md m-4">
      <div className="flex">
        <img
          className="h-36 m-0 w-64 object-cover object-center"
          src="https://source.unsplash.com/random"
          alt="Blog Image"
        />
        <div className="p-4">
          <div className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
            Featured
          </div>
          <div className="cursor-pointer text-lg font-semibold text-gray-800">
            Title of the Blog Post
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>

    {/* Blog Card 2  */}
    <div className="mx-auto max-w-md overflow-hidden bg-white shadow-md m-4">
      <div className="flex">
        <img
          className="h-36 m-0 w-64 object-cover object-center"
          src="https://source.unsplash.com/random"
          alt="Blog Image"
        />
        <div className="p-4">
          <div className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
            Featured
          </div>
          <div className="cursor-pointer text-lg font-semibold text-gray-800">
            Title of the Blog Post
          </div>
          <div className="mt-2 text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
      </div>
    </div>

    {/* Add more blog cards as needed  */}
  </div>
);

export const ListLayoutBlogList: React.FC = () => (
  <div className="flex flex-wrap justify-center">
    {/* Blog Card 1  */}
    <div className="m-4 mx-auto max-w-lg">
      <div className="border-b border-gray-200 py-4">
        <div className="cursor-pointer text-lg font-semibold text-gray-800">
          Title of the Blog Post
        </div>
        <div className="mt-1 text-sm text-gray-600">Technlogy • 5 min read</div>
        <div className="mt-2 text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="text-sm cursor-pointer mt-2 block">Read more →</div>
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <Calendar className="h-4 w-4" /> <span> May 25 2025 </span>
        </div>
      </div>
    </div>

    {/* Blog Card 2  */}
    <div className="m-4 mx-auto max-w-lg">
      <div className="border-b border-gray-200 py-4">
        <div className="cursor-pointer text-lg font-semibold text-gray-800">
          Title of the Blog Post
        </div>
        <div className="mt-1 text-sm text-gray-600">Technlogy • 5 min read</div>
        <div className="mt-2 text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="text-sm cursor-pointer mt-2 block">Read more →</div>
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <Calendar className="h-4 w-4" /> <span> May 25 2025 </span>
        </div>
      </div>
    </div>

    {/* Add more blog cards as needed  */}
  </div>
);

export const CardwithAuthorandTagsBlogList: React.FC = () => (
  <div className="flex flex-wrap justify-center">
    {/* Blog Card 1  */}
    <div className="m-4 mx-auto max-w-md overflow-hidden bg-white shadow-md">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-gray-600">Author Name</div>
          <div className="text-sm font-semibold text-gray-600">
            Tags: <span className="text-indigo-500">Technology</span>,{" "}
            <span className="text-indigo-500">Programming</span>
          </div>
        </div>
        <div className="cursor-pointer mt-2 text-lg font-semibold text-gray-800">
          Title of the Blog Post
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="text-sm cursor-pointer mt-2 block text-indigo-500 hover:underline">
          Read more
        </div>
      </div>
    </div>

    {/* Blog Card 2  */}
    <div className="m-4 mx-auto max-w-md overflow-hidden bg-white shadow-md">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold text-gray-600">Author Name</div>
          <div className="text-sm font-semibold text-gray-600">
            Tags: <span className="text-indigo-500">Technology</span>,{" "}
            <span className="text-indigo-500">Programming</span>
          </div>
        </div>
        <div className="cursor-pointer mt-2 text-lg font-semibold text-gray-800">
          Title of the Blog Post
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="text-sm cursor-pointer mt-2 block text-indigo-500 hover:underline">
          Read more
        </div>
      </div>
    </div>

    {/* Add more blog cards as needed  */}
  </div>
);

export const TimelineLayoutBlogList: React.FC = () => (
  // <div className="flex flex-wrap justify-center">
  //   {/* Blog Card 1  */}
  //   <div className="m-4 mx-auto max-w-md">
  //     <div className="border-l-4 border-indigo-500 pl-4">
  //       <div className="cursor-pointer text-lg font-semibold text-gray-800">
  //         Title of the Blog Post
  //       </div>
  //       <div className="mt-1 text-sm text-gray-600">
  //         Published on <span className="font-semibold">April 1, 2024</span>
  //       </div>
  //       <div className="mt-2 text-sm text-gray-600">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua.
  //       </div>
  //       <div className="text-sm cursor-pointer mt-2 block text-indigo-500 hover:underline">
  //         Read more
  //       </div>
  //     </div>
  //   </div>

  //   {/* Blog Card 2  */}
  //   <div className="m-4 mx-auto max-w-md">
  //     <div className="border-l-4 border-indigo-500 pl-4">
  //       <div className="cursor-pointer text-lg font-semibold text-gray-800">
  //         Title of the Blog Post
  //       </div>
  //       <div className="mt-1 text-sm text-gray-600">
  //         Published on <span className="font-semibold">April 1, 2024</span>
  //       </div>
  //       <div className="mt-2 text-sm text-gray-600">
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua.
  //       </div>
  //       <div className="text-sm cursor-pointer mt-2 block text-indigo-500 hover:underline">
  //         Read more
  //       </div>
  //     </div>
  //   </div>

  //   {/* Add more blog cards as needed  */}
  // </div>
  <div className="max-w-4xl mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-6">Blog Timeline</h2>
    <div className="relative border-l border-gray-200">
      <div className="mb-10 ml-4">
        <div className="absolute w-3 h-3 m-0 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
          13 may 2034
        </time>
        <h3 className="text-lg font-semibold text-gray-900 ">
          <div className="hover:underline">post title</div>
        </h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Learn how to create eco-friendly websites that reduce carbon footprint
          without compromising on user experience.
        </p>

        <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none ml-4">
          Read more{" "}
          <svg
            className="w-3 h-3 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
);
