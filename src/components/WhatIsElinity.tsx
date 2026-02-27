import React, { useState, useEffect, useRef } from 'react';

export default function ElinityLandingPage() {
  const [hover, setHover] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef(null);

  // SCROLL TRIGGER ANIMATION
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCard(true);
        }
      },
      { threshold: 0.35 } // trigger when 35% visible
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "120vh", // gives scroll space
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 20px",
        overflow: "hidden",
        textAlign: "center",
        background: "radial-gradient(circle at 20% 20%, #12002b, #050010 60%)",
        fontFamily: "Inter, sans-serif"
      }}
    >
      {/* background glow */}
      <div style={{
        position: "absolute",
        top: "-120px",
        left: "-120px",
        width: "420px",
        height: "420px",
        background: "#7c3aed",
        opacity: 0.25,
        filter: "blur(120px)",
        borderRadius: "50%"
      }} />

      <div style={{
        position: "absolute",
        bottom: "-120px",
        right: "-120px",
        width: "420px",
        height: "420px",
        background: "#4f46e5",
        opacity: 0.25,
        filter: "blur(120px)",
        borderRadius: "50%"
      }} />

      {/* glow ring */}
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none"
      }}>
        <div style={{
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          border: "1px solid rgba(168,85,247,0.15)",
          filter: "blur(40px)",
          opacity: 0.4
        }} />
      </div>

      {/* CARD */}
      <div
        ref={cardRef}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "900px",
          width: "100%",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          background: hover ? "rgba(255,255,255,0.09)" : "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "32px",
          padding: "60px 50px",
          transition: "all 1s cubic-bezier(.23,1,.32,1)",
          transform: showCard
                    ? hover
                      ? "translateY(-8px)"   // only move up
                      : "translateY(0px)"
                    : "perspective(1400px) rotateY(-30deg) translateX(-350px)",
          opacity: showCard ? 1 : 0,
          boxShadow: hover
            ? "0 40px 140px rgba(139,92,246,0.55)"
            : "0 0 80px rgba(139,92,246,0.25)",
          overflow: "hidden"
        }}
      >
        {/* shine sweep FIXED */}
        <div style={{
          position: "absolute",
          top: 0,
          left: hover ? "130%" : "-120%",
          width: "25%",
          height: "100%",
          background: "linear-gradient(120deg, transparent, rgba(168,85,247,0.18), transparent)",
          transform: "skewX(-20deg)",
          transition: "all 2.5s ease",
          pointerEvents: "none",
          zIndex: 0   // behind text
        }} />

        {/* Title */}
        <h1 style={{
          fontSize: "clamp(32px, 5vw, 56px)",
          fontWeight: 600,
          marginBottom: "30px",
          background: "linear-gradient(to right,#e9d5ff,#a5b4fc,#c4b5fd)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.5px",
          textShadow: hover
            ? "0 0 12px rgba(168,85,247,0.45)"
            : "0 0 6px rgba(168,85,247,0.25)",
          transition: "all .4s"
        }}>
          what is elinity
        </h1>

        {/* Paragraph */}
        <p style={{
          fontSize: "15px",
          lineHeight: "1.7",
          color: "rgba(255,255,255,0.85)",
          marginBottom: "40px"
        }}>
        elinity exists for people who believe connection is the foundation of a good life.
        it’s an emotionally intelligent ai platform that helps you meet deeply aligned people and build meaningful relationships over time.<br/><br/>
        whether you’re looking for love, friendship, collaborators, or simply richer human connection, elinity brings everything into one coherent space. it understands who you are, what you’re seeking, and how you connect, then introduces you to people who feel like a natural yes.<br/><br/>  
        this isn’t about more matches. it’s about better ones, and the tools to turn connection into something real.
        </p>

        {/* divider */}
        <div style={{
          height: "1px",
          width: "100%",
          background: "linear-gradient(to right, transparent, rgba(168,85,247,0.5), transparent)",
          marginBottom: "40px"
        }} />

        {/* Section */}
        <h2 style={{
          fontSize: "clamp(22px,4vw,40px)",
          fontWeight: 700,
          color: "white",
          marginBottom: "20px"
        }}>
          what elinity actually helps you do.
        </h2>

        <p style={{
          fontSize: "18px",
          lineHeight: "1.7",
          color: "#cbd5e1"
        }}>
          elinity is about <span style={{color:"#fff",fontWeight:500}}>people your people.</span><br/>
          It’s about <span style={{color:"#fff"}}> better matches</span>, not more. <br/>
          it’s about <span style={{color:"#fff"}}> better conversations</span>, not more. <br/>
          It’s about <span style={{color:"#60a5fa"}}> more signal</span>, not noise.
        </p>

        {/* bottom text */}
        <p style={{
          fontSize: "15px",
          lineHeight: "1.7",
          color: "rgba(255,255,255,0.85)",
          marginTop: "40px"
        }}>
         we help you find people you can build incredible relationships with
         for love, friendship, leisure, collaboration, creativity, and life
         and then we help you actually nurture those relationships over time
        </p>

      </div>
    </div>
  );
}