import React from 'react';

interface BlogCardProps {
  image: string;
  title: string;
  time: string;
  date: string;
  highlight: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, title, time, date, highlight }) => (
  <div className="bg-gradient-to-br from-[#2d1a4a] to-[#1a1a40] rounded-2xl p-1 shadow-xl hover:scale-105 transition-transform border border-purple-700/40" style={{boxShadow:'0 0 16px 2px #a855f7, 0 0 0 1px #fff2'}}>
    <div className="bg-[#181848] rounded-2xl overflow-hidden flex flex-col h-full">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-2xl" />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <div className="flex items-center gap-4 text-xs text-purple-200 mb-1">
          <span>{time}</span>
          <span className="font-bold text-white">{date}</span>
        </div>
        <p className="text-sm text-purple-100 mt-2 line-clamp-3">{highlight}</p>
      </div>
    </div>
  </div>
);

export default BlogCard; 