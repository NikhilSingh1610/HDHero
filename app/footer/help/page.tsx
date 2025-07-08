"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function HelpSupportPage() {
  const [activeTab, setActiveTab] = useState("faq");
  const [searchQuery, setSearchQuery] = useState("");

  const faqs = [
    {
      id: 1,
      question: "How do I place an order?",
      answer: "Simply browse our menu, add items to your cart, and proceed to checkout. You can pay securely online and track your order in real-time.",
      category: "ordering"
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, PayPal, and digital wallets like Apple Pay and Google Pay.",
      category: "payment"
    },
    {
      id: 3,
      question: "How long does delivery take?",
      answer: "Delivery typically takes 25-45 minutes depending on your location and the restaurant's preparation time. You'll receive real-time updates.",
      category: "delivery"
    },
    {
      id: 4,
      question: "Can I modify my order after placing it?",
      answer: "You can modify your order within 2 minutes of placing it. After that, please contact the restaurant directly through our app.",
      category: "ordering"
    },
    {
      id: 5,
      question: "What if my order is wrong or missing items?",
      answer: "Contact us immediately through the app or call our support line. We'll work with the restaurant to resolve the issue and may offer a refund or credit.",
      category: "support"
    },
    {
      id: 6,
      question: "How do I cancel my order?",
      answer: "You can cancel your order within 5 minutes of placing it through the app. After that, cancellation depends on the restaurant's policy.",
      category: "ordering"
    },
    {
      id: 7,
      question: "Do you deliver to my area?",
      answer: "Enter your address in the app to see if we deliver to your location. We're constantly expanding our delivery zones.",
      category: "delivery"
    },
    {
      id: 8,
      question: "How do I track my order?",
      answer: "Once your order is confirmed, you'll receive a tracking link via SMS and email. You can also track it in the app under 'My Orders'.",
      category: "ordering"
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            🆘 Help & Support
          </motion.h1>
          
          <motion.p 
            className="text-center text-gray-600 text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            We're here to help! Find answers to common questions or get in touch with our support team.
          </motion.p>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-xl text-white text-center">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-bold text-lg mb-2">Call Us</h3>
              <p className="text-sm mb-3">Get immediate help</p>
              <p className="font-semibold">+91 9322902827 </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl text-white text-center">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="font-bold text-lg mb-2">Live Chat</h3>
              <p className="text-sm mb-3">Chat with our team</p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition">
                Start Chat
              </button>
            </div>
            
            <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-xl text-white text-center">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-bold text-lg mb-2">Email Us</h3>
              <p className="text-sm mb-3">We'll respond within 24h</p>
              <p className="font-semibold">support@hotdrop.com</p>
            </div>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'faq', label: 'FAQ', icon: '❓' },
              { id: 'contact', label: 'Contact', icon: '📞' },
              { id: 'order-help', label: 'Order Help', icon: '🛒' },
              { id: 'account', label: 'Account', icon: '👤' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>

          {/* FAQ Section */}
          {activeTab === 'faq' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                />
              </div>
              
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: faq.id * 0.1 }}
                    className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-start">
                      <span className="text-red-500 mr-2">Q:</span>
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 pl-6">
                      <span className="text-green-500 font-bold mr-2">A:</span>
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Contact Section */}
          {activeTab === 'contact' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-red-100 p-3 rounded-full">
                      <span className="text-red-600 text-xl">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600">+91 9322902827 </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <span className="text-blue-600 text-xl">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">support@hotdrop.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-3 rounded-full">
                      <span className="text-green-600 text-xl">💬</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Live Chat</p>
                      <p className="text-gray-600">Available 24/7</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <span className="text-purple-600 text-xl">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">123 Food Street, Taste City, TC 12345</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                      placeholder="Your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Subject</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300">
                      <option>Order Issue</option>
                      <option>Payment Problem</option>
                      <option>Delivery Issue</option>
                      <option>Account Help</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
                      placeholder="Describe your issue or question..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-lg font-medium hover:from-red-600 hover:to-orange-600 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          )}

          {/* Order Help Section */}
          {activeTab === 'order-help' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-red-600 mb-4">🚨 Order Issues</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Order not delivered</li>
                    <li>• Missing items</li>
                    <li>• Wrong order received</li>
                    <li>• Food quality issues</li>
                  </ul>
                  <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                    Report Issue
                  </button>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-blue-600 mb-4">🔄 Order Changes</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Modify order items</li>
                    <li>• Change delivery address</li>
                    <li>• Update payment method</li>
                    <li>• Cancel order</li>
                  </ul>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                    Modify Order
                  </button>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-green-600 mb-4">📋 Order Status Guide</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-yellow-600 text-xl">⏳</span>
                    </div>
                    <p className="font-semibold">Confirmed</p>
                    <p className="text-sm text-gray-600">Order placed successfully</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-orange-600 text-xl">👨‍🍳</span>
                    </div>
                    <p className="font-semibold">Preparing</p>
                    <p className="text-sm text-gray-600">Restaurant is cooking</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-600 text-xl">🚗</span>
                    </div>
                    <p className="font-semibold">On the way</p>
                    <p className="text-sm text-gray-600">Driver is coming</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-green-600 text-xl">✅</span>
                    </div>
                    <p className="font-semibold">Delivered</p>
                    <p className="text-sm text-gray-600">Enjoy your meal!</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Account Section */}
          {activeTab === 'account' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Account Management</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">🔐 Password Issues</h4>
                    <p className="text-gray-600 text-sm mb-3">Having trouble logging in?</p>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition">
                      Reset Password
                    </button>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">📱 Account Verification</h4>
                    <p className="text-gray-600 text-sm mb-3">Need to verify your phone or email?</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition">
                      Verify Account
                    </button>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">💳 Payment Methods</h4>
                    <p className="text-gray-600 text-sm mb-3">Manage your saved payment methods</p>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition">
                      Manage Payments
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Privacy & Security</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">🛡️ Data Protection</h4>
                    <p className="text-gray-600 text-sm">
                      Your personal information is secure with us. We use industry-standard encryption 
                      and never share your data with third parties without consent.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">🗑️ Delete Account</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Want to permanently delete your account? This action cannot be undone.
                    </p>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition">
                      Delete Account
                    </button>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">📄 Download Data</h4>
                    <p className="text-gray-600 text-sm mb-3">
                      Request a copy of all your personal data we have on file.
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition">
                      Download Data
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
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
