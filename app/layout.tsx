import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing Visual System",
  description: "Structured tech / AI workflow visual system on Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
