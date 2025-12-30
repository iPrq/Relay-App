import { motion } from 'motion/react';
import { MoreVertical, X, Download } from 'lucide-react';

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

interface DirectorySidebarProps {
  teamMembers: TeamMember[];
  files: FileItem[];
  onClose?: () => void;
  showCloseButton?: boolean;
}

export function DirectorySidebar({ teamMembers, files, onClose, showCloseButton = false }: DirectorySidebarProps) {
  return (
    <div className="w-[300px] bg-white flex flex-col border-l border-gray-100">
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
          {showCloseButton && onClose && (
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
              <span className="font-['Metropolis',sans-serif] font-semibold text-[12px]">{teamMembers.length}</span>
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
    </div>
  );
}