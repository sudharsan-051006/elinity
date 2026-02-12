import React from 'react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  id: number | string;
  image: string;
  title: string;
  time: string;
  date: string;
  highlight: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, image, title, time, date, highlight }) => {
  const cleanHighlight = highlight.replace(/<[^>]*>/g, '');

  return (
    <Link to={`/blog/${id}`} className="block h-full group outline-none">
      <div 
        className="bg-gradient-to-br from-[#2d1a4a] to-[#1a1a40] rounded-2xl p-[1px] shadow-xl 
                   transition-all duration-300 border border-purple-700/40 h-full
                   hover:scale-[1.02] active:scale-[0.98] active:brightness-110" 
        style={{ 
          boxShadow: '0 4px 20px -2px rgba(168, 85, 247, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)' 
        }}
      >
        <div className="bg-[#181848] rounded-2xl overflow-hidden flex flex-col h-full">
          {/* Image Container */}
          <div className="relative h-40 sm:h-44 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            {/* Subtle gradient overlay for text readability if you ever put text on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#181848]/40 to-transparent" />
          </div>

          <div className="p-4 sm:p-6 flex flex-col flex-1">
            {/* Title - slightly smaller on mobile for better fit */}
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
              {title}
            </h3>
            
            {/* Meta info - wrapped for very small screens */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-purple-300 mb-3 sm:mb-4">
              <span className="flex items-center gap-1 opacity-80">
                {time}
              </span>
              <span className="hidden xs:block w-1 h-1 bg-purple-500 rounded-full"></span>
              <span className="font-bold text-white/90">
                {date}
              </span>
            </div>

            {/* Excerpt - line clamp adjusted for mobile */}
            <p className="text-xs sm:text-sm text-purple-100/70 line-clamp-2 sm:line-clamp-3 leading-relaxed mb-4 sm:mb-6">
              {cleanHighlight}
            </p>

            {/* Call to action - bigger tap target feel */}
            <div className="mt-auto flex items-center text-[10px] sm:text-xs font-bold text-purple-400 uppercase tracking-widest group-hover:gap-2 transition-all">
              <span>Read More</span>
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;