const posts = [
  {
    id: 'getting-started',
    title: 'Getting Started with My Website',
    date: '2025-09-22',
    photo: '/MontBlancBanner.jpg', // place this file in public/MontBlancBanner.jpg
    content: `
      Welcome to my personal website! I'm Chase, and this is where I document my journey as a developer.

      From systems programming in C to deploying elegant React layouts, I’m building this site to learn, share, and grow.
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis tortor et nisl ullamcorper, eu rhoncus orci hendrerit. 
      Integer cursus est turpis, eu lobortis risus maximus quis. Vestibulum porttitor mattis nisi vel molestie. Fusce sed semper augue. 
      Donec congue maximus odio, tincidunt porttitor lectus. Cras placerat auctor eros, a congue nibh dignissim at. Vestibulum suscipit 
      rutrum urna in faucibus. Fusce leo ipsum, lacinia eu aliquet vitae, suscipit non ipsum. Nullam imperdiet facilisis accumsan. Nulla 
      finibus odio eget enim sagittis, a rutrum tellus placerat. Quisque id bibendum odio.

      Morbi volutpat sed libero ut varius. Nulla gravida leo eros, nec feugiat ante molestie rhoncus. 
      Vestibulum in arcu vel diam euismod imperdiet vel ac dui. Pellentesque quis feugiat nisi. Ut vulputate 
      sem id urna lobortis porttitor. Phasellus eu diam magna. Morbi pellentesque rutrum nunc vitae tincidunt.
       Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec luctus 
       urna non euismod feugiat. Vestibulum et tristique nulla.

      Suspendisse euismod tristique sapien eu tempor. Sed a metus odio. Praesent ut rhoncus odio. Nunc vitae
       ex eu libero lobortis consequat. Nullam fringilla, risus sed molestie molestie, risus enim porta 
       lorem, ut aliquet sapien lorem nec nisl. Donec et tellus in enim sodales dignissim et ac elit. 
       Etiam ultrices ornare augue a tempor. Duis dignissim est et massa lacinia aliquam. Donec rutrum 
       varius velit, volutpat faucibus felis egestas nec. Mauris non leo nec nunc vestibulum consectetur. 
       Aliquam blandit, nulla eget malesuada commodo, tortor neque elementum ipsum, blandit viverra ante 
       ante nec tortor. Donec rhoncus sapien in efficitur ornare. Phasellus dui nibh, blandit quis porttitor 
       id, convallis id lectus. Nunc vestibulum in velit nec imperdiet. Phasellus fermentum lacus quis laoreet 
       hendrerit.

      Proin eget congue nibh, quis feugiat lorem. Maecenas blandit et augue iaculis tristique. Pellentesque varius finibus urna, a volutpat nisl bibendum ut. Curabitur fringilla velit nec urna rhoncus consectetur. Quisque luctus pretium libero, vel faucibus massa pretium vitae. Etiam justo nisl, tristique in vehicula eu, tincidunt vitae urna. Mauris at mollis tortor. Aliquam erat volutpat. Quisque finibus iaculis libero. Etiam ultrices, purus et sollicitudin posuere, arcu tortor luctus lacus, ut laoreet quam augue eu dolor. Ut elit ipsum, viverra at dignissim in, sagittis nec ante. Integer luctus diam velit, id dapibus neque convallis ac. Nullam porta tempus eleifend. Nullam iaculis commodo erat vitae dapibus.

      Maecenas sapien dui, tempor sit amet placerat quis, scelerisque id metus. Integer sed auctor turpis. Quisque vestibulum justo leo, in suscipit odio fermentum non. Phasellus tempus eleifend risus in consequat. Nulla tellus dui, eleifend et mollis id, lobortis a sapien. Etiam nibh lorem, porta quis ipsum id, ultrices vulputate ipsum. Etiam sodales sagittis justo, eu luctus ligula pharetra vel. Fusce vel erat pellentesque, molestie quam non, tincidunt neque. Cras elit justo, pulvinar a molestie in, aliquam quis tellus.
    `,
  },
  {
    id: 'dns-troubleshooting',
    title: 'DNS Troubleshooting Tips',
    date: '2025-09-20',
    photo: '/dns.png',
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
