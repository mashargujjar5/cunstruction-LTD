import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    region: "Australia",
    title: "Maple Residency Flyover",
    description: "A major infrastructure project enhancing urban connectivity with modern transit solutions.",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800", // Replace with your image
    video: "https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your video
  },
  {
    id: 2,
    region: "Georgia",
    title: "Skyline Commercial Plaza",
    description: "A high-rise commercial building designed for businesses, featuring open-plan office spaces and eco-friendly infrastructure.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
    video: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    id: 3,
    region: "Australia",
    title: "Vogtle Units 3 and 4",
    description: "Advanced nuclear power facility construction focusing on sustainable energy production.",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800",
    video: "https://www.w3schools.com/html/mov_bbb.mp4"
  }
];

const ProjectCard = ({ project, index }) => {
  const videoRef = useRef(null);

  // Card Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" } 
    }
  };

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative w-full h-[450px] overflow-hidden rounded-xl bg-gray-900 cursor-pointer shadow-lg"
    >
      {/* Background Image */}
      <img 
        src={project.image} 
        alt={project.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Video Overlay (Hidden by default, plays on hover) */}
      <video
        ref={videoRef}
        src={project.video}
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

      {/* Play Button Icon (Center on Hover) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
          <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Top Right Arrow Button (Appear on Hover) */}
      <div className="absolute top-4 right-4 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <div className="bg-yellow-400 p-2 rounded-full shadow-lg">
          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="absolute bottom-0 left-0 p-6 w-full">
        {/* Region Label */}
        <p className="text-yellow-400 font-bold text-sm mb-1">{project.region}</p>
        
        {/* Title */}
        <h3 className="text-white text-2xl font-bold mb-2 transition-transform duration-300 group-hover:-translate-y-1">
          {project.title}
        </h3>

        {/* Description (Slide up on hover) */}
        <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
          <p className="text-gray-200 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const RecentProjects = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Text */}
        <div className="mb-12">
          <p className="text-yellow-500 font-semibold mb-2">What We Done?</p>
          <h2 className="text-4xl font-extrabold text-gray-900">Our Recent Projects</h2>
        </div>

        {/* Grid Layout (Responsive: 1 col on mobile, 3 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;