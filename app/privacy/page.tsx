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
            <div className="mx-auto max-w-4xl space-y-8">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Privacy Policy</h1>
                <p className="text-gray-500 dark:text-gray-400">Last updated: June 10, 2025</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">1. Introduction</h2>
                <p>
                  Sapients ("we," "us," or "our") is committed to protecting your privacy and ensuring transparency
                  about how we collect, use, and protect your personal information. This Privacy Policy explains our
                  practices regarding the collection, use, and disclosure of information when you use our mobile
                  application and related services (collectively, the "Service").
                </p>
                <p>
                  By using our Service, you agree to the collection and use of information in accordance with this
                  Privacy Policy. We will not use or share your information with anyone except as described in this
                  Privacy Policy.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">2. Information We Collect</h2>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">2.1 Personal Information</h3>
                  <p>
                    When you create an account or use our Service, we may collect the following personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Account Information:</strong> Email address, display name, and password
                    </li>
                    <li>
                      <strong>Profile Information:</strong> Any additional information you choose to provide in your
                      profile
                    </li>
                    <li>
                      <strong>Communication Data:</strong> Information you provide when contacting our support team
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">2.2 Usage and Behavioral Data</h3>
                  <p>We automatically collect information about how you use our Service:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Content Interaction:</strong> Episodes you listen to, duration of listening sessions,
                      playback preferences
                    </li>
                    <li>
                      <strong>Highlights:</strong> Text highlights you create within episodes, which are stored in our
                      backend solely for synchronization across your devices and to optimize device memory usage
                    </li>
                    <li>
                      <strong>Progress Tracking:</strong> Your listening progress, completed episodes, and learning
                      milestones
                    </li>
                    <li>
                      <strong>App Usage:</strong> Features used, time spent in the app, navigation patterns
                    </li>
                    <li>
                      <strong>Search and Discovery:</strong> Search queries, content recommendations viewed and selected
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">2.3 Technical Information</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Device Information:</strong> Device type, operating system, app version, device
                      identifiers
                    </li>
                    <li>
                      <strong>Network Information:</strong> IP address, internet service provider, connection type
                    </li>
                    <li>
                      <strong>Performance Data:</strong> App crashes, performance metrics, error logs
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">2.4 Subscription and Payment Information</h3>
                  <p>
                    Payment processing is handled by Apple through the App Store. We receive limited information about
                    your subscription status but do not have access to your payment card details or other financial
                    information.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">3. How We Use Your Information</h2>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">3.1 Service Provision and Improvement</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Provide, maintain, and improve our Service and features</li>
                    <li>Personalize your experience and provide content recommendations</li>
                    <li>Sync your progress, highlights, and preferences across devices</li>
                    <li>Analyze usage patterns to enhance user experience and develop new features</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">3.2 Communication and Support</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Send important service-related notifications and updates</li>
                    <li>Communicate about new features, content, and promotional offers (with your consent)</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">3.3 Security and Legal Compliance</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Protect against fraud, abuse, and security threats</li>
                    <li>Enforce our Terms of Service and other policies</li>
                    <li>Comply with legal obligations and respond to legal requests</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">4. Legal Basis for Processing (GDPR)</h2>
                <p>
                  If you are located in the European Economic Area (EEA), our legal basis for processing your personal
                  information includes:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>
                    <strong>Contract Performance:</strong> Processing necessary to provide our Service
                  </li>
                  <li>
                    <strong>Legitimate Interests:</strong> Improving our Service, security, and analytics
                  </li>
                  <li>
                    <strong>Consent:</strong> Marketing communications and optional features
                  </li>
                  <li>
                    <strong>Legal Obligation:</strong> Compliance with applicable laws
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">5. Information Sharing and Disclosure</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your
                  information in the following limited circumstances:
                </p>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">5.1 Service Providers</h3>
                  <p>We work with trusted third-party service providers who assist us in operating our Service:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Supabase:</strong> Backend infrastructure and database services
                    </li>
                    <li>
                      <strong>Cloud Storage Providers:</strong> Content delivery and storage
                    </li>
                    <li>
                      <strong>Analytics Services:</strong> App performance and usage analytics
                    </li>
                    <li>
                      <strong>Customer Support Tools:</strong> Help desk and communication services
                    </li>
                  </ul>
                  <p>
                    These providers are contractually bound to protect your information and use it only for the
                    specified purposes.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">5.2 Legal Requirements</h3>
                  <p>We may disclose your information if required by law or in response to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Legal process, court orders, or government requests</li>
                    <li>Protecting our rights, property, or safety, or that of our users</li>
                    <li>Investigating potential violations of our Terms of Service</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">5.3 Business Transfers</h3>
                  <p>
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred as
                    part of the transaction. We will notify you of any such change and any choices you may have.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">6. Data Retention</h2>
                <p>We retain your personal information for as long as necessary to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Provide our Service and maintain your account</li>
                  <li>Comply with legal obligations and resolve disputes</li>
                  <li>Enforce our agreements and protect our legitimate interests</li>
                </ul>
                <p>
                  When you delete your account, we will delete or anonymize your personal information within 30 days,
                  except where we are required to retain it for legal purposes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">7. Data Security</h2>
                <p>We implement industry-standard security measures to protect your personal information, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and monitoring</li>
                  <li>Access controls and authentication measures</li>
                  <li>Secure data centers and infrastructure</li>
                </ul>
                <p>
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we
                  strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">8. Your Rights and Choices</h2>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">8.1 Account Management</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Access:</strong> View and update your account information within the app
                    </li>
                    <li>
                      <strong>Correction:</strong> Update inaccurate or incomplete information
                    </li>
                    <li>
                      <strong>Deletion:</strong> Delete your account and associated data
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">8.2 Privacy Controls</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Data Export:</strong> Request a copy of your personal data
                    </li>
                    <li>
                      <strong>Marketing Opt-out:</strong> Unsubscribe from promotional communications
                    </li>
                    <li>
                      <strong>Analytics Opt-out:</strong> Limit data collection for analytics purposes
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">8.3 Regional Rights</h3>
                  <p>If you are located in certain jurisdictions, you may have additional rights:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>GDPR (EU/EEA):</strong> Right to portability, restriction of processing, and objection
                    </li>
                    <li>
                      <strong>CCPA (California):</strong> Right to know, delete, and opt-out of sale of personal
                      information
                    </li>
                  </ul>
                </div>

                <p>To exercise any of these rights, please contact us at pratikbhyan24@gmail.com.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">9. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your own. We ensure that
                  such transfers comply with applicable data protection laws and implement appropriate safeguards to
                  protect your information.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">10. Children's Privacy</h2>
                <p>
                  Our Service is not intended for children under 13 years of age. We do not knowingly collect personal
                  information from children under 13. If you are a parent or guardian and believe your child has
                  provided us with personal information, please contact us, and we will take steps to remove such
                  information.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">11. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or applicable
                  laws. We will notify you of any material changes by:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Posting the updated policy in our app</li>
                  <li>Sending you an email notification (if you have provided your email)</li>
                  <li>Displaying a prominent notice in our app</li>
                </ul>
                <p>
                  Your continued use of our Service after such changes constitutes acceptance of the updated Privacy
                  Policy.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">12. Contact Us</h2>
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                  please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>Email:</strong> pratikbhyan24@gmail.com
                  </p>
                  <p>
                    <strong>Subject Line:</strong> Privacy Policy Inquiry
                  </p>
                </div>
                <p>We will respond to your inquiry within 30 days of receipt.</p>
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
