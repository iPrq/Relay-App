import { ProfileSection } from './ProfileSection';
import { BillingSection } from './BillingSection';
import { ShippingSection } from './ShippingSection';
import { NotificationsSection } from './NotificationsSection';
import { PrivacySection } from './PrivacySection';

interface MainContentProps {
  section: string;
  selectedMessage?: string | null;
}

export function MainContent({ section, selectedMessage }: MainContentProps) {
  const renderContent = () => {
    switch (section) {
      case 'home':
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Home content coming soon</p>
          </div>
        );
      case 'messages':
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Messages content coming soon</p>
          </div>
        );
      case 'search':
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Search content coming soon</p>
          </div>
        );
      case 'calendar':
        return (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Calendar content coming soon</p>
          </div>
        );
      case 'settings':
        // Show different content based on selected message in settings
        switch (selectedMessage) {
          case 'my-account':
            return <ProfileSection />;
          case 'billing':
            return <BillingSection />;
          case 'shipping':
            return <ShippingSection />;
          case 'notifications':
            return <NotificationsSection />;
          case 'privacy':
            return <PrivacySection />;
          default:
            return <ProfileSection />;
        }
      default:
        return <ProfileSection />;
    }
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#fafafa]">
      {renderContent()}
    </div>
  );
}

function SettingsContent() {
  return (
    <div className="max-w-[1200px] mx-auto p-[40px]">
      <h1 className="text-[32px] mb-[32px] text-black">Settings</h1>
      <div className="flex flex-col gap-[24px]">
        <NotificationsSection />
        <PrivacySection />
      </div>
    </div>
  );
}