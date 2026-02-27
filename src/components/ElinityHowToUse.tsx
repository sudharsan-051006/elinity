import React, { useEffect, useRef, useState } from 'react';

const AnimatedBlock = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        } else {
          setShow(false); // reset when leaving
        }
      },
      { threshold: 0.35 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: show ? 1 : 0,
        transform: show
          ? "translateY(0px)"
          : "translateY(70px)",
        transition: `all 0.9s cubic-bezier(.23,1,.32,1) ${delay}s`
      }}
    >
      {children}
    </div>
  );
};

const ElinityHowToUse = () => {
  const useCases = [
    {
      id: "01",
      title: "to find their person",
      content: `we won’t promise “the one”.
                unless we have every human on earth on the platform, that would be dishonest.
                but we can promise this:
                your odds of meeting someone deeply aligned are far higher here than almost anywhere else.
                because we optimize for fit across the rich dimensions of your being, not volume.`,
    },
    {
      id: "02",
      title: "to find their tribe",
      content: "people to play, create, build, and learn with. friendships, leisure companions, collaborators, creative companions. the people who make life feel fuller, lighter, more alive.",
    },
    {
      id: "03",
      title: "to build better relationships",
      content: `
                with your partner.
                with your family.
                with your closest friends.
                using tools, games, rituals, prompts, and guided experiences
                that help relationships stay intentional, playful, and emotionally rich`,
    },
    {
      id: "04",
      title: "to explore and grow the self-relationship",
      content: `
      through voice journaling, reflection, skill-building, and self-exploration.
building emotional intelligence, communication skills, and inner clarity over time.
because relationships don’t just improve on their own.
they improve when you do.`,
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-neutral-300 py-24 px-6 font-sans antialiased lowercase">
      <div className="max-w-4xl mx-auto">
        
        {/* header */}
        <AnimatedBlock>
          <header className="mb-24 border-b border-neutral-800 pb-12">
            <h1
              className="text-4xl md:text-5xl font-medium tracking-tight mb-6"
              style={{
                backgroundImage: 'linear-gradient(to right, #e352c1, #0000ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              how people use elinity
            </h1>

            <p className="text-xl text-neutral-500 max-w-2xl leading-relaxed">
              elinity isn’t a single-use app. <br/>
              it’s a relationship platform you grow into. 
              most people use it in four core ways.
            </p>
          </header>
        </AnimatedBlock>

        {/* use cases */}
        <AnimatedBlock delay={0.1}>
          <div style={{
            border:'1px solid pink',
            borderRadius:'10px',
            padding:'40px',
            boxShadow:'5px 5px 10px rgba(204, 116, 223, 0.5)'
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {useCases.map((item, idx) => (
                <AnimatedBlock key={item.id} delay={idx * 0.08}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-mono text-fuchsia-500 border border-fuchsia-500/20 px-2 py-0.5 rounded">
                        {item.id}
                      </span>
                      <h2 className="text-xl font-semibold text-white tracking-tight">
                        {item.title}
                      </h2>
                    </div>
                    <p className="text-neutral-400 leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </AnimatedBlock>
              ))}
            </div>
          </div>
        </AnimatedBlock>

        {/* footer */}
        <AnimatedBlock delay={0.15}>
          <footer className="mt-32 pt-16 border-t border-neutral-800">
            <div className="max-w-2xl">
              <p className="text-lg text-neutral-400 leading-relaxed mb-8">
                elinity is not for everyone. and that’s intentional. it’s for people who take connection 
                <span className="text-white italic"> seriously</span>, 
                <span className="text-white italic"> and playfully</span>, and 
                <span className="text-white italic"> with heart</span>.
              </p>
              <h2 className="text-2xl font-bold text-white tracking-tighter">
                welcome to elinity.
              </h2>
            </div>
          </footer>
        </AnimatedBlock>

      </div>
    </div>
  );
};

export default ElinityHowToUse;