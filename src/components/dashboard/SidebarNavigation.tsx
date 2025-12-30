import { motion } from 'motion/react';
import { LogoIcon } from '../Logo';
import { Home, MessageSquare, Search, Settings } from 'lucide-react';

interface SidebarNavigationProps {
  activeNav: string;
  setActiveNav: (nav: string) => void;
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard' | 'forgot-password' | 'settings' | 'home' | 'search') => void;
}

export function SidebarNavigation({ activeNav, setActiveNav, onNavigate }: SidebarNavigationProps) {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="hidden lg:flex bg-[#f0ebff] flex-col items-center justify-between py-6 px-4 w-[80px]"
    >
      <div className="flex flex-col gap-10 items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#a727ce] rounded-[14px] w-[56px] h-[56px] flex items-center justify-center cursor-pointer"
          onClick={() => onNavigate('landing')}
        >
          <LogoIcon />
        </motion.div>

        {/* Nav Icons */}
        <div className="flex flex-col gap-8 items-center">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setActiveNav('home');
              onNavigate('landing');
            }}
            className={`${activeNav === 'home' ? 'text-[#a727ce]' : 'text-black'} hover:text-[#a727ce] transition-all duration-300`}
          >
            <Home className="w-6 h-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setActiveNav('messages')}
            className={`${activeNav === 'messages' ? 'text-[#a727ce]' : 'text-black'} hover:text-[#a727ce] transition-all duration-300`}
          >
            <MessageSquare className="w-6 h-6 fill-current" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setActiveNav('search');
              onNavigate('search');
            }}
            className={`${activeNav === 'search' ? 'text-[#a727ce]' : 'text-black'} hover:text-[#a727ce] transition-all duration-300`}
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
        className="text-black hover:text-[#a727ce] transition-all duration-300"
      >
        <Settings className="w-6 h-6" />
      </motion.button>
    </motion.div>
  );
}