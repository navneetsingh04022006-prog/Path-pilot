import { ArrowRight } from 'lucide-react';
import { Button, Badge, Card } from '../components/ui';

const PHASES = [
  { id: 1, title: 'Phase 1', subtitle: 'Foundation', status: 'upcoming' },
  { id: 2, title: 'Phase 2', subtitle: 'Core Skills', status: 'upcoming' },
  { id: 3, title: 'Phase 3', subtitle: 'Specialisation', status: 'upcoming' },
  { id: 4, title: 'Goal', subtitle: 'Internship / Job', status: 'upcoming' },
];

const STATUS_BADGE = {
  completed: 'success',
  active: 'accent',
  upcoming: 'default',
};

function RoadmapPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div>
        <h1 className="text-display text-slate-900 dark:text-white">Your roadmap</h1>
        <p className="mt-1 text-body text-slate-500 dark:text-slate-400">
          A step-by-step plan toward your career goal.
        </p>
      </div>

      {/* Empty state until roadmap is generated */}
      <div className="rounded-card border border-dashed border-border dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 px-6 py-12 text-center">
        <ArrowRight className="mx-auto mb-4 h-10 w-10 text-slate-300 dark:text-slate-600" aria-hidden="true" />
        <p className="text-heading text-slate-700 dark:text-slate-200">No roadmap generated yet</p>
        <p className="mt-2 text-caption text-slate-400 dark:text-slate-500">
          Once you generate a roadmap, your personalised timeline will appear here.
        </p>
        <Button className="mt-6">
          Generate my roadmap
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </div>

      {/* Timeline skeleton (placeholder) */}
      <div aria-label="Roadmap timeline preview">
        <p className="mb-4 text-caption text-slate-400 dark:text-slate-500">Preview — phases will populate after generation.</p>
        <ol className="relative border-l-2 border-border dark:border-slate-800 pl-6">
          {PHASES.map(({ id, title, subtitle, status }, idx) => (
            <li
              key={id}
              className={idx < PHASES.length - 1 ? 'mb-8' : ''}
            >
              {/* Node */}
              <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-border dark:border-slate-700 bg-surface dark:bg-slate-900" />

              {/* Card */}
              <Card className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-caption text-slate-400 dark:text-slate-500">{title}</p>
                    <p className="text-heading text-slate-700 dark:text-slate-200">{subtitle}</p>
                  </div>
                  <Badge variant={STATUS_BADGE[status]}>{status}</Badge>
                </div>
                <p className="mt-3 text-caption text-slate-400 dark:text-slate-500">
                  Skills · Resources · Projects will appear here.
                </p>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RoadmapPage;
