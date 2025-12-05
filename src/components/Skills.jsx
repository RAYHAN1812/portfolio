import React from 'react';
import { motion } from 'framer-motion';

// --- Skill Data Integration ---
const profileData = {
  technicalSkills: [
    { emoji: '💻', name: 'React.js' },
    { emoji: '🌐', name: 'JavaScript' },
    { emoji: '💨', name: 'Tailwind CSS' },
    { emoji: '📄', name: 'HTML5' },
    { emoji: '🎨', name: 'CSS3' },
    { emoji: '⚙️', name: 'Node.js/Express.js' },
    { emoji: '🗄️', name: 'MongoDB' },
    { emoji: '🔥', name: 'Firebase' },
    { emoji: '🛠️', name: 'Git & GitHub' },
    { emoji: '📈', name: 'Excel' }, // Added
    { emoji: '💾', name: 'SQL' }, // Added
    { emoji: '📊', name: 'Power BI Data Analysis' }, // Added
  ],
  softSkills: [
    { icon: '🧠', name: 'Problem-Solving' },
    { icon: '🤝', name: 'Teamwork & Collaboration' },
    { icon: '🗣️', name: 'Communication Skills' },
    { icon: '⏱️', name: 'Time Management' },
    { icon: '📊', name: 'Presentation & Reporting' },
  ],
};
// --- End Skill Data ---


const Skills = ({ onNavigate }) => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hover: {
      y: -5,
      scale: 1.03,
      boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.3)",
      transition: { duration: 0.2 },
    },
  };

  const SectionTitle = ({ children }) => (
    <motion.h2 
      className="text-2xl font-bold text-indigo-400 border-b border-indigo-700 pb-2 mb-6"
      variants={itemVariants}
    >
      {children}
    </motion.h2>
  );


  return (
    <motion.div
      className="min-h-screen p-6 sm:p-8 bg-gray-900 text-white font-sans"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto py-10">
        
        {/* Back Button */}
        <motion.button
          className="mb-10 flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition shadow-lg"
          onClick={() => onNavigate('home')}
          whileHover={{ x: -4, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>← Back to Home</span>
        </motion.button>

        {/* Main Header */}
        <motion.header className="text-center mb-12" variants={itemVariants}>
            <h1 className="text-5xl font-extrabold text-white">Core Skills</h1>
            <p className="text-gray-400 mt-2">My technical and interpersonal strengths.</p>
        </motion.header>

        <motion.main className="space-y-12" variants={containerVariants}>
          
          {/* Technical Skills Section */}
          <motion.section variants={itemVariants}>
            <SectionTitle>Technical Expertise</SectionTitle>
            <motion.div
              // Updated grid layout to accommodate more skills neatly
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
              variants={containerVariants}
            >
              {profileData.technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/70 p-4 rounded-xl shadow-md border border-gray-700 flex flex-col items-center justify-center text-center space-y-2 cursor-pointer"
                  variants={skillCardVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-3xl">{skill.emoji}</span>
                  <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Soft Skills Section */}
          <motion.section variants={itemVariants}>
            <SectionTitle>Interpersonal Skills</SectionTitle>
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" variants={containerVariants}>
              {profileData.softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 bg-gray-800/70 p-4 rounded-xl shadow-md border border-gray-700"
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-indigo-600/20 p-2 rounded-full">
                    <span className="text-xl">{skill.icon}</span>
                  </div>
                  <span className="text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

        </motion.main>
      </div>
    </motion.div>
  );
};

export default Skills;