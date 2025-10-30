// Utility to transform a raw multiline content string into structured data blocks
// and a renderer to turn those blocks into React elements.
// Rules:
//  - Split on two or more newlines for paragraph-level blocks
//  - A block becomes a list if every non-empty line starts with '- '
//  - Inline backticks are left untouched (no markdown inline parsing yet)
//  - Returns plain objects describing blocks; renderer converts them to JSX

import { getAssetPath } from './assetPath.js';

// Process inline markdown like **bold**, *italic*, and HTML tags like <br>
function processInlineMarkdown(text) {
  const parts = [];
  let currentIndex = 0;
  
  // Regular expression to match **bold**, *italic*, and <br> tags
  const markdownRegex = /(\*\*([^*]+)\*\*|\*([^*]+)\*|<br\s*\/?>)/gi;
  let match;
  
  while ((match = markdownRegex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > currentIndex) {
      parts.push(text.slice(currentIndex, match.index));
    }
    
    // Add the formatted text or HTML element
    if (match[2]) {
      // **bold** text
      parts.push(<strong key={`bold-${match.index}`}>{match[2]}</strong>);
    } else if (match[3]) {
      // *italic* text
      parts.push(<em key={`italic-${match.index}`}>{match[3]}</em>);
    } else if (match[0].toLowerCase().startsWith('<br')) {
      // <br> or <br/> tag
      parts.push(<br key={`br-${match.index}`} />);
    }
    
    currentIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (currentIndex < text.length) {
    parts.push(text.slice(currentIndex));
  }
  
  return parts.length > 0 ? parts : text;
}

export function parseContent(raw) {
  if (!raw || !raw.trim()) return [];
  const blocks = raw
    .trim()
    .split(/\n{2,}/)
    .map(b => b.trim())
    .filter(Boolean);

  return blocks.map((block, i) => {
    const lines = block.split(/\n+/).map(l => l.trim()).filter(Boolean);
    
    // Check for headers: ## Header, ### Subheader, etc.
    const headerMatch = block.match(/^(#{1,6})\s+(.+)$/);
    if (headerMatch) {
      const [, hashes, text] = headerMatch;
      const level = hashes.length;
      return {
        type: 'header',
        key: i,
        level: level,
        text: text.trim()
      };
    }
    
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
      const desktopSrc = getAssetPath(sources[0]);
      const mobileSrc = sources[1] ? getAssetPath(sources[1]) : desktopSrc; // fallback to desktop if no mobile specified
      
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
    
    const isList = lines.every(l => l.startsWith('- '));
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
    if (b.type === 'header') {
      const HeaderTag = `h${b.level}`;
      return (
        <HeaderTag key={b.key} className={`post-header post-header--${b.level}`}>
          {b.text}
        </HeaderTag>
      );
    }
    
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
    
    // Process inline markdown in paragraphs
    const processedText = processInlineMarkdown(b.text);
    return <p key={b.key}>{processedText}</p>;
  });
}
