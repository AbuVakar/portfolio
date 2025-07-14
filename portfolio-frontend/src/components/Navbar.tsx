import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Sparkles, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'hire-me', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: Sparkles },
    { name: 'About', href: '#about', icon: Zap },
    { name: 'Skills', href: '#skills', icon: Zap },
    { name: 'Projects', href: '#projects', icon: Zap },
    { name: 'Hire Me', href: '#hire-me', icon: Zap },
    { name: 'Contact', href: '#contact', icon: Zap },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating particles background */}
      <div className="fixed top-0 left-0 w-full h-16 z-40 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-white/8 dark:bg-gray-900/8 backdrop-blur-2xl border-b border-white/10 dark:border-gray-700/10 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        {/* Gradient border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-16">
            {/* Enhanced Logo */}
            <motion.div
              whileHover={{ 
                scale: 1.05,
                filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))"
              }}
              className="relative group flex-shrink-0"
            >
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              <div className="relative text-xl lg:text-2xl font-bold px-3 py-2 rounded-2xl backdrop-blur-sm">
                <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg hover:from-blue-300 hover:via-purple-300 hover:to-pink-300 transition-all duration-500">Portfolio</span>
                
                {/* Animated sparkles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-1 -right-1 w-3 h-3"
                >
                  <Sparkles className="w-3 h-3 text-yellow-400" />
                </motion.div>
              </div>
            </motion.div>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    filter: "drop-shadow(0 10px 20px rgba(59, 130, 246, 0.3))"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-2 py-1.5 lg:px-3 lg:py-2 rounded-lg font-medium transition-all duration-500 group overflow-hidden text-xs lg:text-sm ${
                    activeSection === item.href.slice(1)
                      ? 'bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 text-blue-400 border border-blue-500/30'
                      : 'text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/20'
                  }`}
                >
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <span className="relative z-10 flex items-center gap-1 lg:gap-2">
                    <item.icon className="w-3 h-3 lg:w-4 lg:h-4" />
                    <span className="hidden xl:inline">{item.name}</span>
                    <span className="xl:hidden">{item.name.length > 6 ? item.name.substring(0, 6) + '...' : item.name}</span>
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Enhanced Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-2 lg:space-x-3">
              {/* Enhanced Theme Toggle */}
              <motion.button
                whileHover={{ 
                  scale: 1.1,
                  rotate: 180,
                  filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))"
                }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="relative p-2 lg:p-3 rounded-xl lg:rounded-2xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-500 group overflow-hidden"
              >
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl lg:rounded-2xl"></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-xl lg:rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm"></div>
                
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700 relative z-10 group-hover:text-blue-600 transition-colors duration-300" />
                ) : (
                  <Sun className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 relative z-10 group-hover:text-yellow-300 transition-colors duration-300" />
                )}
              </motion.button>
              <img
                src="/profile.jpg"
                alt="Abu Vakar"
                className="w-9 h-9 rounded-full shadow-md ml-2"
              />

              {/* Enhanced Mobile Menu Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.1,
                  filter: "drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))"
                }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative p-2 lg:p-3 rounded-xl lg:rounded-2xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl border border-white/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all duration-500 group overflow-hidden"
              >
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl lg:rounded-2xl"></div>
                
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <X className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700 dark:text-gray-300 relative z-10 group-hover:text-red-500 transition-colors duration-300" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Menu className="w-4 h-4 lg:w-5 lg:h-5 text-gray-700 dark:text-gray-300 relative z-10 group-hover:text-blue-600 transition-colors duration-300" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          {/* Enhanced Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, scaleY: 0 }}
                animate={{ opacity: 1, height: 'auto', scaleY: 1 }}
                exit={{ opacity: 0, height: 0, scaleY: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="lg:hidden overflow-hidden origin-top"
              >
                <div className="py-6 space-y-3 bg-white/10 dark:bg-gray-900/10 backdrop-blur-2xl border-t border-white/20 dark:border-gray-700/20 rounded-b-3xl mt-4">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ 
                        x: 10,
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        scale: 1.02
                      }}
                      onClick={() => scrollToSection(item.href)}
                      className={`block w-full text-left py-4 px-6 text-gray-300 hover:text-white rounded-2xl transition-all duration-300 font-medium group relative overflow-hidden ${
                        activeSection === item.href.slice(1)
                          ? 'bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 text-blue-400 border border-blue-500/30'
                          : 'hover:bg-white/10 border border-transparent hover:border-white/20'
                      }`}
                    >
                      {/* Hover background effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <span className="relative z-10 flex items-center gap-3">
                        <item.icon className="w-4 h-4" />
                        {item.name}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar; 