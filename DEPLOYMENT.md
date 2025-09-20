# 🚀 Deployment Guide - Desire Play Website

## Vercel Deployment Instructions

### Step 1: Vercel Account Setup

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account
   - Connect your GitHub account to Vercel

### Step 2: Import Project

1. **Import Repository**
   - Click "New Project" in Vercel dashboard
   - Select "Import Git Repository"
   - Choose `shubhamyadav162/Desire-Play-Website.`
   - Click "Import"

### Step 3: Configure Build Settings

Vercel will automatically detect your project configuration:

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

### Step 4: Environment Variables

Add these environment variables in Vercel dashboard:

| Variable | Value | Description |
|----------|-------|-------------|
| `VITE_APP_NAME` | `Desire Play` | Application name |
| `VITE_APP_VERSION` | `1.0.0` | Application version |
| `VITE_SUPPORT_EMAIL` | `hello@desireplay.com` | Support email |
| `VITE_SUPPORT_EMAIL_ALT` | `support@desireplay.com` | Alternative support email |

### Step 5: Deploy

1. **Automatic Deployment**
   - Click "Deploy" button
   - Vercel will build and deploy your project
   - You'll get a live URL (e.g., `https://desire-play-website.vercel.app`)

2. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Configure DNS settings as instructed

## GitHub Actions CI/CD

### Automatic Deployment Setup

Your project includes GitHub Actions for automatic deployment:

1. **Workflows Included:**
   - `ci.yml` - Continuous Integration (runs on every push/PR)
   - `deploy.yml` - Automatic deployment to Vercel

2. **Required Secrets:**
   Add these secrets in GitHub repository settings:

   | Secret Name | Description | How to Get |
   |-------------|-------------|------------|
   | `VERCEL_TOKEN` | Vercel API token | Vercel Dashboard → Settings → Tokens |
   | `ORG_ID` | Vercel Organization ID | Vercel Dashboard → Settings → General |
   | `PROJECT_ID` | Vercel Project ID | Project Settings → General |
   | `VERCEL_SCOPE` | Vercel scope | Usually your username/team name |

### How to Get Vercel Secrets:

1. **VERCEL_TOKEN:**
   - Go to [vercel.com/account/tokens](https://vercel.com/account/tokens)
   - Create new token
   - Copy the token value

2. **ORG_ID & PROJECT_ID:**
   - Go to your project in Vercel dashboard
   - Go to Settings → General
   - Copy Organization ID and Project ID

3. **VERCEL_SCOPE:**
   - Usually your Vercel username
   - Can be found in your profile URL

## Manual Deployment Commands

### Local Build & Test:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview build locally
npm run preview

# Type check
npm run type-check

# Lint code
npm run lint
```

### Deploy to Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Performance Optimization

### Build Optimization:

1. **Code Splitting**: Automatic with Vite
2. **Tree Shaking**: Automatic unused code removal
3. **Image Optimization**: WebP support enabled
4. **Caching**: Configured in vercel.json

### Monitoring:

1. **Vercel Analytics**: Automatic with Vercel deployment
2. **Performance**: Built-in Vercel Speed Insights
3. **Uptime**: Vercel monitoring included

## Troubleshooting

### Common Issues:

1. **Build Fails:**
   - Check Node.js version (requires >= 18.0.0)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Environment Variables Not Working:**
   - Ensure variables start with `VITE_`
   - Redeploy after adding new variables

3. **Routing Issues:**
   - Verify `vercel.json` routes configuration
   - Ensure SPA routing is properly configured

### Support:

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **GitHub Actions**: Check Actions tab in repository
- **Project Issues**: Create issue in GitHub repository

## Production Checklist

- [ ] All environment variables configured
- [ ] Custom domain configured (if needed)
- [ ] SSL certificate active
- [ ] Analytics configured
- [ ] Error monitoring setup
- [ ] Performance monitoring active
- [ ] Backup strategy in place

---

**Your website will be live at:** `https://your-project-name.vercel.app`

**Repository:** [github.com/shubhamyadav162/Desire-Play-Website.](https://github.com/shubhamyadav162/Desire-Play-Website..git)
