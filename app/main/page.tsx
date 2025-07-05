// app/main/page.tsx
"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MainPage() {
  const [user, setUser] = useState<User | null>(null);
  const [showQuickOrder, setShowQuickOrder] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        router.push("/signup");
      }
    });
    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/signup");
  };

  if (!user) return null;

  const foodItems = [
    { name: "Burger", image: "/burger.png", emoji: "" },
    { name: "Pizza", image: "/pizza.png", emoji: "" },
    { name: "Ice Cream", image: "/icecream.png", emoji: "" },
    { name: "Chinese", image: "/chinese.png", emoji: "" },
    { name: "Rolls", image: "/rolls.png", emoji: "" },
    { name: "Cake", image: "/cake.png", emoji: "" },
    { name: "Momos", image: "/momo.png", emoji: "" },
    { name: "Sandwich", image: "/sandwich.png", emoji: "" }
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50 via-red-200 to-blue-100 animate-gradient-x flex flex-col items-center overflow-x-hidden relative">
      {/* Floating Food Particles Background */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-xl pointer-events-none"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.2,
            scale: 0.5
          }}
          animate={{
            y: [0, -50, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 10 + Math.random() * 19,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        >
          {foodItems[i % foodItems.length].emoji}
        </motion.div>
      ))}

      {/* Navbar */}
      <nav className="w-full max-w-6xl mx-auto flex justify-between items-center py-6 px-4 z-10">
        <div className="flex items-center space-x-2">
          <motion.img
            src="/logo.png"
            alt="Logo"
            className="w-8 h-8"
            animate={{ 
              y: [0, -5, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
          <div className="text-3xl font-extrabold text-gray-800">HotDrop</div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/profile" className="text-sm font-semibold text-gray-700 hover:text-black transition">
            My Profile
          </Link>
          <motion.button 
            onClick={handleLogout} 
            className="bg-red-500 text-white px-4 py-2 rounded-full text-sm hover:bg-red-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Log Out
          </motion.button>
          {user.photoURL && (
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Image
                src={user.photoURL}
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full border-2 border-white shadow-md"
              />
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl w-full px-6 md:mt-6">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 animate-fade-in">
            Welcome, <span className="text-red-500">{user.displayName || user.email}</span>
          </h1>
          <p className="text-gray-600 text-lg animate-fade-in-delay">
            What would you like to order today?
          </p>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(239, 68, 68, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowQuickOrder(true)}
            >
              🚀 Quick Order
            </motion.button>
          </motion.div>
        </div>
        <motion.div
          className="md:w-1/2 flex justify-center items-center flex-col gap-5 mb-10 md:mb-0 animate-fade-in-right"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 0, 0, 0]
          }}
          
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <Image
            src="/girl2.png"
            alt="Ordering girl"
            width={300}
            height={300}
            className="w-72 md:w-96 hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>

      {/* Quick Order Drawer */}
      {showQuickOrder && (
        <motion.div 
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed inset-0 bg-white z-50 pt-6 px-4 pb-20 overflow-y-auto"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Quick Order</h2>
              <button 
                onClick={() => setShowQuickOrder(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {foodItems.slice(0, 8).map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="w-20 h-20 object-contain"
                  />
                  <h3 className="font-medium mt-2 text-center">{item.name}</h3>
                  <div className="flex items-center mt-3 space-x-2">
                    <button className="p-1 bg-gray-100 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <span>1</span>
                    <button className="p-1 bg-gray-100 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  <button className="mt-3 bg-red-500 text-white px-4 py-1 rounded-full text-sm hover:bg-red-600 transition">
                    Add to Cart
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg">
              <button className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white py-3 rounded-xl font-bold">
                Proceed to Checkout (3 items)
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Section Title */}
      <motion.h2 
        className="text-3xl font-bold text-gray-800 mt-20 mb-10 animate-fade-in"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <span className="inline-block hover:rotate-12 transition-transform">🍔</span> Popular Categories
      </motion.h2>

      {/* Enhanced Food Grid Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl px-4 pb-20"
      >
        {foodItems.map((item, index) => (
          <Link
            key={item.name}
            href={`/menu/${item.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="group relative flex flex-col items-center justify-center w-48 h-48 mx-auto"
          >
            {/* 3D floating effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              whileHover={{
                y: -15,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 15
              }}
              className="relative"
            >
              {/* Floating shadow */}
              <motion.div
                className="absolute inset-x-0 bottom-0 h-4 bg-black/10 blur-md rounded-full"
                initial={{ scale: 0.8, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 0.3 }}
                whileHover={{ scale: 0.9, opacity: 0.2 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              />
              
              {/* Food image with 3D effect */}
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="rounded-full object-cover w-36 h-36 group-hover:ring-4 group-hover:ring-red-200/50 transition-all duration-300"
                style={{
                  filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.2))',
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(500px) translateZ(20px)'
                }}
              />
              
              {/* Floating emoji */}
              <motion.div
                className="absolute -top-4 -right-4 text-2xl"
                initial={{ scale: 0, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ 
                  y: [0, -5, 5, 0],
                  transition: { duration: 0.5, repeat: Infinity }
                }}
              >
                {item.emoji}
              </motion.div>
            </motion.div>
            
            {/* Food name with cool hover effect */}
            <motion.h3 
              className="mt-4 text-center text-lg font-bold text-gray-700 group-hover:text-red-500 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {item.name}
            </motion.h3>
            
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 bg-red-100/30 rounded-full blur-md animate-pulse"></div>
            </div>
          </Link>
        ))}
      </motion.div>

      {/* Recommendations Section */}
      <motion.div 
        className="mt-16 max-w-4xl text-center animate-fade-in"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Recommended for You</h2>
        <p className="text-gray-600 mb-6">Based on your past orders</p>
        <div className="flex justify-center gap-8">
          {foodItems.slice(0, 4).map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, y: -10 }}
              whileTap={{ scale: 0.9 }}
              className="relative"
            >
              <Image 
                src={item.image} 
                width={100} 
                height={100} 
                className="rounded-full object-cover w-20 h-20 shadow-xl"
                alt={item.name}
                style={{
                  filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.2))',
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(500px) translateZ(20px)'
                }}
              />
              <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Sticky Navigation */}
      <motion.div 
        className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-lg flex justify-around py-3 md:hidden z-20"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Link href="/main" className="flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-orange-500 font-semibold"
          >
            🏠
          </motion.div>
        </Link>
        <Link href="/profile" className="flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600"
          >
            👤
          </motion.div>
        </Link>
        <button onClick={handleLogout} className="flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600"
          >
            🚪
          </motion.div>
        </button>
      </motion.div>

      {/* Enhanced Footer Section */}
      <motion.footer 
        className="w-full bg-gradient-to-b from-transparent to-black/10 backdrop-blur-lg py-16 px-4 mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Company Column */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-red-500 w-2 h-2 rounded-full mr-2"></span>
                Company
              </h3>
              <ul className="space-y-3">
                {["About Us", "Team", "Minis", "Pyng"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-red-500 transition flex items-center group">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 group-hover:bg-red-500"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Column */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-blue-500 w-2 h-2 rounded-full mr-2"></span>
                Contact us
              </h3>
              <ul className="space-y-3">
                {["Help & Support", "Partner with us", "Ride with us"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-red-500 transition flex items-center group">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 group-hover:bg-red-500"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal Column */}
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-yellow-500 w-2 h-2 rounded-full mr-2"></span>
                Legal
              </h3>
              <ul className="space-y-3">
                {["Terms & Conditions", "Cookie Policy", "Privacy Policy"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-600 hover:text-red-500 transition flex items-center group">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-2 group-hover:bg-red-500"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter Column */}
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
                Stay Updated
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Get the latest deals and updates straight to your inbox
              </p>
              
              <div className="flex mb-6">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-300 flex-grow text-sm"
                />
                <motion.button 
                  className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-r-lg font-medium text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and Copyright */}
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src="/logo.png"
                alt="HotDrop Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-gray-800">HotDrop</span>
              <span className="text-gray-500 text-sm ml-2">
                © {new Date().getFullYear()} All rights reserved
              </span>
            </div>
            
            {/* Additional Links */}
            <div className="flex flex-wrap justify-center gap-4">
              {["Privacy Policy", "Terms of Service", "Sitemap", "FAQ"].map((item) => (
                <Link 
                  key={item} 
                  href="#" 
                  className="text-gray-500 hover:text-red-500 text-sm transition"
                >
                  {item}
                </Link>
              ))}
            </div>
            
            {/* Payment Methods */}
            {/* <div className="flex space-x-3 mt-4 md:mt-0">
              {["💳", "📱", "💰", "🔄"].map((method, i) => (
                <motion.div
                  key={i}
                  className="bg-white p-2 rounded-md shadow-xs"
                  whileHover={{ y: -2 }}
                >
                  {method}
                </motion.div>
              ))}
            </div> */}
          </div>
        </div>
      </motion.footer>
    </div>
  );
}