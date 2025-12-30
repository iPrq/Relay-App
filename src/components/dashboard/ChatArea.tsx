import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Users, Paperclip, Send } from 'lucide-react';

interface ChatMessage {
  id: number;
  content: string;
  isSent: boolean;
}

interface ChatAreaProps {
  selectedContact: number;
  contacts: { id: number; name: string }[];
  chatMessages: ChatMessage[];
  onSendMessage: (message: string) => void;
  onToggleDirectory: () => void;
}

export function ChatArea({ selectedContact, contacts, chatMessages, onSendMessage, onToggleDirectory }: ChatAreaProps) {
  const [messageText, setMessageText] = useState('');

  const selectedContactData = contacts.find(c => c.id === selectedContact);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      onSendMessage(messageText.trim());
      setMessageText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex-1 bg-white flex flex-col">
      {/* Chat Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-[#d8d8d8] rounded-full border-2 border-white" />
          <div>
            <p className="font-['Poppins',sans-serif] font-semibold text-[18px]">
              {selectedContactData?.name || 'Florencio Dorrance'}
            </p>
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
            onClick={onToggleDirectory}
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
              onKeyPress={handleKeyPress}
              placeholder="Type a message"
              className="bg-transparent border-none outline-none flex-1 font-['Metropolis',sans-serif] text-[14px] placeholder:text-gray-400"
            />
            <button
              onClick={handleSendMessage}
              className="text-[#615ef0] hover:text-[#4e4bc0] transition-colors ml-3"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}