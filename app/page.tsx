"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ToastNotification } from "@/components/toast-notification";
import Link from "next/link";
import {
  BookOpen,
  Users,
  Clock,
  DollarSign,
  Star,
  ArrowRight,
  TrendingUp,
  Award,
  Target,
} from "lucide-react";

export default function HomePage() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  const statsRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const featuredCourses = [
    {
      title: "Advanced Mathematics",
      category: "Class 12",
      description:
        "Master calculus, algebra, and geometry with expert guidance",
      instructor: "Dr. Sarah Johnson",
      duration: "6 months",
      fee: "$299",
      rating: 4.9,
      students: 150,
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Physics Mastery",
      category: "Class 11-12",
      description: "From mechanics to modern physics, comprehensive coverage",
      instructor: "Prof. Michael Chen",
      duration: "8 months",
      fee: "$349",
      rating: 4.8,
      students: 120,
      image:
        "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=500&h=300&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=250&fit=crop&crop=center",
    },
    {
      title: "Chemistry Fundamentals",
      category: "Class 10-12",
      description: "Organic, inorganic, and physical chemistry made simple",
      instructor: "Dr. Emily Davis",
      duration: "7 months",
      fee: "$279",
      rating: 4.9,
      students: 180,
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&h=300&fit=crop&crop=center",
      hoverImage:
        "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=400&h=250&fit=crop&crop=center",
    },
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      course: "Advanced Mathematics",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      rating: 5,
      text: "The teaching methodology is exceptional. I improved my grades significantly and gained confidence in mathematics.",
    },
    {
      name: "Priya Sharma",
      course: "Physics Mastery",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      rating: 5,
      text: "Complex physics concepts became crystal clear. The practical approach to learning made all the difference.",
    },
    {
      name: "David Wilson",
      course: "Chemistry Fundamentals",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      rating: 5,
      text: "Outstanding support and personalized attention. Highly recommend to anyone serious about chemistry.",
    },
  ];

  const stats = [
    { label: "Students Enrolled", value: 500, suffix: "+", icon: Users },
    { label: "Courses Available", value: 25, suffix: "+", icon: BookOpen },
    { label: "Expert Tutors", value: 15, suffix: "+", icon: Award },
    { label: "Success Rate", value: 95, suffix: "%", icon: TrendingUp },
  ];

  const features = [
    {
      icon: Users,
      title: "Expert Tutors",
      description:
        "Learn from industry professionals with years of teaching experience",
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description:
        "Choose from multiple time slots that fit your schedule perfectly",
    },
    {
      icon: DollarSign,
      title: "Affordable Fees",
      description:
        "Quality education at competitive prices with flexible payment options",
    },
    {
      icon: Target,
      title: "Personalized Learning",
      description:
        "Customized study plans tailored to your learning pace and goals",
    },
  ];

  // Animate stats when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.value / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setAnimatedStats((prev) => {
                const newStats = [...prev];
                newStats[index] = Math.floor(current);
                return newStats;
              });
            }, 30);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const handleMoreInfo = () => {
    setToastMessage(
      "Detailed course information and enrollment will be available soon! Contact us for immediate assistance."
    );
    setShowToast(true);
  };

  const showToastMessage = (message: string) => {
    setToastMessage(message);
    setShowToast(true);
  };

  return (
    <>
      {showToast && (
        <ToastNotification
          message={toastMessage}
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
                🎓 Trusted by 500+ Students
              </Badge>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                  Unlock Your
                </span>
                <br />
                <span className="text-foreground">Potential</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Transform your academic journey with expert tutors, personalized
                learning, and cutting-edge educational technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg px-8 py-6"
                >
                  <Link href="/courses">
                    Explore Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="text-lg px-8 py-6 hover:bg-primary/5 bg-transparent"
                >
                  <Link href="/auth">Join Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30" ref={statsRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {animatedStats[index]}
                    {stat.suffix}
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                Popular Courses
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover our most sought-after courses designed to help you
                excel in your studies
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border border-border/50 bg-gradient-to-br from-card to-card/50 backdrop-blur overflow-hidden relative"
                  onMouseEnter={() => setHoveredCourse(index)}
                  onMouseLeave={() => setHoveredCourse(null)}
                >
                  {/* Hover Image Overlay */}
                  <div
                    className={`absolute inset-0 z-10 transition-all duration-300 ${
                      hoveredCourse === index
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="relative h-full w-full bg-black/80 flex items-center justify-center">
                      <img
                        src={course.hoverImage || "/placeholder.svg"}
                        alt={`${course.title} preview`}
                        className="max-w-[90%] max-h-[90%] object-cover rounded-lg shadow-2xl"
                      />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <p className="text-sm font-medium">
                          Preview: {course.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{course.category}</Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {course.rating}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {course.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-between">
                        <span>Instructor:</span>
                        <span className="font-medium">{course.instructor}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{course.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Students:</span>
                        <span className="font-medium">{course.students}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-2xl font-bold text-primary">
                        {course.fee}
                      </span>
                      <Button
                        className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                        onClick={handleMoreInfo}
                      >
                        More Info
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover:bg-primary/5 bg-transparent"
              >
                <Link href="/courses">
                  View All Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're committed to providing the best learning experience for
                our students
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-card/50"
                >
                  <CardContent className="pt-8 space-y-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">
                What Our Students Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Real feedback from students who transformed their academic
                journey with us
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border border-border/50 bg-gradient-to-br from-card to-card/50"
                >
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center space-x-3 pt-4 border-t">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm font-medium text-primary/80">
                          {testimonial.course}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Start Your Learning Journey?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join thousands of successful students who have achieved their
                academic goals with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-lg px-8 py-6"
                >
                  <Link href="/auth">
                    Get Started Today
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
