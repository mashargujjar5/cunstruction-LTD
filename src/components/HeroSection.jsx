import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import videos
import heroVideo1 from "../assets/video/hero-1.mp4";
import heroVideo2 from "../assets/video/hero-2.mp4";

const slides = [
  {
    id: 1,
    subtitle: "PRO HEADWAY LOGISTICS LLC",
    title: "Building The Future With Strength & Reliability",
    description:
      "Providing Top-Notch Construction Solutions For Residential, Commercial, And Industrial Projects.",
    video: heroVideo1,
  },
  {
    id: 2,
    subtitle: "INNOVATIVE ENGINEERING",
    title: "Transforming Concepts Into Reality",
    description:
      "Expert construction management and design-build services tailored to your specific needs.",
    video: heroVideo2,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[600px] md:h-[800px] lg:h-screen overflow-hidden ">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Video */}
          <div className="absolute inset-0 w-full h-full">
            <video
              ref={videoRef}
              key={slides[currentSlide].video}
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="w-full h-full object-cover"
            >
              <source src={slides[currentSlide].video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-black/20 z-10" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                },
              },
              exit: { opacity: 0, transition: { duration: 0.5 } },
            }}
            className="max-w-3xl"
          >
            {/* Subtitle Animation */}
            <motion.h3
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="text-[#FFD700] -mt-30 font-bold uppercase tracking-wider text-sm md:text-base mb-2 md:mb-4"
            >
              {slides[currentSlide].subtitle}
            </motion.h3>

            {/* Title Animation */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-4 md:mb-6"
            >
              {slides[currentSlide].title}
            </motion.h1>

            {/* Description Animation */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="text-gray-200 text-base md:text-lg lg:text-xl font-medium max-w-2xl mb-8 leading-relaxed"
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* Button Animation */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FFD700] hover:bg-[#e6c200] text-black font-semibold py-3.5 px-8 rounded-md shadow-[0_4px_14px_0_rgba(255,215,0,0.39)] transition-colors"
              >
                Request a Quote
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroSection;

