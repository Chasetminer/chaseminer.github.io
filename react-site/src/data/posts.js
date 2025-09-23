const posts = [
  {
    id: 'getting-started',
    title: 'Getting Started with My Website',
    date: '2025-09-22',
    content: `
      Welcome to my personal website! I'm Chase, and this is where I document my journey as a developer.

      From systems programming in C to deploying elegant React layouts, I’m building this site to learn, share, and grow.
      \n
      sadfas
      
    `,
  },
  {
    id: 'dns-troubleshooting',
    title: 'DNS Troubleshooting Tips',
    date: '2025-09-20',
    content: `
      DNS issues can be frustrating, especially when deploying custom domains. Here's how I debugged my GitHub Pages setup:
      - Verified CNAME records
      - Cleared browser cache
      - Used incognito mode to bypass cached redirects
    `,
  },
  {
    id: 'jekyll-build-errors',
    title: 'Fixing Jekyll Build Errors',
    date: '2025-09-18',
    content: `
      Jekyll threw some curveballs during my site setup. I patched SCSS grid logic, resolved gem conflicts, and learned how GitHub Pages handles plugins.
      Persistence pays off—now I can preview everything locally with \`bundle exec jekyll serve\`.
    `,
  },
];

export default posts;
