// app/terms/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "acceptance", title: "Acceptance of Terms", icon: "📋" },
    { id: "service", title: "Service Description", icon: "🍽️" },
    { id: "accounts", title: "User Accounts", icon: "👤" },
    { id: "ordering", title: "Ordering & Payment", icon: "💳" },
    { id: "cancellation", title: "Cancellation & Refunds", icon: "↩️" },
    { id: "liability", title: "Limitation of Liability", icon: "⚖️" },
    { id: "privacy", title: "Privacy Policy", icon: "🔒" },
    { id: "changes", title: "Changes to Terms", icon: "📝" },
    { id: "contact", title: "Contact Information", icon: "📞" }
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
              📋 Terms & Conditions
            </motion.h1>
            
            <motion.p 
              className="text-xl text-center opacity-90 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Please read these terms carefully before using HotDrop services
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
                {/* Section 1: Acceptance of Terms */}
                <section id="acceptance" className="mb-12 scroll-mt-4">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">📋</span>
                    <h2 className="text-2xl font-bold text-gray-800 m-0">1. Acceptance of Terms</h2>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl">
                    <p className="text-gray-700 leading-relaxed m-0">
                      By accessing and using HotDrop's platform, mobile application, or any related services 
                      (collectively, the "Services"), you acknowledge that you have read, understood, and agree 
                      to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, 
                      please do not use our Services.
                    </p>
                  </div>
                </section>

                {/* Section 2: Service Description */}
                <section id="service" className="mb-12 scroll-mt-4">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-3">🍽️</span>
                    <h2 className="text-2xl font-bold text-gray-800 m-0">2. Service Description</h2>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      HotDrop operates as an online food ordering and delivery platform that connects users 
                      with local restaurants and food establishments. Our Services include:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-600 mb-2">🔍 Restaurant Discovery</h4>
                        <p className="text-gray-600 text-sm">Browse and search local restaurants and cuisines</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-600 mb-2">📱 Online Ordering</h4>
                        <p className="text-gray-600 text-sm">Place orders through our platform or mobile app</p>
                      </div>
                      {/* <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-600 mb-2">🚚 Delivery Service</h4>
                        <p className="text-gray-600 text-sm">Fast and reliable food delivery to your location</p>
                      </div> */}
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-600 mb-2">💳 Secure Payment</h4>
                        <p className="text-gray-600 text-sm">Safe and convenient payment processing</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3: User Accounts */}
                <section id="accounts" className="mb-12 scroll-mt-4">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">👤</span>
                    <h2 className="text-2xl font-bold text-gray-800 m-0">3. User Accounts</h2>
                  </div>
                  <div className="bg-yellow-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-3">Account Responsibilities:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2 mt-1">•</span>
                        <span>Provide accurate and complete registration information</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2 mt-1">•</span>
                        <span>Maintain the security and confidentiality of your account credentials</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2 mt-1">•</span>
                        <span>Accept responsibility for all activities under your account</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-2 mt-1">•</span>
                        <span>Notify us immediately of any unauthorized account access</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Section 4: Ordering & Payment */}
                <section id="ordering" className="mb-12 scroll-mt-4">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">💳</span>
                    <h2 className="text-2xl font-bold text-gray-800 m-0">4. Ordering & Payment</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-green-600 mb-3">Order Process:</h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-green-600 text-xl">1️⃣</span>
                          </div>
                          <p className="font-medium">Browse & Select</p>
                          <p className="text-gray-600">Choose items from restaurant menus</p>
                        </div>
                        <div className="text-center">
                          <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-green-600 text-xl">2️⃣</span>
                          </div>
                          <p className="font-medium">Review & Pay</p>
                          <p className="text-gray-600">Confirm order details and payment</p>
                        </div>
                        <div className="text-center">
                          <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                            <span className="text-green-600 text-xl">3️⃣</span>
                          </div>
                          <p className="font-medium">Track & Receive</p>
                          <p className="text-gray-600">Monitor delivery and enjoy your meal</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-blue-600 mb-3">Payment Terms:</h4>
                      <p className="text-gray-700 mb-3">
                        Payment is required at the time of order placement. We accept various payment methods 
                        including credit cards, debit cards, digital wallets, and other methods as available.
                      </p>
                      <p className="text-gray-700">
                        All prices are subject to change without notice. Additional fees may apply for delivery, 
                        service charges, and applicable taxes.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 5: Cancellation & Refunds */}
                <section id="cancellation" className="mb-12 scroll-mt-4">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">↩️</span>
                    <h2 className="text-2xl font-bold text-gray-800 m-0">5. Cancellation & Refunds</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-red-600 mb-3">Cancellation Policy:</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Orders may be cancelled within 2 minutes of placement</li>
                        <li>• Once preparation begins, cancellation may not be possible</li>
                        <li>• Restaurant policies may affect cancellation eligibility</li>
                        <li>• Customer support can assist with special circumstances</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-green-600 mb-3">Refund Process:</h4>
                      <p className="text-gray-700">
                        Refunds are processed according to our refund policy and typically take 3-7 business 
                        days to appear in your account. Refund eligibility depends on various factors including 
                        order status, restaurant policies, and specific circumstances.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 6: Limitation of Liability */}
                <section id="liability" className="mb-12 scroll-mt-4">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">⚖️</span>
                    <h2 className="text-2xl font-bold text-gray-800 m-0">6. Limitation of Liability</h2>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      HotDrop serves as a platform connecting customers with restaurants and shall not be liable for:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Service Limitations:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Food quality or safety issues</li>
                          <li>• Restaurant preparation delays</li>
                          <li>• Dietary restrictions or allergies</li>
                          <li>• Third-party delivery issues</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Damages Excluded:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Indirect or consequential damages</li>
                          <li>• Lost profits or business interruption</li>
                          <li>• Data loss or system downtime</li>
                          <li>• Personal injury claims</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 7: Privacy Policy */}
                <section id="privacy" className="mb-12 scroll-mt-4">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🔒</span>
                    <h2 className="text-2xl font-bold text-gray-800 m-0">7. Privacy Policy</h2>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Your privacy is important to us. Our Privacy Policy explains how we collect, use, and 
                      protect your personal information when you use our Services.
                    </p>
                    <div className="flex items-center justify-between bg-white p-4 rounded-lg">
                      <span className="text-gray-700">Read our complete Privacy Policy</span>
                      <Link 
                        href="/privacy" 
                        className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition text-sm"
                      >
                        View Policy
                      </Link>
                    </div>
                  </div>
                </section>

                {/* Section 8: Changes to Terms */}
                <section id="changes" className="mb-12 scroll-mt-4">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">📝</span>
                    <h2 className="text-2xl font-bold text-gray-800 m-0">8. Changes to Terms</h2>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <p className="text-gray-700 leading-relaxed">
                      We reserve the right to modify these Terms at any time. When we make changes, we will 
                      update the "Last Updated" date and notify users through our platform or email. 
                      Continued use of our Services after changes constitutes acceptance of the new Terms.
                    </p>
                  </div>
                </section>

                {/* Section 9: Contact Information */}
                <section id="contact" className="mb-8 scroll-mt-4">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">📞</span>
                    <h2 className="text-2xl font-bold text-gray-800 m-0">9. Contact Information</h2>
                  </div>
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-xl text-white">
                    <h4 className="font-semibold mb-4">Have questions about these Terms?</h4>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl mb-2">📧</div>
                        <p className="font-medium">Email Us</p>
                        <p className="opacity-90">legal@hotdrop.com</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">📞</div>
                        <p className="font-medium">Call Us</p>
                        <p className="opacity-90">+91 9322902827</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-2">💬</div>
                        <p className="font-medium">Live Chat</p>
                        <p className="opacity-90">Available 24/7</p>
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
                By using HotDrop, you acknowledge that you have read and agree to these Terms & Conditions.
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
