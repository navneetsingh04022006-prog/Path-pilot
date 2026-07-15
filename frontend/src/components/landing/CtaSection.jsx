import { ArrowRight } from 'lucide-react';
import Container from '../layout/Container';
import Section from '../layout/Section';
import { Button } from '../ui';

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
            {/* TODO: Navigate to /register once React Router is wired */}
            <Button size="lg" className="w-full sm:w-auto">
              Create My Roadmap
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Log in
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default CtaSection;
