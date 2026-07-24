import { useCallback, useEffect, useRef, useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Clock,
  Cpu,
  FolderGit2,
  Loader2,
  Map,
  RefreshCw,
  Sparkles,
} from 'lucide-react';
import { Button, Badge, Card, CardContent, CardHeader, CardTitle, Input, Label } from '../components/ui';
import api from '../services/api';

// ─── Loading message sequence shown during generation ────────────────────────
const LOADING_MESSAGES = [
  'Analyzing your skills and experience...',
  'Mapping your career goal to a learning path...',
  'Structuring learning phases...',
  'Selecting relevant resources...',
  'Designing project milestones...',
  'Finalizing your personalized roadmap...',
];

function useLoadingMessages(active) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!active) {
      setIndex(0);
      clearInterval(timerRef.current);
      return;
    }
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1 < LOADING_MESSAGES.length ? prev + 1 : prev));
    }, 2200);
    return () => clearInterval(timerRef.current);
  }, [active]);

  return LOADING_MESSAGES[index];
}

// ─── Phase card ───────────────────────────────────────────────────────────────
function PhaseCard({ phase, index, isLast }) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <li className={isLast ? '' : 'mb-6'}>
      {/* Timeline node */}
      <span
        className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary dark:border-primary-400 bg-surface dark:bg-slate-900 text-caption font-semibold text-primary dark:text-primary-400"
        aria-hidden="true"
      >
        {phase.phase_number}
      </span>

      <Card className="overflow-hidden transition-shadow hover:shadow-card">
        {/* Header — always visible */}
        <button
          type="button"
          className="flex w-full items-start justify-between gap-4 p-5 text-left"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
        >
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <Badge variant="default" className="shrink-0">
                Phase {phase.phase_number}
              </Badge>
              <span className="flex items-center gap-1 text-caption text-slate-500 dark:text-slate-400 shrink-0">
                <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                {phase.duration_weeks} {phase.duration_weeks === 1 ? 'week' : 'weeks'}
              </span>
            </div>
            <p className="text-heading text-slate-900 dark:text-slate-100 truncate">{phase.title}</p>
          </div>
          {expanded ? (
            <ChevronUp className="h-4 w-4 shrink-0 mt-1 text-slate-400" aria-hidden="true" />
          ) : (
            <ChevronDown className="h-4 w-4 shrink-0 mt-1 text-slate-400" aria-hidden="true" />
          )}
        </button>

        {/* Expandable details */}
        {expanded && (
          <CardContent className="border-t border-border dark:border-slate-800 pt-4 pb-5 px-5 space-y-4">
            {/* Topics */}
            {phase.topics && phase.topics.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 mb-2 text-caption font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
                  Topics
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {phase.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="inline-flex rounded-full bg-primary/8 dark:bg-primary-950/60 px-2.5 py-0.5 text-caption text-primary dark:text-primary-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Resources */}
            {phase.resources && phase.resources.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 mb-2 text-caption font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                  Resources
                </div>
                <ul className="space-y-1">
                  {phase.resources.map((res, i) => (
                    <li key={i} className="flex items-start gap-2 text-body text-slate-700 dark:text-slate-300">
                      <ArrowRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary dark:text-primary-400" aria-hidden="true" />
                      {res.startsWith('http') ? (
                        <a
                          href={res}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-2 hover:text-primary dark:hover:text-primary-300 break-all"
                        >
                          {res}
                        </a>
                      ) : (
                        <span>{res}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Projects */}
            {phase.projects && phase.projects.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 mb-2 text-caption font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                  <FolderGit2 className="h-3.5 w-3.5" aria-hidden="true" />
                  Projects
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {phase.projects.map((proj, i) => (
                    <span
                      key={i}
                      className="inline-flex rounded-full bg-teal-50 dark:bg-teal-950/40 px-2.5 py-0.5 text-caption text-teal-700 dark:text-teal-300"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        )}
      </Card>
    </li>
  );
}

// ─── Generate form ────────────────────────────────────────────────────────────
function GenerateForm({ onGenerated }) {
  const [careerGoal, setCareerGoal] = useState('');
  const [weeklyHours, setWeeklyHours] = useState(10);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState('');
  const loadingMessage = useLoadingMessages(generating);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!careerGoal.trim()) return;
    setGenerating(true);
    setError('');
    try {
      const roadmap = await api.roadmap.generate(careerGoal.trim(), weeklyHours);
      onGenerated(roadmap);
    } catch (err) {
      setError(err.message ?? 'Generation failed. Please try again.');
    } finally {
      setGenerating(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary dark:text-primary-400" aria-hidden="true" />
          Generate your roadmap
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="career-goal">Career goal</Label>
            <Input
              id="career-goal"
              type="text"
              placeholder="e.g. Full Stack Developer, Data Scientist, DevOps Engineer"
              value={careerGoal}
              onChange={(e) => setCareerGoal(e.target.value)}
              disabled={generating}
              required
            />
            <p className="mt-1 text-caption text-slate-400 dark:text-slate-500">
              Be specific about the role or skill you want to reach.
            </p>
          </div>

          <div>
            <Label htmlFor="weekly-hours">Hours available per week</Label>
            <select
              id="weekly-hours"
              value={weeklyHours}
              onChange={(e) => setWeeklyHours(Number(e.target.value))}
              disabled={generating}
              className="h-10 w-full rounded-input border border-border dark:border-slate-800 bg-surface dark:bg-slate-900 px-3 text-body text-slate-800 dark:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
            >
              {[5, 10, 15, 20, 30, 40].map((h) => (
                <option key={h} value={h}>
                  {h} hours / week
                </option>
              ))}
            </select>
          </div>

          {error && (
            <div
              role="alert"
              className="flex items-start gap-2 rounded-lg border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/30 px-4 py-3 text-caption text-red-700 dark:text-red-300"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {error}
            </div>
          )}

          <Button
            type="submit"
            loading={generating}
            disabled={!careerGoal.trim() || generating}
            className="w-full"
          >
            {generating ? (
              <span className="truncate">{loadingMessage}</span>
            ) : (
              <>
                Generate roadmap
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
function RoadmapPage() {
  const [roadmap, setRoadmap] = useState(null);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState('');
  const [regenerating, setRegenerating] = useState(false);

  const fetchCurrent = useCallback(() => {
    setFetchLoading(true);
    setFetchError('');
    api.roadmap
      .getCurrent()
      .then((data) => setRoadmap(data))
      .catch((err) => {
        if (err.message && err.message.includes('404')) {
          setRoadmap(null);
        } else {
          setFetchError(err.message ?? 'Failed to load roadmap.');
        }
      })
      .finally(() => setFetchLoading(false));
  }, []);

  useEffect(() => {
    fetchCurrent();
  }, [fetchCurrent]);

  const totalWeeks = roadmap
    ? roadmap.phases.reduce((sum, p) => sum + (p.duration_weeks ?? 0), 0)
    : 0;

  if (fetchLoading) {
    return (
      <div className="mx-auto max-w-2xl space-y-8">
        <div>
          <h1 className="text-display text-slate-900 dark:text-white">Your roadmap</h1>
          <p className="mt-1 text-body text-slate-500 dark:text-slate-400">
            A step-by-step plan toward your career goal.
          </p>
        </div>
        <div className="flex items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary dark:text-primary-400" aria-label="Loading roadmap" />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-display text-slate-900 dark:text-white">Your roadmap</h1>
        <p className="mt-1 text-body text-slate-500 dark:text-slate-400">
          A step-by-step plan toward your career goal.
        </p>
      </div>

      {fetchError && (
        <div
          role="alert"
          className="flex items-center gap-2 rounded-lg border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/30 px-4 py-3 text-caption text-red-700 dark:text-red-300"
        >
          <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          {fetchError}
        </div>
      )}

      {/* No roadmap yet — show generate form */}
      {!roadmap && !fetchError && (
        <>
          <div className="rounded-card border border-dashed border-border dark:border-slate-800 bg-slate-50 dark:bg-slate-950/60 px-6 py-10 text-center">
            <Map className="mx-auto mb-4 h-10 w-10 text-slate-300 dark:text-slate-600" aria-hidden="true" />
            <p className="text-heading text-slate-700 dark:text-slate-200">No roadmap generated yet</p>
            <p className="mt-2 text-caption text-slate-400 dark:text-slate-500">
              Complete your skill assessment, then generate a personalized career roadmap below.
            </p>
          </div>
          <GenerateForm onGenerated={setRoadmap} />
        </>
      )}

      {/* Active roadmap */}
      {roadmap && (
        <>
          {/* Summary card */}
          <Card className="border-t-4 border-t-primary dark:border-t-primary-500">
            <CardHeader>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-caption text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-1">
                    Career goal
                  </p>
                  <CardTitle className="text-display">{roadmap.career_goal}</CardTitle>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <Badge variant="accent">{roadmap.phases.length} phases</Badge>
                  <span className="text-caption text-slate-400 dark:text-slate-500">
                    {totalWeeks} weeks total
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-body text-slate-600 dark:text-slate-350">{roadmap.summary}</p>
              <p className="mt-3 text-caption text-slate-400 dark:text-slate-500">
                Generated on {new Date(roadmap.created_at).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>

          {/* Timeline */}
          <section aria-label="Roadmap timeline">
            <ol className="relative border-l-2 border-border dark:border-slate-800 pl-7">
              {roadmap.phases.map((phase, idx) => (
                <PhaseCard
                  key={phase.phase_number}
                  phase={phase}
                  index={idx}
                  isLast={idx === roadmap.phases.length - 1}
                />
              ))}
            </ol>
          </section>

          {/* Regenerate */}
          <div className="flex justify-end">
            <Button
              variant="outline"
              onClick={() => setRoadmap(null)}
              disabled={regenerating}
            >
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
              Generate new roadmap
            </Button>
          </div>
        </>
      )}

      {/* Show generate form when clearing roadmap */}
      {!roadmap && !fetchError && regenerating && (
        <GenerateForm onGenerated={(r) => { setRoadmap(r); setRegenerating(false); }} />
      )}
    </div>
  );
}

export default RoadmapPage;
