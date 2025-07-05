"use client";

import type React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnimatedLoader } from "@/components/animated-loader";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true on client side
    setMounted(true);

    // Only show loader on initial page load
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setIsLoading(false);
      setShowContent(true);
    } else {
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  // Render loading state until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AnimatedLoader onComplete={handleLoaderComplete} />
          </ThemeProvider>
        </body>
      </html>
    );
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {isLoading && <AnimatedLoader onComplete={handleLoaderComplete} />}

          <div
            className={`transition-opacity duration-500 ${
              showContent ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
              <Header />
              <main className="min-h-screen">{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
