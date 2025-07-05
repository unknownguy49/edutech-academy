import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Cookie,
  Settings,
  BarChart3,
  Shield,
  Eye,
  Zap,
  Globe,
  Clock,
  Info,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Cookie className="w-3 h-3 mr-1" />
            Data Policy
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Cookie Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This Cookie Policy explains how EduTech Academy uses cookies and
            similar technologies to enhance your learning experience and provide
            personalized services.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Last Updated: July 6, 2025</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              <span>GDPR & ePrivacy Compliant</span>
            </div>
          </div>
        </div>

        {/* What Are Cookies */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5" />
              What Are Cookies?
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              Cookies are small text files that are stored on your device
              (computer, smartphone, or tablet) when you visit our website. They
              help us remember your preferences, provide enhanced functionality,
              and improve your overall experience on our educational platform.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We also use similar technologies like web beacons, pixel tags, and
              local storage to achieve similar purposes. When we refer to
              "cookies" in this policy, we include all these similar
              technologies.
            </p>
          </CardContent>
        </Card>

        {/* Cookie Categories */}
        <div className="grid gap-6 mb-8">
          {/* Essential Cookies */}
          <Card className="border-green-200/50 hover:border-green-300/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                <Zap className="w-5 h-5" />
                Essential Cookies
                <Badge variant="secondary" className="ml-auto">
                  Always Active
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                These cookies are necessary for our website to function properly
                and cannot be disabled. They enable core functionality such as
                security, network management, and accessibility.
              </p>

              <div>
                <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">
                  Purpose and Examples
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • <strong>Authentication:</strong> Keep you logged in during
                    your session (session_id, auth_token)
                  </li>
                  <li>
                    • <strong>Security:</strong> Prevent cross-site request
                    forgery and other security threats (csrf_token)
                  </li>
                  <li>
                    • <strong>Load Balancing:</strong> Distribute traffic across
                    our servers for optimal performance (lb_session)
                  </li>
                  <li>
                    • <strong>Accessibility:</strong> Remember your
                    accessibility preferences (high_contrast, font_size)
                  </li>
                  <li>
                    • <strong>Shopping Cart:</strong> Maintain your course
                    selections during checkout (cart_items)
                  </li>
                  <li>
                    • <strong>Payment Processing:</strong> Secure payment form
                    functionality (payment_session)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">
                  Data Collected
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Session identifiers and authentication tokens</li>
                  <li>
                    • Basic browser and device information for compatibility
                  </li>
                  <li>• Security tokens to prevent malicious attacks</li>
                  <li>
                    • Temporary data for form submissions and transactions
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-green-600 dark:text-green-400">
                  Retention Period
                </h4>
                <p className="text-muted-foreground">
                  Most essential cookies are session-based and expire when you
                  close your browser. Authentication cookies may last up to 30
                  days if you choose "Remember Me."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Analytics Cookies */}
          <Card className="border-blue-200/50 hover:border-blue-300/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <BarChart3 className="w-5 h-5" />
                  Analytics Cookies
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="analytics-cookies" />
                  <label
                    htmlFor="analytics-cookies"
                    className="text-sm font-medium"
                  >
                    Enable
                  </label>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                These cookies help us understand how visitors interact with our
                website by collecting and reporting information anonymously.
                This helps us improve our content and user experience.
              </p>

              <div>
                <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">
                  What We Track
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • <strong>Usage Patterns:</strong> Pages visited, time
                    spent, bounce rate (_ga, _gid)
                  </li>
                  <li>
                    • <strong>Learning Progress:</strong> Course completion
                    rates, video watch time (progress_track)
                  </li>
                  <li>
                    • <strong>Feature Usage:</strong> Which features are
                    most/least used (feature_analytics)
                  </li>
                  <li>
                    • <strong>Performance Metrics:</strong> Page load times,
                    error rates (perf_metrics)
                  </li>
                  <li>
                    • <strong>Device Information:</strong> Screen resolution,
                    browser type (device_info)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">
                  Third-Party Services
                </h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg">
                    <h5 className="font-medium mb-1">Google Analytics</h5>
                    <p className="text-sm text-muted-foreground">
                      Provides detailed website analytics and user behavior
                      insights
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg">
                    <h5 className="font-medium mb-1">Hotjar</h5>
                    <p className="text-sm text-muted-foreground">
                      Heat mapping and user session recordings for UX
                      optimization
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-blue-600 dark:text-blue-400">
                  Retention Period
                </h4>
                <p className="text-muted-foreground">
                  Analytics cookies typically expire after 2 years. You can opt
                  out at any time using the toggle above or through your browser
                  settings.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Marketing Cookies */}
          <Card className="border-purple-200/50 hover:border-purple-300/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                  <Eye className="w-5 h-5" />
                  Marketing Cookies
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="marketing-cookies" />
                  <label
                    htmlFor="marketing-cookies"
                    className="text-sm font-medium"
                  >
                    Enable
                  </label>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                These cookies are used to deliver relevant advertisements and
                marketing content. They help us show you courses and content
                that might interest you based on your learning preferences.
              </p>

              <div>
                <h4 className="font-semibold mb-3 text-purple-600 dark:text-purple-400">
                  Personalization Features
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • <strong>Course Recommendations:</strong> Suggest relevant
                    courses based on your interests (course_prefs)
                  </li>
                  <li>
                    • <strong>Content Targeting:</strong> Show relevant blog
                    posts and resources (content_targeting)
                  </li>
                  <li>
                    • <strong>Email Campaigns:</strong> Personalize email
                    content and timing (email_prefs)
                  </li>
                  <li>
                    • <strong>Retargeting:</strong> Show relevant ads on other
                    websites (retargeting_pixel)
                  </li>
                  <li>
                    • <strong>Social Media:</strong> Enable content sharing and
                    social login features (social_cookies)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-purple-600 dark:text-purple-400">
                  Advertising Partners
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg">
                    <h5 className="font-medium mb-1">Facebook Pixel</h5>
                    <p className="text-xs text-muted-foreground">
                      Retargeting and lookalike audience creation
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg">
                    <h5 className="font-medium mb-1">Google Ads</h5>
                    <p className="text-xs text-muted-foreground">
                      Search and display advertising optimization
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg">
                    <h5 className="font-medium mb-1">LinkedIn Insight</h5>
                    <p className="text-xs text-muted-foreground">
                      Professional audience targeting
                    </p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg">
                    <h5 className="font-medium mb-1">Twitter Pixel</h5>
                    <p className="text-xs text-muted-foreground">
                      Social media advertising and conversion tracking
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-purple-600 dark:text-purple-400">
                  Retention Period
                </h4>
                <p className="text-muted-foreground">
                  Marketing cookies typically expire after 90 days to 2 years,
                  depending on the specific service. You can disable them at any
                  time.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Preference Cookies */}
          <Card className="border-orange-200/50 hover:border-orange-300/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                  <Settings className="w-5 h-5" />
                  Preference Cookies
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="preference-cookies" defaultChecked />
                  <label
                    htmlFor="preference-cookies"
                    className="text-sm font-medium"
                  >
                    Enable
                  </label>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                These cookies remember your preferences and settings to provide
                a more personalized experience. They enhance usability but are
                not essential for basic functionality.
              </p>

              <div>
                <h4 className="font-semibold mb-3 text-orange-600 dark:text-orange-400">
                  Personalization Features
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • <strong>Theme Settings:</strong> Remember your dark/light
                    mode preference (theme_pref)
                  </li>
                  <li>
                    • <strong>Language:</strong> Store your preferred language
                    setting (lang_pref)
                  </li>
                  <li>
                    • <strong>Dashboard Layout:</strong> Save your customized
                    dashboard configuration (dashboard_layout)
                  </li>
                  <li>
                    • <strong>Video Settings:</strong> Remember playback speed
                    and quality preferences (video_prefs)
                  </li>
                  <li>
                    • <strong>Notification Settings:</strong> Store your
                    notification preferences (notification_prefs)
                  </li>
                  <li>
                    • <strong>Accessibility:</strong> Remember accessibility
                    settings like font size (accessibility_prefs)
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-orange-600 dark:text-orange-400">
                  Benefits
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium">Consistent Experience</h5>
                      <p className="text-sm text-muted-foreground">
                        Your settings persist across sessions and devices
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium">Time Saving</h5>
                      <p className="text-sm text-muted-foreground">
                        No need to reconfigure settings each visit
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-orange-600 dark:text-orange-400">
                  Retention Period
                </h4>
                <p className="text-muted-foreground">
                  Preference cookies are stored for up to 1 year or until you
                  clear your browser data. They can be disabled without
                  affecting core functionality.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cookie Management */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Managing Your Cookie Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              You have full control over which cookies you allow on our website.
              Here are the ways you can manage your preferences:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Our Cookie Banner</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  When you first visit our site, you'll see a cookie banner
                  allowing you to accept or customize your preferences.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Settings className="w-4 h-4 mr-2" />
                  Open Cookie Preferences
                </Button>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Browser Settings</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  You can also manage cookies through your browser settings.
                  Most browsers allow you to:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Block all cookies</li>
                  <li>• Allow only first-party cookies</li>
                  <li>• Delete existing cookies</li>
                  <li>• Get notified when cookies are set</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 p-4 rounded-lg border border-amber-200/50">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                    Impact of Disabling Cookies
                  </h4>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    While you can disable non-essential cookies, this may affect
                    your experience on our platform. Some features like
                    personalized recommendations, progress tracking, and
                    customized settings may not work properly.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Cookies */}
        <Card className="mb-8 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Third-Party Services
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Some features on our website use third-party services that may set
              their own cookies. These services have their own privacy policies
              and cookie practices:
            </p>

            <div className="grid gap-4">
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Google Services</h4>
                  <Badge variant="outline">Analytics & Ads</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  We use Google Analytics for website analytics and Google Ads
                  for advertising.
                </p>
                <Link
                  href="https://policies.google.com/privacy"
                  className="text-primary hover:underline text-sm"
                >
                  View Google Privacy Policy →
                </Link>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Payment Processors</h4>
                  <Badge variant="outline">Essential</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Stripe and PayPal handle secure payment processing and may set
                  cookies for fraud prevention.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="https://stripe.com/privacy"
                    className="text-primary hover:underline text-sm"
                  >
                    Stripe Privacy →
                  </Link>
                  <Link
                    href="https://www.paypal.com/privacy"
                    className="text-primary hover:underline text-sm"
                  >
                    PayPal Privacy →
                  </Link>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Social Media</h4>
                  <Badge variant="outline">Marketing</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  Social sharing buttons and embedded content may set cookies
                  from social media platforms.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="https://www.facebook.com/privacy"
                    className="text-primary hover:underline text-sm"
                  >
                    Facebook Privacy →
                  </Link>
                  <Link
                    href="https://twitter.com/privacy"
                    className="text-primary hover:underline text-sm"
                  >
                    Twitter Privacy →
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Updates and Contact */}
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardContent className="pt-6">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">
                Questions About Our Cookie Policy?
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're committed to transparency about how we use cookies. If you
                have any questions about our cookie practices or this policy,
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <div className="text-sm text-muted-foreground">
                  Email:{" "}
                  <Link
                    href="mailto:privacy@edutech-academy.com"
                    className="text-primary hover:underline"
                  >
                    privacy@edutech-academy.com
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            This Cookie Policy was last updated on July 6, 2025.
            <Link
              href="/privacy-policy"
              className="text-primary hover:underline ml-2"
            >
              View Privacy Policy
            </Link>
            {" | "}
            <Link
              href="/terms-of-service"
              className="text-primary hover:underline"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
