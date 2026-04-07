import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/images/about/hero_1.png",
  },
  {
    id: 2,
    image: "/images/about/hero_2.png",
  },
  {
    id: 3,
    image: "/images/about/hero_3.png",
  },
  {
    id: 4,
    image: "/images/about/hero_4.png",
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const AboutHeroSection = () => {
  const [[currentSlide, direction], setSlide] = useState([0, 1]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide(([prev]) => [
        prev === slides.length - 1 ? 0 : prev + 1,
        1,
      ]);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    const dir = index > currentSlide ? 1 : -1;
    setSlide([index, dir]);
  };

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "420px" }}>
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.9, ease: [0.77, 0, 0.175, 1] }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Page Title Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          key={`text-${currentSlide}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
         

          {/* Main Title */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-xl">
            About <span className="text-[#FFD700]">Us</span>
          </h1>

          {/* Decorative line */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-[2px] w-12 bg-[#FFD700]" />
            <div className="w-2 h-2 rounded-full bg-[#FFD700]" />
            <div className="h-[2px] w-12 bg-[#FFD700]" />
          </div>
        </motion.div>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-400 rounded-full ${
              index === currentSlide
                ? "bg-[#FFD700] w-8 h-2"
                : "bg-white/50 hover:bg-white/80 w-2 h-2"
            }`}
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() =>
          setSlide(([prev]) => [
            prev === 0 ? slides.length - 1 : prev - 1,
            -1,
          ])
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-[#FFD700] border border-white/30 hover:border-[#FFD700] text-white hover:text-black transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={() =>
          setSlide(([prev]) => [
            prev === slides.length - 1 ? 0 : prev + 1,
            1,
          ])
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-[#FFD700] border border-white/30 hover:border-[#FFD700] text-white hover:text-black transition-all duration-300"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/20 z-20">
        <motion.div
          key={currentSlide}
          className="h-full bg-[#FFD700]"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
        />
      </div>
    </div>
  );
};

export default AboutHeroSection;
