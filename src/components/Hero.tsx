import React from 'react';
import heroimg from "../../public/hero.jpg"

export default function ElinityLandingPage() {
  return (
    <section className="relative bg-[#0f0225] h-[80vh] pt-24"> {/* Changed to h-screen */}
      {/* Hero Image Background */}
      <div className="absolute inset-0 h-full"> {/* Added h-full */}
        <img 
          src={heroimg} 
          alt="Hero" 
          className="w-full h-full object-cover rounded-b-3xl" /* Changed to h-full */
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-black/10 rounded-b-3xl"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center"> {/* Changed to h-full */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-white text-4xl md:text-7xl mb-2">
            Welcome
          </h1>
          <h1 className="text-white text-4xl md:text-7xl mb-2">
            to the Magical World
          </h1>
          <h1 className="text-white text-4xl md:text-7xl mb-8">
            of <span className="text-indigo-400">Elinity</span>
          </h1>
          
          <p className="text-white text-lg md:text-xl mb-12 opacity-90">
            Where the most beautiful of all things happen - meaningful, resonant connections and amazing, deep relationships
          </p>
          
          {/* Download Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="#" 
              className="w-64 py-3 px-6 text-white font-medium border border-white/20 rounded-full hover:bg-white/10 transition-colors"
            >
              Download On Android
            </a>
            <a 
              href="#" 
              className="w-64 py-3 px-6 text-white font-medium border border-white/20 rounded-full hover:bg-white/10 transition-colors"
            >
              Download On iOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
