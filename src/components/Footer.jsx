import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#FFCC00] font-sans">
      {/* Main Footer Content */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Column 1 - Brand & Tagline */}
          <div className="flex flex-col justify-start">
            <div className="mb-3">
              <p className="text-[#1a1a1a] text-[18px] font-black uppercase leading-tight tracking-wide">
                J FOSTER
              </p>
              <p className="text-[#1a1a1a] text-[18px] font-black uppercase leading-tight tracking-wide">
                CONSTRUCTION LTD
              </p>
            </div>
            <p className="text-[#1a1a1a] text-[13px] font-medium leading-relaxed">
              Building the Future, Restoring the Past.
            </p>
          </div>

          {/* Column 2 - Useful Links */}
          <div className="flex flex-col">
            <h3 className="text-[#1a1a1a] text-[15px] font-black uppercase tracking-widest mb-4">
              USEFUL LINKS
            </h3>
            <ul className="flex flex-col gap-[6px]">
              {['HOME', 'SERVICES', 'ABOUT', 'PROJECTS', 'CONTACT US'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#1a1a1a] text-[13px] font-semibold hover:opacity-60 transition-opacity duration-200 tracking-wide"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-[#1a1a1a] text-[15px] font-black uppercase tracking-widest mb-4">
              CONTACT INFO
            </h3>

            {/* Address */}
            <div className="flex items-start gap-2 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-[#1a1a1a] mt-[2px] shrink-0"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              <p className="text-[#1a1a1a] text-[13px] font-medium leading-snug">
                33 Park Avenue, Park Avenue, Liversedge,<br />
                West Yorkshire, WF15 7EQ
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#1a1a1a] shrink-0"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <a
                href="mailto:info@jrfosterconstruction.com"
                className="text-[#1a1a1a] text-[13px] font-medium hover:opacity-60 transition-opacity duration-200"
              >
                info@jrfosterconstruction.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* YouTube */}
              <a href="#" className="text-[#1a1a1a] hover:opacity-60 transition-opacity duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" className="text-[#1a1a1a] hover:opacity-60 transition-opacity duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" className="text-[#1a1a1a] hover:opacity-60 transition-opacity duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* TikTok */}
              <a href="#" className="text-[#1a1a1a] hover:opacity-60 transition-opacity duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#e6b800] mx-4 sm:mx-8 md:mx-16 lg:mx-24" />

      {/* Copyright Bar */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 py-3 text-center">
        <p className="text-[#1a1a1a] text-[11px] font-medium">
          2024 All Right Reserved by Pro heading logistics LLC Designs bt Scallous
        </p>
      </div>
    </footer>
  );
};

export default Footer;
