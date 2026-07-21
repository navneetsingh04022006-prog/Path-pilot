const API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:8000';

/**
 * Core fetch wrapper.
 * Attaches the Supabase session access_token as a Bearer token when present.
 * Throws an Error with a user-readable message on non-2xx responses.
 */
async function request(path, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers ?? {}),
  };

  // Lazily pull the token from sessionStorage to avoid a circular import
  // with AuthContext. The token is stored there by AuthContext.
  const token = sessionStorage.getItem('pathpilot-access-token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
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
};

export default api;
