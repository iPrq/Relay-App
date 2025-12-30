import { Logo } from './Logo';
import svgPaths from "../imports/svg-2qeczk8x7z";
import { motion } from 'motion/react';

interface FooterProps {
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard' | 'forgot-password' | 'settings') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <motion.footer 
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white px-6 md:px-12 lg:px-24 xl:px-[180px] py-8 md:py-12 border-t border-gray-100"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="shrink-0"
          >
            <Logo onClick={() => onNavigate('landing')} />
          </motion.div>

          {/* Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-6 md:gap-8 lg:gap-12 font-['Poppins',sans-serif] font-semibold text-[#2d2d2d] text-[16px] md:text-[18px]"
          >
            <motion.a whileHover={{ scale: 1.05 }} href="#" className="hover:opacity-70 transition-all duration-300">Github Profile</motion.a>
            <motion.a whileHover={{ scale: 1.05 }} href="#" className="hover:opacity-70 transition-all duration-300">Privacy policy</motion.a>
            <motion.a whileHover={{ scale: 1.05 }} href="#" className="hover:opacity-70 transition-all duration-300">Terms of use</motion.a>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4 md:gap-6"
          >
            {/* Facebook */}
            <motion.a 
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="#" 
              className="w-[30px] h-[30px] hover:opacity-70 transition-all duration-300"
            >
              <svg className="w-full h-full" fill="none" viewBox="0 0 30 30">
                <circle cx="15" cy="15" r="15" fill="#2D2D2D" />
                <path d={svgPaths.p28543180} fill="#2D2D2D" />
              </svg>
            </motion.a>

            {/* LinkedIn */}
            <motion.a 
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="#" 
              className="w-[30px] h-[30px] hover:opacity-70 transition-all duration-300"
            >
              <svg className="w-full h-full" fill="none" viewBox="0 0 30 30">
                <circle cx="15" cy="15" fill="#2D2D2D" r="15" />
                <path d={svgPaths.p15e4e400} fill="white" />
              </svg>
            </motion.a>

            {/* Instagram */}
            <motion.a 
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="#" 
              className="w-[30px] h-[30px] hover:opacity-70 transition-all duration-300"
            >
              <div className="w-full h-full bg-[#2d2d2d] rounded-[15px] flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p354fddf0} fill="white" />
                  <path d={svgPaths.p37daa200} fill="white" />
                  <path d={svgPaths.p187d21c0} fill="white" />
                </svg>
              </div>
            </motion.a>

            {/* Twitter */}
            <motion.a 
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="#" 
              className="w-[30px] h-[30px] hover:opacity-70 transition-all duration-300"
            >
              <svg className="w-full h-full" fill="none" viewBox="0 0 30 30">
                <circle cx="15" cy="15" fill="#2D2D2D" r="15" />
                <path d={svgPaths.p3672400} fill="white" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}