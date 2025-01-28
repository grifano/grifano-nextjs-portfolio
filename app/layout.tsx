import type { Metadata } from "next";
import { Space_Grotesk as SpaceGrotesk } from "next/font/google";
import React from "react";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = SpaceGrotesk({
  subsets: ["latin"],
  variable: "--space-grotesk",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title:
    "Serhii Orlenko - Frontend Developer | React, JavaScript, UI/UX",
  description:
    "Frontend Developer skilled in JavaScript, React, and UI/UX. Passionate about building dynamic and accessible web applications. View my projects and contact me today!",
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
        className={`${spaceGrotesk.variable} text-primary-grey bg-primary-black antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
