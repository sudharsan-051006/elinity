import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ElinityFAQ() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const bluishGradient = {
   background: 'linear-gradient(to bottom, #060014, #140035)'
  };

  const faqs = [
    {
      question: "What is Elinity?",
      answer: "Elinity is your AI-powered platform for human connection, self-actualization, and relationship growth. It's part advanced matchmaker, part relationship coach, part social discovery playground—and all heart. Whether you're seeking your life partner, real friendships, aligned collaborators, or simply want to deepen your self-relationship, Elinity is built to help you find your people, deepen your existing relationships, and understand yourself more deeply and grow."
    },
    {
      question: "What makes Elinity different from dating or social apps?",
      answer: "Everything. Most apps focus on swiping, superficial attraction, or mindless scrolling. Elinity is designed for intentional, emotionally intelligent, and deeply resonant connection. What makes it truly special: emotionally intelligent AI that understands you deeply, rich psychometric, psychological, and behavioral modeling, a full self and relationship growth suite, games, rituals, and interactive tools to spark intimacy and depth, and a focus on love, leisure, and collaboration, not just romance. It's not just a platform. It's your connection companion for life."
    },
    {
      question: "Who is Elinity for?",
      answer: "We've built Elinity for those who crave realness, depth, and alignment. You'll love Elinity if you are:\n• Seeking a meaningful romantic relationship with long-term potential\n• Looking to meet new friends, expand your social world, or find kindred spirits\n• Searching for aligned collaborators, cofounders, or creative partners\n• Wanting to improve and evolve your relationship with your partner or loved ones\n• On a self-growth journey—exploring your inner world, relational dynamics, and patterns"
    },
    {
      question: "How does Elinity help me find the right people?",
      answer: "Our matching engine uses deep psychometric analysis, psychological compatibility, values-based profiling, and AI-powered alignment models to introduce you to the people most resonant with your inner world, energy, lifestyle, and goals. This isn't just \"interests in common.\" It's soul-aligned matchmaking, across love, leisure, and collaboration."
    },
    {
      question: "What kinds of people can I meet on Elinity?",
      answer: "You can meet:\n• Romantic partners\n• New friends\n• Hobby or travel companions\n• Creative or project collaborators\n• Business or research co-founders\n• Community-minded people near you\n• Emotionally intelligent individuals with shared values\nYou choose your intention, and Elinity curates the most aligned introductions."
    },
    {
      question: "Can I use Elinity with my existing partner or friends?",
      answer: "Absolutely. Elinity includes a Relationship Growth Suite designed to help couples, friends, and families connect more intentionally. You'll find: shared rituals, daily and weekly conversation prompts, conflict resolution tools, AI-based dynamics mapping, playful relationship games, and growth check-ins and goal tracking."
    },
    {
      question: "What if I'm single and just working on myself?",
      answer: "Then Elinity becomes your self-growth ally. Our Self Connection Suite includes: personalized reflections, guided journaling, intrapersonal dynamics mapping, self-regulation and emotional growth tools, and progress tracking across self-awareness, alignment, emotional agility, and more. Because the foundation of great relationships is a great self-relationship."
    },
    {
      question: "What are \"Connection Games\"?",
      answer: "Elinity's AI crafts context-aware, emotionally intelligent games to help you and others connect more deeply. These might include: storytelling adventures, intention-based truth games, relationship simulation rounds, values-alignment mini quests, and mystery boxes that reveal things about yourself and others. Games evolve based on the nature of the relationship (new, close, romantic, platonic, etc.)."
    },
    {
      question: "Is my data safe?",
      answer: "Yes. We treat your data with the utmost care. We are: privacy-first by design, end-to-end encrypted where applicable, transparent about what's stored and why, never selling your data to third parties, and focused on giving you control over visibility and sharing. You always control what others see, and can delete anything at any time."
    },
    {
      question: "Is Elinity free?",
      answer: "You can start with a Free Basic Plan, which gives access to: profile creation, limited daily matches, core features of the Self & Connection suites, and limited access to games and prompts. For more powerful tools, faster discovery, and deeper growth tools, you can upgrade to Advanced Plan or Premium Plan."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div style={bluishGradient} className="min-h-screen text-white px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Section */}
        <div className="flex flex-col justify-start space-y-6">
          <h1 className="text-5xl font-bold">FAQs</h1>
          <p className="text-gray-400 text-lg max-w-md">
            Elinity is where you find your people—those you truly vibe with—and build extraordinary, joyful, and fulfilling relationships.
          </p>

          <div className="flex items-center space-x-4 mt-4">
            <div className="flex -space-x-3">
              <img src="../../public/userlogo.png" alt="User 1" className="w-10 h-10 rounded-full border-2 border-purple-700" />
              <img src="../../public/userlogo.png" alt="User 2" className="w-10 h-10 rounded-full border-2 border-purple-700" />
              <img src="../../public/userlogo.png" alt="User 3" className="w-10 h-10 rounded-full border-2 border-purple-700" />
            </div>
            <div>
              <p className="font-semibold leading-tight">800+ Users Registered</p>
              <p className="text-sm text-gray-400 leading-tight">Last Week</p>
            </div>
          </div>

          <button className="bg-gradient-to-r from-[#A855F7] to-[#EC4899] text-white px-6 py-3 rounded-full mt-6 font-semibold hover:opacity-90 transition-opacity w-max">
            Get Started
          </button>
        </div>

        {/* Right Section - FAQs */}
        <div className="flex flex-col space-y-3">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#1a1033] to-[#13072b] border border-gray-700 rounded-xl px-5 py-4 transition-all duration-300"
            >
              <button
                className="w-full flex items-center justify-between text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-base md:text-lg font-medium text-white">{faq.question}</h3>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openFAQ === index && (
                <div className="mt-3">
                  <p className="text-gray-300 text-sm whitespace-pre-line">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tagline Section */}
      <div className="mt-32 text-center relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1/2 h-32 bg-gradient-to-t from-fuchsia-600/40 to-transparent blur-2xl rounded-full z-0"></div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-300 text-transparent bg-clip-text z-10 relative">
          Elinity is not just a platform
        </h2>
        <h2 className="text-4xl font-bold mt-2 bg-gradient-to-r from-purple-400 to-pink-300 text-transparent bg-clip-text z-10 relative">
          it is a life long companion
        </h2>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 z-10 relative">
          <button className="bg-gradient-to-r from-purple-600 to-fuchsia-500 px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
            Sign Up for Free
          </button>
          <button className="bg-transparent border border-purple-500 px-8 py-3 rounded-full font-semibold hover:bg-purple-900/30 transition">
            Talk To Us
          </button>
        </div>
      </div>
    </div>
  );
}
