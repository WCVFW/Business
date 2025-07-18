"use client";

import React from "react";
import { Link } from "react-router-dom";
import { ChevronDown, PlayCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen bg-white overflow-hidden flex items-center justify-center px-4 sm:px-16"
    >
      {/* Floating Decorative Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-pink-300 rounded-full opacity-30 animate-float-slow shadow-[0_20px_50px_rgba(0,0,0,0.3)] scale-110 blur-sm"></div>
        <div className="absolute bottom-20 right-16 w-48 h-48 bg-[#613EA3] rounded-full opacity-50 animate-float shadow-[0_20px_40px_rgba(0,0,0,0.2)] scale-125 blur-md"></div>
        <div className="absolute top-1/2 left-[60%] w-32 h-32 bg-rose-400 rounded-full opacity-40 animate-float shadow-[0_15px_30px_rgba(0,0,0,0.25)] scale-100 blur-sm"></div>
      </div>

      {/* Grid Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-4 py-20 gap-16">
        {/* Left: Text Content */}
        <div className="flex-1 text-left space-y-6 animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#613EA3] leading-tight drop-shadow-xl">
            Empowering Every Woman’s Journey
          </h1>
          <p className="text-lg sm:text-2xl text-gray-700 max-w-md leading-relaxed">
            From quick rides to healthcare and grooming – explore services tailored for every modern woman.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/services"
              className="bg-gradient-to-r from-[#613EA3] via-purple-600 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Explore Services
            </Link>
            <button className="border-2 border-[#613EA3] text-[#613EA3] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#f3eaff] transition-all duration-300 flex items-center gap-2">
              <PlayCircle className="w-5 h-5" />
              Demo Video
            </button>
          </div>
          {/* <div className="mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 text-[#613EA3]" />
          </div> */}
        </div>

        {/* Right: Hero Image */}
        <div className="flex-1 flex justify-center items-center animate-fade-in-up delay-300">
          <div className="relative w-full max-w-2xl h-[500px] rounded-[3rem] shadow-2xl bg-white overflow-hidden transform hover:scale-110 transition-transform duration-500 ease-in-out">
            <img
              src="/assets/images/Hero_banner.png"
              alt="Empowering Women"
              className="w-full h-full object-cover object-center rounded-[3rem] shadow-inner"
            />
            <div className="absolute inset-0 rounded-[3rem] bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
