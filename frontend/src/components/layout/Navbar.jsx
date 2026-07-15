import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Container from './Container';
import { Button } from '../ui';
import { cn } from '../../utils/cn';

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Career Paths', href: '#career-paths' },
  { label: 'Testimonials', href: '#testimonials' },
];

const ctaClassName =
  'inline-flex h-8 items-center justify-center rounded-button bg-primary px-3 text-caption font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="text-lg font-semibold text-slate-900">
            Path <span className="text-primary">Pilot</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-caption font-medium text-slate-600 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            {/* TODO: Navigate to /login once React Router is wired */}
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <a href="#get-started" className={ctaClassName}>
              Get Started
            </a>
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
                    className="block rounded-button px-3 py-2 text-body font-medium text-slate-700 hover:bg-slate-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
                <Button variant="ghost" className="w-full">
                  Log in
                </Button>
                <a href="#get-started" className={cn(ctaClassName, 'h-10 w-full px-4')}>
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}

export default Navbar;
