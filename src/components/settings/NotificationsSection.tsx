import { Bell, User } from 'lucide-react';

export function NotificationsSection() {
  return (
    <div className="flex h-full">
      {/* Left Panel */}
      <div className="bg-white w-[280px] p-[32px] border-r border-black/[0.08] flex flex-col gap-[32px]">
        {/* Profile Image */}
        <div className="flex flex-col items-center gap-[16px]">
          <div className="relative">
            <div className="bg-[#a727ce] rounded-full size-[120px] flex items-center justify-center">
              <User size={48} className="text-white" />
            </div>
            <button className="absolute bottom-0 right-0 bg-white rounded-full p-[8px] shadow-lg border border-black/[0.08] hover:bg-gray-50 transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.333 2.00004C11.5081 1.82494 11.716 1.68605 11.9447 1.59129C12.1735 1.49653 12.4187 1.44775 12.6663 1.44775C12.914 1.44775 13.1592 1.49653 13.3879 1.59129C13.6167 1.68605 13.8246 1.82494 13.9997 2.00004C14.1748 2.17513 14.3137 2.383 14.4084 2.61178C14.5032 2.84055 14.552 3.08575 14.552 3.33337C14.552 3.58099 14.5032 3.82619 14.4084 4.05497C14.3137 4.28374 14.1748 4.49161 13.9997 4.66671L4.99967 13.6667L1.33301 14.6667L2.33301 11L11.333 2.00004Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="text-center">
            <p className="text-[20px] text-black">John Doe</p>
            <p className="text-[14px] text-gray-500">john.doe@example.com</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-[40px] overflow-y-auto">
        <div className="max-w-[600px]">
          <div className="flex items-center gap-[12px] mb-[8px]">
            <Bell size={28} className="text-[#a727ce]" />
            <h2 className="text-[28px] text-black">Notifications</h2>
          </div>
          <p className="text-gray-500 mb-[32px]">Manage how you receive notifications</p>
          
          <div className="flex flex-col gap-[16px]">
            <div className="flex items-center justify-between py-[12px] border-b border-black/[0.08]">
              <div>
                <p className="text-black">Email Notifications</p>
                <p className="text-[14px] text-gray-500">Receive email about your account activity</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-[44px] h-[24px] bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#a727ce]/20 rounded-full peer peer-checked:after:translate-x-[20px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[20px] after:w-[20px] after:transition-all peer-checked:bg-[#a727ce]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-[12px] border-b border-black/[0.08]">
              <div>
                <p className="text-black">Push Notifications</p>
                <p className="text-[14px] text-gray-500">Receive push notifications in your browser</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-[44px] h-[24px] bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#a727ce]/20 rounded-full peer peer-checked:after:translate-x-[20px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[20px] after:w-[20px] after:transition-all peer-checked:bg-[#a727ce]"></div>
              </label>
            </div>

            <div className="flex items-center justify-between py-[12px]">
              <div>
                <p className="text-black">SMS Notifications</p>
                <p className="text-[14px] text-gray-500">Receive text messages about important updates</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-[44px] h-[24px] bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#a727ce]/20 rounded-full peer peer-checked:after:translate-x-[20px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[20px] after:w-[20px] after:transition-all peer-checked:bg-[#a727ce]"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}