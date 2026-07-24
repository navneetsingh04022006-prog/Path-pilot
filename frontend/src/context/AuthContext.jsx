import { createContext, useContext, useEffect, useState } from 'react';
import { supabase, supabaseConfigured } from '../services/supabaseClient';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  // Persist token so api.js can pick it up without a circular import
  function syncToken(sess) {
    if (sess?.access_token) {
      sessionStorage.setItem('pathpilot-access-token', sess.access_token);
    } else {
      sessionStorage.removeItem('pathpilot-access-token');
    }
  }

  useEffect(() => {
    // If Supabase is not configured (missing env vars), skip auth setup entirely.
    // This prevents a crash and lets the app render for local development.
    if (!supabaseConfigured || !supabase) {
      setLoading(false);
      return;
    }

    // Restore session from Supabase on initial load
    supabase.auth.getSession().then(({ data: { session: sess } }) => {
      setSession(sess);
      setUser(sess?.user ?? null);
      syncToken(sess);
      setLoading(false);
    });

    // Listen for auth state changes (login, logout, token refresh)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess);
      setUser(sess?.user ?? null);
      syncToken(sess);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function signUp({ email, password, fullName, careerInterest }) {
    if (!supabase) throw new Error('Auth is not configured. Add Supabase credentials to frontend/.env');
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName, career_interest: careerInterest },
      },
    });
    if (error) throw error;
    return data;
  }

  async function signIn({ email, password }) {
    if (!supabase) throw new Error('Auth is not configured. Add Supabase credentials to frontend/.env');
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  }

  async function signOut() {
    if (!supabase) return;
    await supabase.auth.signOut();
  }

  return (
    <AuthContext.Provider value={{ user, session, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider');
  return ctx;
}
