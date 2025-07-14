"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('combined'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
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
app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }
    console.log('Contact form submission:', { name, email, subject, message });
    return res.json({
        success: true,
        message: 'Message received successfully!'
    });
});
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
        await axios_1.default.post(url, data, {
            auth: {
                username: 'anystring',
                password: MAILCHIMP_API_KEY
            }
        });
        return res.json({ success: true, message: 'Subscribed successfully!' });
    }
    catch (error) {
        if (error.response && error.response.data && error.response.data.title === 'Member Exists') {
            return res.status(200).json({ success: true, message: 'Already subscribed!' });
        }
        return res.status(500).json({ success: false, message: 'Failed to subscribe', error: error.message });
    }
});
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
});
app.use('*', (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Endpoint not found'
    });
});
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`📖 API Documentation: http://localhost:${PORT}`);
    console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`);
});
exports.default = app;
//# sourceMappingURL=index.js.map