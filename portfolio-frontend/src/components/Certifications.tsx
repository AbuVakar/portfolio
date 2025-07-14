import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, Star } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Master ChatGPT: Transform Your Life with AI Chatbots',
      issuer: 'Dhruv Rathee, powered by TagMango',
      image: '',
      level: 'Foundation',
      skills: ['AI Chatbots', 'Productivity', 'Automation', 'ChatGPT'],
      link: '#',
      rating: 5,
      date: 'August 12, 2023',
      focus: 'Practical use of AI chatbots (ChatGPT) for productivity, automation, and daily tasks.'
    },
    {
      title: 'Deloitte Data Analytics Virtual Internship',
      issuer: 'Deloitte (via Forage)',
      image: '',
      level: 'Foundation',
      skills: ['Data Analytics', 'Forensic Technology'],
      link: '#',
      rating: 5,
      date: 'June 10, 2025',
      verificationCode: 'FSPBHMS67RxdKpshR',
      focus: 'Data Analytics, Forensic Technology'
    },
    {
      title: 'Full Stack MERN Developer Certification',
      issuer: 'Softpro India Pvt. Ltd.',
      image: '',
      level: 'Professional',
      skills: [],
      link: '#',
      rating: 5,
      date: '2023'
    },
    {
      title: 'Python Programming Certification',
      issuer: 'CodSoft',
      image: '',
      level: 'Foundation',
      skills: [],
      link: '#',
      rating: 5,
      date: '2022'
    },
    {
      title: 'SQL Fundamentals Certificate',
      issuer: 'Sololearn',
      image: '',
      level: 'Foundation',
      skills: [],
      link: '#',
      rating: 5,
      date: '2022'
    },
    {
      title: 'Haunt IoT Workshop',
      issuer: 'AKGEC Skills & Foundation, IIT Delhi',
      image: '',
      level: 'Foundation',
      skills: [],
      link: '#',
      rating: 5,
      date: '2021'
    },
    {
      title: 'CCC (Course on Computer Concepts)',
      issuer: 'NIELIT',
      image: '',
      level: 'Foundation',
      skills: [],
      link: '#',
      rating: 5,
      date: '2020'
    },
    {
      title: '1-Month Artificial Intelligence Internship',
      issuer: 'AICTE & Codec Technologies',
      image: '',
      level: 'Foundation',
      skills: ['Artificial Intelligence', 'Practical AI'],
      link: '#',
      rating: 5,
      date: 'June 16, 2025',
      duration: '26 hours 40 minutes',
      focus: 'Practical AI concepts & applications',
      certificateId: '02b7177091e5e52'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Professional':
        return 'from-purple-500 to-pink-500';
      case 'Associate':
        return 'from-blue-500 to-cyan-500';
      case 'Foundation':
        return 'from-green-500 to-emerald-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400/5 rounded-full blur-3xl"></div>
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
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional certifications that validate my expertise and commitment to continuous learning. 
            Each certification represents hours of study and practical experience.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -10,
                boxShadow: "0 30px 60px rgba(0,0,0,0.15)"
              }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 dark:border-gray-700/20 hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-500 p-5">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  
                  {/* Level Badge */}
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getLevelColor(cert.level)} text-white text-xs font-semibold`}>
                    {cert.level}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-4 h-4 ${i < cert.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                    {cert.rating}/5
                  </span>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Verify</span>
                  </motion.a>
                </div>

                {/* Floating award icon */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                >
                  <Award className="w-8 h-8 text-yellow-500" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { number: '6+', label: 'Certifications', icon: Award },
            { number: '500+', label: 'Study Hours', icon: Calendar },
            { number: '4.8', label: 'Average Rating', icon: Star },
            { number: '100%', label: 'Pass Rate', icon: Award }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 