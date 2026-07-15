import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import Container from '../layout/Container';
import Section from '../layout/Section';
import SectionHeader from './SectionHeader';
import { Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Label } from '../ui';

const careerPaths = [
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Engineer',
    description: 'Protect systems and data with networking, security, and incident response skills.',
    tags: ['Security', 'Networking', 'Linux'],
    demand: 'High demand',
  },
  {
    id: 'software-engineering',
    title: 'Software Engineer',
    description: 'Build applications with strong foundations in programming, systems, and collaboration.',
    tags: ['Programming', 'Algorithms', 'Git'],
    demand: 'High demand',
  },
  {
    id: 'data-science',
    title: 'Data Scientist',
    description: 'Turn data into insights using statistics, machine learning, and visualization.',
    tags: ['Python', 'Statistics', 'ML'],
    demand: 'Growing fast',
  },
  {
    id: 'cloud-engineering',
    title: 'Cloud Engineer',
    description: 'Design and operate scalable infrastructure on modern cloud platforms.',
    tags: ['AWS', 'DevOps', 'Containers'],
    demand: 'High demand',
  },
  {
    id: 'ux-design',
    title: 'UX Designer',
    description: 'Create intuitive product experiences through research, design, and prototyping.',
    tags: ['Research', 'Figma', 'Usability'],
    demand: 'Steady growth',
  },
  {
    id: 'product-management',
    title: 'Product Manager',
    description: 'Lead product strategy by connecting user needs, business goals, and execution.',
    tags: ['Strategy', 'Analytics', 'Communication'],
    demand: 'Growing fast',
  },
];

function CareerPathsSection() {
  const [query, setQuery] = useState('');

  const filteredPaths = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return careerPaths;
    }

    return careerPaths.filter((path) => {
      const searchable = [path.title, path.description, ...path.tags].join(' ').toLowerCase();
      return searchable.includes(normalizedQuery);
    });
  }, [query]);

  return (
    <Section id="career-paths" variant="muted">
      <Container>
        <SectionHeader
          title="Explore career paths"
          subtitle="Search popular roles and see how PathPilot can guide your journey."
        />

        <div className="mx-auto mt-10 max-w-xl">
          <Label htmlFor="career-search">Search careers</Label>
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              aria-hidden="true"
            />
            <Input
              id="career-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g. cybersecurity, data science, design"
              className="pl-9"
              hint="Filter career paths by role, skill, or keyword."
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPaths.map((path) => (
            <Card key={path.id}>
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle>{path.title}</CardTitle>
                  <Badge variant="accent">{path.demand}</Badge>
                </div>
                <CardDescription>{path.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {path.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                {/* TODO: Navigate to role-specific onboarding once routing exists */}
                <Button variant="secondary" size="sm" className="w-full">
                  Explore Path
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredPaths.length === 0 && (
          <p className="mt-8 text-center text-body text-slate-600">
            No career paths match your search. Try a different keyword.
          </p>
        )}
      </Container>
    </Section>
  );
}

export default CareerPathsSection;
