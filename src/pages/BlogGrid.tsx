import React, { useState } from 'react';
import BlogCard from './BlogCard';
import { blogs } from '../constants/blogs';

const INITIAL_COUNT = 6;

const BlogContainer = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleBlogs = showAll ? blogs : blogs.slice(0, INITIAL_COUNT);

  return (
    /* CONTAINER WRAPPER:
       - max-w-[100vw] + overflow-x-hidden ensures no horizontal "screen crossing" on mobile.
    */
    <div className="w-full max-w-[100vw] overflow-x-hidden px-4 sm:px-6 mx-auto">
      
      {/* --- GRID SECTION --- */}
      {/* - grid-cols-1: Single column for phones.
          - gap-6: Balanced spacing for mobile devices.
      */}
      <div id="blog-start" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
        {visibleBlogs.map((blog) => (
          <div key={blog.id} className="w-full h-full">
            <BlogCard
              {...blog}
              // Cleanly strips HTML tags and generates a short preview
              highlight={blog.content.replace(/<[^>]*>/g, '').split(' ').slice(0, 18).join(' ') + '...'}
            />
          </div>
        ))}
      </div>

      {/* --- LOAD MORE SECTION --- */}
      {blogs.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-12 mb-16 px-2">
          <button
            className="w-full sm:w-auto px-12 py-3.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold shadow-xl shadow-purple-500/20 active:scale-95 transition-all text-sm tracking-widest"
            onClick={() => {
              if (showAll) {
                // If closing, scroll user back to the top of the grid
                const element = document.getElementById('blog-start');
                element?.scrollIntoView({ behavior: 'smooth' });
              }
              setShowAll((prev) => !prev);
            }}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogContainer;