import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

export default function FeaturesPage() {
  const backgroundGradient = {
    background: 'linear-gradient(to bottom, #060014, #0c0024)',
  };

  const [activeTab, setActiveTab] = useState('Connection');
  const tabs = ['Connection', 'Relationship', 'Self Relationship'];

  const featureCards = [
    {
      title: '🧭 Find Your People – Across Love, Leisure & Purpose',
      features: [
        `Not just dating. Not just friends. Not just collaborations. Elinity is your compass for all meaningful human connection:
🔥 Romantic matches for long-term, intentional relationships
🌈 Friends, travel companions, hobby buddies, adventure mates
🚀 Co-founders, collaborators, creators, researchers, builders`,
        `With natural language search, AI-curated matches, and deep user modeling, Elinity doesn’t flood you with options. It shows you only the people who truly align—with your vibe, values, and vision.`
      ]
    },
    {
      title: 'Relationship Building Suite – Grow Deeper, Together',
      features: [
        `Meeting is just the beginning.
Now build the relationship your heart craves.
• Connection Rituals & Streaks – daily nudges to stay present and connected
• Relationship Dashboard – intentions, memories, growth markers, health visualizations
• Conversation Guides – from fun daily questions to deep, healing dialogues
• Therapy & Coaching Modes – voice or text sessions, personalized insights, action points
• AI Mediation & Relationship Ally – an AI that knows both of you, evolves with you, and helps you thrive

Whether you’re in love, rebuilding trust, or just want to keep the spark alive, Elinity gives you the tools to go deeper—every single day.`
      ]
    },
    {
      title: 'Connection Games Suite – Play Your Way into Bonding',
      features: [
        `Forget small talk.
Build connection through curated games, spontaneous fun, and shared joy.
• Voice-based or chat-based games
• Icebreakers that actually work
• Customizable experiences for romantic dates, friend nights, or group play
• Design your own games and share with others

Laughter. Vulnerability. Surprise. Joy.
Games in Elinity aren’t distractions.
They’re the magic glue that makes people fall in love with life—and each other.`
      ]
    },
    {
      title: 'Self-Connection Suite – Know Yourself, Grow Yourself',
      features: [
        `Every great relationship starts with the one you have with yourself.
• Smart Journal & Voice Journal – AI-supported reflection, insight, and growth
• Guided Socratic Dialogues – voice chat modules for self-awareness and skill-building
• Meditations, visualizations, moodboards – tools to integrate and celebrate your inner world
• Your Personal AI Coach/Therapist – always present, always evolving with you

Your Elinity AI is a lifelong companion—one that learns you, grows with you, and helps you become who you’re meant to be.`
      ]
    }
  ];

  const getCardGradient = (index) => {
    return [1, 5].includes(index)
      ? 'from-[#28004d] via-[#3e005c] to-[#00001a]'
      : 'from-[#1e2d5c] via-[#0f1a3c] to-[#00051c]';
  };

  return (
    <div style={backgroundGradient} className="min-h-screen text-white p-8">
      <div className="max-w-[1380px] mx-auto">
        {/* Heading */}
        <div className="flex items-center justify-between mb-12 flex-col lg:flex-row gap-6">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-fuchsia-400 to-purple-700 text-transparent bg-clip-text text-center lg:text-left">
            ✨ Core Highlights{' '}
            <span className="bg-gradient-to-r from-white via-fuchsia-400 to-purple-700 text-transparent bg-clip-text">
              Why Elinity is Unlike Anything Else
            </span>
          </h1>

          {/* Tabs */}
          <div className="bg-[#0f1a3c] rounded-full p-1 flex border border-[#1e2d5c]">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-full transition-colors duration-300 text-sm font-medium ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-[#1e2d5c] via-[#0f1a3c] to-[#00051c] text-white'
                    : 'text-indigo-200 hover:bg-[#1e2d5c]'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Render 8 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }, (_, index) => {
            const card = featureCards[index % featureCards.length];
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${getCardGradient(index)} rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-indigo-400/30 transition-shadow duration-300`}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-white">{card.title}</h2>
                  <ChevronRight className="text-indigo-200" />
                </div>

                {/* Features */}
                <div className="flex-grow">
                  {card.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex mb-4 last:mb-0">
                      <div className="mr-2 mt-1.5">
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                      </div>
                      <p className="text-sm text-indigo-100 whitespace-pre-line">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button className="mt-4 bg-white text-[#1e2d5c] hover:bg-indigo-100 px-4 py-2 rounded-md text-sm font-semibold self-end transition duration-300 shadow-md hover:shadow-indigo-300">
                  Explore More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
