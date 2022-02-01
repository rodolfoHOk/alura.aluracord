import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_ANOM_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANOM_KEY;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

export const supabaseClient: SupabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_ANOM_KEY
);
