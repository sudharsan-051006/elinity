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

  const starPositions = [
    { top: '10%', left: '15%', delay: 0.5 },
    { top: '25%', left: '80%', delay: 1.2 },
    { top: '40%', left: '50%', delay: 2.0 },
    { top: '65%', left: '10%', delay: 0.8 },
    { top: '85%', left: '75%', delay: 1.5 },
    { top: '15%', left: '45%', delay: 2.2 },
    { top: '55%', left: '90%', delay: 0.3 },
    { top: '75%', left: '30%', delay: 1.8 },
  ];

  const missionPoints = [
    "Find partners, friends, and collaborators who truly fit them",
    "Understand themselves better, so they can show up more honestly",
    "Build skills for communication, vulnerability, and repair",
    "Maintain and deepen relationships across years, not just moments",
    "Create shared meaning, projects, and lives together"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B0A12] px-0 pb-16 space-y-16 overflow-x-hidden">
      {/* About Us Card */}
      <div 
          className="w-full relative overflow-hidden text-center shadow-xl"
          style={{ 
            padding: 'clamp(60px, 12vw, 120px) 24px',
            background: 'radial-gradient(ellipse at 80% 0%, #d946ef 0%, #9d1bb2 15%, #43167a 40%, #0f0a1e 80%)',
            borderRadius: '0px'
          }}
      >
        {/* Twinkling Stars Background */}
        <div className="absolute inset-0 pointer-events-none">
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
        </div>
<br></br>
        <div className="relative z-10 max-w-4xl mx-auto">

          {/* Main Title */}
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-8 tracking-tight">
            About Us
          </h1>

          {/* Intro Slogan */}
          <div className="mb-12">
            <p className="text-xl sm:text-3xl text-white font-medium leading-tight">
              The Future of Connection. Rooted in Who We Are,
            </p>
            <p className="text-xl sm:text-3xl text-white font-medium leading-tight">
              And Who We Are Becoming.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Primary Narrative */}
            <p className="text-white text-lg sm:text-xl font-light leading-relaxed mb-8">
              At Elinity, we believe that the most important thing in life is <strong className="font-semibold text-white">who we walk it with.</strong>
            </p>

            {/* Structured List */}
            <div className="text-white/90 text-base sm:text-lg mb-10 space-y-2">
              <p>The people we love.</p>
              <p style={{paddingLeft:'15px'}}>The people we grow alongside.</p>
              <p style={{paddingLeft:'15px'}}>The people we create with, struggle with, and build with.</p>
              <p className="italic text-white" style={{paddingLeft:'15px'}}>The people who see us clearly, and choose us anyway.</p>
            </div>

            {/* The Context/Problem */}
            <p className="text-gray-400 text-base leading-relaxed mb-12">
              And yet, most of us are left to chance. We rely on luck, proximity, and tools that optimize for <span className="text-white">engagement rather than outcomes</span>. The result is a world that is more connected on the surface, and more fragmented underneath.
            </p>

            {/* Punchy Transition */}
            <p 
              className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-12"
              style={{ 
                background: 'linear-gradient(to right, #7759fd, #d946ef)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Elinity exists to change that.
            </p>

            {/* Final Highlight Box */}
            <div 
              className="p-8 border border-white/10 bg-white/5 rounded-2xl"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <p className="text-white text-lg leading-relaxed font-medium mb-2">
                We are building Elinity <span className="text-[#7759fd]">for your people.</span>
              </p>
              <p className="text-gray-300">For the ones you are meant to find.</p>
              <p className="text-gray-300">For the ones you already have.</p>
              <p className="text-gray-500 italic mt-4 text-sm">And for the version of you that is still unfolding.</p>
            </div>
          </div>
        </div>
      </div>

      <section style={{ padding: '60px 0', overflow: 'hidden' }}>
        <div style={{ 
          width: '90%',           // Uses most of the screen on mobile
          maxWidth: '800px',      // Limits width on desktop (replaces the 50%)
          margin: '0 auto', 
          padding: '0 10px', 
          position: 'relative', 
          zIndex: 1 
        }}>
          
          {/* TITLE */}
          <h2 style={{ 
            fontSize: 'clamp(32px, 8vw, 48px)', 
            fontWeight: '800', 
            letterSpacing: '-0.04em', 
            marginBottom: '32px',
            lineHeight: '1.1',
            background: 'linear-gradient(to bottom, #ffffff, #b0a2f1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'left' // Kept left for better mobile flow
          }}>
            What Elinity Is
          </h2>

          {/* THE DEFINITION CARD */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '24px',      // Reduced padding slightly for mobile
            borderRadius: '24px',
            backdropFilter: 'blur(10px)',
            marginBottom: '40px'
          }}>
            <p style={{ 
              fontSize: 'clamp(16px, 4vw, 18px)', // Responsive font size
              lineHeight: '1.6', 
              margin: 0, 
              color: 'rgba(255,255,255,0.9)',
              fontWeight: '400'
            }}>
              Elinity is not just a matchmaking app. It is a <span style={{ color: '#7759fd', fontWeight: '600' }}>lifelong social connection ecosystem</span>, 
              designed to help you build the best relationships of your life across romance, friendship, collaboration, and shared purpose.
            </p>
          </div>

          {/* THE CORE MECHANIC */}
          <p style={{ 
            fontSize: 'clamp(14px, 3.5vw, 16px)', 
            lineHeight: '1.8', 
            marginBottom: '48px', 
            color: 'rgba(255,255,255,0.7)',
            padding: '0 4px'
          }}>
            At its core, Elinity is powered by emotionally intelligent, deeply personalized AI that learns who you are, what you value, how you relate, and where you are headed. It helps you find people who are aligned with you at a deeper level, and then helps you <span style={{ color: '#ffffff', fontWeight: '500' }}>actually build something real with them over time.</span>
          </p>

          {/* THE FOUR IDENTITIES */}
          <div style={{ 
            display: 'grid', 
            // This ensures 1 column on mobile, 2 columns on tablet/desktop
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: '16px', 
            marginBottom: '56px'
          }}>
            {[
              { label: "A mirror", context: "when you need clarity." },
              { label: "A guide", context: "when you feel stuck." },
              { label: "A companion", context: "when relationships get complex." },
              { label: "A catalyst", context: "when something meaningful wants to begin." }
            ].map((item, i) => (
              <div key={i} style={{
                padding: '20px',
                background: 'rgba(119, 89, 253, 0.05)',
                borderLeft: '3px solid #7759fd',
                borderRadius: '4px 16px 16px 4px'
              }}>
                <p style={{ margin: 0, fontSize: '17px', fontWeight: '700', color: '#ffffff' }}>{item.label}</p>
                <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>{item.context}</p>
              </div>
            ))}
          </div>

          {/* THE PHILOSOPHY FOOTER */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '40px',
            textAlign: 'center'
          }}>
            <p style={{ 
              fontSize: 'clamp(18px, 5vw, 20px)', 
              fontWeight: '500', 
              lineHeight: '1.5', 
              color: '#ffffff',
              margin: 0
            }}>
              We believe technology should not replace human connection. <br style={{ display: 'none' }} className="mobile-break-hidden" />
              It should <span style={{ color: '#7759fd', fontWeight: '700' }}>amplify it</span>, protect it, and help it flourish.
            </p>
          </div>
        </div>
      </section>
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
          <div 
            className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10"
            style={{ backgroundColor: '#140d29' }}
          >
            {/* Subtle accent glow in the corner */}
            <div 
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-[100px] opacity-20"
              style={{ backgroundColor: '#d946ef' }}
            />

            <div className="relative z-10 p-8 sm:p-16">
              {/* Header */}
              <div className="mb-10">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight" style={{background: 'linear-gradient(to bottom, #ffffff, #b0a2f1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Why We Exist
                </h1>
              </div>

              {/* Core Problem Section */}
              <div className="space-y-8">
                <p className="text-xl sm:text-2xl text-white font-semibold leading-snug">
                  Modern relationship tools are fundamentally misaligned.
                </p>

                <div className="grid gap-6 text-white/70 text-lg leading-relaxed font-light">
                  <p>
                    They optimize for swipes, novelty, and short-term engagement. They fragment attention, 
                    commodify people, and leave the hardest parts of connection entirely unsupported. 
                    Even when we meet someone compatible, we are given almost no help in navigating 
                    communication, repair, growth, or the long arc of being close to another human being.
                  </p>
                  
                  <p className="italic border-l-2 border-fuchsia-500/40 pl-6 py-2">
                    At the same time, loneliness, relational burnout, and disconnection are quietly 
                    becoming the default state for millions.
                  </p>
                </div>

                {/* The Pivot Statement */}
                <div className="bg-white/5 rounded-2xl p-8 border border-white/5 backdrop-blur-sm">
                  <p className="text-xl text-white/90 mb-4">
                    We don’t believe this is a human failure.
                  </p>
                  <p className="text-3xl sm:text-4xl font-black text-white tracking-tighter">
                    We believe it is a <span className="text-[#7759fd]">design failure.</span>
                  </p>
                </div>

                {/* Closing */}
                <p className="text-xl text-white font-medium pt-4 border-t border-white/10">
                  Elinity exists because we believe relationships are too important to leave to chance, 
                  and too complex to be handled by shallow tools.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* Our Mission Card */}
      <div
          className="relative overflow-hidden text-left sm:text-left"
          style={{
            // Mobile: 24px padding | Desktop: scales up to 64px
            padding: 'clamp(24px, 5vw, 64px)',
            background: 'linear-gradient(135deg, #0f0a1e 0%, #150a2e 100%)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            margin: '0 12px' // Added small margin so the card doesn't touch screen edges
          }}
        >
          <div className="max-w-3xl mx-auto">
            
            {/* Main Title - Smaller on mobile */}
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 sm:mb-10 tracking-tight" style={{background: 'linear-gradient(to bottom, #ffffff, #b0a2f1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
              Our Mission
            </h2>

            {/* Primary Bold Statement - Adjusted line height */}
            <p className="text-white text-lg sm:text-xl font-bold mb-6 leading-snug">
              Our mission is to help every person experience meaningful, aligned, and extraordinary human connection.
            </p>

            {/* Secondary Description - Lighter text for readability */}
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
              We believe that the current tools for connection are fragmented. We are here to redesign how people find each other, see each other, and stay connected, using intelligence that is patient and humane.
            </p>

            {/* Accent Quote / Sidebar Block - Thinner border for mobile */}
            <div className="border-l-2 border-[#a855f7]/40 pl-4 sm:pl-6 mb-10 sm:mb-12">
              <p className="text-gray-300 text-base sm:text-lg italic leading-relaxed">
                Helping people build skills for communication, vulnerability, and repair while deepening relationships across years, not just moments.
              </p>
            </div>

            {/* Highlighted Card Block - Reduced padding on mobile */}
            <div 
              className="p-5 sm:p-8 mb-10 sm:mb-12"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              <p className="text-gray-400 text-sm sm:text-lg mb-2">That means helping people:</p>
              <h3 className="text-xl sm:text-3xl font-bold text-white leading-tight">
                Create <span className="text-[#7759fd]">shared meaning</span> and lives together.
              </h3>
            </div>

            {/* Horizontal Divider */}
            <hr className="border-white/10 mb-8 sm:mb-10" />

            {/* Final Footer Statement */}
            <p className="text-white text-base sm:text-lg font-medium leading-relaxed">
              Elinity exists because we believe relationships are too important to leave to chance, and too complex to be handled by shallow tools.
            </p>
          </div>
        </div>
<br></br>
      {/* Our Vision Card */}
      <div
        className="relative overflow-hidden text-left"
        style={{
          // Reduced mobile padding from 40px to 24px
          padding: 'clamp(24px, 6vw, 64px)',
          background: 'linear-gradient(135deg, #0f0a1e 0%, #150a2e 100%)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          margin: '0 12px' // Added margin to match the Mission card
        }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Main Title - Scaled for mobile */}
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 sm:mb-10 tracking-tight" style={{background: 'linear-gradient(to bottom, #ffffff, #b0a2f1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
            Our Vision
          </h2>

          {/* Primary Bold Statement */}
          <p className="text-white text-lg sm:text-xl font-bold mb-6 leading-snug">
            We imagine a world where no one has to navigate relationships alone.
          </p>

          {/* Narrative text */}
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
            A world where loneliness is not normalized. Where depth is not rare. 
            Where people are seen in their full complexity, not reduced to profiles or metrics.
          </p>

          {/* Accent Quote / Sidebar Block - Responsive padding */}
          <div className="border-l-2 border-[#a855f7]/40 pl-4 sm:pl-6 mb-10 sm:mb-12">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Our long-term vision is an ecosystem of AI-powered relationship tools that walk with you through the seasons of your life. From finding love and building friendships to navigating the everyday realities of being close to someone.
            </p>
          </div>

          {/* Highlighted Card Block - Adjusted for mobile wrapping */}
          <div 
            className="p-5 sm:p-8 mb-10 sm:mb-12"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}
          >
            <p className="text-gray-400 text-sm sm:text-lg mb-4">Access to emotionally attuned guides that help you:</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-white font-bold text-lg sm:text-2xl">
              {["Reflect", "Grow", "Repair", "Choose better", "Love better", "Create more", "Explore deeper"].map((item, i, arr) => (
                <span key={i} className="flex items-center">
                  <span className={i % 2 === 0 ? "text-white" : "text-[#7759fd]"}>{item}</span>
                  {i !== arr.length - 1 && (
                    /* Hidden separators on very small screens to prevent weird wrapping */
                    <span className="ml-3 opacity-20 text-white font-light hidden xs:inline">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Horizontal Divider */}
          <hr className="border-white/10 mb-8 sm:mb-10" />

          {/* Final Footer Statement */}
          <p className="text-white text-base sm:text-lg font-medium leading-relaxed italic">
            Not by telling people what to do, but by helping them understand themselves and each other more clearly.
          </p>
        </div>
      </div>

<br></br>
      <div
        className="relative overflow-hidden text-left"
        style={{
          // Mobile: 24px padding | Desktop: scales up to 64px
          padding: 'clamp(24px, 6vw, 64px)',
          background: 'linear-gradient(135deg, #0f0a1e 0%, #150a2e 100%)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          margin: '0 12px' // Keeps the card from hitting the phone screen edges
        }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Main Title - Responsive font size */}
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 sm:mb-10 tracking-tight" style={{background: 'linear-gradient(to bottom, #ffffff, #b0a2f1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
            Our Philosophy on AI
          </h2>

          {/* Primary Bold Statement */}
          <p className="text-white text-lg sm:text-xl font-bold mb-6 leading-snug">
            We believe AI is one of the most powerful tools humanity has ever created. What matters now is how we choose to use it.
          </p>

          {/* Narrative Paragraph */}
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
            At Elinity, we believe AI is at its best when it amplifies the human spirit rather than replacing it. It should support our drives to connect, create, and grow—helping us become more conscious, not more distracted.
          </p>

          {/* Accent Quote / Sidebar Block */}
          <div className="border-l-2 border-[#a855f7]/40 pl-4 sm:pl-6 mb-10 sm:mb-12">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Our core meta-directives involve building aligned AI that is emotionally intelligent, 
              focused on long-term wellbeing, and designed for depth rather than dependency.
            </p>
          </div>

          {/* Highlighted Card Block - Adjusted padding for mobile */}
          <div 
            className="p-5 sm:p-8 mb-10 sm:mb-12"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}
          >
            <p className="text-gray-400 text-sm sm:text-lg mb-2 sm:mb-4">AI shouldn't be a substitute.</p>
            <h3 className="text-xl sm:text-3xl font-bold text-white leading-tight">
              It is <span className="text-[#7759fd]">scaffolding</span> for better, deeper human-to-human connection.
            </h3>
          </div>

          {/* Horizontal Divider */}
          <hr className="border-white/10 mb-8 sm:mb-10" />

          {/* Detailed List - Stays 1 column longer on mobile for readability */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {[
              "Emotionally intelligent",
              "Aligned with long-term human wellbeing",
              "Designed for depth rather than dependency",
              "Built to reinforce human-to-human connection"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#a855f7] mt-2 shrink-0" />
                <p className="text-gray-300 text-sm sm:text-base leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

<br></br>

      <div
          className="relative overflow-hidden text-left"
          style={{
            padding: 'clamp(40px, 8vw, 64px)',
            background: 'linear-gradient(135deg, #0f0a1e 0%, #150a2e 100%)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          <div className="max-w-3xl">
            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-10 tracking-tight" style={{background: 'linear-gradient(to bottom, #ffffff, #b0a2f1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
              What We’re Building Toward
            </h2>

            {/* Primary Bold Statement */}
            <p className="text-white text-xl font-bold mb-6">
              Elinity is being built as a long-term company, not a short-term product.
            </p>

            {/* Narrative Paragraph */}
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              We are not optimizing for quick wins or surface-level engagement. We are building relationship infrastructure for the future, with the belief that strong relationships are the foundation of individual flourishing and collective wellbeing.
            </p>

            {/* Highlighted Card Block (The "Design Failure" style box) */}
            <div 
              className="p-8 mb-12"
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              <p className="text-gray-300 text-lg mb-6">We believe:</p>
              
              <div className="space-y-4">
                {[
                  "Everyone deserves to find their people",
                  "Everyone deserves to be understood",
                  "Everyone deserves a life rich in love, friendship, purpose, and belonging"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="h-px w-6 bg-[#7759fd]" />
                    <p className="text-white text-lg sm:text-xl font-semibold">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Horizontal Divider */}
            <hr className="border-white/10 mb-10" />

            {/* Final Footer Statement */}
            <p className="text-white text-lg font-medium leading-relaxed">
              Connecting the right people, at the right time, with the right support, is <span className="text-[#a855f7]">one of the greatest unlocks</span> available to humanity.
            </p>
          </div>
        </div>
<br></br>

    <div
      className="relative overflow-hidden text-left"
      style={{
        // Mobile: 24px padding | Desktop: scales up to 64px
        padding: 'clamp(24px, 6vw, 64px)',
        background: 'linear-gradient(135deg, #0f0a1e 0%, #150a2e 100%)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        margin: '0 12px' // Matches the alignment of your other cards
      }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Main Title - Responsive size */}
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 sm:mb-10 tracking-tight" style={{background: 'linear-gradient(to bottom, #ffffff, #b0a2f1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
          Who We’re For
        </h2>

        {/* Primary Bold Statement */}
        <p className="text-white text-lg sm:text-xl font-bold mb-6 leading-snug">
          Elinity is for people who care about depth.
        </p>

        {/* Narrative Paragraph - Adjusted for readability on narrow screens */}
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
          People who want real connection, not endless choice.<br className="hidden sm:block" />
          People who want to grow, not perform.<br className="hidden sm:block" />
          People who believe relationships are a craft worth learning, not a gamble to endure.
        </p>

        {/* Highlighted Card Block */}
        <div 
          className="p-5 sm:p-8 mb-10 sm:mb-12"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          <p className="text-gray-400 text-sm sm:text-lg mb-4 sm:mb-6">It is for:</p>
          
          {/* Role Tags - Gap adjusted for thumb-tapping/visual clarity */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {["Users", "Builders", "Researchers", "Designers", "Investors"].map((role, i) => (
              <span 
                key={i} 
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 text-white text-xs sm:text-sm font-medium bg-white/5"
              >
                {role}
              </span>
            ))}
          </div>
          
          <h3 className="text-lg sm:text-2xl font-bold text-white mt-6 sm:mt-8 leading-tight">
            Who believe technology can still be used to make us <span className="text-[#7759fd]">more human</span>, not less.
          </h3>
        </div>

        {/* Horizontal Divider */}
        <hr className="border-white/10 mb-2" />
      </div>
    </div>
<br></br>
      <div
        className="relative overflow-hidden text-left"
        style={{
          // Responsive padding: 24px on phone, scales to 64px on desktop
          padding: 'clamp(24px, 6vw, 64px)',
          background: 'linear-gradient(135deg, #0f0a1e 0%, #150a2e 100%)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          borderRadius: '24px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          margin: '0 12px' // Keeps the card consistent with your other sections
        }}
      >
        <div className="max-w-3xl mx-auto">
          {/* Main Title - Smaller on mobile to prevent overflow */}
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 sm:mb-10 tracking-tight" style={{background: 'linear-gradient(to bottom, #ffffff, #b0a2f1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
            Where We’re Going
          </h2>

          {/* Primary Bold Statement */}
          <p className="text-white text-lg sm:text-xl font-bold mb-6 italic leading-snug">
            We are early. Intentionally so.
          </p>

          {/* Narrative Paragraph */}
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
            We are building something that will take time, care, and courage. Something that will evolve as people evolve. Something that aims to last decades, not cycles.
          </p>

          {/* Highlighted Card Block */}
          <div 
            className="p-5 sm:p-8 mb-10 sm:mb-12"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.05)'
            }}
          >
            <h3 className="text-xl sm:text-3xl font-bold text-white leading-tight mb-4">
              Elinity is our attempt to contribute to a <span className="text-[#7759fd]">better relational future.</span>
            </h3>
            <p className="text-gray-300 text-sm sm:text-lg leading-relaxed">
              One where technology helps us find each other, choose each other, and keep choosing each other, with clarity, care, and intention.
            </p>
          </div>

          {/* Horizontal Divider */}
          <hr className="border-white/10 mb-8 sm:mb-10" />

          {/* Final Footer Sign-off */}
          <div className="space-y-4">
            <p className="text-white text-base sm:text-lg font-medium">
              This is the future of connection we are working toward.
            </p>
            {/* Mobile: Stacked | Desktop: Side-by-side */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 space-y-1 sm:space-y-0">
              <p className="text-[#a855f7] font-semibold tracking-wide text-sm sm:text-base">
                Rooted in who we are.
              </p>
              <p className="text-gray-400 font-light italic text-sm sm:text-base">
                Guided by who we are becoming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}