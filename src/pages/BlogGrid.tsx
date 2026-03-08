import React, { useState } from 'react';
import BlogCard from './BlogCard';
import { blogs } from '../constants/blogs';
import { motion, AnimatePresence } from 'framer-motion';

const INITIAL_COUNT = 6;

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const BlogContainer = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleBlogs = showAll ? blogs : blogs.slice(0, INITIAL_COUNT);

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden px-4 sm:px-6 mx-auto">
<div className='pt-8'></div>
      {/* GRID */}
      <motion.div
        id="blog-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full"
      >
        <AnimatePresence mode="popLayout">
          {visibleBlogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              layout
              className="w-full h-full"
            >
              <BlogCard
                {...blog}
                highlight={
                  blog.content
                    .replace(/<[^>]*>/g, '')
                    .split(' ')
                    .slice(18, 50)
                    .join(' ') + '...'
                }
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* BUTTON */}
      {blogs.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-12 mb-16 px-2">
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(168,85,247,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-12 py-3.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold shadow-xl shadow-purple-500/20 transition-all text-sm tracking-widest"
            onClick={() => {
              if (showAll) {
                const element = document.getElementById('blog-start');
                element?.scrollIntoView({ behavior: 'smooth' });
              }
              setShowAll(prev => !prev);
            }}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default BlogContainer;