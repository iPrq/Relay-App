import { Search, Plus, ChevronDown, User, CreditCard, Truck, Bell, Shield } from 'lucide-react';

interface MessagesPanelProps {
  onSelectMessage: (messageId: string) => void;
  selectedMessage: string | null;
  section: string;
}

export function MessagesPanel({ onSelectMessage, selectedMessage, section }: MessagesPanelProps) {
  // Different items based on selected section
  const getItems = () => {
    if (section === 'settings') {
      return [
        { id: 'my-account', title: 'My Account', icon: User },
        { id: 'billing', title: 'Billing', icon: CreditCard },
        { id: 'shipping', title: 'Shipping', icon: Truck },
        { id: 'notifications', title: 'Notifications', icon: Bell },
        { id: 'privacy', title: 'Privacy & Security', icon: Shield },
      ];
    }
    // Default messages items
    return [
      { id: 'general', title: 'General Messages', icon: User },
    ];
  };

  const items = getItems();
  const panelTitle = section === 'settings' ? 'Settings' : 'Messages';

  return (
    <div className="bg-white flex flex-col h-full overflow-hidden shadow-[1px_0px_0px_0px_rgba(0,0,0,0.08)] shrink-0 w-[349px]">
      {/* Header */}
      <div className="flex flex-col items-start shrink-0">
        <div className="flex items-center justify-between p-[24px] w-full">
          <div className="flex gap-[10px] items-center">
            <div className="flex gap-[6px] items-center text-black">
              <p className="text-[20px] leading-[1.5]">{panelTitle}</p>
              <ChevronDown size={15} />
            </div>
            {section !== 'settings' && (
              <div className="bg-[#edf2f7] flex items-center px-[8px] py-[2px] rounded-[24px]">
                <p className="text-[12px] leading-[1.5] text-black">12</p>
              </div>
            )}
          </div>
          {section !== 'settings' && (
            <button className="bg-[#a727ce] flex items-center justify-center rounded-[30px] shadow-[0px_0px_15px_0px_rgba(65,62,189,0.24)] size-[40px] hover:bg-[#8f1fb3] transition-colors">
              <Plus size={20} className="text-white" />
            </button>
          )}
        </div>
        <div className="bg-black h-px opacity-[0.08] w-full" />
      </div>

      {/* Search */}
      <div className="px-[24px] py-[12px]">
        <div className="bg-[#f3f3f3] flex gap-[10px] items-center px-[20px] py-[10px] rounded-[12px] w-full">
          <Search size={14} className="opacity-40 text-black" />
          <input
            type="text"
            placeholder="Search messages"
            className="bg-transparent text-[14px] leading-[1.5] opacity-40 outline-none text-black placeholder:text-black w-full"
          />
        </div>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto px-[16px]">
        {items.map((item) => {
          const Icon = item.icon;
          const isSelected = selectedMessage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectMessage(item.id)}
              className={`w-full rounded-[12px] p-[12px] flex gap-[16px] items-center transition-colors ${
                isSelected ? 'bg-[#dedcff]' : 'bg-white hover:bg-[#f3f3f3]'
              }`}
            >
              <div className={`flex items-center justify-center rounded-[12px] size-[48px] ${
                isSelected ? 'bg-[#a727ce]' : 'bg-[rgba(216,216,216,0.6)]'
              }`}>
                <Icon size={24} className={isSelected ? 'text-white' : 'text-black'} />
              </div>
              <div className="flex-1 text-left">
                <p className="text-black">{item.title}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}