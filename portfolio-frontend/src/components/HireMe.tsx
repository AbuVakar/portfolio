import { motion } from 'framer-motion';
import { ArrowRight, Clock, Calendar, MessageCircle, CheckCircle, Zap, Users, Award } from 'lucide-react';

const HireMe = () => {
  const whyHireMe = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'I deliver projects on time with high quality standards, ensuring your business goals are met efficiently.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Excellent communication skills and experience working with cross-functional teams and stakeholders.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of improving user engagement by 300% and reducing system downtime by 90%.'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Rigorous testing and code review processes to ensure bug-free, scalable, and maintainable code.'
    }
  ];

  const availability = [
    {
      icon: Clock,
      status: 'Response Time',
      value: '< 2 hours'
    },
    {
      icon: Calendar,
      status: 'Availability',
      value: 'Immediate'
    },
    {
      icon: MessageCircle,
      status: 'Communication',
      value: '24/7'
    },
    {
      icon: Clock,
      status: 'Timezone',
      value: 'IST (GMT+5:30)'
    }
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
    <section id="hire-me" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300/20 dark:bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-indigo-400/20 dark:bg-indigo-600/8 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Hire Me?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 dark:text-blue-100 max-w-3xl mx-auto leading-relaxed">
            I'm currently available for new opportunities and ready to bring your vision to life. 
            Let's discuss how I can add value to your team and deliver exceptional results.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Why Hire Me */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Me?
              </h3>
              <p className="text-gray-700 dark:text-blue-100 mb-8 leading-relaxed">
                I bring a unique combination of technical expertise, business acumen, and proven results 
                that can transform your ideas into successful digital solutions.
              </p>
            </div>

            <div className="space-y-6">
              {whyHireMe.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.02,
                    x: 5,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)'
                  }}
                  className="flex items-start space-x-4 p-4 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-white/20 hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-700 dark:text-blue-100 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Availability & CTA */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Availability Status */}
            <div className="bg-white/80 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 dark:border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Current Availability
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {availability.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-white/60 dark:bg-white/10 rounded-xl border border-gray-200 dark:border-white/20"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                    </div>
                    <div className="text-sm text-blue-700 dark:text-blue-200">{item.status}</div>
                    <div className="text-lg font-bold text-gray-900 dark:text-white">{item.value}</div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">2+ years of experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">15+ projects</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Let's Discuss Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/alex-rodriguez-resume.pdf';
                  link.download = 'Alex_Rodriguez_Resume.pdf';
                  link.click();
                }}
                className="w-full px-8 py-4 bg-white/80 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white rounded-full font-semibold hover:bg-white/90 dark:hover:bg-white/20 border border-gray-300 dark:border-white/30 hover:border-gray-400 dark:hover:border-white/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Download Resume</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Urgency Message */}
            <div
              className="cursor-pointer text-center p-4 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 dark:from-yellow-500/20 dark:to-orange-500/20 rounded-xl border border-yellow-500/40 dark:border-yellow-400/30 hover:bg-yellow-400/40 dark:hover:bg-yellow-500/30 transition-colors duration-200"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              title="Book your slot now! Scroll to contact form."
            >
              <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                🚀 Currently accepting new projects for Q3 2025
              </p>
              <p className="text-yellow-700 dark:text-yellow-100 text-sm mt-1">
                Limited availability - Book your slot now!
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20 rounded-3xl p-8 border border-gray-200 dark:border-white/20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Don't Miss Out on Quality & Reliability
            </h3>
            <p className="text-gray-700 dark:text-blue-100 mb-6 max-w-2xl mx-auto">
              Join 50+ satisfied clients who chose me for their projects. 
              Let's create something amazing together!
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              Start Your Project Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMe; 