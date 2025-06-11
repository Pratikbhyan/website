import Link from "next/link"

export default function SupportPage() {
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
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Support</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We're here to help you with any questions or issues you may have.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <h2 className="text-2xl font-bold">Contact Us</h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    If you need assistance with our app, please reach out to us using one of the methods below.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold">Email Support</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      For general inquiries and support:{" "}
                      <a href="mailto:pratikbhyan24@gmail.com" className="underline">
                        pratikbhyan24@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold">Response Time</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      We aim to respond to all support requests within 24-48 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                </div>
                <div className="grid gap-4">
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold">How do I access daily episodes?</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      New episodes are automatically available each day. Simply open the app to see the latest content.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold">Can I listen offline?</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Episodes can be downloaded for offline listening. Look for the download option in each episode.
                    </p>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-lg font-bold">How do I manage my subscription?</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      You can manage your subscription through your App Store account settings or contact our support
                      team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
