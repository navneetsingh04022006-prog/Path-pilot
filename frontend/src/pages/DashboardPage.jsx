import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  Clock,
  Map,
  Sparkles,
  Target,
  TrendingUp,
} from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Badge,
} from '../components/ui';
import api from '../services/api';

function DashboardPage() {
  const [roadmap, setRoadmap] = useState(null);
  const [roadmapLoading, setRoadmapLoading] = useState(true);

  useEffect(() => {
    api.roadmap
      .getCurrent()
      .then((data) => setRoadmap(data))
      .catch(() => setRoadmap(null))
      .finally(() => setRoadmapLoading(false));
  }, []);

  const totalWeeks = roadmap
    ? roadmap.phases.reduce((sum, p) => sum + (p.duration_weeks ?? 0), 0)
    : 0;

  const totalTopics = roadmap
    ? roadmap.phases.reduce((sum, p) => sum + (p.topics?.length ?? 0), 0)
    : 0;

  const stats = [
    {
      label: 'Roadmap phases',
      value: roadmap ? String(roadmap.phases.length) : '—',
      icon: TrendingUp,
      color: 'text-primary dark:text-primary-400',
      bg: 'bg-primary-light dark:bg-primary-950/60',
    },
    {
      label: 'Total duration',
      value: roadmap ? `${totalWeeks}w` : '—',
      icon: Clock,
      color: 'text-teal-600 dark:text-teal-400',
      bg: 'bg-teal-50 dark:bg-teal-950/60',
    },
    {
      label: 'Topics to cover',
      value: roadmap ? String(totalTopics) : '—',
      icon: BookOpen,
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-950/60',
    },
    {
      label: 'Active goal',
      value: roadmap ? roadmap.career_goal.split(' ').slice(0, 3).join(' ') : 'None',
      icon: Target,
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-950/60',
    },
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-display text-slate-900 dark:text-white">Welcome back</h1>
        <p className="mt-1 text-body text-slate-500 dark:text-slate-400">
          Here is an overview of your career journey.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, color, bg }) => (
          <Card key={label} className="flex items-center gap-4 p-5">
            <div className={`rounded-full p-2.5 ${bg} ${color} shrink-0`}>
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-caption text-slate-500 dark:text-slate-400">{label}</p>
              <p className="text-heading text-slate-900 dark:text-slate-100 truncate">{value}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Active roadmap card */}
      <div>
        <h2 className="mb-4 text-heading text-slate-900 dark:text-slate-100">Active roadmap</h2>

        {roadmapLoading ? (
          <Card>
            <CardContent className="py-10 text-center">
              <div className="mx-auto h-6 w-6 animate-spin rounded-full border-4 border-primary border-t-transparent" aria-label="Loading roadmap" />
            </CardContent>
          </Card>
        ) : roadmap ? (
          <Card className="border-t-4 border-t-primary dark:border-t-primary-500">
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <CardTitle>{roadmap.career_goal}</CardTitle>
                  <CardDescription className="mt-1">{roadmap.summary}</CardDescription>
                </div>
                <Badge variant="accent">{roadmap.phases.length} phases</Badge>
              </div>
            </CardHeader>

            <CardContent>
              {/* Phase progress strip */}
              <div className="space-y-2">
                <p className="text-caption text-slate-500 dark:text-slate-400">
                  Phase overview — {totalWeeks} weeks total
                </p>
                <div className="flex gap-1.5 flex-wrap">
                  {roadmap.phases.map((phase, idx) => (
                    <div
                      key={idx}
                      className="group relative flex-1 min-w-16"
                    >
                      <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary/40 dark:bg-primary-500/40"
                          style={{ width: `${(phase.duration_weeks / Math.max(totalWeeks, 1)) * 100}%` }}
                        />
                      </div>
                      <p className="mt-1 text-caption text-slate-400 dark:text-slate-500 truncate text-center">
                        {phase.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* First phase preview */}
              {roadmap.phases[0] && (
                <div className="mt-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-primary dark:text-primary-400" aria-hidden="true" />
                    <span className="text-caption font-medium text-slate-700 dark:text-slate-300">
                      Starting phase: {roadmap.phases[0].title}
                    </span>
                    <Badge variant="default" className="ml-auto shrink-0">
                      {roadmap.phases[0].duration_weeks}w
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {roadmap.phases[0].topics?.slice(0, 4).map((topic, i) => (
                      <span
                        key={i}
                        className="inline-flex rounded-full bg-primary/8 dark:bg-primary-950/60 px-2.5 py-0.5 text-caption text-primary dark:text-primary-300"
                      >
                        {topic}
                      </span>
                    ))}
                    {roadmap.phases[0].topics?.length > 4 && (
                      <span className="text-caption text-slate-400 dark:text-slate-500 self-center">
                        +{roadmap.phases[0].topics.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              )}
            </CardContent>

            <CardFooter>
              <Link to="/dashboard/roadmap">
                <Button>
                  View full roadmap
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle>No roadmap yet</CardTitle>
                  <CardDescription className="mt-1">
                    Generate your personalized career roadmap to get started.
                  </CardDescription>
                </div>
                <Badge variant="warning">Not started</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-input border border-dashed border-border dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 px-6 py-10 text-center">
                <Map className="mx-auto mb-3 h-10 w-10 text-slate-300 dark:text-slate-600" aria-hidden="true" />
                <p className="text-caption text-slate-400 dark:text-slate-500">
                  Complete your skill assessment and then generate your personalized career path.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Link to="/dashboard/roadmap">
                <Button>
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Generate roadmap
                </Button>
              </Link>
            </CardFooter>
          </Card>
        )}
      </div>

      {/* Today's goal placeholder */}
      <div>
        <h2 className="mb-4 text-heading text-slate-900 dark:text-slate-100">Today goal</h2>
        <Card>
          <CardContent>
            <div className="rounded-input border border-dashed border-border dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 px-6 py-8 text-center">
              <p className="text-caption text-slate-400 dark:text-slate-500">
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
