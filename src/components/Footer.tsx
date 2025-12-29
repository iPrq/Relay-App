import { Logo } from './Logo';
import svgPaths from "../imports/svg-2qeczk8x7z";

interface FooterProps {
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="w-full bg-white px-6 md:px-12 lg:px-24 xl:px-[180px] py-8 md:py-12 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo */}
          <div className="shrink-0">
            <Logo onClick={() => onNavigate('landing')} />
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-12 font-['Poppins',sans-serif] font-semibold text-[#2d2d2d] text-[16px] md:text-[18px]">
            <a href="#" className="hover:opacity-70 transition-opacity">Github Profile</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Privacy policy</a>
            <a href="#" className="hover:opacity-70 transition-opacity">Terms of use</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Facebook */}
            <a href="#" className="w-[30px] h-[30px] hover:opacity-70 transition-opacity">
              <svg className="w-full h-full" fill="none" viewBox="0 0 30 30">
                <circle cx="15" cy="15" r="15" fill="#2D2D2D" />
                <path d={svgPaths.p28543180} fill="#2D2D2D" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" className="w-[30px] h-[30px] hover:opacity-70 transition-opacity">
              <svg className="w-full h-full" fill="none" viewBox="0 0 30 30">
                <circle cx="15" cy="15" fill="#2D2D2D" r="15" />
                <path d={svgPaths.p15e4e400} fill="white" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="w-[30px] h-[30px] hover:opacity-70 transition-opacity">
              <div className="w-full h-full bg-[#2d2d2d] rounded-[15px] flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d={svgPaths.p354fddf0} fill="white" />
                  <path d={svgPaths.p37daa200} fill="white" />
                  <path d={svgPaths.p187d21c0} fill="white" />
                </svg>
              </div>
            </a>

            {/* Twitter */}
            <a href="#" className="w-[30px] h-[30px] hover:opacity-70 transition-opacity">
              <svg className="w-full h-full" fill="none" viewBox="0 0 30 30">
                <circle cx="15" cy="15" fill="#2D2D2D" r="15" />
                <path d={svgPaths.p3672400} fill="white" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}