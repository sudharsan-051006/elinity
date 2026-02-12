import React, { useState } from "react";
import "../styles/JoinUs.css";
import elinityLogo from '../../public/mainlogo.png';
// import { purpleGradient } from "../theme";
// import { Radius } from "lucide-react";

const JoinUs: React.FC = () => {
  // State for toggles
  const [showManifesto, setShowManifesto] = useState(false);
  const [showFork, setShowFork] = useState(false);
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const [openMiniCard, setOpenMiniCard] = React.useState<string | null>(null);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [showCareersFull, setShowCareersFull] = useState(false);
  const [showHiringDetails, setShowHiringDetails] = useState(false);
  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };  

const [activeRle, setActiveRle] = useState(1);

const roles = [
  {
    id: 1,
    tab: "Growth",
    title: "Marketing, Growth, and Content Lead",
    subtitle: "Founding Growth Lead",
    about: "This role owns the story of Elinity in the world. This isn’t about ads (we are strongly against using ads for growth), nor growth hacks for their own sake. This is about story, culture, narrative, community, and momentum. You are the voice, the spark, and one of the primary architects of how Elinity enters public consciousness.This is earned growth. Creative growth. Human growth.",
    do: [
      "Architect and execute Elinity’s early growth stategy, starting with NYC and London, and expanding to major US and UK cities",
      "Help us get our first 50,000 passionate users who genuinely love the product.",
      "Build and own our content and storytelling engine, short-form and long-form",
      "Create narratives, campaigns, and series that make people feel something and act.",
      "Cultivate and nurture a founding community that carries Elinity’s ethos forward",
      "Run constant creative experiments: content formats, events, partnerships, referrals, guerrilla ideas, PR.",
    ],
    who: "A world-class storyteller with taste. High-agency, fast-moving, and obsessed with human connection.A strong feeler and a sharp thinker. Experienced in growth, content, or partnerships, but hungry to do it with meaning this time."
  },
  {
    id: 2,
    tab: "Psychology",
    title: "Growth and Flourishing / Psychology Lead",
    subtitle: "Head of Experiences, Path to CREO",
    about: "This role sits at the heart of Elinity’s soul. You shape how our product feels, how it supports people, and how it genuinely helps humans flourish. This is not marketing in the traditional sense. This is experience design, psychology, meaning, and human truth translated into product, language, and interaction. This role may evolve into Chief Relations and Experience Officer.",
    do: [
      "Design and refine the emotional and psychological experience of Elinity.",
      "Work closely with product, AI, and content teams to shape user journeys.",
      "Bring deep insight into human relationships, attachment, motivation, and flourishing.",
      "Influence product decisions through a human-first lens.",
      "Help define how Elinity supports growth, intimacy, reflection, and long-term relationships",
      "Shape how our AI communicates, guides, and supports users.",
    ],
    who: "Strong background in Psych or Neuroscience. Exceptional taste in UX and human flourishing.Strong background in psychology, human relationships, or consumer behavior.Deep passion for human flourishing.Comfortable operating at the intersection of emotion, design, and systems.Energized by responsibility and long-term impact."
  },
  {
    id: 3,
    tab: "AI Research",
    title: "Head of AI Research / AI Research Engineer",
    subtitle: "Frontier Intelligence",
    about: "This is where we explore new kinds of minds. We are not chasing scale for its own sake. We are exploring aligned-by-default, emotionally intelligent, neuromorphic approaches to intelligence that deeply understand humans.This role is about thinking, building, and questioning at the frontier.",
    do: [
      "Explore and develop new architectures for general and neuromorphic intelligence.",
      "Work on alignment, empathy, personality, and value embedding.",
      "Design not just AI behavior, but the structure of the AI mind itself.",
      "Collaborate closely with product and experience teams to embed these systems into Elinity.",
      "Push forward research in human-AI dynamics and alignment through practice."
    ],
    who: "Strong instincts for research, regardless of formal credentials.Background in AI, neuroscience, neuropsychology, or adjacent fields.Curious about minds, not just models.Comfortable questioning assumptions.Motivated by alignment and human flourishing, not benchmarks alone."
  },
  {
    id: 4,
    tab: "Engineering",
    title: "VP of Engineering / Senior SWE",
    subtitle: "AI-Native Builder",
    about: "This role is about building Elinity’s systems with speed, taste, and leverage. Much of the work will not be handwriting code line by line, but orchestrating AI agents, systems, and workflows to move an order of magnitude faster than traditional teams. \n \n This is 10x engineering, by design..",
    do: [
      "Architect and build Elinity’s core systems and infrastructure for v2.0 and beyond",
      "Lead engineering decisions with speed and clarity.",
      "Orchestrate agentic workflows and AI-native development pipelines",
      "Work closely with AI research and experience teams.",
      "Ship fast, iterate relentlessly, and maintain high standards."
    ],
    who: "Strong systems thinker.Comfortable with ambiguity and ownership.High agency, intrinsically motivated.Excellent taste in software and architecture.Excited by AI-augmented development rather than threatened by it."
  }
];

  // const toggleMiniCard = (id: string) => {
  //   setOpenMiniCard(openMiniCard === id ? null : id);
  // };

  // const toggleRole = (role: string) => {
  //   setActiveRole(activeRole === role ? null : role);
  // };

  return (
    <div className="joinus-page">
      {/* 1. Hero / An Invitation */}
      <br></br>
      <header className="hero container">
        <h1>Join the Elinity Mission</h1>

        <div>
      <a href="#orbit" className="final-cta-link primary-orbit">
        <span className="default-text">Join the Mission</span>
      </a>
        </div>
      </header>

      {/* 2 & 3. Mission & Startup Status */}
      <section style={{ padding: '80px 0', color: '#ffffff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
          
          {/* HEADLINE: Responsive scaling */}
          <h1 style={{ 
            fontSize: 'clamp(36px, 5vw, 64px)', 
            fontWeight: '800', 
            letterSpacing: '-0.04em', 
            lineHeight: '1.1', 
            marginBottom: '60px',
            background: 'linear-gradient(to right, #ffffff, #7759fd)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Less a company, More a vehicle.
          </h1>

          {/* RESPONSIVE FLEX CONTAINER */}
          <div className="flex-container" style={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            gap: '40px',
            alignItems: 'start'
          }}>
            
            {/* Inline Style for Mobile Stacking */}
            <style>{`
              .flex-container > div { flex: 1 1 300px; width: 100%; }
              @media (max-width: 768px) {
                .flex-container { flex-direction: column !important; }
              }
            `}</style>

            {/* LEFT COLUMN */}
            <div style={{ flex: 1 }}>
              <div style={{ 
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
              }}>
                <h4 style={{ 
                  color: '#7759fd', 
                  fontSize: '14px', 
                  fontWeight: '700', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.1em', 
                  marginBottom: '16px' 
                }}>
                  Mission
                </h4>
                <p style={{ fontSize: '18px', color: '#d1d1d1', margin: 0, lineHeight: '1.7' }}>
                  We are building Elinity to help people find their most resonant people, 
                  build extraordinary relationships, and design and live their very best lives. 
                  Lives that feel expansive rather than constrained. Lives where the highest, 
                  most meaningful connection is not a bonus, but the foundation.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div style={{ flex: 1.2 }}>
              <p style={{ 
                fontSize: '24px', 
                lineHeight: '1.4', 
                fontWeight: '500', 
                color: '#ffffff', 
                marginBottom: '32px' 
              }}>
                Elinity exists for a simple reason:
                to help people live lives filled with love, intimacy, meaning, joy, purpose, passion, excitement, and depth.
              </p>

              {/* COLLAPSIBLE MANIFESTO ESSAY */}
              <div style={{ marginTop: '20px' }}>
                <button 
                  style={{ 
                    background: 'transparent',
                    border: '1px solid rgba(119, 89, 253, 0.4)',
                    color: '#ffffff',
                    padding: '12px 24px',
                    borderRadius: '100px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '600',
                    width: '100%', // Full width for mobile tap-ability
                    maxWidth: '320px'
                  }} 
                  onClick={() => setShowManifesto(!showManifesto)}
                >
                  {showManifesto ? "− Hide Full Manifesto" : "+ Read Why We Are Building Elinity"}
                </button>
                
                <div style={{ 
                  display: showManifesto ? 'block' : 'none', 
                  marginTop: '32px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingTop: '32px'
                }}>
                  <div style={{ color: '#b0b0b0', fontSize: '17px', lineHeight: '1.8' }}>
                    <h3 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '24px' }}>The Foundation of the Vehicle</h3>
                    
                    <p style={{ marginBottom: '20px' }}>
                      Elinity is not a mere startup. We genuinely do not think of it as one. 
                      It is a vehicle, a conduit to an ideal, to a promise. An ideal that can be brought 
                      to life over a long arc.
                    </p>
                    
                    <p style={{ marginBottom: '20px' }}>
                      This is a 30, 50, maybe 100-year project. A calling in the truest sense. 
                      The confluence of everything I have lived, studied, felt, built, questioned, 
                      loved, and struggled with, distilled into one direction. We could not have 
                      picked a more meaningful or more urgent problem space if we tried.
                    </p>

                    <p style={{ marginBottom: '20px' }}>
                      Relationships shape everything. Our happiness. Our mental health. 
                      Our sense of self. Our willingness to hope. Our desire to build families. 
                      Our ability to flourish. And yet, they are the most under-designed, 
                      under-supported part of modern life. Elinity exists to change that.
                    </p>

                    <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.1)', margin: '30px 0' }}></div>

                    <p style={{ marginBottom: '20px' }}>
                      Some of the things I say about Elinity would probably get me politely 
                      smiled at and quietly dismissed in certain conversations and investor meetings. 
                      Talking about relationship potential actualization. About meaning. 
                      About love as a serious design constraint.
                    </p>
                    
                    <p style={{ marginBottom: '30px' }}>
                      And it has. And that is fine. This mission is not meant to fit neatly into 
                      existing boxes. If it did, it would not be worth doing.
                    </p>

                    <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.1)', margin: '30px 0' }}></div>

                    <h3 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '24px' }}>Connection as Civilizational Infrastructure</h3>
                    <p style={{ marginBottom: '20px' }}>
                      We are building Elinity because the current trajectory of human connection 
                      is failing, quietly, systematically, and at scale. Loneliness is only the 
                      sharpest edge of a broader failure. The deeper issue is relationship quality.
                    </p>
                    <p style={{ marginBottom: '30px' }}>
                      Relationships are not one domain among many. They are upstream of almost 
                      everything else. The single most reliable predictor of long-term wellbeing 
                      is the quality of one’s close relationships.
                    </p>

                    <div style={{ 
                      padding: '24px',
                      borderRadius: '16px',
                      backgroundImage: 'linear-gradient(to right, #4b0082, #800080)', // Original indigo/purple gradient
                      border: '1px solid rgba(119, 89, 253, 0.3)',
                      fontSize: '18px',
                      color: '#ffffff'
                    }}>
                      <strong style={{ color: '#7759fd' }}>The Elinity Trinity:</strong> Social connection, Relationship building, and Self-awareness/growth.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            
        <section style={{ padding: '120px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', color: '#ffffff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
            
            {/* 60PX HEADLINE */}
            <h2 style={{ 
              fontSize: '60px', 
              fontWeight: '900', 
              letterSpacing: '-0.04em', 
              lineHeight: '1', 
              marginBottom: '80px',
              background: 'linear-gradient(to bottom, #ffffff 0%, #a1a1a1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              What We Are Building
            </h2>

            <div style={{ display: 'flex', flexDirection: window.innerWidth < 992 ? 'column' : 'row', gap: '60px' }}>
              
              {/* LEFT: CONCRETE GOALS (The Technical Core) */}
              <div style={{ flex: '1.2' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                  {[
                    { title: "Matching", desc: "The world’s best people-matching platform." },
                    { title: "Relationships", desc: "The world’s best relationship-building platform." },
                    { title: "Aligned AI", desc: "Deeply aligned, emotionally intelligent AIs that serve people over years and decades." },
                    { title: "Companions", desc: "Personally aligned AI companions that help people design and live their best lives." },
                    { title: "Infrastructure", desc: "Foundational infrastructure for connection, collaboration, purpose, and relationship flourishing in a post-AGI world." }
                  ].map((item, index) => (
                    <div key={index} style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
                      <span style={{ 
                        fontSize: '14px', 
                        fontWeight: '800', 
                        color: '#7759fd', 
                        fontFamily: 'monospace',
                        marginTop: '6px',
                        padding: '4px 8px',
                        background: 'rgba(119, 89, 253, 0.1)',
                        borderRadius: '4px'
                      }}>
                        0{index + 1}
                      </span>
                      <div>
                        <h4 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>{item.title}</h4>
                        <p style={{ fontSize: '17px', color: '#a1a1a1', lineHeight: '1.6', margin: 0 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: NORTH STARS (The Philosophy Card) */}
              <div style={{ flex: '1', width: '100%' }}>
              <div style={{ 
                position: 'relative',
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '32px',
                padding: 'clamp(24px, 5vw, 48px)', // Responsive padding
                height: 'fit-content'
              }}>
                <h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '24px', color: '#ffffff' }}>North Stars</h3>
                
                {/* Narrative Intro */}
                <p style={{ fontSize: '16px', color: '#d1d1d1', lineHeight: '1.6', marginBottom: '32px' }}>
                  We are acutely aware that we are not building for everyone. Not yet. Not ever, perhaps. 
                  Even at a massive scale, our users may number in the tens or hundreds of millions, not billions. 
                  That is okay.
                </p>

                {/* Bullet Points */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0' }}>
                  {[
                    "We are building for depth, not dopamine extraction or riding on cultural trends.",
                    "Building for where the world could be, not just where it is."
                  ].map((bullet, i) => (
                    <li key={i} style={{ 
                      marginBottom: '20px', 
                      fontSize: '16px', 
                      lineHeight: '1.5', 
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'flex-start'
                    }}>
                      <span style={{ color: '#7759fd', marginRight: '16px', fontSize: '20px', lineHeight: '1' }}>•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Audacious Goal Section */}
                <div style={{ 
                  marginTop: '40px', 
                  paddingTop: '40px', 
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)' 
                }}>
                  <p style={{ 
                    fontSize: '12px', 
                    textTransform: 'uppercase', 
                    letterSpacing: '2px', 
                    color: '#7759fd', 
                    fontWeight: 'bold', 
                    marginBottom: '16px' 
                  }}>
                    Audacious Goal
                  </p>
                  
                  <p style={{ fontSize: '16px', color: '#d1d1d1', lineHeight: '1.6', marginBottom: '20px' }}>
                    That said, one of our long-term north stars is bold:
                  </p>

                  <p style={{ 
                    fontSize: 'clamp(24px, 5vw, 30px)', 
                    fontWeight: '900', 
                    lineHeight: '1.1', 
                    marginBottom: '12px',
                    color: '#ffffff' 
                  }}>
                    1 Billion <br/>Users Served
                  </p>
                  
                  <p style={{ fontSize: '14px', color: '#a1a1a1', margin: 0, lineHeight: '1.5' }}>
                    By 2033 — not through shallow engagement, but through shifting culture and creating genuine counterfactual value.
                  </p>
                </div>
              </div>
            </div>

            </div>
          </div>
        </section>

      {/* 4 & 5. Meta-Problem & Founder Note */}
      <section style={{ padding: '120px 0', color: '#ffffff', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
          
          {/* FLOATING HEADER BLOCK */}
          <div style={{ marginBottom: '60px', padding: '0 4px' }}>
            <div style={{ position: 'relative' }}>
              <h2 style={{ 
                fontSize: 'clamp(38px, 9vw, 72px)', 
                fontWeight: '800', 
                letterSpacing: '-0.05em',
                lineHeight: '1.05',
                marginBottom: '24px',
                color: '#ffffff'
              }}>
                A Meta Company for a <br/>
                <span style={{ 
                  background: 'linear-gradient(to right, #7759fd, #b0a2f1)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent' 
                }}>
                  Meta Moment
                </span>
              </h2>
              
                <p style={{ 
                  fontSize: 'clamp(18px, 5vw, 24px)', 
                  color: '#d1d1d1', 
                  maxWidth: '600px', 
                  fontWeight: '300',
                  lineHeight: '1.5'
                }}>
                  We are building Elinity at a strange and pivotal moment in history.
                </p>
              </div>
            </div>

              {/* STACKED NARRATIVE CARDS */}
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '40px' }}>
                
                {/* Card 1: The Context */}
                <div style={{ 
                  alignSelf: 'flex-start',
                  maxWidth: '700px',
                  padding: '40px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '32px',
                  backdropFilter: 'blur(10px)'
                }}>
                  <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#e0e0e0', margin: 0 }}>
                    AI is accelerating fast. Culture is changing. Identity is shifting. Loneliness is rising. 
                    Meaning is thinning. Work is transforming. Many of the old structures are cracking, 
                    and very few new ones are being built with care. 
                    <strong style={{ color: '#ffffff', display: 'block', marginTop: '16px' }}>
                      Elinity sits at the intersection of all of this.
                    </strong>
                  </p>
                </div>

                {/* Card 2: The Vector (Staggered Right) */}
                <div style={{ 
                  alignSelf: 'flex-end',
                  maxWidth: '650px',
                  padding: '40px',
                  background: 'rgba(119, 89, 253, 0.05)',
                  border: '1px solid rgba(119, 89, 253, 0.2)',
                  borderRadius: '32px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
                }}>
                  <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#ffffff', margin: 0 }}>
                    We are building technology, yes. But we use technology as our <strong>vector to shape culture.</strong> 
                    We are asking what human connection can be, what it should look like in a post-AGI world. 
                    We are designing for the world not just as it is today, but as it may be in 2029, 2035, 2075.
                  </p>
                </div>

                {/* THE FOUNDATION: Wedge & Horizon */}
                <div style={{ marginTop: '60px' }}>
                  <p style={{ textAlign: 'center', fontSize: '20px', color: '#7759fd', fontWeight: 'bold', marginBottom: '32px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    Strategic Architecture
                  </p>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr', 
                    gap: '1px', 
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div style={{ background: '#08011a', padding: '48px 40px' }}>
                      <h4 style={{ fontSize: '28px', marginBottom: '16px', color: '#ffffff' }}>The Wedge</h4>
                      <p style={{ color: '#a1a1a1', lineHeight: '1.6', fontSize: '16px' }}>
                        Help people find their best-fit people and build incredible relationships, 
                        using deeply personalized, emotionally intelligent AI.
                      </p>
                    </div>
                    <div style={{ background: '#0c0224', padding: '48px 40px' }}>
                      <h4 style={{ fontSize: '28px', marginBottom: '16px', color: '#7759fd' }}>The Horizon</h4>
                      <p style={{ color: '#a1a1a1', lineHeight: '1.6', fontSize: '16px' }}>
                        Become foundational infrastructure for human connection, meaning, 
                        and flourishing in the coming era.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
      </section>  
      {/* 7. Core Values */}
    <section className="manifesto-section container">
      <span 
        className="label" 
        style={{
          marginBottom: '100px', 
          fontSize: '50px', 
          background: 'linear-gradient(to right, #e0dded, #b066fe)', // Your primary purple to a vibrant accent
          WebkitBackgroundClip: 'text', // Clips background to text (Chrome/Safari)
          WebkitTextFillColor: 'transparent', // Makes original text transparent to show gradient
          backgroundClip: 'text', // Standard property
          display: 'inline-block' // Required for margin and clipping to work correctly
        }}
      >
        Our Values...
      </span>
              <div className="feature-grid values-hover-grid">
                

                {/* Value 1 */}
                <div className="value-card">
                  <div className="card-reveal">
                    <h3>Love & Duty</h3>
                    <p>
                      This is a love-centered mission, unironically. We believe deeply in humanity, 
                      not as an abstraction, but as individual people with inner worlds, longings, 
                      fears, and potential. From that love comes duty. A sense of responsibility 
                      to serve, to care, and to build something that genuinely improves lives.
                    </p>
                  </div>
                </div>

                {/* Value 2 */}
                <div className="value-card">
                  <div className="card-reveal">
                    <h3>Having Fun</h3>
                    <p>
                      The work we do is emotionally intense. The odds are stacked against us. 
                      The problems are hard. Which is exactly why this has to be an adventure. 
                      We want joy, humor, curiosity, and play woven into the work. Meaning 
                      without joy, with laughter, can only last so long. We are here for the long haul.
                    </p>
                  </div>
                </div>

                {/* Value 3 */}
                <div className="value-card">
                  <div className="card-reveal">
                    <h3>Human Actualization</h3>
                    <p>
                      We believe humans can live far richer, deeper, more meaningful lives than 
                      most currently do. Relationships, minds, inner worlds, communities, and 
                      cultures can all be elevated. AI, uniquely, can help make the hard work 
                      of growth feel engaging, supportive, and even fun.
                    </p>
                  </div>
                </div>

                {/* Value 4 */}
                <div className="value-card">
                  <div className="card-reveal">
                    <h3>Longtermism</h3>
                    <p>
                      We take the long view. Twenty-five years. One hundred years. Beyond 
                      our own lifetimes. We care about the world we are shaping for future 
                      generations, and we act accordingly.
                    </p>
                  </div>
                </div>

                {/* Value 5 */}
                <div className="value-card">
                  <div className="card-reveal">
                    <h3>Intensity</h3>
                    <p>
                      This is a hard mission, hard as it gets. Entropy is real. To have 
                      any shot at winning, we must be par excellent. Focused. Fast. 
                      Relentless in pursuit of quality, truth, and the very best of us, 
                      of humans. Across product, research, engineering, storytelling.
                    </p>
                  </div>
                </div>

                {/* Value 6 */}
                <div className="value-card">
                  <div className="card-reveal">
                    <h3>Meaning & Beauty</h3>
                    <p>
                      At a meta level, we believe one of humanity’s core directives is 
                      to create and spread meaning and beauty. Through what we build. 
                      How we treat each other. The choices we make. Elinity is an 
                      expression of that belief.
                    </p>
                  </div>
                </div>

              </div>
      </section>
      {/* 12, 13, 14. Talent & Philosophy */}
          <section style={{ padding: '60px 0', color: '#ffffff' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
              
              {/* 60PX HEADLINE (RESPONSIVE) */}
              <h2 style={{ 
                fontSize: 'clamp(38px, 8vw, 60px)', 
                fontWeight: '800', 
                letterSpacing: '-0.04em', 
                lineHeight: '1', 
                marginBottom: '40px',
                background: 'linear-gradient(to right, #ffffff, #7759fd)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                The People We Are Looking For
              </h2>

              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '48px' 
              }}>
                
                {/* MAIN CONTENT AREA */}
                <div style={{ flex: '1' }}>
                  <p style={{ marginBottom: '1.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '18px', lineHeight: '1.6' }}>
                    This page exists for search engines too, so yes, this is technically our careers page. 
                    But we do not think in terms of careers. <strong>We think in terms of callings.</strong>
                  </p>

                  {/* COLLAPSIBLE PHILOSOPHY */}
                  <div style={{ marginBottom: '2rem' }}>
                    {showCareersFull && (
                      <div style={{ 
                        marginBottom: '1.5rem', 
                        borderLeft: '2px solid #6366f1', 
                        padding: '1.5rem', 
                        background: 'linear-gradient(to right, rgba(168, 85, 247, 0.15), transparent)',
                        borderRadius: '0 12px 12px 0'
                      }}>
                        <div style={{ fontSize: '16px', lineHeight: '1.7', color: '#d1d1d1' }}>
                          <p>
                            This is not for those looking to climb ladders. It is for those who feel pulled. 
                            People for whom this mission resonates at a gut level. People who believe that 
                            helping humans find each other, love better, and live more meaningful lives is 
                            one of the most important problems of our time.
                          </p>
                          <p style={{ marginTop: '1rem' }}>
                            We are not AI evangelists or AI-pilled. <strong>We are human flourishing–pilled.</strong>
                          </p>
                          <p style={{ marginTop: '1rem' }}>
                            We believe AI, if designed with care and humility, has unprecedented potential 
                            to help humanity thrive. We are also deeply aware of the risks. That tension 
                            lives at the heart of our work.
                          </p>
                          <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#ffffff' }}>
                            We are product-focused and research-driven. Mission-driven to our core. 
                            Obsessed with taste, depth, and alignment.
                          </p>
                        </div>
                      </div>
                    )}
                    
                    <button 
                      onClick={() => setShowCareersFull(!showCareersFull)}
                      style={{ 
                        background: 'transparent', 
                        border: '1px solid rgba(119, 89, 253, 0.4)', 
                        color: '#ffffff', 
                        padding: '12px 24px', 
                        borderRadius: '100px', 
                        fontSize: '14px',
                        cursor: 'pointer',
                        width: window.innerWidth < 768 ? '100%' : 'auto'
                      }}
                    >
                      {showCareersFull ? "− Hide Philosophy" : "+ Read our thesis on Careers vs. Callings"}
                    </button>
                  </div>
                </div>

                {/* POST-AGI CARD (STALED FOR MOBILE) */}
                <div style={{ 
                  background: 'rgba(119, 89, 253, 0.05)', 
                  backdropFilter: 'blur(20px)', 
                  border: '1px solid rgba(119, 89, 253, 0.2)', 
                  borderRadius: '32px', 
                  padding: '40px'
                }}>
                  {/* <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>Post-Labor Infrastructure</h3> */}
                  
                  <p style={{ fontSize: '17px', lineHeight: '1.6', marginBottom: '16px' }}>
                    We are building a <strong>Post-AGI Company</strong>. One that imagines a world where work transcends 
                    pure economic necessity and moves closer to <strong>ikigai</strong>: passion, service, creativity, 
                    purpose, and yes, sustainable prosperity.
                  </p>
                  <p style={{ fontSize: '15px', opacity: 0.8, lineHeight: '1.6', margin: 0 }}>
                    As we grow, we want to hire humans, not replace meaning with agents. 
                    Agents will have their place. But meaningful work should belong to people.
                  </p>
                </div>

              </div>
            </div>
          </section>

              <section className="manifesto-section container team-section" style={{ padding: "5rem 0" }}>
                <div className="section-header"> 

                  {/* <span className="tiny-label">The First Four</span> */}
                  <h1 className="Label" style={{
                        background: 'linear-gradient(to right, #e0dded, #b066fe)', // Your primary purple to a vibrant accent
          WebkitBackgroundClip: 'text', // Clips background to text (Chrome/Safari)
          WebkitTextFillColor: 'transparent', // Makes original text transparent to show gradient
          backgroundClip: 'text', // Standard property
          display: 'inline-block' // Required for margin and clipping to work correctly

                  }}>The Team We Are Building Next</h1>
                  <center><p style={{ color: "rgba(255,255,255,0.7)", maxWidth: "600px", marginTop: "1rem" }}>
                    For the next twelve months, we are ultra-focused. We will only be hiring across 
                    four tightly intertwined domains:
                  </p></center>
                </div>

                {/* DOMAIN GRID */}
                <div className="domain-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '3rem' }}>
                  <div className="domain-card">
                    <span className="domain-num">01</span>
                    <h4>Storytelling, growth, partnerships, and people</h4>
                  </div>
                  <div className="domain-card">
                    <span className="domain-num">02</span>
                    <h4>Human experience, psychology, flourishing, and design</h4>
                  </div>
                  <div className="domain-card">
                    <span className="domain-num">03</span>
                    <h4>AI research and intelligence design</h4>
                  </div>
                  <div className="domain-card">
                    <span className="domain-num">04</span>
                    <h4>Software engineering and systems building</h4>
                  </div>
                </div>

                {/* COLLAPSIBLE HIRING DETAILS */}
                <center>
                <div className="hiring-collapse-wrapper" style={{ marginTop: '3rem' }}>
                  <div className={`collapse-content ${showHiringDetails ? "show" : ""}`}>
                    <div className="hiring-deep-dive">
                      <div className="roles-list-box" style={{ background: 'rgba(168, 85, 247, 0.05)', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
                        <h5 style={{ color: '#a855f7', marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.8rem' }}>Our first core hires include:</h5>
                        <ul className="clean-list" style={{ listStyle: 'none', padding: 0 }}>
                          <li style={{ marginBottom: '0.8rem' }}>● Marketing, Growth, and Content Lead</li>
                          <li style={{ marginBottom: '0.8rem' }}>● Growth and Flourishing or Psychology Lead</li>
                          <li style={{ marginBottom: '0.8rem' }}>● VP of Engineering</li>
                          <li style={{ marginBottom: '0.8rem' }}>● Head of AI Research or AI Research Engineer</li>
                        </ul>
                      </div>

                      <div className="agency-manifesto-box">
                        <p style={{ fontSize: '1.1rem', color: '#fff' }}>
                          We have set aside a <strong>generous equity pool</strong> for our first ten hires. 
                          We want true partners, not just employees.
                        </p>
                        <blockquote style={{ borderLeft: '2px solid #a855f7', paddingLeft: '1.5rem', margin: '2rem 0', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', background: 'linear-gradient(to right, rgba(168, 85, 247, 0.2), transparent)' }}>
                          "We do not worship credentials. We worship agency, taste, learning velocity, and depth. 
                          You do not need a PhD to do serious research here. The age of credentialism is ending. 
                          The age of agency has begun."
                        </blockquote>
                        <p style={{ opacity: 0.8, lineHeight: '1.6' }}>
                          Small, aligned teams can now do what once required institutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  

                  <button 
                    className="btn-text-toggle" 
                    onClick={() => setShowHiringDetails(!showHiringDetails)}
                  >
                    {showHiringDetails ? "− Hide Hiring Details" : "+ View Specific Roles & Agency Manifesto"}
                  </button>
                </div>
                </center>
              </section>

            <section className="manifesto-section container">
              <span className="label" style={{fontSize: '55px',
                    background: 'linear-gradient(to right, #e0dded, #b066fe)', // Your primary purple to a vibrant accent
        WebkitBackgroundClip: 'text', // Clips background to text (Chrome/Safari)
        WebkitTextFillColor: 'transparent', // Makes original text transparent to show gradient
        backgroundClip: 'text', // Standard property
        display: 'inline-block' // Required for margin and clipping to work correctly

              }}>The First Four</span>
                  {/* <h  2 style={{ marginBottom: '1rem' }}>The First Four</h2> */}
                <p style={{ opacity: 0.7, maxWidth: '800px', marginBottom: '3rem' }}>
                  For the next twelve months, we are being intentionally narrow. These are not silos; they are four intertwined domains that together form the engine of Elinity.
                </p>

              <div className="roles-interface">
                {/* Tabs Navigation */}
                <div className="roles-tabs">
                  {roles.map((role) => (
                    <button 
                      key={role.id}
                      className={`tab-btn ${activeRle === role.id ? 'active' : ''}`}
                      onClick={() => setActiveRle(role.id)}
                    >
                      <span className="tab-num">0{role.id}</span>
                      <span className="tab-label">{role.subtitle.split(',')[0]}</span>
                    </button>
                  ))}
                </div>

                {/* Content Display */}
                {roles.map((role) => role.id === activeRle && (
                  <div key={role.id} className="role-content-box animate-in">
                    <div className="role-header">
                      <span className="role-category">{role.subtitle}</span>
                      <h3>{role.title}</h3>
                    </div>
                    
                    <div className="role-body-grid">
                      <div className="role-main-col">
                        <h4>What this role is about</h4>
                        <p>{role.about}</p>
                        
                        <h4 style={{ marginTop: '2rem' }}>Who you are</h4>
                        <p>{role.who}</p>
                      </div>
                      
                      <div className="role-side-col">
                        <h4>What you'll do</h4>
                        <ul className="tasks-list">
                          {role.do.map((task, idx) => (
                            <li key={idx}>● {task}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            <div className="role-footer-note" style={{ marginTop: '4rem' }}>
              <div 
                style={{
                  background: 'linear-gradient(135deg, rgba(127, 0, 255, 0.2), rgba(225, 0, 255, 0.1))',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  padding: '2.5rem',
                  borderRadius: '12px',
                  borderBottomRightRadius: '40px', // Matches your signature card style
                  backdropFilter: 'blur(10px)',
                  maxWidth: '800px',
                  margin: '0 auto'
                }}
              >
                <h3 style={{ 
                  fontSize: '1.2rem', 
                  color: '#fff', 
                  fontFamily: 'JetBrains Mono, monospace', 
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '2px'
                }}>
                  A Quick Note on These Roles
                </h3>
                
                <p style={{ 
                  color: '#e5e7eb', 
                  fontSize: '1.1rem', 
                  lineHeight: '1.8', 
                  marginBottom: '1.5rem' 
                }}>
                  We do not believe small teams are a limitation. AI can compress years of progress 
                  into months for people with strong learning curves. We believe small, 
                  deeply aligned teams can build things once thought impossible, including new 
                  forms of intelligence and new social infrastructure.
                </p>

                <p style={{ 
                  color: '#fff', 
                  fontSize: '1.1rem', 
                  lineHeight: '1.8', 
                  fontWeight: '500',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingTop: '1.5rem'
                }}>
                  If one of these roles feels less like a job description and more like a mirror, 
                  that is intentional. If this resonates, we can’t wait to hear from you 
                  and turn our next chapter.
                </p>
              </div>
            </div>
            </section>

          {/* NEW SECTION 2: HOW TO ENTER (The Application) */}
          <section className="manifesto-section container final-word-section">
            <div className="gateway-card final-word-card">
              <span className="gateway-subtitle" style={{color:'purple'}}>A Final Word</span>
              
              <div className="final-word-content">
                <p className="final-headline">
                  Elinity is an attempt to build a new social and emotional infrastructure for humanity.
                </p>

                <div className="calling-points">
                  <p>If you have ever felt that modern life is missing something essential.</p>
                  <p>If you believe relationships deserve better tools and more intentionality.</p>
                  <p>If you believe AI can help us become more human, not less.</p>
                  <p>If you want your work to matter deeply, not just economically.</p>
                </div>

                <div className="calling-conclusion">
                  <center><p className="pulse-text">Then this might be your place.</p>
                  
                  <p className="promise-text">
                    We are not promising certainty. We are promising <strong>meaning, intensity, growth</strong>, and the chance to work on something that genuinely matters.
                  </p>
                  
                  <p className="calling-invite">
                    If this feels like a calling rather than a job, we would love to hear from you.
                  </p></center>
                </div>

                <h3 className="build-statement">
                  Let’s build something that helps the world connect more deeply, love more intentionally, play with more passion, and build with more alignment.
                </h3>
              </div>
            </div>
          </section>

          {/* 23. Final Word */}
          <footer className="final-word " >
            <div className="container">
              <span className="label" style={{ fontSize: "30px", color:'#F8F9FA' }}>The Destination</span>
              <br />
              <h2 style={{color:'#F8F9FA'}}>An emotional operating system for humanity.</h2>
              
              {/* Wrap in a container for the glow/lightning effect */}
              <a href="#" className="lightning-wrapper">
                <h1 className="brand-title">
                  <img 
                    src={elinityLogo} 
                    alt="Elinity Logo" 
                    className="brand-logo-img" 
                  />
                  Elinity
                </h1>
              </a>
              
              <p className="label" style={{ marginTop: '2rem', border: 'none', fontSize: '14px' }}>
                Find your people. Build your tribe. Flourish together.
              </p>
            </div>
          </footer>
    </div>
  );
};

export default JoinUs;