import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const tabs = [
  { label: 'Updates' },
  { label: 'Blogs' },
  { label: 'News' },
];

const resources = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

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
    <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 items-center">
      {tabs.map((tab) => (
        <button
          key={tab.label}
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
        </button>
      ))}

      <div className="relative" ref={resourcesRef}>
        <button
          onClick={() => setIsResourcesOpen(!isResourcesOpen)}
          className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-bold transition-all duration-200 text-xs sm:text-sm border focus:outline-none ${
            isResourcesOpen
              ? 'bg-white text-[#0a0a23] border-white shadow-lg'
              : 'bg-transparent border-purple-700 text-purple-200'
          }`}
        >
          Resources
          <ChevronDown size={14} className={`transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
        </button>

{isResourcesOpen && (
  <div className="absolute top-full left-0 mt-1 w-full min-w-[160px] bg-[#1a1a40] border border-purple-500/30 rounded-xl shadow-2xl z-[2000] overflow-hidden backdrop-blur-xl">
    <div className="py-1">
      {resources.map((resource) => (
        <Link
          key={resource.label}
          to={resource.href}
          /* Adjusted py-3 for a slightly more compact feel that still fits the button width */
          className="flex items-center px-4 py-3 text-xs font-semibold text-purple-50 hover:bg-purple-500/20 active:bg-purple-500/40 transition-colors border-b border-purple-500/10 last:border-none"
          onClick={() => setIsResourcesOpen(false)}
        >
          {resource.label}
        </Link>
      ))}
    </div>
  </div>
)}
      </div>
    </div>
  );
};

export default BlogCategoryTabs;