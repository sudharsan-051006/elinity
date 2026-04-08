import React, { useState, useRef } from 'react';
import BlogCard from './BlogCard';
import { blogs } from '../constants/blogs';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const INITIAL_COUNT = 6;

// Reveal animation
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

/**
 * A wrapper component that applies 3D tilt based on the card's column position.
 * The column is calculated by checking the ref's offsetLeft against the parent grid.
 */
const TiltWrapper = ({ children, isVisible }) => {
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  
  // Create motion values to store the rotation angles
  const xRotate = useMotionValue(0);
  const yRotate = useMotionValue(0);
  const zPop = useMotionValue(0);

  // Smooth the rotation changes
  const springConfig = { stiffness: 300, damping: 20 };
  const smoothX = useSpring(xRotate, springConfig);
  const smoothY = useSpring(yRotate, springConfig);
  const smoothZ = useSpring(zPop, springConfig);

  const calculateTilt = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const parent = card.closest('.grid');
    if (!parent) return;

    // --- Core Logic: Determine Column ---
    const parentWidth = parent.offsetWidth;
    // How far this specific card is from the left edge of the grid
    const leftOffset = card.offsetLeft; 
    
    // Divide grid into thirds
    const colWidth = parentWidth / 3; 
    
    // Column thresholds (accounting for gaps)
    const middleStart = colWidth - 50; 
    const middleEnd = (colWidth * 2) + 50;

    // --- Apply Specific Tilts ---
    if (leftOffset < middleStart) {
      // LEFT COLUMN: Tilt RIGHT (RotateY is positive)
      yRotate.set(8);
      xRotate.set(0);
    } else if (leftOffset > middleEnd) {
      // RIGHT COLUMN: Tilt LEFT (RotateY is negative)
      yRotate.set(-8);
      xRotate.set(0);
    } else {
      // CENTER COLUMN: Tilt UP (RotateX is negative)
      xRotate.set(5);
      yRotate.set(0);
    }
    
    // Pop the card slightly forward in 3D space
    zPop.set(40);
  };

  const resetTilt = () => {
    xRotate.set(0);
    yRotate.set(0);
    zPop.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={fadeUp}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      exit={{ opacity: 0, scale: 0.95 }}
      layout
      style={{
        perspective: "1200px", // Enables the 3D depth
        transformStyle: "preserve-3d"
      }}
      className="relative group h-full cursor-pointer"
      onMouseEnter={calculateTilt}
      onMouseLeave={resetTilt}
    >
      {/* Dynamic Glow Background */}
      <motion.div
        className="absolute inset-0 rounded-[20px] bg-purple-500/15 blur-2xl z-0 transition-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: (smoothX.get() < 0 || smoothY.get() !== 0) ? 1 : 0 }}
      />

      {/* The Actual Card (with 3D transformation) */}
      <motion.div
        style={{
          rotateX: smoothX,
          rotateY: smoothY,
          z: smoothZ,
          transformStyle: "preserve-3d", // Keeps children 3D
        }}
        className="relative z-10 w-full h-full bg-[#0d0d0d] rounded-[20px] overflow-hidden border border-white/10 shadow-2xl shadow-black/30"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const BlogContainer = () => {
  const [showAll, setShowAll] = useState(false);
  const filteredBlogs = blogs.filter(blog => blog.id !== 1);
  const visibleBlogs = showAll ? filteredBlogs : filteredBlogs.slice(0, INITIAL_COUNT);

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden px-4 sm:px-6 mx-auto">
      <div className='pt-8'></div>

      {/* GRID */}
      <motion.div
        id="blog-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
      >
        <AnimatePresence mode="popLayout">
          {visibleBlogs.map((blog) => (
            <TiltWrapper key={blog.id} isVisible={true}>
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
            </TiltWrapper>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* BUTTON */}
      {blogs.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-16 mb-16 px-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-14 py-4 overflow-hidden rounded-xl bg-black text-white font-bold transition-all border border-purple-500/30 shadow-xl shadow-purple-500/10"
            onClick={() => {
              if (showAll) {
                const element = document.getElementById('blog-start');
                element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
              setShowAll(prev => !prev);
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-600/80 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 text-xs sm:text-sm">
              {showAll ? 'show less' : 'explore more'}
            </span>
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default BlogContainer;