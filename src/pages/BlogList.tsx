import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCategoryTabs from './BlogCategoryTabs';
import FeaturedBlogCarousel from './FeaturedBlogCarousel';
import BlogGrid from './BlogGrid';

/**
 * Renders the main blog listing page.
 * This component acts as a container, organizing various blog-related sections
 * like category tabs, a featured carousel, and a grid of blog posts.
 */
const BlogList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a23] to-[#1a1a40] text-white flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 pt-32 pb-16">
        {/* Renders the category filter tabs */}
        <BlogCategoryTabs />
        
        {/* Section for featured blog posts */}
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-left text-white">
          Featured <span className="text-purple-400">Blogs</span>
        </h1>
        <FeaturedBlogCarousel />
        
        {/* Section for all blog posts */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-left text-white">
          Stay Updated with <span className="text-purple-400">Elinity</span>
        </h2>
        <BlogGrid />
      </main>
      <Footer />
    </div>
  );
};

export default BlogList; 