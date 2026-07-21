import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from './Container';
import { cn } from '../../utils/cn';

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Career Paths', href: '#career-paths' },
  { label: 'Testimonials', href: '#testimonials' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-lg font-semibold text-slate-900">
            Path <span className="text-primary">Pilot</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-caption text-slate-600 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/login"
              className="inline-flex h-8 items-center justify-center rounded-button px-3 text-caption text-slate-700 transition-colors hover:bg-slate-100"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="inline-flex h-8 items-center justify-center rounded-button bg-primary px-3 text-caption text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Get Started
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-button p-2 text-slate-700 md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav
            className="border-t border-border py-4 md:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block rounded-button px-3 py-2 text-body text-slate-700 hover:bg-slate-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className={cn('mt-2 flex flex-col gap-2 border-t border-border pt-4')}>
                <Link
                  to="/login"
                  className="block rounded-button px-3 py-2 text-center text-body text-slate-700 hover:bg-slate-100"
                  onClick={() => setMenuOpen(false)}
                >
                  Log in
                </Link>
                <Link
                  to="/register"
                  className="block rounded-button bg-primary px-3 py-2 text-center text-body text-primary-foreground hover:bg-primary-hover"
                  onClick={() => setMenuOpen(false)}
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}

export default Navbar;
