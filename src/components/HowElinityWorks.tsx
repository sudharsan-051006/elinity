import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
 
function useReveal() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > lastScrollY.current;
        lastScrollY.current = currentScrollY;

        if (entry.isIntersecting && scrollingDown) {
          setShow(true);   // animate when scrolling down
        }

        // reset animation flag but don't hide card
        if (!entry.isIntersecting) {
          setShow(false);
        }
      },
      { threshold: 0.05 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, show];
}

function AnimatedStep({ step, index, isLast }) {
  const [ref, show] = useReveal();

  return (
    <div
      ref={ref}
      className="space-y-8"
style={{
  opacity: 1,
  transform: show
    ? "translateY(0px) scale(1)"
    : "translateY(60px) scale(.98)",
  transition: "all .8s cubic-bezier(.23,1,.32,1)",
}}
    >
      <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-xl bg-gradient-to-r from-[#1a0040]/90 via-[#0d003f]/85 to-[#001a4d]/80 backdrop-blur-xl border border-gray-700">
        
        <div className="md:w-1/2 p-4 md:p-6 lg:p-8 flex items-center justify-center">
          <img
            src={step.image}
            alt={`step ${step.number}`}
            className="rounded-xl w-[90%] max-h-[400px] object-contain"
          />
        </div>

        <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
          <div className="text-lg text-white mb-2 font-semibold">
            {step.number}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            {step.title}
          </h3>

          <p className="text-sm md:text-base text-gray-300 whitespace-pre-line">
            {step.description}
          </p>
        </div>
      </div>

      {!isLast && (
        <div className="border-t border-gray-600 w-full" />
      )}
    </div>
  );
}


export default function ElinityWorks() {
  const purpleGradient = {
    background: 'linear-gradient(to bottom, #060014, #140035)',
  };

  const steps = [
    {
      number: "01",
      title: "create your deep profile",
      description: `elinity begins by helping you express who you really are.
it’s an onboarding journey, not a form.
      
you’ll share things like:

- what you’re here for right now: love, friendship, collaboration, growth, or a mix
- your values, beliefs, rhythms, and lifestyle
- your passions, curiosities, quirks, and edges
- how you communicate, connect, and attach
- what makes you feel safe, excited, seen, and alive

the result is a living profile that evolves with you.
representing not just what you do.
but who you are becoming.`,
      image: "/deep.jpeg",
    },
    {
      number: "02",
      title: "let lumi truly understand you",
      description: `behind elinity is lumi, your emotionally intelligent ai companion.
lumi doesn’t rush to match. it listens first.

by combining:
- psychometrics
- behavioral patterns
- psychological and emotional insight
- your journals, reflections, and preferences

lumi builds a deep understanding of you, your values, your goals, and the kind of people and relationships that actually fit your life.
this is alignment, not search.`,
      image: "/22.jpeg",
    },
    {
      number: "03",
      title: "choose your intention",
      description: `connection looks different in different seasons.
      
so you choose the mode you’re in:
💕 romantic connection
🧩 leisure & friendship
🚀 collaboration & projects
🌱 relationship deepening
🪞 self-relationship and growth

you can toggle modes on or off anytime.
romantic mode can be paused once you’ve found your person.
leisure and collaboration can run alongside everything else.
your life isn’t one-dimensional. elinity isn’t either.
`,
      image: "/24.jpeg",
    },
    {
      number: "04",
      title: "meet only the people who cross your bar",
      description: `this is again where elinity is radically different.
we don’t show you endless profiles.
we don’t ask you to swipe through noise.
lumi only introduces someone if they cross your compatibility threshold.
by default, that bar is high. you can raise or lower it.

if no one crosses the bar, you see no one.
simple. respectful. intentional.

when a match happens:

- both people are told they’ve been intentionally recommended
- alignment exists on both sides
- consent and readiness matter

this alone changes how connection feels.`,
      image: "/26.jpeg",
    },
    { 
      number: "05",
      title: "connect with ease and intention",
      description: `once, there’s a mutual yes, elinity helps you take the next step naturally.

through:
- gentle icebreakers
- vibe checks
- prompts that actually spark conversation
- games and rituals that remove awkwardness

no forced small talk.
no guessing what to say.
      
just momentum, with care.`,
      image: "/20.jpeg",
    },
    { 
      number: "06",
      title: "grow yourself and your relationships",
      description: `elinity doesn’t disappear once you meet someone.

this is where it really begins.

you get access to a rich suite of tools for:
- deepening romantic relationships
- strengthening friendships and family bonds
- building emotional intelligence and communication skills
- reflection, journaling, and self-exploration
- playful connection through games and shared experiences

because great relationships don’t run on autopilot.
they’re designed, tended, repaired, and celebrated.
elinity is not just about meeting the right people.
it’s about becoming the kind of person who builds beautiful relationships, again and again.`,
      image: "/17.jpeg",
    },
  ];

  const tourSteps = [
    { title: "enter your space", description: "Sign in to continue your journey and access your personalized experience", image: "/13.jpeg" },
    { title: "you’re in.", description: `Explore, connect, and experience something meaningful today`, image: "/15.jpeg" },
    { title: "daily recommendations", description: "Fresh connections and meaningful possibilities, curated just for you.", image: "/12.jpeg" },
    { title: "your connections", description: "Everything meaningful, organized in one place", image: "/17.jpeg" },
    { title: "My Profile", description: "Your personal space to express who you are and what you’re looking for.", image: "/deep.jpeg" },
    { title: "know yourself. know others.", description: "your deeper identity shapes every meaningful connection.", image: "/18.jpeg" },
    { title: "Conversations", description: "Where connections turn into meaningful conversations.", image: "/20.jpeg" },
    { title: "Your Circle", description: "Meaningful people. Real connections. One space.", image: "/21.jpeg" },
    { title: "Prompt Your Way to Your People", description: "Choose a mode. Find your vibe. Meet your people.", image: "/24.jpeg" },
    { title: "It’s a Match!", description: "Two paths just aligned.Take the first step and begin something real.", image: "/23.jpeg" },
  ];

  const slides = [...tourSteps, tourSteps[0]];

  const [infoRef, infoShow] = useReveal();


  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Sync active dot with scroll position
  const handleScrollSync = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener('scroll', handleScrollSync);
    }
    return () => scrollEl?.removeEventListener('scroll', handleScrollSync);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 20;
        
        if (isAtEnd) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: clientWidth, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);


  
  const scrollManual = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const moveAmount = direction === 'left' ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: moveAmount, behavior: 'smooth' });
    }
  };

  console.log(tourSteps.length)
  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left: index * clientWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div
      className="min-h-screen text-white py-20 px-4 md:px-12 lg:px-20 lowercase"
      style={purpleGradient}
    >
      {/* header */}
      <motion.div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          <span className="text-white">how </span>
          <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
            elinity works
          </span>
        </h1>
        <div className="text-sm md:text-base max-w-3xl mx-auto text-gray-300">
          <p>
            from finding your purpose or your people, to building boundless relationships 
            that actually grows, elinity is designed to move with you through every phase of connection.
          </p>
          <div className="max-w-md mx-auto p-5">
            <p style={{ color: "white", fontSize: "20px", fontWeight: "600", letterSpacing: "1px", marginBottom: "8px" }}> not in a rush.</p>
            <p style={{ color: "#e0e0e0", fontSize: "20px", fontWeight: "600", letterSpacing: "1px", marginBottom: "8px" }}> not randomly.</p>
            <p style={{ color: "#ffffff", fontSize: "22px", fontWeight: "700", letterSpacing: "1.2px", marginTop: "10px" }}>and never below your bar.</p>
          </div>
          <p style={{paddingRight:'0px', color: "#e0e0e0", fontSize: "18px", fontWeight: "500", letterSpacing: "0.5px"}}>
            here's how it works, end to end.
          </p>
        </div>
      </motion.div>

      {/* steps cards */}
       <motion.div
        
       className="max-w-6xl mx-auto space-y-16">
        {steps.map((step, index) => (
          <AnimatedStep
            key={index}
            step={step}
            index={index}
            isLast={index === steps.length - 1}
          />
        ))}
      </motion.div>

      <div className="pt-16"></div>

      {/* -------- INFO SECTION -------- */}
      <div
        ref={infoRef}
        className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-[#07071c] to-[#0f1030] text-white overflow-hidden"
        style={{
          borderRadius: "24px",
          opacity:1,
          transform: infoShow
            ? "translateY(0px)"
            : "translateY(120px)",
          transition: "all 1s cubic-bezier(.23,1,.32,1)",
        }}
      >
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
            Quick tour - inside <span className="text-purple-400">Elinity</span>
          </h1>

          <p className="text-center text-gray-300 text-lg mb-14">
            Curious what it actually looks like inside?
            Here’s a little peek behind the curtain.
          </p>

          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            <h2 className="text-2xl font-bold text-purple-300 mb-6">
              What you’ll find inside the app
            </h2>

            <ul className="grid md:grid-cols-2 gap-4 text-gray-200 mb-10">
              <li>• Intentional profiles that go deeper than surface-level stats</li>
              <li>• Dynamic compatibility insights powered by real psychology</li>
              <li>• Warm conversation prompts that never feel awkward</li>
              <li>• Rituals and shared goals that grow with your relationship</li>
              <li>• Weekly reflection moments that make you think</li>
              <li>• Playful connection games that are surprisingly deep</li>
              <li>• Visual intention tracking that evolves over time</li>
              <li>• AI-guided conversations for clarity and growth</li>
            </ul>

            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent my-8"></div>

            <h2 className="text-2xl font-bold text-purple-300 mb-6">
              What it feels like
            </h2>

            <div className="space-y-3 text-lg text-gray-200">
              <p>It feels intentional, not noisy.</p>
              <p>It feels human, not transactional.</p>
              <p className="text-white font-semibold">
                It feels like building something, not browsing or swiping something.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div 
        className="relative py-24 px-6 md:px-16 bg-gradient-to-b from-[#07071c] to-[#0f1030] text-white overflow-hidden mt-12 group" 
        style={{ borderRadius: '24px' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; }
          .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full"></div>

        <div className="max-w-[1500px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-gray-400 text-lg">Hover to pause, scroll to explore.</p>
          </div>

          {/* Nav Arrows */}
          <button 
            onClick={() => scrollManual('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex hover:bg-white/10 active:scale-95"
          >
            <ChevronLeft className="w-8 h-8 text-purple-400" />
          </button>

          <button 
            onClick={() => scrollManual('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex hover:bg-white/10 active:scale-95"
          >
            <ChevronRight className="w-8 h-8 text-purple-400" />
          </button>

          {/* Carousel */}
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-hide scroll-smooth"
          >
            {tourSteps.map((step, index) => (
              <div 
                key={index} 
                className="min-w-[70%] md:min-w-[70%] lg:min-w-[800px] snap-center shrink-0"
              >
                <div className="flex flex-col md:flex-row backdrop-blur-xl bg-white/5 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl mx-2 md:mx-4">
                  <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-12 bg-black/20">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-[240px] md:w-[320px] h-auto rounded-[3rem] shadow-2xl border-[8px] border-black object-contain bg-slate-900"
                    />
                  </div>

                  <div className="hidden md:flex md:w-1/2 p-8 md:p-12 flex-col justify-center text-left">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight" style={{ background: 'linear-gradient(90deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                      {step.title} <span className="text-purple-400"></span>
                    </h2>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                      <div 
                      className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/50"
                      style={{ display: 'inline-flex', marginRight: '8px' }}>
                            <span className="text-purple-400 text-[10px] font-bold">✓</span>
                      </div>
                      {step.description}
                    </p>
                    <div className="space-y-4">
                      {[].map((feature, fIdx) => (
                        <div key={fIdx} className="flex gap-3 items-center">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/50">
                            <span className="text-purple-400 text-[10px] font-bold">✓</span>
                          </div>
                          <span className="text-gray-200 text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigatable Dots */}
          <div className="flex justify-center gap-3 mt-4">
          {tourSteps.slice(0, 10).map((_, idx) => (
            <button 
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`transition-all duration-300 rounded-full h-2 ${
                activeIndex === idx
                  ? "w-8 bg-purple-400"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}