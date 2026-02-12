import { useState } from 'react';
import { ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

export default function FeaturesPage() {
  const backgroundGradient = {
    background: 'linear-gradient(to bottom, #060014, #0c0024)',
  };

  const [isExpanded, setIsExpanded] = useState(false);
  
  const featureCards = [
    {
      title: 'curated recommendations (no browsing fatigue)',
      features: [
          `we connect you in a radically different way.
          you don’t scroll endlessly.
          you don’t swipe aimlessly. \n `,
          `we only show you people who cross your bar.
          if no one crosses it, we show you no one. simple.\n`,
          `every recommendation is vetted by our hand-designed matching system
          powered by ai that understands you deeply, 
          your personality, values, goals, preferences, and direction of life\n
          lumi also helps with vibe checks and ice breakers\n`,
          `so you never waste time meeting someone you wouldn’t actually gel with
          starting conversations won’t feel awkward or boring again`,
        ]
    },
    {
      title: 'prompt your way to people',
      features: [
        `sometimes you don’t want “suggestions”.
          you want someone specific.`,
         `just tell elinity what you’re looking for.\n
“i just moved to nyc. find me my kind of people. \n
 into ai/ml, tennis, hiking, astrophysics, art, late-night conversations.”
done. \n
`,`elinity translates human intent into matching logic
and lumi helps narrow, refine, and sense-check the results`
      ]
    },
    {
      title: 'voice journaling (solo or together)',
      features: [
        `this is one of our core experiences.
        `,`talk it out. don’t type it out.`,
        `voice journaling makes reflection:
• easier
• more natural
• more emotionally honest
`,`you can:
• journal solo
• journal as a couple
• journal about relationships, moods, patterns, growth
`,`lumi listens, reflects, and offers action items and insights,
 without judgment. without therapy-speak
 `      ]
    },
    {
      title: 'your life book',
      features: [
        `think of this as your:
          • visual journal
          • highlights book
          • private instagram
          • personal memory garden
          all in one.
          `,`you can add:
          • add photos, videos, thoughts, voice notes.
          • keep some entries just for you.
          • share others with friends, family, or your partner
          `,`they can respond. reflect. add their thoughts.
          your life, but richer. deeper. intentional.
          `
      ]
    }, 
    {
      title: 'connection games (yes, actually good ones)',
      features: [
        `connection doesn’t have to be serious all the time.
          it can be playful. curious. surprising.
          `,`we’ve built a growing suite of connection games:
          • some deep and long-form.
          • some light and funny.
          • some for self-exploration.
          • some for couples.
          • some for friendships and families.
          `,`they’re designed to create:
          • laughter.
          • some light and funny.
          • emotional closeness.
          • unexpected conversations.
          • real moments.
          `
      ]
    }, 
    {
      title: 'relationship home (your relationship os)',
      features: [
        `this is where everything comes together.
          `,`your relationship home includes:
          • streaks and gentle nudges.
          • reminders and rituals.
          • daily relationship cards.
          • shared life book.
          • connection games.
          • skill-building sessions
          • prompt-based experiences, like couples visualization.
          it’s a living space for your relationships.
          `
      ]
    }, 
    {
      title: 'skill learning + growth sessions',
      features: [
        `relationships are deepened with skills and skills can be learned.
          `,`lumi currently offers 90 guided skill modules with more already on the way.`,
          `these help you build skills like:
          • listening.
          • emotional awareness.
          • boundaries.
          • communication.
          • intimacy.
          • self-understanding.
          • reslience. 
          `,`sessions adapt to you over timeand evolve as you do`
      ]
    }, 
    {
      title: 'matching beyond romance',
      features: [
        `elinity isn’t just for love..
          `,`we offer high-quality curated matching for:
          • leisure, travel, hobbies and friendships.
          • collaborations, passion projects and creative projects. 
          `,`each with different matching logic
          because there is so much flavour and richness we can add with platonic relationships.
          `
      ]
    }
  ];

  const visibleCards = isExpanded ? featureCards : featureCards.slice(0, 4);

  return (
    <div style={backgroundGradient} className="min-h-screen text-white p-8 lowercase">
      <div className="max-w-[1380px] mx-auto">
        <div className="flex items-center justify-between mb-12 flex-col lg:flex-row gap-6">
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-white via-fuchsia-400 to-purple-700 text-transparent bg-clip-text">
                how we help you live your best social life
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light">
              some core experiences, modes, and features of 
              <span className="bg-gradient-to-r from-white via-fuchsia-400 to-purple-700 text-transparent bg-clip-text font-semibold"> elinity v1.0</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 flex flex-col shadow-xl transition-all duration-500 hover:bg-white/10 hover:border-white/20"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-fuchsia-500/10 blur-2xl group-hover:bg-fuchsia-500/20 transition-all duration-500" />
              
              <div className="flex justify-between items-start mb-6">
                {/* --- card headline with brand gradient --- */}
                <h2 className="text-lg font-bold pr-2">
                  <span className="bg-gradient-to-r from-white via-fuchsia-400 to-purple-700 text-transparent bg-clip-text">
                    {card.title}
                  </span>
                </h2>
                <div className="shrink-0 p-1 rounded-md bg-white/5 border border-white/10">
                  <ChevronRight size={16} className="text-fuchsia-400" />
                </div>
              </div>

              <div className="flex-grow space-y-4">
                {card.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <div className="mr-3 mt-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-fuchsia-500 shadow-[0_0_8px_rgba(217,70,239,0.8)]"></div>
                    </div>
                    <p className="text-sm text-indigo-100/80 font-light leading-relaxed whitespace-pre-line">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 hover:border-fuchsia-500/40 transition-all duration-300 text-sm font-medium shadow-xl"
          >
            <span className="bg-gradient-to-r from-white via-fuchsia-400 to-purple-700 text-transparent bg-clip-text">
                {isExpanded ? 'show less' : 'explore all experiences'}
            </span>
            <div className="text-fuchsia-400">
                {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}