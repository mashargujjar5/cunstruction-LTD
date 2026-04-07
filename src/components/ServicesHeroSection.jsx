import React from "react";
import { motion } from "framer-motion";
import servicesBg from "../assets/images/services_bg.png";

const ServicesHeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: "420px" }}>
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${servicesBg})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

      {/* Page Title Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {/* Subtitle */}
          <h3 className="text-[#FFCC00] font-bold uppercase tracking-wider text-sm md:text-base mb-3">
            What We Do
          </h3>

          {/* Main Title */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-xl">
            Our <span className="text-[#FFCC00]">Services</span>
          </h1>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-[2px] w-12 bg-[#FFCC00]" />
            <div className="w-2 h-2 rounded-full bg-[#FFCC00]" />
            <div className="h-[2px] w-12 bg-[#FFCC00]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesHeroSection;
