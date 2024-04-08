export const JobCard: React.FC = () => (
  <div className="mt-10">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      <div className="col-span-1 w-72 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow">
        <div className="flex flex-1 flex-col p-8">
          <div className="mt-6 text-sm font-medium text-gray-900">
            Product Manager
          </div>
          <div className="mt-1 flex flex-grow flex-col justify-between">
            <div className="text-sm text-gray-500">Stark Industries</div>
            <div className="mt-3">
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                New York, NY
              </span>
            </div>
            <div className="sr-only">Type</div>
            <div className="mt-3">
              <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
                Full-time
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="flex w-0 flex-1">
              <div className="cursor-pointer relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                View Details
              </div>
            </div>
            <div className="-ml-px flex w-0 flex-1">
              <div className="cursor-pointer relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                Apply
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
