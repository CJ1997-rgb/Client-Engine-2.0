# Client-Engine-2.0

A small practice site to learn how the pieces fit together:

- **GitHub** stores the code.
- **Vercel** builds the code and puts the website online (every push to `main` redeploys).
- **Supabase** holds the data. The home page reads the `notes` table.

## Setup

1. **Supabase:** open SQL Editor → New query, paste `supabase/setup.sql`, click Run.
2. **Vercel:** Project → Settings → Environment Variables, add:
   - `NEXT_PUBLIC_SUPABASE_URL`: Supabase → Project Settings → API → Project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: the anon / publishable key (never the secret key)
3. **Redeploy** in Vercel. The home page should list your notes.

## Files

- `app/page.js`: the home page
- `app/layout.js`: the frame around every page
- `lib/supabase.js`: the connection to Supabase
- `supabase/setup.sql`: creates the `notes` table and its security rule
