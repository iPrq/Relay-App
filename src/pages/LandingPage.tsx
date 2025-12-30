import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';

interface LandingPageProps {
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard' | 'forgot-password' | 'settings') => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onNavigate={onNavigate} currentPage="landing" />
      
      {/* Hero Section */}
      <section className="bg-[#dedcff] flex-1 px-6 md:px-12 lg:px-24 xl:px-[180px] py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-['Poppins',sans-serif] font-semibold text-[48px] md:text-[64px] lg:text-[80px] leading-tight md:leading-[90px] text-black mb-6"
            >
              Relay<br />
              The Chat App
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="font-['Poppins',sans-serif] text-[16px] md:text-[18px] leading-relaxed text-[#2d2d2d] opacity-50 mb-8 md:mb-12 max-w-[466px]"
            >
              Open Source Real Time Chat Application made using Java Springboot & React JS.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(167, 39, 206, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('register')}
              className="bg-gradient-to-r from-[#a727ce] to-[#a727ce] hover:from-[#8f1fb3] hover:to-[#8f1fb3] transition-all duration-300 text-white px-12 md:px-[50px] py-4 md:py-5 rounded-[10px] font-['Poppins',sans-serif] text-[16px] md:text-[18px]"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-6 md:px-12 lg:px-24 xl:px-[170px] py-16 md:py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center"
            >
              <h3 className="font-['Poppins',sans-serif] font-semibold text-[#2d2d2d] text-[18px] leading-[32px] mb-4">
                Java Springboot
              </h3>
              <p className="font-['Poppins',sans-serif] text-[#2d2d2d] text-[18px] leading-[32px] opacity-50">
                Super delicious food. Available in a range of delicious flavors.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center"
            >
              <h3 className="font-['Poppins',sans-serif] font-semibold text-[#2d2d2d] text-[18px] leading-[32px] mb-4">
                Interactive UI
              </h3>
              <p className="font-['Poppins',sans-serif] text-[#2d2d2d] text-[18px] leading-[32px] opacity-50">
                Soft toys, chew toys, and rope toys. Strong, interactive, and fun.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center"
            >
              <h3 className="font-['Poppins',sans-serif] font-semibold text-[#2d2d2d] text-[18px] leading-[32px] mb-4">
                Open Source
              </h3>
              <p className="font-['Poppins',sans-serif] text-[#2d2d2d] text-[18px] leading-[32px] opacity-50">
                You can get a wide range of great treatments for your dog.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="text-center"
            >
              <h3 className="font-['Poppins',sans-serif] font-semibold text-[#2d2d2d] text-[18px] leading-[32px] mb-4">
                Hosted on Vercel
              </h3>
              <p className="font-['Poppins',sans-serif] text-[#2d2d2d] text-[18px] leading-[32px] opacity-50">
                It's the right time to groom your dog with a variety of treatments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}