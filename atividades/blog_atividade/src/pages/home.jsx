import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>CARREGANDO DADOS...</h2>;

  return (
    <div>
      <h2>Últimas Atualizações</h2>
      <div className="post-list">
        {posts.map((post) => (
          <article key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.body.substring(0, 100)}...</p>
            
            {/* O LINK VAI AQUI: */}
            <Link to={`/artigo/${post.id}`}>Ler Post Completo</Link>
            
          </article>
        ))}
      </div>
    </div>
  );
}