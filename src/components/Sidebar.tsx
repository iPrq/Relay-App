import { Home, MessageSquare, Search, Calendar, Settings } from 'lucide-react';
import { LogoIcon } from './Logo';

interface SidebarProps {
  onSelectSection: (section: string) => void;
  selectedSection: string;
}

function Logo() {
  return (
    <div className="bg-[#a727ce] overflow-clip relative rounded-[14px] shrink-0 size-[56px] flex items-center justify-center">
      <LogoIcon />
    </div>
  );
}

export function Sidebar({ onSelectSection, selectedSection }: SidebarProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'messages', icon: MessageSquare, label: 'Messages' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'calendar', icon: Calendar, label: 'Calendar' },
  ];

  return (
    <div className="bg-[#dedcff] flex flex-col h-full items-center justify-between pb-[24px] pt-[16px] px-[16px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.08)] shrink-0 w-[88px]">
      <div className="flex flex-col gap-[48px] items-center">
        <Logo />
        <div className="flex flex-col gap-[32px] items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = selectedSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className={`transition-colors ${
                  isActive ? 'text-[#a727ce]' : 'text-black hover:text-[#a727ce]'
                }`}
                aria-label={item.label}
              >
                <Icon size={24} strokeWidth={isActive ? 2 : 1.5} />
              </button>
            );
          })}
        </div>
      </div>
      <button
        onClick={() => onSelectSection('settings')}
        className={`transition-colors ${
          selectedSection === 'settings' ? 'text-[#a727ce]' : 'text-black hover:text-[#a727ce]'
        }`}
        aria-label="Settings"
      >
        <Settings size={24} strokeWidth={selectedSection === 'settings' ? 2 : 1.5} />
      </button>
    </div>
  );
}
