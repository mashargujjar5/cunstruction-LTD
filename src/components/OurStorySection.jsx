import React from 'react';
import { motion } from 'framer-motion';

const OurStorySection = () => {
  return (
    <section className="bg-[#FFD700] w-full py-16 md:py-24 px-6 md:px-12 flex justify-center items-center">
      <motion.div 
        className="max-w-4xl flex flex-col items-start w-full"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mb-4">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 11H6C6 8.23858 8.23858 6 11 6V4C7.13401 4 4 7.13401 4 11V19H10V11ZM20 11H16C16 8.23858 18.238 6 21 6V4C17.134 4 14 7.13401 14 11V19H20V11Z" fill="#2A2A2A"/>
          </svg>
        </div>
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 tracking-wide">
          Our Story
        </h2>
        <p className="text-[#2A2A2A] text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
          J R Foster Construction Is A Leading Construction Company With A Strong Reputation For Quality Craftsmanship, Innovative Design, And Timely Project Completion. We Ensure That Every Project Meets The Highest Industry Standards. Whether It's A New Home, A Commercial Complex, Or An Infrastructure Project, We Bring A Dedicated Approach To Every Build.
        </p>
      </motion.div>
    </section>
  );
};

export default OurStorySection;
