import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://shubhambind.dev"),
  title: {
    default: "Shubham Kumar Bind - Professional Android Developer",
    template: "%s | Shubham Kumar Bind - Android Developer",
  },
  description:
    "Passionate Android Developer and Computer Science student specializing in Kotlin, Jetpack Compose, MVVM, Firebase, and modern Android technologies. Building impactful mobile applications.",
  keywords: [
    "Android developer",
    "Kotlin",
    "Jetpack Compose",
    "MVVM",
    "Firebase",
    "mobile app development",
    "Computer Science student",
    "AWS Cloud",
    "Azure AI",
    "NASA API",
    "Unsplash API",
    "Gemini SDK",
  ],
  authors: [{ name: "Shubham Kumar Bind" }],
  creator: "Shubham Kumar Bind",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shubhambind.dev",
    title: "Shubham Kumar Bind - Professional Android Developer",
    description: "Passionate Android Developer crafting scalable mobile experiences with modern technologies",
    siteName: "Shubham Kumar Bind - Android Developer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Kumar Bind - Android Developer",
    description: "Passionate Android Developer crafting scalable mobile experiences with modern technologies",
    creator: "@shubhambind",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://shubhambind.dev" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shubham Kumar Bind",
              jobTitle: "Android Developer",
              description:
                "Passionate Android Developer and Computer Science student specializing in mobile app development",
              url: "https://shubhambind.dev",
              sameAs: ["https://github.com/Versus04", "https://www.linkedin.com/in/shubham-bind-607404248/"],
              knowsAbout: [
                "Android Development",
                "Kotlin",
                "Jetpack Compose",
                "MVVM Architecture",
                "Firebase",
                "AWS Cloud",
                "Azure AI",
                "Mobile App Development",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
