import { Logo } from './Logo';

interface NavigationProps {
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard') => void;
  currentPage?: 'landing' | 'login' | 'register' | 'dashboard';
}

export function Navigation({ onNavigate, currentPage }: NavigationProps) {
  return (
    <nav className="w-full bg-white px-6 md:px-12 lg:px-24 xl:px-[100px] py-6">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <Logo onClick={() => onNavigate('landing')} />
        
        <div className="flex items-center gap-4 md:gap-8">
          <button
            onClick={() => onNavigate('register')}
            className="font-['Poppins',sans-serif] text-[#2d2d2d] text-[16px] md:text-[18px] hover:opacity-70 transition-opacity"
          >
            Sign Up
          </button>
          <button
            onClick={() => onNavigate('login')}
            className="bg-[#a727ce] hover:bg-[#8f1fb3] transition-colors text-white px-6 md:px-12 py-3 md:py-4 rounded-[10px] font-['Poppins',sans-serif] text-[16px] md:text-[18px]"
          >
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
}