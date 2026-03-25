import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Rixos Lounge | Luxury Digital Menu",
    template: "%s | Rixos Lounge",
  },
  description: "Experience the ultimate luxury at Rixos Lounge & Restaurant. View our digital menu for premium drinks, gourmet food, and an exquisite atmosphere in Nigeria.",
  metadataBase: new URL("https://rixoslounge.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rixos Lounge",
    description: "Luxury Digital Menu for Rixos Lounge & Restaurant",
    url: "https://rixoslounge.com",
    siteName: "Rixos Lounge",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rixos Lounge",
    description: "Luxury Digital Menu for Rixos Lounge & Restaurant",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
