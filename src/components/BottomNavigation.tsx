import {
  Bell,
  Heart,
  Home,
  Plus,
  Search,
  ShoppingBag,
  User,
} from "lucide-react";

export const BottomNavigation: React.FC = () => (
  <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
    <div className="flex justify-around">
      <a
        href="#"
        className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-500"
      >
        <Home className="h-6 w-6" />
        <span className="text-xs mt-1">Home</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-500"
      >
        <Search className="h-6 w-6" />
        <span className="text-xs mt-1">Search</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-500"
      >
        <Bell className="h-6 w-6" />
        <span className="text-xs mt-1">Notifications</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-500"
      >
        <User className="h-6 w-6" />
        <span className="text-xs mt-1">Profile</span>
      </a>
    </div>
  </nav>
);

export const BubbleNavigation: React.FC = () => (
  <nav className="fixed bottom-4 left-4 right-4 bg-gray-100 rounded-full ">
    <div className="flex justify-around">
      <a
        href="#"
        className="flex flex-col items-center p-3 text-gray-600 hover:text-pink-500"
      >
        <Home className="h-6 w-6" />
        <span className="text-xs mt-1">Home</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center p-3 text-gray-600 hover:text-pink-500"
      >
        <Search className="h-6 w-6" />
        <span className="text-xs mt-1">Search</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center p-3 text-gray-600 hover:text-pink-500"
      >
        <Heart className="h-6 w-6" />
        <span className="text-xs mt-1">Favorites</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center p-3 text-gray-600 hover:text-pink-500"
      >
        <ShoppingBag className="h-6 w-6" />
        <span className="text-xs mt-1">Cart</span>
      </a>
    </div>
  </nav>
);

export const FabNavigation: React.FC = () => (
  <nav className="fixed bottom-4 left-4 right-4">
    <div className="relative flex justify-around items-center bg-gray-100 rounded-full p-2">
      <a
        href="#"
        className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-500"
      >
        <Home className="h-6 w-6" />
        <span className="text-xs mt-1">Home</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-500"
      >
        <Search className="h-6 w-6" />
        <span className="text-xs mt-1">Search</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-500"
      >
        <Bell className="h-6 w-6" />
        <span className="text-xs mt-1">Notifications</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center p-2 text-gray-600 hover:text-blue-500"
      >
        <User className="h-6 w-6" />
        <span className="text-xs mt-1">Profile</span>
      </a>
      <button className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white rounded-full p-3 shadow-lg">
        <Plus className="h-6 w-6" />
      </button>
    </div>
  </nav>
);
