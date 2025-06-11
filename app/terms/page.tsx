import Link from "next/link"

export default function TermsPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Terms of Use</h1>
                <p className="text-gray-500 dark:text-gray-400">Last updated: June 10, 2025</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
                <p>
                  By downloading, installing, or using the Sapients mobile application ("App"), you agree to be bound by
                  these Terms of Use ("Terms"). If you do not agree to these Terms, please do not use the App.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">2. Description of Service</h2>
                <p>
                  Sapients is a mobile application that provides daily philosophy, psychology, and mindfulness content
                  through audio episodes and written materials. The App offers both free and premium subscription-based
                  content.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">3. User Accounts</h2>
                <p>To access certain features of the App, you may be required to create an account. You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and update your account information</li>
                  <li>Keep your login credentials secure and confidential</li>
                  <li>Be responsible for all activities that occur under your account</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">4. Subscription and Payment</h2>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">4.1 Subscription Plans</h3>
                  <p>
                    The App offers subscription plans that provide access to premium content. Subscription details,
                    including pricing and billing cycles, are displayed within the App.
                  </p>

                  <h3 className="text-lg font-semibold">4.2 Payment</h3>
                  <p>
                    Subscriptions are processed through the Apple App Store. Payment will be charged to your Apple ID
                    account upon confirmation of purchase. Subscriptions automatically renew unless auto-renewal is
                    turned off at least 24 hours before the end of the current period.
                  </p>

                  <h3 className="text-lg font-semibold">4.3 Cancellation</h3>
                  <p>
                    You can cancel your subscription at any time through your Apple ID account settings. Cancellation
                    will take effect at the end of the current billing period.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">5. Acceptable Use</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the App for any unlawful purpose or in violation of these Terms</li>
                  <li>Attempt to gain unauthorized access to the App or its systems</li>
                  <li>Reverse engineer, decompile, or disassemble the App</li>
                  <li>Share your account credentials with others</li>
                  <li>Use the App to distribute harmful, offensive, or inappropriate content</li>
                  <li>Interfere with or disrupt the App's functionality</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">6. Intellectual Property</h2>
                <p>
                  The App and all content, including but not limited to text, audio, graphics, logos, and software, are
                  owned by Sapients or its licensors and are protected by copyright, trademark, and other intellectual
                  property laws. You may not reproduce, distribute, or create derivative works from our content without
                  explicit permission.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">7. Privacy</h2>
                <p>
                  Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use,
                  and protect your information when you use the App.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">8. Disclaimers</h2>
                <p>
                  The App is provided "as is" and "as available" without warranties of any kind. We do not guarantee
                  that the App will be uninterrupted, error-free, or free of harmful components. The content provided is
                  for educational and informational purposes only and should not be considered professional advice.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">9. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Sapients shall not be liable for any indirect, incidental,
                  special, consequential, or punitive damages, including but not limited to loss of profits, data, or
                  use, arising from your use of the App.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">10. Termination</h2>
                <p>
                  We may terminate or suspend your access to the App at any time, with or without cause or notice. Upon
                  termination, your right to use the App will cease immediately, and you must delete the App from your
                  device.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">11. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. We will notify you of any material changes by
                  posting the updated Terms within the App or by other means. Your continued use of the App after such
                  changes constitutes acceptance of the new Terms.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">12. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction where
                  Sapients is based, without regard to conflict of law principles.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">13. Contact Information</h2>
                <p>If you have any questions about these Terms of Use, please contact us at:</p>
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
