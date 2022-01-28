import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_ANOM_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMyNDk4OCwiZXhwIjoxOTU4OTAwOTg4fQ.fRCmDc4cpEExCznxwfW2d_YlozmjC8zG_pE2vlPGPng';
const SUPABASE_URL = 'https://qclgdjtybrgqbwyomgyr.supabase.co';

export const supabaseClient: SupabaseClient = createClient(
  SUPABASE_URL,
  SUPABASE_ANOM_KEY
);
