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
         Elinity is not just an app. It’s your emotionally intelligent AI platform 
          for connecting with amazing people and building great relationships.
        Your social connector and matchmaker, your relationship ally, your playful guide.
        Here, you don’t just swipe. You discover people who make your world feel bigger, warmer, richer, 
          more exciting, more fun-filled, more meaningful.  
        People to build with. Laugh with. Learn with. Play with. Grow with.
        People to live your most fulfilling life with.

        </p>
        
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white">
           Find your people. Build incredible relationships. <br /> Grow a life you love, a life you can’t get enough of. Let Elinity be the beginning of everything beautiful.
        </h2>
        
        <p className="text-sm md:text-base leading-relaxed mb-8 text-gray-200">
         Elinity is your emotionally intelligent, AI-powered social connection universe.
It’s the world’s first platform designed not just to help you meet people—
 but to help you meet the right people,
 and build truly amazing relationships with them—romantic, platonic, creative, or collaborative.
        </p>
        
        <p className="text-sm md:text-base leading-relaxed text-gray-200 mb-4">
         🧠 It’s your personal AI matchmaker.
 💖 It’s your relationship coach and therapist.
 🧑‍🤝‍🧑 It’s your fun-loving social guide and conversation buddy.
 🌱 It’s your deep self-reflection partner.
        </p>
        
        <p className="text-sm md:text-base leading-relaxed text-gray-200 mb-4">
          Elinity helps find you your special someone, find you your people, your tribe - friends, leisure
          buddies, travel companions, cofounders, research and creative collaborators, etc
        </p>
        
        <p className="text-sm md:text-base leading-relaxed text-gray-200 mb-6">
          We help you build amazing relationships with our relationship suite and
          our connection games suite is designed to help you infuse your relationships and friendships
          with more fun, delight, and all of the good stuff
        </p>


        <p className="text-sm md:text-base leading-relaxed text-gray-200 mb-4">
           Elinity understands your values, dreams, relational patterns, strengths, and edges—
           and helps you connect with people who truly resonate with your spirit, your vibe, your purpose.
           Find the people who are meant to be in your life.
           Build the relationships you’ve always longed for.
           Live a life of connection, joy, and depth—with others and with yourself.
        </p>

        
{/*         <button className="text-sm font-medium text-purple-300 hover:text-purple-200 transition-colors">
          Read More…
        </button> */}
      </div>
    </div>
  );
}
