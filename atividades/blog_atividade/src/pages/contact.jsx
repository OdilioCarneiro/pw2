import { useState } from 'react';

export default function Contact() {
  // useState guardando as informações do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado pelo contato, ${formData.nome}! Mensagem enviada.`);
    setFormData({ nome: '', email: '', mensagem: '' }); // Limpa o form
  };

  return (
    <div>
      <h2>Entre em Contato</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label><br/>
          <input 
            type="text" 
            name="nome" 
            value={formData.nome} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Email:</label><br/>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Mensagem:</label><br/>
          <textarea 
            name="mensagem" 
            value={formData.mensagem} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Enviar Mensagem</button>
      </form>
    </div>
  );
}