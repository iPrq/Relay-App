import svgPaths from "./svg-2qeczk8x7z";

function LogoIllustration() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-px mt-[9px] place-items-start relative" data-name="Logo illustration">
      <div className="[grid-area:1_/_1] h-[17.742px] ml-0 mt-0 relative w-[32.341px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.3414 17.7416">
          <path d={svgPaths.p17bba200} fill="var(--fill-0, #2D2D2D)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.8px] ml-[5.94px] mt-[1.08px] relative w-[20.48px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.48 2.8">
          <path d={svgPaths.pe420800} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center ml-[16px] mt-[9.97px] not-italic relative text-[6px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[14px]">
        <p className="leading-[6px]">12kg</p>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Logo">
      <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0)] ml-0 mt-0 size-[35px]" data-name="Logo bg" />
      <LogoIllustration />
    </div>
  );
}

function Logo1() {
  return (
    <div className="content-stretch flex gap-[10px] h-[35px] items-center relative shrink-0" data-name="Logo">
      <Logo />
      <p className="font-['Poppins:Bold',sans-serif] h-[19px] leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[20px] uppercase w-[109px]">relay</p>
    </div>
  );
}

function SecondaryCtaLogIn() {
  return (
    <div className="absolute bg-[#a727ce] h-[54px] right-0 rounded-[10px] top-1/2 translate-y-[-50%] w-[153px]" data-name="Secondary CTA - Log in">
      <div className="absolute bg-[#a727ce] h-[54px] left-0 rounded-[10px] top-0 w-[153px]" data-name="Hover" />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[32px] leading-[32px] left-1/2 not-italic text-[18px] text-center text-white top-[calc(50%-16px)] translate-x-[-50%] w-[53px]">Log in</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="h-[54px] relative shrink-0 w-[251px]" data-name="Frame">
      <p className="absolute bottom-[10.5px] font-['Poppins:Regular',sans-serif] leading-[32px] not-italic right-[251px] text-[#2d2d2d] text-[18px] top-[10.5px] translate-x-[100%] w-[68px]">Sign Up</p>
      <SecondaryCtaLogIn />
    </div>
  );
}

function TopBar1280Px() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-between left-0 overflow-clip px-[100px] py-[23px] top-[6px] w-[1440px]" data-name="Top Bar 1280px">
      <Logo1 />
      <Frame />
    </div>
  );
}

function Frame1() {
  return <div className="shrink-0 size-[100px]" />;
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] h-[90px] items-start relative shrink-0" data-name="Frame">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] h-[90.241px] justify-center leading-[0] not-italic opacity-50 relative shrink-0 text-[#2d2d2d] text-[18px] w-[466px]">
        <p className="leading-[32px]">{`Open Source Real Time Chat Application made using Java Springboot & React JS. `}</p>
      </div>
      <Frame1 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <Frame2 />
    </div>
  );
}

function PrimaryCtaGetStarted() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#a727ce] gap-[10px] h-[64px] items-center px-[50px] py-[16px] relative rounded-[10px] shrink-0 to-[#a727ce] w-[203px]" data-name="Primary CTA - Get Started">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[32px]">Get Started</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Frame">
      <PrimaryCtaGetStarted />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[41px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame12 />
      <Frame3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start ml-0 mt-0 p-[10px] relative w-[486px]">
      <Frame4 />
    </div>
  );
}

function Header() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Header">
      <Frame11 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start leading-[0] px-0 py-[10px] relative shrink-0 w-full" data-name="Header">
      <div className="font-['Poppins:SemiBold',sans-serif] leading-[90px] not-italic relative shrink-0 text-[80px] text-black w-[859px]">
        <p className="mb-0">{`Relay `}</p>
        <p>The Chat App</p>
      </div>
      <Header />
    </div>
  );
}

function Header1280Px() {
  return (
    <div className="absolute bg-[#dedcff] content-stretch flex flex-col items-start left-0 overflow-clip px-[180px] py-[70px] top-[127px] w-[1440px]" data-name="Header 1280px">
      <Header1 />
    </div>
  );
}

function LogoIllustration1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-px mt-[9px] place-items-start relative" data-name="Logo illustration">
      <div className="[grid-area:1_/_1] h-[17.742px] ml-0 mt-0 relative w-[32.341px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.3414 17.7416">
          <path d={svgPaths.p17bba200} fill="var(--fill-0, #2D2D2D)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] h-[2.8px] ml-[5.94px] mt-[1.08px] relative w-[20.48px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.48 2.8">
          <path d={svgPaths.pe420800} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center ml-[16px] mt-[9.97px] not-italic relative text-[6px] text-center text-white translate-x-[-50%] translate-y-[-50%] w-[14px]">
        <p className="leading-[6px]">12kg</p>
      </div>
    </div>
  );
}

function Logo2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Logo">
      <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0)] ml-0 mt-0 size-[35px]" data-name="Logo bg" />
      <LogoIllustration1 />
    </div>
  );
}

function Logo3() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-1/2 translate-y-[-50%]" data-name="Logo">
      <Logo2 />
      <p className="font-['Poppins:Bold',sans-serif] h-[19px] leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[20px] uppercase w-[109px]">Relay</p>
    </div>
  );
}

function Petworld() {
  return (
    <div className="absolute content-stretch flex items-center left-[41px] top-0" data-name="PETWORLD 2022">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2d2d2d] text-[18px] text-nowrap">
        <p className="leading-[32px]">Github Profile</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[32px] left-[290px] top-0 w-[474px]" data-name="Frame">
      <Petworld />
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-[199px] not-italic text-[#2d2d2d] text-[18px] text-nowrap top-[16px] translate-y-[-50%]">
        <p className="leading-[32px]">Privacy policy</p>
      </div>
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[32px] left-[357px] not-italic text-[#2d2d2d] text-[18px] text-nowrap top-0">Terms of use</p>
    </div>
  );
}

function Facebook() {
  return (
    <div className="absolute inset-[0_83.33%_0_0]" data-name="Facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Facebook">
          <mask height="30" id="mask0_1_396" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="0" y="0">
            <circle cx="15" cy="15" fill="var(--fill-0, white)" id="Ellipse" r="15" />
          </mask>
          <g mask="url(#mask0_1_396)">
            <path d={svgPaths.p28543180} fill="var(--fill-0, #2D2D2D)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Linkedin1() {
  return (
    <div className="absolute inset-[0_55.56%_0_27.78%]" data-name="linkedin (1) 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_393)" id="linkedin (1) 1">
          <path d={svgPaths.p15e4e400} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_393">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0_55.56%_0_27.78%]" data-name="Group">
      <Linkedin1 />
    </div>
  );
}

function Linkedin() {
  return (
    <div className="absolute contents inset-[0_55.56%_0_27.78%]" data-name="Linkedin">
      <Group />
      <div className="absolute inset-[0_55.56%_0_27.78%]" data-name="Ellipse">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <circle cx="15" cy="15" fill="var(--fill-0, #2D2D2D)" id="Ellipse" r="15" />
        </svg>
      </div>
    </div>
  );
}

function Instagram() {
  return (
    <div className="absolute inset-[23.33%_31.67%_23.33%_59.44%]" data-name="Instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_351)" id="Instagram">
          <path d={svgPaths.p354fddf0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p37daa200} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p187d21c0} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_351">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Instagram1() {
  return (
    <div className="absolute contents inset-[0_27.78%_0_55.56%]" data-name="Instagram">
      <div className="absolute bg-[#2d2d2d] inset-[0_27.78%_0_55.56%] rounded-[15px]" data-name="Rectangle" />
      <Instagram />
    </div>
  );
}

function Twitter() {
  return (
    <div className="absolute inset-[0_0_0_83.33%]" data-name="Twitter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Twitter">
          <mask height="30" id="mask0_1_346" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="30" x="0" y="0">
            <g clipPath="url(#clip0_1_346)" id="twitter">
              <path d={svgPaths.p3672400} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </mask>
          <g mask="url(#mask0_1_346)">
            <circle cx="15" cy="15" fill="var(--fill-0, #2D2D2D)" id="Ellipse" r="15" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_346">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SocialsIcons() {
  return (
    <div className="absolute h-[30px] left-[900px] top-0 w-[180px]" data-name="Socials icons">
      <Facebook />
      <Linkedin />
      <Instagram1 />
      <Twitter />
    </div>
  );
}

function Frame6() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Frame">
      <Logo3 />
      <Frame5 />
      <SocialsIcons />
    </div>
  );
}

function Footer1280Px() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 overflow-clip px-[180px] py-[50px] top-[1127px] w-[1440px]" data-name="Footer 1280px">
      <Frame6 />
    </div>
  );
}

function BestQualityPetFood() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[32px] not-italic place-items-start relative shrink-0 text-[#2d2d2d] text-[18px]" data-name="Best quality pet food">
      <p className="[grid-area:1_/_1] font-['Poppins:Regular',sans-serif] ml-[115px] mt-[40px] opacity-50 relative text-center translate-x-[-50%] w-[230px]">Super delicious food. Available in a range of delicious flavors.</p>
      <p className="[grid-area:1_/_1] font-['Poppins:SemiBold',sans-serif] ml-[17px] mt-0 relative w-[179px]">{`     Java Springboot `}</p>
    </div>
  );
}

function ToysAccessories() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[32px] not-italic place-items-start relative shrink-0 text-[#2d2d2d] text-[18px] text-center" data-name="Toys & Accessories">
      <p className="[grid-area:1_/_1] font-['Poppins:Regular',sans-serif] ml-[115px] mt-[47px] opacity-50 relative translate-x-[-50%] w-[230px]">Soft toys, chew toys, and rope toys. Strong, interactive, and fun.</p>
      <p className="[grid-area:1_/_1] font-['Poppins:SemiBold',sans-serif] ml-[115px] mt-0 relative text-nowrap translate-x-[-50%]">Interactive UI</p>
    </div>
  );
}

function PetsMedicalCare() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[32px] not-italic place-items-start relative shrink-0 text-[#2d2d2d] text-[18px]" data-name="Pets medical care">
      <p className="[grid-area:1_/_1] font-['Poppins:Regular',sans-serif] ml-[115px] mt-[47px] opacity-50 relative text-center translate-x-[-50%] w-[230px]">You can get a wide range of great treatments for your dog.</p>
      <p className="[grid-area:1_/_1] font-['Poppins:SemiBold',sans-serif] ml-[56px] mt-0 relative text-nowrap">{`Open Source `}</p>
    </div>
  );
}

function FullServiceGrooming() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[32px] not-italic place-items-start relative shrink-0 text-[#2d2d2d] text-[18px]" data-name="Full service grooming">
      <p className="[grid-area:1_/_1] font-['Poppins:Regular',sans-serif] ml-[115px] mt-[47px] opacity-50 relative text-center translate-x-[-50%] w-[230px]">{`It's the right time to groom your dog with a variety of treatments.`}</p>
      <p className="[grid-area:1_/_1] font-['Poppins:SemiBold',sans-serif] ml-[34px] mt-0 relative text-nowrap">Hosted on Vercel</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[60px] items-start leading-[0] relative shrink-0 w-full" data-name="Frame">
      <BestQualityPetFood />
      <ToysAccessories />
      <PetsMedicalCare />
      <FullServiceGrooming />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Features1280Px() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Features 1280px">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[170px] py-[129px] relative w-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[10px] relative w-full">
          <Features1280Px />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-20px] p-[10px] top-[707px] w-[1480px]">
      <Frame8 />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-white relative size-full" data-name="Landing Page">
      <TopBar1280Px />
      <Header1280Px />
      <Footer1280Px />
      <Frame10 />
    </div>
  );
}