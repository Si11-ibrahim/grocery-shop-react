import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { MiniCart } from './MiniCart';

export function PageLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <MiniCart />
    </div>
  );
}
