import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ExternalLink, Users, TrendingUp, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      position: 'Software Developer',
      company: 'Softpro India Technologies Pvt. Ltd.',
      location: 'Lucknow, India',
      duration: 'July 2024 – Sep 2024',
      type: 'Internship',
      description: 'Developed a MERN-based query management system featuring interactive dashboards and secure REST APIs. Designed and implemented a modular backend structure, ensuring scalability and maintainability. Integrated third-party APIs, handled CRUD operations, and managed real-time issue tracking for enhanced user experience.',
      achievements: [
        'Developed MERN-based query system with dashboards, secure APIs, and optimized backend',
        'Worked on modular code structure, API integration, CRUD operations, and issue tracking'
      ],
      skills: ['MERN Stack', 'REST API', 'CRUD', 'API Integration', 'Backend Optimization'],
      logo: '/spi.jpeg',
      link: 'https://www.softproindia.org/',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST API']
    },
    {
      position: 'Freelance MERN Stack Developer',
      company: 'Salka Tech Pvt. Ltd.',
      location: 'Remote',
      duration: 'Apr 2025 – May 2025',
      type: 'Freelance',
      description: 'Built a Role-Based Ticket Management System using the MERN stack with JWT authentication and user-specific dashboards. Automated email notifications using Nodemailer and enabled PDF report generation for ticket summaries. Designed a modular REST API architecture and deployed the application seamlessly on Vercel.',
      achievements: [
        'Built a Role-Based Ticket Management System using MERN with JWT authentication, user-specific dashboards, and automated email alerts via Nodemailer',
        'Enabled PDF report generation, modular REST API structure, and deployed the app seamlessly using Vercel'
      ],
      skills: ['MERN Stack', 'JWT', 'Nodemailer', 'PDF Generation', 'REST API', 'Vercel'],
      logo: 'https://media.licdn.com/dms/image/C560BAQFQwK6QwKkQxA/company-logo_200_200/0/1631372537512?e=2147483647&v=beta&t=6Qw1QwKkQxA', // Placeholder, replace with Salka Tech logo if available
      link: '#',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Nodemailer', 'Vercel']
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const getCompanyColor = (company: string) => {
    switch (company.toLowerCase()) {
      case 'google':
        return 'from-blue-500 to-red-500';
      case 'microsoft':
        return 'from-blue-600 to-green-500';
      case 'amazon':
        return 'from-orange-500 to-yellow-500';
      case 'facebook':
        return 'from-blue-600 to-purple-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
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
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My professional journey spans across top tech companies, where I've contributed to innovative projects 
            and grown from an intern to a senior developer role.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg z-10"></div>

              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:w-5/12' : 'md:ml-auto md:w-5/12'}`}>
                <motion.div
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                  }}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 dark:border-gray-700/20 hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-500 p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                          <img 
                            src={exp.logo} 
                            alt={exp.company}
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {exp.position}
                          </h3>
                          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      
                      {/* Type Badge */}
                      <div className={`px-4 py-2 bg-gradient-to-r ${getCompanyColor(exp.company)} text-white rounded-full text-sm font-semibold`}>
                        {exp.type}
                      </div>
                    </div>

                    {/* Location and Duration */}
                    <div className="flex items-center space-x-6 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <Users className="w-4 h-4" />
                        <span>Team Collaboration</span>
                      </div>
                      
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Profile</span>
                      </motion.a>
                    </div>

                    {/* Floating briefcase icon */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    >
                      <Briefcase className="w-8 h-8 text-blue-500" />
                    </motion.div>
                  </div>
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
            { number: '4+', label: 'Years Experience', icon: Briefcase },
            { number: '4', label: 'Companies Worked', icon: Users },
            { number: '20+', label: 'Projects Completed', icon: TrendingUp },
            { number: '15+', label: 'Team Members Led', icon: Award }
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

export default Experience; 