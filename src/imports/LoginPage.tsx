import svgPaths from "./svg-ctlpuu1v81";

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
    <div className="bg-[#a727ce] h-[54px] relative rounded-[10px] shrink-0 w-[153px]" data-name="Secondary CTA - Log in">
      <div className="absolute bg-[#a727ce] h-[54px] left-0 rounded-[10px] top-0 w-[153px]" data-name="Hover" />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[32px] leading-[32px] left-1/2 not-italic text-[18px] text-center text-white top-[calc(50%-16px)] translate-x-[-50%] w-[53px]">Log in</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[30px] items-center relative shrink-0" data-name="Frame">
      <p className="font-['Poppins:Regular',sans-serif] h-[33px] leading-[32px] not-italic relative shrink-0 text-[#2d2d2d] text-[18px] w-[68px]">Sign Up</p>
      <SecondaryCtaLogIn />
    </div>
  );
}

function TopBar1280Px() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Top Bar 1280px">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[100px] py-[23px] relative w-full">
          <Logo1 />
          <Frame />
        </div>
      </div>
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
      <p className="font-['Poppins:Bold',sans-serif] h-[19px] leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[20px] uppercase w-[109px]">petworld</p>
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

function Frame1() {
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

function Frame2() {
  return (
    <div className="absolute h-[35px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[1080px]" data-name="Frame">
      <Logo3 />
      <Frame1 />
      <SocialsIcons />
    </div>
  );
}

function Footer1280Px() {
  return (
    <div className="bg-white h-[135px] overflow-clip relative shrink-0 w-full" data-name="Footer 1280px">
      <Frame2 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1440px]">
      <TopBar1280Px />
      <Footer1280Px />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[56px] min-w-[120px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[16px] py-[12px] relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#b3b3b3] text-[16px]">Value</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input Field">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content]">Email</p>
      <Input />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white h-[54px] min-w-[120px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[16px] py-[12px] relative size-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#b3b3b3] text-[16px]">Value</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[98px] items-start relative shrink-0 w-full" data-name="Input Field">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content]">Password</p>
      <Input1 />
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-[#a727ce] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#f5f5f5] text-[16px] text-nowrap">Sign In</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#2c2c2c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Button Group">
      <Button />
    </div>
  );
}

function TextLink() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Text Link">
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[1.4] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] text-nowrap underline">Forgot password?</p>
    </div>
  );
}

function FormLogIn() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[30px] h-[552px] items-start min-w-[320px] pb-[24px] pt-[50px] px-[24px] relative rounded-[20px] shrink-0 w-[486px]" data-name="Form Log In">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[80px] leading-[1.2] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-[409px]">Login To Relay</p>
      <InputField />
      <InputField1 />
      <ButtonGroup />
      <TextLink />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center p-[10px] relative shrink-0">
      <FormLogIn />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#dedcff] h-[804px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[467px] py-[116px] relative size-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-10px] p-[10px] top-[90px] w-[1460px]">
      <Frame8 />
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="bg-white relative size-full" data-name="Login Page">
      <Frame3 />
      <Frame6 />
    </div>
  );
}