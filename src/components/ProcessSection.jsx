import React from "react";
import { motion } from "framer-motion";

// Local highly relevant construction HD images
import img1 from "../assets/process/proc_1.jpg";
import hover1 from "../assets/process/proc_1_hov.jpg";
import img2 from "../assets/process/proc_2.jpg";
import hover2 from "../assets/process/proc_2_hov.jpg";
import img3 from "../assets/process/proc_3.jpg";
import hover3 from "../assets/process/proc_3_hov.jpg";
import img4 from "../assets/process/proc_4.jpg";
import hover4 from "../assets/process/proc_4_hov.jpg";

const steps = [
  {
    title: "Consultation & Planning",
    description: "Understanding your vision and project needs.",
    image: img1,
    hoverImage: hover1,
  },
  {
    title: "Design & Blueprinting",
    description: "Creating architectural plans and technical layouts.",
    image: img2,
    hoverImage: hover4,
  },
  {
    title: "Construction & Execution",
    description: "Bringing the vision to life with precision.",
    image: img3,
    hoverImage: hover3,
  },
  {
    title: "Final Quality Check & Handover",
    description: "Ensuring every detail meets the highest standard before project completion.",
    image: img4,
    hoverImage: hover4,
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-white ">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            We follow a structured process to ensure seamless project execution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            We follow a structured process to ensure seamless project execution
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col text-center items-center group"
            >
              <div className="w-full aspect-[4/3] mb-6 overflow-hidden rounded-xl bg-gray-100 shadow-lg relative">
                <img
                  src={step.image}
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-100 group-hover:opacity-0 group-hover:scale-105"
                />
                <img
                  src={step.hoverImage}
                  alt={`${step.title} hover`}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-0 scale-100 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>
              <h3 className="text-[#FFD700] text-xl font-semibold mb-3 leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-[200px] mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
