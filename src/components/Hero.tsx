import React from 'react';
import heroimg from "../../public/hero.jpg"

export default function ElinityLandingPage() {
  return (
    <section className="relative bg-[#0f0225] h-screen">
      {/* Hero Image Background - extends to full height including navbar area */}
      <div className="absolute inset-0 h-full">
        <img 
          src={heroimg} 
          alt="Hero" 
          className="w-full h-full object-cover rounded-b-3xl opacity-75"
        />
      </div>

      {/* Content Container - add top padding to account for navbar */}
      <div className="relative z-10 h-full flex items-center pt-16">
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
          
          <p className="text-white text-lg md:text-xl mt-10 mb-12">
            where the most beautiful of all things happen - connections, deep human connections
          </p>
          
          {/* Premium Download Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center mt-20 gap-10">
            {/* Android Button */}
            <div className="relative w-72 h-14">
              <a 
                href="#" 
                className="premium-button android-button group relative flex items-center justify-center w-full h-full text-white font-semibold text-lg rounded-2xl overflow-hidden transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(0, 0, 0, 0.1) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(255, 255, 255, 0.1) inset, 0 -2px 8px rgba(0, 0, 0, 0.2) inset'
                }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {/* Android Robot Icon */}
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6,18c0,0.55 0.45,1 1,1h1v3.5c0,0.83 0.67,1.5 1.5,1.5s1.5,-0.67 1.5,-1.5V19h2v3.5c0,0.83 0.67,1.5 1.5,1.5s1.5,-0.67 1.5,-1.5V19h1c0.55,0 1,-0.45 1,-1V8H6V18zM3.5,8C2.67,8 2,8.67 2,9.5v7c0,0.83 0.67,1.5 1.5,1.5S5,17.33 5,16.5v-7C5,8.67 4.33,8 3.5,8zM20.5,8C19.67,8 19,8.67 19,9.5v7c0,0.83 0.67,1.5 1.5,1.5s1.5,-0.67 1.5,-1.5v-7C22,8.67 21.33,8 20.5,8zM15.53,2.16l1.3,-1.3c0.2,-0.2 0.2,-0.51 0,-0.71c-0.2,-0.2 -0.51,-0.2 -0.71,0l-1.48,1.48C13.85,1.23 12.95,1 12,1c-0.96,0 -1.86,0.23 -2.66,0.63L7.85,0.15c-0.2,-0.2 -0.51,-0.2 -0.71,0c-0.2,0.2 -0.2,0.51 0,0.71l1.31,1.31C6.97,3.26 6,5.01 6,7h12C18,5.01 17.03,3.26 15.53,2.16zM10,5H9V4h1V5zM15,5h-1V4h1V5z"/>
                  </svg>
                  Download On Android
                </span>
              </a>
            </div>

            {/* iOS Button */}
            <div className="relative w-72 h-14">
              <a 
                href="#" 
                className="premium-button ios-button group relative flex items-center justify-center w-full h-full text-white font-semibold text-lg rounded-2xl overflow-hidden transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(270deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(0, 0, 0, 0.1) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(255, 255, 255, 0.1) inset, 0 -2px 8px rgba(0, 0, 0, 0.2) inset'
                }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  {/* Apple Logo */}
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download On iOS
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .premium-button:hover {
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4), 0 2px 12px rgba(255, 255, 255, 0.15) inset, 0 -2px 12px rgba(0, 0, 0, 0.25) inset !important;
            border-color: rgba(255, 255, 255, 0.3) !important;
          }

          .android-button:hover {
            background: linear-gradient(135deg, rgba(168, 255, 120, 0.2) 0%, rgba(105, 240, 174, 0.08) 50%, rgba(34, 197, 94, 0.15) 100%) !important;
            border-color: rgba(168, 255, 120, 0.3) !important;
          }

          .ios-button:hover {
            background: linear-gradient(270deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(0, 0, 0, 0.15) 100%) !important;
            border-color: rgba(255, 255, 255, 0.3) !important;
          }
        `
      }} />
    </section>
  );
}