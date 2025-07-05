"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ToastNotification } from "@/components/toast-notification"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, HeadphonesIcon, Globe } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setToastMessage("Thank you for your message! We'll get back to you within 24 hours.")
    setShowToast(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCall = () => {
    window.location.href = "tel:+15551234567"
  }

  const handleEmail = () => {
    window.location.href = "mailto:info@edutechacademy.com"
  }

  const handleChat = () => {
    setToastMessage("Live chat feature is still under development. Please use email or phone for immediate assistance.")
    setShowToast(true)
  }

  const handleDirections = () => {
    document.getElementById("map-section")?.scrollIntoView({ behavior: "smooth" })
  }

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      action: "Call Now",
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/20",
      onClick: handleCall,
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      contact: "info@edutechacademy.com",
      action: "Send Email",
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
      onClick: handleEmail,
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available 24/7",
      action: "Start Chat",
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
      onClick: handleChat,
    },
    {
      icon: Globe,
      title: "Visit Us",
      description: "Come to our campus",
      contact: "123 Education Street",
      action: "Get Directions",
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/20",
      onClick: handleDirections,
    },
  ]

  const faqs = [
    {
      question: "What are your class timings?",
      answer: "We offer flexible timings from 9 AM to 8 PM on weekdays and 10 AM to 6 PM on weekends.",
    },
    {
      question: "Do you provide online classes?",
      answer: "Yes, we offer both online and offline classes to suit your convenience.",
    },
    {
      question: "What is your fee structure?",
      answer: "Our fees vary by course and duration. Please contact us for detailed pricing information.",
    },
    {
      question: "Do you offer trial classes?",
      answer: "Yes, we provide free trial classes for all our courses. Contact us to schedule one.",
    },
  ]

  return (
    <>
      {showToast && <ToastNotification message={toastMessage} type="success" onClose={() => setShowToast(false)} />}

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />

          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                📞 Get In Touch
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Have questions about our courses or need guidance? We're here to help you on your educational journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">How Can We Help?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the best way to reach us and we'll respond as quickly as possible
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1 border-0 bg-gradient-to-br from-card to-card/50 text-center"
                >
                  <CardContent className="pt-8 space-y-4">
                    <div
                      className={`mx-auto w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <method.icon className={`h-8 w-8 ${method.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{method.description}</p>
                      <p className="font-medium mb-4">{method.contact}</p>
                      <Button variant="outline" className="hover:bg-primary/5 bg-transparent" onClick={method.onClick}>
                        {method.action}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
                  <p className="text-xl text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <Card className="border-0 bg-gradient-to-br from-card to-card/50">
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Name *</label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            className="bg-background/50"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Email *</label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            className="bg-background/50"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Subject *</label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                          className="bg-background/50"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">Message *</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us more about your inquiry..."
                          className="min-h-[120px] bg-background/50"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                      >
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info & FAQ */}
              <div className="space-y-8">
                {/* Contact Information */}
                <Card className="border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <HeadphonesIcon className="h-5 w-5 text-primary" />
                      <span>Contact Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                        <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Address</div>
                          <div className="text-muted-foreground">123 Education Street, Learning City, LC 12345</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                        <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Phone</div>
                          <div className="text-muted-foreground">+1 (555) 123-4567</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                        <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Email</div>
                          <div className="text-muted-foreground">info@edutechacademy.com</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                        <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-medium">Office Hours</div>
                          <div className="text-muted-foreground">
                            Mon - Fri: 9:00 AM - 8:00 PM
                            <br />
                            Sat - Sun: 10:00 AM - 6:00 PM
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ Section */}
                <Card className="border-0 bg-gradient-to-br from-card to-card/50">
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="font-medium text-sm">{faq.question}</h4>
                        <p className="text-sm text-muted-foreground">{faq.answer}</p>
                        {index < faqs.length - 1 && <div className="border-b border-border/40 pt-2" />}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="map-section" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Find Us</h2>
              <p className="text-xl text-muted-foreground">
                Visit our campus and experience our learning environment firsthand
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="rounded-lg overflow-hidden border shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="EduTech Academy Location"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
