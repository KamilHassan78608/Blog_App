import React, { useState, useEffect, useMemo } from 'react';
import { 
  Sun, 
  Moon, 
  Search, 
  Menu, 
  X, 
  ArrowRight, 
  Clock, 
  Heart, 
  Share2, 
  Bookmark, 
  ChevronLeft,
  TrendingUp,
  MessageCircle
} from 'lucide-react';

// --- Mock Data ---
const CATEGORIES = ["All", "Design", "Technology", "Culture", "Productivity", "Future"];

const POSTS = [
  {
    id: 1,
    category: "Design",
    title: "The Renaissance of Brutalism in Digital Interfaces",
    excerpt: "Why modern web design is stripping away the polish to reveal raw, structural aesthetics.",
    author: "Alex Rivera",
    date: "Oct 12, 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    content: "Minimalism has had its day. We are now entering an era where the raw, the unpolished, and the bold are taking center stage. Digital brutalism isn't just about ugliness; it's about honesty. It's about showing the grid lines, using default system fonts, and rejecting the sanitized corporate Memphis art style that dominated the 2010s...",
    likes: 124
  },
  {
    id: 2,
    category: "Technology",
    title: "Beyond the Screen: The Rise of Ambient Computing",
    excerpt: "When technology disappears into the background, interactions become magic.",
    author: "Sarah Chen",
    date: "Oct 10, 2024",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    content: "Imagine a world where you don't carry a phone, but the world around you answers your questions. Ambient computing is the concept of an environment saturated with computing power that is sensitive and responsive to the presence of people...",
    likes: 89
  },
  {
    id: 3,
    category: "Productivity",
    title: "Deep Work in a Distracted World",
    excerpt: "Reclaiming your cognitive capacity in an age of constant notifications.",
    author: "Marcus Aurelius II",
    date: "Oct 08, 2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1499750310159-54f8f0506f84?q=80&w=2669&auto=format&fit=crop",
    content: "The ability to perform deep work is becoming increasingly rare at exactly the same time it is becoming increasingly valuable in our economy. As a consequence, the few who cultivate this skill, and then make it the core of their working life, will thrive...",
    likes: 210
  },
  {
    id: 4,
    category: "Culture",
    title: "Digital Nomads and the Gentrification of Paradise",
    excerpt: "The economic and social impact of remote work on local communities worldwide.",
    author: "Elena Gomez",
    date: "Oct 05, 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2574&auto=format&fit=crop",
    content: "From Bali to Lisbon, the influx of laptop-wielding workers is changing the fabric of cities. While they bring capital, they also drive up prices, pushing locals out of their own neighborhoods. Is there a sustainable middle ground?",
    likes: 156
  },
  {
    id: 5,
    category: "Future",
    title: "Synthetic Biology: Coding with DNA",
    excerpt: "How we are moving from reading the genome to writing it.",
    author: "Dr. Arinze Okafor",
    date: "Oct 01, 2024",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop",
    content: "We are on the cusp of a biological revolution. CRISPR was just the beginning. Now, we are looking at writing entirely new genetic sequences to create materials, medicines, and even data storage solutions that far outstrip silicon...",
    likes: 302
  },
  {
    id: 6,
    category: "Design",
    title: "Typography as Interface",
    excerpt: "When words become the primary navigation tool.",
    author: "Jessica Lee",
    date: "Sep 28, 2024",
    readTime: "3 min",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2564&auto=format&fit=crop",
    content: "Big, bold type is taking over. It serves a dual purpose: it conveys the message and it structures the page. We are seeing a move away from icon-heavy interfaces to text-forward designs that prioritize clarity and voice...",
    likes: 95
  }
];

// --- Components ---

const Header = ({ darkMode, toggleTheme, onHome }) => (
  <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md border-b ${darkMode ? 'border-gray-800' : 'border-gray-100'}`}>
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div 
        className="flex items-center gap-2 cursor-pointer group" 
        onClick={onHome}
      >
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} transition-transform group-hover:rotate-12`}>
          <TrendingUp size={18} strokeWidth={3} />
        </div>
        <span className={`text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Lumina<span className="text-indigo-500">.</span>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {["Journal", "Newsletter", "About", "Membership"].map((item) => (
          <a key={item} href="#" className={`text-sm font-medium transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <button className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`}>
          <Search size={20} />
        </button>
        <button 
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-gray-800 text-yellow-400' : 'hover:bg-gray-100 text-gray-600'}`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="md:hidden">
          <Menu size={24} className={darkMode ? 'text-white' : 'text-black'} />
        </button>
      </div>
    </div>
  </header>
);

const Hero = ({ darkMode }) => (
  <section className="pt-32 pb-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-wider">
            Featured Issue
          </div>
          <h1 className={`text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Designing for the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">next billion users.</span>
          </h1>
          <p className={`text-lg md:text-xl max-w-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Exploring the intersection of accessibility, performance, and human-centric design patterns in emerging markets.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className={`px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 ${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
              Read Story
            </button>
            <button className={`px-8 py-3 rounded-full font-semibold border transition-all ${darkMode ? 'border-gray-700 text-white hover:bg-gray-800' : 'border-gray-200 text-black hover:bg-gray-50'}`}>
              View Archive
            </button>
          </div>
        </div>
        <div className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop" 
            alt="Hero" 
            className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <div className="flex items-center justify-between text-white">
              <span className="text-sm font-medium bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">Editor's Pick</span>
              <span className="flex items-center gap-2 text-sm font-medium bg-black/50 backdrop-blur-md px-3 py-1 rounded-full"><Clock size={14} /> 12 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CategoryFilter = ({ categories, activeCategory, setActiveCategory, darkMode }) => (
  <div className={`sticky top-16 z-40 border-b ${darkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-100'} backdrop-blur-sm transition-colors duration-300`}>
    <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
      <div className="flex items-center gap-2 py-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 scale-105'
                : darkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-500 hover:text-black hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  </div>
);

const ArticleCard = ({ post, darkMode, onClick }) => (
  <article 
    onClick={() => onClick(post)}
    className={`group relative flex flex-col h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-white hover:shadow-xl border border-gray-100'}`}
  >
    <div className="relative aspect-[16/10] overflow-hidden">
      <img 
        src={post.image} 
        alt={post.title} 
        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute top-4 left-4">
        <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-md rounded-full">
          {post.category}
        </span>
      </div>
    </div>
    
    <div className="flex-1 p-6 flex flex-col">
      <div className="flex items-center gap-3 text-xs mb-3 font-medium text-gray-500">
        <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{post.date}</span>
        <span className="w-1 h-1 rounded-full bg-gray-400"></span>
        <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
      </div>
      
      <h3 className={`text-xl font-bold mb-3 leading-tight transition-colors ${darkMode ? 'text-white group-hover:text-indigo-400' : 'text-gray-900 group-hover:text-indigo-600'}`}>
        {post.title}
      </h3>
      
      <p className={`text-sm mb-6 line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        {post.excerpt}
      </p>
      
      <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-200/10">
        <div className="flex items-center gap-2">
           <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
             {post.author.charAt(0)}
           </div>
           <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{post.author}</span>
        </div>
        <div className="flex items-center gap-3">
          <button className={`flex items-center gap-1 text-xs font-medium transition-colors ${darkMode ? 'text-gray-500 hover:text-red-400' : 'text-gray-400 hover:text-red-500'}`}>
            <Heart size={14} /> {post.likes}
          </button>
        </div>
      </div>
    </div>
  </article>
);

const ReadingView = ({ post, darkMode, onBack }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`min-h-screen pt-24 pb-12 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-3xl mx-auto px-6">
        <button 
          onClick={onBack}
          className={`mb-8 flex items-center gap-2 text-sm font-medium transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}
        >
          <ChevronLeft size={20} /> Back to feed
        </button>

        <header className="mb-8">
          <div className="flex items-center gap-2 mb-6">
             <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-wider">
               {post.category}
             </span>
             <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>• {post.date}</span>
          </div>
          <h1 className={`text-3xl md:text-5xl font-bold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {post.title}
          </h1>
          <div className="flex items-center justify-between py-6 border-t border-b border-gray-200/10">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'}`}>
                {post.author.charAt(0)}
              </div>
              <div>
                <p className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{post.author}</p>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Editor in Chief</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}>
                <Share2 size={18} />
              </button>
              <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-500'}`}>
                <Bookmark size={18} />
              </button>
            </div>
          </div>
        </header>

        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full aspect-video object-cover rounded-2xl mb-12 shadow-lg"
        />

        <div className={`prose prose-lg ${darkMode ? 'prose-invert' : ''} max-w-none`}>
          <p className="lead text-xl mb-6 font-medium opacity-90">{post.excerpt}</p>
          <p className="mb-6">{post.content}</p>
          <h2 className="text-2xl font-bold mt-10 mb-4">The Shift in Perspective</h2>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <blockquote className={`p-6 my-8 rounded-xl border-l-4 border-indigo-500 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
            <p className="italic font-medium text-lg">"The interface is no longer a wrapper for content. The interface IS the content."</p>
          </blockquote>
          <p className="mb-6">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2 className="text-2xl font-bold mt-10 mb-4">Looking Forward</h2>
          <p className="mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>

        <div className={`mt-12 pt-12 border-t ${darkMode ? 'border-gray-800' : 'border-gray-100'}`}>
          <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Discussion</h3>
          <div className={`p-8 rounded-2xl text-center ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
             <MessageCircle size={32} className="mx-auto mb-3 text-indigo-500 opacity-50" />
             <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Join the conversation</h4>
             <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Sign in to post comments and interact with the community.</p>
             <button className="px-6 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors">
               Sign In
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = ({ darkMode }) => (
  <footer className={`py-12 px-6 border-t ${darkMode ? 'bg-gray-900 border-gray-800 text-gray-400' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded flex items-center justify-center ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
             <TrendingUp size={14} strokeWidth={3} />
          </div>
          <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Lumina.</span>
        </div>
        <p className="text-sm">Curating the future of design, technology, and culture for the modern thinker.</p>
      </div>
      
      <div>
        <h4 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Explore</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-indigo-500 transition-colors">Design</a></li>
          <li><a href="#" className="hover:text-indigo-500 transition-colors">Technology</a></li>
          <li><a href="#" className="hover:text-indigo-500 transition-colors">Culture</a></li>
        </ul>
      </div>

      <div>
        <h4 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Company</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="hover:text-indigo-500 transition-colors">About</a></li>
          <li><a href="#" className="hover:text-indigo-500 transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-indigo-500 transition-colors">Privacy</a></li>
        </ul>
      </div>

      <div>
        <h4 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Newsletter</h4>
        <p className="text-sm mb-4">Get the latest trends directly in your inbox.</p>
        <div className="flex gap-2">
          <input 
            type="email" 
            placeholder="Email address" 
            className={`flex-1 px-4 py-2 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'}`}
          />
          <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200/10 text-center text-xs">
      © 2024 Lumina Media Inc. All rights reserved.
    </div>
  </footer>
);

// --- Main App ---

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  // Filter posts
  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return POSTS;
    return POSTS.filter(post => post.category === activeCategory);
  }, [activeCategory]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Header 
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
        onHome={() => setSelectedPost(null)}
      />
      
      {selectedPost ? (
        <ReadingView 
          post={selectedPost} 
          darkMode={darkMode} 
          onBack={() => setSelectedPost(null)} 
        />
      ) : (
        <main>
          <Hero darkMode={darkMode} />
          
          <CategoryFilter 
            categories={CATEGORIES} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
            darkMode={darkMode} 
          />
          
          <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex items-center justify-between mb-8">
               <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                 {activeCategory === "All" ? "Latest Stories" : `${activeCategory} Stories`}
               </h2>
               <button className="text-sm font-medium text-indigo-500 hover:text-indigo-600 flex items-center gap-1">
                 View all <ArrowRight size={16} />
               </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <ArticleCard 
                  key={post.id} 
                  post={post} 
                  darkMode={darkMode} 
                  onClick={setSelectedPost}
                />
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500">No stories found in this category.</p>
              </div>
            )}
          </section>

          <section className={`py-20 px-6 ${darkMode ? 'bg-gray-800' : 'bg-indigo-900'}`}>
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay ahead of the curve.</h2>
              <p className="text-lg text-indigo-200 mb-8 max-w-2xl mx-auto">
                Join 50,000+ designers, developers, and founders getting our weekly deep dives into the future of tech.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
                />
                <button className="w-full md:w-auto px-8 py-4 rounded-full bg-white text-indigo-900 font-bold hover:bg-indigo-50 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </main>
      )}
      
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;