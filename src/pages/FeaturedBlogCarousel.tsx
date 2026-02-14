import React, { useState, useEffect } from 'react';
import { blogs } from '../constants/blogs';
import { Link } from 'react-router-dom';

const targetIndices = [0, 1, 2, 3];
const featuredBlogs = blogs
  .filter((_, index) => targetIndices.includes(index))
  .map(blog => ({ ...blog, tag: 'Featured' }));

const ANIMATION_DURATION = 1400;
const AUTO_TRANSITION_DELAY = 4500;

const FeaturedBlogCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState<number | null>(null);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    if (next !== null) return;
    const timer = setTimeout(() => handleNav('right'), AUTO_TRANSITION_DELAY);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [current, next]);

  const handleNav = (dir: 'left' | 'right') => {
    if (next !== null) return;
    setDirection(dir);
    setNext(dir === 'left' 
      ? (current === 0 ? featuredBlogs.length - 1 : current - 1) 
      : (current === featuredBlogs.length - 1 ? 0 : current + 1)
    );
    setTimeout(() => {
      setCurrent(dir === 'left' 
        ? (current === 0 ? featuredBlogs.length - 1 : current - 1) 
        : (current === featuredBlogs.length - 1 ? 0 : current + 1)
      );
      setNext(null);
      setDirection(null);
    }, ANIMATION_DURATION);
  };

  const renderCard = (blog: typeof featuredBlogs[0], animate: boolean, animDir: 'left' | 'right' | null) => (
    <div
      className={`absolute inset-0 w-full h-full transition-transform duration-[${ANIMATION_DURATION}ms] ${
        animate
          ? animDir === 'left' ? 'translate-x-[-100%] opacity-0' : 'translate-x-[100%] opacity-0'
          : 'translate-x-0 opacity-100'
      }`}
      style={{ zIndex: 2, pointerEvents: animate ? 'none' : 'auto' }}
    >
      <Link to={`/blog/${blog.id}`} className="block h-full">
        <div 
          className="w-full h-full bg-[#181848]/90 backdrop-blur-md rounded-2xl border border-purple-700/40 p-3 flex items-center gap-3 sm:gap-6" 
          style={{ boxShadow: '0 10px 30px -10px rgba(0,0,0,0.7)' }}
        >
          {/* Image - Square and small on mobile, larger on desktop */}
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-20 h-20 sm:w-40 sm:h-32 object-cover rounded-xl flex-shrink-0" 
          />
          
          <div className="flex-1 min-w-0">
            <span className="text-[9px] sm:text-xs text-purple-400 font-bold uppercase tracking-widest">
              {blog.tag}
            </span>
            <h2 className="text-[13px] sm:text-2xl font-bold text-white line-clamp-2 leading-tight mb-1">
              {blog.title}
            </h2>
            <div className="flex items-center gap-2 text-[10px] sm:text-sm text-purple-300">
              <span className="font-semibold text-white/70">{blog.date}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    /* Center the carousel and add horizontal padding to prevent full-width stretching */
    <div className="w-full flex flex-col items-center px-6">
      <div className="relative w-full max-w-[330px] sm:max-w-2xl flex items-center">
        
        {/* Navigation Arrows - Placed slightly outside the card edges */}
        <button
          className="absolute -left-4 z-30 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform"
          onClick={() => handleNav('left')}
          disabled={next !== null}
        >
          <span className="text-xs">&larr;</span>
        </button>

        {/* Carousel Viewport */}
        <div className="relative w-full h-[110px] sm:h-[180px] overflow-hidden rounded-2xl">
          {renderCard(featuredBlogs[current], next !== null, direction)}
          {next !== null && renderCard(featuredBlogs[next], false, direction === 'left' ? 'right' : 'left')}
        </div>

        <button
          className="absolute -right-4 z-30 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform"
          onClick={() => handleNav('right')}
          disabled={next !== null}
        >
          <span className="text-xs">&rarr;</span>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex gap-1.5 mt-5">
        {featuredBlogs.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 rounded-full transition-all duration-300 ${
              current === i ? 'w-5 bg-purple-500' : 'w-1.5 bg-gray-700'
            }`} 
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogCarousel;