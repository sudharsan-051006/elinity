import React from 'react';

export default function ElinityWorks() {
  const purpleGradient = {
    background: 'linear-gradient(to bottom, #060014, #140035)',
  };

  const steps = [
    {
      number: "01",
      title: "Create Your Deep Profile",
      description: `Elinity guides you through a beautifully designed, emotionally intelligent onboarding journey.
You’ll share:
- Your goals — love, friendship, collaboration, or all
- Your values, beliefs, rhythms, and lifestyle
- Your passions, quirks, emotional landscape
- Your attachment style, communication style, and more

The result: a living, breathing profile that evolves with you.
Not just what you do. But who you are.`,
      image: "/workimg1.png",
    },
    {
      number: "02",
      title: "Let Elinity's AI Understand You",
      description: `Our Emotionally Intelligent AI isn’t just a search engine.
It becomes your personal matcher, social coach, and growth ally.

Elinity uses a fusion of:
- Psychometrics
- Behavioral modeling
- Psychological and emotional profiling
- AI-powered self and relationship insight tools

To help you connect with people who truly resonate with you—and yourself.
You don’t just match. You align.`,
      image: "/workimg2.png",
    },
    {
      number: "03",
      title: "Find Who You're Meant to Meet",
      description: `Choose your intention:
💕 Romantic relationship
🧩 Leisure & friendship
🚀 Collaboration & projects
🌱 Relationship deepening
🪞 Self-relationship and growth

Elinity then introduces you to people based on true compatibility—not just looks or location.

Filter by:
- Depth of alignment
- Shared values and goals
- Emotional and energetic compatibility
- Availability, personality, communication preferences

You’ll be shocked at how seen and excited you feel.`,
      image: "/workimg3.png",
    },
    {
      number: "04",
      title: "Connect Through Games, Rituals & Prompts",
      description: `Trust our deep social tech (our secret sauce!)
From what you learned and who you are—enjoy the easy next steps.`,
      image: "/workimg4.png",
    },
    {
      number: "05",
      title: "Grow Yourself & Your Relationships",
      description: `Elinity isn’t just a matching app.
It’s a growth engine for everything human.`,
      image: "/workimg5.png",
    },
  ];

  return (
    <div
      className="min-h-screen text-white py-20 px-4 md:px-12 lg:px-20"
      style={purpleGradient}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          <span className="text-white">How </span>
          <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
            Elinity Works
          </span>
        </h1>
        <p className="text-sm md:text-base max-w-3xl mx-auto text-gray-300">
          From finding your purpose or your people, to building boundless relationships —
          here's how
          <span> Elinity becomes your home for deep human connection, play, growth, and joy.</span>
        </p>
      </div>

      {/* Steps Cards */}
      <div className="max-w-6xl mx-auto space-y-16">
        {steps.map((step, index) => (
          <div key={index} className="space-y-8">
            <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-xl bg-gradient-to-r from-[#1a0040]/90 via-[#0d003f]/85 to-[#001a4d]/80 backdrop-blur-xl border border-gray-700">
              {/* Image Section */}
              <div className="md:w-1/2 p-4 md:p-6 lg:p-8 flex items-center justify-center">
                <img
                  src={step.image}
                  alt={`Step ${step.number}`}
                  className="rounded-xl w-[90%] max-h-[300px] object-contain"
                />
              </div>

              {/* Text Section */}
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

            {/* Divider Line */}
            {index !== steps.length - 1 && (
              <div className="border-t border-gray-600 w-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
