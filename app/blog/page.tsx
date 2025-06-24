"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight, Code, Smartphone, Database, Zap, Palette } from "lucide-react"
import Link from "next/link"

// Blog post data
const blogPosts = [
  {
    title: "Mastering Jetpack Compose: Building Modern Android UIs",
    excerpt:
      "Learn how to leverage Jetpack Compose to create beautiful, performant user interfaces with less code and better maintainability.",
    slug: "mastering-jetpack-compose",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "UI Development",
    tags: ["Jetpack Compose", "UI", "Kotlin"],
    featured: true,
    icon: Smartphone,
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "Clean Architecture in Android: A Practical Guide",
    excerpt:
      "Implement clean architecture patterns in your Android apps for better testability, maintainability, and scalability.",
    slug: "clean-architecture-android",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Architecture",
    tags: ["Clean Architecture", "MVVM", "Best Practices"],
    icon: Code,
    gradient: "from-green-500 to-teal-600",
  },
  {
    title: "Firebase Integration: From Setup to Production",
    excerpt:
      "Complete guide to integrating Firebase services in your Android app, including authentication, database, and cloud messaging.",
    slug: "firebase-integration-guide",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Backend",
    tags: ["Firebase", "Authentication", "Database"],
    icon: Database,
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "Kotlin Coroutines: Simplifying Asynchronous Programming",
    excerpt:
      "Master Kotlin coroutines to handle asynchronous operations elegantly and avoid callback hell in your Android applications.",
    slug: "kotlin-coroutines-guide",
    date: "2023-12-28",
    readTime: "15 min read",
    category: "Programming",
    tags: ["Kotlin", "Coroutines", "Async Programming"],
    icon: Zap,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Android App Performance Optimization Techniques",
    excerpt:
      "Discover proven techniques to optimize your Android app's performance, reduce memory usage, and improve user experience.",
    slug: "android-performance-optimization",
    date: "2023-12-20",
    readTime: "11 min read",
    category: "Performance",
    tags: ["Performance", "Optimization", "Memory Management"],
    icon: Zap,
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    title: "Material Design 3: Implementing the Latest Design System",
    excerpt:
      "Learn how to implement Material Design 3 in your Android apps with dynamic colors, improved components, and modern aesthetics.",
    slug: "material-design-3-guide",
    date: "2023-12-15",
    readTime: "9 min read",
    category: "Design",
    tags: ["Material Design", "UI/UX", "Design System"],
    icon: Palette,
    gradient: "from-pink-500 to-rose-600",
  },
]

export default function BlogPage() {
  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState<string>("All Posts")

  // Get unique categories and count
  const categories = [
    { name: "All Posts", count: blogPosts.length },
    ...Array.from(new Set(blogPosts.map((post) => post.category))).map((category) => ({
      name: category,
      count: blogPosts.filter((post) => post.category === category).length,
    })),
  ]

  // Filter posts by selected category
  const filteredPosts =
    selectedCategory === "All Posts" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  // Featured posts (after filtering)
  const featuredPosts = filteredPosts.filter((post) => post.featured)

  // Regular posts (after filtering)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "UI Development": "bg-blue-100 text-blue-800",
      Architecture: "bg-green-100 text-green-800",
      Backend: "bg-purple-100 text-purple-800",
      Programming: "bg-orange-100 text-orange-800",
      Performance: "bg-red-100 text-red-800",
      Design: "bg-pink-100 text-pink-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Header />

      <main className="container px-4 md:px-6 py-12">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Things I've learned
            <span className="block text-gray-600">and want to share</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I love sharing what I learn along my Android development journey. Whether it's a cool new library I
            discovered, a tricky bug I solved, or just thoughts on the latest Android updates - you'll find it all here.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 backdrop-blur rounded-lg p-6 border border-white/20 sticky top-24">
              <h3 className="font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex justify-between items-center w-full text-left text-sm transition-colors ${
                      selectedCategory === category.name
                        ? "text-green-600 font-medium"
                        : "text-gray-600 hover:text-green-600"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span
                      className={`${
                        selectedCategory === category.name ? "bg-green-100" : "bg-gray-100"
                      } text-xs rounded-full px-2 py-0.5`}
                    >
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-4">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get notified when I publish new posts about Android development, tips, and insights.
                </p>
                <Button size="sm" className="w-full bg-black text-white hover:bg-gray-800">
                  Subscribe to Updates
                </Button>
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="lg:col-span-3">
            {/* Category title when filtered */}
            {selectedCategory !== "All Posts" && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold flex items-center">
                  <Badge className={`mr-2 ${getCategoryColor(selectedCategory)}`}>{selectedCategory}</Badge>
                  <span>Posts</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedCategory("All Posts")}
                    className="ml-4 text-sm text-gray-500"
                  >
                    Clear filter
                  </Button>
                </h2>
              </div>
            )}

            {/* No posts message */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12 bg-white/70 backdrop-blur rounded-lg border border-white/20">
                <h3 className="text-xl font-medium mb-2">No posts found</h3>
                <p className="text-gray-600 mb-4">There are no posts in this category yet.</p>
                <Button variant="outline" onClick={() => setSelectedCategory("All Posts")}>
                  View all posts
                </Button>
              </div>
            )}

            {/* Featured Post */}
            {featuredPosts.length > 0 && (
              <>
                {featuredPosts.map((post, index) => (
                  <Card key={index} className="mb-8 bg-white/70 backdrop-blur border-white/20 overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/2">
                        <div
                          className={`h-48 md:h-full bg-gradient-to-br ${post.gradient} flex items-center justify-center`}
                        >
                          <post.icon className="h-16 w-16 text-white" />
                        </div>
                      </div>
                      <div className="md:w-1/2 p-6">
                        <Badge className={`mb-3 ${getCategoryColor(post.category)}`}>
                          {post.featured ? "Featured" : post.category}
                        </Badge>
                        <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                        <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formatDate(post.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <Button variant="outline" className="bg-white/50">
                          <Link href={`/blog/${post.slug}`} className="flex items-center">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </>
            )}

            {/* Regular Posts Grid */}
            {regularPosts.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2">
                {regularPosts.map((post, index) => (
                  <Card
                    key={index}
                    className="bg-white/70 backdrop-blur border-white/20 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                      <post.icon className="h-12 w-12 text-white" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={getCategoryColor(post.category)}>{post.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                      <CardDescription>{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {formatDate(post.date)}
                        </div>
                        <Button size="sm" variant="ghost" className="text-green-600 hover:text-green-700">
                          <Link href={`/blog/${post.slug}`} className="flex items-center">
                            Read More
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {/* Load More */}
            {filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" className="bg-white/50 backdrop-blur">
                  Load More Articles
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
