# React Site Deployment Guide

This React site is automatically deployed to GitHub Pages using GitHub Actions.

## Automatic Deployment

The site automatically deploys when:
- You push changes to the `main` branch in the `react-site/` folder
- You manually trigger the workflow from the GitHub Actions tab

## Manual Deployment Steps

If you need to deploy manually:

1. **Build the site locally:**
   ```bash
   cd react-site
   npm run build
   ```

2. **Preview the build:**
   ```bash
   npm run preview
   ```

## GitHub Pages Setup

Make sure GitHub Pages is configured in your repository:

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The site will be available at: `https://yourusername.github.io/react-site/`

## Local Development

For local development:
```bash
cd react-site
npm install
npm run dev
```

## File Structure

- `/react-site/public/` - Static assets (images, CV PDF, etc.)
- `/react-site/src/` - React source code
- `/.github/workflows/deploy-react.yml` - GitHub Actions workflow
- `/react-site/vite.config.js` - Build configuration

## Adding Your CV

1. Save your CV as `cv.pdf` in `/react-site/public/`
2. The CV page will automatically display it with download/view options

## Troubleshooting

- **404 errors on refresh**: The `404.html` file handles client-side routing
- **Assets not loading**: Check the `base` path in `vite.config.js`
- **Build fails**: Check the GitHub Actions logs in the repository