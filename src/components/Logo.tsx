import svgPaths from "../imports/svg-2qeczk8x7z";

export function LogoIcon() {
  return (
    <div className="relative w-[35px] h-[35px] shrink-0">
      <div className="absolute inset-0">
        <svg className="absolute top-[9px] left-[1px] w-[32.34px] h-[17.74px]" fill="none" preserveAspectRatio="none" viewBox="0 0 32.3414 17.7416">
          <path d={svgPaths.p17bba200} fill="#2D2D2D" />
        </svg>
        <svg className="absolute top-[10.08px] left-[6.94px] w-[20.48px] h-[2.8px]" fill="none" preserveAspectRatio="none" viewBox="0 0 20.48 2.8">
          <path d={svgPaths.pe420800} fill="white" />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <p className="font-['Poppins',sans-serif] font-semibold text-[6px] leading-[6px]">12kg</p>
        </div>
      </div>
    </div>
  );
}

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <div 
      className="flex items-center gap-[10px] cursor-pointer" 
      onClick={onClick}
    >
      <LogoIcon />
      <p className="font-['Poppins',sans-serif] font-bold text-[20px] leading-[20px] text-[#2d2d2d] uppercase">
        Relay
      </p>
    </div>
  );
}
