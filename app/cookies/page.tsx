"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function CookiesPage() {
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
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            🍪 Cookie Policy
          </motion.h1>
          
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-600 text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-red-500 w-3 h-3 rounded-full mr-3"></span>
                What Are Cookies?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences, 
                keeping you logged in, and understanding how you use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-500 w-3 h-3 rounded-full mr-3"></span>
                How We Use Cookies
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">🔐 Essential Cookies</h3>
                  <p className="text-gray-600">
                    These cookies are necessary for the website to function properly. They enable core 
                    functionality such as security, network management, and accessibility.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">📊 Analytics Cookies</h3>
                  <p className="text-gray-600">
                    We use these cookies to understand how visitors interact with our website, 
                    helping us improve our service and user experience.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">🎯 Functional Cookies</h3>
                  <p className="text-gray-600">
                    These cookies remember your preferences and settings to provide you with 
                    a personalized experience, such as your cart contents and login status.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-yellow-500 w-3 h-3 rounded-full mr-3"></span>
                Types of Cookies We Use
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-200 p-3 text-left font-semibold">Cookie Type</th>
                      <th className="border border-gray-200 p-3 text-left font-semibold">Purpose</th>
                      <th className="border border-gray-200 p-3 text-left font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-3">Authentication</td>
                      <td className="border border-gray-200 p-3">Keep you logged in</td>
                      <td className="border border-gray-200 p-3">Session/Persistent</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3">Shopping Cart</td>
                      <td className="border border-gray-200 p-3">Remember your cart items</td>
                      <td className="border border-gray-200 p-3">Until checkout</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-200 p-3">Preferences</td>
                      <td className="border border-gray-200 p-3">Remember your settings</td>
                      <td className="border border-gray-200 p-3">1 year</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-200 p-3">Analytics</td>
                      <td className="border border-gray-200 p-3">Understand usage patterns</td>
                      <td className="border border-gray-200 p-3">2 years</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-green-500 w-3 h-3 rounded-full mr-3"></span>
                Managing Your Cookies
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  You have the right to control how cookies are used on your device. Here's how you can manage them:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Browser Settings:</strong> You can configure your browser to block or delete cookies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Opt-out Links:</strong> Use third-party opt-out tools for analytics cookies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span><strong>Account Settings:</strong> Manage preferences through your HotDrop account</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-purple-500 w-3 h-3 rounded-full mr-3"></span>
                Third-Party Cookies
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Some cookies on our site are set by third-party services we use to enhance your experience:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">🔥 Firebase Authentication</h3>
                  <p className="text-gray-600 text-sm">
                    Manages user authentication and session management
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">📈 Analytics Services</h3>
                  <p className="text-gray-600 text-sm">
                    Helps us understand how users interact with our platform
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-red-500 w-3 h-3 rounded-full mr-3"></span>
                Your Rights
              </h2>
              <div className="bg-red-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  You have the following rights regarding cookies:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✓</span>
                    <span>The right to be informed about cookie usage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✓</span>
                    <span>The right to consent to or refuse cookies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✓</span>
                    <span>The right to withdraw consent at any time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✓</span>
                    <span>The right to access and control your cookie preferences</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-orange-500 w-3 h-3 rounded-full mr-3"></span>
                Contact Us
              </h2>
              <div className="bg-orange-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  If you have any questions about our cookie policy or how we use cookies, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> mebotchess@gamil.com</p>
                  <p><strong>Phone:</strong> +91 9322902827</p>
                  <p><strong>Address:</strong> 315B, BH-# ,LPU</p>
                </div>
              </div>
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-8"
          >
            <Link
              href="/main"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-full hover:from-red-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
