import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sapients - Daily Philosophy & Mindfulness",
  description:
    "Explore philosophy, psychology, and mindfulness through beautifully crafted daily audio episodes. Transform your understanding of yourself and the world.",
  keywords: "philosophy, mindfulness, psychology, audio, meditation, wisdom, daily episodes",
  authors: [{ name: "Sapients" }],
  openGraph: {
    title: "Sapients - Daily Philosophy & Mindfulness",
    description: "Explore philosophy, psychology, and mindfulness through beautifully crafted daily audio episodes.",
    type: "website",
    images: ["/images/app-screenshot-3.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sapients - Daily Philosophy & Mindfulness",
    description: "Explore philosophy, psychology, and mindfulness through beautifully crafted daily audio episodes.",
    images: ["/images/app-screenshot-3.jpg"],
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
