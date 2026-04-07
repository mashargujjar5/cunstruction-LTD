import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Store, Building2, Wrench, Building, Box, Route, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Commercial',
    description: 'We specialize in constructing high-quality, durable, and modern residential properties.',
    icon: Store,
    highlight: false,
  },
  {
    title: 'Residential',
    description: 'We specialize in constructing high-quality, durable, and modern residential properties.',
    icon: Building2,
    highlight: true,
  },
  {
    title: 'Renovation',
    description: 'We specialize in constructing high-quality, durable, and modern residential properties.',
    icon: Wrench,
    highlight: false,
  },
  {
    title: 'Remodeling',
    description: 'We specialize in constructing high-quality, durable, and modern residential properties.',
    icon: Building,
    highlight: false,
  },
  {
    title: 'Infrastructure',
    description: 'We specialize in constructing high-quality, durable, and modern residential properties.',
    icon: Box,
    highlight: false,
  },
  {
    title: 'Road Construction',
    description: 'We specialize in constructing high-quality, durable, and modern residential properties.',
    icon: Route,
    highlight: false,
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for the background image
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  // Slight opacity fade based on scroll for the header
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0.5, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 bg-gray-900 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0 h-[130%]" 
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-slate-900/80 z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <motion.div 
          style={{ opacity: headerOpacity, y: headerY }}
          className="text-center text-white mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Building Excellence, One Project At A Time
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15, 
                type: "spring", 
                stiffness: 70,
                damping: 15
              }}
              whileHover={{ y: -10 }}
              className={`group relative p-8 md:p-10 rounded-[16px] flex flex-col items-center text-center overflow-hidden transition-all duration-500 shadow-xl z-10 ${
                service.highlight ? 'text-black' : 'text-gray-900'
              }`}
            >
              {/* Base Background */}
              <div className={`absolute inset-0 -z-20 transition-colors duration-500 ${service.highlight ? 'bg-[#FFCC00]' : 'bg-white'}`} />
              
              {/* Hover Background fill effect */}
              {!service.highlight && (
                <div className="absolute inset-0 -z-10 bg-[#FFCC00] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out origin-bottom" />
              )}
              {service.highlight && (
                 <div className="absolute inset-0 -z-10 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out origin-bottom" />
              )}

              {/* Icon */}
              <div className={`mb-6 transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2 ${
                service.highlight 
                  ? 'text-black group-hover:text-[#d4aa00]' 
                  : 'text-[#FFCC00] group-hover:text-black'
              }`}>
                <service.icon size={56} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 relative z-10">{service.title}</h3>

              {/* Description */}
              <p className={`mb-8 leading-relaxed max-w-xs relative z-10 transition-colors duration-300 ${
                service.highlight 
                  ? 'text-black/80 group-hover:text-gray-600' 
                  : 'text-gray-500 group-hover:text-black/80'
              }`}>
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className={`mt-auto font-bold text-sm tracking-wide uppercase flex items-center gap-2 transition-all duration-300 relative z-10 ${
                service.highlight 
                  ? 'text-black group-hover:text-black' 
                  : 'text-gray-800 group-hover:text-black'
              }`}>
                <span className="relative overflow-hidden group/link">
                   Learn More
                   <span className="absolute left-0 bottom-0 w-full h-[2px] bg-current -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                </span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
