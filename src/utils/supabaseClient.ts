import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_ANOM_KEY = process.env.SUPABASE_ANOM_KEY;
const SUPABASE_URL = process.env.SUPABASE_URL;

export const supabaseClient: SupabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_ANOM_KEY
);
