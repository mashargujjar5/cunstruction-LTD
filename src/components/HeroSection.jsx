import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    subtitle: "PRO HEADWAY LOGISTICS LLC",
    title: "Building The Future With Strength & Reliability",
    description:
      "Providing Top-Notch Construction Solutions For Residential, Commercial, And Industrial Projects.",
    image:
      "https://images.unsplash.com/photo-1541888081155-27a9442a8b92?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 2,
    subtitle: "INNOVATIVE ENGINEERING",
    title: "Transforming Concepts Into Reality",
    description:
      "Expert construction management and design-build services tailored to your specific needs.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
  {
    id: 3,
    subtitle: "SUSTAINABLE DEVELOPMENT",
    title: "Eco-Friendly Construction Practices",
    description:
      "We integrate green technologies and sustainable materials to build a better tomorrow.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[600px] md:h-[800px] overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image with slight scale animation */}
          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-black/40" />{" "}
          {/* Extra darkening if needed */}
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24 flex flex-col justify-center">
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
                  staggerChildren: 0.2, // Stagger text appearance
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
              className="text-[#FFD700] font-bold uppercase tracking-wider text-sm md:text-base mb-2 md:mb-4"
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
