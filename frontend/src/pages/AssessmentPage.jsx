import { useEffect, useState } from 'react';
import { Award, Brain, Code, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Input,
  Label,
} from '../components/ui';
import api from '../services/api';

const PROGRAMMING_LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

const FUNDAMENTALS_QUESTIONS = [
  {
    id: 1,
    question: 'Which of the following is used to define a block of code in Python?',
    options: ['Parentheses', 'Indentation', 'Brackets', 'Curly braces'],
    correctIndex: 1,
  },
  {
    id: 2,
    question: 'What is the time complexity of searching an element in a balanced binary search tree (BST)?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'],
    correctIndex: 2,
  },
  {
    id: 3,
    question: 'Which HTTP method is typically used to update an existing resource?',
    options: ['GET', 'POST', 'PUT', 'DELETE'],
    correctIndex: 2,
  },
  {
    id: 4,
    question: 'What does SQL stand for?',
    options: [
      'Structured Query Language',
      'Simple Query Line',
      'System Query Language',
      'Sequential Query Link',
    ],
    correctIndex: 0,
  },
  {
    id: 5,
    question: 'Which of the following is NOT a fundamental principle of Object-Oriented Programming?',
    options: ['Inheritance', 'Polymorphism', 'Encapsulation', 'Compilation'],
    correctIndex: 3,
  },
];

function AssessmentPage() {
  const [assessmentResult, setAssessmentResult] = useState(null);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Form states
  const [step, setStep] = useState(1); // Step 1: Self assessment, Step 2: Quiz, Step 3: Result
  const [programmingLevel, setProgrammingLevel] = useState('Beginner');
  const [toolsInput, setToolsInput] = useState('');
  const [projectsInput, setProjectsInput] = useState('');
  
  // Quiz answers
  const [quizAnswers, setQuizAnswers] = useState({});

  useEffect(() => {
    fetchLatestResult();
  }, []);

  function fetchLatestResult() {
    setFetchLoading(true);
    setFetchError('');
    api
      .get('/api/assessment/result')
      .then((data) => {
        setAssessmentResult(data);
        setStep(3); // Go to results if they already have one
      })
      .catch((err) => {
        // 404 is expected if they haven't taken an assessment yet
        if (err.message && err.message.includes('404')) {
          setAssessmentResult(null);
          setStep(1);
        } else {
          setFetchError(err.message ?? 'Failed to load assessment status.');
        }
      })
      .finally(() => setFetchLoading(false));
  }

  function handleAnswerSelect(questionId, optionIndex) {
    setQuizAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  }

  async function handleQuizSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');

    // Calculate score
    let correctCount = 0;
    FUNDAMENTALS_QUESTIONS.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        correctCount += 1;
      }
    });
    const score = Math.round((correctCount / FUNDAMENTALS_QUESTIONS.length) * 100);

    const tools = toolsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);
    const projects = projectsInput
      .split(',')
      .map((p) => p.trim())
      .filter(Boolean);

    try {
      const data = await api.post('/api/assessment', {
        programming_level: programmingLevel,
        tools_known: tools,
        projects_done: projects,
        fundamentals_score: score,
      });
      setAssessmentResult(data);
      setStep(3);
    } catch (err) {
      setSubmitError(err.message ?? 'Failed to submit assessment.');
    } finally {
      setSubmitting(false);
    }
  }

  if (fetchLoading) {
    return (
      <div className="mx-auto max-w-2xl space-y-8">
        <div>
          <h1 className="text-display text-slate-900 dark:text-white">Skill Assessment</h1>
          <p className="mt-1 text-body text-slate-500 dark:text-slate-400">
            Evaluate your technical proficiency.
          </p>
        </div>
        <div className="flex items-center justify-center py-16">
          <span
            className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"
            aria-label="Loading assessment data"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div>
        <h1 className="text-display text-slate-900 dark:text-white">Skill Assessment</h1>
        <p className="mt-1 text-body text-slate-500 dark:text-slate-400">
          Determine your skill level to generate customized roadmap recommendations.
        </p>
      </div>

      {fetchError && (
        <div className="flex items-center gap-2 rounded-lg border border-error/30 bg-error/10 px-4 py-3 text-caption text-error">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {fetchError}
        </div>
      )}

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Step 1: Background & Tools</CardTitle>
            <CardDescription> Tell us about your background and primary tech stack experience.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div>
              <Label htmlFor="programming-level">Self-rated programming proficiency</Label>
              <select
                id="programming-level"
                value={programmingLevel}
                onChange={(e) => setProgrammingLevel(e.target.value)}
                className="h-10 w-full rounded-input border border-border dark:border-slate-800 bg-surface dark:bg-slate-900 px-3 text-body text-slate-800 dark:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
              >
                {PROGRAMMING_LEVELS.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label htmlFor="tools">Tools and technologies you know</Label>
              <Input
                id="tools"
                type="text"
                placeholder="e.g. React, Git, Node.js, Docker (comma-separated)"
                value={toolsInput}
                onChange={(e) => setToolsInput(e.target.value)}
              />
              <p className="mt-1 text-caption text-slate-400 dark:text-slate-500">
                List the frameworks, databases, or developer tools you have used.
              </p>
            </div>

            <div>
              <Label htmlFor="projects">Projects you have built</Label>
              <Input
                id="projects"
                type="text"
                placeholder="e.g. Portfolio Website, E-commerce App (comma-separated)"
                value={projectsInput}
                onChange={(e) => setProjectsInput(e.target.value)}
              />
              <p className="mt-1 text-caption text-slate-400 dark:text-slate-500">
                Mention any major personal, college, or production projects you completed.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={() => setStep(2)}>
              Next: Fundamentals Quiz
            </Button>
          </CardFooter>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle>Step 2: CS & Programming Fundamentals Quiz</CardTitle>
            <CardDescription>Answer these basic questions to measure core conceptual understanding.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            {FUNDAMENTALS_QUESTIONS.map((q, idx) => (
              <div key={q.id} className="space-y-3">
                <p className="text-body font-medium text-slate-900 dark:text-slate-100">
                  {idx + 1}. {q.question}
                </p>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = quizAnswers[q.id] === optIdx;
                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => handleAnswerSelect(q.id, optIdx)}
                        className={`flex items-center justify-between rounded-input border p-3 text-left text-body transition-colors ${
                          isSelected
                            ? 'border-primary bg-primary/5 text-primary dark:border-primary-400 dark:text-primary-300'
                            : 'border-border bg-surface dark:border-slate-800 dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-650'
                        }`}
                      >
                        <span>{opt}</span>
                        {isSelected && <CheckCircle className="h-4 w-4 shrink-0 text-primary dark:text-primary-400" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            {submitError && (
              <p role="alert" className="text-caption text-error self-start">
                {submitError}
              </p>
            )}
            <div className="flex w-full justify-between">
              <Button variant="outline" onClick={() => setStep(1)} disabled={submitting}>
                Back
              </Button>
              <Button
                onClick={handleQuizSubmit}
                loading={submitting}
                disabled={Object.keys(quizAnswers).length < FUNDAMENTALS_QUESTIONS.length}
              >
                Submit Assessment
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}

      {step === 3 && assessmentResult && (
        <div className="space-y-8">
          <Card className="border-t-4 border-t-primary dark:border-t-primary-500">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-display">Assessment Results</CardTitle>
                  <CardDescription>Here is your calculated skill level assessment.</CardDescription>
                </div>
                <Brain className="h-10 w-10 text-primary dark:text-primary-400" />
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg bg-slate-50 p-6 dark:bg-slate-900/50">
                <div className="text-caption uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Calculated Target Level
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-display font-bold text-primary dark:text-primary-400">
                    {assessmentResult.generated_level}
                  </span>
                  <span className="text-body text-slate-500 dark:text-slate-400">
                    level
                  </span>
                </div>
                <p className="mt-2 text-body text-slate-600 dark:text-slate-350">
                  Based on your self-reported proficiency, stack depth, project experience, and quiz accuracy.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-border p-4 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                    <Award className="h-5 w-5 text-primary dark:text-primary-400" />
                    <span className="text-body font-semibold">Fundamentals Score</span>
                  </div>
                  <p className="mt-1 text-display font-bold text-slate-850 dark:text-slate-150">
                    {assessmentResult.fundamentals_score}%
                  </p>
                </div>

                <div className="rounded-lg border border-border p-4 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
                    <Code className="h-5 w-5 text-primary dark:text-primary-400" />
                    <span className="text-body font-semibold">Tools & Projects</span>
                  </div>
                  <p className="mt-1 text-body text-slate-600 dark:text-slate-300">
                    {assessmentResult.tools_known.length} tools, {assessmentResult.projects_done.length} projects recorded.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="text-caption text-slate-455 dark:text-slate-500">
                Completed on {new Date(assessmentResult.created_at).toLocaleDateString()}
              </span>
              <Button
                variant="outline"
                onClick={() => {
                  setStep(1);
                  setQuizAnswers({});
                }}
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Retake Assessment
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}

export default AssessmentPage;
