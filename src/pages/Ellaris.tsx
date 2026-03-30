import React, { useEffect, useState, useRef } from 'react';
import unamed from '../../public/Ellaris.jpg';
import { useScrollReveal } from '../components/Scroll.tsx'; 
import { useLocation } from "react-router-dom";

const EllarisLandingPage: React.FC = () => {
  const [hoverIdx, setHoverIdx] = useState(null);
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsPhone(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function TitleManager() {
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === "/ellaris") {
        document.title = "Elinity | Ellaris";
      }
    }, [location]);
    return null;
  }

  const fullText = "Ellaris: Work, Reimagined Around Purpose, People, and Fit";
  const [typedText, setTypedText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i < fullText.length) {
      const t = setTimeout(() => {
        setTypedText(prev => prev + fullText[i]);
        setI(i + 1);
      }, 80);
      return () => clearTimeout(t);
    }
  }, [i]);

  const ellarisRef = useRef(null);  
  const [showEllaris, setShowEllaris] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowEllaris(true);
          obs.unobserve(entry.target); // ✅ stops re-triggering
        }
      });
    },
{ 
  threshold: 0.1,              // 🔥 lower for mobile
  rootMargin: "0px 0px -40px 0px" 
}
  );

  if (ellarisRef.current) observer.observe(ellarisRef.current);

  return () => observer.disconnect();
}, []);

  const whois = useScrollReveal();
  const whyell = useScrollReveal();
  const ee = useScrollReveal();
  const howe = useScrollReveal();
  const ellthe = useScrollReveal();
  const queitA = useScrollReveal();
  const core = useScrollReveal();

const reveal = (visible: boolean, delay = 0): React.CSSProperties => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0px)" : "translateY(20px)",
  transition: `opacity 0.8s ease ${delay}s, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  willChange: "transform, opacity",
});

  const s = {
    container: {
      backgroundColor: '#060014',
      backgroundImage: 'linear-gradient(to bottom, #060014, #0c0024)',
      color: '#ffffff',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      lineHeight: '1.6',
      minHeight: '100vh',
      overflowX: 'hidden' as const,
    } as React.CSSProperties,

    heroWrapper: {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.72), rgba(6,0,20,0.92)), url(${unamed})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: isPhone ? 'scroll' : 'fixed',
      minHeight: isPhone ? '65vh' : '88vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative' as const,
      padding: isPhone ? '48px 20px' : '0',
    } as React.CSSProperties,

    heroBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 16px',
      borderRadius: '999px',
      border: '1px solid rgba(119, 89, 253, 0.4)',
      background: 'rgba(119, 89, 253, 0.1)',
      color: '#a89dff',
      fontSize: '13px',
      fontWeight: '600',
      letterSpacing: '0.08em',
      marginBottom: isPhone ? '20px' : '28px',
    } as React.CSSProperties,

    wrapper: {
      maxWidth: '1100px',
      margin: '0 auto',
      padding: isPhone ? '0 18px' : '0 32px',
      boxSizing: 'border-box' as const,
      width: '100%',
    } as React.CSSProperties,

    divider: {
      height: '1px',
      background: 'linear-gradient(to right, transparent, rgba(119,89,253,0.25), transparent)',
      margin: isPhone ? '24px 0' : '40px 0',
    } as React.CSSProperties,

    glassCard: {
      background: 'rgba(119, 89, 253, 0.04)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderRadius: isPhone ? '20px' : '28px',
      border: '1px solid rgba(255,255,255,0.08)',
      padding: isPhone ? '24px 18px' : '52px',
      boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.06) inset, 0 2px 8px rgba(222,60,190,0.15) inset',
      boxSizing: 'border-box' as const,
      position: 'relative' as const,
      overflow: 'hidden' as const,
    } as React.CSSProperties,

    sectionCard: {
      border: '1px solid rgba(119, 89, 253, 0.18)',
      borderRadius: isPhone ? '20px' : '28px',
      padding: isPhone ? '28px 18px' : '52px',
      background: 'rgba(255,255,255,0.018)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 24px rgba(119,89,253,0.08)',
      boxSizing: 'border-box' as const,
      position: 'relative' as const,
      overflow: 'hidden' as const,
    } as React.CSSProperties,

    heroTitle: {
      fontSize: isPhone ? 'clamp(30px, 8vw, 46px)' : '76px',
      fontWeight: '800',
      letterSpacing: '-0.045em',
      lineHeight: '1.15',
      textAlign: 'center' as const,
      background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #7759fd 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      padding: isPhone ? '20px 0' : '100px 0 90px',
      wordBreak: 'break-word' as const,
    } as React.CSSProperties,

    heroCursor: {
      display: 'inline-block',
      width: '3px',
      height: '0.85em',
      background: '#7759fd',
      marginLeft: '3px',
      verticalAlign: 'middle',
      borderRadius: '2px',
      animation: 'blink 1.1s step-end infinite',
    } as React.CSSProperties,

    sectionLabel: {
      color: '#9d87ff',
      fontSize: isPhone ? '12px' : '13px',
      fontWeight: '700',
      letterSpacing: '0.18em',
      marginBottom: '14px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      textTransform: 'uppercase' as const,
      textAlign: isPhone ? 'center' as const : 'left' as const,
      justifyContent: isPhone ? 'center' as const : 'flex-start' as const,
    } as React.CSSProperties,

    sectionLabelLine: {
      width: '28px',
      height: '1px',
      background: 'linear-gradient(to right, #7759fd, transparent)',
      display: 'inline-block',
    } as React.CSSProperties,

    grid: {
      display: 'grid',
      gridTemplateColumns: isPhone ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: isPhone ? '20px' : '20px',
    } as React.CSSProperties,

    accentBox: {
      padding: isPhone ? '16px' : '24px',
      borderRadius: '16px',
      background: 'linear-gradient(135deg, rgba(119,89,253,0.12), rgba(119,89,253,0.05))',
      border: '1px solid rgba(119,89,253,0.2)',
    } as React.CSSProperties,

    pill: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 14px',
      borderRadius: '999px',
      background: 'rgba(119,89,253,0.15)',
      border: '1px solid rgba(119,89,253,0.25)',
      color: '#c4b5fd',
      fontSize: '13px',
      fontWeight: '600',
      margin: '4px',
    } as React.CSSProperties,

    stepBadge: {
      width: isPhone ? '28px' : '32px',
      height: isPhone ? '28px' : '32px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #7759fd, #de3cbe)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '700',
      fontSize: isPhone ? '13px' : '14px',
      flexShrink: 0,
      boxShadow: '0 4px 12px rgba(119,89,253,0.4)',
    } as React.CSSProperties,

    fadeSlide: {
      opacity: showEllaris ? 1 : 0,
      transform: showEllaris ? "translateY(0px)" : "translateY(60px)",
      transition: "transform 0.9s cubic-bezier(0.22,1,0.36,1), opacity 0.7s ease",
      willChange: "transform",
    } as React.CSSProperties,

    dot: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #7759fd, #de3cbe)',
      flexShrink: 0,
      marginTop: '8px',
      boxShadow: '0 0 8px rgba(119,89,253,0.6)',
    } as React.CSSProperties,
  };

  // Shared glass card style for core feature cards (no marginBottom — spacing handled by flex gap)
  const coreCard: React.CSSProperties = {
    ...s.glassCard,
    marginBottom: 0,
  };

  return (
    <div style={s.container} className="ellaris">
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .ellaris::-webkit-scrollbar { display: none; }
        .ellaris { -ms-overflow-style: none; scrollbar-width: none; }
        .hover-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-4px);
          border-color: rgba(119,89,253,0.4) !important;
          box-shadow: 0 16px 48px rgba(119,89,253,0.2) !important;
        }
        .glow-dot {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(119,89,253,0.15), transparent 70%);
          position: absolute;
          pointer-events: none;
        }
      `}</style>

      {/* HERO SECTION */}
      <section style={s.heroWrapper}>
        <div style={{ position: 'absolute', top: '15%', left: '8%' }} className="glow-dot" />
        <div style={{ position: 'absolute', bottom: '20%', right: '10%', background: 'radial-gradient(circle, rgba(222,60,190,0.12), transparent 70%)', width: '200px', height: '200px', borderRadius: '50%', pointerEvents: 'none' as const }} />
        
        <div style={{ ...s.wrapper, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          <h1 style={s.heroTitle}>
            {typedText}
            {i < fullText.length && <span style={s.heroCursor} />}
          </h1>
          {i >= fullText.length && (
            <p style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: isPhone ? '14px' : '18px',
              textAlign: 'center',
              maxWidth: '520px',
              marginTop: isPhone ? '-12px' : '-48px',
              marginBottom: isPhone ? '20px' : '0',
              fontStyle: 'italic',
            }}>
            </p>
          )}
        </div>
      </section>

      <div style={s.wrapper}>

        {/* WHAT IS IT */}
        <div style={{ height: isPhone ? '28px' : '48px' }} />
        <section ref={ellarisRef} style={{ ...s.glassCard, ...s.fadeSlide, marginBottom: isPhone ? '16px' : '24px' }}>
          <div className="glow-dot" style={{ top: '-40px', right: '-40px', opacity: 0.6 }} />
          <div style={s.sectionLabel}>
            <span style={s.sectionLabelLine} />
            What Is Ellaris
          </div>
          <p style={{ fontSize: isPhone ? '18px' : '22px', marginBottom: '24px', lineHeight: '1.5', fontWeight: '600' }}>
            Ellaris is Elinity's platform for meaningful work.{' '}
          </p>
            <span style={{ color: 'rgba(255,255,255,0.6)', fontWeight: '400' }}>
              Where Elinity helps people find and build the most important relationships of their lives, <b>Ellaris helps them find the work, teams, and missions where they can truly thrive.</b>
            </span>
          <div style={s.divider} />
          <p style={{ color: '#c8c8c8', fontSize: isPhone ? '15px' : '17px', lineHeight: '1.75' }}>
            Ellaris is a deep person-to-organization matching system, built for a world where intelligence is becoming a commodity, skills are becoming abundant, and <strong style={{ color: '#fff' }}>passion, purpose, personality, and mission alignment are becoming the real differentiators.</strong> It connects people to companies, teams, and missions not through résumés and keyword filters, but through who they are, what they care about, and where they are headed.
          </p>
          <p style={{ color: '#c8c8c8', fontSize: isPhone ? '15px' : '17px', lineHeight: '1.75', marginTop: '16px' }}>
            Ellaris is not a job board, or a recruiting software, or a marketplace of endless applications.
          </p>
          <p style={{ color: '#c8c8c8', fontSize: isPhone ? '15px' : '17px', lineHeight: '1.75', marginTop: '16px' }}>
            It is a <strong style={{ color: '#fff' }}>curated, high-signal matching layer for the future of work and purpose.</strong>
          </p>
        </section>
{/* <div className='pt-6'></div> */}
        {/* WHO IS IT FOR */}
        <section
          ref={whois.ref}
          style={{
            ...s.sectionCard,
            ...reveal(whois.visible),
            marginBottom: isPhone ? '16px' : '24px',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: isPhone ? '28px' : '44px' }}>
            <h2 style={{ fontSize: isPhone ? '28px' : '44px', fontWeight: '800', letterSpacing: '-0.03em', lineHeight: '1.2', marginBottom: '16px' }}>
              Who Ellaris Is For
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: isPhone ? '15px' : '18px', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
              Ellaris is built for people and organizations who care deeply about fit.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '20px', marginBottom: '36px' }}>
            {/* Card: Individuals */}
            <div className="hover-card" style={{
              flex: '1 1 280px', minWidth: 0,
              background: 'linear-gradient(135deg, rgba(119,89,253,0.08), rgba(119,89,253,0.03))',
              border: '1px solid rgba(119,89,253,0.18)',
              borderRadius: '20px',
              padding: isPhone ? '24px 18px' : '36px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(119,89,253,0.3), rgba(119,89,253,0.1))', border: '1px solid rgba(119,89,253,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>👤</div>
                <h3 style={{ fontSize: isPhone ? '20px' : '22px', fontWeight: '700', color: '#c4b5fd' }}>For individuals</h3>
              </div>
              <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: 0 }}>
                {[
                  "People who want to work on things they genuinely care about",
                  "Builders, thinkers, creators, researchers, operators",
                  "Those who value mission, values, and people over titles and prestige",
                  "Anyone who wants their work to feel alive, not extractive"
                ].map((text: string, idx: number) => (
                  <li key={idx} style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#d1d1d1', fontSize: isPhone ? '14px' : '15px' }}>
                    <div style={s.dot} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Card: Companies */}
            <div className="hover-card" style={{
              flex: '1 1 280px', minWidth: 0,
              background: 'linear-gradient(135deg, rgba(222,60,190,0.06), rgba(119,89,253,0.04))',
              border: '1px solid rgba(222,60,190,0.15)',
              borderRadius: '20px',
              padding: isPhone ? '24px 18px' : '36px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(222,60,190,0.25), rgba(222,60,190,0.08))', border: '1px solid rgba(222,60,190,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>🏢</div>
                <h3 style={{ fontSize: isPhone ? '20px' : '22px', fontWeight: '700', color: '#f0a0e0' }}>For companies and teams</h3>
              </div>
              <ul style={{ listStyleType: 'none', paddingLeft: '0', margin: 0 }}>
                {[
                  "Mission-driven startups and organizations",
                  "Teams that care about culture, coherence, and long-term impact",
                  "Founders who want people who believe in the mission, not just the compensation",
                  "Organizations preparing for a post-AGI world where human qualities matter more"
                ].map((text: string, idx: number) => (
                  <li key={idx} style={{ marginBottom: '14px', display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#d1d1d1', fontSize: isPhone ? '14px' : '15px' }}>
                    <div style={{ ...s.dot, background: 'linear-gradient(135deg, #de3cbe, #7759fd)' }} />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: isPhone ? '14px' : '16px', fontStyle: 'italic', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6' }}>
            Ellaris is for the future-ready. For those building toward something that lasts, that truly matters, that deeply resonates.
          </p>
        </section>

        {/* WHY IT EXISTS */}
        <section ref={whyell.ref}>
          <div style={{
            ...s.sectionCard,
            ...reveal(whyell.visible),
            marginBottom: isPhone ? '16px' : '24px',
          }}>
            <h2 style={{ fontSize: isPhone ? '28px' : '40px', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '16px', background: 'linear-gradient(to right, #ffffff, #7759fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Why Ellaris Exists
            </h2>
            <p style={{ fontSize: isPhone ? '18px' : '22px', marginBottom: '20px', fontWeight: '600' }}>The way we match people to work is broken.</p>
            <p style={{ color: '#c8c8c8', marginBottom: '28px', fontSize: isPhone ? '15px' : '17px', lineHeight: '1.75' }}>
              Today, individuals apply to hundreds of roles they barely resonate with. Companies sort through thousands of applications, filtering by proxies that say little about who someone actually is. The result is misalignment on both sides, high churn, disengagement, and enormous wasted human potential.
              <br /><br />
              At the same time, <strong style={{ color: '#fff' }}>work itself is changing.</strong>
            </p>
            <div style={s.accentBox}>
              <p style={{ marginBottom: '16px', fontSize: isPhone ? '14px' : '16px', fontWeight: '600', color: '#c4b5fd' }}>As AI and automation commoditize hard skills, the real value shifts toward:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap' as const }}>
                {['Passion', 'Purpose', 'Personality', 'Judgment', 'Taste', 'Mission alignment', 'Relationship-building ability'].map((item, idx) => (
                  <span key={idx} style={s.pill}>{item}</span>
                ))}
              </div>
            </div>
            <p style={{ marginTop: '28px', fontSize: isPhone ? '15px' : '17px', color: '#c8c8c8', lineHeight: '1.7' }}>
              Ellaris exists because <strong style={{ color: '#fff' }}>these things are not captured by résumés</strong>, and because the future of work demands a different matching architecture.
            </p>
          </div>
        </section>

        {/* ECOSYSTEM */}
        <section ref={ee.ref}>
          <div style={{
            ...s.sectionCard,
            ...reveal(ee.visible),
            marginBottom: isPhone ? '0px' : '24px',
            textAlign: 'center',
          }}>
            <h2 style={{ fontSize: isPhone ? '26px' : '44px', fontWeight: '800', letterSpacing: '-0.03em', marginBottom: '16px', lineHeight: '1.2' }}>
              Ellaris Within the Elinity Ecosystem
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: isPhone ? '15px' : '18px', marginBottom: isPhone ? '24px' : '36px', maxWidth: '600px', margin: '0 auto 36px' }}>
              Elinity is a platform for human flourishing. <br></br>At the highest level, we believe a good life rests on two pillars:
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: isPhone ? '16px' : '32px', flexWrap: 'wrap' as const, marginBottom: '36px' }}>
              {[
                { icon: ' ', label: 'Deep, meaningful relationships' },
                { icon: ' ', label: 'Purposeful, meaningful work' },
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '14px 24px', borderRadius: '16px', background: 'rgba(119,89,253,0.1)', border: '1px solid rgba(119,89,253,0.2)', fontSize: isPhone ? '15px' : '18px', fontWeight: '600' }}>
                  <span>{item.icon}</span> {item.label}
                </div>
              ))}
            </div>
            <div style={{ ...s.glassCard, textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
              <p style={{ fontSize: isPhone ? '15px' : '17px', color: '#c8c8c8', marginBottom: '28px', textAlign: 'center' }}>Elinity began by tackling the first pillar. Ellaris is the natural extension into the second.</p>
              <div style={{ display: 'flex', flexDirection: isPhone ? 'column' : 'row', gap: isPhone ? '20px' : '0' }}>
                <div style={{ flex: 1, padding: isPhone ? '0' : '0 32px 0 0', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', marginBottom: '10px' }}> </div>
                  <p style={{ fontSize: isPhone ? '14px' : '16px', lineHeight: '1.6', color: '#d1d1d1' }}><strong style={{ color: '#fff' }}>Elinity</strong> helps you find your people and build deep relationships</p>
                </div>
                <div style={{ width: isPhone ? '100%' : '1px', height: isPhone ? '1px' : 'auto', background: 'rgba(119,89,253,0.2)', margin: isPhone ? '0' : '0' }} />
                <div style={{ flex: 1, padding: isPhone ? '0' : '0 0 0 32px', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', marginBottom: '10px' }}> </div>
                  <p style={{ fontSize: isPhone ? '14px' : '16px', lineHeight: '1.6', color: '#d1d1d1' }}><strong style={{ color: '#fff' }}>Ellaris</strong> helps you find your place, your mission, and your work tribe</p>
                </div>
              </div>
              <div style={{ marginTop: '28px', padding: '20px', background: 'rgba(119,89,253,0.08)', borderRadius: '14px', border: '1px solid rgba(119,89,253,0.15)', textAlign: 'center' }}>
                <p style={{ fontWeight: '700', fontSize: isPhone ? '14px' : '16px', color: '#e2d9ff' }}>Relationships feed purpose.<br></br> Purpose feeds relationships. <br></br>Ellaris and Elinity form a single, coherent ecosystem designed around the whole human.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CORE FEATURES */}
        {/* 
          FIX SUMMARY:
          1. Jitter fix: Removed reveal() from individual coreCard refs. Only the parent
             section uses reveal(core.visible). Animating parent + children simultaneously
             caused IntersectionObserver layout thrash during scroll.
          2. Gap/overlap fix: Replaced marginBottom on individual cards with a flex column
             container using gap. This gives consistent, stable spacing between all cards
             without any margin collapsing issues.
        */}

        <section ref={core.ref}>
          <div style={{
            ...s.sectionCard,
            marginBottom: isPhone ? '16px' : '80px',
            minHeight: isPhone ? 'auto' : 'auto', // ensures stability
            ...reveal(core.visible),
            
          }}>
            <div style={{ textAlign: 'center', marginBottom: isPhone ? '28px' : '48px' }}>
              <h2 style={{
                fontSize: isPhone ? '28px' : '52px',
                fontWeight: '800',
                letterSpacing: '-0.04em',
                lineHeight: '1.1',
                background: 'linear-gradient(135deg, #ffffff, #c4b5fd)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                
              }}>
                Core Features and Highlights
              </h2>
            </div>

            {/* 
              All cards are wrapped in a single flex column container with gap.
              No reveal() on individual cards — the parent section handles the animation.
              No marginBottom on individual glassCards — gap handles all spacing.
            */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: isPhone ? '16px' : '20px' }}>

              {/* CARD 1: Curated Matching */}
              <div className="hover-card" style={coreCard}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'linear-gradient(135deg, #7759fd, #de3cbe)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0, boxShadow: '0 8px 24px rgba(119,89,253,0.4)' }}>✦</div>
                  <h3 style={{ color: '#c4b5fd', fontSize: isPhone ? '18px' : '22px', fontWeight: '700' }}>Curated, High-Bar Matching</h3>
                </div>
                <p style={{ fontSize: isPhone ? '15px' : '17px', color: '#d1d1d1', lineHeight: '1.7', marginBottom: '20px' }}>
                  Ellaris does not show you everything. It shows you <strong style={{ color: '#fff' }}>only what passes your bar.</strong><br />
                  Our system deeply understands both individuals and organizations across dimensions like personality, values, goals, working style, mission, and long-term direction. Matches are surfaced only when there is strong, mutual alignment.
                </p>
                <div style={s.accentBox}>
                  <p style={{ fontSize: isPhone ? '14px' : '16px', color: '#c8c8c8', lineHeight: '1.7' }}>
                    If nothing clears the bar, you see nothing. No noise. No spam. No endless scrolling. This applies equally to individuals and companies. Ellaris replaces mass applications with <b style={{
                      color:'white'
                    }}>mutual, high-confidence introductions.</b>
                  </p>
                </div>
              </div>

              {/* GRID 1 */}
              <div style={s.grid}>
                <div className="hover-card" style={coreCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(119,89,253,0.2)', border: '1px solid rgba(119,89,253,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>💬</div>
                    <h3 style={{ color: '#c4b5fd', fontSize: isPhone ? '17px' : '20px', fontWeight: '700' }}>Prompt-Based Discovery</h3>
                  </div>
                  <p style={{ fontSize: isPhone ? '14px' : '15px', color: '#c8c8c8', lineHeight: '1.7', marginBottom: '16px' }}>
                    Sometimes you don't want to browse. You want to describe.<br />Ellaris lets you prompt your way to people, teams, or organizations using natural language.
                  </p>
                  <div style={{ background: 'rgba(0,0,0,0.4)', padding: isPhone ? '14px' : '18px', borderRadius: '12px', border: '1px solid rgba(119,89,253,0.15)', marginBottom: '16px' }}>
                    {[
                      '"Find me small AI startups working on climate or education, with thoughtful founders and strong design culture."',
                      '"I just moved to London. Find me early-stage teams obsessed with systems thinking, biology, or frontier tech."',
                      '"We\'re building a research-heavy product. Find people who care about depth, rigor, and long-term thinking."'
                    ].map((q, idx) => (
                      <p key={idx} style={{ fontSize: isPhone ? '12px' : '13px', fontStyle: 'italic', color: '#a89dff', lineHeight: '1.6', marginBottom: idx < 2 ? '10px' : '0' }}>{q}</p>
                    ))}
                  </div>
                  <p style={{ fontSize: isPhone ? '14px' : '15px', color: '#c8c8c8', fontWeight: '600' }}>Ellaris translates intent into discovery.</p>
                </div>

                <div className="hover-card" style={coreCard}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(222,60,190,0.15)', border: '1px solid rgba(222,60,190,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>🧬</div>
                    <h3 style={{ color: '#f0a0e0', fontSize: isPhone ? '17px' : '20px', fontWeight: '700' }}>Deep Profiles, Not Resumes</h3>
                  </div>
                  <p style={{ fontSize: isPhone ? '14px' : '15px', color: '#c8c8c8', lineHeight: '1.7', marginBottom: '16px' }}>
                    Ellaris profiles are <strong style={{ color: '#fff' }}>rich, living representations,</strong> not static CVs. Matching happens at the level of essence, not credentials.
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ padding: '12px 16px', background: 'rgba(119,89,253,0.08)', borderRadius: '10px', border: '1px solid rgba(119,89,253,0.12)' }}>
                      <p style={{ fontSize: '12px', fontWeight: '700', color: '#9d87ff', marginBottom: '8px', letterSpacing: '0.1em' }}>FOR INDIVIDUALS</p>
                      <p style={{ fontSize: isPhone ? '12px' : '13px', color: '#a1a1a1' }}>Values, motivations, interests, <br></br> long-term goals, <br></br>passions, curiosities, beliefs,<br></br> working style and preferences</p>
                    </div>
                    <div style={{ padding: '12px 16px', background: 'rgba(222,60,190,0.06)', borderRadius: '10px', border: '1px solid rgba(222,60,190,0.12)' }}>
                      <p style={{ fontSize: '12px', fontWeight: '700', color: '#e070c8', marginBottom: '8px', letterSpacing: '0.1em' }}>FOR ORGANIZATIONS</p>
                      <p style={{ fontSize: isPhone ? '12px' : '13px', color: '#a1a1a1' }}>Mission and story, <br></br> cultural principles, <br></br> how work actually feels day to day, <br></br>   what kind of humans thrive there</p>
                    </div>
                  </div>
                  <p style={{ fontSize: isPhone ? '14px' : '15px', color: '#c8c8c8', lineHeight: '1.7', marginBottom: '16px', paddingTop: '12px' }}>                 
                     Matching happens at the level of essence, not credentials.
                  </p>
                </div>
              </div>

              {/* GRID 2 */}
              <div style={s.grid}>
<div className="hover-card" style={coreCard}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
    <div style={{ 
      width: '36px', 
      height: '36px', 
      borderRadius: '10px', 
      background: 'rgba(119,89,253,0.2)', 
      border: '1px solid rgba(119,89,253,0.3)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontSize: '16px' 
    }}>
      🎮
    </div>
    <h3 style={{ color: '#c4b5fd', fontSize: isPhone ? '17px' : '20px', fontWeight: '700' }}>
      Collaborative Experiences and Games
    </h3>
  </div>

  <p style={{ fontSize: isPhone ? '14px' : '15px', color: '#c8c8c8', lineHeight: '1.7', marginBottom: '16px' }}>
    Ellaris includes a growing suite of <strong style={{ color: '#fff' }}>collaborative games and play-based experiences</strong> designed for teams and workplaces of the future.
  </p>

  <div style={{ marginBottom: '20px' }}>
    <p style={{ fontSize: '13px', color: '#fff', fontWeight: '600', marginBottom: '10px', opacity: 0.9 }}>These experiences help:</p>
    <ul style={{ 
      listStyle: 'none', 
      padding: 0, 
      margin: 0, 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '8px' 
    }}>
      {[
        'Build trust and rapport',
        'Surface working styles and strengths',
        'Encourage creativity and idea generation',
        'Make teams more human, more bonded, and more alive'
      ].map((text, idx) => (
        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: isPhone ? '13px' : '14px', color: '#a1a1a1', lineHeight: '1.5' }}>
          <span style={{ color: '#7759fd', marginTop: '2px' }}>•</span>
          {text}
        </li>
      ))}
    </ul>
  </div>

  <p style={{ 
    fontSize: isPhone ? '13px' : '14px', 
    color: '#9d87ff', 
    fontWeight: '600', 
    fontStyle: 'italic',
    borderTop: '1px solid rgba(119,89,253,0.15)',
    paddingTop: '16px'
  }}>
    We see play as a core mechanism for learning, bonding, and alignment.
  </p>
</div>

<div className="hover-card" style={coreCard}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
    <div style={{ 
      width: '36px', 
      height: '36px', 
      borderRadius: '10px', 
      background: 'rgba(222,60,190,0.15)', 
      border: '1px solid rgba(222,60,190,0.25)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      fontSize: '16px' 
    }}>
      🌱
    </div>
    <h3 style={{ color: '#f0a0e0', fontSize: isPhone ? '17px' : '20px', fontWeight: '700' }}>
      Growth and Skill Modes and Sessions
    </h3>
  </div>

  <p style={{ fontSize: isPhone ? '14px' : '15px', color: '#c8c8c8', lineHeight: '1.7', marginBottom: '16px' }}>
    Ellaris includes structured growth modules designed for the future of work.
  </p>

  <div style={{ marginBottom: '20px' }}>
    <p style={{ fontSize: '13px', color: '#fff', fontWeight: '600', marginBottom: '10px', opacity: 0.9 }}>These sessions focus on:</p>
    <ul style={{ 
      listStyle: 'none', 
      padding: 0, 
      margin: 0, 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '8px' 
    }}>
      {[
        'Communication and collaboration',
        'Decision-making and judgment',
        'Creative thinking',
        'Leadership and self-awareness',
        'Navigating ambiguity and complexity',
        'Developing resilience in a rapidly evolving landscape',
        'And lots more'
      ].map((text, idx) => (
        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: isPhone ? '13px' : '14px', color: '#a1a1a1', lineHeight: '1.5' }}>
          <span style={{ color: '#de3cbe', marginTop: '2px' }}>•</span>
          {text}
        </li>
      ))}
    </ul>
  </div>

  <p style={{ 
    fontSize: isPhone ? '13px' : '14px', 
    color: '#f0a0e0', 
    fontWeight: '600', 
    fontStyle: 'italic',
    borderTop: '1px solid rgba(222,60,190,0.15)',
    paddingTop: '16px'
  }}>
    This goes beyond credentialing, with the goal of becoming aligned humans to work with.
  </p>
</div>
              </div>

            </div>{/* end flex column wrapper */}
          </div>
        </section>

<section ref={howe.ref}>
  <div style={{
    ...s.glassCard,
    ...reveal(howe.visible),
    marginBottom: isPhone ? '16px' : '24px',
    textAlign: 'center',
    padding: isPhone ? '40px 20px' : '64px 40px',
  }}>
    <h2 style={{ 
      fontSize: isPhone ? '28px' : '44px', 
      fontWeight: '800', 
      letterSpacing: '-0.03em', 
      marginBottom: '56px',
      color: '#fff'
    }}>
      How Ellaris Works
    </h2>

    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '0', 
      maxWidth: '680px', 
      margin: '0 auto', 
      textAlign: 'left' 
    }}>
      {[
        { n: '1', title: 'Create a rich profile', body: 'Individuals and organizations articulate who they are, what they care about, and where they are headed.' },
        { n: '2', title: 'Set your bar', body: 'Define what alignment actually means to you. Ellaris takes this seriously.' },
        { n: '3', title: 'Receive curated matches', body: 'Only high-confidence, mutual matches are surfaced.' },
        { n: '4', title: 'Explore together', body: 'Use conversations, collaborative experiences, and shared activities to sense real fit.' },
        { n: '5', title: 'Build from alignment', body: 'Teams form around belief, energy, and purpose, not just opportunity.' },
      ].map((step, idx) => {
        const isHovered = hoverIdx === idx;
        // Calculation: 1st point = 20%, 2nd = 40%, etc.
        const progressWidth = `${(idx + 1) * 20}%`;
        
        return (
          <div 
            key={idx} 
            onMouseEnter={() => setHoverIdx(idx)}
            onMouseLeave={() => setHoverIdx(null)}
            style={{ 
              display: 'flex', 
              gap: '24px', 
              position: 'relative',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              background: isHovered ? 'rgba(119, 89, 253, 0.04)' : 'transparent',
              borderRadius: '12px',
              padding: '12px',
              margin: '0 -12px' 
            }}
          >
            {/* Left Timeline Connector */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                ...s.stepBadge,
                background: isHovered ? 'linear-gradient(135deg, #7759fd, #de3cbe)' : s.stepBadge.background,
                transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                boxShadow: isHovered ? '0 0 15px rgba(119, 89, 253, 0.4)' : 'none',
              }}>
                {step.n}
              </div>
              {idx < 4 && (
                <div style={{ 
                  width: '1px', 
                  flex: 1, 
                  background: isHovered ? '#7759fd' : 'rgba(119,89,253,0.2)', 
                  margin: '6px 0',
                  transition: 'background 0.3s ease'
                }} />
              )}
            </div>

            {/* Right Content */}
            <div style={{ 
              paddingBottom: idx < 4 ? '32px' : '12px', 
              paddingTop: '4px',
              flex: 1,
              position: 'relative'
            }}>
              <p style={{ 
                fontWeight: '700', 
                color: isHovered ? '#c4b5fd' : '#fff', 
                fontSize: isPhone ? '15px' : '17px', 
                marginBottom: '6px',
                transition: 'color 0.3s ease'
              }}>
                {step.title}
              </p>
              <p style={{ 
                color: isHovered ? '#d1d1d1' : '#a1a1a1', 
                fontSize: isPhone ? '14px' : '15px', 
                lineHeight: '1.65',
                transition: 'color 0.3s ease'
              }}>
                {step.body}
              </p>

              {/* Progressive Underline Container */}
              <div style={{
                position: 'absolute',
                bottom: '8px',
                left: 0,
                height: '2px',
                width: '100%',
                background: 'rgba(255, 255, 255, 0.05)', // The "track"
                borderRadius: '2px',
                overflow: 'hidden'
              }}>
                {/* The "Filling" Progress Bar */}
                <div style={{
                  height: '100%',
                  width: isHovered ? progressWidth : '0%',
                  background: 'linear-gradient(90deg, #7759fd, #de3cbe)',
                  transition: 'width 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                  borderRadius: '2px',
                }} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

        {/* THESIS & NORTH STAR */}
<section ref={ellthe.ref}>
  <div style={{
    ...reveal(ellthe.visible),
    padding: isPhone ? '60px 20px' : '100px 56px',
    textAlign: 'center',
    border: '1px solid rgba(119, 89, 253, 0.2)',
    borderRadius: '28px',
    margin: isPhone ? '16px 0' : '24px 0',
    boxSizing: 'border-box' as const,
    background: 'linear-gradient(135deg, rgba(119,89,253,0.05), rgba(6,0,20,0.4))',
    position: 'relative' as const,
    overflow: 'hidden' as const,
  }}>
    {/* Decorative Glow */}
    <div className="glow-dot" style={{ top: '-60px', left: '50%', transform: 'translateX(-50%)', width: '300px', height: '300px', opacity: 0.5, position: 'absolute' }} />

    {/* Header Section */}
    <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
      <h2 style={{ 
        fontSize: isPhone ? '32px' : '56px', 
        fontWeight: '800', 
        letterSpacing: '-0.04em', 
        marginBottom: '40px', 
        lineHeight: '1.1',
        color: '#fff' 
      }}>
        The Ellaris Thesis
      </h2>

      <p style={{ 
        maxWidth: '720px', 
        margin: '0 auto 32px', 
        fontSize: isPhone ? '18px' : '22px', 
        lineHeight: '1.6', 
        color: '#d1d1d1' 
      }}>
        In the coming world: <br />
        <strong style={{ color: '#fff' }}>Skills will be abundant, Tools will be cheap, and Distribution will be easy.</strong>
      </p>

      <p style={{ 
        maxWidth: '800px', 
        margin: '0 auto 56px', 
        fontSize: isPhone ? '15px' : '18px', 
        lineHeight: '1.8', 
        color: '#a1a1a1' 
      }}>
        The real moat will be: <strong style={{ color: '#c4b5fd' }}>Who you are, What you care about, and Who you choose to build with.</strong>
        <br /><br />
        Ellaris is built for that world. It is an attempt to redesign work around meaning, fit, and human potential, rather than efficiency or productivity or pure skills fit.
      </p>
    </div>

    {/* Glass Card Section */}
    <div style={{ 
      ...s.glassCard, 
      maxWidth: '860px', 
      margin: '0 auto', 
      textAlign: 'left',
      padding: isPhone ? '24px' : '48px',
      position: 'relative',
      zIndex: 1
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: isPhone ? 'column' : 'row', 
        alignItems: isPhone ? 'center' : 'flex-start', 
        gap: '24px' 
      }}>
        <div style={{ textAlign:  'center' }}>
          <h3 style={{ 
            fontSize: isPhone ? '24px' : '32px', 
            fontWeight: '800', 
            letterSpacing: '-0.03em', 
            marginBottom: '16px',
            color: '#fff',
            justifyContent:'center' ,
            display: 'flex',
          }}>
            The North Star
          </h3>
          <p style={{ 
            fontSize: isPhone ? '15px' : '17px', 
            color: '#c8c8c8', 
            lineHeight: '1.8' ,
            justifyContent: 'center',
            display: 'flex',
          }}>
            Ellaris takes its name from Polaris, the North Star. When old maps fail, you need orientation. Ellaris exists to help people and organizations find their direction, their alignment, and their place in a rapidly changing world. Not faster hiring but better matching. Not more productivity but more meaningful work.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* CLOSING FOOTER */}
        <footer ref={queitA.ref}>
          <div style={{
            ...reveal(queitA.visible),
            padding: isPhone ? '56px 24px' : '110px 64px',
            textAlign: 'center',
            border: '1px solid rgba(143, 21, 117, 0.25)',
            borderRadius: '28px',
            margin: isPhone ? '16px 0 24px' : '24px 0 48px',
            background: 'rgba(255,255,255,0.015)',
            boxShadow: '0 8px 48px rgba(255,20,147,0.08), 0 1px 0 rgba(255,255,255,0.04) inset, 0 2px 8px rgba(255,20,147,0.12) inset',
            backdropFilter: 'blur(12px)',
            boxSizing: 'border-box' as const,
            position: 'relative' as const,
            overflow: 'hidden' as const,
          }}>
            <div style={{ position: 'absolute', bottom: '-80px', left: '50%', transform: 'translateX(-50%)', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(222,60,190,0.1), transparent 70%)', pointerEvents: 'none' }} />
            <h3 style={{ fontSize: isPhone ? '36px' : '58px', marginBottom: '28px', fontWeight: '800', letterSpacing: '-0.04em', lineHeight: '1.1' }}>A Quiet Ambition</h3>
            <p style={{ maxWidth: '720px', margin: '0 auto 24px', color: '#a1a1a1', fontSize: isPhone ? '15px' : '18px', lineHeight: '1.75' }}>
              Ellaris is not trying to replace everything overnight. We are making a long-term bet on a better future of work. One where people love what they do, love who they do it with, and feel that their effort actually matters.
            </p>
            <p style={{ maxWidth: '720px', margin: '0 auto 44px', color: '#a1a1a1', fontSize: isPhone ? '15px' : '18px', lineHeight: '1.75' }}>
              It is one piece of a larger vision: <strong style={{ color: '#e2d9ff' }}>Technology in the service of a life well lived and fully actualized.</strong>
            </p>
            <div style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 50%, #7759fd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: isPhone ? '18px' : '28px',
              fontWeight: '800',
              lineHeight: '1.4',
              letterSpacing: '-0.02em',
              maxWidth: '700px',
            }}>
              That is Ellaris, and we invite you to join us in shaping the new world of purposeful work.
            </div>
          </div>
        </footer>

        <div style={{ height: '16px' }} />
      </div>
    </div>
  );
};

export default EllarisLandingPage;