import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://tvgdispqrelpvxyjqnww.supabase.co';

// The anon key is public by design (it ships in the frontend).
// Paste it from the Supabase dashboard: Project Settings -> API -> anon public
const SUPABASE_ANON_KEY = 'PASTE_ANON_KEY_HERE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
export const FUNCTIONS_URL = `${SUPABASE_URL}/functions/v1`;
