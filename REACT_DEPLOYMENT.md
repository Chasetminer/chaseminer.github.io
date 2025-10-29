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
4. The site will be available at: `https://yourusername.github.io/`

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

## SPA Routing Fix

The site uses a special routing fix for GitHub Pages:
- `404.html` captures failed routes and stores the path
- `index.html` restores the correct path when the app loads
- This allows direct navigation to `/posts`, `/cv`, etc. to work correctly

## Troubleshooting

- **404 errors on refresh**: The `404.html` file handles client-side routing automatically
- **White screen on navigation**: Make sure both `404.html` and the redirect script in `index.html` are present
- **Assets not loading**: Check the `base` path in `vite.config.js` (should be `/` for root deployment)
- **Build fails**: Check the GitHub Actions logs in the repository