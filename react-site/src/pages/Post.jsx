import { useParams } from 'react-router-dom';
import posts from '../data/posts';

export default function Post() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) return <p>Post not found.</p>;

  return (
    <article className="post">
      <h1>{post.title}</h1>
      <p><em>{post.date}</em></p>
      <p>{post.content}</p>
    </article>
  );
}
