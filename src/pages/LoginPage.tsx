import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import { motion } from 'motion/react';

interface LoginPageProps {
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard' | 'forgot-password' | 'settings' | 'home') => void;
}

export default function LoginPage({ onNavigate }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
    // Navigate to home page after login
    onNavigate('home');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onNavigate={onNavigate} currentPage="login" />
      
      {/* Login Form Section */}
      <section className="bg-[#dedcff] flex-1 px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-24 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-[486px]"
        >
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-white rounded-[20px] border border-[#d9d9d9] p-6 md:p-8 lg:p-12"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-['Inter',sans-serif] font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-tight tracking-tight text-black mb-8 md:mb-10"
            >
              Login To Relay
            </motion.h1>

            {/* Email Field */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-6 md:mb-8"
            >
              <label className="block font-['Inter',sans-serif] text-[#1e1e1e] text-[16px] mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white border border-[#d9d9d9] rounded-[8px] px-4 py-3 font-['Inter',sans-serif] text-[16px] text-[#1e1e1e] placeholder:text-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-[#a727ce] transition-all duration-300"
              />
            </motion.div>

            {/* Password Field */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mb-6 md:mb-8"
            >
              <label className="block font-['Inter',sans-serif] text-[#1e1e1e] text-[16px] mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-white border border-[#d9d9d9] rounded-[8px] px-4 py-3 font-['Inter',sans-serif] text-[16px] text-[#1e1e1e] placeholder:text-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-[#a727ce] transition-all duration-300"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#a727ce] hover:bg-[#8f1fb3] transition-all duration-300 text-white border border-[#2c2c2c] rounded-[8px] px-4 py-3 font-['Inter',sans-serif] text-[16px] mb-6 md:mb-8"
            >
              Sign In
            </motion.button>

            {/* Forgot Password Link */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              type="button"
              onClick={() => onNavigate('forgot-password')}
              className="font-['Inter',sans-serif] text-[#1e1e1e] text-[16px] underline hover:opacity-70 transition-all duration-300"
            >
              Forgot password?
            </motion.button>
          </motion.form>
        </motion.div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}