import { NavLink } from 'react-router-dom';

export default function Header() {
  // Função para estilo ativo conforme o slide da aula
  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? 'var(--accent-pink)' : 'var(--text-main)',
    transform: isActive ? 'translateY(-2px)' : 'none',
    textDecoration: isActive ? 'underline' : 'none',
  });

  return (
        <header>
    <div>
        <h1>Atividade blog</h1>
        <nav>
                <NavLink to="/" style={navLinkStyles}>Início</NavLink>
            <NavLink to="/sobre" style={navLinkStyles}>Sobre</NavLink>
            <NavLink to="/contato" style={navLinkStyles}>Contato</NavLink>
        </nav>
    </div>
    </header>
  );
}