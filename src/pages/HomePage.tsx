import { useState } from 'react';
import { motion } from 'motion/react';
import { LogoIcon } from '../components/Logo';
import { 
  Home, 
  MessageSquare, 
  Search, 
  Settings,
  Camera,
  Edit,
  TrendingUp,
  Users,
  Image as ImageIcon,
  Heart,
  Smile,
  Zap
} from 'lucide-react@0.487.0';

interface HomePageProps {
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard' | 'forgot-password' | 'settings' | 'home' | 'search') => void;
  setActiveNav: (nav: string) => void;
}

interface RecentMessage {
  id: number;
  name: string;
  avatar: string;
  message: string;
  time: string;
  unread?: boolean;
}

const recentMessages: RecentMessage[] = [
  { id: 1, name: 'Sarah Johnson', avatar: '#FFB6C1', message: 'Haha that meme was hilarious! 😂', time: '2m ago', unread: true },
  { id: 2, name: 'Mike Chen', avatar: '#87CEEB', message: 'Wanna grab coffee later?', time: '15m ago', unread: true },
  { id: 3, name: 'Emma Wilson', avatar: '#98FB98', message: 'Check out this photo!', time: '1h ago' },
  { id: 4, name: 'Alex Turner', avatar: '#DDA0DD', message: 'See you tonight! 🎉', time: '2h ago' },
  { id: 5, name: 'Lisa Park', avatar: '#F0E68C', message: 'That was so much fun!', time: '3h ago' },
];

export default function HomePage({ onNavigate, setActiveNav }: HomePageProps) {
  const [status, setStatus] = useState('Feeling awesome! ✨');
  const [isEditingStatus, setIsEditingStatus] = useState(false);

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
            <LogoIcon />
          </motion.div>

          {/* Nav Icons */}
          <div className="flex flex-col gap-8 items-center">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveNav('home')}
              className="text-white hover:bg-white/20 rounded-lg p-2 transition-all duration-300"
            >
              <Home className="w-6 h-6 fill-current" />
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
              onClick={() => {
                setActiveNav('search');
                onNavigate('search');
              }}
              className="text-white/70 hover:text-white hover:bg-white/20 rounded-lg p-2 transition-all duration-300"
            >
              <Search className="w-6 h-6" />
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
      <div className="flex-1 overflow-y-auto p-6 lg:p-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="font-['Poppins',sans-serif] text-[32px] lg:text-[42px] mb-2">
              Hey there! 👋
            </h1>
            <p className="text-gray-600 font-['Metropolis',sans-serif] text-[16px]">
              Welcome back! Here's what's happening with your friends
            </p>
          </motion.div>

          {/* Profile Card & Quick Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Profile Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-1 bg-white rounded-[24px] p-6 shadow-xl border-2 border-purple-100"
            >
              <div className="flex flex-col items-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative mb-4"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-[#a727ce] to-[#d946ef] rounded-full flex items-center justify-center">
                    <span className="text-white text-[36px]">😊</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg border-2 border-purple-200"
                  >
                    <Camera className="w-4 h-4 text-[#a727ce]" />
                  </motion.button>
                </motion.div>
                
                <h3 className="font-['Poppins',sans-serif] text-[22px] mb-1">You!</h3>
                <p className="font-['Metropolis',sans-serif] text-[14px] text-gray-500 mb-4">@yourname</p>
                
                {/* Status */}
                <div className="w-full bg-gradient-to-r from-purple-50 to-pink-50 rounded-[16px] p-4 mb-4">
                  {isEditingStatus ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        onBlur={() => setIsEditingStatus(false)}
                        onKeyPress={(e) => e.key === 'Enter' && setIsEditingStatus(false)}
                        className="flex-1 bg-transparent border-none outline-none font-['Metropolis',sans-serif] text-[14px]"
                        autoFocus
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <p className="font-['Metropolis',sans-serif] text-[14px] text-gray-700 flex-1">{status}</p>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsEditingStatus(true)}
                      >
                        <Edit className="w-4 h-4 text-[#a727ce]" />
                      </motion.button>
                    </div>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="w-full space-y-2">
                  <motion.button
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setActiveNav('messages');
                      onNavigate('dashboard');
                    }}
                    className="w-full bg-gradient-to-r from-[#a727ce] to-[#d946ef] text-white rounded-[12px] py-3 font-['Metropolis',sans-serif] font-semibold text-[14px] shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    💬 Start Chatting
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onNavigate('settings')}
                    className="w-full bg-white border-2 border-purple-200 text-[#a727ce] rounded-[12px] py-3 font-['Metropolis',sans-serif] font-semibold text-[14px] hover:bg-purple-50 transition-all duration-300"
                  >
                    ⚙️ Edit Profile
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-3 gap-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-gradient-to-br from-pink-400 to-pink-600 rounded-[20px] p-6 shadow-lg text-white cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <MessageSquare className="w-8 h-8" />
                  <TrendingUp className="w-5 h-5 opacity-70" />
                </div>
                <p className="text-[32px] mb-1">24</p>
                <p className="text-[14px] opacity-90">New Messages</p>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-[20px] p-6 shadow-lg text-white cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <Users className="w-8 h-8" />
                  <Zap className="w-5 h-5 opacity-70" />
                </div>
                <p className="text-[32px] mb-1">12</p>
                <p className="text-[14px] opacity-90">Friends Online</p>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-[20px] p-6 shadow-lg text-white cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <ImageIcon className="w-8 h-8" />
                  <Heart className="w-5 h-5 opacity-70" />
                </div>
                <p className="text-[32px] mb-1">48</p>
                <p className="text-[14px] opacity-90">Photos Shared</p>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-[20px] p-6 shadow-lg text-white cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <Smile className="w-8 h-8" />
                  <Heart className="w-5 h-5 opacity-70" />
                </div>
                <p className="text-[32px] mb-1">156</p>
                <p className="text-[14px] opacity-90">Reactions Given</p>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="bg-gradient-to-br from-green-400 to-emerald-600 rounded-[20px] p-6 shadow-lg text-white cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <Heart className="w-8 h-8 fill-current" />
                  <TrendingUp className="w-5 h-5 opacity-70" />
                </div>
                <p className="text-[32px] mb-1">89</p>
                <p className="text-[14px] opacity-90">Likes Received</p>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-[20px] p-6 shadow-lg text-white cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <MessageSquare className="w-8 h-8 fill-current" />
                  <Zap className="w-5 h-5 opacity-70" />
                </div>
                <p className="text-[32px] mb-1">6</p>
                <p className="text-[14px] opacity-90">Active Chats</p>
              </motion.div>
            </div>
          </div>

          {/* Recent Messages */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-[24px] p-6 lg:p-8 shadow-xl border-2 border-purple-100"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Poppins',sans-serif] text-[24px]">Recent Chats 💬</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveNav('messages');
                  onNavigate('dashboard');
                }}
                className="text-[#a727ce] font-['Metropolis',sans-serif] font-semibold text-[14px] hover:bg-purple-50 px-4 py-2 rounded-lg transition-all duration-300"
              >
                View All →
              </motion.button>
            </div>

            <div className="space-y-3">
              {recentMessages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  onClick={() => {
                    setActiveNav('messages');
                    onNavigate('dashboard');
                  }}
                  className="flex items-center gap-4 p-4 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-[16px] cursor-pointer transition-all duration-300"
                >
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white text-[20px] flex-shrink-0"
                    style={{ backgroundColor: msg.avatar }}
                  >
                    {msg.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-['Poppins',sans-serif] font-semibold text-[16px] truncate">{msg.name}</p>
                      <span className="font-['Metropolis',sans-serif] text-[12px] text-gray-400 ml-2">{msg.time}</span>
                    </div>
                    <p className="font-['Metropolis',sans-serif] text-[14px] text-gray-600 truncate">{msg.message}</p>
                  </div>
                  {msg.unread && (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-3 h-3 bg-pink-500 rounded-full flex-shrink-0"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}