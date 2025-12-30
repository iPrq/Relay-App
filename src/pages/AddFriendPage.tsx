import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Search, User, MessageCircle } from 'lucide-react';

interface AddFriendPageProps {
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard' | 'forgot-password' | 'settings' | 'home' | 'search' | 'add-friend') => void;
  onAddFriend: (friend: { id: number; name: string; text: string; time: string }) => void;
  onSelectContact: (id: number) => void;
}

export default function AddFriendPage({ onNavigate, onAddFriend, onSelectContact }: AddFriendPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedUser, setSearchedUser] = useState<{ name: string; username: string } | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      if (searchQuery.toLowerCase() === 'johndoe') {
        setSearchedUser({ name: 'John Doe', username: 'johndoe' });
      } else {
        setSearchedUser(null);
      }
      setIsSearching(false);
    }, 1000);
  };

  const handleAddFriend = () => {
    if (searchedUser) {
      const newFriend = {
        id: Date.now(), // Simple ID generation
        name: searchedUser.name,
        text: 'Hey there!',
        time: 'now'
      };
      onAddFriend(newFriend);
      onSelectContact(newFriend.id);
      onNavigate('dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-sm px-6 py-4 flex items-center gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onNavigate('dashboard')}
          className="text-gray-600 hover:text-[#a727ce] transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </motion.button>
        <h1 className="font-['Poppins',sans-serif] font-semibold text-[24px] text-black">
          Add Friend
        </h1>
      </motion.div>

      {/* Search Section */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 px-6 py-8"
      >
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-[20px] p-6 shadow-sm">
            <h2 className="font-['Poppins',sans-serif] font-medium text-[18px] text-black mb-4">
              Search by Username
            </h2>

            <div className="flex gap-3 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter username..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#a727ce] focus:border-transparent font-['Poppins',sans-serif]"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSearch}
                disabled={isSearching}
                className="bg-[#a727ce] text-white px-6 py-3 rounded-[12px] font-['Poppins',sans-serif] font-medium hover:bg-[#8f1fb3] transition-colors disabled:opacity-50"
              >
                {isSearching ? 'Searching...' : 'Search'}
              </motion.button>
            </div>

            {/* Search Results */}
            {searchedUser ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gray-50 rounded-[16px] p-4"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#a727ce] rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-['Poppins',sans-serif] font-semibold text-[16px] text-black">
                      {searchedUser.name}
                    </h3>
                    <p className="font-['Poppins',sans-serif] text-[14px] text-gray-600">
                      @{searchedUser.username}
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddFriend}
                  className="w-full bg-[#a727ce] text-white py-3 rounded-[12px] font-['Poppins',sans-serif] font-medium hover:bg-[#8f1fb3] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Add Friend
                </motion.button>
              </motion.div>
            ) : searchQuery && !isSearching ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <User className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="font-['Poppins',sans-serif] text-[16px] text-gray-500">
                  No user found
                </p>
                <p className="font-['Poppins',sans-serif] text-[14px] text-gray-400 mt-1">
                  Try searching for "johndoe"
                </p>
              </motion.div>
            ) : null}
          </div>
        </div>
      </motion.div>
    </div>
  );
}