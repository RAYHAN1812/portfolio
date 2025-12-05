import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Project Data including the newly provided projects
  const projects = [
    {
      id: 1,
      title: 'Event Management Platform',
      description: 'A full-stack web application for creating, managing, and attending events. It features secure user authentication, comprehensive CRUD operations for event listings, intuitive browsing, and registration/ticketing functionalities.',
      image: 'https://placehold.co/800x450/6D28D9/E2E8F0?text=Event+Management',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Authentication'],
      category: 'fullstack',
      liveLink: 'https://event-management3.vercel.app',
      githubLink: 'https://github.com/RAYHAN1812/event-management-platform', // Inferred repo name
    },
    {
      id: 2,
      title: 'Plannt - Tree Planting Initiative',
      description: 'A responsive frontend platform designed for a tree planting campaign. Key features include dynamic category browsing, detailed tree cards, modal viewing of tree details, and full shopping cart functionality (add, remove, total calculation) using Vanilla JavaScript.',
      image: 'https://placehold.co/800x450/059669/E2E8F0?text=Plannt+Website',
      tags: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'DaisyUI'],
      category: 'frontend',
      liveLink: 'https://plannnnt.netlify.app/',
      githubLink: 'https://github.com/RAYHAN1812/plannnt-tree-initiative', // Inferred repo name
    },
    {
      id: 3,
      title: 'The Book Heaven',
      description: 'A full-stack book marketplace where users can explore, review, and manage books. Features secure Firebase authentication, book listings, searching, and management views.',
      image: 'https://placehold.co/800x450/4F46E5/E2E8F0?text=The+Book+Heaven',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Firebase'],
      category: 'fullstack',
      liveLink: 'https://[live-link-placeholder-book-heaven]',
      githubLink: 'https://github.com/RAYHAN1812/[repo-link-book-heaven]',
    },
    {
      id: 4,
      title: 'Kids Toys Marketplace',
      description: 'A toy marketplace with dashboard and product management functionalities. Includes Firebase login/signup, add/update/delete toy listings, and browsing by category with a fully mobile-responsive design.',
      image: 'https://placehold.co/800x450/10B981/E2E8F0?text=Kids+Toys+Marketplace',
      tags: ['React.js', 'Tailwind CSS', 'Firebase'],
      category: 'frontend',
      liveLink: 'https://[live-link-placeholder-toys-marketplace]',
      githubLink: 'https://github.com/RAYHAN1812/[repo-link-toys-marketplace]',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const projectCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      y: -8,
      boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.4)",
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const filterButtonVariants = {
    inactive: { color: '#9CA3AF', backgroundColor: 'transparent' }, // Gray-400
    active: {
      color: '#E0F2F1', // Light Teal for contrast
      backgroundColor: '#4F46E5', // Indigo-600
    },
  };

  const filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  return (
    <motion.div
      className="p-6 md:p-8 min-h-screen bg-gray-900 text-white font-sans"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto">
        
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
        <motion.header className="mb-8 text-center" variants={itemVariants}>
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            My Portfolio
          </h2>
          <p className="mt-2 text-indigo-400">A showcase of my recent work.</p>
        </motion.header>

        {/* Filter Buttons */}
        <motion.div className="mb-10" variants={itemVariants}>
          <div className="flex items-center justify-center space-x-2 p-1 bg-gray-800 rounded-full backdrop-blur-sm shadow-inner">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                className={`w-full px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${activeFilter === filter.id ? 'shadow-md' : 'text-gray-400 hover:text-white'}`}
                onClick={() => setActiveFilter(filter.id)}
                animate={activeFilter === filter.id ? 'active' : 'inactive'}
                variants={filterButtonVariants}
                whileTap={{ scale: 0.98 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants}>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 shadow-xl transition-all duration-300 hover:border-indigo-600"
                variants={projectCardVariants}
                whileHover="hover"
                whileTap={{ scale: 0.99 }}
              >
                <div className="p-5">
                  {/* Project Image */}
                  <motion.div className="mb-4 overflow-hidden rounded-lg border border-gray-700 aspect-video">
                    <motion.img
                      alt={project.title}
                      className="w-full h-full object-cover"
                      src={project.image}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      // Fallback for image loading issues
                      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x450/1F2937/F9FAFB?text=Project+Image+Unavailable" }}
                    />
                  </motion.div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>

                  {/* Project Description */}
                  <p className="text-sm text-gray-400 mb-4">{project.description}</p>

                  {/* Tech Tags */}
                  <motion.div className="flex flex-wrap gap-2 mb-6" variants={containerVariants}>
                    {project.tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        className="text-xs font-medium bg-indigo-600/20 text-indigo-300 px-3 py-1 rounded-full border border-indigo-600/40"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Links */}
                  <div className="flex justify-between gap-3 mt-4">
                    {/* Live Demo Button */}
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-indigo-600 text-white font-semibold py-2.5 px-4 rounded-lg text-center transition-colors duration-300 hover:bg-indigo-500 flex items-center justify-center gap-2 text-sm"
                    >
                      Live Demo
                      <span className="material-symbols-outlined text-base">launch</span>
                    </a>

                    {/* GitHub Button */}
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-700 text-gray-200 font-semibold py-2.5 px-4 rounded-lg text-center transition-colors duration-300 hover:bg-gray-600 flex items-center justify-center gap-2 text-sm"
                    >
                      GitHub
                      <span className="material-symbols-outlined text-base">code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.p
              className="text-center text-gray-500 col-span-1 md:col-span-2 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No projects found for this category.
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;