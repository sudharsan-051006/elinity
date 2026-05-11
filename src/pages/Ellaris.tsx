"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion"

// Scroll reveal wrapper component
function RevealSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animated list item component with stagger
function AnimatedListItem({
  children,
  index,
  className = "",
}: {
  children: React.ReactNode
  index: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20px" })

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.li>
  )
}

// Animated tag/pill component
function AnimatedTag({
  children,
  index,
  className = "",
}: {
  children: React.ReactNode
  index: number
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10px" })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05, y: -2 }}
      className={className}
    >
      {children}
    </motion.span>
  )
}

// Floating orb animation
function FloatingOrb({
  className,
  delay = 0,
  duration = 20,
}: {
  className: string
  delay?: number
  duration?: number
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

// Animated card wrapper
function AnimatedCard({
  children,
  className = "",
  hoverScale = 1.02,
}: {
  children: React.ReactNode
  className?: string
  hoverScale?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: hoverScale, y: -4 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Gradient text with shimmer animation
function ShimmerText({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-[#6495ED] bg-clip-text text-transparent">
        {children}
      </span>
      <motion.span
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-clip-text text-transparent"
        animate={{
          backgroundPosition: ["200% 0", "-200% 0"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 100%",
        }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function EllarisLandingPage() {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null)
  const [isIndHovered, setIsIndHovered] = useState(false)
  const [isTeamHovered, setIsTeamHovered] = useState(false)

  // Typewriter effect
  const fullText = "Ellaris: Work, Reimagined Around Purpose, People, and Fit"
  const [typedText, setTypedText] = useState("")
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[charIndex])
        setCharIndex((i) => i + 1)
      }, 70)
      return () => clearTimeout(timeout)
    }
  }, [charIndex])

  return (
    <div className="min-h-screen bg-[#030014] text-white overflow-x-hidden">
      {/* Animated background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <FloatingOrb 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-fuchsia-500/10 rounded-full blur-[120px]" 
          delay={0}
          duration={25}
        />
        <FloatingOrb 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px]" 
          delay={5}
          duration={20}
        />
        <FloatingOrb 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6495ED]/5 rounded-full blur-[150px]" 
          delay={10}
          duration={30}
        />
      </div>

      {/* Hero Section */}
<section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
  {/* Base Background Image */}
  <div 
    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/Ellaris.png')" }}
  >
    {/* Dark Overlay to help text contrast (optional) */}
    <div className="absolute inset-0 bg-black/40" />
  </div>

  {/* Animated grid background with pulse */}
  <motion.div 
    className="absolute inset-0 z-10 bg-[linear-gradient(rgba(167,139,250,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(167,139,250,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"
    animate={{
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <div className="relative z-20 max-w-5xl mx-auto text-center">
    <motion.h1 
      className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <ShimmerText>
        {typedText}
      </ShimmerText>
    </motion.h1>
  </div>
</section>

<br>
</br>
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        {/* What Is Ellaris */}
        <RevealSection className="mb-16">
          <div className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden">
            {/* Decorative corner glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-fuchsia-500 to-transparent" />
                <span className="text-xs font-bold tracking-[0.2em] text-fuchsia-400 uppercase">
                  What Is Ellaris
                </span>
              </div>

              <p className="text-xl md:text-2xl font-semibold mb-4 leading-relaxed">
                Ellaris is Elinity&apos;s platform for meaningful work.
              </p>

              <p className="text-white/60 mb-8 leading-relaxed">
                Where Elinity helps people find and build the most important relationships of their lives,{" "}
                <strong className="text-white">
                  Ellaris helps them find the work, teams, and missions where they can truly thrive.
                </strong>
              </p>

              <div className="h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent my-8" />

              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Ellaris is a deep person-to-organization matching system, built for a world where intelligence is
                  becoming a commodity, skills are becoming abundant, and{" "}
                  <strong className="text-white">
                    passion, purpose, personality, and mission alignment are becoming the real differentiators.
                  </strong>{" "}
                  It connects people to companies, teams, and missions not through resumes and keyword filters, but
                  through who they are, what they care about, and where they are headed.
                </p>
                <p>Ellaris is not a job board, or a recruiting software, or a marketplace of endless applications.</p>
                <p>
                  It is a{" "}
                  <strong className="text-white">
                    curated, high-signal matching layer for the future of work and purpose.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Who Is It For */}
        <RevealSection className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-fuchsia-300 via-violet-300 to-[#6495ED] bg-clip-text text-transparent">
              Who Ellaris Is For
            </h2>
            <p className="text-white/60 text-lg max-w-lg mx-auto">
              Ellaris is built for people and organizations who{" "}
              <span className="text-white font-medium">care deeply about fit.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* For Individuals */}
            <div
              onMouseEnter={() => setIsIndHovered(true)}
              onMouseLeave={() => setIsIndHovered(false)}
              className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-500 ease-out overflow-hidden ${
                isIndHovered
                  ? "bg-gradient-to-br from-fuchsia-500/20 to-fuchsia-500/5 border-fuchsia-500/50 -translate-y-2 shadow-2xl shadow-fuchsia-500/20"
                  : "bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-500/[0.02] border-fuchsia-500/20"
              } border backdrop-blur-xl`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500/40 to-fuchsia-500/10 border border-fuchsia-500/40 flex items-center justify-center text-2xl transition-transform duration-500 ${isIndHovered ? "rotate-6 scale-110" : ""}`}
                >
                  👤
                </div>
                <h3
                  className={`text-xl font-bold transition-colors duration-300 ${isIndHovered ? "text-fuchsia-300" : "text-white"}`}
                >
                  For individuals
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  "People who want to work on things they genuinely care about",
                  "Builders, thinkers, creators, researchers, operators",
                  "Those who value mission, values, and people over titles",
                  "Anyone who wants their work to feel alive, not extractive",
                ].map((text, idx) => (
                  <AnimatedListItem key={idx} index={idx} className="flex items-start gap-3 text-white/80">
                    <motion.div
                      className={`w-1.5 h-1.5 rounded-full bg-fuchsia-500 mt-2.5 flex-shrink-0 transition-all duration-300 ${isIndHovered ? "scale-150 shadow-lg shadow-fuchsia-500/50" : ""}`}
                      animate={isIndHovered ? { scale: [1, 1.5, 1] } : {}}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    />
                    <span>{text}</span>
                  </AnimatedListItem>
                ))}
              </ul>
            </div>

            {/* For Teams */}
            <div
              onMouseEnter={() => setIsTeamHovered(true)}
              onMouseLeave={() => setIsTeamHovered(false)}
              className={`relative p-8 rounded-2xl cursor-pointer transition-all duration-500 ease-out overflow-hidden ${
                isTeamHovered
                  ? "bg-gradient-to-br from-[#6495ED]/20 to-[#6495ED]/5 border-[#6495ED]/50 -translate-y-2 shadow-2xl shadow-[#6495ED]/20"
                  : "bg-gradient-to-br from-[#6495ED]/10 to-[#6495ED]/[0.02] border-[#6495ED]/20"
              } border backdrop-blur-xl`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br from-[#6495ED]/40 to-[#6495ED]/10 border border-[#6495ED]/40 flex items-center justify-center text-2xl transition-transform duration-500 ${isTeamHovered ? "-rotate-6 scale-110" : ""}`}
                >
                  🏢
                </div>
                <h3
                  className={`text-xl font-bold transition-colors duration-300 ${isTeamHovered ? "text-[#6495ED]" : "text-white"}`}
                >
                  For teams
                </h3>
              </div>

              <ul className="space-y-4">
                {[
                  "Mission-driven startups and organizations",
                  "Teams that care about culture, coherence, and long-term impact",
                  "Founders who want people who believe in the mission, not just the compensation",
                  "Organizations preparing for a post-AGI world where human qualities matter more",
                ].map((text, idx) => (
                  <AnimatedListItem key={idx} index={idx} className="flex items-start gap-3 text-white/80">
                    <motion.div
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br from-violet-500 to-[#6495ED] mt-2.5 flex-shrink-0 transition-all duration-300 ${isTeamHovered ? "scale-150 shadow-lg shadow-[#6495ED]/50" : ""}`}
                      animate={isTeamHovered ? { scale: [1, 1.5, 1] } : {}}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    />
                    <span>{text}</span>
                  </AnimatedListItem>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-white/40 max-w-lg mx-auto">
            Ellaris is for the <span className="text-white/60">future-ready</span>. For those building toward something
            that lasts, that truly matters, that deeply resonates.
          </p>
        </RevealSection>

        {/* Why Ellaris Exists */}
        <RevealSection className="mb-16">
          <div className="relative p-8 md:p-16 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-violet-500/10 rounded-full blur-[100px] -translate-y-1/2" />

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-fuchsia-300 via-violet-300 to-[#6495ED] bg-clip-text text-transparent">
                Why Ellaris Exists
              </h2>

              <p className="text-xl md:text-2xl font-semibold mb-6 text-white">
                The way we match people to work is broken.
              </p>

              <p className="text-white/60 leading-relaxed max-w-3xl mx-auto mb-8">
                Today, individuals apply to hundreds of roles they barely resonate with. Companies sort through
                thousands of applications, filtering by proxies that say little about who someone actually is. The
                result is misalignment on both sides, high churn, disengagement, and enormous wasted human potential.
                <br />
                <br />
                At the same time,{" "}
                <strong className="text-white border-b-2 border-fuchsia-500">work itself is changing.</strong>
              </p>

              <div className="p-8 rounded-2xl bg-violet-500/5 border border-violet-500/20 max-w-3xl mx-auto mb-8">
                <p className="text-sm font-bold text-violet-400 mb-4">
                  As AI and automation commoditize hard skills, the real value shifts toward:
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    "Passion",
                    "Purpose",
                    "Personality",
                    "Judgment",
                    "Taste",
                    "Mission alignment",
                    "Relationship-building ability",
                  ].map((item, idx) => (
                    <AnimatedTag
                      key={idx}
                      index={idx}
                      className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium hover:bg-violet-500/20 hover:border-violet-500/40 transition-all duration-300 cursor-default"
                    >
                      {item}
                    </AnimatedTag>
                  ))}
                </div>
              </div>

              <p className="text-white/60 italic max-w-2xl mx-auto">
                Ellaris exists because <strong className="text-white">these things are not captured by resumes</strong>,
                and because the future of work demands a different matching architecture.
              </p>
            </div>
          </div>
        </RevealSection>

        {/* Ellaris Within Ecosystem */}
        <RevealSection className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-fuchsia-300 via-violet-300 to-[#6495ED] bg-clip-text text-transparent">
              Ellaris Within the Elinity Ecosystem
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Elinity is a platform for human flourishing.
              <br />
              At the highest level, we believe a good life rests on <span className="text-white font-medium">two pillars:</span>
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["Deep, meaningful relationships", "Purposeful, meaningful work"].map((label, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-4 rounded-full bg-violet-500/10 border border-violet-500/30 text-white font-medium shadow-lg shadow-violet-500/10 cursor-default"
              >
                {label}
              </motion.div>
            ))}
          </div>

          <div className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl max-w-4xl mx-auto">
            <p className="text-center text-white/60 mb-10">
              Elinity began by tackling the first pillar.
              <br />
              <strong className="text-white">Ellaris</strong> is the natural extension into the second.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
              <motion.div 
                className="flex-1 text-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h4 className="text-2xl font-bold mb-2">Elinity</h4>
                <p className="text-white/70">helps you find your people and build deep relationships.</p>
              </motion.div>

              <motion.div 
                className="w-16 h-px md:w-px md:h-24 bg-gradient-to-b from-transparent via-violet-500 to-transparent opacity-50 shadow-lg shadow-violet-500"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />

              <motion.div 
                className="flex-1 text-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-2xl font-bold mb-2">Ellaris</h4>
                <p className="text-white/70">helps you find your place, your mission, and your work tribe.</p>
              </motion.div>
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-violet-500/10 to-violet-500/[0.02] border border-violet-500/20 text-center">
              <p className="text-violet-200 font-medium leading-relaxed">
                Relationships feed purpose.
                <br />
                Purpose feeds relationships.
                <br />
                <span className="text-white font-bold">
                  Ellaris and Elinity form a single, coherent ecosystem designed around the whole human.
                </span>
              </p>
            </div>
          </div>
        </RevealSection>

        {/* Core Features */}
        <RevealSection className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-fuchsia-300 via-violet-300 to-[#6495ED] bg-clip-text text-transparent">
              Core Features and Highlights
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-[#6495ED] mx-auto rounded-full" />
          </div>

          <div className="space-y-6">
            {/* Featured Card: Curated Matching */}
            <div className="relative p-8 md:p-12 rounded-3xl border border-fuchsia-500/30 bg-white/[0.03] backdrop-blur-xl overflow-hidden group hover:border-fuchsia-500/50 hover:shadow-2xl hover:shadow-fuchsia-500/10 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-[80px] group-hover:bg-fuchsia-500/20 transition-colors duration-500" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-fuchsia-500 via-violet-500 to-[#6495ED] flex items-center justify-center text-2xl shadow-lg shadow-fuchsia-500/40"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    ✦
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold">Curated, High-Bar Matching</h3>
                </div>

                <p className="text-lg text-white/70 leading-relaxed mb-6 max-w-3xl">
                  Ellaris does not show you everything. It shows you{" "}
                  <strong className="text-white underline decoration-fuchsia-500 underline-offset-4">
                    only what passes your bar.
                  </strong>
                  <br />
                  Our system deeply understands both individuals and organizations across dimensions like personality,
                  values, goals, working style, mission, and long-term direction. Matches are surfaced only when there
                  is strong, mutual alignment.
                </p>

                <div className="p-6 rounded-2xl bg-black/30 border-l-4 border-fuchsia-500">
                  <p className="text-white/60 leading-relaxed">
                    If nothing clears the bar, you see nothing. No noise. No spam. No endless scrolling. This applies
                    equally to individuals and companies. Ellaris replaces mass applications with{" "}
                    <strong className="text-white">high-confidence introductions.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Grid: Discovery & Profiles */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Prompt-Based Discovery */}
              <AnimatedCard className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl hover:border-fuchsia-500/30 hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-fuchsia-500/15 border border-fuchsia-500/30 flex items-center justify-center text-lg">
                    💬
                  </div>
                  <h3 className="text-xl font-bold text-fuchsia-300">Prompt-Based Discovery</h3>
                </div>

                <p className="text-white/60 leading-relaxed mb-5">
                  Sometimes you don&apos;t want to browse. You want to describe.
                  <br />
                  Ellaris lets you prompt your way to people, teams, or organizations using natural language.
                </p>

                <div className="space-y-3 mb-5">
                  {[
                    '"Find me small AI startups working on climate or education, with thoughtful founders and strong design culture"',
                    '"I just moved to London. Find me early-stage teams obsessed with systems thinking, biology, or frontier technology."',
                    "We're building a research-heavy product. Find people who care about depth, rigor, and long-term thinking.",
                  ].map((q, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.15 }}
                      whileHover={{ x: 4, backgroundColor: "rgba(217, 70, 239, 0.1)" }}
                      className="p-3 rounded-lg bg-fuchsia-500/5 border border-fuchsia-500/10 text-sm text-fuchsia-300 italic cursor-default transition-colors"
                    >
                      {q}
                    </motion.div>
                  ))}
                </div>

                <p className="text-white font-semibold text-sm">Ellaris translates intent into discovery.</p>
              </AnimatedCard>

              {/* Deep Profiles */}
              <AnimatedCard className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden hover:border-[#6495ED]/30 hover:shadow-xl transition-all duration-500">
                <div className="absolute bottom-0 right-0 w-36 h-36 bg-[#6495ED]/10 rounded-full blur-[60px]" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#6495ED]/15 border border-[#6495ED]/30 flex items-center justify-center text-lg shadow-lg shadow-[#6495ED]/10">
                      🧬
                    </div>
                    <h3 className="text-xl font-bold text-[#6495ED]">Deep Profiles, Not Resumes</h3>
                  </div>

                  <p className="text-white/60 leading-relaxed mb-6">
                    Ellaris profiles are <strong className="text-white">rich, living representations</strong>, not
                    static CVs. Matching happens at the level of essence, not credentials.
                  </p>

                  <div className="space-y-4">
                    <div className="border-l-[3px] border-fuchsia-500/50 pl-5 py-1 bg-gradient-to-r from-fuchsia-500/5 to-transparent">
                      <p className="text-[11px] font-bold text-fuchsia-400 tracking-widest uppercase mb-1">
                        For Individuals
                      </p>
                      <p className="text-sm text-white/70">
                        Values, motivations, interests, long-term goals, passions, curiosities, beliefs, working style
                        and preferences.
                      </p>
                    </div>

                    <div className="border-l-[3px] border-[#6495ED]/50 pl-5 py-1 bg-gradient-to-r from-[#6495ED]/5 to-transparent">
                      <p className="text-[11px] font-bold text-[#6495ED] tracking-widest uppercase mb-1">
                        For Organizations
                      </p>
                      <p className="text-sm text-white/70">
                        Mission and story, cultural principles, how work actually feels day to day, and what kind of
                        humans thrive there.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/5 text-center">
                    <p className="text-sm text-white font-medium italic opacity-90">
                      Matching happens at the level of essence, not credentials.
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            </div>

            {/* Grid: Games & Growth */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Games Card */}
              <AnimatedCard className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden hover:border-fuchsia-500/30 hover:shadow-xl transition-all duration-500">
                <div className="absolute top-0 left-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-[60px] -translate-x-1/2 -translate-y-1/2" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-fuchsia-500/15 border border-fuchsia-500/30 flex items-center justify-center text-xl shadow-lg shadow-fuchsia-500/10">
                      🎮
                    </div>
                    <h3 className="text-xl font-bold">Collaborative Experiences & Games</h3>
                  </div>

                  <p className="text-white/60 leading-relaxed mb-5">
                    Ellaris includes a growing suite of{" "}
                    <strong className="text-white">collaborative games and play-based experiences</strong> designed for
                    teams and workplaces of the future.
                  </p>

                  <div className="mb-5">
                    <p className="text-[11px] font-bold text-fuchsia-400 tracking-wider uppercase mb-3">
                      These experiences help:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Build trust and rapport",
                        "Surface working styles and strengths",
                        "Encourage creativity and idea generation",
                        "Make teams more human, bonded, and alive",
                      ].map((text, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start gap-3 text-sm text-white/80"
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                          <motion.span 
                            className="text-fuchsia-500 mt-0.5"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                          >
                            •
                          </motion.span>
                          {text}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-fuchsia-500/5 border border-fuchsia-500/15 text-center">
                    <p className="text-sm text-fuchsia-300 font-medium italic">
                      We see play as a core mechanism for learning, bonding, and alignment.
                    </p>
                  </div>
                </div>
              </AnimatedCard>

              {/* Growth Card */}
              <AnimatedCard className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden hover:border-[#6495ED]/30 hover:shadow-xl transition-all duration-500">
                <div className="absolute top-0 right-0 w-36 h-36 bg-[#6495ED]/10 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#6495ED]/15 border border-[#6495ED]/30 flex items-center justify-center text-xl shadow-lg shadow-[#6495ED]/10">
                      🌱
                    </div>
                    <h3 className="text-xl font-bold">Growth & Skill Modes</h3>
                  </div>

                  <p className="text-white/60 leading-relaxed mb-5">
                    Ellaris includes structured growth modules designed for the future of work, shifting the focus from
                    paper credentials to human depth.
                  </p>

                  <div className="mb-5">
                    <p className="text-[11px] font-bold text-[#6495ED] tracking-wider mb-3">
                      These sessions focus on:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Communication and collaboration",
                        "Decision-making and judgment",
                        "Creative Thinking",
                        "Leadership",
                        "Self-awareness",
                        "Navigating ambiguity",
                        "complexity",
                        "Developing resilience in a rapidly evolving landscape",
                      ].map((tag, i) => (
                        <AnimatedTag
                          key={i}
                          index={i}
                          className="text-[11px] px-3 py-1.5 bg-[#6495ED]/10 border border-[#6495ED]/20 rounded-lg text-[#6495ED] font-medium"
                        >
                          {tag}
                        </AnimatedTag>
                      ))}
                      <motion.span 
                        className="text-[11px] px-3 py-1.5 text-white/40 italic"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                      >
                        + lots more
                      </motion.span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#6495ED]/5 border border-[#6495ED]/15 text-center">
                    <p className="text-sm text-[#6495ED] font-medium italic leading-relaxed">
                      This goes beyond credentialing - the goal is becoming{" "}
                      <span className="text-white">aligned humans</span> to work with.
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </RevealSection>

        {/* How Ellaris Works */}
        <RevealSection className="mb-16">
          <div className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12 bg-gradient-to-r from-fuchsia-300 via-violet-300 to-[#6495ED] bg-clip-text text-transparent">
              How Ellaris Works
            </h2>

            <div className="max-w-2xl mx-auto text-left">
              {[
                {
                  n: "1",
                  title: "Create a rich profile",
                  body: "Individuals and organizations articulate who they are, what they care about, and where they are headed.",
                },
                {
                  n: "2",
                  title: "Set your bar",
                  body: "Define what alignment actually means to you. Ellaris takes this seriously.",
                },
                {
                  n: "3",
                  title: "Receive curated matches",
                  body: "Only high-confidence, mutual matches are surfaced.",
                },
                {
                  n: "4",
                  title: "Explore together",
                  body: "Use conversations, collaborative experiences, and shared activities to sense real fit.",
                },
                {
                  n: "5",
                  title: "Build from alignment",
                  body: "Teams form around belief, energy, and purpose, not just opportunity.",
                },
              ].map((step, idx) => {
                const isHovered = hoverIdx === idx
                const progressWidth = `${(idx + 1) * 20}%`

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    onMouseEnter={() => setHoverIdx(idx)}
                    onMouseLeave={() => setHoverIdx(null)}
                    className={`flex gap-5 relative cursor-pointer rounded-xl p-3 -mx-3 transition-colors duration-300 ${isHovered ? "bg-violet-500/5" : ""}`}
                  >
                    <div className="flex flex-col items-center">
                      <motion.div
                        className={`w-9 h-9 rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-[#6495ED] flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-lg transition-all duration-300 ${isHovered ? "scale-110 shadow-violet-500/40" : ""}`}
                        animate={isHovered ? { rotate: [0, 10, -10, 0] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        {step.n}
                      </motion.div>
                      {idx < 4 && (
                        <motion.div
                          className="w-px flex-1 my-1.5 bg-violet-500/20"
                          animate={{ 
                            backgroundColor: isHovered ? "rgb(139 92 246)" : "rgba(139, 92, 246, 0.2)" 
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>

                    <div className={`pb-8 pt-1 flex-1 relative ${idx === 4 ? "pb-2" : ""}`}>
                      <p
                        className={`font-bold mb-1 transition-colors duration-300 ${isHovered ? "text-violet-300" : "text-white"}`}
                      >
                        {step.title}
                      </p>
                      <p
                        className={`text-sm leading-relaxed transition-colors duration-300 ${isHovered ? "text-white/70" : "text-white/50"}`}
                      >
                        {step.body}
                      </p>

                      <div className="absolute bottom-2 left-0 right-0 h-0.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-[#6495ED] rounded-full"
                          initial={{ width: "0%" }}
                          animate={{ width: isHovered ? progressWidth : "0%" }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </RevealSection>

        {/* Thesis & North Star */}
        <RevealSection className="mb-16">
          <div className="relative p-8 md:p-16 rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-transparent overflow-hidden text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px] -translate-y-1/2" />

            <div className="relative max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10 bg-gradient-to-r from-fuchsia-300 via-violet-300 to-[#6495ED] bg-clip-text text-transparent">
                The Ellaris Thesis
              </h2>

              <motion.p 
                className="text-xl md:text-2xl mb-8 text-white/80 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                In the coming world:
                <br />
                <motion.strong 
                  className="text-white inline-block"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Skills will be abundant, Tools will be cheap, and Distribution will be easy.
                </motion.strong>
              </motion.p>

              <p className="text-lg text-white/60 mb-12 leading-relaxed max-w-3xl mx-auto">
                The real moat will be:{" "}
                <strong className="text-violet-300">
                  Who you are, What you care about, and Who you choose to build with.
                </strong>
                <br />
                <br />
                Ellaris is built for that world. It is an attempt to redesign work around meaning, fit, and human
                potential, rather than efficiency or productivity or pure skills fit.
              </p>

              <div className="p-8 md:p-10 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-fuchsia-300 via-violet-300 to-[#6495ED] bg-clip-text text-transparent">
                  The North Star
                </h3>
                <p className="text-white/70 leading-relaxed max-w-2xl mx-auto">
                  Ellaris takes its name from Polaris, the North Star. When old maps fail, you need orientation. Ellaris
                  exists to help people and organizations find their direction, their alignment, and their place in a
                  rapidly changing world. Not faster hiring but better matching. Not more productivity but more
                  meaningful work.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>

        {/* Footer / Closing */}
        <RevealSection>
          <div className="relative p-8 md:p-16 rounded-3xl border border-[#6495ED]/20 bg-white/[0.015] backdrop-blur-xl overflow-hidden text-center">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6495ED]/10 rounded-full blur-[150px] translate-y-1/2" />

            <div className="relative">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 bg-gradient-to-r from-fuchsia-300 via-violet-300 to-[#6495ED] bg-clip-text text-transparent">
                A Quiet Ambition
              </h3>

              <p className="text-white/60 leading-relaxed max-w-3xl mx-auto mb-6">
                Ellaris is not trying to replace everything overnight. We are making a long-term bet on a better future
                of work. One where people love what they do, love who they do it with, and feel that their effort
                actually matters.
              </p>

              <p className="text-white/60 leading-relaxed max-w-3xl mx-auto mb-12">
                It is one piece of a larger vision:{" "}
                <strong className="text-violet-200">
                  Technology in the service of a life well lived and fully actualized.
                </strong>
              </p>

              <motion.p 
                className="text-xl md:text-2xl font-bold leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <ShimmerText>
                  That is Ellaris, and we invite you to join us in shaping the new world of purposeful work.
                </ShimmerText>
              </motion.p>
            </div>
          </div>
        </RevealSection>
      </div>
    </div>
  )
}
