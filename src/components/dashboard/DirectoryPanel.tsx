import { motion, AnimatePresence } from 'motion/react';
import { DirectorySidebar } from './DirectorySidebar';

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

interface DirectoryPanelProps {
  isOpen: boolean;
  onClose: () => void;
  teamMembers: TeamMember[];
  files: FileItem[];
}

export function DirectoryPanel({ isOpen, onClose, teamMembers, files }: DirectoryPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40 xl:hidden"
            onClick={onClose}
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-[320px] bg-white shadow-2xl z-50 xl:hidden flex flex-col"
          >
            <DirectorySidebar
              teamMembers={teamMembers}
              files={files}
              onClose={onClose}
              showCloseButton={true}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}