import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = "https://ictrwhqiklevdnmxwtab.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_sJaE9iXGGgqOCV8r06d3kA_JiwhaK_P";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);