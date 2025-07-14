# Portfolio Frontend

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
   ```bash
# Install dependencies
   npm install

# Start development server
   npm run dev
   ```

The application will be available at `http://localhost:3000`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## ⚙️ Configuration

### EmailJS Setup (Required for Contact Form)

1. **Create EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/) and create an account
   - Add your email service (Gmail, Outlook, etc.)

2. **Create Email Template**
   - Create a new email template
   - Use these variables: `{{user_name}}`, `{{user_email}}`, `{{subject}}`, `{{message}}`

3. **Update Configuration**
   - Open `src/components/Contact.tsx`
   - Replace placeholder values with your EmailJS credentials:
     - `YOUR_SERVICE_ID` → Your EmailJS service ID
     - `YOUR_TEMPLATE_ID` → Your EmailJS template ID
     - `YOUR_PUBLIC_KEY` → Your EmailJS public key

### Personal Information

Update the following files with your information:

- **Hero Section**: `src/components/Hero.tsx` - Name, title, description
- **About Section**: `src/components/About.tsx` - Personal info, stats
- **Contact Section**: `src/components/Contact.tsx` - Contact details
- **Projects**: `src/components/Projects.tsx` - Your projects
- **Skills**: `src/components/Skills.tsx` - Your skills and levels
- **Footer**: `src/components/Footer.tsx` - Contact info and social links

### Customization

#### Colors and Theme
Customize colors in `tailwind.config.js`:

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

#### Animations
Customize animations in `tailwind.config.js`:

```javascript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  'bounce-slow': 'bounce 2s infinite',
},
```

## 🎨 Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Responsive**: Fully responsive design for all devices
- **Smooth Animations**: Framer Motion animations throughout
- **Contact Form**: EmailJS integration for contact functionality
- **Performance**: Optimized with Vite for fast loading
- **SEO Ready**: Meta tags and structured data

## 🐛 Troubleshooting

### Common Issues

1. **EmailJS Not Working**
   - Check EmailJS credentials in Contact component
   - Verify email template variables
   - Check browser console for errors

2. **Build Errors**
   - Run `npm install` to ensure all dependencies are installed
   - Check TypeScript errors with `npm run build`
   - Verify all imports are correct

3. **Theme Not Working**
   - Check ThemeContext implementation
   - Verify Tailwind dark mode configuration
   - Clear browser cache

4. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check for missing CSS classes
   - Verify PostCSS configuration

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer component
│   ├── Hero.tsx        # Hero section
│   ├── Navbar.tsx      # Navigation bar
│   ├── Projects.tsx    # Projects section
│   └── Skills.tsx      # Skills section
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── App.tsx             # Main app component
├── main.tsx            # App entry point
├── index.css           # Global styles
└── App.css             # App-specific styles
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build your project: `npm run build`
2. Upload the `dist` folder to Netlify

### Other Platforms
The project is compatible with any static hosting service that supports React applications.

## 📝 License

MIT License - feel free to use this project for your own portfolio!
