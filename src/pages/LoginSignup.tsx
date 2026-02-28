import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/* ===== ANIMATION CONFIG ===== */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const float = {
  animate: {
    // y: [0, -12, 0],
    // transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  }
};

/* ============================ */

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

const LoginSignup: React.FC = () => {
  const [tab, setTab] = useState<'login' | 'signup'>('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`${tab === 'login' ? 'Login' : 'Signup'} submitted!`);
    navigate('/');
  };

  const handleGoogleLogin = () => alert('Google login coming soon!');
  const handleGithub = () => window.open(GITHUB_URL, '_blank');

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0a23] p-2 md:p-4 overflow-hidden relative">

      {/* ambient glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#a855f7]/20 blur-[140px] rounded-full top-[-150px] left-[-150px]" />
      <div className="absolute w-[500px] h-[500px] bg-[#a855f7]/10 blur-[120px] rounded-full bottom-[-150px] right-[-150px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-5xl mx-auto flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl"
        style={{ boxShadow: '0 8px 40px 0 rgba(168,85,247,0.25)' }}
      >

        {/* LEFT SIDE */}
        <motion.div
          variants={float}
          animate="animate"
          className="flex-1 flex flex-col justify-center items-center px-4 md:px-8 py-8 md:py-10 relative"
          style={{ minHeight: 480, background: 'radial-gradient(circle at 50% 30%, #b983ff 0%, #a855f7 40%, #3a185a 80%, #181848 100%)' }}
        >
          <div className="absolute inset-0 opacity-80" />

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-center w-full"
          >
            <motion.span variants={fadeUp} className="text-white text-lg font-semibold mb-2">⦿ Elinity</motion.span>

            <motion.h2 variants={fadeUp} className="text-4xl font-extrabold text-white mb-2 text-center">
              Welcome Back!
            </motion.h2>

            <motion.p variants={fadeUp} className="text-purple-100 mb-8 text-center max-w-xs text-base">
              Sign in to your account or create a new one to get started with Elinity&apos;s smart features.
            </motion.p>

            <motion.ul variants={stagger} className="text-white/80 text-sm space-y-2 mb-2">
              <motion.li variants={fadeUp}>• Secure, fast authentication</motion.li>
              <motion.li variants={fadeUp}>• Access all features</motion.li>
              <motion.li variants={fadeUp}>• Manage your profile and preferences</motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 bg-[#181848] flex flex-col justify-center px-4 md:px-8 py-8 md:py-10"
        >
          <div className="max-w-md w-full mx-auto">

            {/* tabs */}
            <div className="flex gap-2 mb-8">
              {['login','signup'].map((t:any)=>(
                <motion.button
                  key={t}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-1 py-2 rounded-full font-semibold ${
                    tab===t ? 'bg-gradient-to-r from-[#a855f7] to-[#7c4dff] text-white'
                    :'bg-[#23235b] text-purple-200'
                  }`}
                  onClick={()=>setTab(t)}
                >
                  {t==='login'?'Login':'Sign Up'}
                </motion.button>
              ))}
            </div>

            {/* social buttons */}
            <div className="flex gap-4 mb-8">
              <motion.button whileHover={{scale:1.05}} onClick={handleGoogleLogin}
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-full border border-[#33336b] text-white">
                {GOOGLE_LOGO} Google
              </motion.button>

              <motion.button whileHover={{scale:1.05}} onClick={handleGithub}
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-full border border-[#33336b] text-white">
                Github
              </motion.button>
            </div>

            {/* form */}
            <AnimatePresence mode="wait">
            <motion.form
              key={tab}
              initial={{opacity:0,y:20}}
              animate={{opacity:1,y:0}}
              exit={{opacity:0,y:-20}}
              transition={{duration:0.35}}
              onSubmit={handleSubmit}
            >

              {tab==='signup' && (
                <motion.div initial={{opacity:0}} animate={{opacity:1}} className="mb-4">
                  <label className="text-sm text-purple-200">Name</label>
                  <input name="name" value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#23235b] text-white focus:ring-2 focus:ring-purple-500"/>
                </motion.div>
              )}

              <div className="mb-4">
                <label className="text-sm text-purple-200">Email</label>
                <input name="email" value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#23235b] text-white focus:ring-2 focus:ring-purple-500"/>
              </div>

              <div className="mb-4">
                <label className="text-sm text-purple-200">Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#23235b] text-white focus:ring-2 focus:ring-purple-500"/>
              </div>

              {tab==='signup' && (
                <motion.div initial={{opacity:0}} animate={{opacity:1}} className="mb-4">
                  <label className="text-sm text-purple-200">Confirm Password</label>
                  <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#23235b] text-white focus:ring-2 focus:ring-purple-500"/>
                </motion.div>
              )}

              <motion.button
                whileHover={{scale:1.06}}
                whileTap={{scale:0.95}}
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#a855f7] to-[#7c4dff] text-white font-bold text-lg flex items-center justify-center gap-2"
              >
                {tab === 'login' ? 'LOGIN' : 'SIGN UP'} <Send size={18}/>
              </motion.button>

            </motion.form>
            </AnimatePresence>

          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default LoginSignup;