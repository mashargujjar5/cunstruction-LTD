import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', contactNumber: '', message: '' });
  };

  return (
    <section
      style={{ backgroundColor: '#f0f0f0' }}
      className="py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start"
      >
        {/* ===== LEFT SIDE ===== */}
        <motion.div variants={slideInLeft} className="flex flex-col gap-6">
          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold leading-snug"
            style={{ color: '#FFD900', fontStyle: 'italic' }}
          >
            We're Here to Help –{' '} Reach Out
            <span className="block"> Anytime!</span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base leading-relaxed"
            style={{ color: '#444444' }}
          >
            "Have questions, need assistance, or want to place an order? Our team
            is ready to assist you 24/7."
          </motion.p>

          {/* Contact Info Cards */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4 mt-2">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: '#fff' }}
              >
                <Mail size={18} strokeWidth={2} style={{ color: '#FFD900' }} />
              </div>
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-0.5"
                  style={{ color: '#FFD900' }}
                >
                  E-mail
                </p>
                <p className="text-sm font-medium" style={{ color: '#333333' }}>
                  info@jrfosterconstruction.com
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: '#fff',  }}
              >
                <MapPin size={18} strokeWidth={2} style={{ color: '#FFC107' }} />
              </div>
              <div>
                <p
                  className="text-xs font-bold uppercase tracking-widest mb-0.5"
                  style={{ color: '#FFD900' }}
                >
                  Address
                </p>
                <p className="text-sm font-medium" style={{ color: '#333333' }}>
                  33 Park Avenue, Park Avenue, Liversedge, West Yorkshire, WF15
                  7EQ
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ===== RIGHT SIDE – FORM ===== */}
        <motion.div variants={slideInRight}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <h1 className='text-3xl font-bold' style={{ color: '#FFD900' }}>Get in Touch with Us!</h1>
            {/* Name */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="contact-name"
                className="block text-xs font-bold uppercase tracking-widest mb-1"
                style={{ color: '#FFD900', }}
              >
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-sm outline-none rounded-none transition-all duration-200"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid white',
                  color: '#333333',
                  borderRadius: '4px'  
                }}
                onFocus={(e) => (e.target.style.borderColor = '#FFC107')}
                onBlur={(e) => (e.target.style.borderColor = 'white')}
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="contact-email"
                className="block text-xs font-bold uppercase tracking-widest mb-1"
                style={{ color: '#FFD900' }}
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-sm outline-none rounded-none transition-all duration-200"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid white',
                  color: '#333333',
                  borderRadius: '4px'   
                }}
                onFocus={(e) => (e.target.style.borderColor = '#FFC107')}
                onBlur={(e) => (e.target.style.borderColor = 'white')}
              />
            </motion.div>

            {/* Contact Number */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="contact-phone"
                className="block text-xs font-bold uppercase tracking-widest mb-1"
                style={{ color: '#FFD900' }}
              >
                Contact Number
              </label>
              <input
                id="contact-phone"
                name="contactNumber"
                type="tel"
                placeholder="Enter mobile number"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm outline-none rounded-none transition-all duration-200"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid white',
                  color: '#333333',
                  borderRadius: '4px'   
                }}
                onFocus={(e) => (e.target.style.borderColor = '#FFC107')}
                onBlur={(e) => (e.target.style.borderColor = 'white')}
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={itemVariants}>
              <label
                htmlFor="contact-message"
                className="block text-xs font-bold uppercase tracking-widest mb-1"
                style={{ color: '#FFD900' }}
              >
                Message:
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Messager..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 text-sm outline-none rounded-none resize-none transition-all duration-200"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid white  ',
                  color: '#333333',
                  borderRadius: '4px'   
                }}
                onFocus={(e) => (e.target.style.borderColor = '#FFC107')}
                onBlur={(e) => (e.target.style.borderColor = 'white')}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, backgroundColor: '#e6ac00', color: 'white'}}
                whileTap={{ scale: 0.97 }}
                className="w-full py-4 text-sm font-extrabold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors duration-200"
                style={{
                  backgroundColor: '#FFD900',
                  color: '#111111',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '4px'     ,
                  color: 'white'  
                }}
              >
                {submitted ? (
                  'Message Sent ✓'
                ) : (
                  <>
                    SUBMIT <ArrowRight size={16} strokeWidth={2.5} />
                  </>
                )}
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
