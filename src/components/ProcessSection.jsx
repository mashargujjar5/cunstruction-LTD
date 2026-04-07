import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Consultation & Planning",
    description: "Understanding your vision and project needs.",
    image: "/src/assets/process1.png", // Generated image
  },
  {
    title: "Design & Blueprinting",
    description: "Creating architectural plans and technical layouts.",
    image: "/src/assets/process2.png", // Generated image
  },
  {
    title: "Construction & Execution",
    description: "Bringing the vision to life with precision.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1000&auto=format&fit=crop", // Construction image
  },
  {
    title: "Final Quality Check & Handover",
    description: "Ensuring every detail meets the highest standard before project completion.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c29596ba?q=80&w=1000&auto=format&fit=crop", // Handover image
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
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
              <div className="w-full aspect-[4/3] mb-6 overflow-hidden rounded-xl bg-gray-100 shadow-lg">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = `https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1000&auto=format&fit=crop`; // Fallback
                  }}
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
