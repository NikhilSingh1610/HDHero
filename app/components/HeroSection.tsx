import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-white via-red-200 to-blue-50 flex flex-col items-center justify-start pt-2 p-6">
      {/* Navbar */}
      <nav className="w-full max-w-6xl mx-auto flex justify-between items-center py-6">
        {/* Brand + Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-3xl font-extrabold text-gray-800">HotDrop</div>
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
        </div>

        <div className="space-x-6 text-lg text-gray-700 hidden md:flex">
          <a
            href="#"
            className="relative font-semibold transition-all duration-300 hover:text-black hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300"
          >
            How it works
          </a>
          <Link
            href="/signup"
            className="relative font-semibold transition-all duration-300 hover:text-black hover:after:scale-x-100 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300"
          >
            Log in
          </Link>
        </div>

        <Link href="/signup">
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-black/80">
            Get Started
          </button>
        </Link>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl w-full md:mt-4">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
            Walk In <span className="text-orange-500">Walk Out</span>
            <br />
            Order Ahead!
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Skip The line, Grab On Time!!
          </p>
          <div className="flex flex-col sm:flex-row items-center mt-6 gap-3">
            <Link href="/signup">
              <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-300 text-lg font-semibold">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="/girl2.png"
            alt="Ordering girl illustration"
            className="w-80 md:w-96"
          />
        </div>
      </div>
    </div>
  );
}
