import { Link } from 'react-router-dom';
import posts from '../data/posts';
import Sidebar from '../components/Sidebar';

export default function Posts() {
  return (
    <div className="posts-layout">
      <Sidebar />
      <section className="post-list">
        <h2>All Posts</h2>
        <ul>
          {posts.map(post => (
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
