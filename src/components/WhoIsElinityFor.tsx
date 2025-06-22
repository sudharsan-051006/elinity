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
      name: "The Lovers Of Deep Love",
      description: `You don't want to swipe your way through chaos.

You're here for depth, for alignment, for emotional intimacy that grows roots.

Elinity is for those who crave a conscious relationship.
One built not just on chemistry, but on compatibility, communication, growth, and joy.
Because love isn’t random. It’s resonant.
 And you deserve a match that feels like home.`,
    },
    {
      id: 2,
      name: "The Social Soul Expanders and Leisure Lovers ",
      description: `You want more laughter, excitement, fun in your life. 
More movie nights, road trips, hiking plans, book swaps, exotic travels, and adventures.

Whether you've just moved to a new city, started a new chapter, or are craving richer friendships and leisure buddies,
Elinity helps you meet people who feel like instant yeses.
Life’s better with people who get you. Let’s find them.`,
    },
    {
      id: 3,
      name: "The Builders, Dreamers & Collaborators",
      description: `You have a project in your soul. 
Maybe it's a startup. A screenplay. A documentary. A community initiative. A festival. A studio.
You need not just skills, but synergy. Shared purpose. Excitement. Resonance.

Elinity helps you find cofounders, creative collaborators, project partners, researchers, visionaries—
 people who are aligned not just in interest, but in flow, tempo, and heart.
Because building something magical takes more than talent. It takes chemistry, trust, and co-dreaming.`,
    },
    {
      id: 4,
      name: "The Relationship Deepeners",
      description: `You already have great people in your life.
 Now you want to nurture, deepen, and elevate those relationships.
Elinity gives you tools to infuse your bonds—romantic, platonic, familial—with more:
✨ Fun and play
🎯 Intention and reflection
🌿 Growth and repair
💌 Memories and meaning
With the Relationship Suite, you’ll never fall into the autopilot of connection again.
Great relationships don’t happen by accident. Elinity makes it easy to make them amazing.`,
    },
    {
      id: 5,
      name: "0. The Self-Explorers",
      description: `You know that the most important relationship is the one you have with yourself.
You’re committed to becoming more aware, more grounded, more emotionally intelligent, more whole.
Elinity helps you:
Understand your patterns and triggers
Track your emotional and relational growth
Explore your values, beliefs, and love languages
Cultivate joy, purpose, and inner peace
Because the better you know yourself, the better your life—and your relationships—become.`,
    },
  ];

  return (
    <div className="min-h-screen text-white" style={purpleGradient}>
      <div className="max-w-[1380px] mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-400">
              Who is Elinity For
            </span>
          </h1>
          <p className="text-xl mb-2">
            Elinity is for everyone who believes connection is at the heart of a beautiful life.
          </p>
          <p className="text-xl">
            It's for seekers. For builders. For lovers. For feelers. For thinkers. For explorers. For you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-12 px-2 md:px-4">
          {/* First column intro */}
          <div className="sm:col-span-1 lg:col-span-1 flex flex-col justify-center">
            <div className="mb-6">
              <Heart
                size={26}
                className="bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-400 bg-clip-text"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              We serve five core tribes
            </h3>
            <p className="text-xl whitespace-pre-line leading-relaxed text-white">
              And every person who lives in the intersections between them:
            </p>
          </div>

          {/* Tribe cards */}
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
                <p className="text-sm whitespace-pre-line mb-10 leading-relaxed">
                  {tribe.description}
                </p>
              </div>
              <div className="absolute bottom-6 right-6">
                <button className="text-xs px-4 py-2 rounded-md font-semibold border border-white/40 bg-white/10 text-white hover:bg-white/20 backdrop-blur-md transition-all">
                  Explore More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
