import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, ExternalLink, BookOpen, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science & Engineering (AI & ML)',
      institution: 'Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow',
      location: 'Ghaziabad, UP',
      duration: '2021 – 2025',
      gpa: '80%', // Changed from '8.0/10' to '80%'
      description: 'Specialization in Artificial Intelligence & Machine Learning. Pursuing core courses in CSE, AI, ML, and Data Science. Active in coding events and tech societies.',
      achievements: [
        'Consistent academic performer',
        'Participated in inter-college hackathons',
        'Member of AI/ML Club',
        'Project work in AI & Data Analytics'
      ],
      skills: ['AI & ML', 'Data Science', 'Python', 'JavaScript', 'Web Development'],
      logo: '/aktu.png',
      link: 'https://aktu.ac.in/'
    },
    {
      degree: 'Intermediate (12th), Science',
      institution: 'Dev Memorial Public School',
      location: 'Garhmukteshwar, U.P.',
      duration: '2015 – 2016',
      gpa: '76%',
      description: 'Completed 12th with Science stream under CBSE board. Developed strong foundation in Maths, Physics, Chemistry, and Computer Science.',
      achievements: [
        'Leadership Role (Class Representative)',
        'Participation in Inter-School Quiz/Competition',
        'Bhartiya Sanskrit Gyan Pariksha Participation',
        'Sports House Captain (Tagore House)'
      ],
      skills: [
        'PCM',
        'Computer Science (Programming Basics, MS Office, Internet)'
      ],
      logo: '/dmps.jpeg',
      link: '#'
    },
    {
      degree: 'High School (10th), Science',
      institution: 'Dev Memorial Public School',
      location: 'Garhmukteshwar, U.P.',
      duration: '2013 – 2014',
      gpa: '92%', // Changed from '9.6 CGPA' to '92%'
      description: 'Completed 10th with Science stream under CBSE board. Excelled in academics and participated in various extra-curricular activities.',
      achievements: [
        'Problem Solving Assessment Winner',
        'Science Exhibition Participation',
        'Science Olympiad Participant',
        'Member, School Science Club'
      ],
      skills: [
        'Mathematics',
        'Science (Physics, Chemistry, Biology)',
        'Computer Applications',
        'Logical Reasoning',
        'Communication Skills'
      ],
      logo: '/dmps.jpeg',
      link: '#'
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

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
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
            Education Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My academic journey has been marked by excellence, innovation, and continuous learning. 
            Each degree represents a milestone in my quest for knowledge and expertise.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative mb-12 w-full`}
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
                    {edu.institution === 'Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow' ? (
                      <div className="flex flex-row items-start justify-between mb-4 gap-4">
                        <div className="flex flex-col justify-center">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {edu.degree}
                          </h3>
                          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                            {edu.institution}
                          </p>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">Percentage: {edu.gpa}</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1 mb-2">
                            <img 
                              src={edu.logo} 
                              alt="AKTU Logo"
                              className="w-full h-full object-cover rounded-xl"
                            />
                          </div>
                        </div>
                      </div>
                    ) : edu.institution === 'Dev Memorial Public School' && edu.degree.includes('Intermediate') ? (
                      <div className="flex flex-row items-start justify-between mb-4 gap-4">
                        <div className="flex flex-col justify-center">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {edu.degree}
                          </h3>
                          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                            {edu.institution}
                          </p>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">Percentage: {edu.gpa}</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1 mb-2">
                            <img 
                              src={edu.logo} 
                              alt={edu.institution}
                              className="w-full h-full object-cover rounded-xl"
                            />
                          </div>
                        </div>
                      </div>
                    ) : edu.institution === 'Dev Memorial Public School' && edu.degree.includes('High School') ? (
                      <div className="flex flex-row items-start justify-between mb-4 gap-4">
                        <div className="flex flex-col justify-center">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {edu.degree}
                          </h3>
                          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                            {edu.institution}
                          </p>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">Percentage: {edu.gpa}</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1 mb-2">
                            <img 
                              src={edu.logo} 
                              alt={edu.institution}
                              className="w-full h-full object-cover rounded-xl"
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-row items-start justify-between mb-4 gap-4">
                        <div className="flex flex-col justify-center">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {edu.degree}
                          </h3>
                          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                            {edu.institution}
                          </p>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1 mb-2">
                            <img 
                              src={edu.logo} 
                              alt={edu.institution}
                              className="w-full h-full object-cover rounded-xl"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Location and Duration */}
                    <div className="flex items-center space-x-6 mb-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Key Skills
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium"
                          >
                            {skill}
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
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <GraduationCap className="w-4 h-4" />
                        <span>Degree Completed</span>
                      </div>
                      
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View Details</span>
                      </motion.a>
                    </div>

                    {/* Floating graduation cap */}
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    >
                      <GraduationCap className="w-8 h-8 text-blue-500" />
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
            { number: '3', label: 'Degrees', icon: GraduationCap },
            { number: '7.9', label: 'Average GPA', icon: Award },
            { number: '19+', label: 'Years of Study', icon: Calendar },
            { number: '8+', label: 'Achievements', icon: Award }
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

export default Education; 