import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matteo Ortuso",
  description: "Official Website of Matteo Ortuso",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased">{children}</body>
    </html>
  );
}
