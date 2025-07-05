"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ToastNotification } from "@/components/toast-notification";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Target,
} from "lucide-react";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showToast, setShowToast] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "10 Effective Study Techniques That Actually Work",
      excerpt:
        "Discover proven study methods that can help you retain information better and improve your academic performance significantly.",
      content:
        "In this comprehensive guide, we explore scientifically-backed study techniques that have helped thousands of students achieve better grades...",
      author: "Dr. Sarah Johnson",
      authorImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Study Tips",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop&crop=center",
      featured: true,
    },
    {
      id: 2,
      title: "Mathematics Made Simple: Conquering Calculus",
      excerpt:
        "Break down complex calculus concepts into manageable pieces with our step-by-step approach to mathematical mastery.",
      content:
        "Calculus doesn't have to be intimidating. With the right approach and understanding of fundamental concepts...",
      author: "Prof. Michael Chen",
      authorImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "Mathematics",
      image:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&h=300&fit=crop&crop=center",
      featured: false,
    },
    {
      id: 3,
      title: "Physics in Daily Life: Understanding the World Around Us",
      excerpt:
        "Explore how physics principles apply to everyday situations and make learning more engaging and relatable.",
      content:
        "Physics isn't just about formulas and equations. It's about understanding the fundamental principles that govern our universe...",
      author: "Dr. Emily Davis",
      authorImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Physics",
      image:
        "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=500&h=300&fit=crop&crop=center",
      featured: false,
    },
    {
      id: 4,
      title: "Exam Preparation Strategies for Success",
      excerpt:
        "Master the art of exam preparation with proven strategies that reduce stress and maximize performance.",
      content:
        "Preparing for exams can be overwhelming, but with the right strategy and mindset, you can approach any test with confidence...",
      author: "Ms. Jennifer Brown",
      authorImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "Study Tips",
      image:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=300&fit=crop&crop=center",
      featured: true,
    },
    {
      id: 5,
      title: "The Science of Memory: How to Remember Better",
      excerpt:
        "Understand how memory works and learn techniques to improve your ability to retain and recall information.",
      content:
        "Memory is not just about repetition. Understanding how your brain processes and stores information can dramatically improve your learning...",
      author: "Dr. Robert Lee",
      authorImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Psychology",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=500&h=300&fit=crop&crop=center",
      featured: false,
    },
    {
      id: 6,
      title: "Chemistry Experiments You Can Do at Home",
      excerpt:
        "Safe and educational chemistry experiments that bring learning to life in your own kitchen.",
      content:
        "Learning chemistry doesn't have to be confined to the laboratory. These safe home experiments will help you understand chemical principles...",
      author: "Dr. Maria Garcia",
      authorImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=40&h=40&fit=crop&crop=face",
      date: "2024-01-03",
      readTime: "7 min read",
      category: "Chemistry",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500&h=300&fit=crop&crop=center",
      featured: false,
    },
  ];

  const categories = [
    "Study Tips",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Psychology",
  ];
  const recentPosts = blogPosts.slice(0, 3);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find((post) => post.featured);

  const handleLoadMore = () => {
    setShowToast(true);
  };

  return (
    <>
      {showToast && (
        <ToastNotification
          message="More articles will be published soon! Subscribe to our newsletter to get notified of new content."
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
                📝 Educational Blog
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                  Learn & Grow
                </span>
                <br />
                <span className="text-foreground">Every Day</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover insights, tips, and educational content from our expert
                educators to enhance your learning journey and academic success.
              </p>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles, topics, or authors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              {/* Featured Post */}
              {featuredPost && (
                <section>
                  <div className="flex items-center space-x-2 mb-6">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <h2 className="text-2xl font-bold">Featured Article</h2>
                  </div>

                  <Card className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-0 bg-gradient-to-br from-card to-card/50 overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <img
                          src={featuredPost.image || "/placeholder.svg"}
                          alt={featuredPost.title}
                          className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="md:w-1/2 p-8">
                        <div className="space-y-4">
                          <Badge variant="secondary">
                            {featuredPost.category}
                          </Badge>

                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                            {featuredPost.title}
                          </h3>

                          <p className="text-muted-foreground leading-relaxed">
                            {featuredPost.excerpt}
                          </p>

                          <div className="flex items-center space-x-4 text-sm text-foreground/70">
                            <div className="flex items-center space-x-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage
                                  src={
                                    featuredPost.authorImage ||
                                    "/placeholder.svg"
                                  }
                                />
                                <AvatarFallback>
                                  {featuredPost.author
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                              <span>{featuredPost.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {new Date(
                                  featuredPost.date
                                ).toLocaleDateString()}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{featuredPost.readTime}</span>
                            </div>
                          </div>

                          <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 group">
                            Read Full Article
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </section>
              )}

              {/* Blog Posts Grid */}
              <section>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold">Latest Articles</h2>
                  <p className="text-muted-foreground">
                    {filteredPosts.length} article
                    {filteredPosts.length !== 1 ? "s" : ""} found
                  </p>
                </div>

                {filteredPosts.length === 0 ? (
                  <div className="text-center py-16">
                    <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">
                      No articles found
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Try adjusting your search terms to find what you're
                      looking for.
                    </p>
                    <Button onClick={() => setSearchTerm("")} variant="outline">
                      Clear Search
                    </Button>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-8">
                    {filteredPosts
                      .filter((post) => !post.featured)
                      .map((post) => (
                        <Card
                          key={post.id}
                          className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-card/50 overflow-hidden"
                        >
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={post.image || "/placeholder.svg"}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge
                                variant="secondary"
                                className="bg-background/90 backdrop-blur"
                              >
                                {post.category}
                              </Badge>
                            </div>
                          </div>

                          <CardContent className="p-6 space-y-4">
                            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </h3>

                            <p className="text-muted-foreground line-clamp-3">
                              {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between pt-4 border-t">
                              <div className="flex items-center space-x-2 text-sm text-foreground/70">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage
                                    src={post.authorImage || "/placeholder.svg"}
                                  />
                                  <AvatarFallback>
                                    {post.author
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <span>{post.author}</span>
                              </div>

                              <div className="flex items-center space-x-3 text-sm text-foreground/70">
                                <span>
                                  {new Date(post.date).toLocaleDateString()}
                                </span>
                                <span>{post.readTime}</span>
                              </div>
                            </div>

                            <Button
                              variant="ghost"
                              className="w-full justify-between group"
                            >
                              Read More
                              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                )}

                {/* Load More Button */}
                {filteredPosts.length > 0 && (
                  <div className="text-center mt-12">
                    <Button
                      size="lg"
                      variant="outline"
                      className="hover:bg-primary/5 bg-transparent"
                      onClick={handleLoadMore}
                    >
                      Load More Articles
                    </Button>
                  </div>
                )}
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card className="border-0 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5 text-primary" />
                    <span>Categories</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button
                    variant={selectedCategory === "all" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setSelectedCategory("all")}
                  >
                    All Categories
                  </Button>
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={
                        selectedCategory === category ? "default" : "ghost"
                      }
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card className="border-0 bg-gradient-to-br from-card to-card/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    <span>Recent Posts</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="group cursor-pointer">
                      <div className="flex space-x-3">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="space-y-1">
                          <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {new Date(post.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="border-0 bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Stay Updated</h3>
                    <p className="text-sm text-muted-foreground">
                      Get the latest educational content delivered to your
                      inbox.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Input
                      placeholder="Enter your email"
                      className="bg-background/50"
                    />
                    <Button className="w-full bg-gradient-to-r from-primary to-primary/80">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
