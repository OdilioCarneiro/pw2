import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Meu Blog React</h1>
      <nav>
        <Link to="/">Início</Link> | {" "}
        <Link to="/sobre">Sobre</Link> | {" "}
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  );
}