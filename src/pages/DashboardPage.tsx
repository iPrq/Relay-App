import { useState } from 'react';
import { motion } from 'motion/react';
import { SidebarNavigation } from '../components/dashboard/SidebarNavigation';
import { MessagesPanel } from '../components/dashboard/MessagesPanel';
import { ChatArea } from '../components/dashboard/ChatArea';
import { DirectorySidebar } from '../components/dashboard/DirectorySidebar';
import { DirectoryPanel } from '../components/dashboard/DirectoryPanel';

interface DashboardPageProps {
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard' | 'forgot-password' | 'settings' | 'home' | 'search') => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

interface Message {
  id: number;
  name: string;
  text: string;
  time: string;
  isActive?: boolean;
}

interface ChatMessage {
  id: number;
  content: string;
  isSent: boolean;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
}

interface FileItem {
  id: number;
  name: string;
  type: string;
  size: string;
}

const contacts: Message[] = [
  { id: 1, name: 'Sarah Johnson', text: 'Haha oh man 🔥', time: '12m' },
  { id: 2, name: 'Mike Chen', text: 'woohoooo', time: '24m', isActive: true },
  { id: 3, name: 'Emma Wilson', text: 'Haha that\'s terrifying 😂', time: '1h' },
  { id: 4, name: 'Alex Turner', text: 'omg, this is amazing', time: '5h' },
  { id: 5, name: 'Lisa Park', text: 'aww 😍', time: '2d' },
  { id: 6, name: 'James Rodriguez', text: 'perfect!', time: '1m' },
  { id: 7, name: 'Sophia Lee', text: 'can\'t wait to see you!', time: '5h' },
];

const teamMembers: TeamMember[] = [
  { id: 1, name: 'Sarah Johnson', role: 'Coffee enthusiast ☕' },
  { id: 2, name: 'Mike Chen', role: 'Gamer & chill' },
  { id: 3, name: 'Emma Wilson', role: 'Adventure seeker 🌍' },
  { id: 4, name: 'Alex Turner', role: 'Music lover 🎵' },
  { id: 5, name: 'Lisa Park', role: 'Foodie & photographer' },
  { id: 6, name: 'James Rodriguez', role: 'Sports fan ⚽' },
];

const files: FileItem[] = [
  { id: 1, name: 'i9.pdf', type: 'PDF', size: '9mb' },
  { id: 2, name: 'i9.pdf', type: 'PDF', size: '9mb' },
  { id: 3, name: 'i9.pdf', type: 'PDF', size: '9mb' },
  { id: 4, name: 'i9.pdf', type: 'PDF', size: '9mb' },
];

export default function DashboardPage({ onNavigate, activeNav, setActiveNav }: DashboardPageProps) {
  const [selectedContact, setSelectedContact] = useState(2);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { id: 1, content: 'Message content goes here', isSent: false },
    { id: 2, content: 'Message content goes here', isSent: false },
    { id: 3, content: 'Message content goes here', isSent: false },
    { id: 4, content: 'Message content goes here', isSent: true },
    { id: 5, content: 'Message content goes here', isSent: false },
    { id: 6, content: 'Message content goes here', isSent: false },
    { id: 7, content: 'Message content goes here', isSent: true },
    { id: 8, content: 'Message content goes here', isSent: true },
    { id: 9, content: 'Message content goes here', isSent: true },
    { id: 10, content: 'Message content goes here', isSent: false },
    { id: 11, content: 'Message content goes here', isSent: false },
    { id: 12, content: 'Message content goes here', isSent: false },
  ]);
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);

  const handleSendMessage = (message: string) => {
    const newMessage: ChatMessage = {
      id: chatMessages.length + 1,
      content: message,
      isSent: true,
    };
    setChatMessages(prev => [...prev, newMessage]);
  };

  const handleSelectContact = (contactId: number) => {
    setSelectedContact(contactId);
    // In a real app, you would load messages for this contact
    // For now, we'll keep the same messages
  };

  return (
    <div className="h-screen bg-white flex overflow-hidden">
      <SidebarNavigation
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onNavigate={onNavigate}
      />

      <MessagesPanel
        contacts={contacts}
        selectedContact={selectedContact}
        onSelectContact={handleSelectContact}
      />

      <ChatArea
        selectedContact={selectedContact}
        contacts={contacts}
        chatMessages={chatMessages}
        onSendMessage={handleSendMessage}
        onToggleDirectory={() => setIsDirectoryOpen(!isDirectoryOpen)}
      />

      {/* Right Sidebar - Directory (Always visible on XL screens) */}
      <div className="hidden xl:flex">
        <DirectorySidebar
          teamMembers={teamMembers}
          files={files}
        />
      </div>

      <DirectoryPanel
        isOpen={isDirectoryOpen}
        onClose={() => setIsDirectoryOpen(false)}
        teamMembers={teamMembers}
        files={files}
      />
    </div>
  );
}

