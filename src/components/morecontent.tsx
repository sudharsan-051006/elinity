import React, { useState, useEffect, useRef } from 'react';

export default function ElinityLandingPage() {
  const [hover, setHover] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false);
  const cardRef = useRef(null);

  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (showModal) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [showModal]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowCard(true);
      },
      { threshold: isMobile ? 0.05 : 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  const handleOpenModal = () => {
    setIsExpanding(true);
    setTimeout(() => {
      setShowModal(true);
      setIsExpanding(false);
    }, 600);
  };

  const MoreInfoModal = () => (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(5, 0, 15, 0.5)',
      backdropFilter: 'blur(25px)', display: 'flex', alignItems: 'center',
      justifyContent: 'center', zIndex: 2000, padding: '15px',
      animation: 'fadeIn 0.3s ease'
    }}>
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleUp { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .elinity-scrollbar::-webkit-scrollbar { width: 4px; }
        .elinity-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); }
        .elinity-scrollbar::-webkit-scrollbar-thumb { background: #7c3aed; border-radius: 10px; }
      `}</style>
      
      <div className="elinity-scrollbar" style={{
          background: 'linear-gradient(160deg, rgba(30, 30, 50, 0.95), rgba(10, 10, 20, 1))',
          border: '1px solid rgba(168, 85, 247, 0.4)', borderRadius: '24px',
          maxWidth: '520px', width: '100%', maxHeight: '80vh', overflowY: 'auto',
          padding: isMobile ? '35px 20px' : '40px 45px', position: 'relative',
          animation: 'scaleUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both',
          boxShadow: '0 0 50px rgba(124, 58, 237, 0.15)',
        }}>
        <button onClick={() => setShowModal(false)} style={{
            position: 'absolute', top: '15px', right: '15px', background: 'rgba(255,255,255,0.1)',
            border: 'none', color: 'white', width: '28px', height: '28px', borderRadius: '50%',
            cursor: 'pointer', fontSize: '12px', zIndex: 10
          }}>✕</button>

        <h3 style={{ 
          fontSize: isMobile ? '20px' : '24px', marginBottom: '4px', 
          background: 'linear-gradient(to right, #e9d5ff, #a5b4fc)', 
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 700
        }}>the flourishing suite</h3>
        <p style={{ color: '#a5b4fc', fontSize: '10px', letterSpacing: '0.5px', marginBottom: '18px'}}>(thriving in your relationships)</p>
        
        <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: '1.5', marginBottom: '18px' }}>
          once you've met, the magic begins. we give you a portal to make relationships actually thrive. think:
        </p>

        <div style={{ display: 'grid', gap: '8px', textAlign: 'left' }}>
          {[
            { title: "relationship coaching", desc: "to navigate the tricky bits." },
            { title: 'a "life book"', desc: "to track your shared journey." },
            { title: "connection games", desc: "designed for pure whimsy and delight." },
            { title: "a walled-garden social network", desc: " - all the connection, none of the noise." }
          ].map((item, i) => (
            <div key={i} style={{ 
              padding: '10px 15px', background: 'rgba(255,255,255,0.03)', 
              borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', borderLeft: '3px solid #7c3aed' 
            }}>
              <span style={{ color: '#fff', fontWeight: 600, fontSize: '14px', display: 'block' }}>{item.title}</span>
              <p style={{ color: '#94a3b8', margin: 0, fontSize: '12px' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '20px', padding: '15px 5px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
          <p style={{ color: '#e9d5ff', fontSize: '13px', fontStyle: 'italic', lineHeight: '1.5', maxWidth: '400px', margin: '0 auto' }}>
            <b style={{ fontWeight: 800 }}>our mission is simple:</b> to help you find your tribe and build relationships so good, they feel like a cheat code for life.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div style={{
      position: "relative", minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", padding: isMobile ? "30px 15px" : "40px 20px",
      background: "#050010", fontFamily: "'Inter', sans-serif", color: 'white', overflowX: "hidden"
    }}>
      {showModal && <MoreInfoModal />}

      <div style={{
          position: 'fixed', inset: 0, backdropFilter: isExpanding ? 'blur(10px)' : 'blur(0px)',
          background: isExpanding ? 'rgba(5, 0, 15, 0.4)' : 'rgba(5, 0, 15, 0)',
          transition: 'all 0.6s ease', zIndex: 1400, pointerEvents: 'none'
        }} />

      <div ref={cardRef}
        onMouseEnter={() => !isMobile && setHover(true)}
        onMouseLeave={() => !isMobile && setHover(false)}
        style={{
          position: "relative", zIndex: 10, maxWidth: "700px", width: "100%",
          backdropFilter: "blur(30px)",
          background: "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
          border: "1px solid rgba(255,255,255,0.08)", borderRadius: isMobile ? "20px" : "32px",
          padding: isMobile ? "30px 18px" : "45px 50px",
          transition: "all 1s cubic-bezier(.2,1,.2,1)",
          transform: showCard ? (hover ? "translateY(-6px)" : "translateY(0px)") : "translateY(25px)",
          opacity: showCard ? 1 : 0,
          boxShadow: hover ? "0 30px 80px rgba(0,0,0,0.6)" : "0 20px 50px rgba(0,0,0,0.5)"
        }}>
        
        <h1 style={{
          fontSize: isMobile ? "26px" : "42px", fontWeight: 800, marginBottom: "15px", lineHeight: 1.1,
          background: "linear-gradient(to bottom, #fff 40%, #c4b5fd 100%)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", letterSpacing: "-0.03em"
        }}>say hello to elinity</h1>

        <p style={{
          fontSize: isMobile ? "14px" : "15px", lineHeight: "1.6",
          color: "rgba(255,255,255,0.85)", marginBottom: "30px", fontWeight: 500
        }}>
          your social life, <span style={{color: '#a5b4fc', fontWeight: 600}}>leveled up like never before.</span> let's be real - modern connecting is broken.between the endless scrolling, the swipe nightmare, and the growing vacuum of depth, finding - and actually keeping - meaningful relationships feels harder than ever.
        </p>

        <div style={{
          fontSize: isMobile ? "13px" : "14px", color: "#cbd5e1", marginBottom: "35px",
          padding: isMobile ? "15px" : "18px 25px", background: "rgba(168, 85, 247, 0.04)",
          borderRadius: "15px", border: "1px solid rgba(168, 85, 247, 0.12)", lineHeight: "1.6"
        }}>
          <b style={{ fontSize: isMobile ? "14px" : "16px", fontWeight: 600 }}>elinity is here to fix the big glitch.</b> we're a holistic app built to help you find your<span style={{color: '#fff', fontWeight: 600}}>"best-fit" humans</span> and turn connections into legendary, lifelong relationships.
        </div>

        <div style={{ marginBottom: "35px" }}>
          <h2 style={{ fontSize: "14px", color: "#7c3aed", marginBottom: "12px", fontWeight: 700, letterSpacing: '0.5px' }}>how we do it:</h2>
          <div style={{ textAlign: 'left', background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '18px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h3 style={{ fontSize: isMobile ? "15px" : "18px", color: "#fff", marginBottom: "8px", display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '8px', fontSize: '18px' }}>⚡</span> the resonance engine
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginLeft: '10px', fontWeight: 400 }}>(finding your people)</span>
            </h3>
            <p style={{ fontSize: isMobile ? "12px" : "13.5px", lineHeight: "1.7", color: "#94a3b8", margin: 0 }}>
              forget mindless swiping. our ai doesn't just look at your bio; it models your values, goals, and quirks to find your most resonant matches across <span style={{color: '#fff', fontWeight: 500}}>love, leisure, and collaboration.</span> our goal? get you off the screen and meeting your people in record time. yup, our north star is to reduce the time it takes to get you to your people.
            </p>
          </div>
        </div>

        <button onClick={handleOpenModal} style={{
            padding: isMobile ? "14px 28px" : "15px 35px", borderRadius: "100px", border: "none",
            background: "linear-gradient(90deg, #7c3aed, #4f46e5)", color: "white",
            fontSize: "14px", fontWeight: "600", cursor: "pointer",
            transition: "all 0.3s ease", boxShadow: "0 6px 18px rgba(124, 58, 237, 0.3)",
            width: isMobile ? "100%" : "auto"
          }}>more about elinity</button>
      </div>
    </div>
  );
}