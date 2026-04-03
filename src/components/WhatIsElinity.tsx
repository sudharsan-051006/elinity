import React, { useState, useEffect, useRef } from 'react';

export default function ElinityLandingPage() {
  const [hover, setHover] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const cardRef = useRef(null);

  // Use state for window width to handle resize events correctly
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // SCROLL TRIGGER ANIMATION
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCard(true);
        }
      },
      { threshold: isMobile ? 0.05 : 0.15 } // Easier trigger on mobile
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, [isMobile]);

  // MODAL OVERLAY COMPONENT
  const MoreInfoModal = () => (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(5, 0, 15, 0.95)',
      backdropFilter: 'blur(20px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: isMobile ? '15px' : '20px',
      animation: 'fadeIn 0.3s ease'
    }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
      <div style={{
        background: 'linear-gradient(160deg, rgba(30, 30, 50, 0.9), rgba(10, 10, 20, 1))',
        border: '1px solid rgba(168, 85, 247, 0.4)',
        borderRadius: isMobile ? '24px' : '32px',
        maxWidth: '750px',
        width: '100%',
        maxHeight: '85vh',
        overflowY: 'auto',
        padding: isMobile ? '35px 20px' : '60px',
        position: 'relative',
        animation: 'scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: '0 0 80px rgba(124, 58, 237, 0.2)'
      }}>
        <button 
          onClick={() => setShowModal(false)}
          style={{
            position: 'absolute',
            top: isMobile ? '15px' : '25px',
            right: isMobile ? '15px' : '25px',
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            color: 'white',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >✕</button>

        <h3 style={{ 
          fontSize: isMobile ? '26px' : '32px', 
          marginBottom: '8px', 
          background: 'linear-gradient(to right, #e9d5ff, #a5b4fc)', 
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          fontWeight: 700
        }}>
          the flourishing suite
        </h3>
        <p style={{ color: '#a5b4fc', fontSize: '12px', letterSpacing: '0.75px', marginBottom: '25px'}}>
          (thriving in your relationships)
        </p>
        
        <p style={{ color: '#cbd5e1', fontSize: isMobile ? '15px' : '17px', lineHeight: '1.7', marginBottom: '25px' }}>
          once you've met, the magic begins. we give you a portal to make relationships actually thrive. think:
        </p>

        <div style={{ display: 'grid', gap: '12px', textAlign: 'left' }}>
          {[
            { title: "relationship coaching", desc: "to navigate the tricky bits." },
            { title: 'a "life book"', desc: "to track your shared journey." },
            { title: "connection games", desc: "designed for pure whimsy and delight." },
            { title: "a walled-garden social network", desc: " - all the connection, none of the noise." }
          ].map((item, i) => (
            <div key={i} style={{ 
              padding: isMobile ? '15px' : '20px', 
              background: 'rgba(255,255,255,0.03)', 
              borderRadius: '16px', 
              border: '1px solid rgba(255,255,255,0.05)',
              borderLeft: '4px solid #7c3aed' 
            }}>
              <span style={{ color: '#fff', fontWeight: 600, fontSize: isMobile ? '16px' : '18px', display: 'block', marginBottom: '2px' }}>{item.title}</span>
              <p style={{ color: '#94a3b8', margin: 0, fontSize: isMobile ? '13px' : '15px' }}>{item.desc}</p>
            </div>
          ))}
          <p style={{ color: '#fff', fontSize: '16px', fontWeight: 500, marginTop: '10px', textAlign: 'center' }}>and more</p>
        </div>

        <div style={{ marginTop: '30px', padding: '25px 10px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
          <p style={{ color: '#e9d5ff', fontSize: isMobile ? '14px' : '16px', fontStyle: 'italic', lineHeight: '1.6', maxWidth: '500px', margin: '0 auto' }}>
            <b
            style={{
              fontWeight:1000,
              fontStyle:'bold'
            }}
            >our mission is simple:</b> to help you find your tribe and build relationships so good, they feel like a cheat code for life. as they are meant to be!
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile ? "60px 15px" : "100px 20px",
        overflowX: "hidden", // Crucial for mobile
        background: "#050010",
        fontFamily: "'Inter', sans-serif",
        color: 'white'
      }}
    >
      {showModal && <MoreInfoModal />}

      {/* BACKGROUND DECOR - Optimized for mobile performance */}
      <div style={{ position: "absolute", top: "5%", left: "5%", width: isMobile ? "300px" : "600px", height: isMobile ? "300px" : "600px", background: "radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: 'none' }} />
      <div style={{ position: "absolute", bottom: "5%", right: "0%", width: isMobile ? "250px" : "500px", height: isMobile ? "250px" : "500px", background: "radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: 'none' }} />

      <div
        ref={cardRef}
        onMouseEnter={() => !isMobile && setHover(true)}
        onMouseLeave={() => !isMobile && setHover(false)}
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "920px",
          width: "100%",
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
          background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: isMobile ? "32px" : "48px",
          padding: isMobile ? "40px 20px" : "80px 70px",
          transition: "all 1s cubic-bezier(.2,1,.2,1)",
          transform: showCard 
            ? (hover ? "translateY(-12px)" : "translateY(0px)") 
            : isMobile ? "translateY(40px) opacity(0)" : "perspective(1500px) rotateX(10deg) translateY(80px)",
          opacity: showCard ? 1 : 0,
          boxShadow: hover ? "0 60px 120px rgba(0,0,0,0.6), 0 0 50px rgba(139,92,246,0.15)" : "0 40px 80px rgba(0,0,0,0.5)"
        }}
      >
        <h1 style={{
          fontSize: isMobile ? "34px" : "clamp(36px, 7vw, 64px)",
          fontWeight: 800,
          marginBottom: isMobile ? "20px" : "25px",
          lineHeight: 1.1,
          background: "linear-gradient(to bottom, #fff 40%, #c4b5fd 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.04em"
        }}>
          say hello to elinity
        </h1>

        <p style={{
          fontSize: isMobile ? "16px" : "19px",
          lineHeight: "1.7",
          color: "rgba(255,255,255,0.85)",
          marginBottom: isMobile ? "30px" : "40px",
          maxWidth: "800px",
          marginInline: "auto",
          fontWeight: 500
        }}>
          your social life, <span style={{color: '#a5b4fc', fontWeight: 600}}>leveled up like never before.</span> let's be real - modern connecting is kind of broken. between the endless scrolling, the swipe nightmare, and the growing vacuum of depth, finding - and actually keeping - meaningful relationships feels harder than ever.
        </p>

        <div style={{
          fontSize: isMobile ? "15px" : "18px",
          color: "#cbd5e1",
          marginBottom: isMobile ? "40px" : "60px",
          padding: isMobile ? "20px" : "25px 35px",
          background: "rgba(168, 85, 247, 0.04)",
          borderRadius: "20px",
          border: "1px solid rgba(168, 85, 247, 0.15)",
          lineHeight: "1.7"
        }}>
          <b style={{
            fontSize: isMobile ? "16px" : "20px",
            fontWeight:500
          }}>elinity is here to fix the big glitch.</b> we're a holistic app built to help you find your <span style={{color: '#fff', fontWeight: 600}}>"best-fit" humans</span> and turn those connections into legendary, lifelong relationships.
        </div>

        {/* --- HOW WE DO IT SECTION --- */}
        <div style={{ marginBottom: isMobile ? "40px" : "50px" }}>
          <h2 style={{ 
            fontSize: isMobile ? "18px" : "22px", 
            letterSpacing: isMobile ? "0.5px" : "0.75px", 
            color: "#7c3aed", 
            marginBottom: "20px",
            fontWeight: 700
          }}>
            how we do it:
          </h2>

          <div style={{ 
            textAlign: 'left', 
            background: 'rgba(255,255,255,0.02)', 
            padding: isMobile ? '25px' : '40px', 
            borderRadius: isMobile ? '24px' : '32px', 
            border: '1px solid rgba(255,255,255,0.05)' 
          }}>
            <h3 style={{ 
              fontSize: isMobile ? "19px" : "24px", 
              color: "#fff", 
              marginBottom: "12px", 
              display: 'flex', 
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'center' 
            }}>
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '10px', fontSize: '24px' }}>⚡</span> the resonance engine
              </span>
              <span style={{fontSize: '14px', color: 'rgba(255,255,255,0.4)', marginLeft: isMobile ? '34px' : '12px', fontWeight: 400}}>
                (finding your people)
              </span>
            </h3>
            <p style={{ fontSize: isMobile ? "14px" : "16px", lineHeight: "1.8", color: "#94a3b8", margin: 0 }}>
              forget mindless swiping. our ai doesn't just look at your bio; it models your values, goals, and quirks to find your most resonant matches across <span style={{color: '#fff', fontWeight: 500}}>love, leisure, and collaboration.</span> our goal? get you off the screen and meeting your people in record time. yup, our north star is to reduce the time it takes to get you to your people.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
          <button
            onClick={() => setShowModal(true)}
            style={{
              padding: isMobile ? "18px 35px" : "22px 50px",
              borderRadius: "100px",
              border: "none",
              background: "linear-gradient(90deg, #7c3aed, #4f46e5)",
              color: "white",
              fontSize: isMobile ? "16px" : "18px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 25px rgba(124, 58, 237, 0.4)",
              width: isMobile ? "100%" : "auto"
            }}
          >
            more about elinity
          </button>
        </div>

      </div>
    </div>
  );
}