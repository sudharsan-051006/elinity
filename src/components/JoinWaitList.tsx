import React, { useState, forwardRef } from "react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShow(true);
        else setShow(false); // replay animation
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, show];
}


const WaitlistSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://elinity-2ulr.vercel.app/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("You're on the waitlist 🚀");
        setName("");
        setEmail("");
      } else if (response.status === 409) {
        alert("You're already on the waitlist 🙂");
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (error) {
      alert("Could not connect to server.");
    } finally {
      setLoading(false);
    }
  };

  const [cardRef, show] = useReveal();

  return (
<section
  ref={ref}
  className="relative w-full bg-[#030014] py-32 px-6 overflow-hidden"
>
  {/* Ambient Background Glows */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
  <div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

  <motion.div
    ref={cardRef}
    initial={false}
    animate={{ 
      opacity: show ? 1 : 0, 
      y: show ? 0 : 40,
      scale: show ? 1 : 0.95 
    }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="relative max-w-4xl mx-auto text-center z-10"
  >
    {/* The Main Glass Card */}
    <div className="relative group overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 md:p-16 shadow-2xl">
      
      {/* Animated Border Gradient Hook */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 opacity-50" />
      
      {/* Header */}
      <h2 className="text-4xl sm:text-6xl font-extrabold mb-12 tracking-tighter 
                    bg-gradient-to-r from-purple-400 via-[#b066fe] to-pink-500 
                    bg-clip-text text-transparent
                    drop-shadow-[0_0_15px_rgba(176,102,254,0.3)]">
        join the elinity waitlist ✨
      </h2>

      {/* Narrative Content */}
      <div className="text-gray-400 text-lg md:text-xl space-y-6 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
        <p>
          we’re building something special, <br className="hidden sm:block" />
          and we’re doing it carefully.
        </p>
        <p>
          we’re onboarding in small, thoughtful batches so every new member
          gets the full <span className="text-purple-400 font-medium">elinity experience</span> not a rushed one.
        </p>
        <p className="text-gray-500 text-base">
          add your name and email below. we’ll reach out as soon as we’re
          ready to welcome you in and help you experience the elinity magic.
        </p>
      </div>

      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-3 max-w-2xl mx-auto mb-12 p-2 
                   rounded-2xl bg-white/[0.03] border border-white/10 shadow-2xl backdrop-blur-md"
      >
        {/* Name Input */}
        <div className="relative flex-1 group">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-purple-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <input
            type="text"
            placeholder="your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full bg-transparent border-none rounded-xl pl-12 pr-4 py-4 text-white placeholder-white/20 outline-none focus:ring-0 transition-all"
          />
        </div>

        {/* Email Input */}
        <div className="relative flex-[1.2] group border-t md:border-t-0 md:border-l border-white/10">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-purple-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </div>
          <input
            type="email"
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-transparent border-none rounded-xl pl-12 pr-4 py-4 text-white placeholder-white/20 outline-none focus:ring-0 transition-all"
          />
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="px-8 py-4 font-bold rounded-xl text-white
                     bg-gradient-to-r from-[#7759fd] to-[#b066fe]
                     shadow-[0_0_20px_rgba(119,89,253,0.3)]
                     hover:shadow-[0_0_30px_rgba(119,89,253,0.5)]
                     transition-all disabled:opacity-50 whitespace-nowrap"
        >
          {loading ? "joining..." : "join now"}
        </motion.button>
      </form>

      {/* Footer Note */}
      <div className="max-w-xl mx-auto border-t border-white/10 pt-8">
        <p className="text-gray-500 text-sm mb-4 tracking-wide">
          in the meantime, join our newsletter for behind-the-scenes updates,
          new features, and early glimpses of what’s coming.
        </p>
        <p className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-medium italic">
          good things grow best when they’re nurtured. 🌱
        </p>
      </div>
    </div>
  </motion.div>
</section>
  );
});

WaitlistSection.displayName = "WaitlistSection";
export default WaitlistSection;