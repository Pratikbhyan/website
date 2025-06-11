import Link from "next/link"
import { Button } from "@/components/ui/button"
import AppPreview from "@/components/app-preview"
import AppShowcase from "@/components/app-showcase"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">Sapients</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/support" className="text-sm font-medium hover:underline underline-offset-4">
              Support
            </Link>
            <Link href="/privacy" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="https://apps.apple.com/app/sapients" target="_blank" rel="noopener noreferrer">
              <Button>Download on App Store</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover Daily Wisdom with Sapients
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Explore philosophy, psychology, and mindfulness through beautifully crafted daily audio episodes.
                    Transform your understanding of yourself and the world.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="https://apps.apple.com/app/sapients" target="_blank" rel="noopener noreferrer">
                    <Button size="lg">Download on App Store</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <AppPreview />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <AppShowcase />
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-2 py-6 px-4 md:flex-row md:items-center md:gap-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Sapients. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/privacy" className="text-xs hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs hover:underline underline-offset-4">
              Terms of Use
            </Link>
            <Link href="/support" className="text-xs hover:underline underline-offset-4">
              Support
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
