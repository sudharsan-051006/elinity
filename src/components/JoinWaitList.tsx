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
      className="w-full bg-[#0f0a1e] py-24 px-6 border-t border-white/5"
    >
      <motion.div
      whileHover={{ scale: 1.05 }}
        ref={cardRef}
        className="max-w-3xl mx-auto text-center"
        style={{
          border: "1px solid purple",
          borderRadius: "24px",
          padding: "24px",
          boxShadow: "0 25px 80px rgba(255,0,255,0.18)",
          
          opacity: show ? 1 : 0,
          transform: show
            ? "translateY(0px) scale(1)"
            : "translateY(80px) scale(.96)",
          transition: "all 1s cubic-bezier(.23,1,.32,1)"
        }}
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 tracking-tight 
                      bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
                      bg-clip-text text-transparent">
          join the elinity waitlist ✨
        </h2>


        {/* Narrative Content */}
        <div className="text-gray-400 text-lg space-y-4 mb-12 leading-relaxed max-w-2xl mx-auto">
          <p>
            we’re building something special, <br className="hidden sm:block" />
            and we’re doing it carefully.
          </p>
          <p>
            we’re onboarding in small, thoughtful batches so every new member
            gets the full Elinity experience — not a rushed one.
          </p>
          <p>
            add your name and email below. We’ll reach out as soon as we’re
            ready to welcome you in and help you experience the elinity magic.
          </p>
        </div>

        {/* Form */}
;

<form
  onSubmit={handleSubmit}
  className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-10 
  p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
>
  {/* Name */}
  <div className="relative flex-[1.2]">

    <motion.input
      whileFocus={{ scale: 1.02 }}
      type="text"
      placeholder="your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      className="w-full bg-white/10 border border-white/10 rounded-xl 
      pl-10 pr-4 py-3 text-white placeholder-white/40 outline-none
      focus:border-[#7759fd] focus:ring-2 focus:ring-[#7759fd]/40
      transition-all"
    />
  </div>

  {/* Email */}
  <div className="relative flex-[1.5]">

    <input
      type="email"
      placeholder="your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="w-full bg-white/10 border border-white/10 rounded-xl 
      pl-10 pr-4 py-3 text-white placeholder-white/40 outline-none
      focus:border-[#7759fd] focus:ring-2 focus:ring-[#7759fd]/40
      transition-all"
    />
  </div>

  {/* Button */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    type="submit"
    disabled={loading}
    className="px-8 py-3 font-bold rounded-xl text-white
    bg-gradient-to-r from-[#7759fd] to-[#b066fe]
    hover:shadow-[0_10px_40px_rgba(176,102,254,0.4)]
    transition-all disabled:opacity-50"
  >
    {loading ? "joining..." : "join now"}
  </motion.button>
</form>
        {/* Footer Note */}
        <div className="max-w-xl mx-auto border-t border-white/5 pt-8">
          <p className="text-gray-500 text-sm mb-4">
            in the meantime, join our newsletter for behind-the-scenes updates,
            new features, and early glimpses of what’s coming.
          </p>
          <p className="text-gray-400 font-medium italic">
            good things grow best when they’re nurtured. 🌱
          </p>
        </div>
      </motion.div>
    </section>
  );
});

WaitlistSection.displayName = "WaitlistSection";
export default WaitlistSection;