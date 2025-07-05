import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Target, BookOpen, Star } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      subject: "Mathematics",
      image:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&h=200&fit=crop&crop=face",
      experience: "10+ years",
      qualification: "PhD in Mathematics",
      rating: 4.9,
    },
    {
      name: "Prof. Michael Chen",
      subject: "Physics",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face",
      experience: "12+ years",
      qualification: "M.Sc Physics, B.Ed",
      rating: 4.8,
    },
    {
      name: "Dr. Emily Davis",
      subject: "Chemistry",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
      experience: "8+ years",
      qualification: "PhD in Chemistry",
      rating: 4.9,
    },
    {
      name: "Mr. David Wilson",
      subject: "Biology",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop&crop=face",
      experience: "9+ years",
      qualification: "M.Sc Biology, B.Ed",
      rating: 4.7,
    },
  ];

  const milestones = [
    {
      year: "2015",
      event: "EduTech Academy Founded",
      description: "Started with a vision to revolutionize education",
    },
    {
      year: "2017",
      event: "100+ Students Milestone",
      description: "Reached our first major student enrollment goal",
    },
    {
      year: "2019",
      event: "Online Platform Launch",
      description: "Expanded to digital learning solutions",
    },
    {
      year: "2021",
      event: "Award Recognition",
      description: "Received 'Best Coaching Center' award",
    },
    {
      year: "2023",
      event: "500+ Students",
      description: "Celebrating our growing community of learners",
    },
    {
      year: "2024",
      event: "AI-Powered Learning",
      description: "Integrated cutting-edge technology in education",
    },
  ];

  return (
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
              🎯 About EduTech Academy
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                Empowering Minds,
              </span>
              <br />
              <span className="text-foreground">Shaping Futures</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Since 2015, we've been dedicated to providing exceptional
              education that transforms students into confident, successful
              learners ready to conquer any challenge.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    EduTech Academy was born from a simple yet powerful vision:
                    to make quality education accessible to every student,
                    regardless of their background or learning style.
                  </p>
                  <p>
                    What started as a small coaching center with just 3 tutors
                    has grown into a comprehensive educational platform serving
                    over 500 students across multiple subjects and grade levels.
                  </p>
                  <p>
                    Our commitment to innovation, personalized learning, and
                    student success has made us a trusted name in education,
                    with a 95% success rate and countless success stories.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">
                    500+
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    Happy Students
                  </div>
                </div>
                <div className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">
                    95%
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    Success Rate
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
                <img
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop&crop=center"
                  alt="About EduTech Academy - Modern classroom with students learning"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card border rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-sm">
                    Best Coaching Center 2021
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/20 rounded-full flex items-center justify-center mb-4 border border-primary/20">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  To provide personalized, high-quality education that empowers
                  students to achieve their academic goals and develop critical
                  thinking skills for lifelong success.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/20 rounded-full flex items-center justify-center mb-4 border border-primary/20">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  To be the leading educational institution that transforms
                  learning through innovation, technology, and personalized
                  attention, creating confident and capable future leaders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A timeline of our growth, achievements, and commitment to
              educational excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Central line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/40 to-primary/20 rounded-full shadow-sm"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center group ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Left side content for even indexes */}
                  {index % 2 === 0 && (
                    <div className="w-5/12 text-right pr-8">
                      <div className="space-y-2">
                        <div className="flex items-center justify-end space-x-3">
                          <Badge variant="secondary">{milestone.event}</Badge>
                          <span className="text-sm font-medium text-primary">
                            {milestone.year}
                          </span>
                        </div>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Center timeline marker */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black font-extrabold group-hover:scale-110 transition-transform border-2 border-primary/50 shadow-lg">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>

                  {/* Right side content for odd indexes */}
                  {index % 2 === 1 && (
                    <div className="w-5/12 text-left pl-8">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-medium text-primary">
                            {milestone.year}
                          </span>
                          <Badge variant="secondary">{milestone.event}</Badge>
                        </div>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals committed to your academic success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card to-card/50"
              >
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="relative mx-auto w-32 h-32">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-4 border-primary/20 group-hover:border-primary/40 transition-colors"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-2">
                      <Award className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <Badge variant="secondary">{member.subject}</Badge>
                    <p className="text-sm text-muted-foreground">
                      {member.qualification}
                    </p>
                    <p className="text-sm font-medium">
                      {member.experience} Experience
                    </p>

                    <div className="flex items-center justify-center space-x-1 pt-2">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        {member.rating}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
