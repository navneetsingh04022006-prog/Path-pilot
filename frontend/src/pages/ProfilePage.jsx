import { useEffect, useState } from 'react';
import { Save, AlertCircle } from 'lucide-react';
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
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

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

const EXPERIENCE_LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

const BUDGET_PREFS = ['Free only', 'Low budget (< $20/mo)', 'Moderate ($20–$100/mo)', 'No limit'];

const YEARS = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate', 'Working Professional'];

function ProfilePage() {
  const { user } = useAuth();

  const [form, setForm] = useState({
    education: '',
    college: '',
    branch: '',
    year: '',
    skillsInput: '',
    skills: [],
    career_interest: '',
    experience_level: '',
    weekly_hours: '',
    budget_pref: '',
    bio: '',
  });

  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState('');
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (!user) return;
    setFetchLoading(true);
    setFetchError('');
    api
      .get('/api/user/profile')
      .then((data) => {
        setForm((prev) => ({
          ...prev,
          education: data.education ?? '',
          college: data.college ?? '',
          branch: data.branch ?? '',
          year: data.year ?? '',
          skillsInput: (data.skills ?? []).join(', '),
          skills: data.skills ?? [],
          career_interest: data.career_interest ?? '',
          experience_level: data.experience_level ?? '',
          weekly_hours: data.weekly_hours ?? '',
          budget_pref: data.budget_pref ?? '',
          bio: data.bio ?? '',
        }));
      })
      .catch((err) => setFetchError(err.message ?? 'Failed to load profile.'))
      .finally(() => setFetchLoading(false));
  }, [user]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (saveSuccess) setSaveSuccess(false);
    if (saveError) setSaveError('');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setSaveError('');
    setSaveSuccess(false);

    // Parse skills from comma-separated input
    const skills = form.skillsInput
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    try {
      await api.put('/api/user/profile', {
        education: form.education || null,
        college: form.college || null,
        branch: form.branch || null,
        year: form.year || null,
        skills: skills.length ? skills : null,
        career_interest: form.career_interest || null,
        experience_level: form.experience_level || null,
        weekly_hours: form.weekly_hours ? Number(form.weekly_hours) : null,
        budget_pref: form.budget_pref || null,
        bio: form.bio || null,
      });
      setForm((prev) => ({ ...prev, skills }));
      setSaveSuccess(true);
    } catch (err) {
      setSaveError(err.message ?? 'Failed to save profile.');
    } finally {
      setSaving(false);
    }
  }

  const displayName = user?.user_metadata?.full_name ?? user?.email ?? 'User';
  const initials = displayName.charAt(0).toUpperCase();

  if (fetchLoading) {
    return (
      <div className="mx-auto max-w-2xl space-y-8">
        <div>
          <h1 className="text-display text-slate-900 dark:text-white">Profile</h1>
          <p className="mt-1 text-body text-slate-500 dark:text-slate-400">
            Keep your information up to date for accurate career guidance.
          </p>
        </div>
        <div className="flex items-center justify-center py-16">
          <span
            className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"
            aria-label="Loading profile"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <div>
        <h1 className="text-display text-slate-900 dark:text-white">Profile</h1>
        <p className="mt-1 text-body text-slate-500 dark:text-slate-400">
          Keep your information up to date for accurate career guidance.
        </p>
      </div>

      {/* Fetch error */}
      {fetchError && (
        <div
          role="alert"
          className="flex items-center gap-2 rounded-lg border border-error/30 bg-error/10 px-4 py-3 text-caption text-error"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          {fetchError}
        </div>
      )}

      {/* Avatar card */}
      <Card className="flex items-center gap-5 p-6">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-light dark:bg-primary-950 text-2xl text-primary dark:text-primary-300">
          {initials}
        </div>
        <div>
          <p className="text-heading text-slate-900 dark:text-slate-100">{displayName}</p>
          <p className="text-caption text-slate-500 dark:text-slate-400">{user?.email}</p>
        </div>
      </Card>

      {/* Edit form */}
      <Card>
        <CardHeader>
          <CardTitle>Career profile</CardTitle>
          <CardDescription>
            This information is used to personalise your roadmap and recommendations.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="flex flex-col gap-5">

              {/* Education */}
              <div>
                <Label htmlFor="profile-education">Education level</Label>
                <Input
                  id="profile-education"
                  name="education"
                  type="text"
                  placeholder="e.g. Bachelor of Technology"
                  value={form.education}
                  onChange={handleChange}
                />
              </div>

              {/* College */}
              <div>
                <Label htmlFor="profile-college">College / University</Label>
                <Input
                  id="profile-college"
                  name="college"
                  type="text"
                  placeholder="e.g. IIT Delhi"
                  value={form.college}
                  onChange={handleChange}
                />
              </div>

              {/* Branch + Year row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="profile-branch">Branch / Major</Label>
                  <Input
                    id="profile-branch"
                    name="branch"
                    type="text"
                    placeholder="e.g. Computer Science"
                    value={form.branch}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="profile-year">Year</Label>
                  <select
                    id="profile-year"
                    name="year"
                    value={form.year}
                    onChange={handleChange}
                    className="h-10 w-full rounded-input border border-border dark:border-slate-800 bg-surface dark:bg-slate-900 px-3 text-body text-slate-800 dark:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                  >
                    <option value="">Select…</option>
                    {YEARS.map((y) => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Skills */}
              <div>
                <Label htmlFor="profile-skills">
                  Current skills
                </Label>
                <Input
                  id="profile-skills"
                  name="skillsInput"
                  type="text"
                  placeholder="e.g. Python, React, SQL (comma-separated)"
                  value={form.skillsInput}
                  onChange={handleChange}
                />
                <p className="mt-1 text-caption text-slate-400 dark:text-slate-500">
                  Separate skills with commas.
                </p>
              </div>

              {/* Career interest */}
              <div>
                <Label htmlFor="profile-career-interest">Career interest</Label>
                <select
                  id="profile-career-interest"
                  name="career_interest"
                  value={form.career_interest}
                  onChange={handleChange}
                  className="h-10 w-full rounded-input border border-border dark:border-slate-800 bg-surface dark:bg-slate-900 px-3 text-body text-slate-800 dark:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                >
                  <option value="">Select…</option>
                  {CAREER_INTERESTS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Experience level + weekly hours row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="profile-level">Experience level</Label>
                  <select
                    id="profile-level"
                    name="experience_level"
                    value={form.experience_level}
                    onChange={handleChange}
                    className="h-10 w-full rounded-input border border-border dark:border-slate-800 bg-surface dark:bg-slate-900 px-3 text-body text-slate-800 dark:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                  >
                    <option value="">Select…</option>
                    {EXPERIENCE_LEVELS.map((l) => (
                      <option key={l} value={l}>{l}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="profile-hours">Weekly hours available</Label>
                  <Input
                    id="profile-hours"
                    name="weekly_hours"
                    type="number"
                    min="1"
                    max="168"
                    placeholder="e.g. 10"
                    value={form.weekly_hours}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Budget preference */}
              <div>
                <Label htmlFor="profile-budget">Budget preference</Label>
                <select
                  id="profile-budget"
                  name="budget_pref"
                  value={form.budget_pref}
                  onChange={handleChange}
                  className="h-10 w-full rounded-input border border-border dark:border-slate-800 bg-surface dark:bg-slate-900 px-3 text-body text-slate-800 dark:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1"
                >
                  <option value="">Select…</option>
                  {BUDGET_PREFS.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
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

          <CardFooter className="flex flex-col items-start gap-3">
            {saveError && (
              <p role="alert" className="text-caption text-error">
                {saveError}
              </p>
            )}
            {saveSuccess && (
              <p role="status" className="text-caption text-emerald-600 dark:text-emerald-400">
                Profile saved successfully.
              </p>
            )}
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
