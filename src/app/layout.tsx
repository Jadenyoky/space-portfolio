import type { Metadata } from "next";
import "./globals.css";
import "@/styles/animations.css";
import "@flaticon/flaticon-uicons/css/all/all.css";

export const metadata: Metadata = {
  title: "Space Portfolio",
  description:
    "A front-end developer who loves creating clean, modern, and interactive websites. Explore my projects from landing pages to full web apps with Firebase integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#16181D" />
        <meta name="background-color" content="#ffc461" />

        <title>Loading ...</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,100..900;1,100..900&family=Inconsolata:wght@200..900&family=Maven+Pro:wght@400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
