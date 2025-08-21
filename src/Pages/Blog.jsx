import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Clock, Tag, ArrowRight, Flame, Star, Heart, Bookmark, Share, ChevronLeft, ChevronRight, Play, Award, Users, MapPin, Calendar, Eye, MessageCircle } from "lucide-react";

// --- Data (Combined and Expanded) ---
const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "trends", label: "Trends" },
  { id: "guides", label: "Guides" },
  { id: "deals", label: "Deals" },
  { id: "reviews", label: "Reviews" },
  { id: "artisan", label: "Artisan Stories" },
  { id: "sustainability", label: "Sustainability" },
];

const POSTS = [
  {
    id: "p1",
    title: "Top 10 Festive Deals You Can't Miss",
    excerpt:
      "Round-up of the best discounts across fashion, electronics, and home essentials—curated for quick shopping.",
    category: "deals",
    author: "Team Storefront",
    date: "Aug 10, 2025",
    readTime: 6,
    featured: true,
    badge: "Editor's Pick",
    image: "https://media.istockphoto.com/id/177409779/photo/indian-fabrics.webp?a=1&b=1&s=612x612&w=0&k=20&c=iA6FVKoxgIEIdAPNvWoxaOQlkpo7NHTEu6Hr0dIreEA=s",
    likes: 243,
    comments: 42,
    views: 12500,
  },
  {
    id: "p2",
    title: "How to Choose the Perfect Running Shoes in 2025",
    excerpt:
      "Foot type, cushioning, and durability—what actually matters when you hit 'Add to Cart'.",
    category: "guides",
    author: "Aarav Mehta",
    date: "Aug 05, 2025",
    readTime: 8,
    badge: "New",
    image: "https://www.freepik.com/premium-photo/close-up-multi-colored-bangles-store_105819422.htm#fromView=search&page=2&position=33&uuid=60cefc8f-62b2-43ce-a30c-f0df11a57777&query=culture+producat+images",
    likes: 187,
    comments: 31,
    views: 8900,
  },
  {
    id: "p3",
    title: "Monsoon Wardrobe: 7 Waterproof Must‑Haves",
    excerpt:
      "Stay dry without compromising on style—jackets, sneakers, and smart accessories.",
    category: "trends",
    author: "Riya Kapoor",
    date: "Aug 02, 2025",
    readTime: 5,
    badge: "Trending",
    image: "https://www.freepik.com/premium-photo/full-frame-shot-beads-sale_100639662.htm#fromView=search&page=1&position=46&uuid=60cefc8f-62b2-43ce-a30c-f0df11a57777&query=culture+producat+images",
    likes: 321,
    comments: 56,
    views: 15600,
  },
  {
    id: "p4",
    title: "Noise‑Canceling Earbuds Under ₹4,000: 2025 Review",
    excerpt:
      "We tested 12 budget earbuds so you don't have to—see which pairs punch above their price.",
    category: "reviews",
    author: "Sound Lab",
    date: "Jul 30, 2025",
    readTime: 9,
    badge: "Value",
    image: "https://www.freepik.com/premium-photo/decorations-motif-style-art-from-cotton-thailand_12737964.htm#fromView=search&page=4&position=12&uuid=60cefc8f-62b2-43ce-a30c-f0df11a57777&query=culture+producat+images",
    likes: 412,
    comments: 78,
    views: 21000,
  },
  {
    id: "p5",
    title: "Kitchen Minimalism: Tools That Do More With Less",
    excerpt:
      "Declutter your countertop—our favorite multi‑use utensils and compact appliances.",
    category: "guides",
    author: "Nisha Verma",
    date: "Jul 25, 2025",
    readTime: 7,
    badge: "Editor's Pick",
    image: "https://www.freepik.com/free-ai-image/child-doing-artisanal-work_262771488.htm#fromView=search&page=6&position=28&uuid=60cefc8f-62b2-43ce-a30c-f0df11a57777&query=culture+producat+images",
    likes: 278,
    comments: 45,
    views: 13200,
  },
  {
    id: "p6",
    title: "Streetwear Color Palettes Ruling Q3",
    excerpt:
      "Muted earth tones meet neon accents—see the looks our community is loving.",
    category: "trends",
    author: "Style Desk",
    date: "Jul 22, 2025",
    readTime: 4,
    badge: "Hot",
    image: "https://images.unsplash.com/photo-1548883354-7622d2cc06b9?q=80&w=1400&auto=format&fit=crop",
    likes: 356,
    comments: 62,
    views: 17800,
  },
  {
    id: "p7",
    title: "Prime‑Day Alternatives: Best Site‑Wide Sales",
    excerpt:
      "Missed it? These brands are still running killer promotions this week.",
    category: "deals",
    author: "Deals Radar",
    date: "Jul 18, 2025",
    readTime: 6,
    badge: "Limited",
    image: "https://www.freepik.com/premium-photo/colorful-piles-powder-sold-market-before-holi-festival-mysore-india_38856360.htm#fromView=search&page=6&position=38&uuid=60cefc8f-62b2-43ce-a30c-f0df11a57777&query=culture+producat+images",
    likes: 198,
    comments: 29,
    views: 9500,
  },
  {
    id: "p8",
    title: "Mechanical Keyboards Buyer Guide (2025)",
    excerpt:
      "Switch types, layouts, and hot‑swap—build your perfect desk companion.",
    category: "guides",
    author: "Dev Corner",
    date: "Jul 10, 2025",
    readTime: 10,
    badge: "Deep Dive",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop",
    likes: 305,
    comments: 67,
    views: 14200,
  },
  {
    id: "p9",
    title: "Meet the Artisans: The Last Generation of Chanderi Weavers",
    excerpt:
      "A journey to the heart of India's textile heritage and the families keeping it alive.",
    category: "artisan",
    author: "Cultural Desk",
    date: "Jul 05, 2025",
    readTime: 12,
    badge: "Exclusive",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1400&auto=format&fit=crop",
    likes: 512,
    comments: 89,
    views: 24500,
  },
  {
    id: "p10",
    title: "Sustainable Fashion: Beyond the Buzzword",
    excerpt:
      "How to identify truly eco-friendly brands and make conscious choices.",
    category: "sustainability",
    author: "Eco Team",
    date: "Jun 28, 2025",
    readTime: 8,
    badge: "Essential",
    image: "https://images.unsplash.com/photo-1465433045946-ba6506ce5a59?q=80&w=1400&auto=format&fit=crop",
    likes: 423,
    comments: 71,
    views: 19800,
  },
];

const TIMELINE_EVENTS = [
  {
    year: 2010,
    title: "The Beginning",
    excerpt: "Founded in a small Jaipur workshop with just 5 artisans specializing in blue pottery.",
    emoji: "👋",
    products: ["Blue Pottery", "Handcrafted Vases"],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    cta: "Shop Blue Pottery"
  },
  {
    year: 2013,
    title: "First Expansion",
    excerpt: "Added textile weavers from Varanasi and wood carvers from Saharanpur to our family.",
    emoji: "🧵",
    products: ["Banarasi Silk", "Wooden Carvings"],
    image: "https://images.unsplash.com/photo-1610701596007-1150286d9e2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    cta: "Explore Textiles"
  },
  {
    year: 2016,
    title: "National Recognition",
    excerpt: "Featured in India Today as one of the top 10 social enterprises preserving heritage crafts.",
    emoji: "🏆",
    products: ["Award Winners", "Limited Editions"],
    image: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    cta: "Shop Limited Editions"
  },
  {
    year: 2019,
    title: "Global Reach",
    excerpt: "Shipped our first international order, taking Indian craftsmanship to 15 new countries.",
    emoji: "🌍",
    products: ["International Favorites", "Global Collection"],
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    cta: "International Collection"
  },
  {
    year: 2023,
    title: "Present Day",
    excerpt: "Supporting over 500 artisan communities while reviving 45 endangered art forms.",
    emoji: "🎨",
    products: ["New Arrivals", "Best Sellers"],
    image: "https://images.unsplash.com/photo-1608506375591-b91b98fe3189?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    cta: "Shop New Arrivals"
  },
];

const TOP_AUTHORS = [
  {
    id: "a1",
    name: "Riya Kapoor",
    role: "Fashion Editor",
    posts: 42,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop&crop=face",
    category: "trends"
  },
  {
    id: "a2",
    name: "Aarav Mehta",
    role: "Product Expert",
    posts: 38,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop&crop=face",
    category: "guides"
  },
  {
    id: "a3",
    name: "Nisha Verma",
    role: "Home & Lifestyle",
    posts: 31,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop&crop=face",
    category: "guides"
  },
  {
    id: "a4",
    name: "Sound Lab Team",
    role: "Tech Reviews",
    posts: 27,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
    category: "reviews"
  },
];

const FEATURED_VIDEOS = [
  {
    id: "v1",
    title: "Behind the Scenes: Making of Our Handcrafted Pottery",
    duration: "4:32",
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=500&auto=format&fit=crop",
    views: "12K"
  },
  {
    id: "v2",
    title: "Weaving Traditions: The Art of Banarasi Silk",
    duration: "7:15",
    thumbnail: "https://images.unsplash.com/photo-1610701596007-1150286d9e2e?q=80&w=500&auto=format&fit=crop",
    views: "8.5K"
  },
  {
    id: "v3",
    title: "Eco-Friendly Packaging: Our Sustainable Approach",
    duration: "5:43",
    thumbnail: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=500&auto=format&fit=crop",
    views: "15.2K"
  }
];

const POPULAR_TAGS = [
  "Handcrafted", "Sustainable", "Artisan", "Eco-Friendly", "Traditional", 
  "Modern Design", "Home Decor", "Fashion", "Limited Edition", "Handmade"
];

// --- Small UI bits (reused and combined) ---
function CategoryPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={
        "px-4 py-2 rounded-full text-sm font-medium transition-all border " +
        (active
          ? "bg-amber-500 text-white border-amber-500 shadow-sm"
          : "bg-white text-gray-700 border-gray-200 hover:border-amber-300 hover:bg-amber-50")
      }
    >
      {label}
    </button>
  );
}

function Badge({ children, type = "default" }) {
  const badgeStyles = {
    default: "bg-white text-gray-700 border-gray-200",
    trending: "bg-red-100 text-red-800 border-red-200",
    new: "bg-blue-100 text-blue-800 border-blue-200",
    featured: "bg-amber-100 text-amber-800 border-amber-200",
    exclusive: "bg-purple-100 text-purple-800 border-purple-200"
  };

  return (
    <span className={`inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium ${badgeStyles[type]}`}>
      <Star className="h-3.5 w-3.5 text-amber-500" /> {children}
    </span>
  );
}

function PostCard({ post, onRead, variant = "default" }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  if (variant === "minimal") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
        className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="flex">
          <div className="flex-shrink-0 w-24 h-24 relative">
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex-1 p-4">
            <h3 className="line-clamp-2 text-sm font-semibold text-gray-900 mb-1">
              {post.title}
            </h3>
            <p className="text-xs text-gray-500">{post.date}</p>
          </div>
        </div>
      </motion.article>
    );
  }
  
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-shadow"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-gray-800 shadow-sm backdrop-blur">
            {post.category.toUpperCase()}
          </span>
          {post.badge && <Badge>{post.badge}</Badge>}
        </div>
        <button 
          onClick={() => setIsBookmarked(!isBookmarked)}
          className="absolute right-4 top-4 p-2 rounded-full bg-white/90 backdrop-blur shadow-sm hover:bg-white transition-colors"
        >
          <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-amber-500 text-amber-500" : "text-gray-600"}`} />
        </button>
      </div>

      <div className="flex flex-col gap-3 p-5">
        <h3 className="line-clamp-2 text-lg font-semibold tracking-tight text-gray-900">
          {post.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">
          {post.excerpt}
        </p>
        <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" /> {post.readTime} min read
          </div>
          <div className="flex items-center gap-2">
            <Tag className="h-4 w-4" /> {post.author}
          </div>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className="flex items-center gap-1 hover:text-red-500 transition-colors"
            >
              <Heart className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span>{post.comments}</span>
            </button>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{post.views.toLocaleString()}</span>
            </div>
          </div>
          
          <button
            onClick={() => onRead(post)}
            className="inline-flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200"
          >
            Read <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function TimelineCard({ post }) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-amber-100 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl md:p-7">
      <div className="flex flex-col md:flex-row md:items-start">
        <div className="flex-shrink-0 md:mr-6">
          <img
            className="h-40 w-full rounded-lg object-cover md:h-32 md:w-32"
            src={post.image}
            alt={post.title}
          />
        </div>
        <div className="mt-4 md:mt-0">
          <h3 className="text-xl font-bold text-gray-900">{post.title}</h3>
          <p className="mt-2 text-gray-600">{post.excerpt}</p>
          
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900">Featured Products:</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {post.products.map((product) => (
                <span key={product} className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                  {product}
                </span>
              ))}
            </div>
          </div>
          
          <button className="mt-6 flex items-center text-sm font-medium text-amber-600 hover:text-amber-700">
            {post.cta}
            <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

function Stat({ value, label, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-amber-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="flex justify-center">
        <Icon className="h-8 w-8 text-amber-500" />
      </div>
      <div className="mt-2 text-3xl font-extrabold text-gray-900">{value}</div>
      <div className="mt-1 text-sm font-medium tracking-wide text-gray-600">{label}</div>
    </div>
  );
}

function AuthorCard({ author }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md">
      <img
        src={author.image}
        alt={author.name}
        className="h-20 w-20 rounded-full object-cover mb-4"
      />
      <h3 className="font-bold text-gray-900">{author.name}</h3>
      <p className="text-sm text-gray-600 mt-1">{author.role}</p>
      <div className="mt-3 flex items-center text-xs text-gray-500">
        <Bookmark className="h-4 w-4 mr-1" />
        <span>{author.posts} articles</span>
      </div>
      <button className="mt-4 text-sm font-medium text-amber-600 hover:text-amber-700">
        View Profile
      </button>
    </div>
  );
}

function VideoCard({ video }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors">
            <Play className="h-6 w-6 text-gray-900" fill="currentColor" />
          </button>
        </div>
        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 line-clamp-2">{video.title}</h3>
        <div className="flex items-center mt-2 text-xs text-gray-500">
          <Eye className="h-3.5 w-3.5 mr-1" />
          <span>{video.views} views</span>
        </div>
      </div>
    </div>
  );
}

// --- Main Component ---
export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [activeSlide, setActiveSlide] = useState(0);

  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase();
    return POSTS.filter((p) =>
      (category === "all" || p.category === category) &&
      (q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q))
    );
  }, [query, category]);

  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0];
  const restOfPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);
  const popularPosts = [...POSTS].sort((a, b) => b.views - a.views).slice(0, 3);

  const handleRead = (post) => {
    alert(`Open post: ${post.title}`);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % TIMELINE_EVENTS.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + TIMELINE_EVENTS.length) % TIMELINE_EVENTS.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* Blog List Header & Search */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-sm font-semibold text-white shadow-md">
              <Flame className="h-4 w-4" /> Premium Artisan Blog
            </div>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Fresh insights, timeless craft
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
              Discover the stories behind our handcrafted products, from traditional techniques to modern designs.
            </p>
          </div>

          <div className="mt-10 mx-auto max-w-2xl">
            <label className="group relative block">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles, authors, topics…"
                className="w-full rounded-full border border-gray-200 bg-white px-6 py-4 pl-14 text-base text-gray-900 shadow-sm outline-none placeholder:text-gray-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 transition-colors"
              />
              <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            </label>
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4 flex flex-wrap justify-center gap-2">
        {CATEGORIES.map((c) => (
          <CategoryPill
            key={c.id}
            label={c.label}
            active={category === c.id}
            onClick={() => setCategory(c.id)}
          />
        ))}
      </div>

      {/* Stats Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Stat value="500+" label="Artisan Communities" icon={Users} />
          <Stat value="45" label="Revived Art Forms" icon={Award} />
          <Stat value="15" label="Countries Reached" icon={MapPin} />
          <Stat value="12K+" label="Blog Readers" icon={Eye} />
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl"
          >
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="relative h-96 w-full overflow-hidden lg:h-full">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute left-6 bottom-6 flex items-center gap-2">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-gray-800 shadow-sm backdrop-blur">
                    FEATURED
                  </span>
                  {featuredPost.badge && <Badge>{featuredPost.badge}</Badge>}
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base text-gray-600">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4" /> {featuredPost.readTime} min read</span>
                  <span className="inline-flex items-center gap-2"><Tag className="h-4 w-4" /> {featuredPost.author}</span>
                  <span className="hidden md:inline">•</span>
                  <span>{featuredPost.date}</span>
                </div>
                <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
                  <span className="inline-flex items-center gap-1"><Heart className="h-4 w-4" /> {featuredPost.likes}</span>
                  <span className="inline-flex items-center gap-1"><MessageCircle className="h-4 w-4" /> {featuredPost.comments}</span>
                  <span className="inline-flex items-center gap-1"><Eye className="h-4 w-4" /> {featuredPost.views.toLocaleString()}</span>
                </div>
                <button
                  onClick={() => handleRead(featuredPost)}
                  className="mt-8 inline-flex items-center gap-2 self-start rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-600 shadow-md transition-colors"
                >
                  Read the story <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Blog Post Grid */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <AnimatePresence mode="popLayout">
          {restOfPosts.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-600"
            >
              No articles found. Try a different keyword.
            </motion.div>
          ) : (
            <motion.div
              layout
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {restOfPosts.map((post) => (
                <PostCard key={post.id} post={post} onRead={handleRead} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Popular Tags */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-amber-50 to-amber-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Topics</h2>
          <div className="flex flex-wrap gap-3">
            {POPULAR_TAGS.map(tag => (
              <button key={tag} className="px-4 py-2 rounded-full bg-white text-sm font-medium text-gray-700 border border-amber-200 hover:bg-amber-50 transition-colors">
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Top Authors */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Authors</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TOP_AUTHORS.map(author => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Videos</h2>
          <button className="text-sm font-medium text-amber-600 hover:text-amber-700 flex items-center">
            View all <ArrowRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURED_VIDEOS.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      {/* Popular Posts Sidebar */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {POSTS.slice(0, 4).map(post => (
                <PostCard key={post.id} post={post} onRead={handleRead} />
              ))}
            </div>
          </div>
          
          <div>
            <div className="sticky top-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Most Popular</h3>
              <div className="space-y-4">
                {popularPosts.map(post => (
                  <PostCard key={post.id} post={post} onRead={handleRead} variant="minimal" />
                ))}
              </div>
              
              <div className="mt-8 rounded-2xl bg-gray-50 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Newsletter</h3>
                <p className="text-sm text-gray-600 mb-4">Get the latest articles and exclusive content delivered to your inbox.</p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full rounded-lg border border-gray-200 px-4 py-2 text-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
                  />
                  <button 
                    type="submit"
                    className="w-full rounded-lg bg-amber-500 py-2 text-sm font-medium text-white hover:bg-amber-600"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Brand Story Timeline --- */}
      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800">
            <svg className="-ml-1 mr-2 h-5 w-5 text-amber-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
            Our Journey
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Crafting Stories, Creating Legacy
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-600">
            Discover the milestones of our artisan community and shop the collections that defined each era.
          </p>
        </div>

        {/* Mobile timeline */}
        <div className="mt-12 md:hidden">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
              <TimelineCard post={TIMELINE_EVENTS[activeSlide]} />
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {TIMELINE_EVENTS.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full ${index === activeSlide ? 'bg-amber-500' : 'bg-gray-300'}`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <button onClick={prevSlide} className="p-2 rounded-full bg-white shadow-md">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={nextSlide} className="p-2 rounded-full bg-white shadow-md">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop timeline */}
        <div className="absolute left-1/2 top-24 hidden h-[calc(100%-12rem)] -translate-x-1/2 border-l-2 border-amber-200 md:block" />
        
        <div className="hidden md:space-y-16 md:space-y-24 mt-16 md:block">
          {TIMELINE_EVENTS.map((post, idx) => {
            const isLeft = idx % 2 === 0; // alternate sides
            return (
              <div key={post.title} className="relative">
                {/* Year marker */}
                <div className={`absolute top-1/2 hidden -translate-y-1/2 text-4xl font-extrabold text-amber-600 md:block ${isLeft ? "right-[54%] mr-10" : "left-[54%] ml-10"}`}>
                  {post.year}
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
                  {/* Left column (card or spacer) */}
                  <div className={`${isLeft ? "order-1" : "order-2"}`}>
                    {isLeft ? <TimelineCard post={post} /> : <div className="hidden md:block" />}
                  </div>

                  {/* Right column (card or spacer) */}
                  <div className={`${isLeft ? "order-3" : "order-2"}`}>
                    {isLeft ? <div className="hidden md:block" /> : <TimelineCard post={post} />}
                  </div>
                </div>

                {/* Center icon dot */}
                <div className="absolute left-1/2 top-1/2 hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-amber-500 shadow-xl md:flex">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                    <span className="text-2xl" aria-hidden>
                      {post.emoji}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-r from-gray-900 to-gray-700 p-8 text-white shadow-xl">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-bold">Get weekly deals & product picks</h3>
              <p className="mt-1 text-sm text-gray-200">
                Join 12,000+ smart shoppers. No spam, unsubscribe anytime.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex w-full max-w-md gap-3"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-300 outline-none focus:bg-white/15 focus:ring-2 focus:ring-amber-400/20"
              />
              <button
                type="submit"
                className="rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white hover:bg-amber-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

       </div>
  );
}