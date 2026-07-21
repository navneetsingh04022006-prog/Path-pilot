import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { Button, Input, Label } from '../components/ui';

function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  }

  function validate() {
    const next = {};
    if (!form.email.trim()) next.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Enter a valid email address.';
    if (!form.password) next.password = 'Password is required.';
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // TODO: call auth service when backend is ready
    setTimeout(() => setLoading(false), 1200);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary-light via-surface to-surface px-4 py-12">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="mb-8 text-center">
          <Link to="/" className="text-2xl font-semibold text-slate-900">
            Path <span className="text-primary">Pilot</span>
          </Link>
          <p className="mt-2 text-body text-slate-500">Sign in to continue your career journey.</p>
        </div>

        {/* Card */}
        <div className="rounded-card border border-border bg-surface p-8 shadow-card">
          <h1 className="mb-6 text-heading text-slate-900">Sign in</h1>

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
                    className="text-caption text-primary transition-colors hover:text-primary-hover"
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

          <p className="mt-6 text-center text-caption text-slate-500">
            Don&apos;t have an account?{' '}
            <Link
              to="/register"
              className="text-primary transition-colors hover:text-primary-hover"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
