import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function Post() {
  const { id } = useParams(); // Pega o ID da URL (requisito do PDF de Router)
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Busca apenas o post específico pelo ID
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, [id]); // O efeito roda novamente se o ID mudar

  if (loading) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>BUSCANDO ARTIGO...</h2>;
  if (!post) return <h2>Post não encontrado!</h2>;

  return (
    <article className="post-content">
      <Link to="/" style={{ marginBottom: '20px', display: 'inline-block', fontWeight: 'bold' }}>
        ← VOLTAR PARA A HOME
      </Link>
      
      <div className="post-card" style={{ padding: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
          {post.title}
        </h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
          {post.body}
          {/* Repetindo o corpo para simular um texto mais longo e profissional */}
          <br /><br />
          {post.body}
        </p>
      </div>
    </article>
  );
}