import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const contentData = [
  {
    id: "years",
    title: "Years Of Excellence",
    location: "London",
    projectName: "Westwood Shopping Center",
    description: "A complete remodeling project to modernize an existing shopping complex with a fresh, vibrant look, upgraded facilities, and improved accessibility.",
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "trusted",
    title: "Trusted By Clients",
    location: "New York",
    projectName: "Empire State Renovation",
    description: "Revitalizing one of the world's most iconic landmarks, enhancing energy efficiency and modernizing interior spaces while preserving its historic charm.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "built",
    title: "Built To Last",
    location: "Tokyo",
    projectName: "Skyline Towers",
    description: "Constructing state-of-the-art earthquake-resistant residential skyscrapers, offering luxury living and breathtaking city views.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format&fit=crop"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

const TraditionSection = () => {
  const [activeTab, setActiveTab] = useState(contentData[0]);

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left Content */}
        <div>
          <motion.h4 variants={itemVariants} className="text-[#FFC107] font-bold text-xl mb-3">
            How We Build History?
          </motion.h4>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-extrabold text-[#222222] mb-8 leading-tight">
            A Tradition Of Quality & Innovation
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-5 text-[#555555] text-[15px] leading-relaxed mb-10">
            <p>
              Founded With A Vision To Redefine Construction Standards, J R Foster Construction Has Been Delivering High-Quality Projects For Years. From Humble Beginnings, We Have Grown Into A Trusted Name In The Industry, Known For Our Commitment To Precision, Durability, And Innovation.
            </p>
            <p>
              From The Beginning, Our Mission Has Been Simple: To Build With Integrity, Precision, And Innovation. Over The Years, We Have Completed Countless Projects, Each Reflecting Our Commitment To Quality Craftsmanship, Sustainable Practices, And Client Satisfaction.
            </p>
            <p>
              With A Strong Foundation Built On Experience And Expertise, We Have Successfully Completed Numerous Residential, Commercial, And Infrastructure Projects.
            </p>
            <p>
              Our Journey Is Marked By Unwavering Dedication To Craftsmanship, Customer Satisfaction, And Sustainable Building Practices.
            </p>
          </motion.div>

          {/* Interactive Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-8 sm:gap-12">
            {contentData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`font-semibold text-[15px] pb-2 transition-all duration-300 relative cursor-pointer ${
                  activeTab.id === tab.id
                    ? 'text-[#222222]'
                    : 'text-[#777777] hover:text-[#444444]'
                }`}
              >
                {tab.title}
                {activeTab.id === tab.id && (
                  <motion.div
                    layoutId="tradition-underline"
                    className="absolute left-0 bottom-0 w-full h-[3px] bg-[#FFC107]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Right Content - Image Card */}
        <motion.div
          variants={itemVariants}
          className="relative h-[460px] lg:h-[600px] rounded-[20px] overflow-hidden shadow-2xl group cursor-pointer"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={activeTab.image}
                alt={activeTab.projectName}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

              {/* Bottom card info */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex justify-between items-end gap-4">
                <div className="max-w-[78%]">
                  <motion.h4
                    key={activeTab.id + '-loc'}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#FFC107] font-bold text-base mb-1"
                  >
                    {activeTab.location}
                  </motion.h4>
                  <motion.h3
                    key={activeTab.id + '-name'}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white text-2xl md:text-3xl font-bold mb-3 leading-tight"
                  >
                    {activeTab.projectName}
                  </motion.h3>
                  <motion.p
                    key={activeTab.id + '-desc'}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-300 text-sm md:text-[15px] leading-relaxed"
                  >
                    {activeTab.description}
                  </motion.p>
                </div>

                {/* Arrow Button */}
                <motion.div
                  key={activeTab.id + '-btn'}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="w-14 h-14 bg-[#FFC107] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                >
                  <ArrowUpRight className="text-black w-6 h-6" strokeWidth={2.5} />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TraditionSection;
