"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  BookOpen,
  Award,
  Edit,
  Save,
  X,
  ArrowLeft,
  Camera,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function StudentInfoPage() {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    bio: "",
    dateOfBirth: "",
    emergencyContact: "",
    emergencyPhone: "",
  });
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      if (parsedUser.isAuthenticated) {
        setUser(parsedUser);
        // Initialize edit form with user data
        setEditForm({
          name: parsedUser.name || "",
          email: parsedUser.email || "",
          phone: parsedUser.phone || "",
          address:
            parsedUser.address || "123 Student Street, Learning City, LC 12345",
          bio:
            parsedUser.bio ||
            "Passionate learner focused on academic excellence and personal growth.",
          dateOfBirth: parsedUser.dateOfBirth || "1995-06-15",
          emergencyContact: parsedUser.emergencyContact || "Jane Doe (Mother)",
          emergencyPhone: parsedUser.emergencyPhone || "+1 (555) 987-6543",
        });
      } else {
        router.push("/auth");
      }
    } else {
      router.push("/auth");
    }
    setIsLoading(false);
  }, [router]);

  const handleSave = () => {
    // Update user data in localStorage
    const updatedUser = {
      ...user,
      ...editForm,
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset form to original data
    setEditForm({
      name: user.name || "",
      email: user.email || "",
      phone: user.phone || "",
      address: user.address || "123 Student Street, Learning City, LC 12345",
      bio:
        user.bio ||
        "Passionate learner focused on academic excellence and personal growth.",
      dateOfBirth: user.dateOfBirth || "1995-06-15",
      emergencyContact: user.emergencyContact || "Jane Doe (Mother)",
      emergencyPhone: user.emergencyPhone || "+1 (555) 987-6543",
    });
    setIsEditing(false);
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

  const studentStats = {
    enrolledCourses: 3,
    completedCourses: 1,
    totalHours: 127,
    averageGrade: "A-",
    attendance: 95,
    achievements: 8,
  };

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
              <h1 className="text-3xl font-bold mb-2">Student Information</h1>
              <p className="text-muted-foreground">
                Manage your personal information and academic profile
              </p>
            </div>
            {!isEditing && (
              <Button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2"
              >
                <Edit className="h-4 w-4" />
                Edit Profile
              </Button>
            )}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="border-0 bg-gradient-to-br from-card to-card/50">
              <CardHeader className="text-center pb-2">
                <div className="relative mx-auto mb-4">
                  <Avatar className="h-24 w-24 border-4 border-primary/20">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback className="text-2xl">
                      {(editForm.name || user.name || "S")
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button
                      size="icon"
                      className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <CardTitle className="text-xl">
                  {editForm.name || user.name}
                </CardTitle>
                <p className="text-muted-foreground">
                  Student ID: STD{user.email?.slice(0, 3).toUpperCase()}2024
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">
                      {studentStats.enrolledCourses}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Active Courses
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-green-600">
                      {studentStats.completedCourses}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Completed
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-blue-600">
                      {studentStats.totalHours}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Total Hours
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-purple-600">
                      {studentStats.averageGrade}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Avg Grade
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Attendance Rate</span>
                    <span className="text-sm font-bold text-green-600">
                      {studentStats.attendance}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all"
                      style={{ width: `${studentStats.attendance}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">
                    {studentStats.achievements} Achievements Earned
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Information Tabs */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="personal" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="academic">Academic</TabsTrigger>
                <TabsTrigger value="emergency">Emergency</TabsTrigger>
              </TabsList>

              {/* Personal Information */}
              <TabsContent value="personal">
                <Card className="border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Personal Information</CardTitle>
                    {isEditing && (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={handleSave}
                          className="flex items-center gap-2"
                        >
                          <Save className="h-4 w-4" />
                          Save
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handleCancel}
                          className="flex items-center gap-2"
                        >
                          <X className="h-4 w-4" />
                          Cancel
                        </Button>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        {isEditing ? (
                          <Input
                            id="name"
                            value={editForm.name}
                            onChange={(e) =>
                              setEditForm((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                          />
                        ) : (
                          <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span>{editForm.name || "Not provided"}</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        {isEditing ? (
                          <Input
                            id="email"
                            type="email"
                            value={editForm.email}
                            onChange={(e) =>
                              setEditForm((prev) => ({
                                ...prev,
                                email: e.target.value,
                              }))
                            }
                          />
                        ) : (
                          <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span>{editForm.email || "Not provided"}</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        {isEditing ? (
                          <Input
                            id="phone"
                            value={editForm.phone}
                            onChange={(e) =>
                              setEditForm((prev) => ({
                                ...prev,
                                phone: e.target.value,
                              }))
                            }
                          />
                        ) : (
                          <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>{editForm.phone || "Not provided"}</span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        {isEditing ? (
                          <Input
                            id="dob"
                            type="date"
                            value={editForm.dateOfBirth}
                            onChange={(e) =>
                              setEditForm((prev) => ({
                                ...prev,
                                dateOfBirth: e.target.value,
                              }))
                            }
                          />
                        ) : (
                          <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {editForm.dateOfBirth
                                ? new Date(
                                    editForm.dateOfBirth
                                  ).toLocaleDateString()
                                : "Not provided"}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      {isEditing ? (
                        <Textarea
                          id="address"
                          value={editForm.address}
                          onChange={(e) =>
                            setEditForm((prev) => ({
                              ...prev,
                              address: e.target.value,
                            }))
                          }
                          rows={2}
                        />
                      ) : (
                        <div className="flex items-start gap-2 p-2 bg-muted/50 rounded">
                          <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                          <span>{editForm.address || "Not provided"}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      {isEditing ? (
                        <Textarea
                          id="bio"
                          value={editForm.bio}
                          onChange={(e) =>
                            setEditForm((prev) => ({
                              ...prev,
                              bio: e.target.value,
                            }))
                          }
                          rows={3}
                          placeholder="Tell us about yourself..."
                        />
                      ) : (
                        <div className="p-2 bg-muted/50 rounded">
                          <span>{editForm.bio || "No bio provided"}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Academic Information */}
              <TabsContent value="academic">
                <Card className="border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader>
                    <CardTitle>Academic Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-3">
                        <h4 className="font-medium">Current Enrollment</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Student Status:</span>
                            <Badge className="bg-green-100 text-green-800">
                              Active
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Enrollment Date:</span>
                            <span className="text-sm">January 15, 2024</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Academic Year:</span>
                            <span className="text-sm">2024-2025</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-medium">Performance Metrics</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Overall GPA:</span>
                            <span className="text-sm font-medium">3.8/4.0</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Class Rank:</span>
                            <span className="text-sm font-medium">15/120</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Credits Earned:</span>
                            <span className="text-sm font-medium">45/120</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">Recent Achievements</h4>
                      <div className="grid gap-2 md:grid-cols-2">
                        <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                          <Award className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">
                            Dean's List - Spring 2024
                          </span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                          <Award className="h-4 w-4 text-blue-500" />
                          <span className="text-sm">Perfect Attendance</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                          <Award className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Math Excellence Award</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                          <Award className="h-4 w-4 text-purple-500" />
                          <span className="text-sm">Student Leader</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Emergency Contact */}
              <TabsContent value="emergency">
                <Card className="border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Emergency Contact Information</CardTitle>
                    {isEditing && (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={handleSave}
                          className="flex items-center gap-2"
                        >
                          <Save className="h-4 w-4" />
                          Save
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={handleCancel}
                          className="flex items-center gap-2"
                        >
                          <X className="h-4 w-4" />
                          Cancel
                        </Button>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="emergency-contact">
                          Emergency Contact Name
                        </Label>
                        {isEditing ? (
                          <Input
                            id="emergency-contact"
                            value={editForm.emergencyContact}
                            onChange={(e) =>
                              setEditForm((prev) => ({
                                ...prev,
                                emergencyContact: e.target.value,
                              }))
                            }
                            placeholder="Name and relationship"
                          />
                        ) : (
                          <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {editForm.emergencyContact || "Not provided"}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="emergency-phone">Emergency Phone</Label>
                        {isEditing ? (
                          <Input
                            id="emergency-phone"
                            value={editForm.emergencyPhone}
                            onChange={(e) =>
                              setEditForm((prev) => ({
                                ...prev,
                                emergencyPhone: e.target.value,
                              }))
                            }
                            placeholder="Emergency contact phone"
                          />
                        ) : (
                          <div className="flex items-center gap-2 p-2 bg-muted/50 rounded">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {editForm.emergencyPhone || "Not provided"}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        <strong>Important:</strong> Please ensure your emergency
                        contact information is always up to date. This
                        information will only be used in case of emergencies
                        during school hours or school-related activities.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
