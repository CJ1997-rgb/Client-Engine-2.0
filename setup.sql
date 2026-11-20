-- Run this once in Supabase: SQL Editor -> New query -> paste -> Run.

-- 1. Create a simple table called "notes".
create table if not exists public.notes (
  id bigint generated always as identity primary key,
  text text not null,
  created_at timestamptz not null default now()
);

-- 2. Turn on Row Level Security (the "who can see which rows" rules).
alter table public.notes enable row level security;

-- 3. Rule: anyone visiting the website may READ notes (but not add, change or delete them).
drop policy if exists "Anyone can read notes" on public.notes;
create policy "Anyone can read notes"
  on public.notes for select
  using (true);

-- 4. Add two example notes so the page has something to show.
insert into public.notes (text) values
  ('Hello from Supabase!'),
  ('My first Next.js + Supabase + Vercel site is working.');
