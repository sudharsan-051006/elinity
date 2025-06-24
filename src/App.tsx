import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatIsElinity from './components/WhatIsElinity';
import WhoIsElinityFor from './components/WhoIsElinityFor';
import WhatMakesElinitySpecial from './components/WhatMakesElinitySpecial';
import HowElinityWorks from './components/HowElinityWorks';
import FAQ from './components/FAQ';
import { setupRevealAnimations } from './utils/animations';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import LoginSignup from './pages/LoginSignup';
import GetStarted from './pages/GetStarted';
import PaymentPage from './pages/PaymentPage';
import Sitemap from './pages/Sitemap';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Stories from './pages/Stories';

function App() {
  // This effect runs once on component mount to set up global configurations.
  useEffect(() => {
    document.title = 'Nova | Experience Excellence';
    // Initializes the reveal-on-scroll animations for components.
    setupRevealAnimations();
    
    // Re-triggers the animations on scroll to handle dynamically loaded content.
    const handleScroll = () => {
      setupRevealAnimations();
    };
    
    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove the event listener when the component unmounts.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          {/* Defines all the application routes. */}
          <Routes>
            <Route path="/" element={
              <main className="flex flex-col">
                <Hero />
                <WhatIsElinity />
                <Features />
                <WhoIsElinityFor />
                <WhatMakesElinitySpecial />
                <HowElinityWorks />
                <FAQ />
               
              </main>
            } />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </div>
        <Footer className="mt-auto" />
      </div>
    </Router>
  );
}

export default App;