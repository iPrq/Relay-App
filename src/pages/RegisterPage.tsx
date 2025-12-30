import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import { motion } from 'motion/react';

interface RegisterPageProps {
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard' | 'forgot-password' | 'settings' | 'home') => void;
}

export default function RegisterPage({ onNavigate }: RegisterPageProps) {
  const [formData, setFormData] = useState({
    email: '',
    email: '',
    password: '',
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register submitted:', formData);
    // Navigate to home page after registration
    onNavigate('home');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onNavigate={onNavigate} currentPage="register" />
      
      {/* Register Form Section */}
      <section className="bg-[#dedcff] flex-1 px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-24 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-[475px]"
        >
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-white rounded-[20px] border border-[#d9d9d9] p-6 md:p-8 lg:p-10"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-['Inter',sans-serif] font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-tight tracking-tight text-black mb-6 md:mb-8"
            >
              Register
            </motion.h1>

            {/* Email Field 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-5"
            >
              <label className="block font-['Inter',sans-serif] text-[#1e1e1e] text-[16px] mb-2">
                Username
              </label>
              <input
                type="text"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your username"
                className="w-full bg-white border border-[#d9d9d9] rounded-[8px] px-4 py-3 font-['Inter',sans-serif] text-[16px] text-[#1e1e1e] placeholder:text-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-[#a727ce] transition-all duration-300"
              />
            </motion.div>

            {/* Email Field 2 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mb-5"
            >
              <label className="block font-['Inter',sans-serif] text-[#1e1e1e] text-[16px] mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                className="w-full bg-white border border-[#d9d9d9] rounded-[8px] px-4 py-3 font-['Inter',sans-serif] text-[16px] text-[#1e1e1e] placeholder:text-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-[#a727ce] transition-all duration-300"
              />
            </motion.div>

            {/* Password Field */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mb-5"
            >
              <label className="block font-['Inter',sans-serif] text-[#1e1e1e] text-[16px] mb-2">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Enter your password"
                className="w-full bg-white border border-[#d9d9d9] rounded-[8px] px-4 py-3 font-['Inter',sans-serif] text-[16px] text-[#1e1e1e] placeholder:text-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-[#a727ce] transition-all duration-300"
              />
            </motion.div>

            {/* Checkbox Field */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mb-5"
            >
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="relative flex-shrink-0 mt-1">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-4 h-4 border border-[#d9d9d9] rounded-[4px] bg-white peer-checked:bg-[#2c2c2c] peer-checked:border-[#2c2c2c] flex items-center justify-center transition-all duration-300">
                    {formData.agreeToTerms && (
                      <motion.svg 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-4 h-4" 
                        fill="none" 
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.33301 8L6.66634 11.3333L12.6663 5.33333" stroke="#F5F5F5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </motion.svg>
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-['Inter',sans-serif] text-[#1e1e1e] text-[16px] leading-relaxed">
                    I agree to the <span className="text-[#a727ce] underline">Terms of Service</span> and <span className="text-[#a727ce] underline">Privacy Policy</span>
                  </div>
                  <div className="font-['Inter',sans-serif] text-[#757575] text-[16px] leading-relaxed">
                    
                  </div>
                </div>
              </label>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#a727ce] hover:bg-[#8f1fb3] transition-all duration-300 text-white border border-[#2c2c2c] rounded-[8px] px-4 py-3 font-['Inter',sans-serif] text-[16px]"
            >
              Register
            </motion.button>
          </motion.form>
        </motion.div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}