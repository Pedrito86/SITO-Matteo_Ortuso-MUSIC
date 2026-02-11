import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matteo Ortuso | Musician & Artist",
  description: "Official Website of Matteo Ortuso. Discover the new project BLU, latest music, videos, and tour dates.",
  keywords: ["Matteo Ortuso", "Musician", "Artist", "BLU", "Jazz", "Acoustic", "Live Music", "Marco Indino"],
  openGraph: {
    title: "Matteo Ortuso | Musician & Artist",
    description: "Official Website of Matteo Ortuso. Discover the new project BLU, latest music, videos, and tour dates.",
    url: "https://matteoortuso.com",
    siteName: "Matteo Ortuso",
    images: [
      {
        url: "/images/hero-right.jpg",
        width: 1200,
        height: 630,
        alt: "Matteo Ortuso",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matteo Ortuso | Musician & Artist",
    description: "Official Website of Matteo Ortuso. Discover the new project BLU, latest music, videos, and tour dates.",
    images: ["/images/hero-right.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              "name": "Matteo Ortuso",
              "url": "https://matteoortuso.com",
              "image": "https://matteoortuso.com/images/hero-right.jpg",
              "sameAs": [
                "https://www.instagram.com/ortusangolo_music",
                "https://open.spotify.com/album/7zp7RmWsEiGTznxxK7ayxd"
              ],
              "description": "Official Website of Matteo Ortuso, Musician & Artist."
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
