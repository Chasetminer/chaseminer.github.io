import { useParams } from 'react-router-dom';
import posts from '../data/posts';
import Sidebar from '../components/Sidebar';

export default function Post() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) return <p>Post not found.</p>;

  // Transform raw multiline content into structured React elements.
  // Rules:
  // - Split on two or more newlines for paragraphs/blocks
  // - Inside each block, if every non-empty line starts with '-' treat as a list
  // - Preserve inline code backticks as-is (no markdown parsing yet)
  const blocks = post.content
    .trim()
    .split(/\n{2,}/)
    .map(block => block.trim())
    .filter(Boolean);

  const renderedBlocks = blocks.map((block, i) => {
    const lines = block.split(/\n+/).map(l => l.trim()).filter(Boolean);
    const isList = lines.length > 1 && lines.every(l => l.startsWith('- '));
    if (isList) {
      return (
        <ul key={i} className="post-list-block">
          {lines.map((l, j) => (
            <li key={j}>{l.replace(/^-\s+/, '')}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i}>{block}</p>
    );
  });

  return (
    <article className="post">
      {post.photo && (
        <div className="post-hero">
          <img
            src={post.photo}
            alt={post.title}
            className="post-hero-image"
            loading="lazy"
          />
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
