import React from 'react';

/**
 * ELINITY: DISCOVERY & FEATURES - Clean Card Layout
 */

interface FeatureProps {
  title: string;
  description: string;
  subtext?: string;
}

const FeatureCard = ({ title, description, subtext }: FeatureProps) => (
  <div className="group relative p-8 rounded-3xl border border-white/5 bg-neutral-900/40 backdrop-blur-md transition-all duration-500 hover:border-fuchsia-500/40 hover:bg-neutral-800/60 lowercase">
    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
    <p className="text-neutral-400 leading-relaxed mb-2">{description}</p>
    {subtext && (
      <p className="text-sm font-medium text-fuchsia-400/80 italic">{subtext}</p>
    )}
  </div>
);

export default function ElinityDiscovery() {
  const features = [
    {
      title: "rich profiles",
      description: "we design profiles to reflect the depth of real humans.",
      subtext: "not just prompts and selfies."
    },
    {
      title: "threshold-based suggestions",
      description: "you never waste time on low-fit connections.",
      subtext: "only those who cross your bar will be recommended."
    },
    {
      title: "deep, multi-dimensional matching",
      description: "values, goals, beliefs, desires, personality, and preferences.",
      subtext: "not vibes or appearances alone."
    },
    {
      title: "proactive relationship support",
      description: "lumi doesn’t just react. it helps you flourish proactively.",
    },
    {
      title: "meaningful play",
      description: "joy, curiosity, novelty, and wonder are essential.",
    },
    {
      title: "profile creation assistant",
      description: "lumi helps you create a profile that feels like you.",
      subtext: "honest, warm, with a little sparkle."
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-fuchsia-500/30 overflow-x-hidden lowercase pb-24">
      
      {/* 1. FEATURES SECTION */}
      <section className="relative pt-24 pb-16 px-6 max-w-7xl mx-auto z-10">
        <header className="mb-20 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
            some other things we have added <br />
            <span className="bg-gradient-to-r from-white via-fuchsia-400 to-purple-600 bg-clip-text text-transparent">
              to create the best experience for you
            </span>
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}

          {/* "ONE LAST THING" FEATURED CARD */}
          <div className="md:col-span-2 lg:col-span-3 relative p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-neutral-900/60 to-neutral-800/20 backdrop-blur-xl transition-all duration-500 hover:border-fuchsia-500/30">
            <div className="max-w-3xl">
              <span className="text-fuchsia-500 font-mono tracking-widest text-sm lowercase mb-4 block">one last thing</span>
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                layer by layer. <span className="text-neutral-500">moment by moment.</span>
              </h3>
              <p className="text-lg md:text-xl text-neutral-300 font-light mb-8">
                we’re adding new experiences every week. we choose not to dump everything on you at once; 
                elinity is built to be discovered. <span className="italic text-neutral-500">like relationships should be.</span>
              </p>
              
              <div className="pt-4 border-t border-white/5">
                 <p className="text-2xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
                  welcome to elinity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-900/10 blur-[150px] rounded-full" />
      </div>
    </div>
  );
}