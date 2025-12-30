import { User, CreditCard } from 'lucide-react';

export function BillingSection() {
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
          <h2 className="text-[28px] mb-[8px] text-black">Billing Address</h2>
          <p className="text-gray-500 mb-[32px]">Manage your billing information</p>

          <form className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[8px]">
              <label htmlFor="cardName" className="text-[14px] text-black">
                Name on Card
              </label>
              <input
                id="cardName"
                type="text"
                placeholder="John Doe"
                className="bg-white border border-black/[0.12] rounded-[8px] px-[16px] py-[12px] text-black outline-none focus:border-[#a727ce] focus:ring-2 focus:ring-[#a727ce]/20 transition-all placeholder:text-gray-400"
              />
            </div>

            <div className="flex flex-col gap-[8px]">
              <label htmlFor="address" className="text-[14px] text-black">
                Street Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="123 Main St"
                className="bg-white border border-black/[0.12] rounded-[8px] px-[16px] py-[12px] text-black outline-none focus:border-[#a727ce] focus:ring-2 focus:ring-[#a727ce]/20 transition-all placeholder:text-gray-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="city" className="text-[14px] text-black">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="San Francisco"
                  className="bg-white border border-black/[0.12] rounded-[8px] px-[16px] py-[12px] text-black outline-none focus:border-[#a727ce] focus:ring-2 focus:ring-[#a727ce]/20 transition-all placeholder:text-gray-400"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="state" className="text-[14px] text-black">
                  State
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder="CA"
                  className="bg-white border border-black/[0.12] rounded-[8px] px-[16px] py-[12px] text-black outline-none focus:border-[#a727ce] focus:ring-2 focus:ring-[#a727ce]/20 transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="zip" className="text-[14px] text-black">
                  ZIP Code
                </label>
                <input
                  id="zip"
                  type="text"
                  placeholder="94103"
                  className="bg-white border border-black/[0.12] rounded-[8px] px-[16px] py-[12px] text-black outline-none focus:border-[#a727ce] focus:ring-2 focus:ring-[#a727ce]/20 transition-all placeholder:text-gray-400"
                />
              </div>
              <div className="flex flex-col gap-[8px]">
                <label htmlFor="country" className="text-[14px] text-black">
                  Country
                </label>
                <input
                  id="country"
                  type="text"
                  placeholder="United States"
                  className="bg-white border border-black/[0.12] rounded-[8px] px-[16px] py-[12px] text-black outline-none focus:border-[#a727ce] focus:ring-2 focus:ring-[#a727ce]/20 transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="flex gap-[12px] pt-[8px]">
              <button
                type="submit"
                className="bg-[#a727ce] text-white px-[24px] py-[12px] rounded-[8px] hover:bg-[#8f1fb3] transition-colors"
              >
                Save Changes
              </button>
              <button
                type="button"
                className="bg-white border border-black/[0.12] text-black px-[24px] py-[12px] rounded-[8px] hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}