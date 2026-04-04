import React, { useState, useEffect } from 'react';

const ElinityManifesto = ({ onClose }) => {
  // Local responsive check for standalone usage or resizing
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      color: "#fff",
      /* Adjusted padding for mobile vs laptop */
      padding: isMobile ? "40px 10px" : "60px 40px",
      fontFamily: "'Inter', sans-serif",
      background: "transparent",
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        
        {/* Section 1: Definition */}
        <section style={{ marginBottom: isMobile ? "40px" : "60px" }}>
          <h2 style={{
            fontSize: isMobile ? "20px" : "28px",
            letterSpacing: "1px",
            color: "rgba(255, 255, 255, 0.4)",
            marginBottom: "24px",
            fontWeight: 600
          }}>
            what is elinity
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <p style={{
              fontSize: isMobile ? "24px" : "32px",
              fontWeight: 300,
              lineHeight: 1.3,
              background: "linear-gradient(to right, #fff, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              elinity exists for people who believe connection is the foundation of a good life.
            </p>

            <p style={{
              fontSize: isMobile ? "17px" : "20px",
              color: "rgba(255, 255, 255, 0.6)",
              fontWeight: 300,
              lineHeight: 1.6
            }}>
              it’s an emotionally intelligent ai platform that helps you meet deeply aligned people and build meaningful relationships over time.
            </p>
          </div>
        </section>

        {/* Section 2: Core Explanation */}
        <section style={{ marginBottom: isMobile ? "40px" : "60px", display: "flex", flexDirection: "column", gap: "32px" }}>
          <p style={{
            fontSize: isMobile ? "16px" : "18px",
            lineHeight: 1.7,
            color: "rgba(255, 255, 255, 0.8)"
          }}>
            whether you’re looking for love, friendship, collaborators, or simply richer human connection, elinity brings everything into one coherent space. it understands who you are, what you’re seeking, and how you connect, then introduces you to people who feel like a natural yes.
          </p>

          <p style={{
            fontSize: isMobile ? "16px" : "18px",
            fontWeight: 500,
            borderLeft: "2px solid #7c3aed",
            paddingLeft: isMobile ? "16px" : "24px",
            paddingTop: "4px",
            paddingBottom: "4px",
            color: "#a78bfa"
          }}>
            this isn’t about more matches. it’s about better ones, and the tools to turn connection into something real.
          </p>
        </section>

        {/* Section 3: What it helps you do */}
        <section style={{ marginBottom: isMobile ? "40px" : "60px" }}>
          <h2 style={{
            fontSize: isMobile ? "20px" : "28px",
            letterSpacing: "0.5px",
            color: "rgba(255, 255, 255, 0.4)",
            marginBottom: "32px",
            fontWeight: 500
          }}>
            what elinity actually helps you do.
          </h2>

          <ul style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "12px"
          }}>
            {[
              "elinity is about people, your people.",
              "it’s about better matches, not more.",
              "it’s about better conversations, not more.",
              "it’s about more signal, not noise."
            ].map((item, index) => (
              <li key={index} style={{
                fontSize: isMobile ? "18px" : "24px",
                fontWeight: 300,
                fontStyle: "italic",
                paddingBottom: "16px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                color: "rgba(255, 255, 255, 0.9)"
              }}>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Section 4: Promise */}
        <section style={{
          background: "rgba(255, 255, 255, 0.03)",
          padding: isMobile ? "24px" : "40px",
          borderRadius: "32px",
          border: "1px solid rgba(255, 255, 255, 0.08)"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            <p style={{ fontSize: isMobile ? "17px" : "20px", lineHeight: 1.5, color: "#fff" }}>
              we help you find people you can build incredible relationships with
            </p>

            <div style={{
              display: "flex",
              flexWrap: "wrap",
              columnGap: "12px",
              rowGap: "4px",
              color: "#a78bfa",
              fontWeight: 600,
              fontSize: isMobile ? "14px" : "16px"
            }}>
              {[
                "for love,",
                "friendship,",
                "leisure,",
                "collaboration,",
                "creativity,",
                "and life"
              ].map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>

            <p style={{
              fontSize: isMobile ? "17px" : "20px",
              lineHeight: 1.5,
              paddingTop: "20px",
              borderTop: "1px solid rgba(255, 255, 255, 0.05)",
              color: "rgba(255, 255, 255, 0.7)"
            }}>
              and then we help you actually nurture those relationships over time
            </p>
          </div>
        </section>

        {/* Bottom Close Button */}
        <div style={{ marginTop: "60px", textAlign: "center" }}>
          <button 
            onClick={onClose}
            style={{
              background: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "rgba(255, 255, 255, 0.5)",
              padding: "12px 32px",
              borderRadius: "100px",
              cursor: "pointer",
              fontSize: "14px",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#fff";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
              e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            close manifesto
          </button>
        </div>

      </div>
    </div>
  );
};

export default ElinityManifesto;