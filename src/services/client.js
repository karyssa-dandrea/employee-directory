import { createClient } from '@supabase/supabase-js';
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export function parseData({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}
