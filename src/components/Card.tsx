import React from "react";
import {
  Bath,
  Bed,
  Briefcase,
  Building2,
  Car,
  Clock,
  DollarSign,
  Eye,
  FastForward,
  Headphones,
  Heart,
  Link as LinkIcon,
  MapPin,
  Maximize2,
  MessageCircle,
  Play,
  Rewind,
  Share2,
  ShoppingCart,
  Star,
  ThumbsUp,
} from "lucide-react";

export const JobCard: React.FC = () => (
  <div className="bg-neutral-50 dark:bg-neutral-900 px-4 py-12 flex justify-center items-center">
    <div className="w-full max-w-[420px] rounded-3xl bg-white dark:bg-neutral-950 p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-neutral-100 dark:border-white/5 transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between mb-6">
        <div className="flex bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-3 items-center justify-center">
          <Building2 className="w-6 h-6 text-neutral-700 dark:text-neutral-300" />
        </div>
        <span className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-800 dark:text-neutral-200">
          Full-time
        </span>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white tracking-tight leading-tight">
          Senior Frontend Engineer
        </h3>
        <p className="text-neutral-500 dark:text-neutral-400 mt-1 font-medium">TechCorp Inc.</p>
      </div>
      <div className="space-y-3 mb-8">
        <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-300">
          <MapPin className="w-4 h-4 mr-3 text-neutral-400 dark:text-neutral-500" />
          San Francisco, CA (Hybrid)
        </div>
        <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-300">
          <DollarSign className="w-4 h-4 mr-3 text-neutral-400 dark:text-neutral-500" />
          $140,000 - $180,000 / yr
        </div>
        <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-300">
          <Clock className="w-4 h-4 mr-3 text-neutral-400 dark:text-neutral-500" />
          Posted 2 days ago
        </div>
      </div>
      <div className="flex gap-3">
        <button className="flex-1 rounded-full bg-neutral-900 px-4 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-neutral-800 active:scale-95 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
          Apply Now
        </button>
      </div>
    </div>
  </div>
);

export const ProductCard: React.FC = () => (
  <div className="bg-neutral-50 dark:bg-neutral-900 px-4 py-12 flex justify-center items-center">
    <div className="group w-full max-w-[340px] rounded-3xl bg-white dark:bg-neutral-950 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-neutral-100 dark:border-white/5 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1">
      <div className="aspect-square relative overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <img
          src="/headphone.jpg"
          alt="Wireless Headphones"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full bg-white/90 dark:bg-black/90 px-3 py-1 text-xs font-semibold text-neutral-900 dark:text-white backdrop-blur-md shadow-sm">
            New
          </span>
        </div>
        <button className="absolute top-4 right-4 flex h-8 w-8 text-neutral-600 hover:text-black hover:scale-110 active:scale-95 items-center justify-center rounded-full bg-white/90 dark:bg-neutral-800/90 dark:text-neutral-300 dark:hover:text-white backdrop-blur-md shadow-sm transition-all">
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Audio</p>
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-current text-neutral-900 dark:text-white" />
            <span className="text-sm font-medium text-neutral-900 dark:text-white">4.8</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white tracking-tight mb-4">
          Studio Pro Headphones
        </h3>
        <div className="flex items-center justify-between mt-auto">
          <p className="text-xl font-semibold text-neutral-900 dark:text-white tracking-tight">
            $249.00
          </p>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white transition-all hover:bg-neutral-800 active:scale-95 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
            <ShoppingCart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export const ProfileCard: React.FC = () => (
  <div className="bg-neutral-50 dark:bg-neutral-900 px-4 py-12 flex justify-center items-center">
    <div className="w-full max-w-[360px] rounded-[2rem] bg-white dark:bg-neutral-950 p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-neutral-100 dark:border-white/5 transition-all hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
      <div className="relative mx-auto mb-6 h-28 w-28">
        <div className="absolute inset-0 rounded-full border-2 border-neutral-200/50 dark:border-neutral-800 scale-110"></div>
        <img
          src="/pfp.jpg"
          alt="Profile"
          className="h-full w-full rounded-full object-cover ring-4 ring-white dark:ring-neutral-950 shadow-md"
        />
        <div className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white dark:border-neutral-950 bg-green-500"></div>
      </div>
      <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white tracking-tight mb-1">
        Alex Mitchell
      </h3>
      <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-6">
        Product Designer at Studio
      </p>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {["Design Systems", "Figma", "Interaction"].map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <button className="flex-1 rounded-full bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-neutral-800 active:scale-95 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
          Follow
        </button>
        <button className="flex-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-transparent px-4 py-2.5 text-sm font-medium text-neutral-900 dark:text-white transition-all hover:bg-neutral-50 dark:hover:bg-neutral-900 active:scale-95">
          Message
        </button>
      </div>
    </div>
  </div>
);

export const PropertyCard: React.FC = () => (
  <div className="bg-neutral-50 dark:bg-neutral-900 px-4 py-12 flex justify-center items-center">
    <div className="group w-full max-w-[400px] rounded-3xl bg-white dark:bg-neutral-950 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-neutral-100 dark:border-white/5 overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img
          src="/property.jpg"
          alt="Modern Architecture"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <span className="mb-2 inline-flex items-center rounded-md bg-white/20 px-2 py-1 text-xs font-semibold text-white backdrop-blur-md">
              For Sale
            </span>
            <h3 className="text-2xl font-semibold text-white tracking-tight">$850,000</h3>
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all hover:bg-white/30 active:scale-95">
            <Heart className="h-5 w-5" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <p className="mb-5 text-sm font-medium text-neutral-600 dark:text-neutral-400">
          1420 Modern Era St, Beverly Hills, CA 90210
        </p>
        <div className="grid grid-cols-4 gap-4 border-t border-neutral-100 dark:border-neutral-800 pt-5">
          <div className="flex flex-col items-center justify-center gap-1.5 border-r border-neutral-100 dark:border-neutral-800">
            <Bed className="h-4 w-4 text-neutral-400" />
            <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">4 Beds</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1.5 border-r border-neutral-100 dark:border-neutral-800">
            <Bath className="h-4 w-4 text-neutral-400" />
            <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">3 Baths</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1.5 border-r border-neutral-100 dark:border-neutral-800">
            <Car className="h-4 w-4 text-neutral-400" />
            <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">2 Cars</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-1.5">
            <Maximize2 className="h-4 w-4 text-neutral-400" />
            <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">3,200</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ArticleCard: React.FC = () => (
  <div className="bg-neutral-50 dark:bg-neutral-900 px-4 py-12 flex justify-center items-center">
    <div className="group w-full max-w-[400px] flex flex-col sm:flex-row sm:max-w-xl rounded-3xl bg-white dark:bg-neutral-950 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-neutral-100 dark:border-white/5 overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
      <div className="relative h-48 sm:h-auto sm:w-2/5 overflow-hidden">
        <img
          src="/thumbnail.jpg"
          alt="Article cover"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 sm:w-3/5 flex flex-col">
        <div className="mb-3 flex items-center justify-between text-xs font-medium text-neutral-500 dark:text-neutral-400">
          <span>April 18, 2026</span>
          <span className="uppercase tracking-wider">Design</span>
        </div>
        <h3 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white tracking-tight leading-snug">
          The principles of minimalist UI design
        </h3>
        <p className="mb-6 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed flex-grow">
          Discover how reducing elements can actually improve user experience and interface clarity in modern web applications.
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-50 dark:border-neutral-800/50">
          <div className="flex items-center gap-2.5">
            <img src="/pfp.jpg" alt="Author" className="w-6 h-6 rounded-full object-cover ring-2 ring-neutral-100 dark:ring-neutral-800" />
            <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Sarah Jenkins</span>
          </div>
          <button className="text-xs font-semibold text-neutral-900 dark:text-white hover:underline underline-offset-4">
            Read article
          </button>
        </div>
      </div>
    </div>
  </div>
);

export const ForumCard: React.FC = () => (
  <div className="bg-neutral-50 dark:bg-neutral-900 px-4 py-12 flex justify-center items-center">
    <div className="w-full max-w-[500px] rounded-3xl bg-white dark:bg-neutral-950 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-neutral-100 dark:border-white/5 transition-all hover:bg-neutral-50/50 dark:hover:bg-neutral-900/50 cursor-pointer group">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <img src="/pfp.jpg" alt="User" className="w-10 h-10 rounded-full object-cover ring-2 ring-neutral-100 dark:ring-neutral-800" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-white truncate">Marcus Chen</h4>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">@marcusc • 4h ago</span>
          </div>
          <h3 className="text-base font-medium text-neutral-900 dark:text-white tracking-tight leading-snug mb-2">
            What&apos;s your go-to stack for building quick SaaS MVPs in 2026?
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2 mb-4">
            I&apos;m starting a new side project and want to move as fast as possible. Curious what tools, frameworks, and databases everyone is preferring right now for speed and DX...
          </p>
          <div className="flex items-center gap-6 text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-1.5 transition-colors group-hover:text-blue-500">
              <MessageCircle className="w-4 h-4" />
              <span className="text-xs font-medium">32</span>
            </div>
            <div className="flex items-center gap-1.5 transition-colors group-hover:text-red-500">
              <Heart className="w-4 h-4" />
              <span className="text-xs font-medium">148</span>
            </div>
            <div className="flex items-center gap-1.5 transition-colors group-hover:text-green-500">
              <Share2 className="w-4 h-4" />
              <span className="text-xs font-medium">12</span>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <Eye className="w-4 h-4" />
              <span className="text-xs font-medium">2.4k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const PodcastCard: React.FC = () => (
  <div className="bg-neutral-50 dark:bg-neutral-900 px-4 py-12 flex justify-center items-center">
    <div className="w-full max-w-[380px] rounded-[2rem] bg-neutral-900 dark:bg-neutral-950 p-6 shadow-2xl shadow-neutral-900/20 dark:shadow-black/40 border border-neutral-800">
      <div className="flex items-center justify-between mb-6">
        <span className="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-800/50 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-neutral-300 uppercase">
          Latest Episode
        </span>
        <button className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors">
          <Share2 className="w-4 h-4" />
        </button>
      </div>
      
      <div className="flex gap-5 items-center mb-6">
        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-2xl shadow-lg shadow-black/50">
          <img src="/podcast.jpg" alt="Podcast" className="h-full w-full object-cover" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl"></div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white tracking-tight mb-1 leading-tight">
            Design Systems & Tokens
          </h3>
          <p className="text-sm font-medium text-neutral-400">The Creative Process</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
          <div className="h-full bg-white w-1/3 rounded-full relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] cursor-pointer"></div>
          </div>
        </div>
        <div className="flex justify-between mt-2 text-xs font-medium text-neutral-500">
          <span>15:23</span>
          <span>-32:45</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6">
        <button className="text-neutral-400 hover:text-white transition-colors p-2">
          <Rewind className="w-5 h-5 fill-current" />
        </button>
        <button className="flex h-14 w-14 border border-neutral-700 bg-neutral-800/80 items-center justify-center rounded-full text-white transition-transform hover:scale-105 active:scale-95 shadow-lg">
          <Play className="w-6 h-6 fill-current ml-1" />
        </button>
        <button className="text-neutral-400 hover:text-white transition-colors p-2">
          <FastForward className="w-5 h-5 fill-current" />
        </button>
      </div>
    </div>
  </div>
);
