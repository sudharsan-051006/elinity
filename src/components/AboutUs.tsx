import { useState, useEffect } from 'react';

export default function AboutUs() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.5 + 0.1,
          delay: Math.random() * 5
        });
      }
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B0A12] px-0 pb-16 space-y-16 overflow-x-hidden">
      {/* About Us Card */}
      <div 
        className="w-full p-12 mb-8 rounded-none text-center shadow-xl relative overflow-hidden"
        style={{ 
          background: 'radial-gradient(ellipse at 80% 0%, #d946ef 0%, #9d1bb2 35%, #43167a 70%, #140d29 100%)'
        }}>
        {/* Decorative dots */}
        {stars.map((star, index) => (
          <div 
            key={index}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ 
              top: star.top, 
              left: star.left, 
              opacity: star.opacity,
              animation: `twinkle ${2 + star.delay}s infinite ease-in-out`
            }}
          />
        ))}
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 pt-10">About Us</h1>
        <p className="text-xl sm:text-2xl text-white font-medium mb-2">
          The Future of Connection. Rooted in Who We Are, And
        </p>
        <p className="text-xl sm:text-2xl text-white font-medium mb-6">
          Who We Are Becoming.
        </p>
        <p className="text-white text-base sm:text-lg mb-4 max-w-4xl mx-auto">
          At Etinity, we believe that the most important thing in life is who we walk it with. The people we love, create with, grow
          alongside. The people who see us, truly. And so, we built Etinity for them—for your people. For the ones you're meant
          to find. For the ones you already have, and want to deepen with. For the you that you are still becoming.
        </p>
        <p className="text-white text-base sm:text-lg max-w-4xl mx-auto">
          Etinity is more than a matchmaking platform. It's a lifelong social connection ecosystem, powered by emotionally
          intelligent, deeply personalized AI, designed to help you build the best relationships of your life—romantic, platonic,
          and collaborative. It's a mirror, a companion, a catalyst. It learns who you are, what you value, where you're headed,
          and helps you find and nurture the people who matter most along the way.
        </p>
      </div>

      {/* Our Mission Card */}
      <div
        className="w-full p-10 sm:p-16 shadow-xl relative overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 85% 50%, rgba(119,0,255,0.4), #170537 60%)',
        }}>
        <div className="max-w-4xl text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-white text-base sm:text-lg mb-4">
            We exist to help every person experience meaningful, aligned, and extraordinary human connection—across love and intimacy,
            friendship and play, and purpose and collaboration.
          </p>
          <p className="text-white text-base sm:text-lg">
            We're here to change the way we find each other, see each other, and stay connected. Not through dopamine-driven swipes and empty
            encounters, but through depth, resonance, and intelligent relational design—powered by a new kind of AI that understands who you are and
            who you're becoming.
          </p>
        </div>
      </div>

      {/* Our Vision Card */}
      <div
        className="w-full p-10 sm:p-16 rounded-none text-center shadow-xl relative overflow-hidden"
        style={{ 
          background: 'radial-gradient(circle at center, #4b0c6b 0%, #2e084a 40%, #150423 100%)'
        }}>
        {/* Heading with radial highlight */}
        <div className="relative inline-block mb-6">
          {/* Glowing radial gradient behind the heading */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(129,34,199,0.15) 40%, transparent 80%)',
              filter: 'blur(40px)',
              zIndex: 0,
              borderRadius: '50%',
            }}
          />
          {/* Heading text */}
          <h2 className="relative z-10 text-4xl sm:text-5xl font-bold text-white">
            Our Vision
          </h2>
        </div>
        {/* Description paragraphs */}
        <p className="text-white text-base sm:text-lg mb-4 max-w-4xl mx-auto">
          We imagine a world where everyone has the relationships they need to flourish. Where loneliness is no longer the default. Where every person is seen in their full complexity,
          and where technology helps us become more human, not less.
        </p>
        <p className="text-white text-base sm:text-lg mb-4 max-w-4xl mx-auto">
          Our vision is an ecosystem of AI-powered relationship tools that walk with you through the seasons of your life—from finding love, to starting passion projects,
          to growing communities, to navigating the everyday challenges of being close to someone.
        </p>
        <p className="text-white text-base sm:text-lg max-w-4xl mx-auto">
          A world where every person is supported by emotionally attuned AI companions, coaches, and guides—who help them build, maintain, and deepen the relationships that
          define a life well lived.
        </p>
      </div>

      {/* What Makes Elinity Different Section */}
      <div className="w-full px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-purple-400 mb-12 text-center">What makes Elinity Different</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            className="bg-[#1e0a37] rounded-lg p-8 shadow-xl relative overflow-hidden"
          >
            <div 
              className="absolute bottom-0 right-0 w-full h-full rounded-lg opacity-70"
              style={{
                background: 'radial-gradient(circle at bottom right, rgba(186, 104, 255, 0.4) 0%, rgba(107, 33, 168, 0.1) 50%, transparent 80%)'
              }}
            ></div>
            <div className="relative z-10">
              <div className="flex items-start mb-2">
                <span className="text-white text-xl mr-2">✦</span>
                <h3 className="text-xl font-bold text-white">Emotionally Intelligent AI,</h3>
              </div>
              <p className="text-white text-lg ml-6 mb-4">Built for Relationships</p>
              <p className="text-white text-sm">
                Our proprietary architecture combines advanced LLMs, deep user modeling, and contextual personalization engines.
              </p>
              <div className="mt-6 text-right">
                <a href="#" className="text-purple-300 inline-flex items-center">
                  Learn More 
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="bg-[#1e0a37] rounded-lg p-8 shadow-xl relative overflow-hidden"
          >
            <div 
              className="absolute bottom-0 right-0 w-full h-full rounded-lg opacity-70"
              style={{
                background: 'radial-gradient(circle at bottom right, rgba(186, 104, 255, 0.4) 0%, rgba(107, 33, 168, 0.1) 50%, transparent 80%)'
              }}
            ></div>
            <div className="relative z-10">
              <div className="flex items-start mb-2">
                <span className="text-white text-xl mr-2">✦</span>
                <h3 className="text-xl font-bold text-white">Emotionally Intelligent AI,</h3>
              </div>
              <p className="text-white text-lg ml-6 mb-4">Built for Relationships</p>
              <p className="text-white text-sm">
                Our proprietary architecture combines advanced LLMs, deep user modeling, and contextual personalization engines.
              </p>
              <div className="mt-6 text-right">
                <a href="#" className="text-purple-300 inline-flex items-center">
                  Learn More 
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="bg-[#1e0a37] rounded-lg p-8 shadow-xl relative overflow-hidden"
          >
            <div 
              className="absolute bottom-0 right-0 w-full h-full rounded-lg opacity-70"
              style={{
                background: 'radial-gradient(circle at bottom right, rgba(186, 104, 255, 0.4) 0%, rgba(107, 33, 168, 0.1) 50%, transparent 80%)'
              }}
            ></div>
            <div className="relative z-10">
              <div className="flex items-start mb-2">
                <span className="text-white text-xl mr-2">✦</span>
                <h3 className="text-xl font-bold text-white">Emotionally Intelligent AI,</h3>
              </div>
              <p className="text-white text-lg ml-6 mb-4">Built for Relationships</p>
              <p className="text-white text-sm">
                Our proprietary architecture combines advanced LLMs, deep user modeling, and contextual personalization engines.
              </p>
              <div className="mt-6 text-right">
                <a href="#" className="text-purple-300 inline-flex items-center">
                  Learn More 
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="bg-[#1e0a37] rounded-lg p-8 shadow-xl relative overflow-hidden"
          >
            <div 
              className="absolute bottom-0 right-0 w-full h-full rounded-lg opacity-70"
              style={{
                background: 'radial-gradient(circle at bottom right, rgba(186, 104, 255, 0.4) 0%, rgba(107, 33, 168, 0.1) 50%, transparent 80%)'
              }}
            ></div>
            <div className="relative z-10">
              <div className="flex items-start mb-2">
                <span className="text-white text-xl mr-2">✦</span>
                <h3 className="text-xl font-bold text-white">Emotionally Intelligent AI,</h3>
              </div>
              <p className="text-white text-lg ml-6 mb-4">Built for Relationships</p>
              <p className="text-white text-sm">
                Our proprietary architecture combines advanced LLMs, deep user modeling, and contextual personalization engines.
              </p>
              <div className="mt-6 text-right">
                <a href="#" className="text-purple-300 inline-flex items-center">
                  Learn More 
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div
            className="bg-[#1e0a37] rounded-lg p-8 shadow-xl relative overflow-hidden"
          >
            <div 
              className="absolute bottom-0 right-0 w-full h-full rounded-lg opacity-70"
              style={{
                background: 'radial-gradient(circle at bottom right, rgba(186, 104, 255, 0.4) 0%, rgba(107, 33, 168, 0.1) 50%, transparent 80%)'
              }}
            ></div>
            <div className="relative z-10">
              <div className="flex items-start mb-2">
                <span className="text-white text-xl mr-2">✦</span>
                <h3 className="text-xl font-bold text-white">Emotionally Intelligent AI,</h3>
              </div>
              <p className="text-white text-lg ml-6 mb-4">Built for Relationships</p>
              <p className="text-white text-sm">
                Our proprietary architecture combines advanced LLMs, deep user modeling, and contextual personalization engines.
              </p>
              <div className="mt-6 text-right">
                <a href="#" className="text-purple-300 inline-flex items-center">
                  Learn More 
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div
            className="bg-[#1e0a37] rounded-lg p-8 shadow-xl relative overflow-hidden"
          >
            <div 
              className="absolute bottom-0 right-0 w-full h-full rounded-lg opacity-70"
              style={{
                background: 'radial-gradient(circle at bottom right, rgba(186, 104, 255, 0.4) 0%, rgba(107, 33, 168, 0.1) 50%, transparent 80%)'
              }}
            ></div>
            <div className="relative z-10">
              <div className="flex items-start mb-2">
                <span className="text-white text-xl mr-2">✦</span>
                <h3 className="text-xl font-bold text-white">Emotionally Intelligent AI,</h3>
              </div>
              <p className="text-white text-lg ml-6 mb-4">Built for Relationships</p>
              <p className="text-white text-sm">
                Our proprietary architecture combines advanced LLMs, deep user modeling, and contextual personalization engines.
              </p>
              <div className="mt-6 text-right">
                <a href="#" className="text-purple-300 inline-flex items-center">
                  Learn More 
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 7 */}
          <div
            className="bg-[#1e0a37] rounded-lg p-8 shadow-xl relative overflow-hidden"
          >
            <div 
              className="absolute bottom-0 right-0 w-full h-full rounded-lg opacity-70"
              style={{
                background: 'radial-gradient(circle at bottom right, rgba(186, 104, 255, 0.4) 0%, rgba(107, 33, 168, 0.1) 50%, transparent 80%)'
              }}
            ></div>
            <div className="relative z-10">
              <div className="flex items-start mb-2">
                <span className="text-white text-xl mr-2">✦</span>
                <h3 className="text-xl font-bold text-white">Emotionally Intelligent AI,</h3>
              </div>
              <p className="text-white text-lg ml-6 mb-4">Built for Relationships</p>
              <p className="text-white text-sm">
                Our proprietary architecture combines advanced LLMs, deep user modeling, and contextual personalization engines.
              </p>
              <div className="mt-6 text-right">
                <a href="#" className="text-purple-300 inline-flex items-center">
                  Learn More 
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 8 */}
          <div
            className="bg-[#1e0a37] rounded-lg p-8 shadow-xl relative overflow-hidden"
          >
            <div 
              className="absolute bottom-0 right-0 w-full h-full rounded-lg opacity-70"
              style={{
                background: 'radial-gradient(circle at bottom right, rgba(186, 104, 255, 0.4) 0%, rgba(107, 33, 168, 0.1) 50%, transparent 80%)'
              }}
            ></div>
            <div className="relative z-10">
              <div className="flex items-start mb-2">
                <span className="text-white text-xl mr-2">✦</span>
                <h3 className="text-xl font-bold text-white">Emotionally Intelligent AI,</h3>
              </div>
              <p className="text-white text-lg ml-6 mb-4">Built for Relationships</p>
              <p className="text-white text-sm">
                Our proprietary architecture combines advanced LLMs, deep user modeling, and contextual personalization engines.
              </p>
              <div className="mt-6 text-right">
                <a href="#" className="text-purple-300 inline-flex items-center">
                  Learn More 
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for star animation */}
      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0; }
          50% { opacity: 0.7; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}