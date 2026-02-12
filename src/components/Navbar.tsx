import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import elinityLogo from '../../public/mainlogo.png';
import heroimg from '../../public/hero.jpg';

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Determine if we're on the About Us page
  const isAboutPage = location.pathname === '/about';
  const isHomePage = location.pathname === '/';

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Ellaris', path: '/ellaris' },
    { name: 'Stories', path: '/stories' },
    { name: 'Blog', path: '/blog' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Join Us', path: '/join-us'},
  ];

  const handleNavClick = (item: { name: string; path: string }) => {
    setActiveItem(item.name);
    navigate(item.path);
    setMobileMenuOpen(false);
  };

  const isActive = (itemName: string) => activeItem === itemName;

  useEffect(() => {
    const currentPath = location.pathname;
    const matchedItem = navItems.find((item) => item.path === currentPath);
    if (matchedItem) {
      setActiveItem(matchedItem.name);
    }
  }, [location]);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 lg:px-13"
      style={{
  ...(isAboutPage 
    ? {
      backgroundImage: 'linear-gradient(90deg, #1d005f 0%, #8a00c2 50%, rgb(164, 22, 133) 100%)',
      minHeight: '60px',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      boxShadow: '0 0 15px rgba(255, 0, 255, 0.2)',
      borderBottom: '1px solid rgba(255, 0, 255, 0.1)',
    }
    : isHomePage
    ? {
      backgroundColor: 'transparent',
      minHeight: '60px',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
    }
    : {
      backgroundColor: '#0f0225',
      minHeight: '60px',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      boxShadow: '0 0 15px rgba(123, 77, 255, 0.2), 0 0 30px rgba(186, 71, 252, 0.1)',
      borderBottom: '1px solid rgba(123, 77, 255, 0.1)',
    }
  ),
}}
    >
      {/* Background overlay - only show on non-About pages */}
     {!isAboutPage && !isHomePage && <div className="absolute inset-0 bg-black/20"></div>}

      <nav className="relative z-10 flex items-center justify-between h-full px-2 md:px-4">
        {/* Logo */}
        <div onClick={() => handleNavClick({ name: 'Home', path: '/' })} className="flex items-center cursor-pointer">
          <img src={elinityLogo} alt="Elinity Logo" className="h-12 md:h-16 -mr-2 md:-mr-4 drop-shadow-[0_0_4px_#ff00ff40]" />
          <span
            className="text-xl  md:text-3xl font-bold bg-gradient-to-r from-[#d9d3fe] to-[#7759fd] bg-clip-text text-transparent font-comfortaa ml-3"
          
          >
            Elinity
          </span>
        </div>



        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop Nav Links */}
            <div
            className="hidden bg-[#050c9c] md:flex ml-28 px-7 py-2 rounded-lg space-x-4 shadow-md border-[0.25px] border-blue-400 shadow-purple-800/30 text-sm"
            style={{
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.1), inset 0 0 8px rgba(255, 255, 255, 0.05)',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: '500',
            }}
            >
            {navItems.map((item) => (
              <button
                key={item.name}
                className={`px-3 py-1 rounded-full relative transition-all duration-300 ease-in-out ${
                  isActive(item.name) ? 'text-white bg-white/10' : 'text-gray-400'
                } hover:text-white hover:bg-white/10 hover:scale-105`}
                onMouseEnter={() => setHoveredItem(item.name as string)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleNavClick(item)}
              >
                {isActive(item.name) && (
                  <span className="absolute left-0 -translate-x-1 top-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-white"></span>
                )}
                {item.name}
                {hoveredItem === item.name && !isActive(item.name) && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-[#f18950] to-[#8a5ce0] rounded-full transition-all duration-300 ease-in-out"></div>
                )}
              </button>
            ))}
            </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          <a
            href="/login"
            className="px-3 py-1 lg:px-4 lg:py-2 border border-[#7c4dff] text-white rounded-lg hover:bg-[#1f0e3e] transition-all duration-200 shadow-sm shadow-purple-700/30 text-sm"
            style={{
              boxShadow: '0 0 10px rgba(123, 77, 255, 0.2)',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: '500',
            }}
          >
            Login
          </a>
          <button
            onClick={() => navigate('/get-started')}
            className="px-3 py-1 lg:px-4 lg:py-2 rounded-lg text-white bg-gradient-to-r from-[#a155e7] to-[#7c4dff] hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-200 text-sm"
            style={{
              boxShadow: '0 0 15px rgba(123, 77, 255, 0.3)',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: '500',
            }}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-gradient-to-r from-[#1d005f] to-[#8a00c2] rounded-lg shadow-lg p-4 md:hidden">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className={`px-3 py-2 rounded-md text-left ${
                    isActive(item.name) ? 'text-white bg-white/10' : 'text-gray-300'
                  } hover:text-white hover:bg-white/10`}
                  onClick={() => handleNavClick(item)}
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: '500',
                  }}
                >
                  {item.name}
                </button>
              ))}
              <div className="border-t border-purple-700/50 pt-3 mt-2 flex flex-col space-y-2">
                <a
                  href="/login"
                  className="px-3 py-2 border border-[#7c4dff] text-white rounded-lg text-center hover:bg-[#1f0e3e] transition-all duration-200"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: '500',
                  }}
                >
                  Login
                </a>
                <button
                  onClick={() => { setMobileMenuOpen(false); navigate('/get-started'); }}
                  className="px-3 py-2 rounded-lg text-white bg-gradient-to-r from-[#a155e7] to-[#7c4dff] text-center hover:opacity-90 transition-all duration-200"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: '500',
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;