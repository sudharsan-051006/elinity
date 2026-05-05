import { useEffect, useState, useRef, FC } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Brand Tokens ─────────────────────────────────────────────────────────────

const brand = {
  primary: {
    main: "#a855f7",
    secondary: "#7c4dff",
    light: "#b983ff",
  },
  background: {
    main: "#0a0a23",
    panel: "#181848",
    deep: "#3a185a",
  },
  ui: {
    input: "#23235b",
    border: "#33336b",
  },
  text: {
    primary: "#ffffff",
    secondary: "#c4b5fd",
    light: "#f3e8ff",
  },
  gradients: {
    button: "linear-gradient(to right, #a855f7, #7c4dff)",
    background: "radial-gradient(circle at 50% 30%, #b983ff 0%, #a855f7 40%, #3a185a 80%, #181848 100%)",
  },
} as const;

// ─── Types ────────────────────────────────────────────────────────────────────

interface FeatureItem {
  title: string;
  desc: string;
  accent: string;
}

interface BeliefItem {
  num: string;
  title: string;
  body: string;
}

interface TribeItem {
  num: string;
  name: string;
  desc: string;
}

interface StepItem {
  idx: string;
  title: string;
  desc: string;
}

interface StatItem {
  value: string;
  label: string;
  color: string;
}

interface FooterColumn {
  title: string;
  links: string[];
}

interface SectionLabelProps {
  label: string;
  index: string;
}

interface FeatureRowProps {
  items: FeatureItem[];
  borderTop?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const MARQUEE_ITEMS: string[] = [
  "Love", "Leisure", "Collaboration", "Connection",
  "Resonance", "Belonging", "Growth", "Depth",
];

const FEATURES_ROW1: FeatureItem[] = [
  { title: "curated recommendations", desc: "no more browsing fatigue. we only show you people who cross your high compatibility bar - if no one fits, we show no one. every match is vetted by an ai that deeply understands your personality, values, and life direction.", accent: "var(--primary-main)" },
  { title: "matching beyond romance", desc: "we offer dedicated matching logic for travel, hobbies, collaborations and projects. discover the rich potential of platonic and creative partnerships on the same platform.", accent: "var(--primary-secondary)" },
  { title: "prompt your way to people", desc: "tell lumi exactly what you need. whether you're new to a city or seeking an astrophysics-loving hiking partner, elinity translates your human intent into precise matching logic.", accent: "var(--primary-main)" },
  { title: "your life book", desc: "a private, shared garden for your journey. collect photos, voice notes, and memories in a visual journal that you can keep private or share with your friends and family.", accent: "var(--primary-secondary)" },
];

const FEATURES_ROW2: FeatureItem[] = [
  { title: "connection games", desc: "play is essential. our suite of games - ranging from light and funny to deep and soulful - is designed to spark laughter, curiosity, and closeness for couples and friends alike.", accent: "var(--primary-secondary)" },
  { title: "relationship home", desc: "your 'relationship os.' access rituals, daily cards, shared goals, streaks, and skill-building sessions in one living space that keeps your bonds intentional and vibrant.", accent: "var(--primary-main)" },
  { title: "voice journaling", desc: "talk, don't type. journal solo or as a pair to capture natural, honest reflections. lumi listens and offers actionable insights and growth patterns without the \"therapy-speak.\"", accent: "var(--primary-secondary)" },
  { title: "skill learning + growth", desc: "deepen your relational and social skills and your emotional intelligence with 90+ guided modules. learn resilience, intimacy, frameworks for self knowledge and self expression, through sessions that evolve with you as you do.", accent: "var(--primary-main)" },
];

const BELIEFS: BeliefItem[] = [
  { num: "01 - Philosophy", title: "rich, deep profiles:", body: "deep representations of real humans, inspired by story cafes, not reducing people to photos and labels." },
  { num: "02 - Matching", title: "threshold-based", body: "you only see high-fit connections; we never waste your time. we want to minimize the time you spend looking." },
  { num: "03 - AI", title: "multi-dimensional", body: "matching based on values and goals, character and personality, not just 'vibes' or surface-level attributes." },
  { num: "04 - Journey", title: "proactive support", body: "lumi helps you flourish before problems arise, as your relationship ally, and as your reflection companion." },
  { num: "05 - Design", title: "meaningful play", body: "curiosity and novelty built into the core, as the foundation for relational flourishing." },
  { num: "06 - Vision", title: "story assistant", body: "lumi helps you craft an honest, sparkling profile, that helps you bring your story to the fore." },
];

const TRIBES: TribeItem[] = [
  { num: "Tribe 01", name: "The Lovers", desc: "For those seeking conscious, resonant intimacy over chaotic swiping. The ones who believe in soulmates, and want to find theirs." },
  { num: "Tribe 02", name: "The Social Expanders", desc: "For those looking for instant-yes friends for life's adventures. Those who love to play, to yap, to travel, those who carpe diem." },
  { num: "Tribe 03", name: "The Builders", desc: "For those seeking cool collaborators with aligned vision and temperament. Bring your creative ideas to life with people you'd love building with." },
  { num: "Tribe 04", name: "The Deepeners", desc: "For those nurturing existing bonds with intention and joy, be it with a partner, friends, or family. The ones who go all the way in." },
  { num: "Tribe 05", name: "The Explorers", desc: "Refining their inner world to improve all outer connections. Exploring and expressing the richness of what's within." },
];

const STEPS: StepItem[] = [
  {
    idx: "01",
    title: "create your deep profile",
    desc: "an onboarding journey to express your values, rhythms, and who you are becoming."
  },
  {
    idx: "02",
    title: "let lumi understand you",
    desc: "through journals and psychometrics, lumi builds a model of your ideal life fit."
  },
  {
    idx: "03",
    title: "choose your intention",
    desc: "toggle between love, leisure, or collaboration modes anytime."
  },
  {
    idx: "04",
    title: "cross the bar",
    desc: "we only introduce you to those who meet your high compatibility threshold. no noise, just intent."
  },
  {
    idx: "05",
    title: "connect with ease",
    desc: "use icebreakers and vibe checks to move from digital match to real-world momentum."
  },
  {
    idx: "06",
    title: "grow together",
    desc: "use our suite of tools to keep your relationships designed, tended, and celebrated."
  }
];

const STATS: StatItem[] = [
  { value: "90+", label: "Growth modules",   color: "var(--primary-main)" },
  { value: "3",   label: "Connection modes", color: "var(--primary-secondary)" },
  { value: "∞",   label: "Depth potential",  color: "var(--primary-main)" },
  { value: "0",   label: "Wasted swipes",    color: "var(--primary-secondary)" },
];

const FOOTER_COLS: FooterColumn[] = [
  { title: "Product",  links: ["Features", "How it works", "For lovers", "For builders"] },
  { title: "Company",  links: ["About", "Blog", "Careers", "Press"] },
  { title: "Connect",  links: ["Instagram", "Twitter / X", "Discord", "contact@elinity.com"] },
];

// ─── Hook ─────────────────────────────────────────────────────────────────────

function useFadeIn(): React.RefObject<HTMLDivElement> {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); io.disconnect(); } },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// ─── Global CSS ───────────────────────────────────────────────────────────────
// In production: move to index.css / globals.css and add the Google Fonts <link>
// to index.html or _document.tsx.

const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Space+Mono:ital,wght@0,400;0,700;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;1,9..40,300&display=swap');

  :root {
    --primary-main:      ${brand.primary.main};
    --primary-secondary: ${brand.primary.secondary};
    --primary-light:     ${brand.primary.light};

    --bg-main:  ${brand.background.main};
    --bg-panel: ${brand.background.panel};
    --bg-deep:  ${brand.background.deep};

    --ui-input:  ${brand.ui.input};
    --ui-border: ${brand.ui.border};

    --text-primary:   ${brand.text.primary};
    --text-secondary: ${brand.text.secondary};
    --text-light:     ${brand.text.light};

    --gradient-button: ${brand.gradients.button};
    --gradient-bg:     ${brand.gradients.background};

    --border: ${brand.ui.border};
  }

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }

  body {
    background: var(--bg-main);
    color: var(--text-primary);
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.6;
    cursor: none;
    overflow-x: hidden;
  }

  /* ── Cursor ── */
  .cursor {
    width: 12px; height: 12px;
    background: var(--primary-main);
    border-radius: 50%;
    position: fixed; pointer-events: none; z-index: 9999;
    transition: transform 0.1s ease;
    transform: translate(-50%, -50%);
  }
  .cursor-ring {
    width: 36px; height: 36px;
    border: 1px solid rgba(168,85,247,0.5);
    border-radius: 50%;
    position: fixed; pointer-events: none; z-index: 9998;
    transform: translate(-50%, -50%);
    transition: width 0.25s ease, height 0.25s ease;
  }

  /* ── Nav ── */
  nav {
    display: flex; justify-content: space-between; align-items: center;
    padding: 24px 40px;
    border-bottom: 1px solid var(--border);
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(10,10,35,0.92);
    backdrop-filter: blur(12px);
  }
  .nav-logo {
    font-family: 'Anton', sans-serif; font-size: 22px; letter-spacing: 2px;
    background: var(--gradient-button);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    text-transform: uppercase; text-decoration: none;
  }
  .nav-right { display: flex; align-items: center; gap: 32px; }
  .nav-link {
    font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.1em;
    color: var(--text-secondary); text-decoration: none; text-transform: uppercase;
    transition: color 0.2s; cursor: none;
  }
  .nav-link:hover { color: var(--primary-main); }
  .nav-btn {
    font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.1em;
    color: var(--text-primary); background: var(--gradient-button);
    border: none; padding: 10px 20px; text-transform: uppercase;
    cursor: none; transition: opacity 0.2s; border-radius: 2px;
  }
  .nav-btn:hover { opacity: 0.82; }

  /* ── Section label ── */
  .section-label {
    font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.15em;
    color: var(--text-secondary); text-transform: uppercase; opacity: 0.55;
    display: flex; justify-content: space-between; align-items: center;
    padding: 16px 40px; border-bottom: 1px solid var(--border);
  }

  /* ── Display ── */
  .display {
    font-family: 'Anton', sans-serif;
    font-size: clamp(56px, 10vw, 130px);
    line-height: 0.92; letter-spacing: -1px;
    color: var(--text-primary);
  }

  /* ── Hero ── */
  .hero {
    padding: 120px 40px 0;
    display: grid; grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid var(--border);
    min-height: 100vh; align-items: start;
  }
  .hero-left { padding: 60px 60px 60px 0; border-right: 1px solid var(--border); }
  .hero-tagline {
    font-family: 'Space Mono', monospace; font-size: 11px;
    color: var(--primary-main); letter-spacing: 0.2em; text-transform: uppercase;
    margin-bottom: 40px; display: flex; align-items: center; gap: 12px;
  }
  .hero-tagline::before { content: ''; display: block; width: 32px; height: 1px; background: var(--primary-main); }
  .hero-body { margin-top: 40px; max-width: 480px; font-size: 16px; color: var(--text-secondary); line-height: 1.75; }
  .hero-cta-row { display: flex; gap: 16px; margin-top: 56px; flex-wrap: wrap; }
  .hero-right {
    display: flex; align-items: flex-end; justify-content: center;
    padding: 60px 0 0; position: relative; overflow: hidden;
  }
  .creature-bg {
    width: 70%; aspect-ratio: 1;
    background: var(--gradient-bg);
    border-radius: 50% 50% 0 0;
    position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
    opacity: 0.55;
  }
  .creature { position: relative; z-index: 2; width: 280px; }
  .blob-svg { width: 100%; height: auto; filter: drop-shadow(0 40px 80px rgba(168,85,247,0.5)); }

  /* ── Buttons ── */
  .btn-primary {
    font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.12em;
    background: var(--gradient-button); color: var(--text-primary);
    padding: 14px 28px;  border: none;
    cursor: none; transition: opacity 0.2s; font-weight: 700; border-radius: 2px;
  }
  .btn-primary:hover { opacity: 0.82; }
  .btn-outline {
    font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.12em;
    background: transparent; color: var(--text-light);
    padding: 14px 28px; 
    border: 1px solid var(--ui-border);
    cursor: none; transition: border-color 0.2s, color 0.2s; border-radius: 2px;
  }
  .btn-outline:hover { border-color: var(--primary-main); color: var(--primary-main); }

  /* ── Marquee ── */
  .marquee-wrap {
    overflow: hidden; padding: 16px 0;
    background: var(--gradient-button);
    border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
  }
  .marquee-track { display: flex; animation: marquee 18s linear infinite; white-space: nowrap; }
  .marquee-item {
    font-family: 'Anton', sans-serif; font-size: 18px; letter-spacing: 2px;
    text-transform: uppercase; color: var(--text-primary);
    padding: 0 32px; display: flex; align-items: center; gap: 32px;
  }
  .marquee-item::after { content: '✦'; font-size: 14px; opacity: 0.7; }
  @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

  .section { border-bottom: 1px solid var(--border); }

  /* ── Statement ── */
  .statement-section { padding: 100px 40px; border-bottom: 1px solid var(--border); }
  .statement-row { display: flex; align-items: flex-start; gap: 80px; }

  /* ── Features ── */
  .features-header {
    padding: 60px 40px 40px; border-bottom: 1px solid var(--border);
    display: flex; justify-content: space-between; align-items: flex-end;
  }
  .features-scroll { display: grid; grid-template-columns: repeat(4,1fr); }
  .feature-col {
    padding: 40px; border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border); transition: background 0.2s;
  }
  .feature-col:last-child { border-right: none; }
  .feature-col:hover { background: var(--bg-panel); }
  .feature-dot { width: 8px; height: 8px; border-radius: 50%; margin-bottom: 24px; }
  .feature-title { font-family: 'Anton', sans-serif; font-size: 20px; color: var(--text-primary); margin-bottom: 12px; line-height: 1.1; }
  .feature-desc { font-size: 13px; color: var(--text-secondary); line-height: 1.8; }

  /* ── Beliefs ── */
  .beliefs-section { background: var(--bg-deep); border-bottom: 1px solid var(--border); }
  .beliefs-header { padding: 60px 40px 40px; border-bottom: 1px solid rgba(168,85,247,0.2); }
  .beliefs-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; }
  .belief-cell { padding: 40px; border-right: 1px solid rgba(168,85,247,0.2); border-bottom: 1px solid rgba(168,85,247,0.2); }
  .belief-cell:nth-child(3n) { border-right: none; }
  .belief-num { font-family: 'Space Mono', monospace; font-size: 11px; color: var(--primary-main); letter-spacing: 0.15em; margin-bottom: 16px; opacity: 0.7; }
  .belief-title { font-family: 'Anton', sans-serif; font-size: 22px; text-transform: uppercase; color: var(--text-light); margin-bottom: 12px; }
  .belief-body { font-size: 13px; color: var(--text-secondary); line-height: 1.8; }

  /* ── Tribes ── */
  .tribes-section { background: var(--bg-panel); border-bottom: 1px solid var(--border); }
  .tribes-header { padding: 60px 40px; border-bottom: 1px solid var(--border); }
  .tribe-grid { display: grid; grid-template-columns: repeat(5,1fr); }
  .tribe-cell { padding: 40px 32px; border-right: 1px solid var(--border); transition: background 0.2s; cursor: none; }
  .tribe-cell:last-child { border-right: none; }
  .tribe-cell:hover { background: var(--ui-input); }
  .tribe-num { font-family: 'Space Mono', monospace; font-size: 11px; color: var(--primary-main); letter-spacing: 0.12em; margin-bottom: 24px; opacity: 0.7; }
  .tribe-name { font-family: 'Anton', sans-serif; font-size: 24px; text-transform: uppercase; color: var(--text-light); line-height: 1.05; margin-bottom: 16px; }
  .tribe-desc { font-size: 12px; color: var(--text-secondary); line-height: 1.75; }

  /* ── Steps ── */
  .steps-section { border-bottom: 1px solid var(--border); }
  .steps-header { padding: 60px 40px 40px; border-bottom: 1px solid var(--border); }
  .step-row {
    display: grid; grid-template-columns: 80px 1fr 1fr;
    align-items: start; padding: 40px; border-bottom: 1px solid var(--border);
    gap: 40px; transition: background 0.2s; cursor: none;
  }
  .step-row:hover { background: var(--bg-panel); }
  .step-row:last-child { border-bottom: none; }
  .step-idx { font-family: 'Anton', sans-serif; font-size: 48px; color: var(--primary-main); line-height: 1; }
  .step-title { font-family: 'Anton', sans-serif; font-size: 28px;  color: var(--text-primary); line-height: 1.1; align-self: center; }
  .step-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.8; align-self: center; }

  /* ── Lumi / Resonance ── */
  .lumi-section { border-bottom: 1px solid var(--border); display: grid; grid-template-columns: 1fr 1fr; }
  .lumi-left { padding: 80px 40px; border-right: 1px solid var(--border); display: flex; flex-direction: column; justify-content: space-between; }
  .lumi-right { background: var(--bg-panel); display: flex; align-items: center; justify-content: center; padding: 80px 40px; position: relative; overflow: hidden; }
  .lumi-creature-bg { position: absolute; width: 320px; height: 320px; background: var(--gradient-bg); border-radius: 50%; bottom: -60px; left: 50%; transform: translateX(-50%); opacity: 0.25; }
  .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--border); }
  .stat-cell { background: var(--bg-main); padding: 24px; }
  .stat-num { font-family: 'Anton', sans-serif; font-size: 36px; }
  .stat-label { font-family: 'Space Mono', monospace; font-size: 11px; color: var(--text-secondary); letter-spacing: 0.1em; margin-top: 4px; }

  /* ── Closing ── */
  .closing { padding: 120px 40px; border-bottom: 1px solid var(--border); text-align: center; }
  .closing-sub {
    font-family: 'Space Mono', monospace; font-size: 13px; color: var(--text-secondary);
    letter-spacing: 0.08em; margin-top: 40px; max-width: 560px;
    margin-left: auto; margin-right: auto; line-height: 1.8;
  }
  .closing-cta-row { margin-top: 56px; display: flex; justify-content: center; gap: 16px; }

  /* ── Footer ── */
  footer { background: var(--bg-panel); padding: 80px 40px 40px; }
  .footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 60px; padding-bottom: 60px; border-bottom: 1px solid var(--border); }
  .footer-logo {
    font-family: 'Anton', sans-serif; font-size: 40px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 16px;
    background: var(--gradient-button);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .footer-tagline { font-size: 13px; color: var(--text-secondary); max-width: 260px; line-height: 1.7; }
  .footer-col-title { font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-secondary); margin-bottom: 20px; opacity: 0.55; }
  .footer-links { list-style: none; display: flex; flex-direction: column; gap: 12px; }
  .footer-links a { font-size: 14px; color: var(--text-secondary); text-decoration: none; transition: color 0.2s; cursor: none; }
  .footer-links a:hover { color: var(--primary-main); }
  .footer-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 32px; }
  .footer-copy { font-family: 'Space Mono', monospace; font-size: 11px; color: var(--text-secondary); letter-spacing: 0.08em; opacity: 0.4; }

  /* ── Fade-in ── */
  .fade-in { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
  .fade-in.visible { opacity: 1; transform: translateY(0); }

  /* ── Mobile ── */
  @media (max-width: 768px) {
    nav { padding: 16px 20px; }
    .hero { grid-template-columns: 1fr; padding: 100px 20px 0; }
    .hero-left { border-right: none; padding-right: 0; }
    .hero-right { display: none; }
    .section-label { padding: 14px 20px; }
    .display { font-size: clamp(40px, 12vw, 80px); }
    .features-scroll, .tribe-grid { grid-template-columns: 1fr; }
    .beliefs-grid { grid-template-columns: 1fr; }
    .belief-cell { border-right: none !important; }
    .tribe-cell { border-right: none; border-bottom: 1px solid var(--border); }
    .lumi-section { grid-template-columns: 1fr; }
    .lumi-right { display: none; }
    .footer-top { grid-template-columns: 1fr; gap: 40px; }
    .step-row { grid-template-columns: 60px 1fr; }
    .step-desc { display: none; }
    .statement-row { flex-direction: column; gap: 32px; }
    .statement-section, .closing, .steps-header, .features-header,
    .tribes-header, .beliefs-header, .lumi-left,
    .feature-col, .belief-cell, .tribe-cell, .step-row { padding-left: 20px; padding-right: 20px; }
    footer, .footer-top { padding-left: 20px; padding-right: 20px; }
    .closing { padding: 60px 20px; }
  }
`;

// ─── Components ───────────────────────────────────────────────────────────────

const GlobalStyles: FC = () => (
  <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />
);

const CustomCursor: FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef   = useRef<HTMLDivElement>(null);
  const mouse     = useRef({ x: 0, y: 0 });
  const ring      = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top  = `${e.clientY}px`;
      }
    };
    document.addEventListener("mousemove", onMove);

    let rafId: number;
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top  = `${ring.current.y}px`;
      }
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const expand = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "translate(-50%,-50%) scale(2)";
      if (ringRef.current) { ringRef.current.style.width = "60px"; ringRef.current.style.height = "60px"; }
    };
    const shrink = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "translate(-50%,-50%) scale(1)";
      if (ringRef.current) { ringRef.current.style.width = "36px"; ringRef.current.style.height = "36px"; }
    };

    const targets = document.querySelectorAll<HTMLElement>("button, a, .tribe-cell, .step-row, .feature-col");
    targets.forEach((el) => { el.addEventListener("mouseenter", expand); el.addEventListener("mouseleave", shrink); });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      targets.forEach((el) => { el.removeEventListener("mouseenter", expand); el.removeEventListener("mouseleave", shrink); });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
};

const SectionLabel: FC<SectionLabelProps> = ({ label, index }) => (
  <div className="section-label">
    <span>{label}</span>
    <span>{index}</span>
  </div>
);

const HeroCreature: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Path to your robot image
  const robotImageUrl = "/Robot.png";

  return (
    <div 
      style={{ 
        position: 'relative', 
        display: 'inline-block', 
        cursor: 'pointer',
        padding: '20px',
        // This ensures the image rendering stays crisp/pixelated when scaled
        imageRendering: 'pixelated' 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* PIXELATED SPEECH BUBBLE */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: -20 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              position: 'absolute',
              top: '5%',
              left: '65%',
              backgroundColor: 'white',
              color: '#1a1a1a',
              padding: '10px 20px',
              // Blocky border-radius for pixel feel
              borderRadius: '0px', 
              border: '4px solid #1a1a1a',
              boxShadow: '6px 6px 0px rgba(0,0,0,0.2)',
              fontWeight: 'bold',
              fontFamily: '"Courier New", Courier, monospace', // Monospace for retro vibe
              fontSize: '1.2rem',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          >
            Lumi: Hi!
          </motion.div>
        )}
      </AnimatePresence>

      {/* ROBOT IMAGE CONTAINER */}
      <motion.div
        animate={{ 
          y: isHovered ? [0, -12, 0] : [0, -6, 0],
        }}
        transition={{ 
          duration: isHovered ? 1.5 : 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <img 
          src={robotImageUrl} 
          alt="Friendly Robot" 
          style={{
            width: '300px',
            height: 'auto',
            display: 'block',
            // --- PIXEL ART CSS TRICK ---
            // If the image is high-res, this CSS "pixelates" it slightly
            filter: isHovered 
              ? 'contrast(1.1) brightness(1.1)' 
              : 'none',
            // Keeps pixels sharp if you downscale a large image
            imageRendering: 'pixelated', 
          }} 
        />
        
        {/* PIXELATED GLOW (Square instead of round) */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '180px',
              height: '180px',
              backgroundColor: '#ffd700',
              filter: 'blur(40px)', // Soft glow still works well with pixel art
              zIndex: -1
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

const LumiCreature: FC = () => (
  <svg
    viewBox="0 0 280 340" width="260"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: "relative", zIndex: 2, filter: "drop-shadow(0 30px 60px rgba(168,85,247,0.55))" }}
  >
    <ellipse cx="140" cy="200" rx="105" ry="125" fill={brand.primary.secondary} />
    <ellipse cx="140" cy="100" rx="80"  ry="80"  fill={brand.primary.secondary} />
    <text x="85"  y="180" fontSize="16" fill={brand.primary.light} opacity="0.9">✦</text>
    <text x="175" y="210" fontSize="12" fill={brand.primary.light} opacity="0.7">✦</text>
    <text x="120" y="250" fontSize="10" fill={brand.primary.light} opacity="0.5">✦</text>
    <circle cx="112" cy="96" r="26" fill={brand.text.light} />
    <circle cx="168" cy="96" r="26" fill={brand.text.light} />
    <circle cx="116" cy="99" r="15" fill={brand.background.main} />
    <circle cx="172" cy="99" r="15" fill={brand.background.main} />
    <circle cx="122" cy="93" r="5"  fill={brand.text.light} />
    <circle cx="178" cy="93" r="5"  fill={brand.text.light} />
    <path d="M 118 132 Q 140 150 162 132" stroke={brand.background.main} strokeWidth="4" fill="none" strokeLinecap="round" />
    <ellipse cx="38"  cy="185" rx="20" ry="36" fill={brand.primary.secondary} transform="rotate(-30 38 185)" />
    <ellipse cx="242" cy="185" rx="20" ry="36" fill={brand.primary.secondary} transform="rotate(30 242 185)" />
    <circle cx="24"  cy="158" r="14" fill={brand.background.deep} />
    <circle cx="256" cy="158" r="14" fill={brand.background.deep} />
    <ellipse cx="108" cy="318" rx="28" ry="14" fill={brand.background.deep} />
    <ellipse cx="172" cy="318" rx="28" ry="14" fill={brand.background.deep} />
  </svg>
);
const words = ["social connector", "matchmaker", "relationship buddy"];


const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen resize for mobile-specific adjustments
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 968);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section 
      style={{ 
        display: "flex", 
        flexDirection: isMobile ? "column" : "row", // Stacks on mobile
        alignItems: "center", 
        justifyContent: "center",
        minHeight: "100vh", 
        padding: isMobile ? "120px 5% 60px 5%" : "0 10%", 
        backgroundColor: "#0a0a1a",
        color: "white",
        overflowX: "hidden",
        gap: isMobile ? "3rem" : "0"
      }}
    >
      {/* LEFT CONTENT */}
      <div style={{ 
        flex: "1", 
        maxWidth: isMobile ? "100%" : "600px", 
        zIndex: 2,
        textAlign: isMobile ? "center" : "left" // Centers text on mobile
      }}>
        <h1 style={{ 
          fontSize: "clamp(2.5rem, 8vw, 4.5rem)", 
          lineHeight: "1.1", 
          fontWeight: 800, 
          margin: "0 0 1.5rem 0",
        }}>
          find your<br />
          <span style={{ color: "#7759fd" }}>person,</span><br />
          build your tribe.
        </h1>

        <p style={{ 
          fontSize: isMobile ? "1.1rem" : "1.2rem", 
          color: "#b0b0d1", 
          lineHeight: "1.6", 
          margin: "0 0 2.5rem 0",
          maxWidth: isMobile ? "100%" : "90%"
        }}>
          find your people across love, leisure, and <br style={{ display: isMobile ? "none" : "block" }} />
          collaborations with lumi, your ai{" "}
          <span style={{ display: "inline-grid", verticalAlign: "bottom" }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                style={{
                  gridArea: "1 / 1",
                  fontWeight: "bold",
                  background: "linear-gradient(135deg, #7759fd 0%, #d9d3fe 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </p>

        <div style={{ 
          display: "flex", 
          gap: "1rem", 
          flexWrap: "wrap", 
          justifyContent: isMobile ? "center" : "flex-start",
          marginTop: "2rem" 
        }}>
<button style={buttonStyle(true, true)} disabled>
  Download On Android
</button>

<button style={buttonStyle(false, true)} disabled>
  Download On iOS
</button>

<button style={glassButtonStyle(true)} disabled>
  Join Waitlist
</button>
        </div>
      </div>

      {/* RIGHT CONTENT (ROBOT) */}
      <div style={{ 
        flex: "1", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        position: "relative",
        width: "100%",
        minHeight: isMobile ? "300px" : "auto"
      }}>
        {/* Glow Effect */}
        <div style={{ 
          position: "absolute", 
          width: isMobile ? "250px" : "450px", 
          height: isMobile ? "250px" : "450px", 
          background: "radial-gradient(circle, rgba(119, 89, 253, 0.2) 0%, transparent 70%)",
          zIndex: 1
        }} />
        
        <div style={{ 
          zIndex: 2, 
          transform: isMobile ? "scale(0.85)" : "scale(1.2)",
          transition: "transform 0.3s ease"
        }}>
          <HeroCreature />
        </div>
      </div>
    </section>
  );
};

// --- Helper Styles ---

const buttonStyle = (primary: boolean, disabled: boolean) => ({
  padding: "0.8rem 1.6rem",
  borderRadius: "12px",
  border: primary ? "none" : "1px solid rgba(119, 89, 253, 0.5)",
  backgroundColor: primary ? "#7759fd" : "transparent",
  color: "white",
  fontWeight: "600" as const,
  cursor: disabled ? "not-allowed" : "pointer",
  boxShadow: primary ? "0 4px 15px rgba(119, 89, 253, 0.3)" : "none",
  fontSize: "0.95rem",
  whiteSpace: "nowrap" as const,
  opacity: disabled ? 0.5 : 1,
  pointerEvents: disabled ? "none" : "auto"
});

const glassButtonStyle = (disabled: boolean) => ({
  padding: "0.8rem 1.6rem",
  borderRadius: "12px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  color: "#d9d3fe",
  fontWeight: "600" as const,
  cursor: disabled ? "not-allowed" : "pointer",
  fontSize: "0.95rem",
  opacity: disabled ? 0.5 : 1,
  pointerEvents: disabled ? "none" : "auto"
});
const Statement: React.FC = () => {
  const ref = useFadeIn();
  // Using a simple state or media query hook is ideal, 
  // but we can achieve great results with standard flex-wrap and clamp.

  return (
    <section 
      ref={ref}
      style={{ 
        padding: "clamp(60px, 10vh, 100px) 6%", 
        backgroundColor: "#0a0a1a", 
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}
    >
      <div style={{ 
        display: "flex", 
        // flexWrap ensures it stacks on mobile
        flexWrap: "wrap",
        // alignItems: "flex-end" works for desktop, but we'll use a gap for mobile
        alignItems: "flex-end", 
        gap: "clamp(30px, 5vw, 80px)",
        maxWidth: "1200px",
        width: "100%"
      }}>
        
        {/* Left Side: Large Display Text */}
        <div style={{ 
          flex: "1 1 500px", // Allows growing and shrinking, sets a base width
          minWidth: "300px" 
        }}>
          <h2 style={{ 
            fontSize: "clamp(54px, 12vw, 140px)", 
            lineHeight: "0.99", 
            fontWeight: 800,
            margin: 0,
            color: "white",
            letterSpacing: "-0.01em",
            textTransform: "lowercase"
          }}>
            say<br />
            <span style={{ 
              color: "#d9d3fe", 
              textShadow: "0 0 40px rgba(119, 89, 253, 0.4)" 
            }}>
              hello
            </span><br />
            to elinity
          </h2>
        </div>

        {/* Right Side: Description Text */}
        <div style={{ 
          flex: "1 1 350px", 
          paddingBottom: "clamp(0px, 2vw, 25px)",
          // Ensures it feels aligned with the start of the text on mobile
          display: "flex",
          justifyContent: "flex-start"
        }}>
          <p style={{ 
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)", 
            color: "#b0b0d1", 
            lineHeight: "1.6", 
            maxWidth: "440px", 
            margin: 0,
            fontWeight: 300,
            letterSpacing: "0.01em"
          }}>
            modern connection is broken - lost in endless swipes and shallow voids. 
            <strong style={{ color: "white", fontWeight: 600 }}> elinity fixes the glitch. </strong> 
            we are a holistic ecosystem built to find your "best-fit" humans and turn 
            initial sparks into lifelong, legendary bonds.
          </p>
        </div>

      </div>
    </section>
  );
};
const Features: React.FC = () => {
  return (
    <section 
      style={{ 
        backgroundColor: "#030005", 
        padding: "80px 6vw", // Reduced padding for mobile top/bottom
        color: "white",
        fontFamily: "Inter, 'Space Grotesk', sans-serif",
        overflow: "hidden"
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
        
        {/* BIG STATEMENT HEADER */}
<header style={{ maxWidth: '100%', marginBottom: '40px' }}>
  <h2 style={{ 
    fontSize: "clamp(44px, 10vw, 160px)", // Slightly smaller floor for the longer text
    fontWeight: 900, 
    lineHeight: "0.82", // Tighter lead-in for that "Swiss" look
    margin: 0,
    letterSpacing: "-0.07em",
    textTransform: 'lowercase',
    wordBreak: 'break-word', // Prevents overflow on tiny screens
  }}>
    the core <br /> 
    features and <br />
    <span style={{ 
      WebkitTextStroke: "1px rgba(255,255,255,0.25)",
      WebkitTextFillColor: "transparent",
      display: "block", // Ensures the stroke effect stands out on its own line
      marginTop: "4px",
      background: 'linear-gradient(to bottom right, #ff0080, #c084fc, #c026d3)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
    }}>
      experience.
    </span>
  </h2>
</header>

        {/* BRUTALIST FEATURE GRID */}
        <div style={{ 
          display: 'grid', 
          // 280px ensures it fits even small devices like iPhone SE
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1px', 
          backgroundColor: 'rgba(255,255,255,0.1)', 
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          {[...FEATURES_ROW1, ...FEATURES_ROW2].map((f, i) => (
            <motion.div
              key={i}
              whileHover="hover"
              whileTap="hover" // Mobile compatibility: trigger animation on tap
              style={{
                backgroundColor: "#030005", 
                padding: '60px 30px', // Slightly tighter padding for mobile
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Animated Accent Background - Pink/Violet Palette */}
              <motion.div 
                variants={{
                  hover: { x: '0%' }
                }}
                initial={{ x: '-101%' }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, #ff0080 0%, #7928ca 100%)', 
                  zIndex: 1
                }}
              />

              <div style={{ position: 'relative', zIndex: 2 }}>
                <span style={{ 
                  fontFamily: 'monospace', 
                  fontSize: '0.7rem', 
                  opacity: 0.5,
                  display: 'block',
                  marginBottom: '30px'
                }}>
                  ( 0{i + 1} )
                </span>

                <h3 style={{ 
                  fontSize: '2.2rem', // Adjusted for mobile readability
                  fontWeight: 800, 
                  letterSpacing: '-0.04em',
                  marginBottom: '15px',
                  lineHeight: '1.1'
                }}>
                  {f.title.toLowerCase()}
                </h3>

                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: '1.5', 
                  color: 'rgba(255,255,255,0.5)',
                  maxWidth: '100%',
                  margin: 0
                }}>
                  {f.desc}
                </p>
              </div>

              {/* Bottom Right Arrow */}
              <div style={{ 
                position: 'absolute', 
                bottom: '30px', 
                right: '30px', 
                fontSize: '1.5rem',
                opacity: 0.3,
                zIndex: 2
              }}>
                ↗
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Beliefs: React.FC = () => {
  return (
    <section 
      style={{ 
        backgroundColor: "#030005", 
        padding: "100px 6vw", 
        color: "white",
        fontFamily: "Inter, sans-serif"
      }}
    >
      {/* SECTION HEADER */}
      <div style={{ marginBottom: "60px" }}>
        <h2 style={{ 
          fontSize: "clamp(40px, 8vw, 90px)", 
          fontWeight: 900, 
          letterSpacing: "-0.05em",
          margin: 0,
          textTransform: "lowercase"
        }}>
          the elinity <span style={{ 
                  background: 'linear-gradient(to bottom right, #ff0080, #c084fc, #c026d3)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  display: 'inline-block',
                  marginLeft: '8px',
                  lineHeight: '1.5'
           }}>edge.</span>
        </h2>
      </div>

      {/* ASYMMETRIC GRID */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", 
        gap: "24px" 
      }}>
        {BELIEFS.map((b, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            style={{ 
              position: "relative",
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              borderRadius: "24px",
              padding: "40px",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "280px",
              overflow: "hidden"
            }}
          >
            {/* Top Row: Icon & Tag */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ 
                width: "40px", 
                height: "40px", 
                borderRadius: "12px", 
                background: "linear-gradient(135deg, #7928ca 0%, #ff0080 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.2rem"
              }}>
                ✦
              </div>
            </div>

            {/* Content */}
            <div style={{ marginTop: "40px" }}>
              <h3 style={{ 
                fontSize: "1.8rem", 
                fontWeight: 700, 
                marginBottom: "12px",
                letterSpacing: "-0.02em"
              }}>
                {b.title}
              </h3>
              <p style={{ 
                fontSize: "1rem", 
                lineHeight: "1.6", 
                color: "rgba(255,255,255,0.5)",
                margin: 0,
                fontWeight: 300
              }}>
                {b.body}
              </p>
            </div>

            {/* Decorative Corner Glow */}
            <div style={{ 
              position: "absolute", 
              bottom: "-20px", 
              right: "-20px", 
              width: "100px", 
              height: "100px", 
              background: "radial-gradient(circle, rgba(121, 40, 202, 0.15) 0%, transparent 70%)",
              zIndex: 0
            }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Tribes: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const tribeData = [
    { name: "the lovers", desc: "for those seeking conscious, resonant intimacy over chaotic swiping. the ones who believe in soulmates, and want to find theirs." },
    { name: "the social experience", desc: `for those looking for "instant-yes" friends for life’s adventures. those who love to play, to yap, to travel, those who carpe diem.` },
    { name: "the builders", desc: "for those seeking cool collaborators with aligned vision and temperament. to bring your creative ideas to live with people you’d love building with." },
    { name: "the relationship deepeners", desc: "for those nurturing existing bonds with intention and joy, be it with a partner, friends or family." },
    { name: "the self-explorers", desc: "refining their inner world to improve all outer connections. exploring and expressing the richness of what’s within. " }
  ];

  return (
    <section style={{ 
      backgroundColor: "#030005", 
      minHeight: "100vh", 
      width: "100%",
      display: "flex", 
      flexDirection: "column",
      alignItems: "center", 
      justifyContent: "flex-start",
      fontFamily: "Inter, sans-serif",
      padding: "100px 6vw"
    }}>
      
      {/* SECTION HEADER */}
      <div style={{ textAlign: 'left', width: '100%', maxWidth: '1100px', marginBottom: '80px' }}>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
            fontWeight: 900, 
            letterSpacing: '-0.05em', 
            lineHeight: '1.1',
            background: 'linear-gradient(to bottom right, #ff0080, #c084fc, #c026d3)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            margin: 0 
          }}
        >
          who is elinity for?
        </motion.h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: 'rgba(255,255,255,0.4)', 
          marginTop: '20px', 
          maxWidth: '600px',
          fontWeight: 300 
        }}>
          for those who believe deep, meaningful connection is the foundation of a good life - seekers, builders, lovers, and thinkers living at the intersections.
        </p>
      </div>

      {/* INTERACTIVE LIST */}
      <div style={{ width: '100%', maxWidth: '1100px', display: 'flex', flexDirection: 'column', gap: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}>
        {tribeData.map((tribe, i) => (
          <div 
            key={i}
            onMouseEnter={() => setExpandedIndex(i)}
            onMouseLeave={() => setExpandedIndex(null)}
            onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
            style={{
              backgroundColor: "#030005",
              cursor: "pointer",
              overflow: "hidden",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
              transition: "background-color 0.3s ease"
            }}
          >
            <div style={{ 
              padding: "40px 0", 
              display: "flex", 
              flexDirection: "column",
              position: "relative"
            }}>
              {/* LABEL & NAME ROW */}
              <div style={{ 
                display: "flex", 
                alignItems: "baseline", 
                gap: "30px",
                transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                transform: expandedIndex === i ? "translateX(10px)" : "translateX(0)"
              }}>
                <span style={{ 
                  fontFamily: "monospace", 
                  fontSize: "0.8rem", 
                  color: expandedIndex === i ? "#ff0080" : "rgba(255,255,255,0.2)",
                  width: "30px"
                }}>
                  0{i + 1}
                </span>
                <h3 style={{ 
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)", 
                  fontWeight: 700, 
                  margin: 0, 
                  textTransform: "lowercase",
                  color: expandedIndex === i ? "white" : "rgba(255,255,255,0.3)",
                  transition: "color 0.3s ease"
                }}>
                  {tribe.name}
                </h3>
              </div>

              {/* EXPANDABLE CONTENT */}
              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <p style={{ 
                      padding: "20px 0 0 60px", 
                      fontSize: "clamp(1rem, 2vw, 1.2rem)", 
                      lineHeight: "1.6", 
                      color: "rgba(255,255,255,0.6)", 
                      maxWidth: "700px",
                      fontWeight: 300,
                      margin: 0
                    }}>
                      {tribe.desc}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};  

const WhyItExists: React.FC = () => {
  const pillars = [
    {
      id: "01",
      title: "unified experience",
      desc: "one app for dating and love, friends and leisure, and work and projects. Three profiles, one evolving you.",
    },
    {
      id: "02",
      title: "alignment for depth",
      desc: "we use psychometrics and behavioral insights to find deep alignment, treating people as worlds, not commodities.",
    },
    {
      id: "03",
      title: "lumi (your ai)",
      desc: "an emotionally intelligent companion that helps you communicate honestly and design your life with wonder.",
    },
    {
      id: "04",
      title: "finding & flourishing",
      desc: "tools for every stage, ensuring relationships grow rather than stagnate.",
    },
    {
      id: "05",
      title: "designed for humans",
      desc : "we prioritize quality over quantity, presence over dopamine, depth over speed, meaning-making over consumption."
    }
  ];

  return (
    <section style={{ 
      backgroundColor: "#030005", 
      padding: "100px 6vw", 
      color: "white",
      fontFamily: "Inter, sans-serif"
    }}>
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "60px" 
      }}>
        
        {/* LARGE STICKY-STYLE HEADING */}
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "40px" }}>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            style={{ 
              fontSize: "clamp(48px, 10vw, 120px)", 
              fontWeight: 900, 
              letterSpacing: "-0.06em",
              margin: 0,
              lineHeight: 0.9,
              textTransform: "lowercase"
            }}
          >
            why it <span style={{       background: 'linear-gradient(to bottom right, #ff0080, #c084fc, #c026d3)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>exists.</span>
          </motion.h2>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: "80px 40px" 
        }}>
          
          {/* THE MANIFESTO TEXT */}
          <div style={{ gridColumn: "span 1" }}>
            <p style={{ 
              fontSize: "1.5rem", 
              lineHeight: "1.4", 
              fontWeight: 300, 
              color: "rgba(255,255,255,0.8)",
              margin: 0
            }}>
              connection isn’t a mere one-step problem to solve; it’s a <span style={{ color: "white", fontWeight: 600 }}>holistic journey</span>. 
              a practice. most apps stop at the introduction - elinity is with you and for you for the long ride, from the start of the connection, to becoming your lifelong relational ally and thinking muse. 
            </p>
          </div>

          {/* THE GRID OF PILLARS */}
          <div style={{ 
            gridColumn: "span 1", 
            display: "flex", 
            flexDirection: "column", 
            gap: "48px" 
          }}>
            {pillars.map((p) => (
              <div key={p.id} style={{ display: "flex", gap: "24px" }}>
                <span style={{ 
                  color: "#ff0080", 
                  fontFamily: "monospace", 
                  fontSize: "0.9rem", 
                  paddingTop: "6px" 
                }}>
                </span>
                <div>
                  <h4 style={{ 
                    fontSize: "1.2rem", 
                    fontWeight: 700, 
                    marginBottom: "8px", 
                    textTransform: "lowercase" 
                  }}>
                    {p.title}
                  </h4>
                  <p style={{ 
                    fontSize: "0.95rem", 
                    lineHeight: "1.6", 
                    color: "rgba(255,255,255,0.4)", 
                    fontWeight: 300, 
                    margin: 0 
                  }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const Steps: React.FC = () => {
  return (
    <section 
      style={{ 
        backgroundColor: "#030005", 
        padding: "100px 8vw", 
        color: "white",
        fontFamily: "Inter, sans-serif"
      }}
    >
      {/* MINIMALIST HEADER */}
      <div style={{ marginBottom: "100px", borderLeft: "4px solid #ff0080", paddingLeft: "30px" }}>
        <h2 style={{ 
          fontSize: "clamp(40px, 8vw, 80px)", 
          fontWeight: 900, 
          letterSpacing: "-0.05em",
          margin: 0,
          lineHeight: 1
        }}>
          how it <br /><span style={{ color: "rgba(255,255,255,0.3)" }}>works.</span>
        </h2>
      </div>

      <div style={{ position: "relative", maxWidth: "800px" }}>
        
        {/* VERTICAL PROGRESS LINE */}
        <div style={{ 
          position: "absolute", 
          left: "20px", 
          top: "0", 
          bottom: "0", 
          width: "1px", 
          background: "linear-gradient(to bottom, #ff0080 0%, #7928ca 50%, rgba(255,255,255,0.1) 100%)" 
        }} />

        {STEPS.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            style={{ 
              display: "flex", 
              gap: "40px", 
              marginBottom: "80px", 
              position: "relative" 
            }}
          >
            {/* PULSING NODE */}
            <div style={{ zIndex: 2 }}>
              <motion.div 
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "#030005",
                  border: "2px solid #ff0080",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  color: "#ff0080",
                  boxShadow: "0 0 15px rgba(255, 0, 128, 0.3)"
                }}
              >
                {i + 1}
              </motion.div>
            </div>

            {/* CONTENT CARD */}
            <div style={{ flex: 1, paddingTop: "8px" }}>
              <h3 style={{ 
                fontSize: "1.8rem", 
                fontWeight: 800, 
                marginBottom: "12px", 
                letterSpacing: "-0.03em",
                textTransform: "lowercase",
                color: "white"
              }}>
                {s.title}
              </h3>
              
              <p style={{ 
                fontSize: "1.1rem", 
                lineHeight: "1.6", 
                color: "rgba(255,255,255,0.5)", 
                fontWeight: 300,
                maxWidth: "600px"
              }}>
                {s.desc}
              </p>

              {/* INTERACTIVE DETAIL - Appears on Mobile/Hover */}
              <div style={{ 
                marginTop: "20px", 
                height: "1px", 
                width: "40px", 
                background: "rgba(255,255,255,0.2)" 
              }} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const LumiSection: React.FC = () => {
  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column', 
        backgroundColor: '#030005',
        color: 'white',
        // CRITICAL: Prevent horizontal scroll from blurs and absolute divs
        overflowX: 'hidden', 
        overflowY: 'auto',
        fontFamily: 'sans-serif',
      }}
      className="lumi-container"
    >
      <style>{`
        .lumi-container { flex-direction: column; }
        .panel-left, .panel-right { width: 100% !important; padding: 4rem 8% !important; box-sizing: border-box; }
        
        @media (min-width: 1024px) {
          .lumi-container { flex-direction: row !important; }
          .panel-left { width: 60% !important; padding: 0 6vw !important; border-right: 1px solid rgba(255,255,255,0.05); }
          .panel-right { width: 40% !important; padding: 0 6vw !important; }
        }
      `}</style>

      {/* BACKGROUND ELEMENTS - Wrapped in a container that clips overflow */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, overflow: 'hidden' }}>
        <motion.div 
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{
            position: 'absolute', top: '-10%', left: '-10%',
            width: '70vw', height: '70vw',
            backgroundColor: '#9333ea', borderRadius: '50%',
            filter: 'blur(100px)', opacity: 0.1
          }} 
        />
        <div style={{
          position: 'absolute', bottom: '-10%', right: '-10%',
          width: '60vw', height: '60vw',
          backgroundColor: '#db2777', borderRadius: '50%',
          filter: 'blur(100px)', opacity: 0.1
        }} />
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
        }} />
      </div>

      {/* LEFT PANEL */}
      <div className="panel-left" style={{
        position: 'relative', display: 'flex',
        flexDirection: 'column', justifyContent: 'center',
        zIndex: 2
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <h2 style={{ 
            fontWeight: 900, letterSpacing: '-0.06em', lineHeight: '0.9',
            fontSize: 'clamp(3.5rem, 8vw, 8rem)', margin: 0 
          }}>
            the <br />
            <span style={{
              background: 'linear-gradient(to bottom right, #ff0080, #c084fc, #c026d3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              // FIXED: Changed from 110% to max-content to prevent overflow
              width: 'max-content',
              maxWidth: '100%',
              display: 'inline-block',
              textShadow: '0 0 40px rgba(192, 132, 252, 0.4)'
            }}>
              resonance
            </span> <br />
            engine.
          </h2>

          <p style={{
            maxWidth: '560px', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
            color: 'rgba(233, 213, 255, 0.6)', fontWeight: 300,
            lineHeight: '1.6', margin: 0
          }}>
            skip the swipe. our ai models your values and quirks to find resonant matches for love, play, or projects.
            <br /><br />
            <span style={{ color: 'white', fontWeight: 500, fontStyle: 'italic' }}>
              our goal is to get you off the screen and into the real world in record time. and we mean it.
            </span>
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="panel-right" style={{
        position: 'relative', display: 'flex',
        flexDirection: 'column', justifyContent: 'center',
        zIndex: 2
      }}>
        <motion.div whileHover="hover" style={{ position: 'relative', width: '100%' }}>
          <motion.div 
            variants={{ hover: { backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(168, 85, 247, 0.3)' } }}
            style={{
              position: 'relative', zIndex: 10,
              backgroundColor: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(40px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '32px', padding: 'clamp(2rem, 5vw, 3.5rem)',
              transition: 'all 0.7s ease'
            }}
          >
            <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
              <motion.div variants={{ hover: { rotate: 45 } }} style={{ width: '2.5rem', height: '2.5rem', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a855f7' }}>✦</motion.div>
            </div>
            <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-0.02em', lineHeight:'1.1' }}>
              the <br /> flourishing suite.
            </h3>
            <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: 'rgba(233, 213, 255, 0.5)', lineHeight: '1.6' }}>
              once you meet, the magic grows. access relationship coaching, a shared "life book," whimsy-filled games, a noise-free walled garden f&f network and much more.
            </p>
          </motion.div>
          
          {/* Glow effect clipped by the parent overflow-x */}
          <motion.div 
            variants={{ hover: { opacity: 1 } }}
            style={{
              position: 'absolute', inset: '-1rem',
              background: 'linear-gradient(to top right, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
              borderRadius: '40px', filter: 'blur(24px)',
              opacity: 0, transition: 'opacity 0.7s'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

const Closing: React.FC = () => {
  return (
    <section style={{ 
      backgroundColor: "#030005", 
      padding: "50px 6vw", 
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
      fontFamily: "Inter, sans-serif"
    }}>
      {/* RADIANT AMBIENCE */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '80vw',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255, 0, 128, 0.08) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 0
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "900px", margin: "0 auto" }}>
        
        {/* UPPER LABEL */}
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ 
            fontSize: "2rem", 
            letterSpacing: "0.1em", 
            color: "rgba(255,255,255,0.4)",
            display: "block",
            marginBottom: "40px"
          }}
        >
          inside the app
        </motion.span>

        {/* CORE FEATURES LIST */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "24px", 
          marginBottom: "80px" 
        }}>
          <div>
            <span style={{ color: "#ff0080", fontSize: "0.9rem", fontWeight: 600, display: "block", marginBottom: "8px" }}>
              what you’ll find:
            </span>
            <p style={{ fontSize: "1.2rem", fontWeight: 300, color: "white", margin: 0 }}>
              intentional profiles, dynamic insights, warm prompts, and shared rituals.
            </p>
          </div>

          <div>
            <span style={{ color: "#7928ca", fontSize: "0.9rem", fontWeight: 600, display: "block", marginBottom: "8px" }}>
              what it feels like:
            </span>
            <p style={{ fontSize: "1.2rem", fontWeight: 300, color: "rgba(255,255,255,0.6)", margin: 0 }}>
              it feels human, not transactional; like building something meaningful rather than just browsing.
            </p>
          </div>
        </div>

        {/* FINAL WELCOME */}
        <h2 style={{ 
          fontSize: "clamp(52px, 10vw, 130px)", 
          fontWeight: 900, 
          letterSpacing: "-0.07em", 
          lineHeight: 0.8,
          // lineD
          marginBottom: "60px",
          color: "white"
        }}>
          welcome to <br />
          <span style={{ 
            background: "linear-gradient(135deg, #ff0080 0%, #7928ca 100%)", 
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
            elinity.
          </span>
        </h2>

        {/* CTA ROW */}
        <div style={{ 
          display: "flex", 
          gap: "20px", 
          justifyContent: "center",
          flexWrap: "wrap"
        }}>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "18px 40px",
              borderRadius: "100px",
              border: "none",
              background: "white",
              color: "black",
              fontWeight: 700,
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)"
            }}
          >
            Join the Waitlist
          </motion.button>
          
          <motion.button 
            whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            style={{
              padding: "18px 40px",
              borderRadius: "100px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "transparent",
              color: "white",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer"
            }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </section>
  );
};


// ─── Page Root ────────────────────────────────────────────────────────────────

const ElinityLanding: FC = () => (
  <>
    {/* <GlobalStyles /> */}
    <CustomCursor />
    <Hero />
    <Statement />
        <LumiSection />
    <Features />
    <Beliefs />
    <Tribes />
    <WhyItExists />
    <Steps />
    <Closing />
  </>
);

export default ElinityLanding;