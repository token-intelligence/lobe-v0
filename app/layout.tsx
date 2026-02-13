import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Lobe - Your Dreams, Completed",
  description:
    "An AI-powered screenless device that captures, completes, and interprets your dreams. Integrates with Oura Ring, Apple Watch, and more.",
  openGraph: {
    title: "Lobe - Your Dreams, Completed",
    description:
      "An AI-powered screenless device that captures, completes, and interprets your dreams.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
