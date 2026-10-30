import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: [
    { path: "./fonts/inter-regular.woff2", weight: "400" },
    { path: "./fonts/inter-medium.woff2", weight: "500" },
    { path: "./fonts/inter-semibold.woff2", weight: "600" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Acre — Grow with intelligence",
  description: "Better insights for healthier fields, smarter resources, and stronger harvests.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
