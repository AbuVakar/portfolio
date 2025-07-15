import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import axios from 'axios';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: [
    'http://localhost:5173', // Local dev
    'https://portfolio-frontend-yourusername.vercel.app', // Replace with your actual Vercel frontend URL
  ],
  credentials: true,
}));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Portfolio API is running!',
    version: '1.0.0',
    endpoints: {
      projects: '/api/projects',
      skills: '/api/skills',
      about: '/api/about',
      contact: '/api/contact'
    }
  });
});

// Projects API
app.get('/api/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
      category: 'Full Stack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io'],
      category: 'Full Stack',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with real-time data and interactive maps.',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
      category: 'Frontend',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
      image: '/api/placeholder/400/250'
    }
  ];

  res.json(projects);
});

// Skills API
app.get('/api/skills', (req, res) => {
  const skills = {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Next.js', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Vue.js', level: 75 }
    ],
    backend: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'Django', level: 75 },
      { name: 'PostgreSQL', level: 82 }
    ],
    database: [
      { name: 'MongoDB', level: 85 },
      { name: 'AWS', level: 70 },
      { name: 'Docker', level: 75 },
      { name: 'Redis', level: 68 },
      { name: 'Firebase', level: 80 }
    ]
  };

  res.json(skills);
});

// About API
app.get('/api/about', (req, res) => {
  const about = {
    name: 'John Doe',
    title: 'Full Stack Developer',
    description: 'I\'m a passionate Full Stack Developer with over 3 years of experience creating innovative web applications.',
    stats: [
      { label: 'Years Experience', value: '3+' },
      { label: 'Projects Completed', value: '50+' },
      { label: 'Client Satisfaction', value: '100%' },
      { label: 'Available', value: '24/7' }
    ],
    contact: {
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA'
    }
  };

  res.json(about);
});

// Contact API (for storing contact form submissions)
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    });
  }

  // Log the contact form submission
  console.log('Contact form submission:', { name, email, subject, message });

  return res.json({
    success: true,
    message: 'Message received successfully!'
  });
});

// Mailchimp Subscribe API
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
  const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const DATACENTER = MAILCHIMP_API_KEY?.split('-')[1];

  if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !DATACENTER) {
    return res.status(500).json({ success: false, message: 'Mailchimp configuration missing' });
  }

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;
  const data = {
    email_address: email,
    status: 'subscribed'
  };

  try {
    await axios.post(url, data, {
      auth: {
        username: 'anystring',
        password: MAILCHIMP_API_KEY
      }
    });
    return res.json({ success: true, message: 'Subscribed successfully!' });
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.title === 'Member Exists') {
      return res.status(200).json({ success: true, message: 'Already subscribed!' });
    }
    return res.status(500).json({ success: false, message: 'Failed to subscribe', error: error.message });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📖 API Documentation: http://localhost:${PORT}`);
  console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`);
});

export default app; 