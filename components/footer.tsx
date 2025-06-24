import Link from "next/link"
import { Github, Linkedin, Mail, Coffee } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-gray-900 font-bold text-lg">S</span>
              </div>
              <div>
                <div className="font-bold text-lg">Shubham Kumar Bind</div>
                <div className="text-gray-400 text-sm">Android Developer</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Thanks for stopping by! I'm always excited to connect with fellow developers, potential collaborators, or
              anyone who wants to chat about Android development and technology.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-200">Quick Links</h3>
            <div className="space-y-3 text-sm">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/skills" className="block text-gray-400 hover:text-white transition-colors">
                My Skills
              </Link>
              <Link href="/projects" className="block text-gray-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-200">What I Do</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <div>📱 Native Android Apps</div>
              <div>🤖 AI Integration</div>
              <div>☁️ Cloud Solutions</div>
              <div>🎨 Modern UI/UX</div>
              <div>💬 Technical Consulting</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-200">Let's Connect</h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Link
                  href="https://github.com/Versus04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/shubham-bind-607404248/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:shubhambind2004@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
              <div className="text-sm text-gray-400">
                <div>📧 shubhambind2004@gmail.com</div>
                <div className="flex items-center gap-1 mt-1">
                  <Coffee className="h-3 w-3" />
                  Always up for a coffee chat!
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Shubham Kumar Bind. Built with Next.js, Tailwind CSS, and lots of passion ❤️
          </p>
          <p className="text-xs text-gray-500 mt-2">
            This site is open source - feel free to check out the code or suggest improvements!
          </p>
        </div>
      </div>
    </footer>
  )
}
