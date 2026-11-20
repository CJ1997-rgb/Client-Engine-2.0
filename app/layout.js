export const metadata = {
  title: "Client Engine 2.0",
  description: "Practice site: Next.js + Supabase on Vercel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily: "system-ui, sans-serif",
          maxWidth: 640,
          margin: "48px auto",
          padding: "0 20px",
          lineHeight: 1.5,
        }}
      >
        {children}
      </body>
    </html>
  );
}
