import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

const isConfigured = Boolean(supabaseUrl && supabaseAnonKey);

if (!isConfigured && import.meta.env.DEV) {
  console.warn(
    '[PathPilot] VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is not set. ' +
      'Auth features will not work until these are added to frontend/.env',
  );
}

// Only create the client when credentials are present.
// Calling createClient('', '') throws synchronously in @supabase/supabase-js v2
// and would crash the entire React tree, producing a blank white screen.
export const supabase = isConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export { isConfigured as supabaseConfigured };
