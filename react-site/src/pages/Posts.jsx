import { Link } from 'react-router-dom';
import posts from '../data/posts';
import Sidebar from '../components/Sidebar';

export default function Posts() {
  // Sort posts by date in descending order (most recent first)
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA; // Descending order
  });

  return (
    <div className="posts-layout">
      {/* <Sidebar /> */}
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
    </div>
  );
}
