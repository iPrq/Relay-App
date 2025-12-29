import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import { validateLogin } from '../api/api';

interface LoginPageProps {
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard' | 'forgot-password') => void;
}

export default function LoginPage({ onNavigate }: LoginPageProps) {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // const isValid = await validateLogin(email, password);
      const isValid = true;
      if (isValid) {
        console.log('Login successful');
        onNavigate('dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred during login');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onNavigate={onNavigate} currentPage="login" />
      
      {/* Login Form Section */}
      <section className="bg-[#dedcff] flex-1 px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-24 flex items-center justify-center">
        <div className="w-full max-w-[486px]">
          <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-[20px] border border-[#d9d9d9] p-6 md:p-8 lg:p-12"
          >
            <h1 className="font-['Inter',sans-serif] font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-tight tracking-tight text-black mb-8 md:mb-10">
              Login To Relay
            </h1>

            {/* Email Field */}
            <div className="mb-6 md:mb-8">
              <label className="block font-['Inter',sans-serif] text-[#1e1e1e] text-[16px] mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-white border border-[#d9d9d9] rounded-[8px] px-4 py-3 font-['Inter',sans-serif] text-[16px] text-[#1e1e1e] placeholder:text-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
              />
            </div>

            {/* Password Field */}
            <div className="mb-6 md:mb-8">
              <label className="block font-['Inter',sans-serif] text-[#1e1e1e] text-[16px] mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full bg-white border border-[#d9d9d9] rounded-[8px] px-4 py-3 font-['Inter',sans-serif] text-[16px] text-[#1e1e1e] placeholder:text-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 md:mb-8 p-3 bg-red-100 border border-red-400 rounded-[8px]">
                <p className="font-['Inter',sans-serif] text-[14px] text-red-700">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#a727ce] hover:bg-[#8f1fb3] transition-colors text-white border border-[#2c2c2c] rounded-[8px] px-4 py-3 font-['Inter',sans-serif] text-[16px] mb-6 md:mb-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>

            {/* Forgot Password Link */}
            <button
              type="button"
              onClick={() => onNavigate('forgot-password')}
              className="font-['Inter',sans-serif] text-[#1e1e1e] text-[16px] underline hover:opacity-70 transition-opacity"
            >
              Forgot password?
            </button>
          </form>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}