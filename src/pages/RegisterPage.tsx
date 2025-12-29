import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useState } from 'react';

interface RegisterPageProps {
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard') => void;
}

export default function RegisterPage({ onNavigate }: RegisterPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register submitted:', formData);
    // Navigate to dashboard after registration
    onNavigate('dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onNavigate={onNavigate} currentPage="register" />
      
      {/* Register Form Section */}
      <section className="bg-[#dedcff] flex-1 px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-24 flex items-center justify-center">
        <div className="w-full max-w-[475px]">
          <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-[20px] border border-[#d9d9d9] p-6 md:p-8 lg:p-10"
          >
            <h1 className="font-['Inter',sans-serif] font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-tight tracking-tight text-black mb-6 md:mb-8">
              Register
            </h1>

            {/* Name Field */}
            <div className="mb-5">
              <label className="block font-['Inter',sans-serif] text-[#1e1e1e] text-[16px] mb-2">
                Name
              </label>
              <input
                type="text"
              value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full bg-white border border-[#d9d9d9] rounded-[8px] px-4 py-3 font-['Inter',sans-serif] text-[16px] text-[#1e1e1e] placeholder:text-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
              />
            </div>

            {/* Email Field */}
            <div className="mb-5">
              <label className="block font-['Inter',sans-serif] text-[#1e1e1e] text-[16px] mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                className="w-full bg-white border border-[#d9d9d9] rounded-[8px] px-4 py-3 font-['Inter',sans-serif] text-[16px] text-[#1e1e1e] placeholder:text-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
              />
            </div>

            {/* Password Field */}
            <div className="mb-5">
              <label className="block font-['Inter',sans-serif] text-[#1e1e1e] text-[16px] mb-2">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="Enter your password"
                className="w-full bg-white border border-[#d9d9d9] rounded-[8px] px-4 py-3 font-['Inter',sans-serif] text-[16px] text-[#1e1e1e] placeholder:text-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
              />
            </div>

            {/* Checkbox Field */}
            <div className="mb-5">
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="relative flex-shrink-0 mt-1">
                  <input
                    type="checkbox"
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-4 h-4 border border-[#d9d9d9] rounded-[4px] bg-white peer-checked:bg-[#2c2c2c] peer-checked:border-[#2c2c2c] flex items-center justify-center">
                    {formData.agreeToTerms && (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                        <path d="M3.33301 8L6.66634 11.3333L12.6663 5.33333" stroke="#F5F5F5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-['Inter',sans-serif] text-[#1e1e1e] text-[16px] leading-relaxed">
                    I agree to the Terms and Conditions
                  </div>
                  <div className="font-['Inter',sans-serif] text-[#757575] text-[16px] leading-relaxed">
                    By registering, you agree to our processing of your personal data in accordance with our Privacy Policy.
                  </div>
                </div>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#a727ce] hover:bg-[#8f1fb3] transition-colors text-white border border-[#2c2c2c] rounded-[8px] px-4 py-3 font-['Inter',sans-serif] text-[16px]"
            >
              Register
            </button>
          </form>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}