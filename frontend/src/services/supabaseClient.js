import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

if (!supabaseUrl || !supabaseAnonKey) {
  // Warn once in dev; the app still loads — only auth calls will fail.
  if (import.meta.env.DEV) {
    console.warn(
      '[PathPilot] VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is not set. ' +
        'Auth features will not work until these are added to frontend/.env',
    );
  }
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
