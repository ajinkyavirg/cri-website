import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f4ef]">
      <Nav />
      <main className="flex-1 page-enter" key={pathname}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
