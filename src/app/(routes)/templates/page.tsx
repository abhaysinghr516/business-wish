"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";

const Page = () => {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-grow items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-950 min-h-screen overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-float absolute -top-16 -left-16 w-44 h-44 bg-purple-400 rounded-full mix-blend-lighten filter blur-sm opacity-80"></div>
          <div className="animate-float absolute top-32 -right-16 w-44 h-44 bg-yellow-300 rounded-full mix-blend-lighten filter blur-sm opacity-80 animation-delay-2000"></div>
          <div className="animate-float absolute -bottom-16 left-16 w-44 h-44 bg-pink-300 rounded-full mix-blend-lighten filter blur-sm opacity-80 animation-delay-4000"></div>
        </div>

        <div className="max-w-4xl w-full text-center space-y-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-100 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              Exciting Templates
            </span>
            <br />
            Coming Soon!
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            I'm crafting a stunning, versatile template to elevate your
            projects. I'm putting the finishing touches on a design that will
            transform your ideas into reality.
          </p>
        </div>
      </main>
      <Footer />

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-50px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};

export default Page;
