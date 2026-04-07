import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">
      <Navbar />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#FFCC00] py-12 px-4 sm:px-8 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] mb-4">Contact Us</h1>
          <p className="text-[#1a1a1a] text-lg max-w-2xl mx-auto leading-relaxed">
            If you have questions about our products, support services, or anything else, let us know and we'll respond promptly.
          </p>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto py-16 px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        {/* Left Column: Form Card */}
        <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">Contact Us</h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Subject</label>
              <select className="w-full px-4 py-3 bg-[#fdfdfd] border border-gray-200 rounded-md focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent outline-none transition-all text-gray-700">
                <option>General Inquiry</option>
                <option>Project Request</option>
                <option>Support</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Name</label>
              <input type="text" className="w-full px-4 py-3 bg-[#fdfdfd] border border-gray-200 rounded-md focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent outline-none transition-all" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 bg-[#fdfdfd] border border-gray-200 rounded-md focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent outline-none transition-all" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Organization</label>
              <input type="text" className="w-full px-4 py-3 bg-[#fdfdfd] border border-gray-200 rounded-md focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent outline-none transition-all" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Country</label>
              <select className="w-full px-4 py-3 bg-[#fdfdfd] border border-gray-200 rounded-md focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent outline-none transition-all text-gray-400">
                <option>Select Country</option>
                <option>United Kingdom</option>
                <option>United States</option>
                <option>Pakistan</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 bg-[#fdfdfd] border border-gray-200 rounded-md focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent outline-none transition-all resize-none"></textarea>
            </div>

            <button type="submit" className="bg-[#FFCC00] hover:bg-[#e6b800] text-[#1a1a1a] font-bold py-3 px-8 rounded-md transition-all duration-300 shadow-md transform hover:scale-105">
              Submit
            </button>
          </form>
        </motion.div>

        {/* Right Column: Branches Card */}
        <motion.div variants={itemVariants} className="bg-[#f2f2f2] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8">Our branches</h2>
          
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">City</label>
              <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent outline-none transition-all text-gray-700">
                <option>United Kingdom</option>
              </select>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">Indore</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                  3rd Floor, Headquarter Building, Satya Sai Square, Indore
                </p>
              </div>
              <a href="#" className="text-[#FFCC00] font-bold text-sm hover:underline">Get Directions</a>
            </div>

            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2361.353456743232!2d-1.706126623243163!3d53.71216667239611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487959082269a84d%3A0x6d9f7833c82d4715!2s33%20Park%20Ave%2C%20Liversedge%20WF15%207EQ%2C%20UK!5e0!3m2!1sen!2s!4v1712476500000!5m2!1sen!2s" 
                className="w-full h-full border-0" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Contact;
