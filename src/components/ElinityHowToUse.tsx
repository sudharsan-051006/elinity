import React from 'react';

/**
 * elinity: how people use it
 * style: minimalist editorial
 * a refined layout that balances air and information.
 */

const ElinityHowToUse = () => {
  const useCases = [
    {
      id: "01",
      title: "find your person",
      content: "we won’t promise “the one”—that would be dishonest. but we can promise this: your odds of meeting someone deeply aligned are far higher here. we optimize for fit across the rich dimensions of your being, not volume.",
    },
    {
      id: "02",
      title: "find your tribe",
      content: "people to play, create, build, and learn with. friendships, collaborators, and creative companions who make life feel fuller, lighter, and more alive.",
    },
    {
      id: "03",
      title: "build better relationships",
      content: "tools, games, and guided experiences for your partner, family, or closest friends. we help your most important connections stay intentional and emotionally rich.",
    },
    {
      id: "04",
      title: "grow the self-relationship",
      content: "through reflection and inner clarity tools. relationships don’t just improve on their own—they improve when you do.",
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-neutral-300 py-24 px-6 font-sans antialiased lowercase">
      <div className="max-w-4xl mx-auto">
        
        {/* header */}
        <header className="mb-24 border-b border-neutral-800 pb-12">
          <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6" style={{ backgroundImage: 'linear-gradient(to right, #e352c1, #0000ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'black'}}>
            how people use elinity
          </h1>
          <p className="text-xl text-neutral-500 max-w-2xl leading-relaxed">
            elinity isn’t a single-use app. <br></br>it’s a relationship platform you grow into. 
            most people use it in four core ways.
          </p>
        </header>

        {/* use cases grid */}
        <div style={{border:'1px solid pink', borderRadius:'10px', padding:'40px', boxShadow:'5px 5px 10px rgba(204, 116, 223, 0.5)'}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {useCases.map((item) => (
              <div key={item.id} className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-fuchsia-500 border border-fuchsia-500/20 px-2 py-0.5 rounded">
                    {item.id}
                  </span>
                  <h2 className="text-xl font-semibold text-white tracking-tight">
                    {item.title}
                  </h2>
                </div>
                <p className="text-neutral-400 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* philosophy footer */}
        <footer className="mt-32 pt-16 border-t border-neutral-800">
          <div className="max-w-2xl">
            <p className="text-lg text-neutral-400 leading-relaxed mb-8">
              elinity is not for everyone. and that’s intentional. it’s for people who take connection 
              <span className="text-white italic"> seriously</span>, 
              <span className="text-white italic"> playfully</span>, and 
              <span className="text-white italic"> with heart</span>.
            </p>
            <h2 className="text-2xl font-bold text-white tracking-tighter">
              welcome to elinity.
            </h2>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default ElinityHowToUse;