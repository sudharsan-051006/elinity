import React from 'react';

const sitemapData = {
  Home: [
    { name: 'Welcome Banner', href: '#' },
    { name: "Overview of Elinity's 3 Modes (Love, Leisure, Purpose)", href: '#' },
    { name: 'Quick Start: How Elinity Works', href: '#' },
  ],
  'Explore & Discover': [
    { name: 'Discover New People', href: '#' },
    { name: 'Across Modes', href: '#' },
    { name: 'Dynamic Feed of Suggested Connections', href: '#' },
    { name: 'Filter by Mode, Mood, or Intention', href: '#' },
    { name: 'AI Suggestions & Compatibility Tags', href: '#' },
  ],
  'Love & Intimacy': [
    { name: 'Romantic Matchmaking Overview', href: '#' },
    { name: 'Deep Compatibility Model', href: '#' },
    { name: 'Relationship Dashboard', href: '#' },
    { name: 'AI-Powered Coaching & Support', href: '#' },
    { name: 'Stories of Love & Soulmates', href: '#' },
    { name: 'Vibe Check Feature', href: '#' },
    { name: 'Love Profile Deep Dive', href: '#' },
  ],
  'Relationship Dashboard': [
    { name: 'Overview of Relationship Health', href: '#' },
    { name: 'Tree Visual & Emotional Climate', href: '#' },
    { name: 'Daily & Weekly Rituals', href: '#' },
    { name: 'Gratitude, Intentions, Stresses', href: '#' },
    { name: 'Daily Cards & Prompts', href: '#' },
    { name: 'Journals, Check-ins, Connection History', href: '#' },
  ],
  'Lieusre & Friendship': [
    { name: 'Find Your People for Fun', href: '#' },
    { name: 'Shared Interests Matching', href: '#' },
    { name: 'Weekly Activity & Event Suggestions', href: '#' },
    { name: 'Rituals for Friendships', href: '#' },
    { name: 'Friendship Health & Streaks', href: '#' },
    { name: 'Soul Tribe Building', href: '#' },
  ],
  'Elinity Coaching': [
    { name: 'What is ElinityAI?', href: '#' },
    { name: 'Emotionally Intelligent AI Framework', href: '#' },
    { name: 'Voice + Chat', href: '#' },
    { name: 'Coaching Modes', href: '#' },
    { name: 'Personalized Growth Plans', href: '#' },
    { name: 'Self-Discovery & Self-Actualization Tools', href: '#' },
    { name: 'Weekly Sessions & Journaling Prompts', href: '#' },
  ],
  'Collaboration & Purpose': [
    { name: 'Matching for Work, Projects, and Creative Collabs', href: '#' },
    { name: 'Co-Founder, Partner, Teammate Discovery', href: '#' },
    { name: 'Collaboration Vibe Check', href: '#' },
    { name: 'Shared Goal Setting', href: '#' },
    { name: 'Childcare', href: '#' },
    { name: 'Success Stories', href: '#' },
  ],
  'Elinity Stories': [
    { name: 'Real User Stories Across All Modes', href: '#' },
    { name: 'Love, Friendships, Work Partners & More', href: '#' },
    { name: 'Screenshots, DMs, Memories', href: '#' },
    { name: 'Submit Your Story', href: '#' },
    { name: 'Tag Us on Instagram @elinity.world', href: '#' },
    { name: 'Consent & Feature Policy', href: '#' },
  ],
  'Onboarding Profile': [
    { name: 'The Elinity Onboarding Journey', href: '#' },
    { name: 'Deep User Persona Creation', href: '#' },
    { name: 'Voice/Text-Based Sessions', href: '#' },
    { name: 'Emotional & Communication Style Profiling', href: '#' },
    { name: 'Values, Goals, Personality', href: '#' },
    { name: 'Update or Continue Onboarding', href: '#' },
  ],
  'Elinity Game Suite': [
    { name: 'About Elinity Games', href: '#' },
    { name: 'Play to Connect: Romantic, Platonic & Purpose-Driven Games', href: '#' },
    { name: 'AI-Powered Prompts & Dynamic Dialogue Growth Plans', href: '#' },
    { name: 'Creativity, Expression, Fun', href: '#' },
    { name: 'Coming Soon Games', href: '#' },
    { name: 'Leaderboards (Coming Soon)', href: '#' },
  ],
  'Resources & Community': [
    { name: 'Elinity Blog (Coming Soon)', href: '#' },
    { name: 'Connection Insights, Research & Stories', href: '#' },
    { name: 'User Guides & How-To Content', href: '#' },
    { name: 'Emotional & Communication Style Profiling', href: '#' },
    { name: 'Values, Goal/Mental Health, Relationship Science, and Emotional Intelligences, Personality', href: '#' },
    { name: 'Events & Webinars', href: '#' },
  ],
  'Contact With Us': [
    { name: 'General Inquiries', href: '#' },
    { name: 'Support & Feedback Form', href: '#' },
    { name: 'Share Your Story', href: '#' },
    { name: 'Community Guidelines', href: '#' },
    { name: 'DM Policy (for Story Features)', href: '#' },
  ],
  'Partner with Us': [
    { name: 'B2B Opportunities', href: '#' },
    { name: 'Educational Partnerships', href: '#' },
    { name: 'Therapist & Coach Collaborations', href: '#' },
    { name: 'Research Institutions', href: '#' },
    { name: 'Tech & Platform Partnerships', href: '#' },
    { name: 'Event Collaborations', href: '#' },
  ],
  'Legal Policies': [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Use', href: '#' },
    { name: 'Community Standards', href: '#' },
    { name: 'Data & AI Ethics Statement', href: '#' },
    { name: 'Consent & Story Sharing Policy', href: '#' },
    { name: 'PortSafety Features & Reporting Mechanism/policy', href: '#' },
  ],
  'Download App': [
    { name: 'App Store & Play Store Buttons', href: '#' },
    { name: 'QR Code', href: '#' },
    { name: 'Quick Onboarding Demo', href: '#' },
    { name: 'Invite Your Friends CTA', href: '#' },
  ],
  Leaderboard: [
    { name: 'Global Referal Leaderboard', href: '#' },
    { name: 'University-Specific Leaderboards', href: '#' },
    { name: 'Current Top Referrers (Name, Country, Referrals)', href: '#' },
    { name: 'Perks & Prizes', href: '#' },
    { name: 'Gamified Growth + Friendly Competition', href: '#' },
  ],
};

const SitemapLink = ({ name, href }: { name: string, href: string }) => (
  <li>
    <a href={href} className="text-gray-300 hover:text-white transition-colors text-sm">
      {name}
    </a>
  </li>
);

const SitemapSection = ({ title, links }: { title: string, links: { name: string, href: string }[] }) => (
  <div>
    <h3 className="text-lg font-medium mb-4 text-purple-300">{title}</h3>
    <ul className="space-y-2">
      {links.map(link => (
        <SitemapLink key={link.name} {...link} />
      ))}
    </ul>
  </div>
);

const Sitemap = () => {
  return (
    <div className="bg-gradient-to-b from-[#0a0a23] to-[#1a1a40] text-white py-16 px-4 md:px-16 pt-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12">
          Site<span className="text-purple-400">map</span>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Object.entries(sitemapData).map(([title, links]) => (
            <SitemapSection key={title} title={title} links={links} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitemap; 