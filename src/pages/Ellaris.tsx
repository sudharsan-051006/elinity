import React, { useEffect, useState } from 'react';
import unamed from '../../public/Ellaris.jpg';

const EllarisLandingPage: React.FC = () => {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsPhone(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const s = {
    container: {
      backgroundColor: '#050505',
      backgroundImage: 'linear-gradient(to bottom, #060014, #0c0024)',
      color: '#ffffff',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      lineHeight: '1.6',
      minHeight: '100vh',
    } as React.CSSProperties,

    heroWrapper: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${unamed})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: isPhone ? 'scroll' : 'fixed',
      padding: '120px 0 80px',
      position: 'relative' as const,
    } as React.CSSProperties,

    wrapper: {
      maxWidth: '1100px',
      margin: '0 auto',
      padding: isPhone ? '0 16px' : '0 24px',
    } as React.CSSProperties,

    glassCard: {
      background: 'rgba(255, 255, 255, 0.03)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderRadius: isPhone ? '16px' : '24px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      padding: isPhone ? '24px' : '48px',
      marginBottom: isPhone ? '20px' : '40px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(119, 89, 253, 0.15) inset',
    } as React.CSSProperties,

    heroTitle: {
      fontSize: isPhone ? '42px' : '72px',
      fontWeight: '800',
      letterSpacing: '-0.04em',
      lineHeight: '1.1',
      textAlign: 'center' as const,
      background: 'linear-gradient(to right, #ffffff, #7759fd)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      padding: isPhone ? '40px 0' : '100px 0',
    } as React.CSSProperties,

    sectionLabel: {
      color: '#7759fd',
      fontSize: isPhone ? '16px' : '20px',
      fontWeight: '700',
      letterSpacing: '0.1em',
      marginBottom: '16px',
      display: 'block',
      textAlign: isPhone ? 'center' : 'left',
    } as React.CSSProperties,

    grid: {
      display: 'grid',
      gridTemplateColumns: isPhone ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: isPhone ? '16px' : '24px',
      marginBottom: isPhone ? '30px' : '60px',
    } as React.CSSProperties,

    accentBox: {
      padding: isPhone ? '16px' : '24px',
      borderRadius: '16px',
      backgroundColor: 'rgba(119, 89, 253, 0.1)',
      border: '1px solid rgba(119, 89, 253, 0.2)',
    } as React.CSSProperties,
  };

  return (
    <div style={s.container} className="ellaris">
      {/* HERO SECTION - Background image applies only here */}
      <section style={s.heroWrapper}>
        <div style={s.wrapper}>
          <h1 style={s.heroTitle}>Ellaris: Work, Reimagined Around Purpose, People, and Fit</h1>  
        </div>
      </section>

      <div style={s.wrapper}>
        {/* WHAT IS IT */}
        <section style={{ ...s.glassCard, marginTop: '40px' }}>
          <span style={s.sectionLabel}>What Is Ellaris</span>
          <p style={{ fontSize: '20px', marginBottom: '24px' }}>
            <strong>Ellaris is Elinity’s platform for meaningful work.</strong><br/> 
            Where Elinity helps people find and build the most important relationships of their lives, Ellaris helps them find the work, teams, and missions where they can truly thrive.
          </p>
          <p style={{ color: '#d1d1d1' }}>
            Ellaris is a deep person-to-organization matching system, built for a world where intelligence is becoming a commodity, skills are becoming abundant, and <strong>passion, purpose, personality, and mission alignment are becoming the real differentiators.</strong> It connects people to companies, teams, and missions not through résumés and keyword filters, but through who they are, what they care about, and where they are headed.<br/><br/> 
            Ellaris is not a job board, or a recruiting software, or a marketplace of endless applications. <br/><br/>
            It is a curated, high-signal matching layer for the future of work and purpose.
          </p>
        </section>

        {/* WHO IS IT FOR */}
        <section style={{ marginBottom: '80px', border: '1px solid rgba(119, 89, 253, 0.2)', borderRadius: '16px', padding: '40px', boxShadow: '0 4px 16px rgba(119, 89, 253, 0.1)' }}>
          <h2 style={{ fontSize: '40px', marginBottom: '40px' }}>Who Ellaris Is For</h2>
          <p style={{ textAlign: 'center', fontSize: '18px', fontStyle: 'italic', marginBottom: '40px' }}>
            Ellaris is built for people and organizations who care deeply about fit.
          </p>
          <div style={s.grid}>
            <div style={s.glassCard}>
              <h3 style={{ fontSize: '24px', color: '#7759fd', marginBottom: '20px' }}>For individuals</h3>
              <ul style={{ listStyleType: 'none', paddingLeft: '0', color: '#d1d1d1', fontSize: '16px' }}>
                {["People who want to work on things they genuinely care about", "Builders, thinkers, creators, researchers, operators", "Those who value mission, values, and people over titles and prestige", "Anyone who wants their work to feel alive, not extractive"].map((text, i) => (
                  <li key={i} style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#7759fd', marginRight: '10px', fontSize: '12px', marginTop: '4px' }}>●</span>{text}
                  </li>
                ))}
              </ul>
            </div>
            <div style={s.glassCard}>
              <h3 style={{ fontSize: '24px', color: '#7759fd', marginBottom: '20px' }}>For companies and teams</h3>
              <ul style={{ listStyleType: 'none', paddingLeft: '0', color: '#d1d1d1', fontSize: '16px' }}>
                {["Mission-driven startups and organizations", "Teams that care about culture, coherence, and long-term impact", "Founders who want people who believe in the mission, not just the compensation", "Organizations preparing for a post-AGI world where human qualities matter more"].map((text, i) => (
                  <li key={i} style={{ marginBottom: '12px', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ color: '#7759fd', marginRight: '10px', fontSize: '12px', marginTop: '4px' }}>●</span>{text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p style={{ textAlign: 'center', fontSize: '18px', fontStyle: 'italic' }}>
            Ellaris is for the future-ready. For those building toward something that lasts, that truly matters, that deeply resonates.
          </p>
        </section>

        {/* WHY IT EXISTS */}
        <section style={s.glassCard}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#7759fd' }}>Why Ellaris Exists</h2>
          <p style={{ fontSize: '22px', marginBottom: '20px' }}>The way we match people to work is broken.</p>
          <p style={{ color: '#d1d1d1', marginBottom: '24px' }}>
            Today, individuals apply to hundreds of roles they barely resonate with. Companies sort through thousands of applications, filtering by proxies that say little about who someone actually is. The result is misalignment on both sides, high churn, disengagement, and enormous wasted human potential.<br/><br/>
            At the same time, work itself is changing.
          </p>
          <div style={s.accentBox}>
            <p><strong>As AI and automation commoditize hard skills, the real value shifts toward:</strong></p>
            <div style={{ display: 'grid', gridTemplateColumns: isPhone ? '1fr' : '1fr 1fr', gap: '10px' }}>
              <span>• Passion</span><span>• Purpose</span><span>• Personality</span><span>• Judgment</span>
              <span>• Taste</span><span>• Mission alignment</span><span>• Relationship-building ability</span>
            </div>
          </div>
          <p style={{ marginTop: '24px' }}>
            Ellaris exists because these things are not captured by résumés, and because the future of work demands a different matching architecture.
          </p>
        </section>

        {/* ECOSYSTEM */}
        <section style={{ marginBottom: '80px', textAlign: 'center', border: '1px solid rgba(119, 89, 253, 0.2)', borderRadius: '16px', padding: isPhone ? '20px' : '40px' }}>
          <h2 style={{ fontSize: isPhone ? '28px' : '40px', marginBottom: '20px' }}>Ellaris Within the Elinity Ecosystem</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto 40px', textAlign: 'left' }}>
            <p style={{ color: '#d1d1d1', fontSize: '18px', marginBottom: '20px', textAlign: 'center' }}>
              Elinity is a platform for human flourishing. At the highest level, we believe a good life rests on two pillars:
            </p>
            <ul style={{ listStyleType: 'none', padding: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', fontSize: '20px' }}>
              <li><span style={{ color: '#7759fd', marginRight: '10px' }}>●</span> Deep, meaningful relationships</li>
              <li><span style={{ color: '#7759fd', marginRight: '10px' }}>●</span> Purposeful, meaningful work</li>
            </ul>
          </div>
          
          <div style={s.glassCard}>
            <p>Elinity began by tackling the first pillar. Ellaris is the natural extension into the second.</p>
            <div style={{ display: 'flex', flexDirection: isPhone ? 'column' : 'row', justifyContent: 'center', gap: isPhone ? '20px' : '40px', marginTop: '30px', textAlign: 'left' }}>
              <div style={{ flex: 1 }}><p><strong>Elinity</strong> helps you find your people and build deep relationships</p></div>
              <div style={{ borderLeft: isPhone ? 'none' : '1px solid #444', borderTop: isPhone ? '1px solid #444' : 'none', height: isPhone ? '1px' : 'auto' }}></div>
              <div style={{ flex: 1 }}><p><strong>Ellaris</strong> helps you find your place, your mission, and your work tribe</p></div>
            </div>
            <p style={{ marginTop: '30px', fontWeight: 'bold' }}>Relationships feed purpose. Purpose feeds relationships. Ellaris and Elinity form a single, coherent ecosystem designed around the whole human.</p>
          </div>
        </section>

        {/* CORE FEATURES */}
        <section style={{ marginBottom: '80px', border: '1px solid rgba(119, 89, 253, 0.2)', borderRadius: '16px', padding: isPhone ? '24px' : '40px' }}>
          <h2 style={{ fontSize: isPhone ? '32px' : '50px', marginBottom: '40px', textAlign: 'center' }}>Core Features and Highlights</h2>
          
          <div style={s.glassCard}>
            <h3 style={{ color: '#7759fd', marginBottom: '15px' }}>Curated, High-Bar Matching</h3>
            <p>Ellaris does not show you everything. It shows you only what passes your bar. Our system deeply understands both individuals and organizations across dimensions like personality, values, goals, working style, mission, and long-term direction. Matches are surfaced only when there is strong, mutual alignment.</p>
            <p style={{ ...s.accentBox, marginTop: '20px' }}>
              If nothing clears the bar, you see nothing. No noise. No spam. No endless scrolling. This applies equally to individuals and companies. Ellaris replaces mass applications with mutual, high-confidence introductions.
            </p>
          </div>

          <div style={s.grid}>
            <div style={s.glassCard}>
              <h3 style={{ color: '#7759fd', marginBottom: '15px' }}>Prompt-Based Discovery</h3>
              <p>Sometimes you don’t want to browse. You want to describe. Ellaris lets you prompt your way to people, teams, or organizations using natural language.</p>
              <div style={{ fontSize: '14px', fontStyle: 'italic', background: '#111', padding: '15px', borderRadius: '10px', marginTop: '15px' }}>
                “Find me small AI startups working on climate or education...”<br/>
                “I just moved to London. Find me early-stage teams obsessed with systems thinking...”
              </div>
            </div>
            <div style={s.glassCard}>
              <h3 style={{ color: '#7759fd', marginBottom: '15px' }}>Deep Profiles, Not Resumes</h3>
              <p>Ellaris profiles are rich, living representations, not static CVs. Matching happens at the level of essence, not credentials.</p>
              <p style={{ fontSize: '14px', color: '#a1a1a1', marginTop: '10px' }}>Includes: Values, motivations, interests, long-term goals, and cultural principles.</p>
            </div>
          </div>

          <div style={s.grid}>
            <div style={s.glassCard}>
              <h3 style={{ color: '#7759fd', marginBottom: '15px' }}>Collaborative Experiences and Games</h3>
              <p>Ellaris includes a growing suite of collaborative games and play-based experiences designed for teams and workplaces of the future. Build trust, surface strengths, and encourage creativity through play.</p>
            </div>
            <div style={s.glassCard}>
              <h3 style={{ color: '#7759fd', marginBottom: '15px' }}>Growth and Skill Modes and Sessions</h3>
              <p>Structured growth modules focusing on: Communication, decision-making, leadership, and navigating ambiguity. Go beyond credentialing to become aligned humans.</p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ ...s.glassCard, textAlign: 'center' }}>
          <h2 style={{ fontSize: '40px', marginBottom: '40px' }}>How Ellaris Works</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left', maxWidth: '700px', margin: '0 auto' }}>
            <p><strong>1. Create a rich profile:</strong> Individuals and organizations articulate who they are, what they care about, and where they are headed.</p>
            <p><strong>2. Set your bar:</strong> Define what alignment actually means to you. Ellaris takes this seriously.</p>
            <p><strong>3. Receive curated matches:</strong> Only high-confidence, mutual matches are surfaced.</p>
            <p><strong>4. Explore together:</strong> Use conversations, collaborative experiences, and shared activities to sense real fit.</p>
            <p><strong>5. Build from alignment:</strong> Teams form around belief, energy, and purpose, not just opportunity.</p>
          </div>
        </section>

        {/* THESIS & NORTH STAR */}
        <section style={{ padding: '80px 20px', textAlign: 'center', border: '1px solid rgba(119, 89, 253, 0.2)', borderRadius: '24px', margin: '60px 0' }}>
          <h2 style={{ fontSize: '40px', marginBottom: '30px' }}>The Ellaris Thesis</h2>
          <p style={{ maxWidth: '850px', margin: '0 auto 40px', fontSize: '18px' }}>
            In the coming world: Skills will be abundant, Tools will be cheap, and Distribution will be easy. The real moat will be: <strong>Who you are, What you care about, and Who you choose to build with.</strong>
          </p>

          <div style={{ ...s.glassCard, maxWidth: '900px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '32px', marginBottom: '20px' }}>The North Star</h3>
            <p>
              Ellaris takes its name from Polaris, the North Star. When old maps fail, you need orientation. 
              Ellaris exists to help people and organizations find their direction, their alignment, and their place in a rapidly changing world. Not faster hiring but better matching. Not more productivity but more meaningful work.
            </p>
          </div>
        </section>

        {/* CLOSING FOOTER */}
        <footer style={{ 
          padding: '100px 40px', 
          textAlign: 'center', 
          border: '1px solid rgba(119, 89, 253, 0.2)', 
          borderRadius: '24px', 
          // marginBottom: '80px',
          background: 'rgba(255, 255, 255, 0.02)', 
          backdropFilter: 'blur(10px)'
        }}>
          <h3 style={{ fontSize: isPhone ? '36px' : '52px', marginBottom: '30px', fontWeight: '800' }}>A Quiet Ambition</h3>
          <p style={{ maxWidth: '800px', margin: '0 auto 40px', color: '#a1a1a1', fontSize: '18px' }}>
            Ellaris is not trying to replace everything overnight. We are making a long-term bet on a better future of work. One where people love what they do, love who they do it with, and feel that their effort actually matters.
          </p>
          <div style={{ background: 'linear-gradient(to right, #ffffff, #7759fd)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize: isPhone ? '24px' : '32px', fontWeight: 'bold' }}>
            Join us in shaping the new world of purposeful work.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default EllarisLandingPage;