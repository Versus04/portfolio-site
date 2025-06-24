"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Send, CheckCircle, Github, Linkedin, Coffee } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        projectType: "",
      })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "shubhambind2004@gmail.com",
      description: "Send me an email anytime",
      link: "mailto:shubhambind2004@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      description: "Available for remote work worldwide",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      value: "@Versus04",
      link: "https://github.com/Versus04",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Shubham Bind",
      link: "https://www.linkedin.com/in/shubham-bind-607404248/",
    },
  ]

  const projectTypes = [
    "New Android App Development",
    "Existing App Enhancement",
    "App Maintenance & Support",
    "Code Review & Consultation",
    "UI/UX Design & Development",
    "Performance Optimization",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Header />

      <main className="container px-4 md:px-6 py-12">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let's build something
            <span className="block text-gray-600">amazing together</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I love connecting with fellow developers, potential collaborators, and anyone passionate about technology.
            Whether you have a project idea, want to discuss Android development, or just want to say hi - I'm all ears!
            I typically respond within a few hours.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white/70 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Here are the best ways to reach me</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <info.icon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">{info.title}</h3>
                      {info.link ? (
                        <Link
                          href={info.link}
                          className="text-sm font-medium text-green-600 hover:text-green-700"
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {info.value}
                        </Link>
                      ) : (
                        <p className="text-sm font-medium text-green-600">{info.value}</p>
                      )}
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle>Let's connect</CardTitle>
                <CardDescription>Find me on these platforms - I love connecting with the community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <social.icon className="h-5 w-5 text-gray-600" />
                    <div>
                      <div className="font-medium text-sm">{social.title}</div>
                      <div className="text-sm text-gray-600">{social.value}</div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/70 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  Tell me about your project, ask a question, or just say hello. I love hearing from people who are
                  passionate about building great things. What's on your mind?
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Thanks for reaching out! 🎉</h3>
                    <p className="text-gray-600">
                      I've received your message and I'm excited to connect with you. I'll get back to you soon -
                      usually within a few hours, but definitely within 24 hours. Looking forward to our conversation!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type</Label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief description of your project"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="I'd love to hear about your project! Tell me about your ideas, timeline, any specific requirements, or just what's exciting you about it right now..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer>
        <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <div className="flex items-center">
            <Link href="/" className="mr-2 flex items-center font-semibold">
              {/* Replace with your logo or text */}
              <span className="text-xl">Shubham Bind</span>
            </Link>
            <span className="text-sm text-gray-400">© 2024</span>
          </div>
          <div className="text-sm text-gray-400">
            <div>📧 shubhambind2004@gmail.com</div>
            <div className="flex items-center gap-1 mt-1">
              <Coffee className="h-3 w-3" />
              Always up for a coffee chat!
            </div>
          </div>
        </div>
      </Footer>
    </div>
  )
}
