import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import { requestPasswordReset } from '../api/api';

interface ForgotPasswordPageProps {
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard' | 'forgot-password') => void;
}

export default function ForgotPasswordPage({ onNavigate }: ForgotPasswordPageProps) {
  
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const result = await requestPasswordReset(email);
      
      if (result) {
        setSuccess('Verification email sent! Check your inbox for further instructions.');
        setEmail('');
      } else {
        setError('Email not found in our system');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      console.error('Password reset error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onNavigate={onNavigate} currentPage="login" />
      
      {/* Forgot Password Form Section */}
      <section className="bg-[#dedcff] flex-1 px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-24 flex items-center justify-center">
        <div className="w-full max-w-[486px]">
          <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-[20px] border border-[#d9d9d9] p-6 md:p-8 lg:p-12"
          >
            <h1 className="font-['Poppins',sans-serif] font-semibold text-[32px] md:text-[40px] lg:text-[48px] leading-tight tracking-tight text-black mb-2 md:mb-3">
              Reset Password
            </h1>
            
            <p className="font-['Poppins',sans-serif] text-[#666666] text-[14px] md:text-[16px] mb-8 md:mb-10">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            {/* Email Field */}
            <div className="mb-6 md:mb-8">
              <label className="block font-['Poppins',sans-serif] text[#1e1e1e] text-[16px] mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full bg-white border border-[#d9d9d9] rounded-[8px] px-4 py-3 font-['Poppins',sans-serif] text-[16px] text-[#1e1e1e] placeholder:text-[#b3b3b3] focus:outline-none focus:ring-2 focus:ring-[#a727ce]"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 md:mb-8 p-3 bg-red-100 border border-red-400 rounded-[8px]">
                <p className="font-['Poppins',sans-serif] text-[14px] text-red-700">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="mb-6 md:mb-8 p-3 bg-green-100 border border-green-400 rounded-[8px]">
                <p className="font-['Poppins',sans-serif] text-[14px] text-green-700">{success}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#a727ce] hover:bg-[#8f1fb3] transition-colors text-white border border-[#2c2c2c] rounded-[8px] px-4 py-3 font-['Poppins',sans-serif] text-[16px] mb-6 md:mb-8 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>

            {/* Back to Login Link */}
            <div className="text-center">
              <button
                type="button"
                onClick={() => onNavigate('login')}
                className="font-['Poppins',sans-serif] text-[#1e1e1e] text-[16px] underline hover:opacity-70 transition-opacity"
              >
                Back to Login
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
