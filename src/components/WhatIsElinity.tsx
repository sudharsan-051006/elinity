import { tr } from "framer-motion/m";
import MoreElinity from "./morecontent";
import React, { useState, useEffect, useRef } from "react";

export default function ElinityLandingPage() {
  const [hover, setHover] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanding, setIsExpanding] = useState(false); // ✅ Added for transition
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const cardRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll lock for Modal
  useEffect(() => {
    if (isModalOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [isModalOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCard(true);
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Premium Transition Trigger
  const handleOpenModal = () => {
    setIsExpanding(true);
    setTimeout(() => {
      setIsModalOpen(true);
      setIsExpanding(false);
    }, 600); // Duration of the blur animation
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "120vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 20px",
        overflow: "hidden",
        textAlign: "center",
        background: "radial-gradient(circle at 20% 20%, #12002b, #050010 60%)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* ✅ BLUR TRANSITION OVERLAY */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backdropFilter: isExpanding ? "blur(20px)" : "blur(0px)",
          background: isExpanding ? "rgba(5, 0, 15, 0.4)" : "rgba(5, 0, 15, 0)",
          transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 1400,
          pointerEvents: "none",
        }}
      />

      {/* background glow */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "-120px",
          width: "420px",
          height: "420px",
          background: "#7c3aed",
          opacity: 0.25,
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          right: "-120px",
          width: "420px",
          height: "420px",
          background: "#4f46e5",
          opacity: 0.25,
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />

      {/* glow ring */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            border: "1px solid rgba(168,85,247,0.15)",
            filter: "blur(40px)",
            opacity: 0.4,
          }}
        />
      </div>

      {/* CARD */}
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
    // ✅ FIX: Increased opacity and added a slight white gradient
    background: hover
      ? "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))"
      : "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
    // ✅ FIX: Webkit prefix is often needed for backdrop-filter to work on all browsers
    backdropFilter: "blur(25px) saturate(120%)",
    WebkitBackdropFilter: "blur(25px) saturate(120%)",
    
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "32px",
    padding: isMobile ? "20px 30px" : "60px 50px",
    transition: "all 1s cubic-bezier(.23,1,.32,1)",
    
    // ... rest of your transform and opacity logic
    transform: showCard
      ? hover ? "translateY(-8px)" : "translateY(0px)"
      : isMobile
        ? "perspective(1000px) rotateY(-15deg) translateX(-60px)"
        : "perspective(1400px) rotateY(-30deg) translateX(-350px)",
    opacity: showCard ? 1 : 0,
    boxShadow: hover
      ? "0 40px 140px rgba(139,92,246,0.55)"
      : "0 0 80px rgba(139,92,246,0.25)",
    overflow: "hidden",
  }}
>
        {/* shine sweep */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: hover ? "130%" : "-120%",
            width: "25%",
            height: "100%",
            background:
              "linear-gradient(120deg, transparent, rgba(168,85,247,0.18), transparent)",
            transform: "skewX(-20deg)",
            transition: "all 2.5s ease",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <h1
          style={{
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
            transition: "all .4s",
          }}
        >
          what is elinity
        </h1>

        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.7",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "40px",
          }}
        >
          elinity exists for people who believe connection is the foundation of
          a good life.
          <br />
          <br />
          it’s an emotionally intelligent ai platform that helps you meet deeply
          aligned people and build meaningful relationships over time.
          <br />
          <br />
          whether you’re looking for love, friendship, collaborators, or simply
          richer human connection, elinity brings everything into one coherent
          space. it understands who you are, what you’re seeking, and how you
          connect, then introduces you to people who feel like a natural yes.
          <br />
          <br />
          this isn’t about more matches. it’s about better ones, and the tools to
          turn connection into something real.
        </p>

        <div
          style={{
            height: "1px",
            width: "100%",
            background:
              "linear-gradient(to right, transparent, rgba(168,85,247,0.5), transparent)",
            marginBottom: "40px",
          }}
        />

        <h2
          style={{
            fontSize: "clamp(22px,4vw,40px)",
            fontWeight: 700,
            color: "white",
            marginBottom: "20px",
          }}
        >
          what elinity actually helps you do.
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#cbd5e1",
          }}
        >
          elinity is about{" "}
          <span style={{ color: "#fff", fontWeight: 500 }}>
            people, your people.
          </span>
          <br />
          It’s about <span style={{ color: "#fff" }}>better matches</span>, not
          more.
          <br />
          it’s about <span style={{ color: "#fff" }}>better conversations</span>,
          not more.
          <br />
          It’s about <span style={{ color: "#60a5fa" }}>more signal</span>, not
          noise.
        </p>

        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.7",
            color: "rgba(255,255,255,0.85)",
            marginTop: "40px",
          }}
        >
          we help you find people you can build incredible relationships with
          <br />
          for love, friendship, leisure, collaboration, creativity, and life
          <br />
          and then we help you actually nurture those relationships over time
        </p>
      </div>
<button
  onClick={() => {
    if (isCollapsed) {
      // Expand + open modal
      setIsCollapsed(false);
      handleOpenModal();
    } else {
      // Collapse + CLOSE modal
      setIsCollapsed(true);
      setIsModalOpen(false);   // ✅ THIS LINE FIXES YOUR ISSUE
    }
  }}
  style={{
    marginTop: "30px",
    padding: "12px 28px",
    borderRadius: "100px",
    border: "1px solid rgba(168,85,247,0.4)",
    background: "rgba(168,85,247,0.1)",
    color: "#e9d5ff",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "all 0.3s ease",
    zIndex: 20,
  }}
>
  {isCollapsed ? "More about this ↓" : "Show less ↑"}
</button>

<style>{`
  /* Chrome, Edge, Safari */
  .custom-scroll::-webkit-scrollbar {
    width: 6px;
  }

  .custom-scroll::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 10px;
  }

  .custom-scroll::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #7c3aed, #4f46e5);
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(124, 58, 237, 0.6);
  }

  .custom-scroll::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #a78bfa, #818cf8);
  }

  /* Firefox */
  .custom-scroll {
    scrollbar-width: thin;
    scrollbar-color: #7c3aed rgba(255,255,255,0.05);
  }
`}</style>  
      {/* ✅ MODAL RENDER */}
{/* ✅ MODAL RENDER - Wrapped in a Fixed Portal/Container */}
{isModalOpen && (
  <div
    style={{
      position: "fixed",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2000,
      background: "rgba(5, 0, 15, 0.4)", 
      backdropFilter: "blur(12px)", 
      WebkitBackdropFilter: "blur(12px)",
    }}
    onClick={() => { setIsModalOpen(false); setIsCollapsed(true); }}
  >
    <div 
      className="custom-scroll"
      onClick={(e) => e.stopPropagation()} 
      style={{
        position: "relative", // CRITICAL: Allows absolute positioning of the X
        width: "90%",
        maxWidth: "600px", // Keeping it compact as per your preference
        maxHeight: "85vh",
        overflowY: "auto",
        borderRadius: "24px",
        background: "rgba(20, 20, 30, 0.8)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* --- THE X CLOSE BUTTON --- */}
      <button 
        onClick={() => { setIsModalOpen(false); setIsCollapsed(true); }}
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          color: "rgba(255, 255, 255, 0.6)",
          cursor: "pointer",
          fontSize: "14px",
          zIndex: 2010,
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
          e.currentTarget.style.color = "#fff";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
          e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
        }}
      >
        ✕
      </button>
      {/* --------------------------- */}

      <MoreElinity onClose={() => { setIsModalOpen(true); setIsCollapsed(true);  }} />
    </div>
  </div>
)}
    </div>
  );
}