import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full font-sans">
      {/* Top Bar */}
      <div className="bg-[#FFCC00] w-full py-2.5 px-4 sm:px-8 md:px-16 lg:px-24 flex justify-end items-center text-[#1a1a1a] font-medium text-sm">
        <div className="flex items-center gap-2">
          {/* Mail Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span className="text-[13px] font-semibold tracking-wide">info@jrfosterconstruction.com</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="w-full bg-white px-4 sm:px-8 md:px-16 lg:px-24 py-4 flex justify-between items-center shadow-sm">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center font-extrabold leading-none tracking-tight cursor-pointer">
          <span className="text-[#FFCC00] text-[18px] sm:text-[20px] uppercase font-black uppercase">J Foster</span>
          <span className="text-[#1a1a1a] text-[15px] sm:text-[17px] uppercase mt-0.5 font-black uppercase">Construction Ltd</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12 text-[#1a1a1a] font-semibold text-[15px]">
          <a href="#" className="relative text-[#1a1a1a] pb-[3px] flex flex-col">
            Home
            <span className="absolute left-0 bottom-0 w-full h-[3px] bg-[#FFCC00]"></span>
          </a>
          <a href="#" className="hover:text-[#FFCC00] transition-colors duration-200">About Us</a>
          <a href="#" className="hover:text-[#FFCC00] transition-colors duration-200">Services</a>
          <a href="#" className="hover:text-[#FFCC00] transition-colors duration-200">Contact Us</a>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <a href="#" className="inline-block border-[2px] border-[#FFCC00] text-[#FFCC00] px-7 py-2 rounded-full font-bold text-[13px] tracking-wider hover:bg-[#FFCC00] hover:text-white transition-all duration-300 uppercase">
            Get a Free Quote
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-900 hover:text-[#FFCC00] focus:outline-none"
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-64 px-4 py-4 shadow-md' : 'max-h-0 py-0'}`}>
        <div className="flex flex-col gap-4">
          <a href="#" className="text-gray-900 font-bold block w-fit relative pb-1">
            Home
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#FFCC00]"></span>
          </a>
          <a href="#" className="text-gray-800 font-semibold hover:text-[#FFCC00] block">About Us</a>
          <a href="#" className="text-gray-800 font-semibold hover:text-[#FFCC00] block">Services</a>
          <a href="#" className="text-gray-800 font-semibold hover:text-[#FFCC00] block">Contact Us</a>
          <a href="#" className="inline-block border-[2px] border-[#FFCC00] text-[#FFCC00] px-6 py-2 rounded-full font-bold text-sm text-center hover:bg-[#FFCC00] hover:text-white transition-all duration-300 mt-2 w-full max-w-[220px] uppercase">
            Get a Free Quote
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
