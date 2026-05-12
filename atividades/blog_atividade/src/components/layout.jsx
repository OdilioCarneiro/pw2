import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="container">
        {/* O Outlet especifica onde o conteúdo da rota aninhada (filha) será renderizado */}
        <Outlet /> 
      </main>
      <Footer />
    </>
  );
}