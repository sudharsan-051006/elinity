import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    const handleClickOutside = (event: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex gap-4 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => {
            setActiveTab(tab.label);
            setIsResourcesOpen(false);
          }}
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 text-sm focus:outline-none ${
            activeTab === tab.label
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
              : 'bg-transparent border border-purple-700 text-purple-200 hover:bg-purple-900/30'
          }`}
        >
          {tab.label}
        </button>
      ))}
      <div className="relative" ref={resourcesRef}>
        <button
          onClick={() => setIsResourcesOpen(!isResourcesOpen)}
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 text-sm focus:outline-none ${
            isResourcesOpen
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
              : 'bg-transparent border border-purple-700 text-purple-200 hover:bg-purple-900/30'
          }`}
        >
          Resources
        </button>
        {isResourcesOpen && (
          <div className="absolute top-full mt-2 w-48 bg-gray-800 border border-purple-700 rounded-lg shadow-xl z-10">
            <ul>
              {resources.map((resource) => (
                <li key={resource.label}>
                  <Link
                    to={resource.href}
                    className="block px-4 py-2 text-purple-200 hover:bg-purple-900/50"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    {resource.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCategoryTabs; 