import { useState } from 'react';
import { Save } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Input, Label } from '../components/ui';

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

function ProfilePage() {
  const [form, setForm] = useState({
    name: 'Navneet Singh',
    email: 'navneet@example.com',
    careerInterest: 'Software Engineering',
    currentLevel: 'Beginner',
    bio: '',
  });
  const [saving, setSaving] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    // TODO: call profile update service when backend is ready
    setTimeout(() => setSaving(false), 1200);
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div>
        <h1 className="text-display text-slate-900 dark:text-white">Profile</h1>
        <p className="mt-1 text-body text-slate-500 dark:text-slate-400">
          Keep your information up to date for accurate career guidance.
        </p>
      </div>

      {/* Avatar & name card */}
      <Card className="flex items-center gap-5 p-6">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-light dark:bg-primary-950 text-2xl text-primary dark:text-primary-300">
          N
        </div>
        <div>
          <p className="text-heading text-slate-900 dark:text-slate-100">{form.name}</p>
          <p className="text-caption text-slate-500 dark:text-slate-400">{form.email}</p>
        </div>
      </Card>

      {/* Edit form */}
      <Card>
        <CardHeader>
          <CardTitle>Personal information</CardTitle>
          <CardDescription>Update your name, email, and career details.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="flex flex-col gap-5">
              {/* Name */}
              <div>
                <Label htmlFor="profile-name" required>
                  Full name
                </Label>
                <Input
                  id="profile-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="profile-email" required>
                  Email
                </Label>
                <Input
                  id="profile-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              {/* Career interest */}
              <div>
                <Label htmlFor="profile-career-interest">Career interest</Label>
                <select
                  id="profile-career-interest"
                  name="careerInterest"
                  value={form.careerInterest}
                  onChange={handleChange}
                  className="h-10 w-full rounded-input border border-border dark:border-slate-800 bg-surface dark:bg-slate-900 px-3 text-body text-slate-800 dark:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                >
                  {CAREER_INTERESTS.map((interest) => (
                    <option key={interest} value={interest}>
                      {interest}
                    </option>
                  ))}
                </select>
              </div>

              {/* Current level */}
              <div>
                <Label htmlFor="profile-level">Current level</Label>
                <select
                  id="profile-level"
                  name="currentLevel"
                  value={form.currentLevel}
                  onChange={handleChange}
                  className="h-10 w-full rounded-input border border-border dark:border-slate-800 bg-surface dark:bg-slate-900 px-3 text-body text-slate-800 dark:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              {/* Bio */}
              <div>
                <Label htmlFor="profile-bio">Short bio</Label>
                <textarea
                  id="profile-bio"
                  name="bio"
                  rows={3}
                  placeholder="Tell us a bit about yourself…"
                  value={form.bio}
                  onChange={handleChange}
                  className="w-full rounded-input border border-border dark:border-slate-800 bg-surface dark:bg-slate-900 px-3 py-2 text-body text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" loading={saving}>
              <Save className="h-4 w-4" aria-hidden="true" />
              Save changes
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default ProfilePage;
