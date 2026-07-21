import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';
import Section from '../layout/Section';

function CtaSection() {
  return (
    <Section id="get-started" variant="primary">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Ready to map your career?
          </h2>
          <p className="mt-4 text-body text-slate-600">
            Join PathPilot and get a personalized learning roadmap built around your goals,
            skills, and timeline.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/register"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-button bg-primary px-6 text-subheading text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto"
            >
              Create My Roadmap
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              to="/login"
              className="inline-flex h-12 w-full items-center justify-center rounded-button bg-secondary px-6 text-subheading text-secondary-foreground transition-colors hover:bg-secondary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 sm:w-auto"
            >
              Log in
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default CtaSection;
