import React from 'react';
import { motion } from 'framer-motion';

const Experience = ({ onNavigate }) => {
  // Updated with Md Rayhan's actual Education History
  const experiences = [
    {
      id: 1,
      type: 'education',
      icon: 'school',
      period: '2020 - 2024',
      title: 'B.Sc. in Computer Science and Engineering',
      company: 'University of Liberal Arts Bangladesh, Dhaka',
      description:
        'Focused on web technologies, full-stack development (MERN stack), and dedicated to building modern, responsive applications. Graduation expected in 2024.',
    },
    // Note: Other mock work and education entries have been removed.
    // This component can be updated with professional work experience when available.
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="p-6 md:p-8 min-h-screen bg-gray-900 text-white font-sans"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <motion.button
          className="mb-10 flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition shadow-lg"
          onClick={() => onNavigate('home')}
          whileHover={{ x: -4, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>← Back to Home</span>
        </motion.button>

        {/* Header */}
        <motion.header className="text-center mb-12" variants={itemVariants}>
          <h1 className="font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Experience & Education
          </h1>
          <p className="mt-2 text-base sm:text-lg text-indigo-400">
            My professional journey and academic background.
          </p>
        </motion.header>

        {/* Timeline */}
        <motion.div className="relative pl-8" variants={containerVariants}>
          {/* Vertical Line */}
          <motion.div
            className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-700"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{ originY: 0 }}
          />

          {/* Timeline Items */}
          {experiences.map((item, index) => (
            <motion.div key={item.id} className="mb-12" variants={timelineItemVariants}>
              {/* Timeline Dot */}
              <motion.div
                className="absolute left-4 top-2 -ml-2.5 h-5 w-5 rounded-full bg-indigo-600 ring-4 ring-gray-900"
                variants={dotVariants}
                // Combined all transition properties into one object
                transition={{
                  delay: index * 0.1, // Initial stagger delay
                  scale: {
                    duration: 0.4, // Duration for the initial scale up
                    ease: 'easeOut',
                  },
                  // Pulse transition settings
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2, 
                }}
                // Added a background pulse to highlight the dot
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
              />

              {/* Content Card */}
              <motion.div
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-xl transition-all duration-300 hover:border-indigo-600"
                whileHover={{ y: -4, boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.4)" }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <motion.div
                    className="flex-shrink-0 bg-indigo-600/20 text-indigo-400 p-3 rounded-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Assuming you have material symbols linked in your HTML */}
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </motion.div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0">
                    <time className="text-sm font-medium text-gray-400">
                      {item.period}
                    </time>
                    <h3 className="mt-1 text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-base text-indigo-400">
                      {item.company}
                    </p>
                    <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Experience;