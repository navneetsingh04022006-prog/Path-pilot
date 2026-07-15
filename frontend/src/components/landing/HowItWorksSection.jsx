import { ClipboardList, Map, TrendingUp } from 'lucide-react';
import Container from '../layout/Container';
import Section from '../layout/Section';
import SectionHeader from './SectionHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui';

const steps = [
  {
    icon: ClipboardList,
    title: 'Share your profile',
    description:
      'Tell us about your skills, education, experience, and the career you want to reach.',
  },
  {
    icon: Map,
    title: 'Get your roadmap',
    description:
      'AI builds a step-by-step learning path with skills, resources, and projects tailored to you.',
  },
  {
    icon: TrendingUp,
    title: 'Track your progress',
    description:
      'Follow milestones, close skill gaps, and stay on course toward your target role.',
  },
];

function HowItWorksSection() {
  return (
    <Section id="how-it-works" variant="muted">
      <Container>
        <SectionHeader
          title="How it works"
          subtitle="Three guided steps from where you are today to the career you want."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.title} className="relative">
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-button bg-primary-light text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="text-caption font-semibold text-primary">Step {index + 1}</p>
                  <CardTitle>{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent className="sr-only">
                  Step {index + 1}: {step.title}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default HowItWorksSection;
