import React, { useState } from 'react';
import BlogCard from './BlogCard';
import { Link } from 'react-router-dom';
import { blogs } from '../constants/blogs';

const INITIAL_COUNT = 6;

const BlogGrid = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleBlogs = showAll ? blogs : blogs.slice(0, INITIAL_COUNT);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleBlogs.map((blog) => (
          <Link to={`/blog/${blog.id}`} key={blog.id} className="block h-full">
            <BlogCard
              {...blog}
              highlight={blog.content.split(' ').slice(0, 20).join(' ') + '...'}
            />
          </Link>
        ))}
      </div>
      {blogs.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-8">
          <button
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold shadow hover:scale-105 transition-transform"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </>
  );
};

export default BlogGrid; 