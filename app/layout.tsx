import type React from "react";
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "EduTech Academy - Unlock Your Potential",
  description:
    "Professional coaching center with expert tutors and flexible learning",
  icons: {
    icon: "/edutech.png",
    shortcut: "/edutech.png",
    apple: "/edutech.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

import "./globals.css";
