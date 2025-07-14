# 🚀 Modern Portfolio Website

A complete, modern portfolio website built with React, TypeScript, and Express.js. Features stunning animations, dark/light theme, and EmailJS integration.

## 📁 Project Structure

```
portfolio/
├── portfolio-frontend/     # React + TypeScript frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── contexts/       # Theme context
│   │   └── ...
│   ├── package.json
│   └── README.md
├── portfolio-backend/      # Express.js API backend
│   ├── src/
│   │   └── index.ts        # Main server file
│   ├── package.json
│   └── README.md
└── README.md              # This file
```

## ✨ Features

### Frontend
- **Modern Design**: Clean, professional design with glassmorphism effects
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Responsive**: Fully responsive design for all devices
- **Smooth Animations**: Framer Motion animations throughout
- **Contact Form**: EmailJS integration for contact functionality
- **Performance**: Optimized with Vite for fast loading
- **SEO Ready**: Meta tags and structured data

### Backend
- **RESTful API**: Express.js with TypeScript
- **CORS Enabled**: For frontend integration
- **Security**: Helmet.js security headers
- **Logging**: Morgan request logging
- **Error Handling**: Comprehensive error handling

## 🛠️ Tech Stack

### Frontend
- **React 18** + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **EmailJS** for contact forms
- **Vite** for build tool

### Backend
- **Node.js** + **Express.js**
- **TypeScript**
- **Helmet** for security
- **CORS** for cross-origin requests
- **Morgan** for logging

## 🚀 Quick Start

### 1. Frontend Setup

```bash
# Navigate to frontend
cd portfolio-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will be available at: `http://localhost:3000`

### 2. Backend Setup (Optional)

```bash
# Navigate to backend
cd portfolio-backend

# Install dependencies
npm install

# Set up environment variables
cp env.example .env

# Start development server
npm run dev
```

Backend will be available at: `http://localhost:5000`

## ⚙️ Configuration

### EmailJS Setup

1. **Create EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/) and create an account
   - Add your email service (Gmail, Outlook, etc.)

2. **Create Email Template**
   - Create a new email template
   - Use these variables: `{{user_name}}`, `{{user_email}}`, `{{subject}}`, `{{message}}`

3. **Update Configuration**
   - Open `portfolio-frontend/src/components/Contact.tsx`
   - Replace placeholder values with your EmailJS credentials

### Customization

#### Personal Information
Update the following files with your information:

- **Hero Section**: `portfolio-frontend/src/components/Hero.tsx`
- **About Section**: `portfolio-frontend/src/components/About.tsx`
- **Contact Section**: `portfolio-frontend/src/components/Contact.tsx`
- **Projects**: `portfolio-frontend/src/components/Projects.tsx`
- **Skills**: `portfolio-frontend/src/components/Skills.tsx`

#### Colors and Theme
Customize colors in `portfolio-frontend/tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        // ... customize your color palette
      },
    },
  },
},
```

## 📡 API Endpoints

The backend provides these endpoints:

- `GET /api/health` - Health check
- `GET /api/projects` - Portfolio projects
- `GET /api/skills` - Skills data
- `GET /api/about` - About information
- `POST /api/contact` - Contact form submissions

## 🎨 Design Features

### Animations
- **Scroll-triggered animations** using Framer Motion
- **Hover effects** on buttons and cards
- **Smooth transitions** between theme modes
- **Loading animations** for contact form

### Responsive Design
- **Mobile-first** approach
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible grid** layouts
- **Touch-friendly** interactions

## 🚀 Deployment

### Frontend Deployment

#### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

#### Netlify
1. Build your project: `npm run build`
2. Upload the `dist` folder to Netlify

### Backend Deployment

#### Render (Recommended)
1. Connect your GitHub repository
2. Set build command: `npm install && npm run build`
3. Set start command: `npm start`
4. Add environment variables

#### Heroku
1. Create a new Heroku app
2. Connect your repository
3. Set environment variables
4. Deploy

## 🔧 Development

### Frontend Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend Scripts
```bash
npm run dev      # Start development server with hot reload
npm run build    # Build TypeScript to JavaScript
npm start        # Start production server
npm run lint     # Run ESLint
```

## 📝 Customization Guide

### 1. Content Updates
- **Personal Info**: Update name, title, description in components
- **Projects**: Add your projects to the projects array
- **Skills**: Update skill levels and categories
- **Contact**: Update email, phone, location

### 2. Styling
- **Colors**: Modify Tailwind config
- **Fonts**: Add custom fonts to CSS
- **Layout**: Adjust component layouts
- **Animations**: Customize Framer Motion variants

### 3. Functionality
- **EmailJS**: Configure for contact form
- **API Integration**: Connect to backend for dynamic data
- **Analytics**: Add Google Analytics or similar
- **SEO**: Update meta tags and structured data

## 🐛 Troubleshooting

### Common Issues

1. **EmailJS Not Working**
   - Check EmailJS credentials in Contact component
   - Verify email template variables
   - Check browser console for errors

2. **CORS Errors**
   - Ensure backend CORS_ORIGIN is set correctly
   - Check frontend API calls use correct URL

3. **Build Errors**
   - Run `npm install` in both directories
   - Check TypeScript errors with `npm run build`
   - Verify all dependencies are installed

4. **Theme Not Working**
   - Check ThemeContext implementation
   - Verify Tailwind dark mode configuration
   - Clear browser cache

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Express.js Documentation](https://expressjs.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons
- [EmailJS](https://www.emailjs.com/) for contact forms
- [Vite](https://vitejs.dev/) for build tool

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Happy Coding! 🚀**

*Built with ❤️ using modern web technologies* 