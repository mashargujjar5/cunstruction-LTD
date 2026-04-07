import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Award, Clock, Hexagon } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <UserCheck className="w-12 h-12 mb-4 mx-auto text-black" strokeWidth={2} />,
    title: "10+ YEARS OF EXPERIENCE",
  },
  {
    id: 2,
    icon: <Award className="w-12 h-12 mb-4 mx-auto text-black" strokeWidth={2} />,
    title: "SKILLED & CERTIFIED PROFESSIONALS",
  },
  {
    id: 3,
    icon: <Clock className="w-12 h-12 mb-4 mx-auto text-black" strokeWidth={2} />,
    title: "ON-TIME & ON-BUDGET DELIVERY",
  },
  {
    id: 4,
    icon: <Hexagon className="w-12 h-12 mb-4 mx-auto text-black" strokeWidth={2} />,
    title: "CUSTOMER-CENTRIC APPROACH",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger effect for items
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#222222] mb-4">
            Why Choose Us?
          </h2>
          <p className="text-[#555555] text-lg md:text-xl max-w-2xl mx-auto">
            Quality, reliability, and expertise – building trust with every project.
          </p>
        </motion.div>

        {/* Features Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% visible
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className={`flex flex-col items-center text-center p-6 sm:p-8 
                ${index !== features.length - 1 ? 'lg:border-r lg:border-gray-200' : ''}
                ${(index === 0 || index === 1) ? 'sm:border-b lg:border-b-0 sm:border-gray-200' : ''}
                ${index === 0 || index === 2 ? 'sm:border-r sm:border-gray-200 lg:border-r lg:border-gray-200' : ''}
              `}
            >
              {feature.icon}
              <h3 className="font-bold text-[#333333] text-[15px] leading-snug max-w-[200px] uppercase tracking-wide">
                {feature.title.split(' ').map((word, i) => {
                  // Basic formatting to match the line breaks in the design roughly
                  if (feature.title.includes("ON-TIME")) {
                     if (word === "ON-BUDGET") return <span key={i}><br/>{word} </span>
                  }
                  return word + " ";
                })}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
