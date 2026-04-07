import React from "react";
import { motion } from "framer-motion";

const MissionSection = () => {
  const missions = [
    {
      title: "Integrity",
      description:
        "We uphold highest standards of honesty and transparency in our dealings.",
    },
    {
      title: "Quality",
      description:
        "Our projects are built with superior materials and skilled craftsmanship.",
    },
    {
      title: "Innovation",
      description:
        "We stay ahead with the latest construction techniques and trends.",
    },
    {
      title: "Safety",
      description:
        "Every project prioritizes worker and safety through strict compliance.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-12 bg-cover bg-center overflow-hidden" 
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')` 
      }}
    >
      {/* Dark Overlay for background */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-8">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#FFD700] text-5xl md:text-6xl font-bold tracking-tight"
          >
            Our Mission
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#2D3139]/90 backdrop-blur-sm p-8 md:p-10 rounded-sm border-l-4 border-[#FFD700] max-w-xl relative"
          >
            {/* Subtle background icon/pattern */}
            <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </div>
            <p className="text-white text-xl md:text-2xl font-light italic text-right">
              At J R Foster Construction, we believe in
            </p>
          </motion.div>
        </div>

        {/* Mission Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                translateY: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              className="bg-white p-8 md:p-10 rounded-lg flex flex-col items-center text-center transition-all duration-300 group cursor-default"
            >
              <h3 className="text-black text-3xl font-bold mb-6 group-hover:text-[#FFD700] transition-colors duration-300">
                {mission.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {mission.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
