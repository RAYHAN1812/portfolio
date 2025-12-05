import React, { useRef } from 'react';
import { motion } from 'framer-motion';
// Removed: import gsap from 'gsap'; // Removing unresolvable dependency

// Updated to use the new imgBB direct image link provided by the user
const PROFILE_IMAGE_URL = "https://i.ibb.co.com/8g4XrFSY/IMG-7019-imresizer.jpg";

const About = ({ onNavigate }) => {
  // Removed imageGradientRef and useEffect as GSAP is no longer used.

  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-16 bg-gray-900 text-white font-sans"
    >
      {/* LEFT SIDE CONTENT */}
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-xl space-y-6"
      >
        {/* Back button, now navigates to the 'home' section */}
        <motion.button
          onClick={() => onNavigate("home")}
          className="text-sm px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-indigo-400 hover:bg-gray-700 transition-all shadow-lg"
          whileHover={{ scale: 1.05, x: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          ⟵ Back to Home
        </motion.button>

        <h2 className="text-4xl font-bold tracking-wide text-white">About Me</h2>

        <p className="text-gray-300 leading-relaxed text-lg">
          Hi, I’m <span className="font-semibold text-indigo-400">Md Rayhan</span>, a passionate
          <span className="text-white"> Frontend Developer</span> dedicated to creating clean,
          responsive, and intuitive digital experiences. I specialize in <span className="font-medium text-white">React.js,
          Tailwind CSS, and modern JavaScript</span>, building interfaces that balance
          performance, usability, and visual appeal.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg">
          I love turning ideas into functional products — whether it’s crafting
          smooth UI interactions, optimizing layouts for all devices, or giving
          life to designs with thoughtful animations. I focus on attention to
          detail, clean code structure, and a strong user-centered mindset to
          ensure every project feels polished and impactful.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg">
          I’m continuously learning new tools and techniques to stay ahead in the
          fast-moving frontend world. Creating meaningful, modern, and accessible
          interfaces motivates me every day, and I enjoy collaborating to bring
          ideas to life through design and code.
        </p>
      </motion.div>

      {/* RIGHT SIDE IMAGE / GRADIENT */}
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-sm h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-gray-800"
      >
        <img
          src={PROFILE_IMAGE_URL} // Now using the new direct image link
          alt="Rayhan Profile"
          className="w-full h-full object-cover opacity-90"
          // Fallback to a placeholder if the new URL fails to load
          onError={(e) => { e.target.src = "https://placehold.co/400x500/2f3640/ffffff?text=MD+RAYHAN"; }} 
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"
        ></div>
      </motion.div>
    </section>
  );
};

export default About;