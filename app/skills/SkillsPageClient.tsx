"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Code, Database, Cloud, Shield, Award, Calendar, Briefcase } from "lucide-react"
import Link from "next/link"
import { SkillDetailModal } from "@/components/skill-detail-modal"
import { useState } from "react"

export default function SkillsPageClient() {
  const skillCategories = [
    {
      title: "Android Development",
      icon: Smartphone,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      skills: [
        {
          name: "Kotlin",
          description: "Primary language for Android development",
          experience: "2+ years",
          projects: ["LunarLens", "SnapScape", "TuneUp"],
          level: "Expert",
        },
        {
          name: "Jetpack Compose",
          description: "Modern UI toolkit for native Android",
          experience: "1+ years",
          projects: ["All recent projects"],
          level: "Advanced",
        },
        {
          name: "MVVM Architecture",
          description: "Clean architecture patterns",
          experience: "2+ years",
          projects: ["LunarLens", "SnapScape"],
          level: "Expert",
        },
        {
          name: "Firebase",
          description: "Backend-as-a-Service platform",
          experience: "1+ years",
          projects: ["TuneUp", "Gemini Chatbot"],
          level: "Advanced",
        },
        {
          name: "Retrofit",
          description: "HTTP client for API integration",
          experience: "2+ years",
          projects: ["LunarLens", "SnapScape", "TuneUp"],
          level: "Expert",
        },
        {
          name: "Coroutines",
          description: "Asynchronous programming in Kotlin",
          experience: "1+ years",
          projects: ["All projects"],
          level: "Advanced",
        },
      ],
    },
    {
      title: "Cloud & AI",
      icon: Cloud,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      skills: [
        {
          name: "AWS Cloud",
          description: "Cloud architecture and services",
          experience: "Certified",
          projects: ["Learning projects"],
          level: "Certified",
        },
        {
          name: "Azure AI",
          description: "Microsoft AI services",
          experience: "Certified",
          projects: ["AI experiments"],
          level: "Certified",
        },
        {
          name: "Google AI",
          description: "Google AI and ML services",
          experience: "Certified",
          projects: ["Gemini Chatbot"],
          level: "Certified",
        },
        {
          name: "Gemini SDK",
          description: "Google's conversational AI",
          experience: "6+ months",
          projects: ["Gemini Chatbot"],
          level: "Intermediate",
        },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: Code,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      skills: [
        {
          name: "Git & GitHub",
          description: "Version control and collaboration",
          experience: "2+ years",
          projects: ["All projects"],
          level: "Expert",
        },
        {
          name: "Android Studio",
          description: "Primary development environment",
          experience: "2+ years",
          projects: ["All projects"],
          level: "Expert",
        },
        {
          name: "Material Design",
          description: "Google's design system",
          experience: "2+ years",
          projects: ["All projects"],
          level: "Advanced",
        },
        {
          name: "APIs Integration",
          description: "NASA, Unsplash, Saavn APIs",
          experience: "1+ years",
          projects: ["LunarLens", "SnapScape", "TuneUp"],
          level: "Advanced",
        },
      ],
    },
  ]

  const certifications = [
    {
      title: "Azure AI Fundamentals",
      issuer: "Microsoft",
      year: "2024",
      icon: Shield,
      link: "https://www.credly.com/badges/9f5b6f13-e252-4f94-9465-f5aa94cb59f4/linked_in_profile",
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "AWS Academy Cloud Architecting",
      issuer: "Amazon Web Services",
      year: "2024",
      icon: Cloud,
      link: "https://www.credly.com/badges/a1e2be4d-36d6-4864-837e-3f43316290c3/linked_in_profile",
      color: "bg-orange-100 text-orange-800",
    },
    {
      title: "Google AI for Everyone",
      issuer: "Google",
      year: "2024",
      icon: Code,
      link: "https://courses.edx.org/certificates/7f040e2dbfa34463bf86ac5a74a8743d",
      color: "bg-green-100 text-green-800",
    },
    {
      title: "IBM Deep Learning",
      issuer: "IBM",
      year: "2024",
      icon: Database,
      link: "https://courses.edx.org/certificates/e8ad89f5e2244b708a6ef7dc35bcd11e",
      status: "Ongoing",
      color: "bg-purple-100 text-purple-800",
    },
  ]

  const techStack = [
    { name: "Kotlin", icon: "🎯", category: "Language" },
    { name: "Jetpack Compose", icon: "🚀", category: "UI" },
    { name: "MVVM", icon: "🏗️", category: "Architecture" },
    { name: "Firebase", icon: "🔥", category: "Backend" },
    { name: "Retrofit", icon: "🌐", category: "Network" },
    { name: "Coroutines", icon: "⚡", category: "Async" },
    { name: "Dagger Hilt", icon: "💉", category: "DI" },
    { name: "Paging 3", icon: "📄", category: "Data" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "Azure AI", icon: "🤖", category: "AI" },
    { name: "Git", icon: "📝", category: "Tools" },
    { name: "Material Design", icon: "🎨", category: "Design" },
  ]

  const [selectedSkill, setSelectedSkill] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSkillClick = (skill: any) => {
    setSelectedSkill(skill)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedSkill(null)
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-green-100 text-green-800 border-green-200"
      case "Advanced":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Certified":
        return "bg-purple-100 text-purple-800 border-purple-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "Expert":
        return "⭐⭐⭐"
      case "Advanced":
        return "⭐⭐"
      case "Intermediate":
        return "⭐"
      case "Certified":
        return "🏆"
      default:
        return ""
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Header />

      <main className="container px-4 md:px-6 py-12">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            My journey as an
            <span className="block text-gray-600">Android developer</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm passionate about building impactful mobile applications and continuously learning new technologies.
            Here's what I've mastered and what I'm currently exploring in my development journey.
          </p>
        </div>

        {/* My Story */}
        <div className="mb-16 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">About My Journey</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed">
              I'm Shubham Kumar Bind, a passionate Android Developer and Computer Science student with a strong drive
              for building impactful mobile applications. Over the years, I've built several projects ranging from
              photography platforms to AI-driven chatbots and music streaming apps.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              I thrive in fast-paced learning environments, love solving real-world problems, and continuously challenge
              myself with new technologies like cloud computing and AI. Currently upskilling in system design and
              scalable architectures to become a well-rounded software engineer.
            </p>
          </div>
        </div>

        {/* Tech Stack Cloud */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Technologies I Work With</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur rounded-full px-4 py-2 border border-white/20 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg">{tech.icon}</span>
                  <span className="font-medium text-gray-900">{tech.name}</span>
                  <Badge variant="secondary" className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    {tech.category}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Skills with Better Design */}
        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur border-white/30 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`h-1 bg-gradient-to-r ${category.color}`}></div>
              <CardHeader className={`${category.bgColor} border-b border-white/50`}>
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-white/80 ${category.iconColor}`}>
                    <category.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{category.title}</div>
                    <div className="text-sm text-gray-600 font-normal">
                      Core competencies in {category.title.toLowerCase()}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                    onClick={() => handleSkillClick(skill)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-gray-900">{skill.name}</span>
                          <span className="text-sm">{getLevelIcon(skill.level)}</span>
                        </div>
                        <Badge className={`text-xs border ${getLevelColor(skill.level)}`}>{skill.level}</Badge>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        <Calendar className="h-3 w-3" />
                        {skill.experience}
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{skill.description}</p>

                    <div className="flex items-center gap-1 text-xs">
                      <Briefcase className="h-3 w-3 text-gray-400" />
                      <span className="text-gray-500">
                        <span className="font-medium">Used in:</span> {skill.projects.join(", ")}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications with Colors */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Certifications & Learning</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-white/70 backdrop-blur border-white/20 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="relative">
                    <cert.icon className="h-12 w-12 mx-auto text-gray-700 mb-4" />
                    <Badge className={`absolute -top-2 -right-2 ${cert.color}`}>{cert.year}</Badge>
                  </div>
                  <CardTitle className="text-lg">{cert.title}</CardTitle>
                  <CardDescription>
                    {cert.issuer}
                    {cert.status && (
                      <Badge variant="outline" className="ml-2 text-xs">
                        {cert.status}
                      </Badge>
                    )}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    <Award className="h-3 w-3" />
                    View Certificate
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <SkillDetailModal skill={selectedSkill} isOpen={isModalOpen} onClose={handleCloseModal} />
      </main>

      <Footer />
    </div>
  )
}
