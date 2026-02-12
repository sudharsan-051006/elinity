import React, { useState, useEffect } from 'react';
import { blogs } from '../constants/blogs';
import { Link } from 'react-router-dom';

const targetIndices = [0, 1, 2, 3];

const featuredBlogs = blogs
  .filter((_, index) => targetIndices.includes(index))
  .map(blog => ({
    ...blog,
    tag: 'Featured',
  }));

const ANIMATION_DURATION = 1400;
const AUTO_TRANSITION_DELAY = 4500;

const FeaturedBlogCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  // Auto-transition effect
  useEffect(() => {
    if (next !== null) return; // Pause auto if animating
    const timer = setTimeout(() => {
      handleNav('right', true);
    }, AUTO_TRANSITION_DELAY);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [current, next]);

  const handleNav = (dir: 'left' | 'right', auto = false) => {
    if (next !== null) return; // Prevent spamming
    setDirection(dir);
    setNext(
      dir === 'left'
        ? (current === 0 ? featuredBlogs.length - 1 : current - 1)
        : (current === featuredBlogs.length - 1 ? 0 : current + 1)
    );
    setTimeout(() => {
      setCurrent(
        dir === 'left'
          ? (current === 0 ? featuredBlogs.length - 1 : current - 1)
          : (current === featuredBlogs.length - 1 ? 0 : current + 1)
      );
      setNext(null);
      setDirection(null);
    }, ANIMATION_DURATION);
  };

  const renderCard = (blog: typeof featuredBlogs[0], animate: boolean, animDir: 'left' | 'right' | null) => (
  <div
    className={`absolute top-0 left-0 w-full transition-transform duration-[${ANIMATION_DURATION}ms] ${
      animate
        ? animDir === 'left'
          ? 'translate-x-[-100%] opacity-0'
          : 'translate-x-[100%] opacity-0'
        : 'translate-x-0 opacity-100'
    }`}
    style={{ 
      zIndex: 2, 
      // FIX 1: Allow pointer events when NOT animating, otherwise the link is "dead"
      pointerEvents: animate ? 'none' : 'auto' 
    }}
  >
    {/* FIX 2: Wrap the content in a Link. Ensure blog.id exists in your constants/blogs.ts */}
    <Link to={`/blog/${blog.id}`} className="block cursor-pointer">
      <div 
        className="mx-auto w-full max-w-2xl bg-[#181848] rounded-2xl shadow-2xl border border-purple-700/40 p-6 flex flex-col md:flex-row items-center gap-6" 
        style={{boxShadow:'0 0 32px 4px #a855f7, 0 0 0 1px #fff2'}}
      >
        <img src={blog.image} alt={blog.title} className="w-64 h-40 object-cover rounded-xl shadow-md" />
        <div className="flex-1 flex flex-col justify-between h-full">
          <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-xs text-white px-3 py-1 rounded-full mb-2 font-semibold w-fit">
            {blog.tag || 'Featured'}
          </span>
          <h2 className="text-2xl font-bold mb-2 text-white">{blog.title}</h2>
          <div className="flex items-center gap-4 text-xs text-purple-200 mt-2">
            <span>{blog.time}</span>
            <span className="font-bold text-white">{blog.date}</span>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

  return (
    <div className="relative flex items-center mb-12 min-h-[220px]" style={{height: '220px'}}>
      <button
        className="absolute left-0 z-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        onClick={() => handleNav('left')}
        disabled={next !== null}
      >
        <span className="sr-only">Previous</span>
        <span>&larr;</span>
      </button>
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden" style={{height: '220px'}}>
        {/* Current card */}
        {renderCard(featuredBlogs[current], next !== null, direction)}
        {/* Next card (only during animation) */}
        {next !== null && renderCard(featuredBlogs[next], false, direction === 'left' ? 'right' : 'left')}
      </div>
      <button
        className="absolute right-0 z-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        onClick={() => handleNav('right')}
        disabled={next !== null}
      >
        <span className="sr-only">Next</span>
        <span>&rarr;</span>
      </button>
    </div>
  );
};

export default FeaturedBlogCarousel; 