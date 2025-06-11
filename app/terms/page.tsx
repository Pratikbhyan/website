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
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Terms of Service</h1>
                <p className="text-gray-500 dark:text-gray-400">Last updated: June 10, 2025</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">1. Agreement to Terms</h2>
                <p>
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and Sapients
                  ("we," "us," or "our") regarding your use of the Sapients mobile application and related services
                  (collectively, the "Service").
                </p>
                <p>
                  By downloading, installing, accessing, or using our Service, you agree to be bound by these Terms. If
                  you do not agree to these Terms, you may not access or use our Service.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">2. Description of Service</h2>
                <p>
                  Sapients is a digital platform that provides curated philosophy, psychology, and mindfulness content
                  through:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Daily audio episodes featuring philosophical insights and practical wisdom</li>
                  <li>Written transcripts and supplementary materials</li>
                  <li>Personalized content recommendations and progress tracking</li>
                  <li>Community features and content collections</li>
                  <li>Premium subscription services with enhanced features</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">3. Eligibility and Account Registration</h2>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">3.1 Eligibility</h3>
                  <p>
                    You must be at least 13 years old to use our Service. If you are under 18, you represent that you
                    have your parent's or guardian's permission to use the Service.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">3.2 Account Registration</h3>
                  <p>To access certain features, you must create an account. You agree to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Keep your login credentials secure and confidential</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized access or security breach</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">4. Subscription Services and Billing</h2>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">4.1 Subscription Plans</h3>
                  <p>
                    We offer various subscription plans that provide access to premium content and features.
                    Subscription details, including pricing, billing cycles, and included features, are displayed within
                    the app and may vary by region.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">4.2 Payment and Billing</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Subscriptions are processed through the Apple App Store</li>
                    <li>Payment will be charged to your Apple ID account upon purchase confirmation</li>
                    <li>
                      Subscriptions automatically renew unless cancelled at least 24 hours before the current period
                      ends
                    </li>
                    <li>
                      Your account will be charged for renewal within 24 hours prior to the end of the current period
                    </li>
                    <li>Subscription prices may change with 30 days' notice</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">4.3 Free Trials</h3>
                  <p>
                    We may offer free trial periods for new subscribers. If you do not cancel before the trial ends, you
                    will be automatically charged for the subscription. You may cancel at any time during the trial
                    period without charge.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">4.4 Cancellation and Refunds</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>You can cancel your subscription through your Apple ID account settings</li>
                    <li>Cancellation takes effect at the end of the current billing period</li>
                    <li>No refunds are provided for partial subscription periods</li>
                    <li>Refund requests must be made through Apple's App Store refund process</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">5. Acceptable Use Policy</h2>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">5.1 Permitted Use</h3>
                  <p>You may use our Service for personal, non-commercial purposes in accordance with these Terms.</p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">5.2 Prohibited Activities</h3>
                  <p>You agree not to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Use the Service for any unlawful purpose or in violation of applicable laws</li>
                    <li>Share your account credentials or allow others to access your account</li>
                    <li>Attempt to circumvent any security measures or access restrictions</li>
                    <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
                    <li>Copy, distribute, or create derivative works from our content without permission</li>
                    <li>Use automated systems (bots, scrapers) to access the Service</li>
                    <li>Interfere with or disrupt the Service's functionality or infrastructure</li>
                    <li>Upload or transmit harmful code, viruses, or malicious software</li>
                    <li>Engage in any activity that could damage our reputation or business</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">6. Intellectual Property Rights</h2>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">6.1 Our Content</h3>
                  <p>
                    All content provided through our Service, including but not limited to audio recordings, text,
                    graphics, logos, images, software, and user interfaces, is owned by Sapients or our licensors and is
                    protected by copyright, trademark, and other intellectual property laws.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">6.2 Limited License</h3>
                  <p>
                    We grant you a limited, non-exclusive, non-transferable, revocable license to access and use our
                    content solely for your personal, non-commercial use in accordance with these Terms.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">6.3 User-Generated Content</h3>
                  <p>
                    Any content you create or share through our Service (such as favorites, notes, or feedback) remains
                    your property, but you grant us a worldwide, royalty-free license to use, modify, and display such
                    content in connection with operating and improving our Service.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">7. Privacy and Data Protection</h2>
                <p>
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
                  information. By using our Service, you consent to our data practices as described in our Privacy
                  Policy.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">8. Service Availability and Modifications</h2>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">8.1 Service Availability</h3>
                  <p>
                    We strive to provide continuous access to our Service, but we do not guarantee uninterrupted
                    availability. The Service may be temporarily unavailable due to maintenance, updates, or technical
                    issues.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">8.2 Service Modifications</h3>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any aspect of our Service at any time, with
                    or without notice. We may also add, remove, or modify features, content, or subscription plans.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">9. Disclaimers and Limitations</h2>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">9.1 Educational Purpose</h3>
                  <p>
                    Our content is provided for educational and informational purposes only. It should not be considered
                    professional advice, therapy, or treatment for any medical or psychological condition.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">9.2 Service Disclaimer</h3>
                  <p>
                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR
                    IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, FITNESS FOR A
                    PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">9.3 Limitation of Liability</h3>
                  <p>
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, SAPIENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                    SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR
                    USE, ARISING FROM YOUR USE OF THE SERVICE.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">10. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Sapients and its officers, directors, employees, and
                  agents from any claims, damages, losses, or expenses arising from your use of the Service or violation
                  of these Terms.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">11. Termination</h2>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">11.1 Termination by You</h3>
                  <p>
                    You may terminate your account at any time by deleting the app and canceling any active
                    subscriptions.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">11.2 Termination by Us</h3>
                  <p>
                    We may suspend or terminate your access to the Service at any time, with or without cause or notice,
                    including for violation of these Terms.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">11.3 Effect of Termination</h3>
                  <p>
                    Upon termination, your right to use the Service ceases immediately. Provisions that by their nature
                    should survive termination will remain in effect.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">12. Dispute Resolution</h2>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">12.1 Informal Resolution</h3>
                  <p>
                    Before pursuing formal dispute resolution, please contact us at pratikbhyan24@gmail.com to attempt
                    to resolve the issue informally.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">12.2 Governing Law</h3>
                  <p>
                    These Terms are governed by and construed in accordance with applicable laws, without regard to
                    conflict of law principles.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">13. Changes to Terms</h2>
                <p>
                  We may modify these Terms at any time. We will notify you of material changes by posting the updated
                  Terms in our app or by other means. Your continued use of the Service after such changes constitutes
                  acceptance of the new Terms.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">14. General Provisions</h2>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">14.1 Entire Agreement</h3>
                  <p>
                    These Terms, together with our Privacy Policy, constitute the entire agreement between you and
                    Sapients.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">14.2 Severability</h3>
                  <p>
                    If any provision of these Terms is found to be unenforceable, the remaining provisions will remain
                    in full force and effect.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">14.3 Assignment</h3>
                  <p>
                    You may not assign or transfer these Terms without our written consent. We may assign these Terms
                    without restriction.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">15. Contact Information</h2>
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>Email:</strong> pratikbhyan24@gmail.com
                  </p>
                  <p>
                    <strong>Subject Line:</strong> Terms of Service Inquiry
                  </p>
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
              Terms of Service
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
