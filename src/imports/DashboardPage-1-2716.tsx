import imgFrame10 from "figma:asset/6411c4b4d6a46f68f713a97b4adc93bc3cdf9a53.png";
import imgFrame11 from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";

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

function Frame48() {
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

function Frame9() {
  return <div className="bg-[#d8d8d8] rounded-[12px] shrink-0 size-[48px]" />;
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 text-[14px] text-black w-full">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">Elmer Laverty</p>
      <p className="opacity-30 relative shrink-0 text-nowrap">12m</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:SemiBold',sans-serif] items-start leading-[1.5] not-italic relative shrink-0 w-full">
      <Frame12 />
      <p className="relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] w-full">Haha oh man 🔥</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame14 />
    </div>
  );
}

function MessageComponent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Component">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[12px] relative w-full">
          <Frame9 />
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return <div className="bg-[#d8d8d8] rounded-[12px] shrink-0 size-[48px]" />;
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 text-[14px] text-black w-full">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">Florencio Dorrance</p>
      <p className="opacity-30 relative shrink-0 text-nowrap">24m</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:SemiBold',sans-serif] items-start leading-[1.5] not-italic relative shrink-0 w-full">
      <Frame15 />
      <p className="relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] w-full">woohoooo</p>
    </div>
  );
}

function Frame13() {
  return <div className="content-stretch flex gap-[8px] items-start shrink-0" />;
}

function Frame19() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame16 />
      <Frame13 />
    </div>
  );
}

function MessageComponent1() {
  return (
    <div className="bg-[rgba(97,94,240,0.06)] h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="Message Component">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
          <Frame11 />
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return <div className="bg-[#d8d8d8] rounded-[12px] shrink-0 size-[48px]" />;
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 text-[14px] text-black w-full">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">Lavern Laboy</p>
      <p className="opacity-30 relative shrink-0 text-nowrap">1h</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:SemiBold',sans-serif] items-start leading-[1.5] not-italic relative shrink-0 w-full">
      <Frame27 />
      <p className="relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] w-full">{`Haha that's terrifying 😂`}</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame28 />
    </div>
  );
}

function MessageComponent2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Component">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[12px] relative w-full">
          <Frame26 />
          <Frame29 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return <div className="bg-[#d8d8d8] rounded-[12px] shrink-0 size-[48px]" />;
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 text-[14px] text-black w-full">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">Titus Kitamura</p>
      <p className="opacity-30 relative shrink-0 text-nowrap">5h</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:SemiBold',sans-serif] items-start leading-[1.5] not-italic relative shrink-0 w-full">
      <Frame31 />
      <p className="relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] w-full">omg, this is amazing</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame32 />
    </div>
  );
}

function MessageComponent3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Component">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[12px] relative w-full">
          <Frame30 />
          <Frame33 />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return <div className="bg-[#d8d8d8] rounded-[12px] shrink-0 size-[48px]" />;
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 text-[14px] text-black w-full">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">Geoffrey Mott</p>
      <p className="opacity-30 relative shrink-0 text-nowrap">2d</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:SemiBold',sans-serif] items-start leading-[1.5] not-italic relative shrink-0 w-full">
      <Frame35 />
      <p className="relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] w-full">aww 😍</p>
    </div>
  );
}

function Frame37() {
  return <div className="content-stretch flex gap-[8px] items-start shrink-0" />;
}

function Frame38() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function MessageComponent4() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Message Component">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
          <Frame34 />
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return <div className="bg-[#d8d8d8] rounded-[12px] shrink-0 size-[48px]" />;
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 text-[14px] text-black w-full">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">Alfonzo Schuessler</p>
      <p className="opacity-30 relative shrink-0 text-nowrap">1m</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:SemiBold',sans-serif] items-start leading-[1.5] not-italic relative shrink-0 w-full">
      <Frame40 />
      <p className="relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] w-full">perfect!</p>
    </div>
  );
}

function Frame42() {
  return <div className="content-stretch flex gap-[8px] items-start shrink-0" />;
}

function Frame54() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function MessageComponent5() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Message Component">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[12px] relative size-full">
          <Frame39 />
          <Frame54 />
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return <div className="bg-[#d8d8d8] rounded-[12px] shrink-0 size-[48px]" />;
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 text-[14px] text-black w-full">
      <p className="basis-0 grow min-h-px min-w-px relative shrink-0">Full name here</p>
      <p className="opacity-30 relative shrink-0 text-nowrap">5h</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col font-['Poppins:SemiBold',sans-serif] items-start leading-[1.5] not-italic relative shrink-0 w-full">
      <Frame56 />
      <p className="relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] w-full">omg, this is amazing</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame57 />
    </div>
  );
}

function MessageComponent6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Component">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[12px] relative w-full">
          <Frame55 />
          <Frame58 />
        </div>
      </div>
    </div>
  );
}

function MessageList() {
  return (
    <div className="h-[740px] relative shrink-0 w-full" data-name="Message List">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-0 relative size-full">
          <MessageComponent />
          <MessageComponent1 />
          <MessageComponent2 />
          <MessageComponent3 />
          <MessageComponent4 />
          <MessageComponent5 />
          <MessageComponent6 />
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

function Frame49() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <MessagesPanel />
    </div>
  );
}

function Frame47() {
  return (
    <div className="absolute content-stretch flex items-center left-[78px] p-[10px] top-[-10px]">
      <Frame49 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-[10px] size-full" src={imgFrame10} />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[10px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <circle cx="5" cy="5" fill="var(--fill-0, #68D391)" id="Ellipse 1" r="5" />
        </svg>
      </div>
      <p className="font-['Metropolis:Semi_Bold',sans-serif] leading-[1.5] not-italic opacity-60 relative shrink-0 text-[12px] text-black text-nowrap">Online</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Metropolis:Semi_Bold',sans-serif] leading-[1.25] not-italic relative shrink-0 text-[20px] text-black text-nowrap">Florencio Dorrance</p>
      <Frame18 />
    </div>
  );
}

function UserContent() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="User Content">
      <Frame59 />
      <Frame17 />
    </div>
  );
}

function CallButton() {
  return (
    <div className="bg-[rgba(97,94,240,0.1)] content-stretch flex gap-[8px] items-center not-italic px-[16px] py-[10px] relative rounded-[8px] shrink-0 text-[#a727ce] text-[16px] text-nowrap" data-name="Call Button">
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] relative shrink-0">phone</p>
      <p className="font-['Metropolis:Semi_Bold',sans-serif] leading-[1.25] relative shrink-0">Call</p>
    </div>
  );
}

function PanelHeader() {
  return (
    <div className="content-stretch flex h-[83px] items-center justify-between p-[24px] relative shrink-0 w-[640px]" data-name="Panel Header">
      <UserContent />
      <CallButton />
    </div>
  );
}

function Frame60() {
  return (
    <div className="relative rounded-[8.333px] shrink-0 size-[40px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8.333px] size-full" src={imgFrame11} />
    </div>
  );
}

function MessageItem() {
  return (
    <div className="bg-[#dedcff] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Message Item">
      <p className="font-['Metropolis:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black text-nowrap">omg, this is amazing</p>
    </div>
  );
}

function MessageItem1() {
  return (
    <div className="bg-[#dedcff] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Message Item">
      <p className="font-['Metropolis:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black text-nowrap">perfect! ✅</p>
    </div>
  );
}

function MessageItem2() {
  return (
    <div className="bg-[#dedcff] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Message Item">
      <p className="font-['Metropolis:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black text-nowrap">Wow, this is really epic</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <MessageItem />
      <MessageItem1 />
      <MessageItem2 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame60 />
      <Frame20 />
    </div>
  );
}

function MessageItem3() {
  return (
    <div className="bg-[#a727ce] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Message Item">
      <p className="font-['Metropolis:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-nowrap text-white">How are you?</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <MessageItem3 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full">
      <Frame61 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="relative rounded-[8.333px] shrink-0 size-[40px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8.333px] size-full" src={imgFrame11} />
    </div>
  );
}

function MessageItem4() {
  return (
    <div className="bg-[#dedcff] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Message Item">
      <p className="font-['Metropolis:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black text-nowrap">just ideas for next time</p>
    </div>
  );
}

function MessageItem5() {
  return (
    <div className="bg-[#dedcff] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Message Item">
      <p className="font-['Metropolis:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black text-nowrap">{`I'll be there in 2 mins ⏰`}</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <MessageItem4 />
      <MessageItem5 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame62 />
      <Frame63 />
    </div>
  );
}

function MessageItem6() {
  return (
    <div className="bg-[#a727ce] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Message Item">
      <p className="font-['Metropolis:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-nowrap text-white">woohoooo</p>
    </div>
  );
}

function MessageItem7() {
  return (
    <div className="bg-[#a727ce] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Message Item">
      <p className="font-['Metropolis:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-nowrap text-white">Haha oh man</p>
    </div>
  );
}

function MessageItem8() {
  return (
    <div className="bg-[#a727ce] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Message Item">
      <p className="font-['Metropolis:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-nowrap text-white">{`Haha that's terrifying 😂`}</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0">
      <MessageItem6 />
      <MessageItem7 />
      <MessageItem8 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-full">
      <Frame64 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="relative rounded-[8.333px] shrink-0 size-[40px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[8.333px] size-full" src={imgFrame11} />
    </div>
  );
}

function MessageItem9() {
  return (
    <div className="bg-[#dedcff] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Message Item">
      <p className="font-['Metropolis:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black text-nowrap">aww</p>
    </div>
  );
}

function MessageItem10() {
  return (
    <div className="bg-[#dedcff] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Message Item">
      <p className="font-['Metropolis:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black text-nowrap">omg, this is amazing</p>
    </div>
  );
}

function MessageItem11() {
  return (
    <div className="bg-[#dedcff] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[12px] shrink-0" data-name="Message Item">
      <p className="font-['Metropolis:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black text-nowrap">woohoooo 🔥</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <MessageItem9 />
      <MessageItem10 />
      <MessageItem11 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Frame65 />
      <Frame66 />
    </div>
  );
}

function MessageList1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[858px] items-start p-[24px] relative shrink-0 w-[640px]" data-name="Message List">
      <Frame21 />
      <Frame22 />
      <Frame23 />
      <Frame24 />
      {[...Array(2).keys()].map((_, i) => (
        <Frame25 key={i} />
      ))}
    </div>
  );
}

function TopContent() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] h-[952px] items-start relative shrink-0" data-name="Top Content">
      <PanelHeader />
      <div className="bg-black h-px opacity-[0.08] shrink-0 w-[640px]" data-name="Divider" />
      <MessageList1 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <TopContent />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#dedcff] h-[48px] relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between not-italic px-[20px] py-[10px] relative size-full text-nowrap">
          <p className="font-['Metropolis:Regular',sans-serif] leading-[1.5] opacity-40 relative shrink-0 text-[14px] text-black">Type a message</p>
          <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] relative shrink-0 text-[#615ef0] text-[20px]">paper-plane</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dedcff] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[569px]">
      <Frame8 />
    </div>
  );
}

function MessageBox() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Box">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[24px] items-center p-[24px] relative w-full">
          <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic opacity-40 relative shrink-0 text-[20px] text-black text-nowrap">paperclip</p>
          <Frame52 />
        </div>
      </div>
    </div>
  );
}

function MessagePanel() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[1024px] items-start justify-between overflow-clip relative shrink-0 w-[661px]" data-name="Message Panel">
      <Frame51 />
      <MessageBox />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <MessagePanel />
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute content-stretch flex items-center left-[427px] p-[10px] top-[-10px]">
      <Frame50 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <p className="font-['Metropolis:Semi_Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[20px] text-black text-nowrap">Directory</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame67 />
    </div>
  );
}

function IconButton() {
  return (
    <div className="bg-[#dedcff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[30px] shrink-0 size-[40px]" data-name="Icon Button">
      <p className="font-['Font_Awesome_6_Pro:Solid',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a727ce] text-[20px] text-nowrap">ellipsis-v</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="h-[80px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <Frame68 />
          <IconButton />
        </div>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Header">
      <Content1 />
      <div className="bg-black h-px opacity-[0.08] shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Header1 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-[#edf2f7] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[24px] shrink-0">
      <p className="font-['Metropolis:Semi_Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-black text-nowrap">6</p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Section Title">
      <p className="font-['Metropolis:Semi_Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black text-nowrap">Team Members</p>
      <Frame69 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[48px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgFrame11} />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Metropolis:Semi_Bold',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black">Florencio Dorrance</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame71 />
      <p className="font-['Metropolis:Semi_Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] w-full">Market Development Manager</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame72 />
    </div>
  );
}

function MessageComponent7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Component">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[12px] relative w-full">
          <Frame70 />
          <Frame73 />
        </div>
      </div>
    </div>
  );
}

function Frame74() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[48px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgFrame11} />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Metropolis:Semi_Bold',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black">Benny Spanbauer</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame75 />
      <p className="font-['Metropolis:Semi_Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] w-full">Area Sales Manager</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame76 />
    </div>
  );
}

function MessageComponent8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Component">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[12px] relative w-full">
          <Frame74 />
          <Frame77 />
        </div>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[48px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgFrame11} />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Metropolis:Semi_Bold',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black">Jamel Eusebio</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame79 />
      <p className="font-['Metropolis:Semi_Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] w-full">Administrator</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame80 />
    </div>
  );
}

function MessageComponent9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Component">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[12px] relative w-full">
          <Frame78 />
          <Frame81 />
        </div>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[48px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgFrame11} />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Metropolis:Semi_Bold',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black">Lavern Laboy</p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame83 />
      <p className="font-['Metropolis:Semi_Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] w-full">Account Executive</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame84 />
    </div>
  );
}

function MessageComponent10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Component">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[12px] relative w-full">
          <Frame82 />
          <Frame85 />
        </div>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[48px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgFrame11} />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Metropolis:Semi_Bold',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black">Alfonzo Schuessler</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame87 />
      <p className="font-['Metropolis:Semi_Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] w-full">Proposal Writer</p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame88 />
    </div>
  );
}

function MessageComponent11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Component">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[12px] relative w-full">
          <Frame86 />
          <Frame89 />
        </div>
      </div>
    </div>
  );
}

function Frame90() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[48px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] size-full" src={imgFrame11} />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Metropolis:Semi_Bold',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black">Daryl Nehls</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame91 />
      <p className="font-['Metropolis:Semi_Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] w-full">Nursing Assistant</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame92 />
    </div>
  );
}

function MessageComponent12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Message Component">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-start p-[12px] relative w-full">
          <Frame90 />
          <Frame93 />
        </div>
      </div>
    </div>
  );
}

function TeamMembersSection() {
  return (
    <div className="bg-white relative w-full" data-name="Team Members Section">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-0 relative w-full">
          <SectionTitle />
          <MessageComponent7 />
          <MessageComponent8 />
          <MessageComponent9 />
          <MessageComponent10 />
          <MessageComponent11 />
          <MessageComponent12 />
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="basis-0 flex grow h-[502.534px] items-center justify-center min-h-px min-w-px relative shrink-0" style={{ "--transform-inner-width": "161.40625", "--transform-inner-height": "255" } as React.CSSProperties}>
        <div className="flex-none rotate-[0.085deg] w-full">
          <TeamMembersSection />
        </div>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="bg-[#edf2f7] content-stretch flex flex-col items-start px-[8px] py-[2px] relative rounded-[24px] shrink-0">
      <p className="font-['Metropolis:Semi_Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[12px] text-black text-nowrap">125</p>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Section Title">
      <p className="font-['Metropolis:Semi_Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-black text-nowrap">Files</p>
      <Frame94 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="bg-[#fff5f5] content-stretch flex flex-col items-center justify-center overflow-clip p-[17px] relative rounded-[12px] shrink-0 size-[48px]">
      <p className="font-['Font_Awesome_6_Pro:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f56565] text-[24px] text-nowrap">file-pdf</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Metropolis:Semi_Bold',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black">i9.pdf</p>
    </div>
  );
}

function MetaDetails() {
  return (
    <div className="content-stretch flex font-['Metropolis:Semi_Bold',sans-serif] gap-[10px] items-start leading-[1.5] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-nowrap" data-name="Meta Details">
      <p className="relative shrink-0">PDF</p>
      <p className="relative shrink-0">9mb</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame96 />
      <MetaDetails />
    </div>
  );
}

function Frame98() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame97 />
    </div>
  );
}

function IconButton1() {
  return (
    <div className="bg-[#dedcff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[30px] shrink-0 size-[40px]" data-name="Icon Button">
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a727ce] text-[20px] text-nowrap">download</p>
    </div>
  );
}

function FileCard() {
  return (
    <div className="relative shrink-0 w-full" data-name="File Card">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[12px] relative w-full">
          <Frame95 />
          <Frame98 />
          <IconButton1 />
        </div>
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="bg-[#f0fff4] content-stretch flex flex-col items-center justify-center overflow-clip p-[17px] relative rounded-[12px] shrink-0 size-[48px]">
      <p className="font-['Font_Awesome_6_Pro:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#48bb78] text-[24px] text-nowrap">file-image</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Metropolis:Semi_Bold',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black">Screenshot-3817.png</p>
    </div>
  );
}

function MetaDetails1() {
  return (
    <div className="content-stretch flex font-['Metropolis:Semi_Bold',sans-serif] gap-[10px] items-start leading-[1.5] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-nowrap" data-name="Meta Details">
      <p className="relative shrink-0">PNG</p>
      <p className="relative shrink-0">4mb</p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame100 />
      <MetaDetails1 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame101 />
    </div>
  );
}

function IconButton2() {
  return (
    <div className="bg-[#dedcff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[30px] shrink-0 size-[40px]" data-name="Icon Button">
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a727ce] text-[20px] text-nowrap">download</p>
    </div>
  );
}

function FileCard1() {
  return (
    <div className="relative shrink-0 w-full" data-name="File Card">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[12px] relative w-full">
          <Frame99 />
          <Frame102 />
          <IconButton2 />
        </div>
      </div>
    </div>
  );
}

function Frame103() {
  return (
    <div className="bg-[#ebf8ff] content-stretch flex flex-col items-center justify-center overflow-clip p-[17px] relative rounded-[12px] shrink-0 size-[48px]">
      <p className="font-['Font_Awesome_6_Pro:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4299e1] text-[24px] text-nowrap">file-word</p>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Metropolis:Semi_Bold',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black">sharefile.docx</p>
    </div>
  );
}

function MetaDetails2() {
  return (
    <div className="content-stretch flex font-['Metropolis:Semi_Bold',sans-serif] gap-[10px] items-start leading-[1.5] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-nowrap" data-name="Meta Details">
      <p className="relative shrink-0">DOC</p>
      <p className="relative shrink-0">555kb</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame104 />
      <MetaDetails2 />
    </div>
  );
}

function Frame106() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame105 />
    </div>
  );
}

function IconButton3() {
  return (
    <div className="bg-[#dedcff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[30px] shrink-0 size-[40px]" data-name="Icon Button">
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a727ce] text-[20px] text-nowrap">download</p>
    </div>
  );
}

function FileCard2() {
  return (
    <div className="relative shrink-0 w-full" data-name="File Card">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[12px] relative w-full">
          <Frame103 />
          <Frame106 />
          <IconButton3 />
        </div>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="bg-[#faf5ff] content-stretch flex flex-col items-center justify-center overflow-clip p-[17px] relative rounded-[12px] shrink-0 size-[48px]">
      <p className="font-['Font_Awesome_6_Pro:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9f7aea] text-[24px] text-nowrap">file-excel</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Metropolis:Semi_Bold',sans-serif] grow leading-[1.5] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-black">Jerry-2020_I-9_Form.xxl</p>
    </div>
  );
}

function MetaDetails3() {
  return (
    <div className="content-stretch flex font-['Metropolis:Semi_Bold',sans-serif] gap-[10px] items-start leading-[1.5] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-nowrap" data-name="Meta Details">
      <p className="relative shrink-0">XXL</p>
      <p className="relative shrink-0">24mb</p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame108 />
      <MetaDetails3 />
    </div>
  );
}

function Frame110() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame109 />
    </div>
  );
}

function IconButton4() {
  return (
    <div className="bg-[#dedcff] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[30px] shrink-0 size-[40px]" data-name="Icon Button">
      <p className="font-['Font_Awesome_6_Pro:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#a727ce] text-[20px] text-nowrap">download</p>
    </div>
  );
}

function FileCard3() {
  return (
    <div className="relative shrink-0 w-full" data-name="File Card">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[12px] relative w-full">
          <Frame107 />
          <Frame110 />
          <IconButton4 />
        </div>
      </div>
    </div>
  );
}

function TeamMembersSection1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Team Members Section">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] py-0 relative w-full">
          <SectionTitle1 />
          <FileCard />
          <FileCard1 />
          <FileCard2 />
          <FileCard3 />
          <FileCard />
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <TeamMembersSection1 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] h-[1024px] items-start overflow-clip relative shadow-[1px_0px_0px_0px_rgba(0,0,0,0.08)] shrink-0 w-[362px]">
      <Frame43 />
      <Frame44 />
      <div className="bg-[rgba(0,0,0,0.08)] h-px shrink-0 w-full" />
      <Frame45 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="absolute content-stretch flex items-center left-[1068px] p-[10px] top-[-10px]">
      <Frame111 />
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="bg-white relative size-full" data-name="Dashboard PAGE">
      <Frame48 />
      <Frame47 />
      <Frame46 />
      <Frame53 />
    </div>
  );
}