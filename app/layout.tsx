import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isabella Alemán — Communications Portfolio",
  description: "Professional communications portfolio — press releases, media relations, research & more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
