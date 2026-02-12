import { useState } from 'react';

const purpleGradient = {
  background: 'linear-gradient(to bottom, #060014, #0c0024)',
};

export default function ElinityScreen() {
  return (
    <div style={purpleGradient} className="min-h-screen text-white p-8 lowercase">
      <div className="max-w-7xl mx-auto">
        {/* heading */}
        <h1 className="text-5xl font-bold mb-16 mt-8">
          what makes{' '}
          <span className="bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
            elinity
          </span>
          <br />
          special (and why it exists)
        </h1>

        <div>
          <p className="text-xl text-neutral-500 max-w-3xl leading-relaxed mb-12">
            elinity exists because connection is not a single problem to be solved.
            it’s a lifelong practice. finding the right person is only the beginning.
            the real magic happens when people have the tools, self-awareness, emotional skill, and shared joy to build something lasting.
            that belief shapes everything we’ve built.
          </p>
        </div>

        {/* first row of cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FeatureCard
            number="1"
            title="one platform for every kind of connection."
            content={
              <>
                <div className="max-w-lg mx-auto p-6 bg-neutral-900/40 rounded-2xl border border-white/5 text-neutral-300">
                  <p className="text-sm mb-4 leading-relaxed">
                    most platforms slice your life into categories. one app for dating. 
                    another for friends. another for growth. <span className="text-white font-medium">real life doesn’t work that way.</span>
                  </p>

                  <div className="space-y-4 border-l border-fuchsia-500/50 pl-4">
                    <p className="text-sm text-neutral-200">
                      elinity brings romantic, social, and purposeful collaborations into 
                      <span className="text-white"> one unified experience.</span>
                    </p>

                    <div className="text-lg font-bold text-white tracking-tight">
                      <p>one evolving self.</p>
                      <p className="opacity-60 text-base">three profiles. one universe.</p>
                    </div>

                    <p className="text-[12px] text-neutral-500 italic leading-snug">
                      adapting as you seek love, friends, or collaborators across different seasons.
                    </p>
                  </div>
                </div>
              </>
            }
          />
          <FeatureCard
            number="2"
            title="deep matching, not shallow sorting"
            content={
              <>
                <div className="max-w-lg mx-auto p-6 bg-neutral-900/40 rounded-2xl border border-white/5 text-neutral-300">
                  {/* <h2 className="text-lg font-bold text-white mb-2">deep matching, not shallow sorting</h2> */}
                  <p className="text-sm text-neutral-400 mb-6">learning how you think, feel, and move through the world.</p>

                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-fuchsia-500 rounded-full" />
                      <span>values and goals</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-fuchsia-500 rounded-full" />
                      <span>communication and attachment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-fuchsia-500 rounded-full" />
                      <span>energy, rhythm, and intent</span>
                    </li>
                  </ul>

                  <div className="mt-8 pt-4 border-t border-white/5">
                    <p className="text-[11px] tracking-[0.2em] text-neutral-500">
                      people are not commodities. <span className="text-white">they’re worlds.</span>
                    </p>
                  </div>
                </div>
              </>
            }
          />
        </div>

        {/* second row of cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            number="3"
            title="emotionally intelligent, personalized ai"
            content={
              <>
                <div className="max-w-md mx-auto p-5 bg-neutral-900/40 rounded-xl border border-white/5 text-neutral-300">
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-sm font-bold text-white tracking-tight">
                        {/* emotionally intelligent ai that works for you */}
                      </h3>
                    </div>
                    <p className="text-[11px] text-fuchsia-400 font-medium">
                      elinity’s ai, lumi, is here to amplify human connection.
                    </p>
                  </div>

                  <p className="text-xs leading-relaxed text-neutral-400 mb-4">
                    it’s here to help you actualize your relationship potential. 
                    trained on psychology, relational science, and communication theory, 
                    lumi learns from you and alongside you.
                  </p>

                  <div className="space-y-1 text-[12px] text-neutral-200 border-l border-white/10 pl-3 mb-4">
                    <p>• understand yourself more clearly</p>
                    <p>• connect more thoughtfully</p>
                    <p>• communicate more honestly</p>
                    <p>• build relationships with intention</p>
                    <p>• infuse life with wonder, delight, and curiosity</p>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <p className="text-[11px] leading-relaxed text-neutral-500 italic">
                      a quiet companion for life design and relationship flourishing. 
                      one that understands your values, patterns, and fears to help you 
                      make better choices without ever forcing them.
                    </p>
                  </div>
                </div>
              </>
            }
          />
          <FeatureCard
            number="4"
            title="tools for both finding and flourishing"
            content={
              <>
                    <br />
                <div className="max-w-md mx-auto p-5 bg-neutral-900/40 rounded-xl border border-white/5 text-neutral-300">
                  <div className="mb-4">
                    <h3 className="text-sm font-bold text-white mb-1">
                      {/* tools for both finding and flourishing */}
                    </h3>
                    <p className="text-[11px] text-neutral-500 italic">
                      most platforms stop at the introduction.
                    </p>
                  </div>

                  <div className="mb-4 text-xs leading-relaxed">
                    <p className="text-white font-medium">elinity doesn’t.</p>
                    <p className="text-neutral-400">
                      because meeting someone is easy. building something meaningful is not.
                    </p>
                  </div>

                  <div className="space-y-2 border-l border-fuchsia-500/30 pl-3 mb-4">
                    <p className="text-[10px] text-neutral-500 tracking-widest font-semibold uppercase">the suite</p>
                    <ul className="text-[12px] space-y-1 text-neutral-200">
                      <li>• playful and deep connection games</li>
                      <li>• relationship-building experiences</li>
                      <li>• reflection and journaling</li>
                      <li>• skill-building for eq, listening, and presence</li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <p className="text-[11px] leading-relaxed text-neutral-400">
                      whether it’s a partner, a friend, a family member, or yourself, 
                      elinity helps relationships <span className="text-white">grow</span> instead of stagnate or fade away.
                    </p>
                  </div>
                  </div>
              </>
            }
          />
          <FeatureCard
            number="5"
            title="designed for real humans, not algorithms or npcs"
            content={
              <>
                <div className="max-w-md mx-auto p-5 bg-neutral-900/40 rounded-xl border border-white/5 text-neutral-300">
                  <div className="mb-4">
                    <h3 className="text-sm font-bold text-white mb-1">
                      {/* designed for real humans, not engagement loops */}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs leading-relaxed text-neutral-400">
                      elinity is not optimized for endless scrolling, shallow dopamine, or algorithmic noise. 
                      it’s designed for people who care about depth. about presence. about meaning.
                    </p>

                    <div className="space-y-1 text-[11px] leading-relaxed border-l border-fuchsia-500/30 pl-3">
                      <p>we are building more than an app.</p>
                      <p className="text-neutral-200">we’re building a culture of connection, a vehicle for transformation.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-1 text-[11px] text-neutral-400 italic">
                      <p>• quality matters more than quantity</p>
                      <p>• alignment beats attention</p>
                      <p>• relationships are nurtured, not gamified</p>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5">
                    <p className="text-[11px] text-white/70">
                      that’s what makes elinity special. and that’s why it exists.
                    </p>
                  </div>
                </div>
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
    <div className="rounded-xl p-6 h-full bg-gradient-to-br from-[#2a004f] via-[#3f0076] to-[#5e00a5] backdrop-blur-md shadow-md border border-purple-700 text-white flex flex-col">
      <div>
        <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-fuchsia-500 to-violet-400 bg-clip-text ">
          <span className="mr-2">{number}.</span>
          {title}
        </h2>
        <div className="text-sm text-white">{content}</div>
      </div>
    </div>
  );
}