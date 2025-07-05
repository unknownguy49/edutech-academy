import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Users,
  CreditCard,
  Shield,
  AlertTriangle,
  Scale,
  Gavel,
  BookOpen,
  Globe,
  Clock,
} from "lucide-react";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Scale className="w-3 h-3 mr-1" />
            Legal Agreement
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These terms govern your use of EduTech Academy's educational
            platform and services. Please read carefully before using our
            services.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Last Updated: July 6, 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              <span>Globally Applicable</span>
            </div>
          </div>
        </div>

        {/* Agreement Notice */}
        <Card className="mb-8 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Gavel className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Legal Agreement</h3>
                <p className="text-muted-foreground">
                  By accessing or using EduTech Academy's services, you agree to
                  be bound by these Terms of Service and all applicable laws and
                  regulations. If you do not agree with any of these terms, you
                  are prohibited from using or accessing our services.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Service Description */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Our Services
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              EduTech Academy provides online educational services including
              courses, tutorials, coaching sessions, and related educational
              content. Our platform offers:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Educational Content</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Online courses and video tutorials</li>
                  <li>• Interactive assignments and quizzes</li>
                  <li>• Live coaching sessions and webinars</li>
                  <li>• Downloadable resources and materials</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Platform Features</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Progress tracking and analytics</li>
                  <li>• Community forums and discussions</li>
                  <li>• Certificates of completion</li>
                  <li>• Mobile and desktop access</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Responsibilities */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              User Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              By using our services, you agree to:
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500/30 pl-4">
                <h4 className="font-semibold text-green-700 dark:text-green-300">
                  Account Security
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                  <li>
                    • Maintain the confidentiality of your account credentials
                  </li>
                  <li>• Notify us immediately of any unauthorized access</li>
                  <li>
                    • Use strong passwords and enable two-factor authentication
                    when available
                  </li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-500/30 pl-4">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300">
                  Acceptable Use
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                  <li>
                    • Use the platform only for lawful educational purposes
                  </li>
                  <li>• Respect intellectual property rights of all content</li>
                  <li>• Maintain respectful communication with other users</li>
                  <li>
                    • Report any bugs, security issues, or inappropriate content
                  </li>
                </ul>
              </div>
              <div className="border-l-4 border-red-500/30 pl-4">
                <h4 className="font-semibold text-red-700 dark:text-red-300">
                  Prohibited Activities
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                  <li>
                    • Sharing, distributing, or reselling our content without
                    permission
                  </li>
                  <li>
                    • Attempting to gain unauthorized access to our systems
                  </li>
                  <li>• Using automated tools to scrape or download content</li>
                  <li>
                    • Engaging in harassment, spam, or disruptive behavior
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Terms */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Payment Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Subscription Services</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Monthly and annual subscription options available</li>
                  <li>• Automatic renewal unless cancelled</li>
                  <li>• Price changes with 30 days advance notice</li>
                  <li>• Pro-rated refunds for mid-cycle cancellations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">One-Time Purchases</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Individual course purchases</li>
                  <li>• Lifetime access to purchased content</li>
                  <li>• 30-day money-back guarantee</li>
                  <li>• Secure payment processing</li>
                </ul>
              </div>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Refund Policy</h4>
              <p className="text-sm text-muted-foreground">
                We offer a 30-day money-back guarantee for all purchases. Refund
                requests must be submitted within 30 days of purchase. For
                subscription services, you may cancel at any time, and your
                access will continue until the end of the current billing
                period.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Intellectual Property Rights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Our Content</h4>
                <p className="text-sm text-muted-foreground">
                  All content on our platform, including courses, videos, text,
                  graphics, logos, and software, is owned by EduTech Academy or
                  our content partners and is protected by copyright, trademark,
                  and other intellectual property laws.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Your Content</h4>
                <p className="text-sm text-muted-foreground">
                  You retain ownership of any content you submit to our platform
                  (such as forum posts, assignments, or feedback). By submitting
                  content, you grant us a non-exclusive license to use, display,
                  and distribute your content for educational and promotional
                  purposes.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">License to Use</h4>
                <p className="text-sm text-muted-foreground">
                  We grant you a limited, non-exclusive, non-transferable
                  license to access and use our educational content for your
                  personal learning purposes only. This license does not permit
                  commercial use or redistribution.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="mb-8 border-orange-200/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-600" />
              Limitation of Liability
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-orange-50 dark:bg-orange-950/20 p-4 rounded-lg border border-orange-200/50">
              <p className="text-sm text-muted-foreground">
                <strong>Important Notice:</strong> To the maximum extent
                permitted by law, EduTech Academy shall not be liable for any
                indirect, incidental, special, consequential, or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from your
                use of our services.
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold mb-2">Service Availability</h4>
                <p className="text-sm text-muted-foreground">
                  While we strive for 99.9% uptime, we cannot guarantee
                  uninterrupted service availability. We are not liable for any
                  damages resulting from service interruptions, maintenance, or
                  technical difficulties.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Educational Outcomes</h4>
                <p className="text-sm text-muted-foreground">
                  We provide educational content and resources but do not
                  guarantee specific learning outcomes, job placement, or
                  certification success. Your success depends on your effort,
                  prior knowledge, and other factors beyond our control.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gavel className="w-5 h-5" />
              Termination
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Either party may terminate this agreement under the following
              circumstances:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Your Rights</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Cancel your subscription at any time</li>
                  <li>• Delete your account and data</li>
                  <li>• Discontinue use of our services</li>
                  <li>• Request data export before termination</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Our Rights</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Suspend accounts for policy violations</li>
                  <li>• Terminate services with notice</li>
                  <li>• Remove content that violates our terms</li>
                  <li>• Modify or discontinue features</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              If you have any questions about these Terms, contact us at{" "}
              <Link
                href="mailto:legal@edutech-academy.com"
                className="text-primary hover:underline"
              >
                legal@edutech-academy.com
              </Link>{" "}
              or through our{" "}
              <Link href="/contact" className="text-primary hover:underline">
                contact form
              </Link>
              .
            </p>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            These Terms of Service were last updated on July 6, 2025.
            <Link
              href="/privacy-policy"
              className="text-primary hover:underline ml-2"
            >
              View Privacy Policy
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
