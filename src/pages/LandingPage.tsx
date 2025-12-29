import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

interface LandingPageProps {
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard') => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onNavigate={onNavigate} currentPage="landing" />
      
      {/* Hero Section */}
      <section className="bg-[#dedcff] flex-1 px-6 md:px-12 lg:px-24 xl:px-[180px] py-12 md:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <h1 className="font-['Poppins',sans-serif] font-semibold text-[48px] md:text-[64px] lg:text-[80px] leading-tight md:leading-[90px] text-black mb-6">
              Relay<br />
              The Chat App
            </h1>
            
            <p className="font-['Poppins',sans-serif] text-[16px] md:text-[18px] leading-relaxed text-[#2d2d2d] opacity-50 mb-8 md:mb-12 max-w-[466px]">
              Open Source Real Time Chat Application made using Java Springboot & React JS.
            </p>
            
            <button
              onClick={() => onNavigate('register')}
              className="bg-gradient-to-r from-[#a727ce] to-[#a727ce] hover:from-[#8f1fb3] hover:to-[#8f1fb3] transition-all text-white px-12 md:px-[50px] py-4 md:py-5 rounded-[10px] font-['Poppins',sans-serif] text-[16px] md:text-[18px]"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white px-6 md:px-12 lg:px-24 xl:px-[170px] py-16 md:py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
            {/* Feature 1 */}
            <div className="text-center">
              <h3 className="font-['Poppins',sans-serif] font-semibold text-[#2d2d2d] text-[18px] leading-[32px] mb-4">
                Java Springboot
              </h3>
              <p className="font-['Poppins',sans-serif] text-[#2d2d2d] text-[18px] leading-[32px] opacity-50">
                Spring Boot lets you build and deploy production‑ready Java applications quickly by removing boilerplate and handling configuration automatically
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <h3 className="font-['Poppins',sans-serif] font-semibold text-[#2d2d2d] text-[18px] leading-[32px] mb-4">
                Interactive UI
              </h3>
              <p className="font-['Poppins',sans-serif] text-[#2d2d2d] text-[18px] leading-[32px] opacity-50">
                An interactive UI makes a website feel alive, guiding users seamlessly with responsive, engaging experiences
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <h3 className="font-['Poppins',sans-serif] font-semibold text-[#2d2d2d] text-[18px] leading-[32px] mb-4">
                Open Source
              </h3>
              <p className="font-['Poppins',sans-serif] text-[#2d2d2d] text-[18px] leading-[32px] opacity-50">
                Open source gives users the advantage of freedom, transparency, and community‑driven innovation with software they can trust and improve.

              </p>
            </div>

            {/* Feature 4 */}
            <div className="text-center">
              <h3 className="font-['Poppins',sans-serif] font-semibold text-[#2d2d2d] text-[18px] leading-[32px] mb-4">
                Hosted on Vercel
              </h3>
              <p className="font-['Poppins',sans-serif] text-[#2d2d2d] text-[18px] leading-[32px] opacity-50">
                Hosted on Vercel ensures fast, reliable, and globally optimized delivery for a seamless user experience
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}