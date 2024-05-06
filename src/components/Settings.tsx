export const BasicSettingsPage: React.FC = () => (
  <div className="min-h-screen bg-gray-100 p-8">
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Settings</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Account Information</h3>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Username</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Preferences</h3>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label className="ml-2 text-gray-600">
            Receive Email Notifications
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label className="ml-2 text-gray-600">Receive SMS Alerts</label>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Save Changes
        </button>
      </div>
    </div>
  </div>
);

export const SettingsPagewithTabs: React.FC = () => (
  <div className="bg-gray-100 min-h-screen p-8">
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      <div className="flex space-x-4 mb-6">
        <button className="py-2 px-4 bg-gray-200 text-gray-700 rounded">
          General
        </button>
        <button className="py-2 px-4 text-gray-500 hover:bg-gray-200 rounded">
          Account
        </button>
        <button className="py-2 px-4 text-gray-500 hover:bg-gray-200 rounded">
          Privacy
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">General Settings</h3>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Username</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
);
