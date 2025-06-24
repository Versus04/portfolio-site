import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Shubham Kumar Bind - Android Developer | Crafting Scalable Android Experiences",
  description:
    "Passionate Android Developer and Computer Science student specializing in Kotlin, Jetpack Compose, and scalable mobile applications. Building impactful apps with modern Android technologies.",
  keywords:
    "Android developer, Kotlin, Jetpack Compose, MVVM, Firebase, mobile app development, Computer Science student",
  openGraph: {
    title: "Shubham Kumar Bind - Android Developer",
    description: "Passionate Android Developer crafting scalable mobile experiences with modern technologies",
    type: "website",
    url: "https://shubhambind.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Kumar Bind - Android Developer",
    description: "Passionate Android Developer crafting scalable mobile experiences with modern technologies",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="container relative px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Currently available for new opportunities
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Hey, I'm Shubham 👋
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-muted-foreground mt-2">
                    Crafting Scalable Android Experiences
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  I'm a passionate Android Developer and Computer Science student with a strong drive for building
                  impactful mobile applications. I love solving real-world problems and continuously challenge myself
                  with new technologies like cloud computing and AI.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                  <Link href="/projects" className="flex items-center">
                    See my work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300">
                  <Link href="/contact" className="flex items-center">
                    Let's connect
                    <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <Link
                  href="https://github.com/Versus04"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/shubham-bind-607404248/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <span className="text-sm text-muted-foreground">shubhambind2004@gmail.com</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <Image
                  src="/images/hero-image.jpg"
                  alt="Beautiful campus view with blue sky and modern architecture"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-xl object-cover w-full h-[600px]"
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-medium">Building something amazing...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Quick Facts */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">4+</div>
              <div className="text-gray-600">Projects Built</div>
              <div className="text-sm text-gray-500 mt-1">From AI chatbots to music apps</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">4</div>
              <div className="text-gray-600">Certifications</div>
              <div className="text-sm text-gray-500 mt-1">AWS, Azure AI, Google AI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">∞</div>
              <div className="text-gray-600">Learning mindset</div>
              <div className="text-sm text-gray-500 mt-1">Always exploring new tech</div>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Working With */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold">What I'm working with these days</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I love staying current with the Android ecosystem and exploring cloud & AI technologies. Here are the
              tools and technologies I'm most excited about right now.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Kotlin", love: "❤️" },
              { name: "Jetpack Compose", love: "🚀" },
              { name: "MVVM", love: "🏗️" },
              { name: "Firebase", love: "🔥" },
              { name: "Retrofit", love: "🌐" },
              { name: "Coroutines", love: "⚡" },
              { name: "Dagger Hilt", love: "💉" },
              { name: "Paging 3", love: "📄" },
              { name: "AWS Cloud", love: "☁️" },
              { name: "Azure AI", love: "🤖" },
              { name: "Git", love: "📝" },
              { name: "Material Design", love: "🎨" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="text-2xl mb-1">{tech.love}</div>
                <div className="font-medium text-sm text-gray-900">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
