import { useState } from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Map,
  User,
  Brain,
  Menu,
  X,
  LogOut,
  Bell,
  ChevronDown,
  Sun,
  Moon,
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { useTheme } from '../../context/ThemeContext';

const NAV_ITEMS = [
  { label: 'Dashboard', to: '/dashboard', icon: LayoutDashboard, end: true },
  { label: 'Assessment', to: '/dashboard/assessment', icon: Brain, end: false },
  { label: 'Roadmap', to: '/dashboard/roadmap', icon: Map, end: false },
  { label: 'Profile', to: '/dashboard/profile', icon: User, end: false },
];

function SidebarNav({ onNavClick }) {
  return (
    <nav aria-label="Dashboard navigation" className="flex flex-col gap-1 px-3 py-4">
      {NAV_ITEMS.map(({ label, to, icon: Icon, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          onClick={onNavClick}
          className={({ isActive }) =>
            cn(
              'flex items-center gap-3 rounded-button px-3 py-2.5 text-body transition-colors',
              isActive
                ? 'bg-primary-light dark:bg-primary-950/60 text-primary dark:text-primary-300 font-medium'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'
            )
          }
        >
          <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

function Sidebar({ onNavClick }) {
  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-16 shrink-0 items-center border-b border-border dark:border-slate-800 px-6">
        <Link to="/" className="text-lg font-semibold text-slate-900 dark:text-white">
          Path <span className="text-primary dark:text-primary-400">Pilot</span>
        </Link>
      </div>

      {/* Nav */}
      <div className="flex-1 overflow-y-auto">
        <SidebarNav onNavClick={onNavClick} />
      </div>

      {/* Sign out */}
      <div className="border-t border-border dark:border-slate-800 p-4">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-button px-3 py-2 text-body text-slate-500 dark:text-slate-400 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200"
          onClick={() => {
            // TODO: call sign-out service when backend is ready
          }}
        >
          <LogOut className="h-5 w-5 shrink-0" aria-hidden="true" />
          Sign out
        </button>
      </div>
    </div>
  );
}

function DashboardLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  function closeDrawer() {
    setDrawerOpen(false);
  }

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* ── Desktop sidebar ─────────────────────────────────── */}
      <aside className="hidden w-60 shrink-0 border-r border-border dark:border-slate-800 bg-surface dark:bg-slate-900 md:block">
        <Sidebar />
      </aside>

      {/* ── Mobile drawer overlay ────────────────────────────── */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs md:hidden"
          aria-hidden="true"
          onClick={closeDrawer}
        />
      )}

      {/* ── Mobile drawer panel ──────────────────────────────── */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 bg-surface dark:bg-slate-900 shadow-xl transition-transform duration-200 ease-in-out md:hidden',
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        aria-label="Mobile navigation"
      >
        <div className="flex h-16 items-center justify-between border-b border-border dark:border-slate-800 px-5">
          <Link to="/" className="text-lg font-semibold text-slate-900 dark:text-white" onClick={closeDrawer}>
            Path <span className="text-primary dark:text-primary-400">Pilot</span>
          </Link>
          <button
            type="button"
            className="rounded-button p-1.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={closeDrawer}
            aria-label="Close navigation"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <Sidebar onNavClick={closeDrawer} />
      </aside>

      {/* ── Main column ─────────────────────────────────────── */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top header */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-border dark:border-slate-800 bg-surface dark:bg-slate-900 px-4 sm:px-6">
          {/* Hamburger (mobile only) */}
          <button
            type="button"
            className="rounded-button p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 md:hidden"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Page title placeholder */}
          <div className="hidden md:block" />

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle button */}
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-9 w-9 items-center justify-center rounded-button text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* Notification bell */}
            <button
              type="button"
              className="relative rounded-button p-2 text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" aria-hidden="true" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary dark:bg-primary-400" />
            </button>

            {/* Profile button */}
            <div className="relative">
              <button
                type="button"
                id="dashboard-profile-btn"
                className="flex items-center gap-2 rounded-button px-2 py-1.5 text-slate-700 dark:text-slate-200 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
                onClick={() => setProfileOpen((o) => !o)}
                aria-expanded={profileOpen}
                aria-haspopup="true"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-light dark:bg-primary-950 text-caption text-primary dark:text-primary-300">
                  N
                </span>
                <span className="hidden text-caption text-slate-700 dark:text-slate-200 sm:block">Navneet</span>
                <ChevronDown className="h-4 w-4 text-slate-400" aria-hidden="true" />
              </button>

              {profileOpen && (
                <div
                  className="absolute right-0 z-50 mt-1 w-44 rounded-card border border-border dark:border-slate-800 bg-surface dark:bg-slate-900 py-1 shadow-card dark:shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                  role="menu"
                >
                  <Link
                    to="/dashboard/profile"
                    role="menuitem"
                    className="flex items-center gap-2 px-4 py-2 text-caption text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                    onClick={() => setProfileOpen(false)}
                  >
                    <User className="h-4 w-4" aria-hidden="true" />
                    My profile
                  </Link>
                  <button
                    type="button"
                    role="menuitem"
                    className="flex w-full items-center gap-2 px-4 py-2 text-caption text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                    onClick={() => {
                      setProfileOpen(false);
                      // TODO: call sign-out service when backend is ready
                    }}
                  >
                    <LogOut className="h-4 w-4" aria-hidden="true" />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
