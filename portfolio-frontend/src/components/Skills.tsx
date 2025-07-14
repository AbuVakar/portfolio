import { motion } from 'framer-motion';
import { Code, Database, Palette, Server, Award, User } from 'lucide-react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiPython, SiFlask, SiJsonwebtokens, SiPostman, SiMongodb, SiMysql, SiDocker, SiRedis, SiFirebase, SiMongoose, SiFigma, SiGit, SiGithub, SiGoogledrive, SiOpenai, SiScikitlearn, SiPandas, SiHuggingface, SiJest, SiSocketdotio } from 'react-icons/si';
import { FaAws, FaServer, FaTools, FaBrain, FaChartBar, FaKey, FaRobot, FaFileExcel, FaCode, FaComments, FaUsers, FaSyncAlt, FaLightbulb, FaHandsHelping, FaSearch, FaClock } from 'react-icons/fa';
import { IoLogoVercel } from 'react-icons/io5';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'HTML5', level: 95, icon: <SiHtml5 className="text-orange-500" /> },
        { name: 'CSS3', level: 92, icon: <SiCss3 className="text-blue-500" /> },
        { name: 'JavaScript (ES6+)', level: 90, icon: <SiJavascript className="text-yellow-400" /> },
        { name: 'React.js', level: 90, icon: <SiReact className="text-cyan-400" /> },
        { name: 'TypeScript', level: 85, icon: <SiTypescript className="text-blue-600" /> },
        { name: 'Next.js', level: 80, icon: <SiNextdotjs className="text-gray-800 dark:text-white" /> },
        { name: 'Tailwind CSS', level: 95, icon: <SiTailwindcss className="text-teal-400" /> },
        { name: 'Bootstrap', level: 88, icon: <SiBootstrap className="text-purple-600" /> },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 88, icon: <SiNodedotjs className="text-green-600" /> },
        { name: 'Express.js', level: 85, icon: <SiExpress className="text-gray-800 dark:text-white" /> },
        { name: 'Python', level: 80, icon: <SiPython className="text-yellow-500" /> },
        { name: 'Flask', level: 70, icon: <SiFlask className="text-gray-700 dark:text-white" /> },
        { name: 'JWT (Authentication)', level: 80, icon: <SiJsonwebtokens className="text-orange-400" /> },
        { name: 'REST APIs', level: 90, icon: <FaServer className="text-blue-500" /> },
        { name: 'Socket.io', level: 75, icon: <SiSocketdotio className="text-black dark:text-white" /> },
        { name: 'Testing (Jest, Supertest)', level: 70, icon: <SiJest className="text-pink-600" /> },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 85, icon: <SiMongodb className="text-green-700" /> },
        { name: 'MySQL', level: 80, icon: <SiMysql className="text-blue-700" /> },
        { name: 'AWS', level: 70, icon: <FaAws className="text-yellow-500" /> },
        { name: 'Docker', level: 75, icon: <SiDocker className="text-blue-400" /> },
        { name: 'Redis', level: 68, icon: <SiRedis className="text-red-500" /> },
        { name: 'Firebase', level: 80, icon: <SiFirebase className="text-yellow-400" /> },
        { name: 'Mongoose', level: 80, icon: <SiMongoose className="text-red-700" /> },
        { name: 'Vercel/Netlify (Deployment)', level: 80, icon: <IoLogoVercel className="text-black dark:text-white" /> },
      ],
    },
    {
      title: 'Design & Tools',
      icon: Palette,
      skills: [
        { name: 'Figma', level: 75, icon: <SiFigma className="text-pink-500" /> },
        { name: 'Git', level: 90, icon: <SiGit className="text-orange-600" /> },
        { name: 'GitHub', level: 90, icon: <SiGithub className="text-black dark:text-white" /> },
        { name: 'Postman', level: 85, icon: <SiPostman className="text-orange-500" /> },
        { name: 'VS Code', level: 90, icon: <FaCode className="text-blue-600" /> },
        { name: 'Chrome DevTools', level: 85, icon: <FaTools className="text-yellow-500" /> },
        { name: 'Notion / Google Docs', level: 80, icon: <SiGoogledrive className="text-green-500" /> },
        { name: 'Microsoft Excel', level: 80, icon: <FaFileExcel className="text-green-700" /> },
      ],
    },
    {
      title: 'AI/ML & APIs',
      icon: Award,
      skills: [
        { name: 'OpenAI API', level: 70, icon: <SiOpenai className="text-green-600" /> },
        { name: 'AI/ML APIs', level: 70, icon: <FaBrain className="text-purple-600" /> },
        { name: 'LLMs (Large Language Models)', level: 65, icon: <FaRobot className="text-gray-700 dark:text-white" /> },
        { name: 'Data Analytics', level: 75, icon: <FaChartBar className="text-blue-500" /> },
        { name: 'Prompt Engineering', level: 65, icon: <FaKey className="text-yellow-600" /> },
        { name: 'Hugging Face Transformers', level: 65, icon: <SiHuggingface className="text-yellow-400" /> },
        { name: 'Scikit-learn', level: 70, icon: <SiScikitlearn className="text-orange-400" /> },
        { name: 'Pandas', level: 75, icon: <SiPandas className="text-black dark:text-white" /> },
      ],
    },
    {
      title: 'Soft Skills',
      icon: User,
      skills: [
        { name: 'Communication', level: 90, icon: <FaComments className="text-blue-500" /> },
        { name: 'Teamwork', level: 88, icon: <FaUsers className="text-green-500" /> },
        { name: 'Adaptability', level: 87, icon: <FaSyncAlt className="text-yellow-500" /> },
        { name: 'Problem Solving', level: 89, icon: <FaLightbulb className="text-orange-500" /> },
        { name: 'Critical Thinking', level: 86, icon: <FaBrain className="text-purple-500" /> },
        { name: 'Collaboration', level: 88, icon: <FaHandsHelping className="text-pink-500" /> },
        { name: 'Attention to Detail', level: 85, icon: <FaSearch className="text-gray-700" /> },
        { name: 'Time Management', level: 87, icon: <FaClock className="text-indigo-500" /> },
      ],
    },
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

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-400/5 rounded-full blur-3xl"></div>
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
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I've worked with a variety of technologies to create amazing web applications. 
            Here are some of the tools and technologies I use on a daily basis.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
              className="relative group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl p-6 border border-white/20 dark:border-gray-700/20 hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-500">
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="relative p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-8 h-8 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-lg opacity-50"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span 
                          data-skill={skill.name}
                          className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">{skill.icon}{skill.name}</span>
                        <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                            className="relative h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                          >
                            {/* Animated glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm opacity-50 animate-pulse"></div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 