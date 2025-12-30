import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Home, 
  MessageSquare, 
  Search, 
  Settings,
  X,
  Clock,
  Users,
  Image as ImageIcon
} from 'lucide-react';

interface SearchPageProps {
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard' | 'forgot-password' | 'settings' | 'home' | 'search') => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

interface SearchResult {
  id: number;
  type: 'person' | 'message' | 'media' | 'group';
  title: string;
  subtitle: string;
  avatar: string;
  timestamp?: string;
}

const recentSearches = [
  'Sarah Johnson',
  'Weekend plans',
  'Coffee meetup',
  'Party photos',
];

const suggestedPeople = [
  { id: 1, name: 'David Martinez', bio: 'Travel blogger ✈️', avatar: '#FFB6C1' },
  { id: 2, name: 'Rachel Green', bio: 'Fashion enthusiast 👗', avatar: '#87CEEB' },
  { id: 3, name: 'Tom Anderson', bio: 'Tech geek 💻', avatar: '#98FB98' },
  { id: 4, name: 'Jennifer Lee', bio: 'Fitness lover 💪', avatar: '#DDA0DD' },
];

export default function SearchPage({ onNavigate, activeNav, setActiveNav }: SearchPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [activeFilter, setActiveFilter] = useState<'all' | 'people' | 'messages' | 'media'>('all');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    // Mock search results
    if (query.length > 0) {
      const mockResults: SearchResult[] = [
        { id: 1, type: 'person', title: 'Sarah Johnson', subtitle: 'Coffee enthusiast ☕', avatar: '#FFB6C1' },
        { id: 2, type: 'message', title: 'Weekend plans discussion', subtitle: 'in Sarah Johnson', avatar: '#87CEEB', timestamp: '2h ago' },
        { id: 3, type: 'person', title: 'Mike Chen', subtitle: 'Gamer & chill', avatar: '#98FB98' },
        { id: 4, type: 'media', title: 'Beach photos', subtitle: '12 photos • shared by Emma', avatar: '#DDA0DD', timestamp: '1d ago' },
        { id: 5, type: 'group', title: 'Weekend Hangout', subtitle: '8 members', avatar: '#F0E68C' },
        { id: 6, type: 'message', title: 'Coffee meetup tomorrow?', subtitle: 'in Mike Chen', avatar: '#FFB6C1', timestamp: '3h ago' },
      ];
      
      setSearchResults(mockResults.filter(result => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'people') return result.type === 'person' || result.type === 'group';
        if (activeFilter === 'messages') return result.type === 'message';
        if (activeFilter === 'media') return result.type === 'media';
        return true;
      }));
    } else {
      setSearchResults([]);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-[#fff0f5] via-[#f0f4ff] to-[#fff0ff] flex overflow-hidden">
      {/* Left Sidebar - Icon Navigation */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden lg:flex bg-gradient-to-b from-[#a727ce] to-[#7b1fa2] flex-col items-center justify-between py-6 px-4 w-[80px]"
      >
        <div className="flex flex-col gap-10 items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-[14px] w-[56px] h-[56px] flex items-center justify-center cursor-pointer shadow-lg" 
            onClick={() => onNavigate('landing')}
          >
            <span className="font-bold text-[21px] text-[#a727ce]">Q</span>
          </motion.div>

          {/* Nav Icons */}
          <div className="flex flex-col gap-8 items-center">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setActiveNav('home');
                onNavigate('home');
              }}
              className="text-white/70 hover:text-white hover:bg-white/20 rounded-lg p-2 transition-all duration-300"
            >
              <Home className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setActiveNav('messages');
                onNavigate('dashboard');
              }}
              className="text-white/70 hover:text-white hover:bg-white/20 rounded-lg p-2 transition-all duration-300"
            >
              <MessageSquare className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveNav('search')}
              className="text-white hover:bg-white/20 rounded-lg p-2 transition-all duration-300"
            >
              <Search className="w-6 h-6 fill-current" />
            </motion.button>
          </div>
        </div>

        {/* Settings */}
        <motion.button 
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onNavigate('settings')}
          className="text-white/70 hover:text-white hover:bg-white/20 rounded-lg p-2 transition-all duration-300"
        >
          <Settings className="w-6 h-6" />
        </motion.button>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 py-10">
          {/* Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="font-['Poppins',sans-serif] text-[32px] lg:text-[42px] mb-2">
              Search 🔍
            </h1>
            <p className="text-gray-600 font-['Metropolis',sans-serif] text-[16px]">
              Find friends, messages, and more
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <div className="relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search for people, messages, photos..."
                className="w-full bg-white border-2 border-purple-200 rounded-[20px] pl-14 pr-12 py-5 font-['Metropolis',sans-serif] text-[16px] text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a727ce] focus:border-transparent transition-all duration-300 shadow-lg"
                autoFocus
              />
              {searchQuery && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={clearSearch}
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Filter Tabs */}
          {searchQuery && (
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex gap-3 mb-6 overflow-x-auto pb-2"
            >
              {(['all', 'people', 'messages', 'media'] as const).map((filter) => (
                <motion.button
                  key={filter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setActiveFilter(filter);
                    handleSearch(searchQuery);
                  }}
                  className={`px-6 py-2 rounded-full font-['Metropolis',sans-serif] font-semibold text-[14px] transition-all duration-300 whitespace-nowrap ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-[#a727ce] to-[#d946ef] text-white shadow-lg'
                      : 'bg-white text-gray-600 border-2 border-purple-200 hover:border-purple-300'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Search Results */}
          {searchQuery && searchResults.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[24px] p-6 shadow-xl border-2 border-purple-100"
            >
              <h2 className="font-['Poppins',sans-serif] text-[20px] mb-4">
                Results ({searchResults.length})
              </h2>
              <div className="space-y-3">
                {searchResults.map((result, index) => (
                  <motion.div
                    key={result.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 p-4 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-[16px] cursor-pointer transition-all duration-300"
                  >
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white text-[20px] flex-shrink-0"
                      style={{ backgroundColor: result.avatar }}
                    >
                      {result.type === 'person' && result.title.charAt(0)}
                      {result.type === 'message' && <MessageSquare className="w-6 h-6" />}
                      {result.type === 'media' && <ImageIcon className="w-6 h-6" />}
                      {result.type === 'group' && <Users className="w-6 h-6" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-['Poppins',sans-serif] font-semibold text-[16px] truncate">{result.title}</p>
                      <p className="font-['Metropolis',sans-serif] text-[14px] text-gray-600 truncate">{result.subtitle}</p>
                    </div>
                    {result.timestamp && (
                      <span className="font-['Metropolis',sans-serif] text-[12px] text-gray-400">{result.timestamp}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : searchQuery ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="font-['Metropolis',sans-serif] text-[16px] text-gray-500">
                No results found for "{searchQuery}"
              </p>
            </motion.div>
          ) : (
            /* Empty State - Recent & Trending */
            <div className="space-y-6">
              {/* Recent Searches */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-[24px] p-6 shadow-xl border-2 border-purple-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-[#a727ce]" />
                  <h2 className="font-['Poppins',sans-serif] text-[20px]">Recent Searches</h2>
                </div>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      onClick={() => handleSearch(search)}
                      className="flex items-center justify-between p-3 hover:bg-purple-50 rounded-[12px] cursor-pointer transition-all duration-300"
                    >
                      <p className="font-['Metropolis',sans-serif] text-[15px]">{search}</p>
                      <Search className="w-4 h-4 text-gray-400" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Suggested People */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white rounded-[24px] p-6 shadow-xl border-2 border-purple-100"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-[#a727ce]" />
                  <h2 className="font-['Poppins',sans-serif] text-[20px]">People You May Know</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {suggestedPeople.map((person, index) => (
                    <motion.div
                      key={person.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      className="flex items-center gap-3 p-4 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-[16px] cursor-pointer transition-all duration-300"
                    >
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white text-[18px] flex-shrink-0"
                        style={{ backgroundColor: person.avatar }}
                      >
                        {person.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-['Poppins',sans-serif] font-semibold text-[15px] truncate">{person.name}</p>
                        <p className="font-['Metropolis',sans-serif] text-[13px] text-gray-600 truncate">{person.bio}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}