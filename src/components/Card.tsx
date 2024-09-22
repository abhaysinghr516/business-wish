import {
  Bath,
  Bed,
  Briefcase,
  Building2,
  CarFront,
  Clock,
  DollarSign,
  Expand,
  Eye,
  Headphones,
  Heart,
  LinkIcon,
  MapPin,
  MessageCircle,
  Share2,
  ShoppingCart,
  Star,
  ThumbsUp,
} from "lucide-react";

export const JobCard: React.FC = () => (
  <div className="h-screen flex justify-center items-center">
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold mb-1">Software Engineer</h2>
            <p className="text-sm text-gray-600 flex items-center">
              <Building2 className="w-4 h-4 mr-1" />
              TechCorp Inc.
            </p>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
            Full-time
          </span>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>San Francisco, CA (On-site)</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <DollarSign className="w-4 h-4 mr-2" />
            <span>$120,000 - $160,000 per year</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>Posted 2 days ago</span>
          </div>
        </div>
        <p className="mb-6 text-sm leading-relaxed text-gray-500">
          We&apos;re seeking a talented Software Engineer to join our dynamic
          team. You&apos;ll work on cutting-edge projects, collaborate with
          cross-functional teams, and have the opportunity to make a significant
          impact on our products.
        </p>
        <div className="flex space-x-4">
          <button className="w-1/2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
            Apply Now
          </button>
          <button className="w-1/2 ml-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            View Details
          </button>
        </div>
      </div>
    </div>
  </div>
);

export const ProductCard: React.FC = () => (
  <div className="h-screen flex justify-center items-center">
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src="/placeholder.svg?height=200&width=300"
          alt="Wireless Headphones"
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          Sale
        </span>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">
          Wireless Noise-Cancelling Headphones
        </h2>
        <div className="flex items-center mb-2">
          {[...Array(4)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="ml-2 text-sm text-gray-600">(4.0)</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          Experience crystal-clear audio with our premium noise-cancelling
          headphones. Perfect for music lovers and frequent travelers.
        </p>
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-2xl font-bold">$249.99</span>
            <span className="text-sm text-gray-500 line-through ml-2">
              $299.99
            </span>
          </div>
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
            Save $50
          </span>
        </div>
        <button className="flex items-center justify-center w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
        </button>
      </div>
    </div>
  </div>
);

export const ProfileCard: React.FC = () => (
  <div className="h-screen flex justify-center items-center">
    <div className="w-full max-w-sm mx-auto bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
          <img
            src="/placeholder.svg?height=96&width=96"
            alt="Jane Doe"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold mb-1">Jane Doe</h2>
        <p className="text-gray-600 mb-3">Senior UX Designer</p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {["UI/UX", "Product Design", "Prototyping"].map((skill) => (
            <span
              key={skill}
              className="bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            San Francisco, CA
          </div>
          <div className="flex items-center justify-center text-sm text-gray-600">
            <Briefcase className="w-4 h-4 mr-2" />
            TechCorp Inc.
          </div>
          <div className="flex items-center justify-center text-sm">
            <LinkIcon className="w-4 h-4 mr-2 text-gray-600" />
            <a href="#" className="text-blue-600 hover:underline">
              portfolio.com/janedoe
            </a>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Passionate UX designer with 5+ years of experience creating intuitive
          and engaging digital experiences for global brands.
        </p>
      </div>
      <div className="px-4 pb-4 flex gap-2">
        <button className="flex items-center justify-center w-1/2 ml-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Message
        </button>
        <button className="flex items-center justify-center w-1/2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          Connect
        </button>
      </div>
    </div>
  </div>
);

export const PropertyCard: React.FC = () => (
  <div className="h-screen flex justify-center items-center">
    <div className="w-full max-w-sm overflow-hidden rounded-xl bg-white shadow-lg">
      <div className="relative">
        <img
          src="/placeholder.svg?height=200&width=400"
          alt="Modern house exterior"
          className="h-48 w-full object-cover"
        />
        <span className="absolute left-2 top-2 rounded-full bg-green-500 px-2 py-1 text-xs font-semibold text-white">
          For Sale
        </span>
        <button className="absolute right-2 top-2 rounded-full bg-white/80 p-1 text-rose-500 hover:bg-white/90 hover:text-rose-600">
          <Heart className="h-5 w-5" />
          <span className="sr-only">Add to favorites</span>
        </button>
      </div>
      <div className="p-4">
        <h2 className="mb-2 text-2xl font-bold text-gray-800">$450,000</h2>
        <p className="mb-4 text-sm text-gray-600">
          123 Modern Lane, Cityville, State 12345
        </p>
        <div className="flex justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Bed className="mr-1 h-4 w-4" />
            <span>3 Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="mr-1 h-4 w-4" />
            <span>2 Baths</span>
          </div>
          <div className="flex items-center">
            <CarFront className="mr-1 h-4 w-4" />
            <span>2 Garage</span>
          </div>
          <div className="flex items-center">
            <Expand className="mr-1 h-4 w-4" />
            <span>1,800 sqft</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-4">
        <button className="w-full rounded-md bg-blue-600 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          View Property
        </button>
      </div>
    </div>
  </div>
);

export const ArticleCard: React.FC = () => (
  <div className="h-screen flex justify-center items-center">
    <div className="w-full max-w-md overflow-hidden rounded-lg bg-white shadow-md">
      <img
        src="/placeholder.svg?height=200&width=400"
        alt="Article thumbnail"
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <span className="mb-2 inline-block rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-600">
          Technology
        </span>
        <h2 className="mb-2 text-xl font-bold text-gray-800">
          The Future of AI in Web Development
        </h2>
        <p className="mb-4 text-sm text-gray-600 line-clamp-2">
          Explore how artificial intelligence is revolutionizing the way we
          build and interact with websites...
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="Author"
              className="h-8 w-8 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">John Doe</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>5 min read</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between bg-gray-50 p-4">
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <MessageCircle className="h-4 w-4" />
          <span>24 comments</span>
        </div>
        <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Read More
        </button>
      </div>
    </div>
  </div>
);

export const ForumCard: React.FC = () => (
  <div className="h-screen flex justify-center items-center">
    <div className="w-full max-w-md rounded-lg bg-white shadow-md">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold text-gray-600">
            Discussion
          </span>
          <span className="text-xs text-gray-500">2 hours ago</span>
        </div>
        <h2 className="mb-2 text-lg font-bold text-gray-800">
          Best practices for React hooks?
        </h2>
        <p className="mb-4 text-sm text-gray-600 line-clamp-2">
          I&apos;m new to React hooks and I&apos;m wondering what are some best
          practices when using them in larger applications...
        </p>
        <div className="flex items-center space-x-2">
          <img
            src="/placeholder.svg?height=32&width=32"
            alt="User"
            className="h-8 w-8 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">Jane Smith</span>
        </div>
      </div>
      <div className="flex items-center justify-between bg-gray-50 p-4">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <MessageCircle className="h-4 w-4" />
            <span>15 replies</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <ThumbsUp className="h-4 w-4" />
            <span>23 likes</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Eye className="h-4 w-4" />
            <span>102 views</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const PodcastCard: React.FC = () => (
  <div className="h-screen flex justify-center items-center">
    <div className="w-full max-w-md rounded-lg bg-white shadow-md">
      <div className="relative">
        <img
          src="/placeholder.svg?height=200&width=400"
          alt="Podcast cover"
          className="h-48 w-full object-cover rounded-t-lg"
        />
        <span className="absolute left-2 top-2 rounded-full bg-red-500 px-2 py-1 text-xs font-semibold text-white">
          New Episode
        </span>
      </div>
      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold text-gray-800">
          The Web Dev Podcast
        </h2>
        <p className="mb-4 text-sm text-gray-600 line-clamp-2">
          Episode 42: Mastering CSS Grid - Tips and Tricks from the Experts
        </p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>45 min</span>
          </div>
          <div className="flex items-center space-x-2">
            <Headphones className="h-4 w-4" />
            <span>10k listens</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <img
            src="/placeholder.svg?height=24&width=24"
            alt="Host 1"
            className="h-6 w-6 rounded-full"
          />
          <img
            src="/placeholder.svg?height=24&width=24"
            alt="Host 2"
            className="h-6 w-6 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">
            Sarah & Mike
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between bg-gray-50 p-4">
        <button className="flex items-center justify-center w-1/2 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          <Headphones className="mr-2 h-4 w-4" />
          Listen Now
        </button>
        <button className="flex items-center justify-center w-1/2 ml-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </button>
      </div>
    </div>
  </div>
);
