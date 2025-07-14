import { motion } from 'framer-motion';
import { ArrowUp, Mail, Phone, MapPin, Instagram, ExternalLink, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';
import TermsModal from './TermsModal';
import PrivacyModal from './PrivacyModal';

const Footer = () => {
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('home');
      if (hero) {
        const rect = hero.getBoundingClientRect();
        // If bottom of hero is above the top of the viewport, show button
        setShowBackToTop(rect.bottom < 0);
      } else {
        setShowBackToTop(window.scrollY > 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    try {
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const res = await fetch(`${API_BASE_URL}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (data.success) {
        showToast(data.message || 'Subscribed successfully!', 'success');
        setEmail('');
      } else {
        showToast(data.message || 'Subscription failed', 'warning');
      }
    } catch (err) {
      showToast('Network error. Please try again.', 'warning');
    }
    setSubmitting(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '917060813814'; // Updated to user's actual WhatsApp number
    const message = encodeURIComponent(
      "Hi Abu Vakar! I saw your portfolio and would like to discuss a project. Can we connect?"
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  // Smart navigation function
  const navigateToSkill = (skillName: string) => {
    // First try to find projects with this skill
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
      
      // Try to filter projects based on skill name
      setTimeout(() => {
        // Look for project filter buttons and click the relevant one
        const filterButtons = document.querySelectorAll('[data-category]');
        const skillToCategoryMap: { [key: string]: string } = {
          'Full Stack Development': 'Full Stack',
          'AI/ML Dev': 'AI/ML',
          'Data Science': 'AI/ML',
          'Cloud & DevOps': 'Full Stack',
          'Data Analytics': 'AI/ML',
          'API & Microservices': 'Full Stack',
          'Testing & QA': 'Full Stack',
          'UI/UX Design': 'Frontend',
          'React & Next.js': 'Frontend',
          'Python': 'AI/ML',
          'Node.js & TypeScript': 'Full Stack',
          'AWS & Cloud Native': 'Full Stack',
          'Docker & Kubernetes': 'Full Stack',
          'Machine Learning': 'AI/ML',
          'Big Data & Analytics': 'AI/ML',
          'Testing & Automation': 'Full Stack'
        };
        
        const targetCategory = skillToCategoryMap[skillName];
        if (targetCategory) {
          filterButtons.forEach((button: any) => {
            if (button.textContent?.includes(targetCategory)) {
              button.click();
            }
          });
        }
      }, 1000);
      
      // Show toast notification
      showToast(`Showing projects related to ${skillName}`, 'success');
    }
  };

  const navigateToSkillLevel = (skillName: string) => {
    // Navigate to skills section and potentially highlight the specific skill
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
      
      // Try to highlight the specific skill
      setTimeout(() => {
        const skillElements = document.querySelectorAll('[data-skill]');
        const skillToHighlightMap: { [key: string]: string } = {
          'Full Stack Development': 'React',
          'AI/ML Dev': 'Python',
          'Data Science': 'Python',
          'Cloud & DevOps': 'AWS',
          'Data Analytics': 'Python',
          'API & Microservices': 'REST APIs',
          'Testing & QA': 'Jest',
          'UI/UX Design': 'Figma',
          'React & Next.js': 'React',
          'Python': 'Python',
          'Node.js & TypeScript': 'Node.js',
          'AWS & Cloud Native': 'AWS',
          'Docker & Kubernetes': 'Docker',
          'Machine Learning': 'Python',
          'Big Data & Analytics': 'Python',
          'Testing & Automation': 'Jest'
        };
        
        const targetSkill = skillToHighlightMap[skillName];
        if (targetSkill) {
          skillElements.forEach((element: any) => {
            if (element.textContent?.includes(targetSkill)) {
              // Add highlight effect
              element.classList.add('ring-2', 'ring-blue-400', 'ring-opacity-50');
              setTimeout(() => {
                element.classList.remove('ring-2', 'ring-blue-400', 'ring-opacity-50');
              }, 3000);
            }
          });
        }
      }, 1000);
      
      showToast(`Showing ${skillName} skill details`, 'info');
    }
  };

  // Toast notification function
  const showToast = (message: string, type: 'success' | 'info' | 'warning') => {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `fixed top-20 right-4 z-50 px-6 py-3 rounded-lg text-white font-medium shadow-lg transform translate-x-full transition-transform duration-300 ${
      type === 'success' ? 'bg-green-500' : 
      type === 'info' ? 'bg-blue-500' : 'bg-yellow-500'
    }`;
    toast.textContent = message;
    
    // Add to page
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
      toast.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
      toast.classList.add('translate-x-full');
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  };

  const socialLinks = [
    { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@av_official', color: 'hover:text-red-500' },
    { name: 'Linktree', icon: ExternalLink, href: 'https://linktr.ee/abu_vakar', color: 'hover:text-green-500' },
    { name: 'Website', icon: ExternalLink, href: 'https://abuvakar.wixsite.com/digitalguruji', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/Abu.vakar.s/#', color: 'hover:text-pink-500' }
  ];

  const quickLinks = [
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Hire Me', href: '#hire-me' }
  ];

  const services = [
    { name: 'Full Stack Development', hasProjects: true, skillLevel: 90 },
    { name: 'AI/ML Dev', hasProjects: true, skillLevel: 80 },
    { name: 'Data Science', hasProjects: true, skillLevel: 78 },
    { name: 'Data Engg', hasProjects: true, skillLevel: 75 },
    { name: 'Cloud & DevOps', hasProjects: true, skillLevel: 75 },
    { name: 'Data Analytics', hasProjects: true, skillLevel: 78 },
    { name: 'API & Microservices', hasProjects: true, skillLevel: 90 },
    { name: 'Testing & QA', hasProjects: true, skillLevel: 82 },
    { name: 'UI/UX Design', hasProjects: false, skillLevel: 75 }
  ];

  const technologies = [
    { name: 'MERN Stack', hasProjects: true, skillLevel: 92 },
    { name: 'React & Next.js', hasProjects: true, skillLevel: 90 },
    { name: 'Python', hasProjects: true, skillLevel: 85 },
    { name: 'Node.js & TypeScript', hasProjects: true, skillLevel: 88 },
    { name: 'AWS & Cloud Native', hasProjects: true, skillLevel: 75 },
    { name: 'Docker & Kubernetes', hasProjects: true, skillLevel: 75 },
    { name: 'Machine Learning', hasProjects: true, skillLevel: 80 },
    { name: 'Big Data & Analytics', hasProjects: true, skillLevel: 78 },
    { name: 'Testing & Automation', hasProjects: true, skillLevel: 82 }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-400/20 dark:bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-6 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  ABU VAKAR
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  Full Stack Developer passionate about creating innovative digital solutions. 
                  Specialized in modern web technologies and cloud architecture.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300">bakrabu786@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300">+91-7060813814</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-gray-700 dark:text-gray-300">Garhmukteshwar, Hapur, Uttar Pradesh (245205)</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-3 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-white/20 hover:border-blue-400/30 dark:hover:border-blue-400/30 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={link.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center group text-lg"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h4 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Services</h4>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => service.hasProjects ? navigateToSkill(service.name) : navigateToSkillLevel(service.name)}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center justify-between group w-full text-left"
                    >
                      <span className="flex items-center">
                        {service.name}
                        {service.hasProjects && (
                          <span className="ml-2 text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
                            Projects
                          </span>
                        )}
                        {(service.name.includes('AI/ML') || service.name.includes('Data') || service.name.includes('Cloud')) && (
                          <span className="ml-2 text-xs bg-purple-500/20 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-full animate-pulse">
                            Trending
                          </span>
                        )}
                      </span>
                      <span className="text-xs text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {service.skillLevel}%
                      </span>
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Technologies</h4>
              <ul className="space-y-2">
                {technologies.map((tech, index) => (
                  <li key={index}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => tech.hasProjects ? navigateToSkill(tech.name) : navigateToSkillLevel(tech.name)}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center justify-between group w-full text-left"
                    >
                      <span className="flex items-center">
                        {tech.name}
                        {tech.hasProjects && (
                          <span className="ml-2 text-xs bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-1 rounded-full">
                            Projects
                          </span>
                        )}
                        {(tech.name.includes('AI/ML') || tech.name.includes('Data') || tech.name.includes('Machine') || tech.name.includes('Big Data')) && (
                          <span className="ml-2 text-xs bg-purple-500/20 text-purple-600 dark:text-purple-400 px-2 py-1 rounded-full animate-pulse">
                            Hot
                          </span>
                        )}
                      </span>
                      <span className="text-xs text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        {tech.skillLevel}%
                      </span>
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>



          {/* Combined Newsletter & Instant Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid lg:grid-cols-2 gap-6 mb-8"
          >
            {/* Newsletter Section */}
            <div className="bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-pink-600/10 rounded-2xl p-6 border border-gray-200 dark:border-white/20">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Stay Connected
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Get notified about new projects, tech insights, and opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/80 dark:bg-white/10 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 rounded-full border border-gray-300 dark:border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={submitting}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSubscribe}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <Mail className="w-4 h-4" />
                    )}
                    {submitting ? 'Subscribing...' : 'Subscribe'}
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Instant Connect Section */}
            <div className="bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-teal-400/20 dark:from-green-600/10 dark:via-emerald-600/10 dark:to-teal-600/10 rounded-2xl p-6 border border-green-200 dark:border-green-400/20">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Instant Messaging
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Need immediate assistance? Msg instantly for quick queries
                </p>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsAppClick}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white rounded-full font-semibold hover:from-green-600 hover:via-emerald-600 hover:to-teal-600 transition-all duration-300 flex items-center justify-center gap-3 mx-auto shadow-lg hover:shadow-xl"
                >
                  <span>Start Chat</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Copyright & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center space-y-4"
          >
            {/* Copyright */}
            <div className="text-gray-600 dark:text-gray-400 text-sm">
              <p>&copy; {currentYear} ABU VAKAR. All rights reserved.</p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col items-center space-y-2 text-sm">
              <div className="flex justify-center space-x-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setTermsOpen(true)}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  Terms & Conditions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setPrivacyOpen(true)}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                >
                  Privacy Policy
                </motion.button>
              </div>
              <p className="flex items-center justify-center gap-1">Made with ❤️ in India <img src="/india-flag-icon.svg" alt="Indian Flag" className="inline w-6 h-6 ml-1" /></p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 p-4 sm:p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-2xl hover:shadow-2xl transition-all duration-300 z-[100] border-2 border-white/80"
          style={{ boxShadow: '0 4px 24px 4px rgba(59,130,246,0.18)' }}
        >
          <ArrowUp className="w-6 h-6 sm:w-5 sm:h-5" />
        </motion.button>
      )}

      {/* Modals */}
      <TermsModal open={termsOpen} onClose={() => setTermsOpen(false)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  );
};

export default Footer; 