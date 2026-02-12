import { Heart } from "lucide-react";

export default function ElinityTribes() {
  const purpleGradient = {
    background: "linear-gradient(to bottom, #09000e, #0f0021)",
  };

  const cardStyle = {
    backgroundImage: `
      radial-gradient(at bottom left, rgba(180, 0, 140, 0.6), transparent 60%),
      linear-gradient(135deg, rgba(84, 0, 255, 0.4), rgba(140, 0, 150, 0.2)),
      url('/back.png')
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 0 24px rgba(255, 255, 255, 0.1)",
  };

  const tribes = [
    {
      id: 1,
      name: "the lovers of deep love",
      description: `you don't want to swipe your way through chaos.

you're here for depth, for alignment, for emotional intimacy that grows roots.

elinity is for those who crave a conscious relationship.
one built not just on chemistry, but on compatibility, communication, growth, and joy.
because love isn’t random. it’s resonant.
and you deserve a match that feels like home.`,
    },
    {
      id: 2,
      name: "the social soul expanders and leisure lovers ",
      description: `you want more laughter in your life, more friendships. more movie nights, road trips, long walks, book swaps, hikes, dinners that stretch late into the night.  
maybe you’ve just moved cities.
maybe you’re in a new chapter.
maybe your circle feels good, but not alive enough.

elinity helps you meet people who feel like instant yeses. people you want to play with, explore with, travel with.
because life expands when it’s shared with the right humans.
`,
    },
    {
      id: 3,
      name: "the builders, dreamers & collaborators",
      description: `you’re carrying a project inside you.
maybe it’s a startup. a screenplay. a research idea. a community. a creative experiment.
you don’t just need skills.
you need synergy. shared purpose. momentum. trust.
elinity helps you find collaborators who align not just on interests,
but on pace, temperament, values, and vision.
because building something meaningful takes more than talent.
it takes chemistry and co-dreaming.
`,
    },
    {
      id: 4,
      name: "the relationship deepeners",
      description: `you already have people you care about deeply, a partner, friends, family.
now you want to nurture those relationships intentionally. not let them drift into autopilot
elinity gives you tools to infuse your bonds with more:
⚫ play and joy, intention and reflection, 
⚫ repair and growth
⚫ memories that actually mean something
great relationships don’t happen by accident.
elinity helps you design them with care.`,
    },
    {
      id: 5,
      name: "the self-explorers",
      description: `you know the most important relationship is the one you have with yourself and you’re committed to knowing yourself better.
⚫ your patterns. ⚫ your triggers.
⚫ your values. ⚫ your desires.
your emotional landscape.
elinity helps you explore your inner world through reflection, journaling, skill-building, and gentle insight.
because the deeper your self-relationship,
the better every other relationship in your life becomes.
`,
    },
  ];

  return (
    <div className="min-h-screen text-white lowercase" style={purpleGradient}>
      <div className="max-w-[1380px] mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-400">
              who is elinity for
            </span>
          </h1>
          <div className="space-y-6 text-white/90">
            <p className="text-xl md:text-2xl leading-relaxed">
              elinity is for those who believe connection sits at the center of a good life—not as a bonus, 
              not as an afterthought, but as the foundation.
            </p>
            
            <p className="text-lg md:text-xl text-fuchsia-400 font-medium tracking-wide">
              for the seekers. the builders. the lovers. the feelers. <br className="hidden md:block" />
              the thinkers. the explorers. <span className="text-white underline underline-offset-8">for you.</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-12 px-2 md:px-4">
          {/* first column intro */}
          <div className="sm:col-span-1 lg:col-span-1 flex flex-col justify-center">
            <div className="mb-6">
              <Heart
                size={26}
                className="bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-400 bg-clip-text"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              we serve five core tribes
            </h3>
            <p className="text-xl whitespace-pre-line leading-relaxed text-white">
              and everyone who moves fluidly between them
            </p>
          </div>

          {/* tribe cards */}
          {tribes.map((tribe) => (
            <div
              key={tribe.id}
              className="rounded-3xl p-6 relative overflow-hidden h-[470px] shadow-lg transition-transform hover:scale-[1.01]"
              style={cardStyle}
            >
              <div className="mt-2">
                <Heart
                  size={20}
                  className="text-transparent bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-400 bg-clip-text"
                />
              </div>
              <div className="mt-4 pr-2">
                <h3 className="text-lg font-bold mb-4">
                  {tribe.id}. {tribe.name}
                </h3>
                <p className="whitespace-pre-line mb-10 leading-relaxed" style={{fontSize:'13px'}}>
                  {tribe.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}