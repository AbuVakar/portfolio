# 🚀 Portfolio Setup Guide

This guide will help you get your portfolio website up and running quickly.

## Prerequisites

1. **Install Node.js** (v18 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version` and `npm --version`

2. **Code Editor** (recommended: VS Code)
   - Download from [code.visualstudio.com](https://code.visualstudio.com/)

## Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Your portfolio will be available at `http://localhost:3000`

## Required Configuration

### EmailJS Setup (Required for Contact Form)

1. **Create EmailJS Account**
   - Go to [EmailJS](https://www.emailjs.com/)
   - Sign up for a free account

2. **Add Email Service**
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template:
   ```
   Subject: New Contact Form Message from {{user_name}}
   
   Name: {{user_name}}
   Email: {{user_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```

4. **Get Your Credentials**
   - Service ID: Found in "Email Services" tab
   - Template ID: Found in "Email Templates" tab
   - Public Key: Found in "Account" tab

5. **Update Contact Component**
   - Open `src/components/Contact.tsx`
   - Replace the placeholder values:
   ```typescript
   const result = await emailjs.sendForm(
     'YOUR_SERVICE_ID',     // Replace with your service ID
     'YOUR_TEMPLATE_ID',    // Replace with your template ID
     formRef.current!,
     'YOUR_PUBLIC_KEY'      // Replace with your public key
   );
   ```

## Personalization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`)
   - Line 42: Update name "John Doe"
   - Line 50: Update title "Full Stack Developer"
   - Line 58: Update description
   - Lines 95-115: Update social media links

2. **About Section** (`src/components/About.tsx`)
   - Lines 5-8: Update stats (experience, projects, etc.)
   - Lines 75-85: Update personal description
   - Lines 95-105: Update skills preview

3. **Contact Section** (`src/components/Contact.tsx`)
   - Lines 8-20: Update contact information
   - Lines 130-140: Update social links

4. **Projects Section** (`src/components/Projects.tsx`)
   - Lines 5-60: Replace with your actual projects
   - Update project images, descriptions, and links

5. **Skills Section** (`src/components/Skills.tsx`)
   - Lines 5-70: Update skills and proficiency levels

6. **Footer** (`src/components/Footer.tsx`)
   - Line 24: Update name
   - Line 26: Update description
   - Lines 35-45: Update social links
   - Lines 65-70: Update contact information

### Update Page Title and Meta Tags

1. **HTML Title** (`index.html`)
   - Line 6: Update title with your name
   - Lines 7-9: Update meta description and keywords

## Testing

### Test Contact Form
1. Fill out the contact form
2. Submit and check if you receive the email
3. Check browser console for any errors

### Test Theme Toggle
1. Click the sun/moon icon in the navbar
2. Verify the theme changes properly
3. Check if the theme persists on page refresh

### Test Responsive Design
1. Open browser dev tools
2. Test different screen sizes
3. Verify all components look good on mobile

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Netlify
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist` folder
4. Configure custom domain if needed

## Troubleshooting

### Common Issues

1. **"npm not recognized"**
   - Install Node.js from [nodejs.org](https://nodejs.org/)

2. **EmailJS not working**
   - Verify all credentials are correct
   - Check browser console for errors
   - Ensure email template variables match

3. **Build errors**
   - Run `npm install` to ensure all dependencies are installed
   - Check TypeScript errors with `npm run build`

4. **Styling issues**
   - Clear browser cache
   - Restart development server
   - Check if Tailwind CSS is properly configured

### Getting Help

If you encounter any issues:
1. Check the browser console for errors
2. Verify all configuration steps are completed
3. Check the main README.md for additional troubleshooting

## Next Steps

Once your portfolio is running:
1. Customize the design to match your style
2. Add your own projects and skills
3. Update all personal information
4. Test thoroughly on different devices
5. Deploy to your preferred hosting platform

Happy coding! 🚀 