# Portfolio Backend API

Express.js backend API for the portfolio website with TypeScript support.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Set up environment variables
cp env.example .env

# Start development server
npm run dev
```

The API will be available at `http://localhost:5000`

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## ⚙️ Configuration

### Environment Variables

Copy `env.example` to `.env` and configure:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# CORS Configuration
CORS_ORIGIN=http://localhost:3000

# Database Configuration (optional)
# DATABASE_URL=mongodb://localhost:27017/portfolio

# Email Configuration (optional)
# EMAIL_SERVICE=gmail
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASS=your-app-password

# JWT Secret (if using authentication)
# JWT_SECRET=your-secret-key

# API Keys
# GOOGLE_MAPS_API_KEY=your-google-maps-api-key
# GITHUB_TOKEN=your-github-token
```

### CORS Configuration

Update `CORS_ORIGIN` in your `.env` file to match your frontend URL:
- Development: `http://localhost:3000`
- Production: `https://yourdomain.com`

## 📡 API Endpoints

### Health Check
- `GET /api/health` - Server health status

### Projects
- `GET /api/projects` - Get all projects

### Skills
- `GET /api/skills` - Get skills data

### About
- `GET /api/about` - Get about information

### Contact
- `POST /api/contact` - Submit contact form

## 🗄️ Data Structure

### Projects Response
```json
[
  {
    "id": 1,
    "title": "Project Name",
    "description": "Project description",
    "technologies": ["React", "Node.js"],
    "category": "Full Stack",
    "liveUrl": "https://example.com",
    "githubUrl": "https://github.com",
    "featured": true,
    "image": "/api/placeholder/400/250"
  }
]
```

### Skills Response
```json
{
  "frontend": [
    { "name": "React", "level": 90 }
  ],
  "backend": [
    { "name": "Node.js", "level": 88 }
  ],
  "database": [
    { "name": "MongoDB", "level": 85 }
  ]
}
```

### About Response
```json
{
  "name": "John Doe",
  "title": "Full Stack Developer",
  "description": "Developer description",
  "stats": [
    { "label": "Years Experience", "value": "3+" }
  ],
  "contact": {
    "email": "john.doe@example.com",
    "phone": "+1 (555) 123-4567",
    "location": "San Francisco, CA"
  }
}
```

## 🔧 Customization

### Update Project Data

Edit the data in `src/index.ts`:

1. **Projects** (lines 25-60)
2. **Skills** (lines 65-85)
3. **About** (lines 90-110)

### Add Database Integration

1. Install database driver (e.g., `npm install mongoose`)
2. Create database models
3. Update API endpoints to use database
4. Add environment variables for database connection

### Add Email Service

1. Install email library (e.g., `npm install nodemailer`)
2. Configure email service in environment variables
3. Update contact endpoint to send emails

## 🚀 Deployment

### Render (Recommended)
1. Connect your GitHub repository
2. Set build command: `npm install && npm run build`
3. Set start command: `npm start`
4. Add environment variables

### Heroku
1. Create a new Heroku app
2. Connect your repository
3. Set environment variables
4. Deploy

### Railway
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically

## 🔒 Security

### Current Security Features
- **Helmet.js** - Security headers
- **CORS** - Cross-origin resource sharing
- **Input validation** - Basic validation for contact form
- **Error handling** - Comprehensive error handling

### Additional Security Recommendations
- Add rate limiting
- Implement authentication if needed
- Add request validation middleware
- Use HTTPS in production
- Add API key authentication

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   - Change PORT in .env file
   - Kill process using the port

2. **CORS errors**
   - Check CORS_ORIGIN in .env
   - Verify frontend URL is correct

3. **Build errors**
   - Run `npm install` to ensure dependencies
   - Check TypeScript errors

4. **Environment variables not loading**
   - Ensure .env file exists
   - Check variable names match

## 📁 Project Structure

```
src/
└── index.ts              # Main server file with all routes
```

## 📝 License

MIT License - feel free to use this project for your own portfolio! 