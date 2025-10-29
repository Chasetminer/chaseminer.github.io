import { useParams } from 'react-router-dom';
import posts from '../data/posts';
import Sidebar from '../components/Sidebar';
import { parseContent, renderBlocks } from '../utils/parseContent.jsx';
import { getAssetPath } from '../utils/assetPath.js';

export default function Post() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) return <p>Post not found.</p>;

  const structured = parseContent(post.content);
  const renderedBlocks = renderBlocks(structured);

  // Handle responsive hero images: desktop.jpg|mobile.jpg
  const getHeroImageSources = (photoString) => {
    if (!photoString) return null;
    const sources = photoString.split('|').map(s => s.trim());
    return {
      desktop: getAssetPath(sources[0]),
      mobile: getAssetPath(sources[1] || sources[0]) // fallback to desktop if no mobile specified
    };
  };

  const heroSources = getHeroImageSources(post.photo);

  return (
    <article className="post">
      {heroSources && (
        <div className="post-hero">
          {heroSources.mobile !== heroSources.desktop ? (
            <picture>
              <source media="(max-width: 768px)" srcSet={heroSources.mobile} />
              <img
                src={heroSources.desktop}
                alt={post.title}
                className="post-hero-image"
                loading="lazy"
              />
            </picture>
          ) : (
            <img
              src={heroSources.desktop}
              alt={post.title}
              className="post-hero-image"
              loading="lazy"
            />
          )}
        </div>
      )}
      <div className="post-layout">
        <Sidebar />
        <div className='post-inner'>
          <h1>{post.title}</h1>
          <p><em>{post.date}</em></p>
          <div className="post-body">
              {renderedBlocks}
          </div>
        </div>
      </div>
    </article>
  );
}
