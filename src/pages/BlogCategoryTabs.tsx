import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  { label: 'Updates' },
  { label: 'Blogs' },
  { label: 'News' },
];

const resources = [
  { label: 'Privacy Policy', href: '/privacypolicy' },
];

/* animation configs */
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
  }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const BlogCategoryTabs = () => {
  const [activeTab, setActiveTab] = useState('Updates');
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="flex flex-wrap gap-2 sm:gap-4 mb-8 items-center"
    >
      {/* Tabs */}
      {tabs.map((tab) => (
        <motion.button
          key={tab.label}
          variants={fadeUp}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.94 }}
          onClick={() => {
            setActiveTab(tab.label);
            setIsResourcesOpen(false);
          }}
          className={`px-4 sm:px-6 py-2.5 rounded-xl font-bold transition-all duration-200 text-xs sm:text-sm focus:outline-none ${
            activeTab === tab.label
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
              : 'bg-[#1a1a40]/50 border border-purple-700/50 text-purple-200 hover:bg-purple-900/30'
          }`}
        >
          {tab.label}
        </motion.button>
      ))}

      {/* Resources Dropdown */}
      <div className="relative" ref={resourcesRef}>
        <motion.button
          variants={fadeUp}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsResourcesOpen(!isResourcesOpen)}
          className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-bold transition-all duration-200 text-xs sm:text-sm border focus:outline-none ${
            isResourcesOpen
              ? 'bg-white text-[#0a0a23] border-white shadow-lg'
              : 'bg-transparent border-purple-700 text-purple-200'
          }`}
        >
          Resources
          <motion.div
            animate={{ rotate: isResourcesOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={14} />
          </motion.div>
        </motion.button>

        {/* Dropdown animation */}
        <AnimatePresence>
          {isResourcesOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="absolute top-full left-0 mt-1 w-full min-w-[160px] bg-[#1a1a40] border border-purple-500/30 rounded-xl shadow-2xl z-[2000] overflow-hidden backdrop-blur-xl"
            >
              <div className="py-1">
                {resources.map((resource) => (
                  <motion.div
                    key={resource.label}
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={resource.href}
                      className="flex items-center px-4 py-3 text-xs font-semibold text-purple-50 hover:bg-purple-500/20 active:bg-purple-500/40 transition-colors border-b border-purple-500/10 last:border-none"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      {resource.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default BlogCategoryTabs;