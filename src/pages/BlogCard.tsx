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
    <Link to={`/blog/${id}`} className="block h-full group outline-none touch-manipulation">
      <div 
        className="bg-[#1a1a40] rounded-xl p-[1px] transition-all duration-300 border border-purple-700/30 h-full
                   hover:border-purple-500/50 active:scale-[0.98]"
      >
        <div className="bg-[#181848] rounded-[11px] overflow-hidden flex flex-col h-full">
          
          {/* Image Container: Reduced height on mobile to keep card small */}
          <div className="relative h-32 sm:h-44 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>

          {/* Text Container: Reduced padding from p-4 to p-3 on mobile */}
          <div className="p-3 sm:p-6 flex flex-col flex-1">
            
            {/* Meta info: Tightened spacing */}
            <div className="flex items-center gap-2 text-[9px] sm:text-xs text-purple-300 mb-1">
              <span>{date}</span>
              <span className="w-1 h-1 bg-purple-500/40 rounded-full"></span>
              <span>{time}</span>
            </div>

            {/* Title: Reduced font size and line height for mobile */}
            <h3 className="text-sm sm:text-lg font-bold text-white mb-1.5 group-hover:text-purple-400 transition-colors line-clamp-2 leading-snug">
              {title}
            </h3>
            
            {/* Excerpt: Only 2 lines on mobile to save vertical space */}
            <p className="text-[11px] sm:text-sm text-purple-100/60 line-clamp-2 leading-relaxed mb-3">
              {cleanHighlight}
            </p>

            {/* CTA: Smaller and more compact */}
            <div className="mt-auto flex items-center text-[9px] sm:text-xs font-bold text-purple-400 uppercase tracking-wider">
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