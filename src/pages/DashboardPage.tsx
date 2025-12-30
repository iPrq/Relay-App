import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  MessageSquare, 
  Search, 
  Settings,
  MoreVertical,
  Phone,
  Video,
  Info,
  Paperclip,
  Smile,
  Send,
  ChevronRight,
  X,
  FileText,
  Users,
  Plus,
  ChevronDown,
  Download
} from 'lucide-react@0.487.0';

interface DashboardPageProps {
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard' | 'forgot-password' | 'settings' | 'home') => void;
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
  const [messageText, setMessageText] = useState('');
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);

  return (
    <div className="h-screen bg-white flex overflow-hidden">
      {/* Left Sidebar - Icon Navigation */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden lg:flex bg-[#f0ebff] flex-col items-center justify-between py-6 px-4 w-[80px]"
      >
        <div className="flex flex-col gap-10 items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#a727ce] rounded-[14px] w-[56px] h-[56px] flex items-center justify-center cursor-pointer" 
            onClick={() => onNavigate('landing')}
          >
            <span className="font-bold text-[21px] text-[#dedcff]">Q</span>
          </motion.div>

          {/* Nav Icons */}
          <div className="flex flex-col gap-8 items-center">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setActiveNav('home');
                onNavigate('landing');
              }}
              className={`${activeNav === 'home' ? 'text-[#a727ce]' : 'text-black'} hover:text-[#a727ce] transition-all duration-300`}
            >
              <Home className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveNav('messages')}
              className={`${activeNav === 'messages' ? 'text-[#a727ce]' : 'text-black'} hover:text-[#a727ce] transition-all duration-300`}
            >
              <MessageSquare className="w-6 h-6 fill-current" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveNav('search')}
              className={`${activeNav === 'search' ? 'text-[#a727ce]' : 'text-black'} hover:text-[#a727ce] transition-all duration-300`}
            >
              <Search className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Settings */}
        <motion.button 
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onNavigate('settings')}
          className="text-black hover:text-[#a727ce] transition-all duration-300"
        >
          <Settings className="w-6 h-6" />
        </motion.button>
      </motion.div>

      {/* Messages Panel */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full lg:w-[286px] bg-white flex flex-col border-r border-gray-100"
      >
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
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#a727ce] rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-[#8f1fb3] transition-all duration-300"
            >
              <Plus className="w-5 h-5 text-white" />
            </motion.button>
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
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.02, x: 5 }}
              onClick={() => setSelectedContact(contact.id)}
              className={`p-3 rounded-[12px] mb-2 cursor-pointer transition-all duration-300 ${
                contact.id === selectedContact ? 'bg-[rgba(167,39,206,0.06)]' : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex gap-3">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-[#d8d8d8] rounded-[12px] flex-shrink-0" 
                />
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
            </motion.div>
          ))}
        </div>
      </motion.div>

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
          <div className="flex items-center gap-2">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-[#a727ce] hover:bg-[rgba(167,39,206,0.1)] px-4 py-2 rounded-lg transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="font-['Metropolis',sans-serif] font-semibold text-[14px]">Call</span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDirectoryOpen(!isDirectoryOpen)}
              className="flex items-center gap-2 text-[#a727ce] hover:bg-[rgba(167,39,206,0.1)] px-4 py-2 rounded-lg transition-all duration-300"
            >
              <Users className="w-4 h-4" />
              <span className="font-['Metropolis',sans-serif] font-semibold text-[14px]">Directory</span>
            </motion.button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {chatMessages.map((msg, index) => (
            <motion.div 
              key={msg.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className={`flex ${msg.isSent ? 'justify-end' : 'justify-start'}`}
            >
              <div className="flex items-start gap-3 max-w-[70%]">
                {!msg.isSent && (
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 bg-[#d8d8d8] rounded-full flex-shrink-0" 
                  />
                )}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`px-4 py-3 rounded-[12px] ${
                    msg.isSent 
                      ? 'bg-[#a727ce] text-white' 
                      : 'bg-[#e8e4ff] text-black'
                  }`}
                >
                  <p className="font-['Metropolis',sans-serif] text-[14px]">{msg.content}</p>
                </motion.div>
              </div>
            </motion.div>
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

      {/* Right Sidebar - Directory (Always visible on XL screens) */}
      <div className="hidden xl:flex w-[300px] bg-white flex-col border-l border-gray-100">
        <DirectoryContent teamMembers={teamMembers} files={files} onClose={() => {}} showCloseButton={false} />
      </div>

      {/* Directory Panel - Toggle for smaller screens */}
      <AnimatePresence>
        {isDirectoryOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 xl:hidden"
              onClick={() => setIsDirectoryOpen(false)}
            />
            
            {/* Sliding Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[320px] bg-white shadow-2xl z-50 xl:hidden flex flex-col"
            >
              <DirectoryContent teamMembers={teamMembers} files={files} onClose={() => setIsDirectoryOpen(false)} showCloseButton={true} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

interface DirectoryContentProps {
  teamMembers: TeamMember[];
  files: FileItem[];
  onClose: () => void;
  showCloseButton: boolean;
}

function DirectoryContent({ teamMembers, files, onClose, showCloseButton }: DirectoryContentProps) {
  return (
    <>
      {/* Directory Header */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="p-6 border-b border-gray-100 flex items-center justify-between"
      >
        <p className="font-['Poppins',sans-serif] font-semibold text-[20px]">Directory</p>
        <div className="flex items-center gap-2">
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="text-[#a727ce] hover:bg-[rgba(167,39,206,0.1)] rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
          >
            <MoreVertical className="w-5 h-5" />
          </motion.button>
          {showCloseButton && (
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="text-gray-600 hover:bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </motion.button>
          )}
        </div>
      </motion.div>

      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {/* Team Members Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="p-6 border-b border-gray-100"
        >
          <div className="flex items-center gap-2 mb-4">
            <p className="font-['Poppins',sans-serif] font-semibold text-[14px]">Friends 👥</p>
            <div className="bg-[#edf2f7] px-2 py-0.5 rounded-full">
              <span className="font-['Metropolis',sans-serif] font-semibold text-[12px]">6</span>
            </div>
          </div>
          <div className="space-y-3">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                whileHover={{ scale: 1.03, x: 5 }}
                className="flex gap-3 hover:bg-gray-50 p-2 rounded-lg cursor-pointer transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-[#d8d8d8] rounded-[12px] flex-shrink-0" 
                />
                <div className="flex-1 min-w-0">
                  <p className="font-['Metropolis',sans-serif] font-semibold text-[14px] truncate">{member.name}</p>
                  <p className="font-['Metropolis',sans-serif] text-[12px] text-gray-400 truncate">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Files Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <p className="font-['Poppins',sans-serif] font-semibold text-[14px]">Files</p>
            <div className="bg-[#edf2f7] px-2 py-0.5 rounded-full">
              <span className="font-['Metropolis',sans-serif] font-semibold text-[12px]">{files.length}</span>
            </div>
          </div>
          <div className="space-y-3">
            {files.map((file, index) => (
              <motion.div 
                key={file.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.03, x: 5 }}
                className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 bg-[#ffe5e5] rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <svg className="w-5 h-5 text-[#ff5757]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                  </svg>
                </motion.div>
                <div className="flex-1 min-w-0">
                  <p className="font-['Metropolis',sans-serif] font-semibold text-[14px] truncate">{file.name}</p>
                  <div className="flex items-center gap-2 font-['Metropolis',sans-serif] text-[12px] text-gray-400">
                    <span>{file.type}</span>
                    <span>{file.size}</span>
                  </div>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-[#a727ce] hover:bg-[rgba(167,39,206,0.1)] rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300 flex-shrink-0"
                >
                  <Download className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}