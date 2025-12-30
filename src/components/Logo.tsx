import logo from "../assets/Logo.png";
import { motion } from 'motion/react';

export function LogoIcon() {
  return (
    <div className="relative w-[35px] h-[35px] shrink-0">
      <img src={logo} alt="Logo" className="w-full h-full object-contain" />
    </div>
  );
}

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-[10px] cursor-pointer" 
      onClick={onClick}
    >
      <LogoIcon />
      <p className="font-['Poppins',sans-serif] font-bold text-[20px] leading-[20px] text-[#2d2d2d] uppercase">
        Relay
      </p>
    </motion.div>
  );
}