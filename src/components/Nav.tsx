import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const PAGES = [
  { to: '/', label: 'Home', end: true },
  { to: '/framework', label: 'The Framework' },
  { to: '/observer-problem', label: 'The Observer Problem' },
  { to: '/practice', label: 'Practice' },
  { to: '/isc', label: 'Intuition Score Capability' },
  { to: '/vedic-foundations', label: 'Vedic Foundations' },
  { to: '/writing', label: 'Writing' },
  { to: '/about', label: 'About' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'bg-[#f7f4ef]/95 backdrop-blur-sm border-black/10'
          : 'bg-[#f7f4ef] border-black/5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink
            to="/"
            className="font-serif text-lg font-semibold tracking-tight text-[#1a1a1a] hover:text-[#2d2b6b] transition-colors duration-200"
            onClick={() => setOpen(false)}
          >
            CRI
          </NavLink>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-6">
            {PAGES.map((page) => (
              <li key={page.to}>
                <NavLink
                  to={page.to}
                  end={page.end}
                  className={({ isActive }) =>
                    `nav-link text-[13px] font-medium tracking-wide text-[#1a1a1a]/70 hover:text-[#1a1a1a] ${
                      isActive ? 'active' : ''
                    }`
                  }
                >
                  {page.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 -mr-2 text-[#1a1a1a]"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-black/10 bg-[#f7f4ef]">
          <ul className="max-w-6xl mx-auto px-5 sm:px-8 py-4 space-y-1">
            {PAGES.map((page) => (
              <li key={page.to}>
                <NavLink
                  to={page.to}
                  end={page.end}
                  className={({ isActive }) =>
                    `block py-2.5 text-sm font-medium border-b border-black/5 last:border-0 ${
                      isActive
                        ? 'text-[#2d2b6b]'
                        : 'text-[#1a1a1a]/80'
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {page.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
