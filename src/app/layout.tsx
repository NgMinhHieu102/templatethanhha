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
  title: "Thanh Hà — Đồng hành cùng nông nghiệp",
  description: "Thấu hiểu đồng ruộng để cây trồng khỏe mạnh, tài nguyên được dùng hiệu quả và mùa vụ bội thu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
