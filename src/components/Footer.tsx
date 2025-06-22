import { Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "../../public/elogo.png"
import { purpleGradient } from "../theme"

// The Footer component, which accepts an optional className for custom styling.
const Footer = ({ className = '' }: { className?: string }) => {
  return (
    // Merges the default classes with any custom classes passed via props.
    <footer style={purpleGradient} className={`text-white py-12 px-4 md:px-16 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Top Border */}
        <div className="border-b border-gray-700 mb-8 pb-4"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Elinity Logo" className="h-8 w-auto mr-2" />
              <span className="text-2xl font-semibold text-purple-300">Elinity</span>
            </div>
            <p className="text-gray-300 text-sm">
              Elinity is a social connection and relationship platform, with our 
              powerful EI AI designed to understand the whole of you, with powerful
              algorithms find you your best-fit people, and help you build emotionally
              rich and deeply satisfying relationships.
            </p>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Join Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Elinity LeaderBoard</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Elinity Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Elinity Community</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Elinity Manifesto</a></li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Important Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Subscription and Payments</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Legal</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Community Guidlines</a></li>
              <li><a href="/sitemap" className="text-gray-300 hover:text-white transition-colors">Sitemap</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">Blogs</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-white transition-colors">Featured Blogs</a></li>
              <li><a href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Android App</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">iOS App</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Border removed */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs mb-4 md:mb-0">
            2026 Future Technologies, Inc, Bryant Street no 403, San Francisco, CA. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/elinityai/" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/elinity/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/forofuselabs" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
