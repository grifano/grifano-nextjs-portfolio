import type { Metadata } from "next";
import { Space_Grotesk as SpaceGrotesk } from "next/font/google";
import React from "react";

import "./globals.css";

const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  variable: "--space-grotesk",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title:
    'Serhii "Grifano" Orlenko - Frontend Developer',
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
