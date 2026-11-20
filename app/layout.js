import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "./globals.css";

export const metadata = {
  title: "Stamfort Technical Solutions | Industrial machine repair and maintenance, Bengaluru",
  description:
    "Preventive and breakdown maintenance, repair, erection and commissioning, and fabrication for industrial machines of any make. Based in Bengaluru, working across India.",
  keywords: [
    "preventive maintenance",
    "breakdown maintenance",
    "industrial machine repair",
    "repair services for industrial equipment",
    "erection and commissioning",
    "Bengaluru",
  ],
};

export const viewport = {
  themeColor: "#2F5D50",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
