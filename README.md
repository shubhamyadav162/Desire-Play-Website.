# Desire Play Website

Premium logo design and visiting card platform for Indian businesses.

## 🚀 Project Overview

Desireplay is a modern React-based website built with Vite, TypeScript, and Tailwind CSS. It provides professional logo design, visiting cards, and gift card services with a seamless user experience.

## ✨ Features

- **Logo Design**: Professional logo creation services
- **Visiting Cards**: Premium business card designs
- **Gift Cards**: Custom gift card solutions
- **Shopping Cart**: Full e-commerce functionality
- **User Authentication**: Secure login/signup with Google OAuth
- **Responsive Design**: Mobile-first approach
- **Performance Optimized**: Fast loading with code splitting

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + Shadcn/ui components
- **Animations**: Framer Motion
- **Routing**: React Router
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/shubhamyadav162/Desire-Play-Website..git
   cd Desire-Play-Website.
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file with your configuration.

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to `http://localhost:8080`

## 🚀 Deployment

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial deployment setup"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the project configuration
   - Deploy with one click

### Manual Build

```bash
# Build for production
npm run build

# Preview build locally
npm run preview

# Type check
npm run type-check

# Lint code
npm run lint
```

## 📁 Project Structure

```
desireplay-website/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── favicon.png
│   ├── robots.txt
│   └── placeholder.svg
├── src/
│   ├── assets/             # Images and static files
│   ├── components/         # React components
│   │   ├── ui/            # Shadcn/ui components
│   │   ├── layout/        # Layout components
│   │   ├── product/       # Product-related components
│   │   ├── sections/      # Page sections
│   │   ├── auth/          # Authentication components
│   │   └── cart/          # Shopping cart components
│   ├── contexts/          # React contexts
│   ├── hooks/             # Custom hooks
│   ├── pages/             # Page components
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── dist/                  # Build output
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore rules
├── .npmrc               # npm configuration
├── components.json      # Shadcn/ui configuration
├── eslint.config.js     # ESLint configuration
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── postcss.config.js    # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── tsconfig.node.json   # TypeScript Node configuration
├── vite.config.ts       # Vite configuration
└── vercel.json          # Vercel deployment configuration
```

## 🔧 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_APP_NAME` | Application name | "Desireplay" |
| `VITE_APP_VERSION` | Application version | "1.0.0" |
| `VITE_APP_ENV` | Environment | "development" |
| `VITE_SUPPORT_EMAIL` | Support email | "hello@desireplay.com" |
| `VITE_SUPPORT_EMAIL_ALT` | Alternative support email | "support@desireplay.com" |

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ⚡ Performance

- **Code Splitting**: Automatic chunk splitting for optimal loading
- **Image Optimization**: WebP support and lazy loading
- **Caching**: Efficient caching strategies
- **Tree Shaking**: Unused code elimination
- **Minification**: CSS and JavaScript minification

## 🔒 Security

- **Input Validation**: Zod schema validation
- **XSS Protection**: React's built-in XSS protection
- **HTTPS**: Secure connections only
- **Content Security Policy**: Strict CSP headers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Commit your changes
6. Push to the branch
7. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: hello@desireplay.com
- Alternative: support@desireplay.com

## 📊 Analytics

The project is configured for:
- Vercel Analytics (automatic)
- Google Analytics (optional - configure in environment variables)

## 🔄 Continuous Integration

The project includes:
- Automated builds on Vercel
- Type checking with TypeScript
- Code linting with ESLint
- Build verification

## 🚀 Deployment Status

[![Vercel Status](https://therealsujitk.vercel.app/api/status-badge?style=for-the-badge&label=DEPLOYED+ON+VERCEL)](https://vercel.com)

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
