import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { Button, Input, Label, Card } from '../components/ui';
import { useAuth } from '../context/AuthContext';

function LoginPage() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    if (authError) setAuthError('');
  }

  function validate() {
    const next = {};
    if (!form.email.trim()) next.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Enter a valid email address.';
    if (!form.password) next.password = 'Password is required.';
    return next;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setAuthError('');
    try {
      await signIn({ email: form.email, password: form.password });
      navigate('/dashboard', { replace: true });
    } catch (err) {
      setAuthError(err.message ?? 'Sign in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-light/40 via-surface to-surface dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 px-4 py-12 transition-colors">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="mb-8 text-center">
          <Link to="/" className="text-2xl font-semibold text-slate-900 dark:text-white">
            Path <span className="text-primary dark:text-primary-400">Pilot</span>
          </Link>
          <p className="mt-2 text-body text-slate-500 dark:text-slate-400">Sign in to continue your career journey.</p>
        </div>

        {/* Card */}
        <Card className="p-8 shadow-card dark:shadow-[0_0_30px_rgba(79,70,229,0.1)]">
          <h1 className="mb-6 text-heading text-slate-900 dark:text-slate-100">Sign in</h1>

          {/* Auth-level error */}
          {authError && (
            <div
              role="alert"
              className="mb-4 rounded-lg border border-error/30 bg-error/10 px-4 py-3 text-caption text-error"
            >
              {authError}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-5">
              {/* Email */}
              <div>
                <Label htmlFor="login-email" required>
                  Email
                </Label>
                <Input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="login-password" required>
                    Password
                  </Label>
                  <Link
                    to="/forgot-password"
                    className="text-caption text-primary dark:text-primary-400 transition-colors hover:text-primary-hover dark:hover:text-primary-300"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="login-password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  value={form.password}
                  onChange={handleChange}
                  error={errors.password}
                />
              </div>

              <Button type="submit" size="lg" loading={loading} className="mt-1 w-full">
                <LogIn className="h-4 w-4" aria-hidden="true" />
                Sign in
              </Button>
            </div>
          </form>

          <p className="mt-6 text-center text-caption text-slate-500 dark:text-slate-400">
            Don&apos;t have an account?{' '}
            <Link
              to="/register"
              className="text-primary dark:text-primary-400 transition-colors hover:text-primary-hover dark:hover:text-primary-300"
            >
              Create one
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}

export default LoginPage;
