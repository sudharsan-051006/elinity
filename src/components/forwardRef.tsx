import React, { useState, forwardRef } from 'react';

const WaitlistSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you, ${name}! We'll contact you at ${email}.`);
  };

  return (
    <section 
      ref={ref} // THIS IS THE ANCHOR
      className="w-full bg-[#0f0a1e] py-24 px-6 border-t border-white/5"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
          Join the Elinity waitlist ✨
        </h2>
        
        <p className="text-gray-400 text-lg mb-12">
          We’re onboarding in small batches. Enter your details below to secure your spot.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <input 
            type="text" placeholder="Name" value={name}
            onChange={(e) => setName(e.target.value)} required
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#7759fd]"
          />
          <input 
            type="email" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} required
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#7759fd]"
          />
          <button 
            type="submit"
            className="px-8 py-3 bg-[#7759fd] text-white font-bold rounded-xl hover:bg-[#6346d8] transition-all"
          >
            Join Now
          </button>
        </form>
      </div>
    </section>
  );
});

WaitlistSection.displayName = "WaitlistSection";
export default WaitlistSection;