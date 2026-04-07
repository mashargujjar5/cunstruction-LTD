import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';

import WhyChooseUs from './components/WhyChooseUs';
import RecentProjects from './components/RecentProjects';
import TraditionSection from './components/TraditionSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TestimonialsSection from './components/TestimonialsSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <RecentProjects />
      <TraditionSection />
      
      <ContactSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
