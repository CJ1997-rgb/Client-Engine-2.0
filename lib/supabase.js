// This file connects the website to your Supabase project.
// It reads two settings (environment variables) that you add in Vercel:
//   NEXT_PUBLIC_SUPABASE_URL      -> your Supabase Project URL
//   NEXT_PUBLIC_SUPABASE_ANON_KEY -> your Supabase anon / publishable key
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// If the settings are missing, we return null instead of crashing,
// so the page can show a friendly message.
export const supabase = url && key ? createClient(url, key) : null;
