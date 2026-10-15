import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://tvgdispqrelpvxyjqnww.supabase.co';

// The publishable key is public by design (it ships in the frontend).
// Paste it from the Supabase dashboard: Project Settings -> API Keys -> Publishable key
// (starts with sb_publishable_...; the legacy anon key is being retired)
const SUPABASE_ANON_KEY = 'sb_publishable_a3nZ37wD7RuGUOTdRNtbBw_61PwyS-2';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
export const FUNCTIONS_URL = `${SUPABASE_URL}/functions/v1`;
