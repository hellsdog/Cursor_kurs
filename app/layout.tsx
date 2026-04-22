import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing Project Starter",
  description: "Minimal technical iteration starter on Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
