import React from 'react';
import Navbar from '../components/Navbar';
import BlogCategoryTabs from './BlogCategoryTabs';
import FeaturedBlogCarousel from './FeaturedBlogCarousel';
import BlogGrid from './BlogGrid';

const BlogList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a23] to-[#1a1a40] text-white flex flex-col">
      <Navbar />
      
      {/* Main Container - overflow-x-hidden prevents accidental side-scrolling on mobile */}
      <main className="flex-1 max-w-7xl mx-auto px-4 pt-28 md:pt-32 pb-16 w-full overflow-x-hidden">
        
        {/* Tabs Section - z-[1000] ensures the Resources dropdown stays on top */}
        <div className="relative mb-8"> 
          <BlogCategoryTabs />
        </div>
        
        {/* Featured Section */}
        <section className="mb-12">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-left text-white">
            Featured <span className="text-purple-400">Blogs</span>
          </h1>
          <FeaturedBlogCarousel />
        </section>
        
        {/* Grid Section */}
        <section>
          <h2 className="text-xl md:text-3xl font-bold mb-8 text-left text-white">
            Stay Updated with <span className="text-purple-400">Elinity</span>
          </h2>
          <BlogGrid />
        </section>
      </main>
      
      {/* <Footer /> */}
    </div>
  );
};

export default BlogList;