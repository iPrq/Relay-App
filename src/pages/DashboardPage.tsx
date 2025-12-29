import { useState } from 'react';
import { 
  Home, 
  MessageSquare, 
  Search, 
  Calendar, 
  Settings,
  Plus,
  ChevronDown,
  Phone,
  Send,
  Paperclip,
  MoreVertical,
  Download
} from 'lucide-react';

interface DashboardPageProps {
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard' | 'forgot-password') => void;
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

interface GroupMember {
  id: number;
  name: string;
  status: string;
}

interface FileItem {
  id: number;
  name: string;
  type: string;
  size: string;
}

const contacts: Message[] = [
  { id: 1, name: 'Elmer Laverty', text: 'Haha oh man 🔥', time: '12m' },
  { id: 2, name: 'Florencio Dorrance', text: 'woohoooo', time: '24m', isActive: true },
  { id: 3, name: 'Lavern Laboy', text: 'Haha that\'s terrifying 😂', time: '1h' },
  { id: 4, name: 'Titus Kitamura', text: 'omg, this is amazing', time: '5h' },
  { id: 5, name: 'Geoffrey Mott', text: 'aww 😍', time: '2d' },
  { id: 6, name: 'Alfonzo Schuessler', text: 'perfect!', time: '1m' },
  { id: 7, name: 'Full name here', text: 'omg, this is amazing', time: '5h' },
];

const chatMessages: ChatMessage[] = [
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
];

const teamMembers: GroupMember[] = [
  { id: 1, name: 'Full name here', status: 'Active' },
  { id: 2, name: 'Full name here', status: 'Busy' },
  { id: 3, name: 'Full name here', status: 'Offline' },
  { id: 4, name: 'Full name here', status: 'Away' },
  { id: 5, name: 'Full name here', status: 'In Meeting' },
  { id: 6, name: 'Full name here', status: 'Do Not Disturb' },
];

const files: FileItem[] = [
  { id: 1, name: 'i9.pdf', type: 'PDF', size: '9mb' },
  { id: 2, name: 'i9.pdf', type: 'PDF', size: '9mb' },
  { id: 3, name: 'i9.pdf', type: 'PDF', size: '9mb' },
  { id: 4, name: 'i9.pdf', type: 'PDF', size: '9mb' },
];

export default function DashboardPage({ onNavigate }: DashboardPageProps) {
  const [selectedContact, setSelectedContact] = useState(2);
  const [messageText, setMessageText] = useState('');
  const [activeNav, setActiveNav] = useState('messages');

  return (
    <div className="h-screen bg-white flex overflow-hidden">
      {/* Left Sidebar - Icon Navigation */}
      <div className="hidden lg:flex bg-[#f0ebff] flex-col items-center justify-between py-6 px-4 w-[60px]">
        <div className="flex flex-col gap-10 items-center">
          {/* Logo */}
          <div 
            className="bg-[#a727ce] rounded-[14px] w-[56px] h-[56px] flex items-center justify-center cursor-pointer" 
            onClick={() => onNavigate('landing')}
          >
            <span className="font-bold text-[21px] text-[#dedcff]">Q</span>
          </div>

          {/* Nav Icons */}
          <div className="flex flex-col gap-8 items-center">
            <button
              onClick={() => setActiveNav('home')}
              className={`${activeNav === 'home' ? 'text-[#a727ce]' : 'text-black'} hover:text-[#a727ce] transition-colors`}
            >
              <Home className="w-6 h-6" />
            </button>
            <button
              onClick={() => setActiveNav('messages')}
              className={`${activeNav === 'messages' ? 'text-[#a727ce]' : 'text-black'} hover:text-[#a727ce] transition-colors`}
            >
              <MessageSquare className="w-6 h-6 fill-current" />
            </button>
            <button
              onClick={() => setActiveNav('search')}
              className={`${activeNav === 'search' ? 'text-[#a727ce]' : 'text-black'} hover:text-[#a727ce] transition-colors`}
            >
              <Search className="w-6 h-6" />
            </button>
            <button
              onClick={() => setActiveNav('calendar')}
              className={`${activeNav === 'calendar' ? 'text-[#a727ce]' : 'text-black'} hover:text-[#a727ce] transition-colors`}
            >
              <Calendar className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Settings */}
        <button className="text-black hover:text-[#a727ce] transition-colors">
          <Settings className="w-6 h-6" />
        </button>
      </div>

      {/* Messages Panel */}
      <div className="w-full lg:w-[286px] bg-white flex flex-col border-r border-gray-100">
        {/* Header */}
        <div className="px-6 py-5">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <p className="font-['Poppins',sans-serif] font-semibold text-[20px] text-black">Messages</p>
              <ChevronDown className="w-4 h-4" />
              <div className="bg-[#edf2f7] px-2 py-0.5 rounded-full ml-1">
                <span className="font-['Poppins',sans-serif] font-semibold text-[12px]">12</span>
              </div>
            </div>
            <button className="bg-[#a727ce] rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-[#8f1fb3] transition-colors">
              <Plus className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Search */}
          <div className="bg-[#f3f3f3] rounded-[12px] px-5 py-3 flex items-center gap-3">
            <Search className="w-4 h-4 opacity-40" />
            <input
              type="text"
              placeholder="Search messages"
              className="bg-transparent border-none outline-none flex-1 font-['Metropolis',sans-serif] text-[14px] placeholder:opacity-40"
            />
          </div>
        </div>

        {/* Message List */}
        <div className="flex-1 overflow-y-auto px-4 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              onClick={() => setSelectedContact(contact.id)}
              className={`p-3 rounded-[12px] mb-2 cursor-pointer transition-colors ${
                contact.id === selectedContact ? 'bg-[rgba(167,39,206,0.06)]' : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-[#d8d8d8] rounded-[12px] flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-['Poppins',sans-serif] font-semibold text-[14px] truncate">{contact.name}</p>
                    <span className="text-[14px] opacity-30 ml-2 text-nowrap">{contact.time}</span>
                  </div>
                  <p className="font-['Poppins',sans-serif] font-semibold text-[12px] text-[rgba(0,0,0,0.4)] truncate">
                    {contact.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current User */}
        <div className="px-4 py-4 border-t border-gray-100 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#a727ce] text-white flex items-center justify-center font-['Poppins',sans-serif] font-semibold leading-none">
            T
          </div>
          <div className="flex flex-col justify-center leading-tight">
            <span className="font-['Poppins',sans-serif] font-semibold text-[14px] leading-[18px] text-black">Test</span>
            <span className="font-['Poppins',sans-serif] text-[12px] leading-[16px] text-[rgba(0,0,0,0.45)]">Your Status</span>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 bg-white flex flex-col">
        {/* Chat Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#d8d8d8] rounded-full border-2 border-white" />
            <div>
              <p className="font-['Poppins',sans-serif] font-semibold text-[18px]">Florencio Dorrance</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#68D391] rounded-full" />
                <span className="font-['Metropolis',sans-serif] text-[12px] text-gray-500">Online</span>
              </div>
            </div>
          </div>
          <button className="flex items-center gap-2 text-[#a727ce] hover:bg-[rgba(167,39,206,0.1)] px-4 py-2 rounded-lg transition-colors">
            <Phone className="w-4 h-4" />
            <span className="font-['Metropolis',sans-serif] font-semibold text-[14px]">Call</span>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {chatMessages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isSent ? 'justify-end' : 'justify-start'}`}>
              <div className="flex items-start gap-3 max-w-[70%]">
                {!msg.isSent && <div className="w-8 h-8 bg-[#d8d8d8] rounded-full flex-shrink-0" />}
                <div 
                  className={`px-4 py-3 rounded-[12px] ${
                    msg.isSent 
                      ? 'bg-[#a727ce] text-white' 
                      : 'bg-[#e8e4ff] text-black'
                  }`}
                >
                  <p className="font-['Metropolis',sans-serif] text-[14px]">{msg.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-6 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <div className="flex-1 bg-[#e8e4ff] rounded-[12px] px-5 py-3 flex items-center justify-between">
              <input
                type="text"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                placeholder="Type a message"
                className="bg-transparent border-none outline-none flex-1 font-['Metropolis',sans-serif] text-[14px] placeholder:text-gray-400"
              />
              <button className="text-[#615ef0] hover:text-[#4e4bc0] transition-colors ml-3">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Directory */}
      <div className="hidden xl:flex w-[300px] bg-white flex-col border-l border-gray-100">
        {/* Directory Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <p className="font-['Poppins',sans-serif] font-semibold text-[20px]">Directory</p>
          <button className="text-[#a727ce] hover:bg-[rgba(167,39,206,0.1)] rounded-full w-10 h-10 flex items-center justify-center transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* Group Members Section */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <p className="font-['Poppins',sans-serif] font-semibold text-[14px]">Group Members</p>
              <div className="bg-[#edf2f7] px-2 py-0.5 rounded-full">
                <span className="font-['Metropolis',sans-serif] font-semibold text-[12px]">6</span>
              </div>
            </div>
            <div className="space-y-3">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex gap-3 hover:bg-gray-50 p-2 rounded-lg cursor-pointer transition-colors">
                  <div className="w-12 h-12 bg-[#d8d8d8] rounded-[12px] flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-['Metropolis',sans-serif] font-semibold text-[14px] truncate">{member.name}</p>
                    <p className="font-['Metropolis',sans-serif] text-[12px] text-gray-400 truncate">
                      Status: {member.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Group Members Section (Duplicate as shown in design) */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <p className="font-['Poppins',sans-serif] font-semibold text-[14px]">Group Members</p>
              <div className="bg-[#edf2f7] px-2 py-0.5 rounded-full">
                <span className="font-['Metropolis',sans-serif] font-semibold text-[12px]">6</span>
              </div>
            </div>
            <div className="space-y-3">
              {files.map((file) => (
                <div key={file.id} className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-[#ffe5e5] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#ff5757]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-['Metropolis',sans-serif] font-semibold text-[14px] truncate">{file.name}</p>
                    <div className="flex items-center gap-2 font-['Metropolis',sans-serif] text-[12px] text-gray-400">
                      <span>{file.type}</span>
                      <span>{file.size}</span>
                    </div>
                  </div>
                  <button className="text-[#a727ce] hover:bg-[rgba(167,39,206,0.1)] rounded-full w-8 h-8 flex items-center justify-center transition-colors flex-shrink-0">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}