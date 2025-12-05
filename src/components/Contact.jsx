import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- Dependency Fix: Load EmailJS directly via script tag ---

// --- EmailJS Configuration ---
const SERVICE_ID = 'service_umi8h8l';
const TEMPLATE_ID = 'template_kju6vhz';
const PUBLIC_KEY = 'Uev6Wx5MHeiz5Q0tD';
// --- End Configuration ---

// --- Contact and Social Data ---
const CONTACT_INFO = {
  phone: '+8801610607010',
  email: 'md.rayhan.cse@ulab.edu.bd',
};

const SOCIAL_LINKS = [
  { 
    name: 'LinkedIn', 
    icon: '💼', 
    href: 'https://www.linkedin.com/in/md-rayhan-96212b1b7/',
    color: 'text-blue-500' 
  },
  { 
    name: 'GitHub', 
    icon: '💻', 
    href: 'https://github.com/RAYHAN1812/MD-RAYHAN',
    color: 'text-gray-300' 
  },
  { 
    name: 'Facebook', 
    icon: '📘', 
    href: 'https://www.facebook.com/MDRAIHAN181299/',
    color: 'text-blue-400' 
  },
];
// --- End Contact and Social Data ---


const Contact = ({ onNavigate }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isEmailJSLoaded, setIsEmailJSLoaded] = useState(false);

  // Effect to load the EmailJS script and check for its availability
  useEffect(() => {
    // Check if script is already loaded
    if (window.emailjs) {
        setIsEmailJSLoaded(true);
        return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;

    script.onload = () => {
        // Initialize EmailJS with the Public Key once the script is loaded
        if (window.emailjs) {
            window.emailjs.init(PUBLIC_KEY);
            setIsEmailJSLoaded(true);
        } else {
            console.error('EmailJS script loaded but object not found.');
            setError('Email service failed to load.');
        }
    };
    
    script.onerror = () => {
        console.error('Failed to load EmailJS script.');
        setError('Email service failed to load.');
    };

    document.head.appendChild(script);

    return () => {
        // Cleanup the script tag if the component unmounts
        document.head.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    // Clear error state on new input
    setError(''); 
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    // Check if the service is loaded before attempting to send
    if (!isEmailJSLoaded || !window.emailjs) {
        setError('Email service is not ready. Please try again in a moment.');
        console.error('EmailJS not loaded or initialized.');
        return;
    }

    // Check for correct configuration (important for debugging)
    if (SERVICE_ID === '' || TEMPLATE_ID === '' || PUBLIC_KEY === '') {
        setError('Email configuration missing. Cannot send message.');
        console.error('EmailJS configuration error: One or more IDs/Keys are empty.');
        return;
    }

    // Attempt to send the email using the globally available object
    window.emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setError(''); // Clear any previous error
        setFormData({ name: '', email: '', message: '' });
        // Hide the 'Message Sent' confirmation after 3 seconds
        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        // Using a custom error message instead of 'alert()'
        setError('Failed to send message. Please try again later.');
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-r from-indigo-900 via-gray-900 to-black font-sans pt-16"
    >
      {/* Back Button (Assuming 'home' navigation is available) */}
      <motion.button
        onClick={() => onNavigate('home')}
        className="self-start mb-6 px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back
      </motion.button>
      
      {/* Main Contact Grid Container */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
        
        {/* LEFT COLUMN: Contact Details and Social Links */}
        <motion.div
          className="space-y-8 p-6 lg:p-0 text-white"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4 border-b border-indigo-500/50 pb-2">Connect Directly</h2>

          {/* Contact Items (Phone and Email) */}
          <div className="space-y-5">
            {/* Phone */}
            <div className="flex items-start space-x-4">
              <span className="text-indigo-400 text-3xl mt-1">📞</span>
              <div>
                <p className="text-lg font-semibold text-indigo-300">Phone</p>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl text-gray-300 hover:text-white transition">
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-start space-x-4">
              <span className="text-indigo-400 text-3xl mt-1">📧</span>
              <div>
                <p className="text-lg font-semibold text-indigo-300">Email</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl text-gray-300 hover:text-white transition">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="pt-6 border-t border-gray-700/50 mt-6">
            <h3 className="text-2xl font-semibold text-white mb-4">Find Me Online</h3>
            <div className="flex space-x-8">
              {SOCIAL_LINKS.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`text-5xl ${link.color} hover:scale-110 transition-transform duration-300`}
                  aria-label={`${link.name} Profile`}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Contact Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          className="bg-gray-800 p-8 rounded-3xl w-full shadow-2xl flex flex-col gap-5 border border-gray-700/50"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1 className="text-3xl font-bold text-white text-center mb-4">Send a Message</h1>
          
          {/* Submission Confirmation / Form Fields */}
          {submitted ? (
            <p className="text-center text-green-400 text-xl font-semibold p-4 bg-gray-700 rounded-xl">
              ✅ Message Sent Successfully!
            </p>
          ) : (
            <>
              <input 
                name="name" 
                placeholder="Your Name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                className="p-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                disabled={!isEmailJSLoaded} // Disable fields until service is ready
              />
              <input 
                name="email" 
                type="email" 
                placeholder="Your Email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                className="p-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                disabled={!isEmailJSLoaded} // Disable fields until service is ready
              />
              <textarea 
                name="message" 
                placeholder="Your Message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                rows={5}
                className="p-3 rounded-xl bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none transition duration-200"
                disabled={!isEmailJSLoaded} // Disable fields until service is ready
              />
              
              {/* Error Message Display */}
              {error && (
                <p className="text-red-400 text-center text-sm p-2 rounded-lg bg-gray-700">
                  {error}
                </p>
              )}

              {/* Submit Button */}
              <motion.button 
                type="submit"
                className={`py-3 rounded-xl font-semibold transition duration-200 ${isEmailJSLoaded ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/40' : 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-70'}`}
                whileHover={{ scale: isEmailJSLoaded ? 1.02 : 1 }}
                whileTap={{ scale: isEmailJSLoaded ? 0.98 : 1 }}
                disabled={!isEmailJSLoaded}
              >
                {isEmailJSLoaded ? 'Send Message' : 'Loading Email Service...'}
              </motion.button>
            </>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;