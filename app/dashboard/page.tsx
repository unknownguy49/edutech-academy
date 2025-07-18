"use client";

import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BookOpen,
  Calendar,
  Clock,
  TrendingUp,
  Award,
  Bell,
  DollarSign,
  ArrowRight,
  Play,
  LogOut,
  User,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
        router.push("/auth");
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect to auth page
  }

  // Only show dashboard for johndoe@gmail.com
  if (user.email !== "johndoe@gmail.com") {
    if (typeof window !== "undefined") {
      window.location.href = "/clean-dashboard";
    }
    return null;
  }

  const studentData = {
    name: user.displayName || "Student",
    email: user.email || "student@example.com",
    avatar: "/placeholder.svg?height=60&width=60",
    enrolledCourses: 3,
    completedCourses: 1,
    totalAttendance: 85,
    nextClass: "Advanced Mathematics - Tomorrow 2:00 PM",
  };

  const activeCourses = [
    {
      id: 1,
      title: "Advanced Mathematics",
      instructor: "Dr. Sarah Johnson",
      progress: 75,
      nextClass: "Tomorrow 2:00 PM",
      attendance: 90,
      status: "active",
    },
    {
      id: 2,
      title: "Physics Mastery",
      instructor: "Prof. Michael Chen",
      progress: 60,
      nextClass: "Friday 10:00 AM",
      attendance: 85,
      status: "active",
    },
    {
      id: 3,
      title: "Chemistry Fundamentals",
      instructor: "Dr. Emily Davis",
      progress: 45,
      nextClass: "Monday 3:00 PM",
      attendance: 80,
      status: "active",
    },
  ];

  const recentNotifications = [
    {
      id: 1,
      type: "class",
      title: "Class Rescheduled",
      message: "Advanced Mathematics class moved to 3:00 PM tomorrow",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      type: "material",
      title: "New Study Material",
      message: "Physics chapter 5 notes have been uploaded",
      time: "1 day ago",
      read: false,
    },
    {
      id: 3,
      type: "payment",
      title: "Payment Reminder",
      message: "Monthly fee payment due in 3 days",
      time: "2 days ago",
      read: true,
    },
    {
      id: 4,
      type: "achievement",
      title: "Great Progress!",
      message: "You've completed 75% of Advanced Mathematics",
      time: "3 days ago",
      read: true,
    },
  ];

  const upcomingClasses = [
    {
      course: "Advanced Mathematics",
      instructor: "Dr. Sarah Johnson",
      time: "Tomorrow 2:00 PM",
      duration: "2 hours",
      type: "Live Class",
    },
    {
      course: "Physics Mastery",
      instructor: "Prof. Michael Chen",
      time: "Friday 10:00 AM",
      duration: "1.5 hours",
      type: "Lab Session",
    },
    {
      course: "Chemistry Fundamentals",
      instructor: "Dr. Emily Davis",
      time: "Monday 3:00 PM",
      duration: "2 hours",
      type: "Theory Class",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16 border-2 border-primary/20">
                <AvatarImage src={studentData.avatar || "/placeholder.svg"} />
                <AvatarFallback className="text-lg font-semibold">
                  {studentData.name
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold">
                  Welcome back, {studentData.name.split(" ")[0]}!
                </h1>
                <p className="text-muted-foreground">
                  Ready to continue your learning journey?
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="relative bg-transparent"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-xs"></span>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/student-info" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-primary/80"
              >
                <Link href="/my-courses">View All Courses</Link>
              </Button>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="flex items-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Active Courses
                  </p>
                  <p className="text-3xl font-bold text-primary">
                    {studentData.enrolledCourses}
                  </p>
                </div>
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Attendance
                  </p>
                  <p className="text-3xl font-bold text-green-600">
                    {studentData.totalAttendance}%
                  </p>
                </div>
                <div className="h-12 w-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Completed
                  </p>
                  <p className="text-3xl font-bold text-blue-600">
                    {studentData.completedCourses}
                  </p>
                </div>
                <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Next Class
                  </p>
                  <p className="text-sm font-medium text-orange-600">
                    Tomorrow 2:00 PM
                  </p>
                </div>
                <div className="h-12 w-12 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Courses */}
            <Card className="border-0 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span>My Courses</span>
                  </CardTitle>
                  <Button variant="ghost" asChild>
                    <Link href="/my-courses">
                      View All
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeCourses.map((course) => (
                  <div
                    key={course.id}
                    className="p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {course.instructor}
                        </p>
                      </div>
                      <Badge variant="secondary">
                        {course.progress}% Complete
                      </Badge>
                    </div>

                    <Progress value={course.progress} className="mb-3" />

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>Next: {course.nextClass}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <TrendingUp className="h-4 w-4 text-muted-foreground" />
                          <span>{course.attendance}% Attendance</span>
                        </span>
                      </div>
                      <Button size="sm" variant="outline">
                        <Play className="mr-2 h-3 w-3" />
                        Continue
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Classes */}
            <Card className="border-0 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Upcoming Classes</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingClasses.map((class_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/30"
                  >
                    <div className="space-y-1">
                      <h3 className="font-semibold">{class_.course}</h3>
                      <p className="text-sm text-muted-foreground">
                        {class_.instructor}
                      </p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>{class_.time}</span>
                        </span>
                        <Badge variant="outline">{class_.type}</Badge>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-primary to-primary/80"
                    >
                      Join Class
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-0 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                  asChild
                >
                  <Link href="/my-courses">
                    <BookOpen className="mr-2 h-4 w-4" />
                    View Materials
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                  asChild
                >
                  <Link href="/student-info">
                    <Calendar className="mr-2 h-4 w-4" />
                    Check Schedule
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent"
                  asChild
                >
                  <Link href="/student-info">
                    <DollarSign className="mr-2 h-4 w-4" />
                    Payment History
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="border-0 bg-gradient-to-br from-card to-card/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="h-5 w-5 text-primary" />
                    <span>Recent Updates</span>
                  </CardTitle>
                  <Badge variant="secondary">
                    {recentNotifications.filter((n) => !n.read).length} new
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentNotifications.slice(0, 4).map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 rounded-lg border-l-4 ${
                      notification.read
                        ? "bg-muted/30 border-l-muted-foreground/30"
                        : "bg-primary/5 border-l-primary"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h4 className="text-sm font-medium">
                          {notification.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {notification.time}
                        </p>
                      </div>
                      {notification.type === "class" && (
                        <Calendar className="h-4 w-4 text-blue-500 flex-shrink-0" />
                      )}
                      {notification.type === "material" && (
                        <BookOpen className="h-4 w-4 text-green-500 flex-shrink-0" />
                      )}
                      {notification.type === "payment" && (
                        <DollarSign className="h-4 w-4 text-orange-500 flex-shrink-0" />
                      )}
                      {notification.type === "achievement" && (
                        <Award className="h-4 w-4 text-purple-500 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full">
                  View All Notifications
                </Button>
              </CardContent>
            </Card>

            {/* Progress Summary */}
            <Card className="border-0 bg-gradient-to-br from-primary/10 to-primary/5">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Great Progress!</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    You're doing excellent in your studies. Keep up the
                    momentum!
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Overall Progress</span>
                      <span className="font-medium">68%</span>
                    </div>
                    <Progress value={68} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
