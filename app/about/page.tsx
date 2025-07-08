"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Nikhil Singh",
      role: "CEO",
      image: "/girl.png",
      bio: "Passionate about connecting people with Tecnology and Food.",
      social: { twitter: "#", linkedin: "#", email: "alex@hotdrop.com" }
    },

    {
      name: "Shashiranjan Singh",
      role: "CTO",
      image: "/girl2.png",
      bio: "Tech enthusiast building scalable solutions..",
      social: { twitter: "#", linkedin: "#", email: "sarah@hotdrop.com" }
    }
  ];

  const stats = [
    { number: "5K+", label: "Happy Customers", icon: "👥" },
    { number: "100+", label: "Partner Restaurants", icon: "🍽️" },
    // { number: "50K+", label: "Orders Delivered", icon: "📦" },
    { number: "2+", label: "Cities Served", icon: "🏙️" }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We partner only with the best restaurants and ensure every meal meets our high standards.",
      icon: "⭐",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Lightning Fast",
      description: "Your hunger can't wait. We deliver hot, fresh food in 30 minutes or less.",
      icon: "⚡",
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Customer Love",
      description: "Every customer is family. We go above and beyond to make you smile.",
      icon: "❤️",
      color: "from-red-400 to-pink-500"
    },
    {
      title: "Innovation",
      description: "We're constantly evolving, using cutting-edge technology to improve your experience.",
      icon: "🚀",
      color: "from-green-400 to-teal-500"
    }
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

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            About <span className="text-red-500">HotDrop</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            We're on a mission to bring the world's best food to your doorstep. 
            Founded in 2020, HotDrop has revolutionized food delivery with our 
            commitment to quality, speed, and exceptional customer service.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Our Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  It all started with a simple idea: great food shouldn't be complicated. 
                  Our founders, tired of long wait times and cold deliveries, decided to 
                  create something better.
                </p>
                <p>
                  What began as a small startup in a garage has grown into a platform 
                  that connects millions of hungry customers with their favorite restaurants. 
                  We've built more than just a delivery service – we've created a community.
                </p>
                <p>
                  Today, HotDrop is proud to serve over 5000 customers across 2+ cities, 
                  partnering with more than 100 restaurants to bring you the best culinary 
                  experiences right to your door.
                </p>
              </div>
            </div>
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-10"
              >
                <Image
                  src="/girl2.png"
                  alt="Our Story"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl transform rotate-3 -z-10 opacity-20"></div>
            </div>
          </div>
        </motion.div>

        {/* Our Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + index * 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center text-2xl mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-8 md:p-12 text-white text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto">
            To make great food accessible to everyone, everywhere. We believe that a 
            delicious meal has the power to bring people together, create moments of joy, 
            and make any day better. That's why we're committed to delivering not just food, 
            but happiness – one order at a time.
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
              >
                <div className="relative mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto border-4 border-red-100"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-red-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-3">
                    <a href={member.social.twitter} className="text-blue-500 hover:text-blue-700 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                      </svg>
                    </a>
                    <a href={member.social.linkedin} className="text-blue-600 hover:text-blue-800 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    </a>
                    <a href={`mailto:${member.social.email}`} className="text-red-500 hover:text-red-700 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Our Journey
          </h2>
          <div className="space-y-8">
            {[
              { year: "2020", title: "The Beginning", desc: "Founded HotDrop with a vision to revolutionize food delivery" },
              { year: "2021", title: "First Million", desc: "Achieved our first million orders and expanded to 5 cities" },
              { year: "2022", title: "Going Big", desc: "Launched in 15 cities and partnered with 500+ restaurants" },
              { year: "2023", title: "Innovation", desc: "Introduced AI-powered delivery optimization and real-time tracking" },
              { year: "2024", title: "Global Vision", desc: "Expanded to 25 cities with 1000+ restaurant partners" },
              { year: "2025", title: "The Future", desc: "Continuing to innovate with drone delivery and sustainable packaging" }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.4 + index * 0.1 }}
                className="flex items-center space-x-6"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {milestone.year}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Ready to Join Our Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you're a food lover, restaurant owner, or delivery partner, 
            there's a place for you in the HotDrop family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/main"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold rounded-full hover:from-red-600 hover:to-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              🍔 Order Now
            </Link>
            <Link
              href="/help"
              className="inline-flex items-center px-8 py-4 bg-white text-red-500 border-2 border-red-500 font-bold rounded-full hover:bg-red-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              🤝 Partner with Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
