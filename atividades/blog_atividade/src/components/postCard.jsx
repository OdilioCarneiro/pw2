import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 100)}...</p>
      <Link to={`/artigo/${post.id}`}>Ler mais</Link>
    </article>
  );
}