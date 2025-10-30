import { Link } from 'react-router-dom';
import posts from '../data/posts';

export default function Sidebar() {
  // Sort posts by date in descending order (most recent first)
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA; // Descending order
  });

  return (
    <aside className="sidebar">
      <section className="post-list">
        <h2>All Posts</h2>
        <ul>
          {sortedPosts.map(post => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
              <p><em>{post.date}</em></p>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
