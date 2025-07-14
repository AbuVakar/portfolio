import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Download, ChevronDown, Youtube, Link } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Animated Layered Waves Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Wave 1 */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 w-full h-2/3"
          style={{ zIndex: 1 }}
        >
          <svg width="100%" height="100%" viewBox="0 0 1440 500" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0,400 Q360,300 720,400 T1440,400 V500 H0Z" fill="url(#wave1)" />
            <defs>
              <linearGradient id="wave1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.7" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        {/* Wave 2 */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 60, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-0 left-0 w-full h-2/3"
          style={{ zIndex: 2 }}
        >
          <svg width="100%" height="100%" viewBox="0 0 1440 500" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0,420 Q360,340 720,420 T1440,420 V500 H0Z" fill="url(#wave2)" />
            <defs>
              <linearGradient id="wave2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        {/* Wave 3 */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-0 left-0 w-full h-2/3"
          style={{ zIndex: 3 }}
        >
          <svg width="100%" height="100%" viewBox="0 0 1440 500" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0,440 Q360,380 720,440 T1440,440 V500 H0Z" fill="url(#wave3)" />
            <defs>
              <linearGradient id="wave3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.4" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        {/* Wave 4 (highlight) */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-0 left-0 w-full h-2/3"
          style={{ zIndex: 4 }}
        >
          <svg width="100%" height="100%" viewBox="0 0 1440 500" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M0,460 Q360,420 720,460 T1440,460 V500 H0Z" fill="url(#wave4)" />
            <defs>
              <linearGradient id="wave4" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
        {/* Particles in upper (black) area */}
        <div className="absolute top-0 left-0 w-full h-1/2 pointer-events-none z-10">
          {[...Array(72)].map((_, i) => {
            // Star size: 90% small, 10% slightly bigger
            const isBig = i % 10 === 0;
            const size = isBig ? 3 + Math.random() * 1.2 : 1.5 + Math.random();
            // Glow: brighter for big stars
            const glow = isBig ? '0 0 16px 4px #fff, 0 0 8px 2px #fff7' : '0 0 8px 2px #fff7';
            // Position: avoid clustering by offsetting every 8th star
            const left = (Math.random() * 100 + (i % 8) * 3) % 100;
            const top = (Math.random() * 100 + (i % 6) * 2) % 100;
            // Twinkle: most slow, some faster
            const twinkleDelay = Math.random() * 4;
            const twinkleDuration = isBig ? 4 + Math.random() * 2 : 7 + Math.random() * 4;
            // Motion: mostly up-down/circular, some diagonal
            const motionType = i % 6;
            let animateProps = {};
            if (motionType === 0) {
              // up-down
              animateProps = {
                opacity: [0.3, 1, 0.3],
                y: [0, 18 + Math.random() * 18, 0],
                scale: [1, 1.2, 1]
              };
            } else if (motionType === 1) {
              // left-right
              animateProps = {
                opacity: [0.3, 1, 0.3],
                x: [0, 18 + Math.random() * 18, 0],
                scale: [1, 1.2, 1]
              };
            } else if (motionType === 2) {
              // diagonal
              animateProps = {
                opacity: [0.3, 1, 0.3],
                x: [0, 12 + Math.random() * 16, 0],
                y: [0, 12 + Math.random() * 16, 0],
                scale: [1, 1.2, 1]
              };
            } else if (motionType === 3) {
              // circular
              const r = 10 + Math.random() * 10;
              animateProps = {
                opacity: [0.3, 1, 0.3],
                x: [0, r, 0, -r, 0],
                y: [0, r, 0, -r, 0],
                scale: [1, 1.2, 1, 1.2, 1]
              };
            } else if (motionType === 4) {
              // gentle diagonal drift
              animateProps = {
                opacity: [0.3, 1, 0.3],
                x: [0, 8 + Math.random() * 8, 0],
                y: [0, -8 - Math.random() * 8, 0],
                scale: [1, 1.1, 1]
              };
            } else {
              // subtle up-down
              animateProps = {
                opacity: [0.3, 1, 0.3],
                y: [0, 8 + Math.random() * 8, 0],
                scale: [1, 1.1, 1]
              };
            }
            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0.5 + Math.random() * 0.3,
                  scale: 1,
                  x: 0,
                  y: 0
                }}
                animate={animateProps}
                transition={{
                  duration: twinkleDuration,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: twinkleDelay
                }}
                className="absolute rounded-full"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  background: `#fff`,
                  filter: 'blur(0.5px)',
                  boxShadow: glow
                }}
              />
            );
          })}
        </div>
      </div>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/30 z-10"></div>
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-lg md:text-2xl font-semibold text-white mb-2 flex items-center gap-2 text-center w-full font-playfair italic"
          >
            <motion.span
              animate={{
                rotate: [0, 20, -10, 20, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
                ease: "easeInOut",
              }}
              style={{ display: "inline-block", transformOrigin: "70% 70%" }}
            >
              👋
            </motion.span>
            Hello, I'm
          </motion.p>
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] bg-clip-text text-transparent font-playfair pl-2">
              ABU VAKAR
            </span>
          </motion.h1>
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-gray-200 font-playfair italic"
          >
            Full Stack Developer
          </motion.h2>
          {/* Typewriter Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed min-h-[56px]"
          >
            <span className="bg-gradient-to-r from-pink-400 via-blue-400 to-green-400 bg-clip-text text-transparent font-semibold font-outfit">
              <Typewriter
                words={[
                  'MERN Developer',
                  'React.js & Node.js Developer',
                  'AI/ML Developer',
                  'Building Scalable Web Apps',
                  'Open to Freelance & Full-time Roles'
                ]}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={38}
                deleteSpeed={28}
                delaySpeed={1200}
              />
            </span>
          </motion.p>
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                y: -2
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/abu-vakar-resume.pdf';
                link.download = 'Abu_Vakar_Resume.pdf';
                link.click();
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800 text-white rounded-full font-semibold hover:from-blue-900 hover:via-purple-900 hover:to-pink-900 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl border border-white/20 backdrop-blur-sm"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.4)",
                borderColor: "rgba(255, 255, 255, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="px-8 py-4 border-2 border-white/60 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm relative overflow-hidden group"
            >
              <span className="relative z-10">Learn More</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </motion.div>
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-row justify-center items-center gap-3 md:gap-6 mb-8 overflow-x-auto"
          >
            <motion.a
              whileHover={{ 
                scale: 1.2, 
                y: -5,
                boxShadow: "0 10px 25px rgba(255, 255, 255, 0.3)",
                rotate: 360
              }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/AbuVakar" target="_blank" rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-full hover:from-white/30 hover:to-white/20 transition-all duration-300 border border-white/30 hover:border-white/50 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
              <Github className="w-6 h-6 relative z-10 text-white group-hover:text-gray-200 transition-colors duration-300" />
            </motion.a>
            <motion.a
              whileHover={{ 
                scale: 1.2, 
                y: -5,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)",
                rotate: 360
              }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/AbuVakar" target="_blank" rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-blue-600/80 to-blue-800/80 backdrop-blur-md rounded-full hover:from-blue-500/90 hover:to-blue-700/90 transition-all duration-300 border border-blue-400/30 hover:border-blue-300/50 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
              <Linkedin className="w-6 h-6 relative z-10 group-hover:text-white transition-colors duration-300" />
            </motion.a>
            <motion.a
              whileHover={{ 
                scale: 1.2, 
                y: -5,
                boxShadow: "0 10px 25px rgba(29, 161, 242, 0.4)",
                rotate: 360
              }}
              whileTap={{ scale: 0.9 }}
              href="https://x.com/AbuVakarTweets" target="_blank" rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-blue-400/80 to-blue-600/80 backdrop-blur-md rounded-full hover:from-blue-300/90 hover:to-blue-500/90 transition-all duration-300 border border-blue-300/30 hover:border-blue-200/50 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
              <Twitter className="w-6 h-6 relative z-10 group-hover:text-white transition-colors duration-300" />
            </motion.a>
            <motion.a
              whileHover={{ 
                scale: 1.2, 
                y: -5,
                boxShadow: "0 10px 25px rgba(255, 0, 0, 0.4)",
                rotate: 360
              }}
              whileTap={{ scale: 0.9 }}
              href="https://www.youtube.com/@av_official" target="_blank" rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-red-600/80 to-red-800/80 backdrop-blur-md rounded-full hover:from-red-500/90 hover:to-red-700/90 transition-all duration-300 border border-red-400/30 hover:border-red-300/50 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
              <Youtube className="w-6 h-6 relative z-10 group-hover:text-white transition-colors duration-300" />
            </motion.a>
            <motion.a
              whileHover={{ 
                scale: 1.2, 
                y: -5,
                boxShadow: "0 10px 25px rgba(34, 197, 94, 0.4)",
                rotate: 360
              }}
              whileTap={{ scale: 0.9 }}
              href="https://linktr.ee/abu_vakar" target="_blank" rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-green-500/80 to-green-700/80 backdrop-blur-md rounded-full hover:from-green-400/90 hover:to-green-600/90 transition-all duration-300 border border-green-400/30 hover:border-green-300/50 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
              <Link className="w-6 h-6 relative z-10 group-hover:text-white transition-colors duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white hover:text-gray-300 transition-colors duration-200"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero; 