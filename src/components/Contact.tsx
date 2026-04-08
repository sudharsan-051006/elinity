import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

/* =========================
   ANIMATION CONFIG
========================= */

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const glowFloat = {
  animate: {
    y: [0, -20, 0],
    opacity: [0.8, 1, 0.8],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  }
};

/* ========================= */

const GOOGLE_LOGO = (
  <svg className="w-5 h-5" viewBox="0 0 48 48">
    <g>
      <path fill="#4285F4" d="M24 9.5c3.54 0 6.07 1.53 7.47 2.81l5.54-5.39C33.64 3.61 29.28 1.5 24 1.5 14.98 1.5 7.13 7.44 4.13 15.09l6.91 5.36C12.83 14.09 17.01 9.5 24 9.5z"/>
      <path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.43-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.66 7.01l7.18 5.59C43.87 37.13 46.1 31.36 46.1 24.55z"/>
      <path fill="#FBBC05" d="M10.96 28.45c-.48-1.44-.76-2.97-.76-4.55s.28-3.11.76-4.55l-6.91-5.36C2.7 17.36 1.5 20.55 1.5 24s1.2 6.64 3.55 9.45l6.91-5.36z"/>
      <path fill="#EA4335" d="M24 46.5c6.48 0 11.92-2.14 15.89-5.84l-7.18-5.59c-2 1.36-4.56 2.18-8.71 2.18-6.99 0-11.17-4.59-12.96-8.86l-6.91 5.36C7.13 40.56 14.98 46.5 24 46.5z"/>
    </g>
  </svg>
);

const GITHUB_URL = 'https://github.com/elinityai/elinityai-main';

const Contact: React.FC = () => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      setFormStatus({ submitted: true, success: false, message: 'Please fill out all fields' });
      return;
    }
    setTimeout(() => {
      setFormStatus({ submitted: true, success: true, message: 'Thank you for your message! We\'ll get back to you soon.' });
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      setTimeout(() => setFormStatus({ submitted: false, success: false, message: '' }), 5000);
    }, 1000);
  };

  const handleAction = (route: string) => {
    alert(`Navigate to: ${route}`);
  };

  const handleGoogleLogin = () => {
    alert('Google login coming soon!');
  };

  const handleGithub = () => {
    window.open(GITHUB_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
<div className="relative pt-32 pb-24 overflow-hidden bg-[#050510]">

  {/* Brand Glow */}
  <div className="absolute w-[600px] h-[600px] bg-[#a855f7]/20 blur-[160px] rounded-full top-[-250px] left-1/2 -translate-x-1/2" />

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true, amount: 0.4 }}
    className="relative text-center max-w-3xl mx-auto px-6"
  >
    <p className="text-[#a855f7] tracking-[0.3em] text-sm mb-6">
      CONTACT ELINITY
    </p>

    <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
      Let’s Start a{" "}
      <span className="text-[#a855f7]">
        Conversation
      </span>
    </h1>

    <p className="text-gray-400 mt-6 text-lg leading-relaxed">
      We love hearing from you whether it's feedback, ideas, creative sparks,
      bugs you've noticed, feature suggestions, or simply your experience
      with Elinity.
    </p>

    <p className="text-gray-400 mt-6 text-lg leading-relaxed">
      Every message helps us grow, improve, and create more beautiful,
      meaningful experiences.
    </p>
  </motion.div>
</div>
      <div className="relative min-h-screen bg-[#050510] text-white flex items-center justify-center px-6 py-28 overflow-hidden">

  {/* ===== Ambient Background ===== */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute w-[700px] h-[700px] bg-[#a855f7]/20 blur-[200px] rounded-full top-[-250px] left-[-250px]" />
    <div className="absolute w-[600px] h-[600px] bg-[#7c3aed]/15 blur-[180px] rounded-full bottom-[-250px] right-[-250px]" />
  </div>

  <div className="relative w-full max-w-6xl">

    {/* ===== HEADER ===== */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <h1 className="text-4xl md:text-6xl font-semibold leading-tight bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
        Questions, ideas, partnerships, or feedback we’d love to hear from you.
      </h1>
    </motion.div>

<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  animate={{
    backgroundPosition: ["0% 0%", "100% 100%"]
  }}
  whileHover={{
    backgroundPosition: "50% 50%"
  }}
  transition={{
    duration: 0.9, // for entry animation
    backgroundPosition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "linear"
    }
  }}
  className="relative rounded-3xl p-[1px]
             bg-[linear-gradient(135deg,#7c3aed,transparent,#7c3aed)]
             bg-[length:300%_300%]"
>
      {/* Inner Glass */}
      <div className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 shadow-[0_0_80px_rgba(168,85,247,0.18)]">

        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div className="space-y-10">
            <h2 className="text-2xl font-semibold">Reach us directly</h2>

            <div className="space-y-8 text-lg">

              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">Email</p>
                <p className="font-medium">team@elinity.ai</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">Partnerships</p>
                <p className="font-medium">partners@elinity.ai</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">Location</p>
                <p className="font-medium">London</p>

              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] outline-none transition"
                />
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] outline-none transition"
                />
              </div>

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] outline-none transition"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] outline-none transition"
              />

              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[#a855f7] focus:ring-1 focus:ring-[#a855f7] outline-none transition resize-none"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#a855f7] to-[#7c3aed] hover:opacity-90 transition font-semibold shadow-lg shadow-[#a855f7]/30"
              >
                Send Message
              </motion.button>

            </form>
          </div>

        </div>
      </div>
    </motion.div>

  </div>
</div>
    </div>
  );
};

export default Contact;