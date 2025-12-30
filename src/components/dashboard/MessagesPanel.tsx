import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Plus, ChevronDown } from 'lucide-react';

interface Message {
  id: number;
  name: string;
  text: string;
  time: string;
  isActive?: boolean;
}

interface MessagesPanelProps {
  contacts: Message[];
  selectedContact: number | null;
  onSelectContact: (id: number) => void;
  onNavigate: (page: 'landing' | 'login' | 'register' | 'dashboard' | 'forgot-password' | 'settings' | 'home' | 'search' | 'add-friend') => void;
}

export function MessagesPanel({ contacts, selectedContact, onSelectContact, onNavigate }: MessagesPanelProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`bg-white flex flex-col border-r border-gray-100 ${
        selectedContact ? 'w-full lg:w-[286px]' : 'flex-1'
      }`}
    >
      {/* Header */}
      <div className="px-6 py-5">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <p className="font-['Poppins',sans-serif] font-semibold text-[20px] text-black">Messages</p>
            <ChevronDown className="w-4 h-4" />
            <div className="bg-[#edf2f7] px-2 py-0.5 rounded-full ml-1">
              <span className="font-['Poppins',sans-serif] font-semibold text-[12px]">{contacts.length}</span>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('add-friend')}
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none flex-1 font-['Metropolis',sans-serif] text-[14px] placeholder:opacity-40"
          />
        </div>
      </div>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {contacts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center h-full text-center"
          >
            <div className="w-16 h-16 bg-[#f3f3f3] rounded-full flex items-center justify-center mb-4">
              <Plus className="w-8 h-8 text-[#a727ce]" />
            </div>
            <p className="font-['Poppins',sans-serif] font-medium text-[16px] text-black mb-2">
              No One is Here Yet..
            </p>
            <p className="font-['Poppins',sans-serif] text-[14px] text-gray-500">
              Add Friends
            </p>
          </motion.div>
        ) : (
          filteredContacts.map((contact, index) => (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.02, x: 5 }}
              onClick={() => onSelectContact(contact.id)}
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
          ))
        )}
      </div>
    </motion.div>
  );
}