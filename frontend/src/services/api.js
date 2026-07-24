const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:8000';

import { supabase, supabaseConfigured } from './supabaseClient';

async function request(path, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    'apikey': import.meta.env.VITE_SUPABASE_ANON_KEY ?? '',
    ...(options.headers ?? {}),
  };

  let token = sessionStorage.getItem('pathpilot-access-token');

  // Try auto-refreshing session if supabase is configured
  if (supabaseConfigured && supabase) {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.access_token) {
        token = session.access_token;
        sessionStorage.setItem('pathpilot-access-token', token);
      }
    } catch (e) {
      console.error('[PathPilot] Failed to auto-refresh session:', e);
    }
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    if (response.status === 401) {
      sessionStorage.removeItem('pathpilot-access-token');
      // Gracefully redirect to login if we get a 401 Unauthorized
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    let message = `Request failed (${response.status})`;
    try {
      const body = await response.json();
      message = body.detail ?? body.message ?? message;
    } catch {
      // ignore parse errors
    }
    throw new Error(message);
  }

  // 204 No Content — return null
  if (response.status === 204) return null;

  return response.json();
}

const api = {
  get: (path, options) => request(path, { method: 'GET', ...options }),
  post: (path, body, options) =>
    request(path, { method: 'POST', body: JSON.stringify(body), ...options }),
  put: (path, body, options) =>
    request(path, { method: 'PUT', body: JSON.stringify(body), ...options }),
  patch: (path, body, options) =>
    request(path, { method: 'PATCH', body: JSON.stringify(body), ...options }),
  delete: (path, options) => request(path, { method: 'DELETE', ...options }),

  roadmap: {
    /** Generate a new AI roadmap for the current user. */
    generate: (careerGoal, weeklyHours = 10) =>
      request('/api/roadmap/generate', {
        method: 'POST',
        body: JSON.stringify({ career_goal: careerGoal, weekly_hours: weeklyHours }),
      }),

    /** Retrieve the user's currently active roadmap. */
    getCurrent: () => request('/api/roadmap/current', { method: 'GET' }),
  },
};

export default api;
