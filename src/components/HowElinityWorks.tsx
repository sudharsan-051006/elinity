import React from 'react';

export default function ElinityWorks() {
  const purpleGradient = {
    background: 'linear-gradient(to bottom, #060014, #140035)',
  };

  const steps = [
    {
      number: "01",
      title: "create your deep profile",
      description: `elinity begins by helping you express who you really are.
it’s an onboarding journey, not a form.
      
you’ll share things like:

- what you’re here for right now: love, friendship, collaboration, growth, or a mix
- your values, beliefs, rhythms, and lifestyle
- your passions, curiosities, quirks, and edges
- how you communicate, connect, and attach
- what makes you feel safe, excited, seen, and alive

the result:
a living, breathing profile that evolves with you.
not just what you do. but who you are.
representing not just what you do.
but who you are becoming.`,
      image: "/workimg1.png",
    },
    {
      number: "02",
      title: "let elinity's ai understand you",
      description: `behind elinity is lumi, your emotionally intelligent ai companion.
lumi doesn’t rush to match. it listens first.

by combining:
- psychometrics
- behavioral modeling
- psychological and emotional profiling
- ai-powered self and relationship insight tools

to help you connect with people who truly resonate with you—and yourself.
you don’t just match. you align.`,
      image: "/workimg2.png",
    },
    {
      number: "03",
      title: "choose your intention",
      description: `connection looks different in different seasons.
      
so you choose the mode you’re in:
💕 romantic connection
🧩 leisure & friendship
🚀 collaboration & projects
🌱 relationship deepening
🪞 self-relationship and growth

you can toggle modes on or off anytime.
romantic mode can be paused once you’ve found your person.
leisure and collaboration can run alongside everything else.
your life isn’t one-dimensional. elinity isn’t either.
`,
      image: "/workimg3.png",
    },
    {
      number: "04",
      title: "meet only the people who cross your bar",
      description: `this is again where elinity is radically different.
we don’t show you endless profiles.
we don’t ask you to swipe through noise.
lumi only introduces someone if they cross your compatibility threshold.
by default, that bar is high. you can raise or lower it.

if no one crosses the bar, you see no one.
simple. respectful. intentional.

when a match happens:

- both people are told they’ve been intentionally recommended
- alignment exists on both sides
- consent and readiness matter

this alone changes how connection feels.`,
      image: "/workimg4.png",
    },
    { 
      number: "05",
      title: "connect with ease and intention",
      description: `once, there’s a mutual yes, elinity helps you take the next step naturally.

through:
- gentle icebreakers
- vibe checks
- prompts that actually spark conversation
- games and rituals that remove awkwardness

no forced small talk.
no guessing what to say.
      
just momentum, with care.`,
      image: "/workimg3.png",
    },
    { 
      number: "06",
      title: "grow yourself and your relationships",
      description: `elinity doesn’t disappear once you meet someone.

this is where it really begins.

you get access to a rich suite of tools for:
- deepening romantic relationships
- strengthening friendships and family bonds
- building emotional intelligence and communication skills
- reflection, journaling, and self-exploration
- playful connection through games and shared experiences

because great relationships don’t run on autopilot.
they’re designed, tended, repaired, and celebrated.
elinity is not just about meeting the right people.
it’s about becoming the kind of person who builds beautiful relationships, again and again.`,
      image: "/workimg5.png",
    },
  ];

  return (
    <div
      className="min-h-screen text-white py-20 px-4 md:px-12 lg:px-20 lowercase"
      style={purpleGradient}
    >
      {/* header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          <span className="text-white">how </span>
          <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
            elinity works
          </span>
        </h1>
        <div className="text-sm md:text-base max-w-3xl mx-auto text-gray-300">
          <p>
            from finding your purpose or your people, to building boundless relationships —
            that actually grows, elinity is designed to move with you through every phase of connection.
          </p>
          <div className="max-w-md mx-auto p-5">
            <p style={{ color: "white", fontSize: "20px", fontWeight: "600", letterSpacing: "1px", marginBottom: "8px" }}> not in a rush.</p>
            <p style={{ color: "#e0e0e0", fontSize: "20px", fontWeight: "600", letterSpacing: "1px", marginBottom: "8px" }}> not randomly.</p>
            <p style={{ color: "#ffffff", fontSize: "22px", fontWeight: "700", letterSpacing: "1.2px", marginTop: "10px" }}>and never below your bar.</p>
          </div>
        </div>
      </div>

      {/* steps cards */}
      <div className="max-w-6xl mx-auto space-y-16">
        {steps.map((step, index) => (
          <div key={index} className="space-y-8">
            <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-xl bg-gradient-to-r from-[#1a0040]/90 via-[#0d003f]/85 to-[#001a4d]/80 backdrop-blur-xl border border-gray-700">
              {/* image section */}
              <div className="md:w-1/2 p-4 md:p-6 lg:p-8 flex items-center justify-center">
                <img
                  src={step.image}
                  alt={`step ${step.number}`}
                  className="rounded-xl w-[90%] max-h-[300px] object-contain"
                />
              </div>

              {/* text section */}
              <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                <div className="text-lg text-white mb-2 font-semibold">{step.number}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 whitespace-pre-line">
                  {step.description}
                </p>
              </div>
            </div>

            {/* divider line */}
            {index !== steps.length - 1 && (
              <div className="border-t border-gray-600 w-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}