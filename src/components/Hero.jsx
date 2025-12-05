import React from "react";
import { motion } from "framer-motion";
// Removed: import Profile from "/portfolio/assets/1.jpg";
// Using a placeholder URL instead to resolve asset loading error.

// Buttons with meaningful symbols/short words
const buttonData = [
{ label: "Hire Me", icon: "✉️", section: "contact" },
{ label: "About Me", icon: "ℹ️", section: "about" },
{ label: "Skills", icon: "⭐", section: "skills" },
{ label: "Projects", icon: "💻", section: "projects" },
{ label: "Experience", icon: "📈", section: "experience" },
{ label: "Contact", icon: "📬", section: "contact" },
];

const Hero = ({ onNavigate }) => {
const containerVariants = {
hidden: { opacity: 0 },
visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const itemVariants = {
hidden: { opacity: 0, y: 20 },
visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const imageVariants = {
hidden: { opacity: 0, scale: 0.8 },
visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const buttonVariants = {
hidden: { opacity: 0, y: 20 },
visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
hover: { scale: 1.05, transition: { duration: 0.2 } },
tap: { scale: 0.95 },
};

// Placeholder image URL for MD Rayhan (MR initials)
const PROFILE_IMAGE_URL = "https://placehold.co/180x180/2f3640/ffffff?text=MR";

return (
<motion.section
className="flex flex-col items-center justify-center text-center px-4 py-12 md:py-20 max-w-4xl mx-auto min-h-screen bg-gray-900 text-white font-sans"
variants={containerVariants}
initial="hidden"
animate="visible"
>
{/* Profile Image */}
<motion.div className="mb-8" variants={itemVariants}>
<motion.div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto" variants={imageVariants}>
<img
          src={PROFILE_IMAGE_URL} // Using placeholder URL
          alt="MD Rayhan - Frontend Developer"
          className="w-full h-full rounded-full object-cover shadow-xl border-4 border-gray-800"
          onError={(e) => { e.target.src = PROFILE_IMAGE_URL; }}
        />
<motion.span
className="absolute bottom-2 right-2 block h-5 w-5 rounded-full bg-green-500 border-2 border-gray-800 ring-2 ring-green-500/50"
animate={{ scale: [1, 1.2, 1] }}
transition={{ duration: 2, repeat: Infinity }}
aria-label="Available for work"
/>
</motion.div>
</motion.div>


  {/* Name & Title */}
  <motion.div className="mb-6" variants={itemVariants}>
    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
      Hi, I'm MD Rayhan
    </h1>
    <h2 className="mt-2 text-lg md:text-xl font-medium text-indigo-400">Frontend Developer</h2>
  </motion.div>

  {/* Bio */}
  <motion.p
    className="mb-8 max-w-xl text-base md:text-lg text-gray-400"
    variants={itemVariants}
  >
    Highly motivated and detail-oriented Frontend Developer passionate about building responsive,
    user-friendly applications using React, Tailwind CSS, Firebase, and modern web technologies.
  </motion.p>

  {/* Buttons - Responsive */}
  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-3xl mx-auto"
    variants={itemVariants}
  >
    {buttonData.map((btn, idx) =>
      btn.type === "link" ? (
        // This block is now unused as the Hire Me button was changed to a navigation button
        <motion.a
          key={idx}
          href={btn.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md transition-all duration-200 hover:bg-indigo-500"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <span>{btn.icon}</span>
          <span>{btn.label}</span>
        </motion.a>
      ) : (
        <motion.button
          key={idx}
          onClick={() => onNavigate(btn.section)}
          // Use distinct styling for the primary 'Hire Me' button
          className={`flex items-center justify-center gap-2 w-full px-6 py-3 font-semibold rounded-lg shadow-md transition-all duration-200 
            ${btn.label === 'Hire Me' 
              ? 'bg-indigo-600 text-white hover:bg-indigo-500' 
              : 'bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700'
            }`}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <span>{btn.icon}</span>
          <span>{btn.label}</span>
        </motion.button>
      )
    )}
  </motion.div>
</motion.section>


);
};

export default Hero;