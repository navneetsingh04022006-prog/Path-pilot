import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import { Button, Input, Label } from '../components/ui';

const CAREER_INTERESTS = [
  'Software Engineering',
  'Data Science & ML',
  'Cybersecurity',
  'Cloud & DevOps',
  'UI/UX Design',
  'Product Management',
  'Embedded Systems',
  'Game Development',
  'Other',
];

function RegisterPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    careerInterest: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = 'Full name is required.';
    if (!form.email.trim()) next.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = 'Enter a valid email address.';
    if (!form.password) next.password = 'Password is required.';
    else if (form.password.length < 8) next.password = 'Password must be at least 8 characters.';
    if (!form.careerInterest) next.careerInterest = 'Please select a career interest.';
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
          <p className="mt-2 text-body text-slate-500">
            Create your account and start your journey.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-card border border-border bg-surface p-8 shadow-card">
          <h1 className="mb-6 text-heading text-slate-900">Create account</h1>

          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col gap-5">
              {/* Full Name */}
              <div>
                <Label htmlFor="register-name" required>
                  Full name
                </Label>
                <Input
                  id="register-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Navneet Singh"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="register-email" required>
                  Email
                </Label>
                <Input
                  id="register-email"
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
                <Label htmlFor="register-password" required>
                  Password
                </Label>
                <Input
                  id="register-password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
                  value={form.password}
                  onChange={handleChange}
                  error={errors.password}
                  hint="Use a mix of letters, numbers, and symbols."
                />
              </div>

              {/* Career Interest */}
              <div>
                <Label htmlFor="register-career-interest" required>
                  Career interest
                </Label>
                <select
                  id="register-career-interest"
                  name="careerInterest"
                  value={form.careerInterest}
                  onChange={handleChange}
                  aria-invalid={errors.careerInterest ? 'true' : undefined}
                  aria-describedby={errors.careerInterest ? 'register-career-interest-error' : undefined}
                  className={[
                    'h-10 w-full rounded-input border bg-surface px-3 text-body text-slate-800',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
                    'disabled:cursor-not-allowed disabled:opacity-50',
                    errors.careerInterest ? 'border-error' : 'border-border',
                  ].join(' ')}
                >
                  <option value="" disabled>
                    Select your primary interest…
                  </option>
                  {CAREER_INTERESTS.map((interest) => (
                    <option key={interest} value={interest}>
                      {interest}
                    </option>
                  ))}
                </select>
                {errors.careerInterest && (
                  <p
                    id="register-career-interest-error"
                    className="mt-1.5 text-caption text-error"
                    role="alert"
                  >
                    {errors.careerInterest}
                  </p>
                )}
              </div>

              <Button type="submit" size="lg" loading={loading} className="mt-1 w-full">
                <UserPlus className="h-4 w-4" aria-hidden="true" />
                Create account
              </Button>
            </div>
          </form>

          <p className="mt-6 text-center text-caption text-slate-500">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-primary transition-colors hover:text-primary-hover"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
