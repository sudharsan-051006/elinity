import React from 'react';
import { motion } from 'framer-motion';

const ElinityEnterprise: React.FC = () => {

  /* =========================
     GLOBAL ANIMATION VARIANTS
  ==========================*/

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -6,
      transition: { duration: 0.35, ease: "easeOut" }
    }
  };

  const floatingGlow = {
    animate: {
      y: [0, -25, 0],
      opacity: [0.4, 0.7, 0.4],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  /* =========================
     STYLES
  ==========================*/

  const containerStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: `
      radial-gradient(circle at 10% 20%, rgba(46, 16, 101, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 90% 80%, rgba(30, 58, 138, 0.2) 0%, transparent 50%),
      linear-gradient(180deg, #020617 0%, #0a0f1e 100%)
    `,
    backgroundAttachment: 'fixed',
    color: '#f8fafc',
    fontFamily: "'Inter', system-ui, sans-serif",
    padding: '80px 20px',
    lineHeight: '1.7',
    overflowX: 'hidden',
    position: 'relative'
  };

  const glassStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '40px',
    padding: '60px 40px',
    maxWidth: '1100px',
    margin: '0 auto 60px auto',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
  };

  const mainHeadingStyle: React.CSSProperties = {
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    fontWeight: 900,
    letterSpacing: '-0.04em',
    marginBottom: '0.5rem',
    background: 'linear-gradient(to right, #ffffff, #94a3b8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: '1.1',
  };

  const subHeadingStyle: React.CSSProperties = {
    fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
    fontWeight: 400,
    color: '#94a3b8',
    marginBottom: '3rem',
    letterSpacing: '-0.02em',
  };

  const offeringHeaderStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: '1rem',
    color: '#fff'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={containerStyle}
    >

      {/* Floating ambient glow */}
      <motion.div
        variants={floatingGlow}
        animate="animate"
        style={{
          position: "absolute",
          top: 100,
          left: "10%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.25), transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none"
        }}
      />

      <div className='pt-32'></div>

      {/* HERO */}
      <motion.section 
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        style={{ textAlign: 'center', marginBottom: '100px', padding: '0 20px' }}
      >
        <motion.div variants={fadeInUp}>
          <h1 style={mainHeadingStyle}>Elinity for Enterprises</h1>
          <h2 style={subHeadingStyle}>Build teams that thrive - not just function</h2>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          whileHover={{ scale: 1.01 }}
          style={glassStyle}
        >
          {/* CONTENT UNCHANGED */}
          {/* (I kept ALL your text exactly same — only motion added) */}

          <p style={{
            fontSize: '1.25rem',
            color: '#cbd5e1',
            maxWidth: '800px',
            margin: '0 auto 30px auto',
            lineHeight: '1.7'
          }}>
            The companies that win in the next decade will not be the ones with the most resources.  
            They’ll be the ones with the most{' '}
            <span style={{ color: '#fff', fontWeight: 600 }}>
              aligned, emotionally intelligent, high-agency people.
            </span>
            <br /><br />
            <span style={{ color: '#fff', fontWeight: 600 }}>
              Elinity for Enterprises is built for exactly that.
            </span>
            <br /><br />
            We help you:
          </p>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '30px'
          }}>
            {[
              'find the most aligned, mission-driven people',
              'elevate the emotional intelligence of your team',
              'future-proof your human advantage in a post-AGI landscape',
              'build relationship quality as a strategic asset'
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                style={{
                  padding: '10px 22px',
                  borderRadius: '100px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.03)',
                  fontSize: '0.95rem',
                  color: '#e2e8f0'
                }}
              >
                • {item}
              </motion.div>
            ))}
          </div>

          <p style={{
            fontSize: '1.1rem',
            color: '#cbd5e1',
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            This is not recruitment software, or some HR wellness perk.  
            <br />
            <span style={{ color: '#fff', fontWeight: 600 }}>
              This is relationship infrastructure.
            </span>
          </p>
        </motion.div>
      </motion.section>

      <h1
        style={{
          color: '#fff',
          fontSize: '2.5rem',
          fontWeight: 700,
          textAlign: 'center',
          margin: '40px 20px 30px 20px'
        }}
      >Our Offerings</h1>

      {/* SECTION 1: ELLARIS */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={glassStyle}
      >
        {/* <div style={{ color: '#60a5fa', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Offering 01</div> */}
        <h2 style={offeringHeaderStyle}>Ellaris: Find Missionaries. Not Mercenaries.</h2>
        <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '40px' }}>
          Hiring is broken. <br></br> You pay brutal search costs.<br></br>
          You burn months interviewing.<br></br>
          You optimize for CVs and keywords.<br></br>
          You hope alignment magically appears after onboarding.<br></br><br></br>
          And the real brutal cost you dare not consider?
          The opportunity cost of not having the most amazing, deeply aligned people on your team. <br></br><br></br>
          Imagine now if you did have those people in your team - how much of an accelerant the synergistic energy would be to your mission. 
          <br></br><br></br>  Ellaris helps you achieve that.
        </p>

        <h3>
          What is Ellaris? <br></br>
        </h3>
          <p style={{ fontSize: '1rem', color: '#cbd5e1', marginBottom: '30px' }}>  
          Ellaris repurposes the same deep modeling and matching engine that powers Elinity’s relationship system - but for companies and talent.
          <br></br><br></br>
          We match individuals to companies across:
          <br></br><br></br>
        </p>  
        
<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center", // centers second row automatically
    gap: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  }}
>
  {[
    "values",
    "long-term vision and mission congruence",
    "temperament and personality",
    "cognitive strengths",
    "ambition profile",
    "cultural fit",
    "collaboration patterns and work style",
  ].map((trait) => (
    <div
      key={trait}
      style={{
        width: "200px",
        padding: "20px",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.05)",
        textAlign: "center",
      }}
    >
      <span style={{ fontWeight: 600 }}>{trait}</span>
    </div>
  ))}
</div>
        <p style={{padding: '20px', 
          borderRadius: '20px',
           background: 'rgba(255,255,255,0.03)', 
           border: '1px solid rgba(255,255,255,0.05)', 
           textAlign: 'center',
           margin: '20px 0' }}>This is not surface-level matching.<br></br>
        this is best-fit alignment across relevant dimensions</p>

        <div className="pt-20">

          {/* Glass Card */}
          <div
            style={{
              maxWidth: '850px',
              margin: '0 auto',
              padding: '40px',
              borderRadius: '24px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
            }}
          >
          {/* Section Heading */}
          <h3
            style={{
              fontSize: '1.1rem',
              letterSpacing: '2px',
              // textTransform: 'uppercase',
              color: '#94a3b8',
              textAlign: 'center',
              marginBottom: '2rem'
            }}
          >
            We connect
          </h3>
            {/* Connection Points */}
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                fontSize: '1rem',
                color: '#e2e8f0'
              }}
            >
              {[
                'Founders → founding team members',
                'Companies → high-conviction operators',
                'Mission-driven orgs → deeply aligned talent',
                'Culture-shaping companies → talent that fits right at home'
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    padding: '14px 18px',
                    borderRadius: '14px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div
              style={{
                height: '1px',
                background: 'rgba(255,255,255,0.08)',
                margin: '32px 0'
              }}
            />

            {/* Closing Statement */}
            <p
              style={{
                fontSize: '1.1rem',
                textAlign: 'center',
                color: '#cbd5e1',
                lineHeight: '1.7'
              }}
            >
              We help you find the people who believe in what you’re building,
              who share your mission,
              and who are just as driven.
            </p>
          </div>
          
        </div>
        <div className="pt-20">
          {/* Section Heading */}

          {/* Glass Card */}
          <div
            style={{
              maxWidth: '850px',
              margin: '0 auto',
              padding: '40px',
              borderRadius: '24px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
            }}
          >

                      <h3
            style={{
              fontSize: '1.1rem',
              letterSpacing: '2px',
              // textTransform: 'uppercase',
              color: '#94a3b8',
              textAlign: 'center',
              marginBottom: '2rem'
            }}
          >
            Why It Matters Now
          </h3>

            {/* Divider */}
            <div
              style={{
                height: '1px',
                background: 'rgba(255,255,255,0.08)',
                margin: '32px 0'
              }}
            />

            {/* Closing Statement */}
            <p
              style={{
                fontSize: '1.1rem',
                textAlign: 'center',
                color: '#cbd5e1',
                lineHeight: '1.7'
              }}
            >
              In a post-AGI world, as technology commodifies, the bottleneck shifts to people.
              Human leverage becomes decisive.
            </p>
            <p
              style={{
                fontSize: '1.1rem',
                textAlign: 'center',
                color: '#cbd5e1',
                lineHeight: '1.7'
              }}
            >
              The difference between a good team and a truly aligned team compounds massively.
            </p>
            <p
              style={{
                fontSize: '1.1rem',
                textAlign: 'center',
                color: '#cbd5e1',
                lineHeight: '1.7'
              }}
            >
              Ellaris is designed to help you achieve that compounding, to help your mission become your alpha and your omega.
            </p>
          </div>
        </div>
        <div className="pt-20">
          {/* Glass Card */}
          <div
            style={{
              maxWidth: '850px',
              margin: '0 auto',
              padding: '40px',
              borderRadius: '24px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
            }}
          >
          {/* Section Heading */}
          <h3
            style={{
              fontSize: '1.1rem',
              letterSpacing: '2px',
              // textTransform: 'uppercase',
              color: '#94a3b8',
              textAlign: 'center',
              marginBottom: '2rem'
            }}
          >
Pricing
          </h3>

            {/* Divider */}
            <div
              style={{
                height: '1px',
                background: 'rgba(255,255,255,0.08)',
                margin: '32px 0'
              }}
            />
            {/* Closing Statement */}
            <p
              style={{
                fontSize: '1.1rem',
                textAlign: 'center',
                color: '#cbd5e1',
                lineHeight: '1.7'
              }}
            >
We have an outcome-based pricing, where we only charge if you hire from us. 
            </p>
            <p
              style={{
                fontSize: '1.1rem',
                textAlign: 'center',
                color: '#cbd5e1',
                lineHeight: '1.7'
              }}
            >
              Because we’re confident you’ll get the value.
            </p>
            
          </div>
        </div>
        
      </motion.section>

      {/* SECTION 2: EMPLOYEES */}
      <motion.section 
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={glassStyle}
      >
        <div style={{ color: '#a78bfa', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Offering 02</div>
        <h2 style={offeringHeaderStyle}>Elinity for Employees: Elevate the Relationship Layer</h2>
        <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '40px' }}>
          Your most important asset is not capital - there is plenty of that going around <br></br>
          It’s not software - not anymore. <br></br>
          It’s not even strategy - soon, we will all have a Jobs-level strategist in our pockets.<br></br><br></br> 
          In this world, the most important asset becomes the emotional and relational health of your team.
        </p>

        <div
          style={{
            maxWidth: '900px',
            margin: '80px auto',
            padding: '50px 40px',
            borderRadius: '28px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
            textAlign: 'center'
          }}
        >
          {/* Heading */}
          <h3
            style={{
              fontSize: '1.4rem',
              color: '#fff',
              fontWeight: 600,
              marginBottom: '24px',
              letterSpacing: '-0.01em'
            }}
          >
            Relationship quality is the most powerful determinant of well-being.
          </h3>

          {/* Subtext */}
          <p
            style={{
              fontSize: '1.05rem',
              color: '#94a3b8',
              marginBottom: '24px'
            }}
          >
            Well-being drives:
          </p>

          {/* Pill list */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '14px',
              marginBottom: '30px'
            }}
          >
            {[
              'motivation',
              'creativity',
              'alignment',
              'resilience',
              'discretionary effort',
              'long-term retention'
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '10px 20px',
                  borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.04)',
                  fontSize: '0.95rem',
                  color: '#e2e8f0'
                }}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Closing */}
          <p
            style={{
              fontSize: '1.05rem',
              color: '#cbd5e1',
              lineHeight: '1.8',
              maxWidth: '720px',
              margin: '0 auto'
            }}
          >
            In high-leverage environments, a single misalignment can cost millions.
            <br /><br />
            A single aligned team can create disproportionate value — and the kind of value beyond the financial,
            the kind that matters even more. <strong style={{ color: '#fff' }}>Much more.</strong>
          </p>
        </div>

        <div
              style={{
                maxWidth: '950px',
                margin: '80px auto',
                padding: '60px 45px',
                borderRadius: '32px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 25px 70px rgba(0,0,0,0.45)',
                textAlign: 'center'
              }}
            >
              {/* Title */}
              <h2
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '10px',
                  letterSpacing: '-0.01em'
                }}
              >
                What We Provide
              </h2>

              <p
                style={{
                  color: '#94a3b8',
                  marginBottom: '30px',
                  fontSize: '1.05rem'
                }}
              >
                An Elinity package for your team that includes:
              </p>

              {/* First Pill Grid */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '14px',
                  marginBottom: '40px'
                }}
              >
                {[
                  'relationship-flourishing OS access',
                  'team compatibility insights',
                  'communication and reflection prompts',
                  'guided rituals for alignment',
                  'shared intention tracking',
                  'structured reflection cycles',
                  'conflict-awareness frameworks',
                  'emotional intelligence development tools'
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '10px 20px',
                      borderRadius: '999px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: 'rgba(255,255,255,0.04)',
                      fontSize: '0.95rem',
                      color: '#e2e8f0'
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  background: 'rgba(255,255,255,0.08)',
                  margin: '35px 0'
                }}
              />

              {/* Coach Section */}
              <h3
                style={{
                  fontSize: '1.4rem',
                  color: '#fff',
                  fontWeight: 600,
                  marginBottom: '12px'
                }}
              >
                A Work Flourishing Skills Coach for the Post-AGI Era
              </h3>

              <p
                style={{
                  color: '#94a3b8',
                  marginBottom: '28px',
                  fontSize: '1.05rem'
                }}
              >
                As automation increases, the edge shifts to:
              </p>

              {/* Second Pill Grid */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '14px',
                  marginBottom: '40px'
                }}
              >
                {[
                  'judgment',
                  'taste',
                  'trust',
                  'emotional regulation',
                  'clarity of thought',
                  'ethical reasoning',
                  'collaborative intelligence'
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '10px 20px',
                      borderRadius: '999px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      background: 'rgba(255,255,255,0.04)',
                      fontSize: '0.95rem',
                      color: '#e2e8f0'
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Closing */}
              <p
                style={{
                  fontSize: '1.05rem',
                  color: '#cbd5e1',
                  lineHeight: '1.8',
                  maxWidth: '720px',
                  margin: '0 auto'
                }}
              >
                We provide structured coaching modules inside the OS, with Ellegara, 
                to help your team sharpen these skills, and become ever-prepared to win in any future.
              </p>
            </div>
      </motion.section>

      <motion.section 
initial="hidden"
whileInView="visible"
viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={{ textAlign: 'center', padding: '60px 20px' }}
      >
        <div
          style={{
            maxWidth: '1000px',
            margin: '90px auto',
            padding: '65px 50px',
            borderRadius: '34px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 25px 70px rgba(0,0,0,0.45)',
          }}
        >
          {/* Title */}
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 700,
              color: '#fff',
              textAlign: 'center',
              marginBottom: '50px',
              letterSpacing: '-0.01em'
            }}
          >
            How It Works
          </h2>

          {/* STEP 1 */}
          <div style={{ marginBottom: '45px' }}>
            <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '10px' }}>
              Step 1: Enterprise Package
            </h3>

            <p style={{ color: '#cbd5e1', marginBottom: '20px', lineHeight: '1.8' }}>
              You choose an Elinity Enterprise package tailored to your team size and goals.
              <br />
              This includes access to:
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {[
                'Ellaris (if hiring)',
                'The team relationship OS',
                'Work flourishing human skills development system'
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '9px 18px',
                    borderRadius: '999px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.04)',
                    color: '#e2e8f0',
                    fontSize: '0.92rem'
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* STEP 2 */}
          <div style={{ marginBottom: '45px' }}>
            <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '10px' }}>
              Step 2: Onboarding
            </h3>

            <p style={{ color: '#cbd5e1', marginBottom: '20px', lineHeight: '1.8' }}>
              One of our team members conducts a live onboarding session with you and your team.
              <br />
              We walk you through:
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {[
                'how the system works',
                'how to use it daily, weekly or at your desired cadence',
                'how to integrate it into existing workflows',
                'how to measure relational health and growth'
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '9px 18px',
                    borderRadius: '999px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.04)',
                    color: '#e2e8f0',
                    fontSize: '0.92rem'
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <p style={{ color: '#94a3b8', marginTop: '20px', lineHeight: '1.8' }}>
              We make it practical, grounded, and focused on your team’s needs.
            </p>
          </div>

          {/* STEP 3 */}
          <div>
            <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '10px' }}>
              Step 3: Ongoing Integration
            </h3>

            <p style={{ color: '#cbd5e1', marginBottom: '20px', lineHeight: '1.8' }}>
              Your team uses Elinity as a living layer:
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
              {[
                'onboarding new hires',
                'quarterly reflection cycles',
                'strengthening cross-functional collaboration',
                'leadership development',
                'resolving tension early',
                'reinforcing culture intentionally'
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '9px 18px',
                    borderRadius: '999px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'rgba(255,255,255,0.04)',
                    color: '#e2e8f0',
                    fontSize: '0.92rem'
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <p style={{ color: '#94a3b8', lineHeight: '1.8' }}>
              This goes beyond something like a one-time intervention into an ongoing relational infrastructure.
            </p>
          </div>
        </div>
      </motion.section>


      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          maxWidth: '1000px',
          margin: '100px auto',
          padding: '70px 50px',
          borderRadius: '36px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 25px 70px rgba(0,0,0,0.45)',
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: '#fff',
            textAlign: 'center',
            marginBottom: '40px',
            letterSpacing: '-0.01em'
          }}
        >
          Why Enterprises Choose Elinity
        </h2>

        {/* Reasons */}
        <div
          style={{
            maxWidth: '760px',
            margin: '0 auto',
            textAlign: 'center',
            lineHeight: '1.9',
            fontSize: '1.08rem',
            color: '#cbd5e1',
            marginBottom: '60px'
          }}
        >
          <p>Because the cost of misalignment is enormous.</p>
          <p>Because recruitment inefficiency compounds.</p>
          <p>Because culture is not a poster - it’s a lived system.</p>
          <p>Because in a world where AI levels the technical playing field,</p>
          <p style={{ color: '#fff', fontWeight: 500 }}>
            human connection becomes the differentiator.
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'rgba(255,255,255,0.08)',
            margin: '50px auto',
            maxWidth: '700px'
          }}
        />

        {/* Future Heading */}
        <h3
          style={{
            fontSize: '1.5rem',
            color: '#fff',
            textAlign: 'center',
            marginBottom: '20px',
            fontWeight: 600
          }}
        >
          Built for the Post-AGI Landscape
        </h3>

        {/* Intro */}
        <p
          style={{
            textAlign: 'center',
            color: '#94a3b8',
            marginBottom: '30px',
            fontSize: '1.05rem'
          }}
        >
          We’ve imagined what teams need when:
        </p>

        {/* Pill grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '14px',
            marginBottom: '45px'
          }}
        >
          {[
            'AI handles more and more operational work',
            'Most technical skills become commodities',
            'decision velocity increases as landscape change rate increases',
            'leverage per individual skyrockets',
            'trust and clarity become non-negotiable',
            'ROI - and opportunity costs - increase, as there is a lot more to gain, a lot more to lose'
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              style={{
                padding: '10px 18px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.04)',
                color: '#e2e8f0',
                fontSize: '0.92rem'
              }}
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* Closing */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '750px',
            margin: '0 auto',
            lineHeight: '1.9',
            fontSize: '1.08rem',
            color: '#cbd5e1'
          }}
        >
          <p>
            We built Ellaris and the team OS together with that future in mind.
          </p>

          <p style={{ marginTop: '20px', color: '#fff', fontWeight: 600 }}>
            Elinity for Enterprises is about tomorrow’s team architecture.
          </p>
        </div>
      </motion.section>



      {/* FINAL CTA */}
<motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        style={{ textAlign: 'center', padding: '80px 20px' }}
      >
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '25px' }}>
          Ready to Explore?
        </h2>

        <p style={{
          color: '#cbd5e1',
          fontSize: '1.1rem',
          maxWidth: '700px',
          margin: '0 auto 40px auto',
          lineHeight: '1.8'
        }}>
          For more information or to book a call with our team, email us at
        </p>

        <motion.a 
          whileHover={{ scale: 1.08, boxShadow: '0 0 45px rgba(96, 165, 250, 0.7)' }}
          animate={{
            boxShadow: [
              '0 0 0px rgba(96,165,250,0)',
              '0 0 25px rgba(96,165,250,0.6)',
              '0 0 0px rgba(96,165,250,0)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
          whileTap={{ scale: 0.95 }}
          href="mailto:enterprise@elinity.ai"
          style={{
            background: '#fff',
            color: '#020617',
            padding: '20px 60px',
            borderRadius: '100px',
            textDecoration: 'none',
            fontWeight: 800,
            fontSize: '1.2rem',
            display: 'inline-block'
          }}
        >
          enterprise@elinity.ai
        </motion.a>

        <p style={{
          marginTop: '40px',
          color: '#94a3b8',
          fontSize: '1.05rem',
          maxWidth: '780px',
          marginInline: 'auto',
          lineHeight: '1.8'
        }}>
          Let’s build teams and seed missions that flourish and actualize their fullest
          potential to create meaning and magic.
        </p>
      </motion.section>

    </motion.div>
  );
};

export default ElinityEnterprise;