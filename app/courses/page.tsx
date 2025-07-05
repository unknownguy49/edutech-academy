"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToastNotification } from "@/components/toast-notification";
import {
  Search,
  Filter,
  Star,
  Clock,
  Users,
  BookOpen,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [showToast, setShowToast] = useState(false);

  const courses = [
    {
      id: 1,
      title: "Advanced Mathematics",
      description:
        "Master calculus, algebra, and geometry with comprehensive problem-solving techniques",
      class: "Class 12",
      subject: "Mathematics",
      instructor: "Dr. Sarah Johnson",
      duration: "6 months",
      fee: "$299",
      rating: 4.9,
      students: 150,
      level: "Advanced",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 2,
      title: "Physics Mastery",
      description:
        "From mechanics to modern physics, comprehensive coverage of all topics",
      class: "Class 11-12",
      subject: "Physics",
      instructor: "Prof. Michael Chen",
      duration: "8 months",
      fee: "$349",
      rating: 4.8,
      students: 120,
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 3,
      title: "Chemistry Fundamentals",
      description:
        "Organic, inorganic, and physical chemistry made simple and engaging",
      class: "Class 10-12",
      subject: "Chemistry",
      instructor: "Dr. Emily Davis",
      duration: "7 months",
      fee: "$279",
      rating: 4.9,
      students: 180,
      level: "Beginner",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 4,
      title: "Biology Excellence",
      description:
        "Complete biology course covering botany, zoology, and human physiology",
      class: "Class 11-12",
      subject: "Biology",
      instructor: "Mr. David Wilson",
      duration: "6 months",
      fee: "$259",
      rating: 4.7,
      students: 95,
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 5,
      title: "English Literature",
      description:
        "Comprehensive study of prose, poetry, and drama with critical analysis",
      class: "Class 10-12",
      subject: "English",
      instructor: "Ms. Jennifer Brown",
      duration: "5 months",
      fee: "$199",
      rating: 4.6,
      students: 200,
      level: "All Levels",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 6,
      title: "Computer Science Basics",
      description:
        "Programming fundamentals, data structures, and algorithm design",
      class: "Class 11-12",
      subject: "Computer Science",
      instructor: "Mr. Alex Kumar",
      duration: "8 months",
      fee: "$399",
      rating: 4.8,
      students: 85,
      level: "Beginner",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 7,
      title: "Social Studies Complete",
      description:
        "History, geography, civics, and economics comprehensive coverage",
      class: "Class 10",
      subject: "Social Studies",
      instructor: "Dr. Maria Garcia",
      duration: "6 months",
      fee: "$229",
      rating: 4.5,
      students: 140,
      level: "Intermediate",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=200&fit=crop&crop=center",
    },
    {
      id: 8,
      title: "Foundation Mathematics",
      description:
        "Strong mathematical foundation for competitive exams and board preparation",
      class: "Class 10",
      subject: "Mathematics",
      instructor: "Mr. Robert Lee",
      duration: "5 months",
      fee: "$249",
      rating: 4.7,
      students: 160,
      level: "Foundation",
      image:
        "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=300&h=200&fit=crop&crop=center",
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesClass =
      selectedClass === "all" || course.class.includes(selectedClass);
    const matchesSubject =
      selectedSubject === "all" || course.subject === selectedSubject;

    return matchesSearch && matchesClass && matchesSubject;
  });

  const subjects = [...new Set(courses.map((course) => course.subject))];
  const classes = [...new Set(courses.map((course) => course.class))];

  const handleLoadMore = () => {
    setShowToast(true);
  };

  return (
    <>
      {showToast && (
        <ToastNotification
          message="More courses will be added soon! Stay tuned for exciting new subjects and advanced topics."
          type="info"
          onClose={() => setShowToast(false)}
        />
      )}

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />

          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge
                variant="secondary"
                className="px-4 py-2 text-sm font-medium"
              >
                📚 Explore Our Courses
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                  Find Your Perfect
                </span>
                <br />
                <span className="text-foreground">Learning Path</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover comprehensive courses designed by expert educators to
                help you excel in your academic journey and achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                {/* Search Bar */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search courses, instructors, or topics..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                {/* Filters */}
                <div className="flex gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Filter:</span>
                  </div>

                  <Select
                    value={selectedClass}
                    onValueChange={setSelectedClass}
                  >
                    <SelectTrigger className="w-[140px] bg-background/50">
                      <SelectValue placeholder="Class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Classes</SelectItem>
                      {classes.map((cls) => (
                        <SelectItem key={cls} value={cls}>
                          {cls}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select
                    value={selectedSubject}
                    onValueChange={setSelectedSubject}
                  >
                    <SelectTrigger className="w-[140px] bg-background/50">
                      <SelectValue placeholder="Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Subjects</SelectItem>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-6 text-center">
                <p className="text-muted-foreground">
                  Showing{" "}
                  <span className="font-semibold text-primary">
                    {filteredCourses.length}
                  </span>{" "}
                  courses
                  {searchTerm && (
                    <span>
                      {" "}
                      for "<span className="font-semibold">{searchTerm}</span>"
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {filteredCourses.length === 0 ? (
              <div className="text-center py-16">
                <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">
                  No courses found
                </h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or filters to find what you're
                  looking for.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedClass("all");
                    setSelectedSubject("all");
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <Card
                    key={course.id}
                    className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-card/50 backdrop-blur overflow-hidden"
                  >
                    {/* Course Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge
                          variant="secondary"
                          className="bg-background/90 backdrop-blur"
                        >
                          {course.class}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge
                          variant="outline"
                          className={`bg-background/90 backdrop-blur ${
                            course.level === "Advanced"
                              ? "border-red-500 text-red-600"
                              : course.level === "Intermediate"
                              ? "border-yellow-500 text-yellow-600"
                              : "border-green-500 text-green-600"
                          }`}
                        >
                          {course.level}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{course.subject}</Badge>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">
                            {course.rating}
                          </span>
                        </div>
                      </div>

                      <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                        {course.title}
                      </CardTitle>

                      <CardDescription className="text-base line-clamp-3">
                        {course.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2 text-foreground/80">
                            <GraduationCap className="h-4 w-4" />
                            <span>{course.instructor}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2 text-foreground/80">
                            <Clock className="h-4 w-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-foreground/80">
                            <Users className="h-4 w-4" />
                            <span>{course.students} students</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-2xl font-bold text-primary">
                          {course.fee}
                        </span>
                        <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 group">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {filteredCourses.length > 0 && (
              <div className="text-center mt-16">
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:bg-primary/5 bg-transparent"
                  onClick={handleLoadMore}
                >
                  Load More Courses
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Start Learning?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of students who have transformed their academic
                journey with our expert-led courses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg px-8 py-6"
                >
                  <Link href="/auth">
                    Enroll Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-8 py-6 hover:bg-primary/5 bg-transparent"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
