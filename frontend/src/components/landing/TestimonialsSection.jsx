import Container from '../layout/Container';
import Section from '../layout/Section';
import SectionHeader from './SectionHeader';
import { Card, CardContent, CardDescription, CardHeader } from '../ui';

const testimonials = [
  {
    quote:
      'PathPilot turned my vague goal of getting into cybersecurity into a clear weekly plan. I always knew what to focus on next.',
    name: 'Priya Sharma',
    role: 'Computer Science Student',
  },
  {
    quote:
      'The skill gap view helped me prioritize what actually matters for software engineering interviews instead of learning randomly.',
    name: 'Marcus Chen',
    role: 'Career Switcher',
  },
  {
    quote:
      'I use it like a mentor — it suggests projects and resources that fit my level without overwhelming me.',
    name: 'Aisha Okonkwo',
    role: 'Junior Developer',
  },
];

function TestimonialsSection() {
  return (
    <Section id="testimonials">
      <Container>
        <SectionHeader
          title="Trusted by learners"
          subtitle="Students and professionals use PathPilot to navigate their next career move."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardHeader>
                <CardDescription className="text-base leading-relaxed text-slate-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-slate-900">{testimonial.name}</p>
                <p className="text-caption text-slate-500">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default TestimonialsSection;
