import React from 'react';

export default function ElinityLandingPage() {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-10 text-center overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #060014, #0c0024)',
      }}
    >
      {/* Top Left Gradient */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600 via-indigo-500 to-transparent opacity-30 blur-3xl rounded-full pointer-events-none z-0" />
      
      {/* Bottom Right Gradient */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-600 via-indigo-500 to-transparent opacity-30 blur-3xl rounded-full pointer-events-none z-0" />
      
      {/* Main Content */}
      <div className="relative z-10 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-8 mt-8 bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
          What is Elinity
        </h1>
        
        <p className="text-sm md:text-base leading-relaxed mb-8 text-gray-200">
        elinity exists for people who believe connection is the foundation of a good life.
        it’s an emotionally intelligent ai platform that helps you meet deeply aligned people and build meaningful relationships over time.
        whether you’re looking for love, friendship, collaborators, or simply richer human connection, elinity brings everything into one coherent space. it understands who you are, what you’re seeking, and how you connect, then introduces you to people who feel like a natural yes.
        this isn’t about more matches. it’s about better ones, and the tools to turn connection into something real.
        </p>
        
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-4">
            What Elinity actually helps you do.
          </h2>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            elinity is about <span className="text-white font-medium">people our people.</span> It’s about 
            <span className="text-white"> better matches</span>, not more. it’s about 
            <span className="text-white"> better conversations</span>, not more. It’s about 
            <span className="text-blue-400"> more signal</span>, not noise.
          </p>
        </div>
        
        <p className="text-sm md:text-base leading-relaxed mb-8 text-gray-200">
         we help you find people you can build incredible relationships with
         for love, friendship, leisure, collaboration, creativity, and life
         and then we help you actually nurture those relationships over time
        </p>  
{/*         <button className="text-sm font-medium text-purple-300 hover:text-purple-200 transition-colors">
          Read More…
        </button> */}
      </div>
    </div>
  );
}
