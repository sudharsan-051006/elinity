import React, { useState, forwardRef } from "react";

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
      const response = await fetch("http://127.0.0.1:5000/api/waitlist", {
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

  return (
    <section
      ref={ref}
      className="w-full bg-[#0f0a1e] py-24 px-6 border-t border-white/5"
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8 tracking-tight">
          Join the Elinity waitlist ✨
        </h2>

        {/* Narrative Content */}
        <div className="text-gray-400 text-lg space-y-4 mb-12 leading-relaxed max-w-2xl mx-auto">
          <p>
            We’re building something special, <br className="hidden sm:block" />
            and we’re doing it carefully.
          </p>
          <p>
            We’re onboarding in small, thoughtful batches so every new member
            gets the full Elinity experience — not a rushed one.
          </p>
          <p>
            Add your name and email below. We’ll reach out as soon as we’re
            ready to welcome you in and help you experience the Elinity magic.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-10"
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="flex-[1.2] bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#7759fd] transition-colors"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-[1.5] bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#7759fd] transition-colors"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-[#7759fd] text-white font-bold rounded-xl hover:bg-[#6346d8] transition-all disabled:opacity-50 active:scale-95"
          >
            {loading ? "Joining..." : "Join Now"}
          </button>
        </form>

        {/* Footer Note */}
        <div className="max-w-xl mx-auto border-t border-white/5 pt-8">
          <p className="text-gray-500 text-sm mb-4">
            In the meantime, join our newsletter for behind-the-scenes updates,
            new features, and early glimpses of what’s coming.
          </p>
          <p className="text-gray-400 font-medium italic">
            Good things grow best when they’re nurtured. 🌱
          </p>
        </div>
      </div>
    </section>
  );
});

WaitlistSection.displayName = "WaitlistSection";
export default WaitlistSection;