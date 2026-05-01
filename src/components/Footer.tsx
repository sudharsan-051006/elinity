  import React from "react";
import { Instagram, Linkedin, Twitter, Sparkles, ArrowUpRight, Heart, MapPin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../public/elogo.png";
import { purpleGradient } from "../theme";

const Footer = ({ className = '' }: { className?: string }) => {
  const currentYear = new Date().getFullYear();

  // Premium Scroll-to-Top Logic
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      style={purpleGradient} 
      className={`relative text-white pt-20 pb-10 px-6 md:px-16 overflow-hidden border-t border-white/10 ${className}`}
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Tier: Brand & Social Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          {/* Brand Card */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between">
            <div className="space-y-6">
              <Link to="/" onClick={scrollToTop} className="flex items-center space-x-3 w-max group">
                <img src={logo} alt="Elinity" className="h-16 w-auto transition-transform duration-700 group-hover:rotate-[540deg]" />
              </Link>
              <h2 className="text-2xl md:text-2xl font-light leading-tight max-w-xl text-white tracking-wide">
                Where{" "}
                <span className="bg-gradient-to-r from-[#d9d3fe] to-[#7759fd] 
                                bg-clip-text text-transparent font-semibold italic"
                      style={{paddingRight:'1px'}}>
                  Amplifying Intelligence 
                  {/* bg-gradient-to-r from-  bg-clip-text */}
                </span>{" "}
                 meets{" "}
                <span className="bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-400 
                                bg-clip-text text-transparent font-semibold italic">
                  human connection
                </span>
              </h2>
              <p className="text-purple-100/60 text-sm max-w-md">
                Find your most resonant people with Lumi, your social matchmaker, that understands the whole of you.
              </p>
            </div>
          </div>

          {/* Connect Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-purple-500/10 to-transparent border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                Join the Circle <Sparkles size={18} className="text-yellow-400" />
              </h3>
              <p className="text-purple-100/60 text-sm">Follow our journey in shaping human flourishing with emotionally intelligent buddies.</p>
            </div>
            
            <div className="flex gap-3 mt-6">
              {[
                { icon: <Instagram size={22} />, href: "https://www.instagram.com/elinityai/" },
                { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/company/elinity/" },
                { icon: <Twitter size={22} />, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-14 w-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-400/50 hover:-translate-y-1 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Tier: Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 px-4">
          
          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-purple-400">Explore</h4>
            <ul className="space-y-3">
              {[
                { n: "Home", p: "/" }, { n: "About Us", p: "/about" }, 
                { n: "Contact Us", p: "/contact" }, { n: "Join Us", p: "/join-us" },
                { n: "LeaderBoard", p: "#" },
                { n: "Community", p: "#" }, { n: "Manifesto", p: "#" },
                { n: "Enterprise", p: "/enterprise" }, 
                {n: "AB", p: "/ab" },
              ].map((link) => (
                <li key={link.n}>
                  <Link to={link.p} onClick={scrollToTop} className="text-purple-100/40 hover:text-white transition-colors text-sm block">
                    {link.n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-purple-400">Legal & Trust</h4>
            <ul className="space-y-3">
              {[
                { n: "Subscriptions", p: "/get-started" }, 
                { n: "Legal Center", p: "/legal" },
                { n: "Sitemap", p: "/sitemap" },
                { n: "Privacy Policy", p: "/privacypolicy" }
              ].map((link) => (
                <li key={link.n}>
                  <Link to={link.p} onClick={scrollToTop} className="text-purple-100/40 hover:text-white transition-colors text-sm block">
                    {link.n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-purple-400">Learn more</h4>
            <ul className="space-y-3">
              {[
                { n: "Blogs", p: "/blog" }, { n: "ElinityPodcast", p: "/pod" },
                 { n: "Stories", p: "/stories" },
              ].map((link) => (
                <li key={link.n}>
                  <Link to={link.p} onClick={scrollToTop} className="text-purple-100/40 hover:text-white transition-colors text-sm block">
                    {link.n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-purple-400">Platforms</h4>
            <div className="grid gap-3">
              {['Android App', 'iOS App'].map((app) => (
                <a key={app} href="#" className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all group">
                  <span className="text-xs font-semibold tracking-wide">{app}</span>
                  <ArrowUpRight size={14} className="text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.15em] font-medium text-purple-200/30 uppercase">
          <p>© {currentYear} Elinity • 128 City Road, London, EC1V 2NX</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 transition-colors hover:text-purple-200 cursor-default">
              Crafted with <Heart size={10} className="fill-purple-500/50 text-purple-500 animate-pulse" /> for human soul
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;