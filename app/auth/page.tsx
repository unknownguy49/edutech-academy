"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  GraduationCap,
  Shield,
  ArrowRight,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function AuthPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState("");
  const router = useRouter();

  // Check if user is already authenticated
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      if (parsedUser.isAuthenticated) {
        // User is already logged in, redirect to dashboard
        router.push("/dashboard");
      }
    }
  }, [router]);

  // Form state
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [signupForm, setSignupForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
  };

  // Handle login form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setSuccess("");

    // Validation
    const newErrors: Record<string, string> = {};

    if (!loginForm.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(loginForm.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!loginForm.password) {
      newErrors.password = "Password is required";
    } else if (!validatePassword(loginForm.password)) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // For now, accept any valid email/password combination
    setSuccess("Login successful! Redirecting to dashboard...");

    // Store user data in localStorage (simple session simulation)
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: loginForm.email,
        name: loginForm.email.split("@")[0],
        isAuthenticated: true,
        loginTime: new Date().toISOString(),
      })
    );

    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event("authStateChanged"));

    // Redirect to dashboard after a short delay
    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);

    setIsLoading(false);
  };

  // Handle signup form submission
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setSuccess("");

    // Validation
    const newErrors: Record<string, string> = {};

    if (!signupForm.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (signupForm.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    if (!signupForm.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(signupForm.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!signupForm.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(signupForm.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!signupForm.password) {
      newErrors.password = "Password is required";
    } else if (!validatePassword(signupForm.password)) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!signupForm.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (signupForm.password !== signupForm.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!signupForm.acceptTerms) {
      newErrors.acceptTerms = "You must accept the terms and conditions";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // For now, accept any valid signup
    setSuccess("Account created successfully! Redirecting to dashboard...");

    // Store user data in localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: signupForm.email,
        name: signupForm.fullName,
        phone: signupForm.phone,
        isAuthenticated: true,
        loginTime: new Date().toISOString(),
      })
    );

    // Dispatch custom event to notify other components
    window.dispatchEvent(new Event("authStateChanged"));

    // Redirect to dashboard after a short delay
    setTimeout(() => {
      router.push("/dashboard");
    }, 1000);

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 group mb-6"
          >
            <div className="relative">
              <GraduationCap className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              EduTech Academy
            </span>
          </Link>

          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">
            Sign in to your account or create a new one to get started
          </p>
        </div>

        <Card className="border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur shadow-2xl">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger
                value="login"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">Sign In</CardTitle>
                <CardDescription>
                  Enter your credentials to access your account
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {success && (
                  <Alert className="border-green-200 bg-green-50 text-green-800">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>{success}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className={`pl-10 bg-background/50 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        value={loginForm.email}
                        onChange={(e) =>
                          setLoginForm((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        disabled={isLoading}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className={`pl-10 pr-10 bg-background/50 ${
                          errors.password ? "border-red-500" : ""
                        }`}
                        value={loginForm.password}
                        onChange={(e) =>
                          setLoginForm((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
                        disabled={isLoading}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                    {errors.password && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="remember"
                        className="rounded"
                        checked={loginForm.rememberMe}
                        onChange={(e) =>
                          setLoginForm((prev) => ({
                            ...prev,
                            rememberMe: e.target.checked,
                          }))
                        }
                        disabled={isLoading}
                      />
                      <Label htmlFor="remember" className="text-sm">
                        Remember me
                      </Label>
                    </div>
                    <Link
                      href="#"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 group"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing In..." : "Sign In"}
                    {!isLoading && (
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full hover:bg-primary/5 bg-transparent"
                  disabled={isLoading}
                >
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  New to EduTech Academy?{" "}
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Create an account
                  </Button>
                </div>
              </CardContent>
            </TabsContent>

            {/* Register Tab */}
            <TabsContent value="register">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">Create Account</CardTitle>
                <CardDescription>
                  Join thousands of students on their learning journey
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {success && (
                  <Alert className="border-green-200 bg-green-50 text-green-800">
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>{success}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        className={`pl-10 bg-background/50 ${
                          errors.fullName ? "border-red-500" : ""
                        }`}
                        value={signupForm.fullName}
                        onChange={(e) =>
                          setSignupForm((prev) => ({
                            ...prev,
                            fullName: e.target.value,
                          }))
                        }
                        disabled={isLoading}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="registerEmail">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="registerEmail"
                        type="email"
                        placeholder="your.email@example.com"
                        className={`pl-10 bg-background/50 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        value={signupForm.email}
                        onChange={(e) =>
                          setSignupForm((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        disabled={isLoading}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className={`pl-10 bg-background/50 ${
                          errors.phone ? "border-red-500" : ""
                        }`}
                        value={signupForm.phone}
                        onChange={(e) =>
                          setSignupForm((prev) => ({
                            ...prev,
                            phone: e.target.value,
                          }))
                        }
                        disabled={isLoading}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="registerPassword">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="registerPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        className={`pl-10 pr-10 bg-background/50 ${
                          errors.password ? "border-red-500" : ""
                        }`}
                        value={signupForm.password}
                        onChange={(e) =>
                          setSignupForm((prev) => ({
                            ...prev,
                            password: e.target.value,
                          }))
                        }
                        disabled={isLoading}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                    {errors.password && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.password}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className={`pl-10 pr-10 bg-background/50 ${
                          errors.confirmPassword ? "border-red-500" : ""
                        }`}
                        value={signupForm.confirmPassword}
                        onChange={(e) =>
                          setSignupForm((prev) => ({
                            ...prev,
                            confirmPassword: e.target.value,
                          }))
                        }
                        disabled={isLoading}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        disabled={isLoading}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        )}
                      </Button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="rounded mt-1"
                      checked={signupForm.acceptTerms}
                      onChange={(e) =>
                        setSignupForm((prev) => ({
                          ...prev,
                          acceptTerms: e.target.checked,
                        }))
                      }
                      disabled={isLoading}
                    />
                    <div className="space-y-1">
                      <Label
                        htmlFor="terms"
                        className="text-sm leading-relaxed"
                      >
                        I agree to the{" "}
                        <Link
                          href="/terms-of-service"
                          className="text-primary hover:underline"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy-policy"
                          className="text-primary hover:underline"
                        >
                          Privacy Policy
                        </Link>
                      </Label>
                      {errors.acceptTerms && (
                        <p className="text-sm text-red-500 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.acceptTerms}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 group"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                    {!isLoading && (
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Button>
                </form>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full hover:bg-primary/5 bg-transparent"
                  disabled={isLoading}
                >
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </Button>

                <div className="text-center text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Sign in
                  </Button>
                </div>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="space-y-2">
            <div className="mx-auto w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <GraduationCap className="h-4 w-4 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground">Expert Tutors</p>
          </div>
          <div className="space-y-2">
            <div className="mx-auto w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="h-4 w-4 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground">Secure Platform</p>
          </div>
          <div className="space-y-2">
            <div className="mx-auto w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground">24/7 Support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
