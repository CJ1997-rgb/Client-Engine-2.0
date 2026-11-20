import { supabase } from "../lib/supabase";

// Build the page fresh on every visit, so new rows in Supabase show up straight away.
export const dynamic = "force-dynamic";

export default async function Home() {
  // Step 1: are the Supabase settings filled in on Vercel?
  if (!supabase) {
    return (
      <main>
        <h1>Client Engine 2.0</h1>
        <p>✅ The website is live on Vercel.</p>
        <p>
          ⚠️ Not connected to Supabase yet. Add <code>NEXT_PUBLIC_SUPABASE_URL</code> and{" "}
          <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> in Vercel → Settings → Environment
          Variables, then redeploy.
        </p>
      </main>
    );
  }

  // Step 2: read the "notes" table from Supabase.
  const { data: notes, error } = await supabase
    .from("notes")
    .select("id, text, created_at")
    .order("created_at", { ascending: false });

  return (
    <main>
      <h1>Client Engine 2.0</h1>
      <p>✅ The website is live on Vercel.</p>
      {error ? (
        <p>
          ⚠️ Connected to Supabase, but couldn&apos;t read the <code>notes</code> table:{" "}
          {error.message}. Run <code>supabase/setup.sql</code> in the Supabase SQL Editor.
        </p>
      ) : (
        <>
          <p>✅ Connected to Supabase. Notes from your database:</p>
          {notes.length === 0 ? (
            <p>(No notes yet. Add a row in Supabase → Table Editor → notes.)</p>
          ) : (
            <ul>
              {notes.map((n) => (
                <li key={n.id}>{n.text}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </main>
  );
}
