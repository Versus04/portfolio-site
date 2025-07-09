import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Telescope, Camera, MessageCircle, Music } from "lucide-react"
import Link from "next/link"
import { Health } from "path-to-icons"
export const metadata = {
  title: "Projects - Shubham Kumar Bind | Android App Portfolio",
  description:
    "Explore my portfolio of Android applications including LunarLens astronomy app, SnapScape photography platform, Gemini Chatbot, and TuneUp music streaming app.",
  keywords: "Android projects, Kotlin apps, Jetpack Compose, MVVM, NASA API, Unsplash API, Gemini SDK, music streaming",
}

export default function ProjectsPage() {
  const projects = [
    {
  title: "CareCircle – Medication Accountability App",
  year: "2025",
  description:
    "An Android app to ensure medication adherence with an accountability partner system. Sends real-time alerts to caregivers when doses are missed, improving patient safety and peace of mind.",
  technologies: ["Kotlin", "Jetpack Compose", "MVVM", "AWS Cognito", "DynamoDB", "Lambda", "API Gateway", "SNS"],
  features: ["Medication Reminders", "Accountability Alerts", "Secure Auth", "Offline Notification Scheduling"],
  githubUrl: "https://github.com/Versus04",
  status: "In Progress",
  icon: Health,
  gradient: "from-blue-500 to-cyan-600",
},
{
  title: "SplitShare – Advanced Group Expense Tracker",
  year: "2025",
  description:
    "An expense splitting app with customizable splits, group management, real-time sync, and debt simplification using a graph-based algorithm. Ideal for roommates and travel groups.",
  technologies: ["Kotlin", "Jetpack Compose", "MVVM", "AWS Cognito", "DynamoDB", "Lambda", "AppSync", "S3"],
  features: ["Group Expense Tracking", "Debt Simplification", "Custom Split Rules", "Real-Time Sync", "Receipt Uploads"],
  githubUrl: "https://github.com/Versus04",
  status: "In Progress",
  icon: Wallet,
  gradient: "from-purple-500 to-indigo-600",
},

    {
      title: "LunarLens",
      year: "2025",
      description:
        "An astronomy-focused Android app providing access to NASA's APIs like APOD, Mars Rover, and NASA Image Search. Built with MVVM, Kotlin Flows, and Coroutines using Jetpack Compose for an intuitive UI.",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Retrofit", "NASA API"],
      features: ["NASA APOD Integration", "Mars Rover Photos", "Image Search", "Offline Caching"],
      githubUrl: "https://github.com/Versus04",
      status: "Live",
      icon: Telescope,
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      title: "SnapScape",
      year: "2024",
      description:
        "A photography exploration app using the Unsplash API, featuring infinite scrolling, modern UI patterns, and Paging 3 integration. Built with MVVM, Jetpack Compose, and Coil for image loading.",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Paging 3", "Retrofit", "Coil"],
      features: ["Infinite Scrolling", "High-Quality Images", "Search Functionality", "Modern UI"],
      githubUrl: "https://github.com/Versus04",
      status: "Live",
      icon: Camera,
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Gemini Chatbot",
      year: "2024",
      description:
        "An AI-powered chatbot leveraging the Gemini SDK to deliver real-time conversational responses. Built with Jetpack Compose and Material Theming for a smooth chat experience.",
      technologies: ["Kotlin", "Jetpack Compose", "Gemini SDK", "Material Theming"],
      features: ["Real-time Chat", "AI Responses", "Material Design", "Smooth UX"],
      githubUrl: "https://github.com/Versus04",
      status: "Live",
      icon: MessageCircle,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "TuneUp Music App",
      year: "2024",
      description:
        "A music streaming Android app integrating the Saavn music API for real-time search and playback. Features modern UI, MVVM architecture, and optimized performance with Kotlin Flows.",
      technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Retrofit", "Saavn API"],
      features: ["Music Streaming", "Real-time Search", "Playlist Management", "Optimized Performance"],
      githubUrl: "https://github.com/Versus04",
      status: "Live",
      icon: Music,
      gradient: "from-pink-500 to-rose-600",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-800"
      case "In Development":
        return "bg-blue-100 text-blue-800"
      case "Coming Soon":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Header />

      <main className="container px-4 md:px-6 py-12">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Things I've built
            <span className="block text-gray-600">and learned from</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each project represents a journey of learning and growth. From astronomy apps to AI chatbots, here are some
            of my favorite projects that showcase my passion for Android development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white/70 backdrop-blur border-white/20 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <project.icon className="h-16 w-16 text-white" />
                </div>
                <Badge className={`absolute top-2 right-2 ${getStatusColor(project.status)}`}>{project.status}</Badge>
                <div className="absolute top-2 left-2 bg-black/20 backdrop-blur rounded px-2 py-1">
                  <span className="text-white text-sm font-medium">{project.year}</span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <span>{project.title}</span>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technologies */}
                <div>
                  <h4 className="font-medium text-sm mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-medium text-sm mb-2">Key Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-1 h-1 bg-green-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-green-600 to-blue-600">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gray-50 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">Want to build something together?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm always excited about new projects and love collaborating with passionate people. Whether you have a
            clear vision or just an idea, I'd love to hear about it and help bring it to life.
          </p>
          <Button size="lg" className="bg-black text-white hover:bg-gray-800">
            <Link href="/contact">Let's talk about your project</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}
