import { Logo } from './Logo';
import { motion } from 'motion/react';

interface NavigationProps {
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard' | 'forgot-password' | 'settings') => void;
  currentPage?: 'landing' | 'login' | 'register' | 'dashboard' | 'forgot-password' | 'settings';
}

export function Navigation({ onNavigate, currentPage }: NavigationProps) {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full bg-white px-6 md:px-12 lg:px-24 xl:px-[100px] py-6"
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <Logo onClick={() => onNavigate('landing')} />
        
        <div className="flex items-center gap-4 md:gap-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('register')}
            className="font-['Poppins',sans-serif] text-[#2d2d2d] text-[16px] md:text-[18px] hover:opacity-70 transition-all duration-300"
          >
            Sign Up
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('login')}
            className="bg-[#a727ce] hover:bg-[#8f1fb3] transition-all duration-300 text-white px-6 md:px-12 py-3 md:py-4 rounded-[10px] font-['Poppins',sans-serif] text-[16px] md:text-[18px]"
          >
            Log in
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}