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
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0a23] p-2 md:p-4 overflow-auto">

      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="w-full max-w-4xl mx-auto flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl"
        style={{ boxShadow: '0 8px 40px 0 rgba(168,85,247,0.25), 0 1.5px 8px 0 rgba(0,0,0,0.10)' }}
      >

        {/* LEFT SIDE */}
        <motion.div
          variants={fadeUp}
          className="flex-1 flex flex-col justify-center items-center px-4 md:px-8 py-10 md:py-16 relative"
          style={{ minHeight: 600, background: 'radial-gradient(circle at 50% 30%, #b983ff 0%, #a855f7 40%, #3a185a 80%, #181848 100%)' }}
        >
          <motion.div
            variants={glowFloat}
            animate="animate"
            className="absolute inset-0 rounded-3xl"
            style={{
              background: 'radial-gradient(circle at 50% 30%, #b983ff 0%, #a855f7 40%, #3a185a 80%, #181848 100%)',
              opacity: 0.85,
              zIndex: 0
            }}
          />

          <div className="relative z-10 flex flex-col items-center w-full">
            <motion.span variants={fadeUp} className="text-white text-lg font-semibold mb-2">⦿ Elinity</motion.span>

            <motion.h2 variants={fadeUp} className="text-4xl font-extrabold text-white mb-2 text-center">
              Get Started with Us
            </motion.h2>

            <motion.p variants={fadeUp} className="text-purple-100 mb-10 text-center max-w-xs text-base">
              Got any question about the Product we are here to help you 24/7.
            </motion.p>

            <motion.div variants={stagger} className="flex flex-col gap-4 w-full max-w-xs">

              {[
                {label:"Chat With Us",route:"/chat",num:1},
                {label:"Book a call",route:"/book-call",num:2},
                {label:"Shoot Us with Email",route:"/email",num:3}
              ].map((b,i)=>(
                <motion.button
                  key={i}
                  variants={fadeUp}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={()=>handleAction(b.route)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-lg ${i===0?'bg-white text-[#181848]':'bg-[#23235b] text-white'} font-semibold shadow text-base border-2 transition`}
                >
                  <span className="w-7 h-7 flex items-center justify-center rounded-full bg-black text-white font-bold mr-2">
                    {b.num}
                  </span>
                  {b.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div variants={fadeUp} className="flex-1 bg-[#181848] flex flex-col justify-center px-4 md:px-8 py-10 md:py-16">
          <div className="max-w-md w-full mx-auto">

            <motion.h2 variants={fadeUp} className="text-3xl font-extrabold text-white mb-1">
              Let's Talk with Us
            </motion.h2>

            <motion.p variants={fadeUp} className="text-purple-200 mb-8 text-base">
              Let's Talk about what we can do together.
            </motion.p>

            <motion.div variants={stagger} className="flex gap-4 mb-8">
              <motion.button whileHover={{ scale:1.05 }} onClick={handleGoogleLogin}
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-full border border-[#33336b] text-white font-semibold">
                {GOOGLE_LOGO} Google
              </motion.button>

              <motion.button whileHover={{ scale:1.05 }} onClick={handleGithub}
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-full border border-[#33336b] text-white font-semibold">
                Github
              </motion.button>
            </motion.div>

            <form onSubmit={handleSubmit}>
              <motion.div variants={stagger} className="flex gap-4 mb-4">

                <motion.input variants={fadeUp} name="firstName" value={formData.firstName}
                  onChange={handleChange} placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg bg-[#23235b] text-white" />

                <motion.input variants={fadeUp} name="lastName" value={formData.lastName}
                  onChange={handleChange} placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg bg-[#23235b] text-white" />
              </motion.div>

              <motion.input variants={fadeUp} name="email" value={formData.email}
                onChange={handleChange} placeholder="Email"
                className="w-full mb-4 px-4 py-3 rounded-lg bg-[#23235b] text-white" />

              <motion.input variants={fadeUp} name="phone" value={formData.phone}
                onChange={handleChange} placeholder="Phone"
                className="w-full mb-4 px-4 py-3 rounded-lg bg-[#23235b] text-white" />

              <motion.textarea variants={fadeUp} name="message" value={formData.message}
                onChange={handleChange} rows={4} placeholder="Leave message"
                className="w-full mb-4 px-4 py-3 rounded-lg bg-white text-black" />

              <motion.button
                whileHover={{ scale:1.06 }}
                whileTap={{ scale:0.95 }}
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#a855f7] to-[#7c4dff] text-white font-bold text-lg flex items-center justify-center gap-2"
              >
                SEND <Send size={18}/>
              </motion.button>

              {formStatus.submitted && (
                <div className={`mt-4 p-3 rounded-lg ${formStatus.success?'bg-green-900':'bg-red-900'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Contact;