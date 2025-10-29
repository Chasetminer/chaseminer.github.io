import posts from '../data/posts';
import homePost from '../data/homePost';
import { parseContent, renderBlocks } from '../utils/parseContent.jsx';
import { getAssetPath } from '../utils/assetPath.js';

export default function Home() {
  // homePost now comes from its own module and is excluded from posts listing

  const structured = parseContent(homePost.content);
  const rendered = renderBlocks(structured);

  // Helper function to get the appropriate image source for tiles
  const getTileImageSrc = (photoString) => {
    if (!photoString) return null;
    const sources = photoString.split('|').map(s => s.trim());
    // For tiles, prefer mobile version (better proportions) with desktop fallback
    const selectedImage = sources[1] || sources[0];
    return getAssetPath(selectedImage);
  };

  return (
    <div className="home">
      <div className="home-top">
        <img src={getAssetPath("/hero2.jpg")} alt="Hero" className="hero-image" />
        <section className="intro">
          <div className='post-inner'>
            <h1>{homePost.title}</h1>
            {/* <p><em>{homePost.date}</em></p> */}
            <div className="post-body">
              {rendered}
            </div>
          </div>
        </section>
      </div>
      <section className="home-tiles" aria-labelledby="home-tiles-heading">
        <h2 id="home-tiles-heading" className="home-tiles__title">Explore More</h2>
        <div className="tiles-grid">
          {['getting-started','SAINTCON','pihole', 'plant_monitoring', 'test2', 'test3']
            .map(id => posts.find(p => p.id === id))
            .filter(Boolean)
            .map(post => {
              const firstParagraph = (post.content || '')
                .trim()
                .split(/\n{2,}/)
                .map(b => b.trim())
                .filter(Boolean)[0] || '';
              const excerpt = firstParagraph.replace(/\s+/g,' ').slice(0,160).trim() + (firstParagraph.length > 160 ? '…' : '');
              return (
                <article key={post.id} className="tile">
                  <a href={`/post/${post.id}`} className="tile__link" aria-label={post.title}>
                    <div className="tile__media">
                      {getTileImageSrc(post.photo) ? (
                        <img src={getTileImageSrc(post.photo)} alt={post.title} loading="lazy" />
                      ) : (
                        <div className="tile__placeholder" aria-hidden="true">No Image</div>
                      )}
                    </div>
                    <div className="tile__body">
                      <h3 className="tile__title">{post.title}</h3>
                      <p className="tile__excerpt">{excerpt}</p>
                    </div>
                  </a>
                </article>
              );
            })}
        </div>
      </section>
    </div>
  );
}
