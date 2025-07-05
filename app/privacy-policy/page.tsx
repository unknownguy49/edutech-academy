import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Eye,
  Lock,
  UserCheck,
  FileText,
  AlertCircle,
  Globe,
  Mail,
  Calendar,
} from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Shield className="w-3 h-3 mr-1" />
            Legal Document
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy is fundamental to our mission. This policy explains how
            EduTech Academy collects, uses, and protects your personal
            information.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: July 6, 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              <span>GDPR & CCPA Compliant</span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              EduTech Academy ("we," "our," or "us") is committed to protecting
              and respecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website and use our educational services. Please read
              this privacy policy carefully. If you do not agree with the terms
              of this privacy policy, please do not access the site or use our
              services.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This policy applies to all information collected through our
              website, mobile applications, and any related services, sales,
              marketing, or events (collectively, the "Services").
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <UserCheck className="w-4 h-4" />
                Personal Information You Provide
              </h4>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Account information (name, email address, password)</li>
                <li>
                  • Profile information (bio, profile picture, preferences)
                </li>
                <li>
                  • Payment information (billing address, payment method
                  details)
                </li>
                <li>
                  • Communication data (messages, support tickets, feedback)
                </li>
                <li>
                  • Educational records (course progress, assignments, grades)
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Information Automatically Collected
              </h4>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>
                  • Device and browser information (IP address, device type,
                  browser type)
                </li>
                <li>
                  • Usage data (pages visited, time spent, click patterns)
                </li>
                <li>
                  • Location data (general geographic location based on IP)
                </li>
                <li>• Cookies and tracking technologies data</li>
                <li>• Log files and error reports</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We use the information we collect for the following purposes:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Service Provision</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Provide and maintain our educational services</li>
                  <li>• Process transactions and manage subscriptions</li>
                  <li>• Deliver course content and track progress</li>
                  <li>• Provide customer support and technical assistance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">
                  Improvement & Communication
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Improve our platform and develop new features</li>
                  <li>• Send service updates and educational content</li>
                  <li>• Conduct research and analytics</li>
                  <li>• Ensure security and prevent fraud</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information Sharing */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Information Sharing and Disclosure
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We do not sell, trade, or rent your personal information. We may
              share information in the following limited circumstances:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-primary/30 pl-4">
                <h4 className="font-semibold">Service Providers</h4>
                <p className="text-sm text-muted-foreground">
                  Trusted third-party companies that help us operate our
                  services (payment processors, hosting providers, email
                  services)
                </p>
              </div>
              <div className="border-l-4 border-primary/30 pl-4">
                <h4 className="font-semibold">Legal Requirements</h4>
                <p className="text-sm text-muted-foreground">
                  When required by law, court order, or to protect our rights
                  and safety
                </p>
              </div>
              <div className="border-l-4 border-primary/30 pl-4">
                <h4 className="font-semibold">Business Transfers</h4>
                <p className="text-sm text-muted-foreground">
                  In connection with a merger, acquisition, or sale of all or
                  part of our business
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Your Privacy Rights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Depending on your location, you may have the following rights
              regarding your personal information:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-medium">Access</span>
                </div>
                <p className="text-sm text-muted-foreground ml-4">
                  Request a copy of your personal data
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-medium">Correction</span>
                </div>
                <p className="text-sm text-muted-foreground ml-4">
                  Update inaccurate or incomplete information
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-medium">Deletion</span>
                </div>
                <p className="text-sm text-muted-foreground ml-4">
                  Request deletion of your personal data
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="font-medium">Portability</span>
                </div>
                <p className="text-sm text-muted-foreground ml-4">
                  Receive your data in a machine-readable format
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Data Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational security
              measures to protect your personal information:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Technical Measures</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• SSL/TLS encryption for data transmission</li>
                  <li>• Encrypted data storage</li>
                  <li>• Regular security audits and updates</li>
                  <li>• Secure access controls and authentication</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Organizational Measures</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Employee privacy training</li>
                  <li>• Data access controls and monitoring</li>
                  <li>• Incident response procedures</li>
                  <li>• Regular policy reviews and updates</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy or our privacy
              practices, please contact us:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Privacy Officer</h4>
                <p className="text-sm text-muted-foreground">
                  EduTech Academy, Inc.
                  <br />
                  123 Education Boulevard
                  <br />
                  Learning City, LC 12345
                  <br />
                  United States
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Contact Methods</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>
                    Email:{" "}
                    <Link
                      href="mailto:privacy@edutech-academy.com"
                      className="text-primary hover:underline"
                    >
                      privacy@edutech-academy.com
                    </Link>
                  </li>
                  <li>Phone: +1 (555) 123-4567</li>
                  <li>
                    Contact Form:{" "}
                    <Link
                      href="/contact"
                      className="text-primary hover:underline"
                    >
                      /contact
                    </Link>
                  </li>
                  <li>Response Time: 5-10 business days</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            This Privacy Policy was last updated on July 6, 2025.
            <Link
              href="/terms-of-service"
              className="text-primary hover:underline ml-2"
            >
              View Terms of Service
            </Link>
            {" | "}
            <Link
              href="/cookie-policy"
              className="text-primary hover:underline"
            >
              Cookie Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
