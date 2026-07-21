import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft } from 'lucide-react';
import { Button, Input, Label, Card } from '../components/ui';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setEmail(e.target.value);
    if (error) setError('');
  }

  function validate() {
    if (!email.trim()) return 'Email is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Enter a valid email address.';
    return '';
  }

  function handleSubmit(e) {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setLoading(true);
    // TODO: call auth service when backend is ready
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-light/40 via-surface to-surface dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 px-4 py-12 transition-colors">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="mb-8 text-center">
          <Link to="/" className="text-2xl font-semibold text-slate-900 dark:text-white">
            Path <span className="text-primary dark:text-primary-400">Pilot</span>
          </Link>
          <p className="mt-2 text-body text-slate-500 dark:text-slate-400">We&apos;ll send a reset link to your inbox.</p>
        </div>

        {/* Card */}
        <Card className="p-8 shadow-card dark:shadow-[0_0_30px_rgba(79,70,229,0.1)]">
          {submitted ? (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-success-light dark:bg-emerald-950/60">
                <Mail className="h-6 w-6 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
              </div>
              <h1 className="text-heading text-slate-900 dark:text-slate-100">Check your email</h1>
              <p className="mt-3 text-body text-slate-500 dark:text-slate-400">
                If an account exists for <span className="text-slate-700 dark:text-slate-200">{email}</span>, you will
                receive a password reset link shortly.
              </p>
              <Link
                to="/login"
                className="mt-6 inline-flex items-center gap-1.5 text-caption text-primary dark:text-primary-400 transition-colors hover:text-primary-hover dark:hover:text-primary-300"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to sign in
              </Link>
            </div>
          ) : (
            <>
              <h1 className="mb-2 text-heading text-slate-900 dark:text-slate-100">Reset your password</h1>
              <p className="mb-6 text-caption text-slate-500 dark:text-slate-400">
                Enter the email you registered with and we&apos;ll send you a reset link.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col gap-5">
                  <div>
                    <Label htmlFor="forgot-email" required>
                      Email
                    </Label>
                    <Input
                      id="forgot-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={handleChange}
                      error={error}
                    />
                  </div>

                  <Button type="submit" size="lg" loading={loading} className="w-full">
                    Send reset link
                  </Button>
                </div>
              </form>

              <p className="mt-6 text-center text-caption text-slate-500 dark:text-slate-400">
                Remembered it?{' '}
                <Link
                  to="/login"
                  className="text-primary dark:text-primary-400 transition-colors hover:text-primary-hover dark:hover:text-primary-300"
                >
                  Sign in
                </Link>
              </p>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
