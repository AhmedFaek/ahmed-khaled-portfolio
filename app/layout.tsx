import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Ahmed Khaled | Backend Engineer",
    template: "%s | Ahmed Khaled"
  },
  description:
    "Backend Engineer specializing in scalable APIs, secure authentication systems, and AI-powered backend workflows.",
  applicationName: "Ahmed Khaled Portfolio",
  keywords: [
    "Backend Engineer",
    "AI backend",
    "FastAPI",
    "Node.js",
    "PostgreSQL",
    "Python",
    "Ahmed Khaled"
  ],
  openGraph: {
    title: "Ahmed Khaled | Backend Engineer",
    description:
      "Backend Engineer specializing in scalable APIs, secure authentication systems, and AI-powered backend workflows.",
    url: "https://example.com",
    siteName: "Ahmed Khaled Portfolio",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Khaled portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Khaled | Backend Engineer",
    description:
      "Backend Engineer specializing in scalable APIs, secure authentication systems, and AI-powered backend workflows.",
    images: ["/og.png"]
  },
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#101113] text-[#E8E9EB]">{children}</body>
    </html>
  );
}
