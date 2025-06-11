import Link from "next/link"

export default function PrivacyPage() {
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
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Privacy Policy</h1>
                <p className="text-gray-500 dark:text-gray-400">Last updated: June 10, 2025</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">1. Introduction</h2>
                <p>
                  Welcome to Sapients! We are committed to protecting your privacy and ensuring that your personal
                  information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect,
                  use, and protect your information when you use our services.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">2. Information We Collect</h2>
                <p>We collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <b>Personal Information:</b> This includes your name, email address, contact number, and any other
                    information you provide when you register or use our services.
                  </li>
                  <li>
                    <b>Usage Data:</b> We collect information about how you use our services, such as the pages you
                    visit, the features you use, and the time spent on our platform.
                  </li>
                  <li>
                    <b>Device Information:</b> We collect information about the device you use to access our services,
                    including the device type, operating system, and hardware settings.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>
                <p>We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <b>To Provide Services:</b> To deliver and maintain our services, including personalizing your
                    experience and providing customer support.
                  </li>
                  <li>
                    <b>To Improve Services:</b> To analyze usage data and feedback to improve our services and develop
                    new features.
                  </li>
                  <li>
                    <b>To Communicate:</b> To send you updates, newsletters, and promotional materials. You can opt-out
                    of these communications at any time.
                  </li>
                  <li>
                    <b>To Ensure Security:</b> To protect our services and users from fraud, abuse, and other harmful
                    activities.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">4. Sharing of Information</h2>
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <b>Service Providers:</b> Third-party vendors who assist us in providing our services, such as
                    hosting providers, analytics providers, and customer support providers.
                  </li>
                  <li>
                    <b>Legal Authorities:</b> When required by law, such as to comply with a subpoena or other legal
                    process.
                  </li>
                  <li>
                    <b>Business Transfers:</b> In connection with a merger, acquisition, or sale of all or a portion of
                    our assets.
                  </li>
                </ul>
                <p>We will not sell your personal information to third parties.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">5. Data Security</h2>
                <p>
                  We take reasonable measures to protect your information from unauthorized access, use, or disclosure.
                  These measures include encryption, firewalls, and regular security audits. However, no method of
                  transmission over the internet or electronic storage is completely secure, so we cannot guarantee
                  absolute security.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">6. Your Rights</h2>
                <p>You have the following rights regarding your personal information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <b>Access:</b> You can request access to the personal information we hold about you.
                  </li>
                  <li>
                    <b>Correction:</b> You can request that we correct any inaccurate or incomplete information.
                  </li>
                  <li>
                    <b>Deletion:</b> You can request that we delete your personal information, subject to certain
                    exceptions.
                  </li>
                  <li>
                    <b>Opt-Out:</b> You can opt-out of receiving promotional communications from us.
                  </li>
                </ul>
                <p>To exercise these rights, please contact us at the email address provided below.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">7. Changes to this Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes by
                  posting the new policy on our website and updating the effective date.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">8. Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
                <p>Email: pratikbhyan24@gmail.com</p>
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
