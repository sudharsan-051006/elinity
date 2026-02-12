import React, { useState, forwardRef } from 'react';

const WaitlistSection = forwardRef<HTMLDivElement, any>((props, ref) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${name}, you've been added to the waitlist!`);
  };

  return (
    <section 
      ref={ref} 
      id="waitlist-section"
      className="w-full bg-[#0f0a1e] py-24 px-6 border-t border-white/5 scroll-mt-10"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
          join the elinity waitlist ✨
        </h2>
        
        {/* Secondary Messaging */}
        <div className="space-y-4 mb-12 text-gray-400 text-lg leading-relaxed">
          <p className="text-white font-medium">we’re building something special. and we’re doing it carefully.</p>
          
          <p>
            we’re onboarding in small, thoughtful batches so every new member gets the full 
            elinity experience — not a rushed one.
          </p>
          
          <p>
            add your name and email below. we’ll reach out as soon as we’re ready to 
            welcome you in and help you experience the elinity magic.
          </p>
          
          <p className="text-sm italic opacity-80 pt-4">
            in the meantime, join our newsletter for behind-the-scenes updates, 
            new features, and early glimpses of what’s coming.
          </p>
        </div>

        {/* The Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-10">
          <input 
            type="text" 
            placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-[#7759fd] focus:ring-1 focus:ring-[#7759fd] transition-all"
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-[#7759fd] focus:ring-1 focus:ring-[#7759fd] transition-all"
          />
          <button 
            type="submit" 
            className="px-10 py-4 bg-[#7759fd] text-white font-bold rounded-xl hover:bg-[#6346d8] hover:scale-105 transition-all shadow-lg shadow-indigo-500/20"
          >
            Join Now
          </button>
        </form>

        {/* Footer closing line */}
        <p className="text-indigo-300 font-medium">
          good things grow best when they’re nurtured. 🌱
        </p>
      </div>
    </section>
  );
});

WaitlistSection.displayName = "WaitlistSection";

export default WaitlistSection;