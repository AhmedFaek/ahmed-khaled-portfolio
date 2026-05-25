import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed Khaled | Backend Engineer",
  description: "Backend Engineer specializing in scalable APIs, authentication systems, real-time communication, and AI-powered backend architectures."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
