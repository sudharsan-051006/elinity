import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

export default function ElinityTribes() {
  const brandColors = {
    indigo: "#7B3FE4",
    royalBlue: "#3B82F6",
    brightCyan: "#00D2FF",
    darkBg: "#03000a"
  };

  const blueGradient = {
    background: `radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                 linear-gradient(to bottom, #03000a, #05001a)`,
  };

  const cardStyle = {
    backgroundImage: `
      radial-gradient(at bottom left, rgba(0, 210, 255, 0.15), transparent 60%),
      linear-gradient(135deg, rgba(123, 63, 228, 0.1), rgba(59, 130, 246, 0.05))
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    border: "1px solid rgba(123, 63, 228, 0.2)",
    boxShadow: "0 0 40px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255,255,255,0.05)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
  };

  const tribes = [
    {
      id: "❤️‍🔥",
      name: "the lovers of deep love",
      description: `you don't want to swipe your way through chaos.
you’re not here for randomness, games, or surface chemistry that fades fast.
you're here for depth, for alignment, for emotional intimacy that grows roots.

elinity is for those who crave a conscious relationships.
ones built on compatibility, communication, shared values, and real growth.
because love isn’t random. it’s resonant.
and when it’s right, it feels like home.`,
    },
    {
      id: "🤝",
      name: "the social soul expanders and leisure lovers ",
      description: `you want more laughter in your life, more friendships. more movie nights, road trips, long walks, book swaps, hikes, dinners that stretch late into the night.  
maybe you’ve just moved cities.
maybe you’re in a new chapter.
maybe your circle feels good, but not alive enough.

elinity helps you meet people who feel like instant yeses. people you want to play with, explore with, travel with.
because life expands when it’s shared with the right humans.`,
    },
    {
      id: "🚀",
      name: "the builders, dreamers & collaborators",
      description: `you’re carrying a project inside you.
maybe it’s a startup. a screenplay. a research idea. a community. a creative experiment.
you don’t just need skills.
you need synergy. shared purpose. momentum. trust.
elinity helps you find collaborators who align not just on interests,
but on pace, temperament, values, and vision.
because building something meaningful takes more than talent.
it takes chemistry and co-dreaming.`,
    },
    {
      id: "🫂",
      name: "the relationship deepeners",
      description: `you already have people you care about deeply.
now you want to nurture those relationships intentionally.
elinity gives you tools to infuse your bonds with more:
⚫ play and joy
⚫ intention and reflection
⚫ repair and growth
⚫ memories that actually mean something
great relationships don’t happen by accident.
elinity helps you design them with care.`,
    },
    {
      id: "🧘‍♂️",
      name: "the self-explorers",
      description: `you know the most important relationship is the one you have with yourself.
⚫ your patterns. 
⚫ your triggers.
⚫ your values. 
⚫ your desires.
⚫ your emotional landscape.
elinity helps you explore your inner world through reflection, journaling, skill-building, and gentle insight.
because the deeper your self-relationship,
the better every other relationship in your life becomes.`,
    },
  ];

  // Animated wrapper
  const AnimatedCard = ({ children, index }: { children: React.ReactNode; index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setShow(true);
          else setShow(false);
        },
        { threshold: 0.1 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    const directions = [
      "translateX(-120px) rotate(-6deg)",
      "translateX(120px) rotate(6deg)",
      "translateY(120px)",
      "translateX(-80px)",
      "translateX(80px)",
      "translateY(120px)"
    ];

    return (
      <div
        ref={ref}
        className="h-full"
        style={{
          opacity: show ? 1 : 0,
          transform: show
            ? "translate(0px,0px) rotate(0deg)"
            : directions[index % directions.length],
          transition: "all 0.9s cubic-bezier(.23,1,.32,1)",
          height: "100%",
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <div className="min-h-screen text-white lowercase" style={blueGradient}>
      <div className="max-w-[1380px] mx-auto px-4 py-16">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            <span style={{
              background: "linear-gradient(to right, #fff, #3B82F6, #00D2FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              who is elinity for
            </span>
          </h1>

          <div className="space-y-6 text-white/80 mt-6">
            <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-light">
              elinity is for people who believe connection sits at the center of a good life 
              not as a bonus. not as an afterthought. but as the foundation.
            </p>

            <p className="text-lg md:text-xl text-[#00D2FF] font-medium tracking-wide">
              it’s for seekers. for builders. for lovers. for feelers. <br className="hidden md:block"/>
              for thinkers. for explorers. for people who live at the intersections.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">

          {/* First Intro Card */}
          <AnimatedCard index={0}>
            <div className="rounded-3xl p-8 bg-white/[0.02] backdrop-blur-xl border border-white/5 shadow-2xl min-h-[380px] h-full flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7B3FE4]/10 blur-[80px]"></div>
              <div className="mb-6">
                <Heart size={26} className="text-[#3B82F6]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                we serve five core tribes
              </h3>
              <p className="text-xl leading-relaxed text-neutral-400">
                and everyone who moves fluidly between them
              </p>
            </div>
          </AnimatedCard>
          

          {/* Tribe Cards */}
          {tribes.map((tribe, index) => (
            <AnimatedCard key={tribe.id} index={index + 1}>
              <div
                className="rounded-3xl p-6 sm:p-8 relative overflow-hidden min-h-[380px] h-full flex flex-col transition-all duration-500 lg:hover:border-[#00D2FF]/40"
                style={cardStyle}
              >
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-5 flex items-center gap-3">
                    <span className="text-2xl">{tribe.id}</span>
                    <span style={{
                      background: "linear-gradient(to right, #fff, #3B82F6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent"
                    }}>{tribe.name}</span>
                  </h3>
                  <p className="whitespace-pre-line leading-relaxed text-sm sm:text-base text-blue-50/80 font-light">
                    {tribe.description}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}

        </div>
      </div>
    </div>
  );
}