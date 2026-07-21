import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle, Target, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Badge } from '../components/ui';

const STATS = [
  { label: 'Roadmap progress', value: '0%', icon: TrendingUp, color: 'text-primary' },
  { label: 'Skills completed', value: '0', icon: CheckCircle, color: 'text-emerald-600' },
  { label: 'Resources saved', value: '0', icon: BookOpen, color: 'text-teal-600' },
  { label: 'Active goal', value: 'None', icon: Target, color: 'text-amber-600' },
];

function DashboardPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-display text-slate-900">Welcome back, Navneet</h1>
        <p className="mt-1 text-body text-slate-500">
          Here&apos;s an overview of your career journey.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map(({ label, value, icon: Icon, color }) => (
          <Card key={label} className="flex items-center gap-4 p-5">
            <div className={`rounded-full bg-slate-100 p-2.5 ${color}`}>
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-caption text-slate-500">{label}</p>
              <p className="text-heading text-slate-900">{value}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Active roadmap card */}
      <div>
        <h2 className="mb-4 text-heading text-slate-900">Active roadmap</h2>
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div>
                <CardTitle>No roadmap yet</CardTitle>
                <CardDescription className="mt-1">
                  Generate your personalised career roadmap to get started.
                </CardDescription>
              </div>
              <Badge variant="warning">Not started</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-input border border-dashed border-border bg-slate-50 px-6 py-10 text-center">
              <Target className="mx-auto mb-3 h-10 w-10 text-slate-300" aria-hidden="true" />
              <p className="text-caption text-slate-400">
                You haven&apos;t created your roadmap yet. Generate your personalized career path.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Link to="/dashboard/roadmap">
              <Button>
                Generate roadmap
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      {/* Today's task placeholder */}
      <div>
        <h2 className="mb-4 text-heading text-slate-900">Today&apos;s goal</h2>
        <Card>
          <CardContent>
            <div className="rounded-input border border-dashed border-border bg-slate-50 px-6 py-8 text-center">
              <p className="text-caption text-slate-400">
                No tasks yet. Complete your roadmap setup to see daily goals.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default DashboardPage;
