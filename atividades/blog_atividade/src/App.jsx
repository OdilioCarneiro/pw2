import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/home';
import Post from './pages/post';
import About from './pages/about';
import Contact from './pages/contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Pai (Layout) delimitando todas as rotas filhas */}
        <Route path="/" element={<Layout />}>
          {/* Rotas Aninhadas: renderizam no lugar do <Outlet /> */}
          <Route index element={<Home />} />
          <Route path="artigo/:id" element={<Post />} />
          <Route path="sobre" element={<About />} />
          <Route path="contato" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;