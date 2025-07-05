"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Clock,
  Award,
  Play,
  Download,
  Calendar,
  Users,
  Star,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MyCoursesPage() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      if (parsedUser.isAuthenticated) {
        setUser(parsedUser);
      } else {
        router.push("/auth");
      }
    } else {
      router.push("/auth");
    }
    setIsLoading(false);
  }, [router]);

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

  const enrolledCourses = [
    {
      id: 1,
      title: "Advanced Mathematics",
      instructor: "Dr. Sarah Johnson",
      instructorImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=64&h=64&fit=crop&crop=face",
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      duration: "12 weeks",
      level: "Advanced",
      nextLesson: "Calculus Applications",
      lastAccessed: "2 hours ago",
      image:
        "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=400&h=200&fit=crop",
      rating: 4.8,
      students: 342,
      status: "In Progress",
    },
    {
      id: 2,
      title: "Physics Mastery",
      instructor: "Prof. Michael Chen",
      instructorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      progress: 60,
      totalLessons: 20,
      completedLessons: 12,
      duration: "10 weeks",
      level: "Intermediate",
      nextLesson: "Quantum Mechanics Basics",
      lastAccessed: "1 day ago",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop",
      rating: 4.9,
      students: 567,
      status: "In Progress",
    },
    {
      id: 3,
      title: "Chemistry Fundamentals",
      instructor: "Dr. Emily Davis",
      instructorImage:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&h=64&fit=crop&crop=face",
      progress: 45,
      totalLessons: 18,
      completedLessons: 8,
      duration: "8 weeks",
      level: "Beginner",
      nextLesson: "Organic Chemistry Introduction",
      lastAccessed: "3 days ago",
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=200&fit=crop",
      rating: 4.7,
      students: 234,
      status: "In Progress",
    },
  ];

  const completedCourses = [
    {
      id: 4,
      title: "Basic Algebra",
      instructor: "Ms. Jennifer Brown",
      instructorImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      progress: 100,
      totalLessons: 15,
      completedLessons: 15,
      duration: "6 weeks",
      level: "Beginner",
      completedDate: "2 weeks ago",
      image:
        "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=200&fit=crop",
      rating: 4.6,
      students: 1234,
      status: "Completed",
      certificate: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">My Courses</h1>
              <p className="text-muted-foreground">
                Track your learning progress and continue your journey
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">
                {enrolledCourses.length + completedCourses.length}
              </div>
              <div className="text-sm text-muted-foreground">Total Courses</div>
            </div>
          </div>
        </div>

        {/* Course Tabs */}
        <Tabs defaultValue="in-progress" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-400">
            <TabsTrigger
              value="in-progress"
              className="flex items-center gap-2"
            >
              <Play className="h-4 w-4" />
              In Progress ({enrolledCourses.length})
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              Completed ({completedCourses.length})
            </TabsTrigger>
          </TabsList>

          {/* In Progress Courses */}
          <TabsContent value="in-progress" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {enrolledCourses.map((course) => (
                <Card
                  key={course.id}
                  className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/80">
                        {course.level}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary/80">{course.status}</Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="line-clamp-2">
                      {course.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={course.instructorImage} />
                        <AvatarFallback>
                          {course.instructor
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span>{course.instructor}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                      <div className="text-xs text-muted-foreground">
                        {course.completedLessons} of {course.totalLessons}{" "}
                        lessons completed
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current text-yellow-500" />
                        {course.rating}
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground">
                      Next: {course.nextLesson}
                    </div>

                    <div className="flex gap-2">
                      <Button className="flex-1" size="sm">
                        <Play className="h-4 w-4 mr-2" />
                        Continue
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Completed Courses */}
          <TabsContent value="completed" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {completedCourses.map((course) => (
                <Card
                  key={course.id}
                  className="group hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/80">
                        {course.level}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-green-600">Completed</Badge>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="line-clamp-2">
                      {course.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={course.instructorImage} />
                        <AvatarFallback>
                          {course.instructor
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span>{course.instructor}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="text-green-600 font-medium">100%</span>
                      </div>
                      <Progress value={100} className="h-2" />
                      <div className="text-xs text-muted-foreground">
                        Completed {course.completedDate}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {course.students} students
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-current text-yellow-500" />
                        {course.rating}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1" size="sm">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Review
                      </Button>
                      {course.certificate && (
                        <Button
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <Award className="h-4 w-4 mr-2" />
                          Certificate
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
