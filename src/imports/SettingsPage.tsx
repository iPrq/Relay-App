import imgFrame10 from "figma:asset/fd0913833350abd14f3451ef1b17f2cefac73f9d.png";

function Logo() {
  return (
    <div className="bg-[#a727ce] overflow-clip relative rounded-[14px] shrink-0 size-[56px]" data-name="Logo">
      <p className="absolute font-['Asap:Bold',sans-serif] font-bold h-[31.5px] leading-[1.5] left-[20.13px] text-[#dedcff] text-[21px] top-[12.25px] w-[15.75px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Q
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center justify-center leading-[normal] not-italic relative shrink-0 text-[24px] text-nowrap">
      <p className="font-['Font_Awesome_6_Pro:Light',sans-serif] relative shrink-0 text-black">home</p>
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] relative shrink-0 text-[#a727ce]">messages</p>
      <p className="font-['Font_Awesome_6_Pro:Light',sans-serif] relative shrink-0 text-black">search</p>
      <p className="font-['Font_Awesome_6_Pro:Light',sans-serif] relative shrink-0 text-black">calendar-day</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center justify-center relative shrink-0">
      <Logo />
      <Frame />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-[#dedcff] content-stretch flex flex-col h-[1024px] items-center justify-between overflow-clip pb-[24px] pt-[16px] px-[16px] relative rounded-[10px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.08)] shrink-0" data-name="Sidebar">
      <Frame1 />
      <p className="font-['Font_Awesome_6_Pro:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap">gear</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute content-stretch flex items-center left-[-10px] p-[10px] top-[-10px]">
      <Sidebar />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center not-italic relative shrink-0 text-black text-nowrap">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.5] relative shrink-0 text-[20px]">Messages</p>
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] relative shrink-0 text-[15px]">angle-down</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#edf2f7] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[24px] shrink-0">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-black text-nowrap">12</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame7 />
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#a727ce] overflow-clip relative rounded-[30px] shadow-[0px_0px_15px_0px_rgba(65,62,189,0.24)] shrink-0 size-[40px]">
      <p className="absolute font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] left-[11.25px] not-italic text-[20px] text-white top-[10px] w-[17.5px]">plus</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center justify-between p-[24px] relative shrink-0 w-[349px]" data-name="Content">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Header">
      <Content />
      <div className="bg-black h-px opacity-[0.08] shrink-0 w-[349px]" data-name="Divider" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f3f3f3] h-[48px] relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center not-italic px-[20px] py-[10px] relative size-full text-[14px] text-black text-nowrap">
          <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] opacity-40 relative shrink-0">search</p>
          <p className="font-['Metropolis:Regular',sans-serif] leading-[1.5] opacity-40 relative shrink-0">Search messages</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[48px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[rgba(216,216,216,0.6)] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgFrame10} />
      </div>
    </div>
  );
}

function Frame9() {
  return <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px shrink-0" />;
}

function MessageComponent() {
  return (
    <div className="bg-[#dedcff] relative rounded-[12px] shrink-0 w-full" data-name="Message Component">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[12px] relative w-full">
          <Frame8 />
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function MessageList() {
  return (
    <div className="h-[740px] relative shrink-0 w-full" data-name="Message List">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[16px] py-0 relative size-full">
          <MessageComponent />
        </div>
      </div>
    </div>
  );
}

function GlobalList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Global List">
      <Frame6 />
      <MessageList />
    </div>
  );
}

function MessagesPanel() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1024px] items-center overflow-clip relative shadow-[1px_0px_0px_0px_rgba(0,0,0,0.08)] shrink-0 w-[349px]" data-name="Messages Panel">
      <Header />
      <GlobalList />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <MessagesPanel />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex items-center left-[78px] p-[10px] top-[-10px]">
      <Frame12 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[179px] top-[182px] w-[189px]">
      <p className="basis-0 font-['Poppins:Medium',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-black">My Account</p>
    </div>
  );
}

function Frame14() {
  return <div className="absolute h-[941px] left-[437px] top-[83px] w-[1003px]" />;
}

function Frame15() {
  return <div className="absolute h-[83px] left-[437px] top-0 w-[1003px]" />;
}

export default function SettingsPage() {
  return (
    <div className="bg-white relative size-full" data-name="Settings Page">
      <Frame11 />
      <Frame10 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
    </div>
  );
}