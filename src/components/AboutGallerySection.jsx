import React from 'react';
import { motion } from 'framer-motion';

const AboutGallerySection = () => {
  // Animation variants for staggered fade-in and slide-up
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each image animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section className="bg-black w-full overflow-hidden">
      <motion.div 
        className="flex flex-col w-full h-[60vh] md:h-[80vh] gap-1.5 md:gap-2 p-1.5 md:p-2 border-t-4 border-b-4 border-black"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* Top Row */}
        <div className="flex w-full h-1/2 gap-1.5 md:gap-2">
          {/* Top Left (w-45%) */}
          <motion.div variants={itemVariants} className="w-[45%] h-full overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="City Construction" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Optional dark overlay on hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Top Middle (w-25%) */}
          <motion.div variants={itemVariants} className="w-[25%] h-full overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Scaffolding workers" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Top Right (w-30%) */}
          <motion.div variants={itemVariants} className="w-[30%] h-full overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Construction Sunset" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="flex w-full h-1/2 gap-1.5 md:gap-2">
          {/* Bottom Left (w-28%) */}
          <motion.div variants={itemVariants} className="w-[28%] h-full overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Industrial Plant Dusk" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Bottom Middle (w-28%) */}
          <motion.div variants={itemVariants} className="w-[28%] h-full overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Cranes construction" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Bottom Right (w-44%) */}
          <motion.div variants={itemVariants} className="w-[44%] h-full overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Industrial plant overhead" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

export default AboutGallerySection;
