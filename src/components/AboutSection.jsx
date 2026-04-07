import React, { useRef, useState, useEffect } from "react";
import { useInView, animate, motion } from "framer-motion";

const AnimatedNumber = ({ value, prefix = "", suffix = "", decimals = 0, duration = 2.5 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: duration,
        ease: "easeOut",
        onUpdate(v) {
          setDisplay(v);
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full py-20 lg:py-32 bg-[#0F1115] overflow-hidden">
      {/* Background Texture/Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none grayscale"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1115]/80 via-[#0F1115] to-[#0F1115]/80 pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12"
      >
        {/* Top Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-20 md:mb-28">
          <motion.span className="text-[#FFD700] font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
            Excellence in Construction
          </motion.span>
          <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
            Building Dreams, <span className="text-[#FFD700]">One<br />Project</span> At A Time.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed">
            At J R Foster Construction, we don't just build structures—we build trust, reliability, and lasting
            relationships. With years of expertise in residential, commercial, and infrastructure projects, we are
            committed to delivering excellence in every brick we lay.
          </p>
        </motion.div>

        {/* content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side: Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="inline-block border-l-4 border-[#FFD700] pl-6">
              <h3 className="text-[#FFD700] text-xl font-bold mb-2">
                Who We Are?
              </h3>
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-snug">
                What We Focus On Mutual<br />Success, Everyone Wins
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed">
              <p>
                J R Foster Construction is a leading construction company with over <span className="text-white font-semibold">10+ years</span> of experience in delivering landmark projects across the UK.
              </p>
              <p>
                Based in <span className="text-white font-semibold">Manchester</span>, we are a trusted name in the industry, known for delivering high-quality projects with precision, integrity, and innovation.
              </p>
              <p className="hidden md:block">
                We specialize in a broad range of services, from large-scale renovations to major infrastructure. Our team of skilled professionals is dedicated to transforming visions into reality through meticulous planning and superior craftsmanship.
              </p>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#FFD700", color: "#000" }}
              whileTap={{ scale: 0.95 }}
              className="group border-2 border-[#FFD700] text-[#FFD700] font-bold py-4 px-10 rounded-sm transition-all duration-300 flex items-center gap-3"
            >
              Learn More About Us
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right Side: Stats Vertical Display */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 gap-8">
            {[
              { label: "Years in Operation", value: 10, suffix: "+" },
              { label: "Construction Volume", value: 2.3, prefix: "$", suffix: "B+", decimals: 1 },
              { label: "Top Ranking Contractors", value: 1000, prefix: "#", suffix: "" }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-[#FFD700]/30 transition-colors group"
              >
                <div className="text-[#FFD700] text-5xl md:text-6xl font-black mb-2 flex items-center gap-2 group-hover:scale-105 transition-transform origin-left">
                  <AnimatedNumber 
                    value={stat.value} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix} 
                    decimals={stat.decimals} 
                  />
                </div>
                <p className="text-gray-300 text-lg md:text-xl font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700] opacity-[0.03] blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFD700] opacity-[0.03] blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
    </section>
  );
};

export default AboutSection;

