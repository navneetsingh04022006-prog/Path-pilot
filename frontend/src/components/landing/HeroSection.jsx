import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';
import { ContainerScroll } from '../ui';

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface dark:bg-slate-950 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-28 lg:pt-20 transition-colors">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary-light/60 dark:from-primary-900/20 to-transparent"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="flex flex-col">
          <ContainerScroll
            titleComponent={
              <div className="mx-auto max-w-3xl text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-light dark:bg-primary-900/40 px-4 py-1.5 text-caption text-primary dark:text-primary-300">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  AI-powered career guidance
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                  Unleash the power of <br />
                  <span className="text-3xl font-bold sm:text-4xl md:text-5xl leading-none text-primary dark:text-primary-400 mt-2 block">
                    PathPilot Dashboard
                  </span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300 sm:text-xl">
                  Know what to learn, what to build, and where it leads.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    to="/register"
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-button bg-primary px-6 text-subheading text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto"
                  >
                    Create My Roadmap
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                  <a
                    href="#how-it-works"
                    className="inline-flex h-12 w-full items-center justify-center rounded-button bg-secondary dark:bg-slate-800 px-6 text-subheading text-secondary-foreground dark:text-slate-200 transition-colors hover:bg-secondary-hover dark:hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 sm:w-auto"
                  >
                    See How It Works
                  </a>
                </div>
              </div>
            }
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
              alt="PathPilot Dashboard Preview"
              className="mx-auto h-full rounded-2xl object-cover object-left-top w-full"
              draggable={false}
            />
          </ContainerScroll>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
