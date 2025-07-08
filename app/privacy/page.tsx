// app/privacy/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "introduction", title: "Introduction", icon: "📝" },
    { id: "information-collection", title: "Information We Collect", icon: "📊" },
    { id: "information-use", title: "How We Use Information", icon: "🔄" },
    { id: "information-sharing", title: "Information Sharing", icon: "🤝" },
    { id: "data-security", title: "Data Security", icon: "🔒" },
    { id: "cookies", title: "Cookies & Tracking", icon: "🍪" },
    { id: "your-rights", title: "Your Privacy Rights", icon: "⚖️" },
    { id: "data-retention", title: "Data Retention", icon: "📅" },
    { id: "children", title: "Children's Privacy", icon: "👶" },
    { id: "updates", title: "Policy Updates", icon: "🔄" },
    { id: "contact", title: "Contact Us", icon: "📞" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-blue-50">
      {/* Header */}
      <nav className="w-full max-w-6xl mx-auto flex justify-between items-center py-6 px-4">
        <Link href="/main" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="HotDrop Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-gray-800">HotDrop</span>
        </Link>
        <Link 
          href="/main" 
          className="text-red-500 hover:text-red-600 font-medium transition-colors"
        >
          ← Back to Home
        </Link>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-8 md:p-12 text-white">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              🔒 Privacy Policy
            </motion.h1>
            
            <motion.p 
              className="text-xl text-center opacity-90 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Your privacy matters to us. Learn how we protect and handle your data.
            </motion.p>

            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-lg opacity-80">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Table of Contents */}
            <div className="lg:w-1/3 bg-gray-50 p-6 border-r border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Table of Contents</h3>
              <nav className="space-y-2">
                {sections.map((section, index) => (
                  <motion.a
                    key={section.id}
                    href={`#${section.id}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.05 }}
                    className={`flex items-center p-3 rounded-lg transition-all ${
                      activeSection === section.id
                        ? 'bg-red-100 text-red-600 border-l-4 border-red-500'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                    }`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    <span className="text-lg mr-3">{section.icon}</span>
                    <span className="text-sm font-medium">{section.title}</span>
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:w-2/3 p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="prose prose-lg max-w-none"
              >
                {/* Section 1: Introduction */}
                <section id="introduction" className="mb-12 scroll-mt-4">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">📝</span>
                    <h2 className="text-2xl font-bold text-gray-800 m-0">1. Introduction</h2>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <p className="text-gray-700 leading-relaxed m-0">
                      Welcome to HotDrop! We are committed to protecting your privacy and ensuring 
                      the security of your personal information. This Privacy Policy explains how we 
                      collect, use, disclose, and safeguard your information when you use our food 
                      ordering and delivery platform, including our website, mobile application, and 
                      related services (collectively, the "Services").
                    </p>
                    <div className="mt-4 p-4 bg-white rounded-lg border-l-4 border-blue-500">
                      <p className="text-sm text-gray-600 m-0">
                        <strong>Important:</strong> By using our Services, you consent to the collection 
                        and use of your information as described in this Privacy Policy.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 2: Information Collection */}
                <section id="information-collection" className="mb-12 scroll-mt-4">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">📊</span>
                    <h2 className="text-2xl font-bold text-gray-800 m-0">2. Information We Collect</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-green-600 mb-3">👤 Personal Information</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Full name and contact details</li>
                          <li>• Email address and phone number</li>
                          <li>• Delivery addresses</li>
                          <li>• Profile photos and preferences</li>
                          <li>• Payment information (securely processed)</li>
                        </ul>
                      </div>
                      
                      <div className="bg-purple-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-purple-600 mb-3">📱 Usage Information</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Order history and preferences</li>
                          <li>• Search queries and browsing behavior</li>
                          <li>• App interactions and feature usage</li>
                          <li>• Device information and location data</li>
                          <li>• Customer support interactions</li>
                        </ul>
                      </div>
                      
                      <div className="bg-orange-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-orange-600 mb-3">🌐 Technical Data</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• IP address and browser type</li>
                          <li>• Operating system and device ID</li>
                          <li>• Access times and session duration</li>
                          <li>• Cookies and tracking technologies</li>
                          <li>• Performance and error logs</li>
                        </ul>
                      </div>
                      
                      <div className="bg-red-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-red-600 mb-3">📍 Location Data</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• GPS coordinates (with permission)</li>
                          <li>• Delivery addresses</li>
                          <li>• Approximate location from IP</li>
                          <li>• Geofencing data for delivery zones</li>
                          <li>• Location-based restaurant suggestions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3: Information Use */}
                <section id="information-use" className="mb-12 scroll-mt-4">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🔄</span>
                    <h2 className="text-2xl font-bold text-gray-800 m-0">3. How We Use Your Information</h2>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-4">We use your information to:</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-yellow-600 mb-2">Core Services:</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>✓ Process and fulfill your food orders</li>
                          <li>✓ Manage your account and preferences</li>
                          <li>✓ Facilitate payments and transactions</li>
                          <li>✓ Provide customer support and assistance</li>
                          <li>✓ Send order updates and notifications</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-yellow-600 mb-2">Enhancement & Marketing:</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>✓ Personalize your experience</li>
                          <li>✓ Recommend restaurants and dishes</li>
                          <li>✓ Send promotional offers (with consent)</li>
                          <li>✓ Analyze usage patterns for improvements</li>
                          <li>✓ Ensure platform security and safety</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 4: Information Sharing */}
                <section id="information-sharing" className="mb-12 scroll-mt-4">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🤝</span>
                    <h2 className="text-2xl font-bold text-gray-800 m-0">4. Information Sharing</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                      <h4 className="font-semibold text-red-600 mb-3">🛡️ We Never Sell Your Data</h4>
                      <p className="text-gray-700 text-sm">
                        HotDrop does not sell, rent, or trade your personal information to third parties 
                        for their marketing purposes.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-blue-600 mb-3">Authorized Sharing Partners:</h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <h6 className="font-medium mb-2">🍽️ Restaurant Partners</h6>
                          <p className="text-gray-600">Order details necessary for food preparation and delivery</p>
                        </div>
                        <div>
                          <h6 className="font-medium mb-2">🚚 Delivery Partners</h6>
                          <p className="text-gray-600">Contact and location information for order delivery</p>
                        </div>
                        <div>
                          <h6 className="font-medium mb-2">💳 Payment Processors</h6>
                          <p className="text-gray-600">Secure payment processing (we don't store card details)</p>
                        </div>
                        <div>
                          <h6 className="font-medium mb-2">📊 Analytics Services</h6>
                          <p className="text-gray-600">Anonymized data for platform improvement</p>
                        </div>
                        <div>
                          <h6 className="font-medium mb-2">☁️ Cloud Services</h6>
                          <p className="text-gray-600">Secure data storage and processing (Firebase, AWS)</p>
                        </div>
                        <div>
                          <h6 className="font-medium mb-2">⚖️ Legal Compliance</h6>
                          <p className="text-gray-600">When required by law or legal process</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 5: Data Security */}
                <section id="data-security" className="mb-12 scroll-mt-4">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🔒</span>
                    <h2 className="text-2xl font-bold text-gray-800 m-0">5. Data Security</h2>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-green-600 mb-4">🛡️ Security Measures:</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h6 className="font-semibold text-gray-800 mb-2">Technical Safeguards:</h6>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• SSL/TLS encryption for data transmission</li>
                          <li>• AES-256 encryption for stored data</li>
                          <li>• Regular security audits and updates</li>
                          <li>• Multi-factor authentication</li>
                          <li>• Secure cloud infrastructure</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-semibold text-gray-800 mb-2">Operational Security:</h6>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Limited access to personal data</li>
                          <li>• Employee privacy training</li>
                          <li>• Data breach response procedures</li>
                          <li>• Regular backup and recovery testing</li>
                          <li>• Third-party security assessments</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-white rounded-lg border-l-4 border-green-500">
                      <p className="text-sm text-gray-600 m-0">
                        <strong>Note:</strong> While we implement industry-standard security measures, 
                        no method of transmission over the internet is 100% secure. We cannot guarantee 
                        absolute security but commit to promptly addressing any security incidents.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 6: Cookies & Tracking */}
                <section id="cookies" className="mb-12 scroll-mt-4">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🍪</span>
                    <h2 className="text-2xl font-bold text-gray-800 m-0">6. Cookies & Tracking Technologies</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-orange-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-orange-600 mb-3">Types of Cookies We Use:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-white p-4 rounded-lg">
                          <h6 className="font-semibold text-gray-800 mb-2">🔧 Essential Cookies</h6>
                          <p className="text-gray-600">Required for basic functionality, login, and security</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h6 className="font-semibold text-gray-800 mb-2">📊 Analytics Cookies</h6>
                          <p className="text-gray-600">Help us understand how you use our platform</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h6 className="font-semibold text-gray-800 mb-2">🎯 Preference Cookies</h6>
                          <p className="text-gray-600">Remember your settings and preferences</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h6 className="font-semibold text-gray-800 mb-2">📢 Marketing Cookies</h6>
                          <p className="text-gray-600">Deliver relevant ads and measure campaign effectiveness</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-blue-600 mb-3">Cookie Management:</h4>
                      <p className="text-gray-700 mb-3">
                        You can control cookies through your browser settings. However, disabling certain 
                        cookies may limit functionality.
                      </p>
                      <Link 
                        href="/cookies" 
                        className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm"
                      >
                        🔧 Manage Cookie Preferences
                      </Link>
                    </div>
                  </div>
                </section>

                {/* Section 7: Your Rights */}
                <section id="your-rights" className="mb-12 scroll-mt-4">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">⚖️</span>
                    <h2 className="text-2xl font-bold text-gray-800 m-0">7. Your Privacy Rights</h2>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-purple-600 mb-4">🔑 You Have the Right To:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div className="bg-white p-4 rounded-lg">
                          <h6 className="font-semibold text-gray-800 mb-1">📋 Access Your Data</h6>
                          <p className="text-sm text-gray-600">Request a copy of the personal information we hold about you</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h6 className="font-semibold text-gray-800 mb-1">✏️ Correct Information</h6>
                          <p className="text-sm text-gray-600">Update or correct inaccurate personal information</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h6 className="font-semibold text-gray-800 mb-1">🗑️ Delete Your Data</h6>
                          <p className="text-sm text-gray-600">Request deletion of your personal information</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-white p-4 rounded-lg">
                          <h6 className="font-semibold text-gray-800 mb-1">📤 Data Portability</h6>
                          <p className="text-sm text-gray-600">Receive your data in a structured, machine-readable format</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h6 className="font-semibold text-gray-800 mb-1">🚫 Opt-Out</h6>
                          <p className="text-sm text-gray-600">Unsubscribe from marketing communications</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h6 className="font-semibold text-gray-800 mb-1">⏸️ Restrict Processing</h6>
                          <p className="text-sm text-gray-600">Limit how we use your personal information</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <a
                        href="mailto:privacy@hotdrop.com"
                        className="inline-flex items-center bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition"
                      >
                        📧 Exercise Your Rights
                      </a>
                    </div>
                  </div>
                </section>

                {/* Section 8: Data Retention */}
                <section id="data-retention" className="mb-12 scroll-mt-4">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">📅</span>
                    <h2 className="text-2xl font-bold text-gray-800 m-0">8. Data Retention</h2>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-3">Retention Periods:</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="bg-white p-4 rounded-lg">
                        <h6 className="font-medium text-gray-800 mb-2">👤 Account Information</h6>
                        <p className="text-gray-600">Retained while your account is active, plus 2 years after closure</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h6 className="font-medium text-gray-800 mb-2">🛒 Order History</h6>
                        <p className="text-gray-600">Kept for 5 years for accounting and legal compliance</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <h6 className="font-medium text-gray-800 mb-2">📊 Analytics Data</h6>
                        <p className="text-gray-600">Anonymized and retained for 2 years for insights</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 9: Children's Privacy */}
                <section id="children" className="mb-12 scroll-mt-4">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">👶</span>
                    <h2 className="text-2xl font-bold text-gray-800 m-0">9. Children's Privacy</h2>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-yellow-600 mb-3">Age Restrictions:</h4>
                    <p className="text-gray-700 mb-3">
                      HotDrop is not intended for children under 13 years of age. We do not knowingly 
                      collect personal information from children under 13. If you are a parent or guardian 
                      and believe your child has provided us with personal information, please contact us.
                    </p>
                    <p className="text-gray-700">
                      Users between 13-18 years old should have parental consent before using our Services.
                    </p>
                  </div>
                </section>

                {/* Section 10: Policy Updates */}
                <section id="updates" className="mb-12 scroll-mt-4">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🔄</span>
                    <h2 className="text-2xl font-bold text-gray-800 m-0">10. Policy Updates</h2>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <p className="text-gray-700 mb-4">
                      We may update this Privacy Policy periodically to reflect changes in our practices, 
                      technology, legal requirements, or other factors. We will notify you of any material 
                      changes through:
                    </p>
                    <ul className="text-gray-700 space-y-2 mb-4">
                      <li>• Email notification to your registered address</li>
                      <li>• Prominent notice on our website and app</li>
                      <li>• In-app notifications for significant changes</li>
                    </ul>
                    <p className="text-gray-700">
                      Your continued use of our Services after any changes constitutes acceptance of the 
                      updated Privacy Policy.
                    </p>
                  </div>
                </section>

                {/* Section 11: Contact */}
                <section id="contact" className="mb-8 scroll-mt-4">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">📞</span>
                    <h2 className="text-2xl font-bold text-gray-800 m-0">11. Contact Us</h2>
                  </div>
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-xl text-white">
                    <h4 className="font-semibold mb-4">Questions about your privacy?</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl mb-2">📧</div>
                        <p className="font-medium">Privacy Team</p>
                        <p className="opacity-90">privacy@hotdrop.com</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">📞</div>
                        <p className="font-medium">Support Line</p>
                        <p className="opacity-90">+1 (555) 123-4567</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">📍</div>
                        <p className="font-medium">Address</p>
                        <p className="opacity-90">Privacy Officer, HotDrop Inc.</p>
                      </div>
                    </div>
                  </div>
                </section>
              </motion.div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="bg-gray-50 p-8 text-center border-t border-gray-200">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <p className="text-gray-600 mb-6">
                By using HotDrop, you acknowledge that you have read and understand this Privacy Policy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/main"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-full hover:from-red-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </Link>
                <Link
                  href="/help"
                  className="inline-flex items-center px-8 py-3 bg-white text-red-500 border-2 border-red-500 font-medium rounded-full hover:bg-red-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  💬 Need Help?
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
