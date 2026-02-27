import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BlogCardProps {
  id: number | string;
  image: string;
  title: string;
  time: string;
  date: string;
  highlight: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  }
};

const BlogCard: React.FC<BlogCardProps> = ({ id, image, title, time, date, highlight }) => {
  const cleanHighlight = highlight.replace(/<[^>]*>/g, '');

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.35 }}
      className="h-full"
    >
      <Link to={`/blog/${id}`} className="block h-full group outline-none touch-manipulation">
        <div 
          className="bg-[#1a1a40] rounded-xl p-[1px] transition-all duration-300 border border-purple-700/30 h-full
                     hover:border-purple-500/60 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]"
        >
          <div className="bg-[#181848] rounded-[11px] overflow-hidden flex flex-col h-full">
            
            {/* IMAGE */}
            <div className="relative h-32 sm:h-44 overflow-hidden">
              <motion.img 
                src={image} 
                alt={title} 
                loading="lazy"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              
              {/* subtle glow overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* TEXT */}
            <div className="p-3 sm:p-6 flex flex-col flex-1">

              {/* meta */}
              <div className="flex items-center gap-2 text-[9px] sm:text-xs text-purple-300 mb-1">
                <span>{date}</span>
                <span className="w-1 h-1 bg-purple-500/40 rounded-full"></span>
                <span>{time}</span>
              </div>

              {/* title */}
              <motion.h3 
                className="text-sm sm:text-lg font-bold text-white mb-1.5 group-hover:text-purple-400 transition-colors line-clamp-2 leading-snug"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                {title}
              </motion.h3>
              
              {/* excerpt */}
              <p className="text-[11px] sm:text-sm text-purple-100/60 line-clamp-2 leading-relaxed mb-3">
                {cleanHighlight}
              </p>

              {/* CTA */}
              <div className="mt-auto flex items-center text-[9px] sm:text-xs font-bold text-purple-400 uppercase tracking-wider">
                <span>Read More</span>
                <motion.span 
                  className="ml-1"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;