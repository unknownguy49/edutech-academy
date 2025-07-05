"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToastNotification } from "@/components/toast-notification";

export function Footer() {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setShowToast(true);
      setEmail("");
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  ];

  return (
    <>
      {showToast && (
        <ToastNotification
          message="Thanks for subscribing! We'll keep you updated."
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}

      <footer className="relative bg-gradient-to-br from-muted/50 via-background to-muted/30 border-t border-border/40">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

        <div className="relative container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="relative">
                  <GraduationCap className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  EduTech Academy
                </span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Empowering students with quality education and expert guidance.
                Your success is our mission.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary transition-all hover:scale-110"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2">
                {[
                  { href: "/courses", label: "All Courses" },
                  { href: "/about", label: "About Us" },
                  { href: "/blog", label: "Blog" },
                  { href: "/contact", label: "Contact" },
                  { href: "/dashboard", label: "Student Portal" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    123 Education Street, Learning City, LC 12345
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    info@edutechacademy.com
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Stay Updated</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to get the latest updates and educational content.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/50 border-border/50 focus:border-primary"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-12 pt-8 border-t border-border/40">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © 2025 EduTech Academy. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-muted-foreground">
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookie-policy"
                  className="hover:text-primary transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
