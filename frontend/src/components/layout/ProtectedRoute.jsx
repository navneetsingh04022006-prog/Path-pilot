import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

/**
 * Wraps dashboard routes.
 * - While the session is being restored, shows a full-screen loading indicator.
 * - Redirects to /login if there is no active session.
 * - Renders children (via <Outlet />) when authenticated.
 */
function ProtectedRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface dark:bg-slate-950">
        <div className="flex flex-col items-center gap-3">
          <span
            className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"
            aria-label="Loading"
          />
          <p className="text-caption text-slate-500 dark:text-slate-400">Loading…</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
