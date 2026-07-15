import {
  BarChart3,
  BookOpen,
  Bot,
  FolderKanban,
  Route,
  Target,
} from 'lucide-react';
import Container from '../layout/Container';
import Section from '../layout/Section';
import SectionHeader from './SectionHeader';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui';

const features = [
  {
    icon: Route,
    title: 'Personalized roadmaps',
    description: 'AI-generated career paths based on your unique background and goals.',
  },
  {
    icon: Target,
    title: 'Skill gap analysis',
    description: 'See exactly which skills you need and how they connect to your target role.',
  },
  {
    icon: BookOpen,
    title: 'Curated resources',
    description: 'Hand-picked courses, videos, and articles matched to each learning phase.',
  },
  {
    icon: FolderKanban,
    title: 'Project recommendations',
    description: 'Build a portfolio with projects that prove your skills to recruiters.',
  },
  {
    icon: BarChart3,
    title: 'Progress tracking',
    description: 'Monitor milestones, completion rates, and momentum toward your goal.',
  },
  {
    icon: Bot,
    title: 'AI career mentor',
    description: 'Get guidance on what to learn next, without a generic chatbot experience.',
  },
];

function FeaturesSection() {
  return (
    <Section id="features">
      <Container>
        <SectionHeader
          title="Everything you need to grow"
          subtitle="PathPilot combines structured learning with intelligent guidance in one platform."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title}>
                <CardHeader>
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-button bg-accent-light text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
