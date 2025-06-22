import { useState } from 'react';

const purpleGradient = {
  background: 'linear-gradient(to bottom, #060014, #0c0024)',
};

export default function ElinityScreen() {
  return (
    <div style={purpleGradient} className="min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-5xl font-bold mb-16 mt-8">
          What makes{' '}
          <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
            Elinity
          </span>
          <br />
          Special
        </h1>

        {/* First row of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FeatureCard
            number="1"
            title="One Platform. Every Kind of Connection."
            content={
              <>
                <p className="mb-4">
                  Unlike most apps that separate romantic relationships, leisure and friendships, collaboration and work, or growth,
                </p>
                <p className="mb-4 font-bold">
                  Elinity brings it all together into one beautifully unified experience.
                </p>
                <p className="mb-4">You can toggle between:</p>
                <ul className="list-disc pl-5 mb-4">
                  <li className="mb-2">Romantic connections</li>
                  <li>Leisure & social connections</li>
                  <li>Purposeful collaborations</li>
                </ul>
                <p className="mb-4">All in one profile. One feed. One evolving self. Because humans are complex. Your social universe should be, too.</p>

              </>
            }
          />
          <FeatureCard
            number="2"
            title="Deep Psychometric + Behavioral + Psychological Matching"
            content={
              <>
                <p className="mb-4">
                  Elinity doesn’t match you on shallow traits. It learns who you are—deeply.
                </p>
                <p className="mb-4">
                  From your communication style and attachment patterns, to your emotional needs, goals, and energies, Elinity uses advanced psychometric, psychological, and behavioral science,
 paired with emotionally intelligent AI—to match you with deep compatibility.
                </p>
                <p className="mb-4">
                  Real alignment. Not just surface similarity.
                </p>
              </>
            }
          />
        </div>

        {/* Second row of cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            number="3"
            title="Emotionally Intelligent, Personalized AI"
            content={
              <>
                <p className="mb-4">This isn't just any AI.</p>
                <p className="mb-4">
                  This isn’t just any AI. This is your Elinity AI—trained on psychology, relational science, communication theory, and self-growth practices. And most importantly, it will be training on you, learning from you. 
                </p>
              </>
            }
          />
          <FeatureCard
            number="4"
            title="The Most Fun & Meaningful Connection Tools in the World"
            content={
              <>
                <p className="mb-4">This is not a place for dry bios and awkward chats.</p>
                <p className="mb-4">
                  Elinity is a vibrant, dynamic playground for connection—with a full suite of tools to explore. Like our connection games suite, relationship building suite, and more.
                </p>
              </>
            }
          />
          <FeatureCard
            number="5"
            title="Designed for Real Humans, Not Algorithms or NPCs"
            content={
              <>
                <p className="mb-4">
                  Because what we’re building isn’t just an app—it’s a new culture of connection. And we protect it with everything we’ve got.
                </p>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ number, title, content }) {
  return (
    <div className="rounded-xl p-6 h-full bg-gradient-to-br from-[#2a004f] via-[#3f0076] to-[#5e00a5] backdrop-blur-md shadow-md border border-purple-700 text-white flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-fuchsia-500 to-violet-400 bg-clip-text ">
          <span className="mr-2">{number}.</span>
          {title}
        </h2>
        <div className="text-sm mb-4 text-white">{content}</div>
      </div>
      <div className="flex justify-end">
        <button className="bg-gradient-to-r from-fuchsia-600 to-violet-500 hover:from-fuchsia-500 hover:to-violet-400 text-white rounded-md px-4 py-2 flex items-center transition-all">
          See more
          <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
