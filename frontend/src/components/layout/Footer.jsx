import Container from '../layout/Container';

const footerLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Career Paths', href: '#career-paths' },
];

function Footer() {
  return (
    <footer className="border-t border-border bg-surface py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold text-slate-900">
              Path <span className="text-primary">Pilot</span>
            </p>
            <p className="mt-1 text-caption text-slate-500">
              Your AI-powered career navigation platform.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-caption font-medium text-slate-600 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-8 text-center text-caption text-slate-400">
          &copy; {new Date().getFullYear()} Path Pilot. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
