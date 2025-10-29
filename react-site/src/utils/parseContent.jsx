// Utility to transform a raw multiline content string into structured data blocks
// and a renderer to turn those blocks into React elements.
// Rules:
//  - Split on two or more newlines for paragraph-level blocks
//  - A block becomes a list if every non-empty line starts with '- '
//  - Inline backticks are left untouched (no markdown inline parsing yet)
//  - Returns plain objects describing blocks; renderer converts them to JSX

export function parseContent(raw) {
  if (!raw || !raw.trim()) return [];
  const blocks = raw
    .trim()
    .split(/\n{2,}/)
    .map(b => b.trim())
    .filter(Boolean);

  return blocks.map((block, i) => {
    const lines = block.split(/\n+/).map(l => l.trim()).filter(Boolean);
    
    // Check for image syntax: ![position:caption](url) or ![position:caption](desktop-url|mobile-url)
    const imageMatch = block.match(/^!\[([^:]+):([^\]]*)\]\(([^)]+)\)$/);
    if (imageMatch) {
      const [, positionString, caption, srcString] = imageMatch;
      
      // Parse position and optional size modifier: "center-large", "left-small", etc.
      const positionParts = positionString.trim().toLowerCase().split('-');
      const position = positionParts[0]; // 'left', 'right', 'full', 'center'
      const size = positionParts[1] || 'default'; // 'small', 'large', or 'default'
      
      // Handle responsive images: desktop.jpg|mobile.jpg
      const sources = srcString.split('|').map(s => s.trim());
      const desktopSrc = sources[0];
      const mobileSrc = sources[1] || desktopSrc; // fallback to desktop if no mobile specified
      
      return {
        type: 'image',
        key: i,
        src: desktopSrc,
        mobileSrc: mobileSrc,
        caption: caption.trim(),
        position: position,
        size: size,
        alt: caption.trim() || 'Image'
      };
    }
    
    const isList = lines.length > 1 && lines.every(l => l.startsWith('- '));
    if (isList) {
      return {
        type: 'list',
        key: i,
        items: lines.map(l => l.replace(/^-\s+/, '')),
      };
    }
    return { type: 'paragraph', key: i, text: block };
  });
}

export function renderBlocks(blocks) {
  return blocks.map(b => {
    if (b.type === 'list') {
      return (
        <ul key={b.key} className="post-list-block">
          {b.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    }
    
    if (b.type === 'image') {
      // Use HTML picture element for responsive images if mobile source differs
      const hasResponsiveSources = b.mobileSrc && b.mobileSrc !== b.src;
      
      const sizeClass = b.size !== 'default' ? ` post-image--${b.size}` : '';
      return (
        <figure key={b.key} className={`post-image post-image--${b.position}${sizeClass}`}>
          {hasResponsiveSources ? (
            <picture>
              <source media="(max-width: 768px)" srcSet={b.mobileSrc} />
              <img 
                src={b.src} 
                alt={b.alt}
                loading="lazy"
              />
            </picture>
          ) : (
            <img 
              src={b.src} 
              alt={b.alt}
              loading="lazy"
            />
          )}
          {b.caption && (
            <figcaption className="post-image__caption">
              {b.caption}
            </figcaption>
          )}
        </figure>
      );
    }
    
    return <p key={b.key}>{b.text}</p>;
  });
}
