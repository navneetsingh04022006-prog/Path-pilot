import { ArrowRight, Sparkles } from 'lucide-react';
import Container from '../layout/Container';
import { Button } from '../ui';

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-20">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-light/60 to-transparent"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-1.5 text-caption font-medium text-primary">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            AI-powered career guidance
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl lg:leading-tight">
            Your AI-powered career roadmap
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
            Know what to learn, what to build, and where it leads.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* TODO: Navigate to /register once React Router is wired */}
            <Button size="lg" className="w-full sm:w-auto">
              Create My Roadmap
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <a
              href="#how-it-works"
              className="inline-flex h-12 w-full items-center justify-center rounded-button bg-secondary px-6 text-subheading font-medium text-secondary-foreground transition-colors hover:bg-secondary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 sm:w-auto"
            >
              See How It Works
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
