import svgPaths from "./svg-usxmrcat81";

function LogoIllustration() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-px mt-[9px] place-items-start relative" data-name="Logo illustration">
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
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="Logo">
      <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0)] ml-0 mt-0 size-[35px]" data-name="Logo bg" />
      <LogoIllustration />
    </div>
  );
}

function Logo1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center leading-[0] relative shrink-0" data-name="Logo">
      <Logo />
      <div className="font-['Poppins:Bold',sans-serif] h-[19px] leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[20px] uppercase w-[109px]">
        <p className="mb-0">rELAY</p>
        <p>&nbsp;</p>
      </div>
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

function Frame() {
  return (
    <div className="h-[32px] relative shrink-0 w-[474px]" data-name="Frame">
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
    <div className="h-[30px] relative shrink-0 w-[180px]" data-name="Socials icons">
      <Facebook />
      <Linkedin />
      <Instagram1 />
      <Twitter />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[136px] items-start relative shrink-0 w-full" data-name="Frame">
      <Logo1 />
      <Frame />
      <SocialsIcons />
    </div>
  );
}

function Footer1280Px() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 overflow-clip px-[180px] py-[50px] top-[889px] w-[1440px]" data-name="Footer 1280px">
      <Frame2 />
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
    <div className="content-stretch flex gap-[10px] h-[35px] items-center relative shrink-0 w-full" data-name="Logo">
      <Logo2 />
      <p className="font-['Poppins:Bold',sans-serif] h-[19px] leading-[20px] not-italic relative shrink-0 text-[#2d2d2d] text-[20px] uppercase w-[109px]">relay</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[154px]">
      <Logo3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[-10px] p-[10px] top-[0.5px]">
      <p className="font-['Poppins:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#2d2d2d] text-[18px] text-nowrap">Sign Up</p>
    </div>
  );
}

function SecondaryCtaLogIn() {
  return (
    <div className="bg-[#a727ce] h-[54px] relative rounded-[10px] shrink-0 w-full" data-name="Secondary CTA - Log in">
      <div className="absolute bg-[#a727ce] h-[54px] left-0 rounded-[10px] top-0 w-[153px]" data-name="Hover" />
      <p className="absolute font-['Poppins:Regular',sans-serif] h-[32px] leading-[32px] left-1/2 not-italic text-[18px] text-center text-white top-[calc(50%-16px)] translate-x-[-50%] w-[53px]">Log in</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[88px] p-[10px] top-[-10px] w-[173px]">
      <SecondaryCtaLogIn />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[54px] relative shrink-0 w-[251px]" data-name="Frame">
      <Frame6 />
      <Frame5 />
    </div>
  );
}

function TopBar1280Px() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative shrink-0 w-full" data-name="Top Bar 1280px">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[100px] py-[23px] relative w-full">
          <Frame7 />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white min-w-[120px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[16px] py-[12px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#b3b3b3] text-[16px]">Value</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[80px] items-start relative shrink-0 w-full" data-name="Input Field">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content]">Email</p>
      <Input />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white min-w-[120px] relative rounded-[8px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center min-w-[inherit] px-[16px] py-[12px] relative w-full">
          <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-none min-h-px min-w-px not-italic relative shrink-0 text-[#b3b3b3] text-[16px]">Value</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[80px] items-start relative shrink-0 w-full" data-name="Input Field">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] min-w-full not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content]">Password</p>
      <Input1 />
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Check">
          <path d={svgPaths.p39be50} id="Icon" stroke="var(--stroke-0, #F5F5F5)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-[#2c2c2c] content-stretch flex items-center justify-center overflow-clip relative rounded-[4px] shrink-0 size-[16px]" data-name="Checkbox">
      <Check />
    </div>
  );
}

function CheckboxAndLabel() {
  return (
    <div className="content-stretch flex gap-[12px] items-center min-w-[120px] relative shrink-0" data-name="Checkbox and Label">
      <Checkbox />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[#1e1e1e] text-[16px]">Label</p>
    </div>
  );
}

function Space() {
  return <div className="shrink-0 size-[16px]" data-name="Space" />;
}

function DescriptionRow() {
  return (
    <div className="content-stretch flex gap-[12px] items-center min-w-[120px] relative shrink-0" data-name="Description Row">
      <Space />
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px not-italic relative shrink-0 text-[#757575] text-[16px]">Description</p>
    </div>
  );
}

function CheckboxField() {
  return (
    <div className="content-stretch flex flex-col h-[54px] items-start relative shrink-0 w-full" data-name="Checkbox Field">
      <CheckboxAndLabel />
      <DescriptionRow />
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-[#a727ce] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-none not-italic relative shrink-0 text-[#f5f5f5] text-[16px] text-nowrap">Register</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#2c2c2c] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[16px] h-[50px] items-center relative shrink-0 w-full" data-name="Button Group">
      <Button />
    </div>
  );
}

function FormRegister() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] h-[568px] items-start min-w-[320px] pb-[24px] pt-[25px] px-[24px] relative rounded-[20px] shrink-0 w-[475px]" data-name="Form Register">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[84px] leading-[1.2] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-[356px]">Register</p>
      {[...Array(2).keys()].map((_, i) => (
        <InputField key={i} />
      ))}
      <InputField1 />
      <CheckboxField />
      <ButtonGroup />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center p-[10px] relative shrink-0">
      <FormRegister />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#dedcff] relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[472px] py-[108px] relative w-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[1440px]">
      <TopBar1280Px />
      <Frame9 />
    </div>
  );
}

export default function RegisterPage() {
  return (
    <div className="bg-white relative size-full" data-name="Register Page">
      <Footer1280Px />
      <Frame4 />
    </div>
  );
}