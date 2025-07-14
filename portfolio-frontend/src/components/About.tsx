import { motion } from 'framer-motion';
import { User, Code, Coffee, Heart } from 'lucide-react';

const scrollToProjects = () => {
  const element = document.querySelector('#projects');
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};

const About = () => {
  const stats = [
    { icon: Code, value: '1+', label: 'Years Experience' },
    { icon: Coffee, value: '20+', label: 'Projects Completed' },
    { icon: Heart, value: '100%', label: 'Client Satisfaction' },
    { icon: User, value: '24/7', label: 'Available' },
  ];

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
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image & Stats */}
          <motion.div variants={itemVariants} className="space-y-12">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-72 h-72 mx-auto relative group">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                
                {/* Main image container */}
                <div className="relative w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src="/profile.jpg"
                      alt="Abu Vakar"
                      className="w-64 h-64 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-80"
                ></motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-80"
                ></motion.div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-700/20 hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-300">
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
              >
                About Me
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
              ></motion.div>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              I’m a Full Stack Developer specializing in the MERN stack, with hands-on experience in building scalable web apps, APIs, and backend systems. I’ve recently delivered my first live project and love turning ideas into real-world solutions.
              <br /><br />
              Currently, I’m expanding my skills into AI/ML integration, learning how to build smart, data-driven products that combine web development with machine learning for a more intelligent user experience.
            </motion.p>

            {/* Skills Preview */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                What I Do
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { color: 'from-blue-500 to-blue-600', text: 'Frontend Development' },
                  { color: 'from-purple-500 to-purple-600', text: 'Backend Development' },
                  { color: 'from-green-500 to-green-600', text: 'Data Analytics' },
                  { color: 'from-red-500 to-red-600', text: 'AI/ML Integration' }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      scale: 1.02,
                      x: 5,
                      backgroundColor: 'rgba(59, 130, 246, 0.05)'
                    }}
                    className="flex items-center space-x-3 p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700/20 hover:border-blue-500/30 transition-all duration-300 group"
                  >
                    <div className={`w-3 h-3 bg-gradient-to-r ${skill.color} rounded-full group-hover:scale-150 transition-transform duration-300`}></div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold transition-all duration-300 group overflow-hidden"
                onClick={scrollToProjects}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">View My Work</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 