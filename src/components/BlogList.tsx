export const BasicBlogList: React.FC = () => (
  <div className="flex flex-wrap gap-2 justify-center">
    {/* Blog Card 1  */}
    <div className="m-4 mx-auto max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
      <div className="p-4">
        <div className="cursor-pointer text-lg font-semibold text-gray-800">
          Title of the Blog Post
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="cursor-pointer mt-2 block text-indigo-500 hover:underline">
          Read more
        </div>
      </div>
    </div>

    {/* Blog Card 2  */}
    <div className="m-4 mx-auto max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
      <div className="p-4">
        <div className="cursor-pointer text-lg font-semibold text-gray-800">
          Title of the Blog Post
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="cursor-pointer mt-2 block text-indigo-500 hover:underline">
          Read more
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
        <div className="mt-1 text-sm text-gray-600">
          Published on <span className="font-semibold">April 1, 2024</span>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="cursor-pointer mt-2 block text-indigo-500 hover:underline">
          Read more
        </div>
      </div>
    </div>

    {/* Blog Card 2  */}
    <div className="m-4 mx-auto max-w-lg">
      <div className="border-b border-gray-200 py-4">
        <div className="cursor-pointer text-lg font-semibold text-gray-800">
          Title of the Blog Post
        </div>
        <div className="mt-1 text-sm text-gray-600">
          Published on <span className="font-semibold">April 1, 2024</span>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="cursor-pointer mt-2 block text-indigo-500 hover:underline">
          Read more
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
        <div className="cursor-pointer mt-2 block text-indigo-500 hover:underline">
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
        <div className="cursor-pointer mt-2 block text-indigo-500 hover:underline">
          Read more
        </div>
      </div>
    </div>

    {/* Add more blog cards as needed  */}
  </div>
);

export const TimelineLayoutBlogList: React.FC = () => (
  <div className="flex flex-wrap justify-center">
    {/* Blog Card 1  */}
    <div className="m-4 mx-auto max-w-md">
      <div className="border-l-4 border-indigo-500 pl-4">
        <div className="cursor-pointer text-lg font-semibold text-gray-800">
          Title of the Blog Post
        </div>
        <div className="mt-1 text-sm text-gray-600">
          Published on <span className="font-semibold">April 1, 2024</span>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="cursor-pointer mt-2 block text-indigo-500 hover:underline">
          Read more
        </div>
      </div>
    </div>

    {/* Blog Card 2  */}
    <div className="m-4 mx-auto max-w-md">
      <div className="border-l-4 border-indigo-500 pl-4">
        <div className="cursor-pointer text-lg font-semibold text-gray-800">
          Title of the Blog Post
        </div>
        <div className="mt-1 text-sm text-gray-600">
          Published on <span className="font-semibold">April 1, 2024</span>
        </div>
        <div className="mt-2 text-sm text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="cursor-pointer mt-2 block text-indigo-500 hover:underline">
          Read more
        </div>
      </div>
    </div>

    {/* Add more blog cards as needed  */}
  </div>
);
