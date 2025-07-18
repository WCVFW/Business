"use client";

import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe, Heart, Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-white bg-opacity-90 backdrop-blur-md border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#613EA3] rounded-xl flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-extrabold text-[#613EA3] tracking-tight">TravelFlow</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Your trusted partner for unforgettable travel experiences and premium lifestyle services.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#613EA3]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#613EA3]" />
                <span>hello@travelflow.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#613EA3]" />
                <span>Global in 50+ Countries</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#613EA3] uppercase tracking-wide">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/services/travel", label: "Travel Planning" },
                { to: "/services/hotels", label: "Hotel Booking" },
                { to: "/services/bike-rides", label: "Bike Tours" },
                { to: "/services/food-dining", label: "Dining" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="hover:text-[#613EA3] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#613EA3] uppercase tracking-wide">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
                { to: "/privacy", label: "Privacy Policy" },
                { to: "/terms", label: "Terms of Service" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="hover:text-[#613EA3] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#613EA3] uppercase tracking-wide">What We Do</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Education & Awareness",
                "Healthcare Support",
                "Legal Assistance",
                "Counseling",
                "Skill Development",
                "Emergency Help",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#613EA3]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#613EA3] uppercase tracking-wide">Stay Connected</h4>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to our newsletter for offers and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#613EA3] text-sm shadow-sm"
              />
              <button
                type="submit"
                className="bg-[#613EA3] text-white px-5 py-2 rounded-md hover:bg-[#4b2e82] transition shadow-md"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-[#613EA3] hover:text-[#4b2e82]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#613EA3] hover:text-[#4b2e82]">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#613EA3] hover:text-[#4b2e82]">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t pt-6 text-center text-sm text-gray-500">
          &copy; 2025 <span className="text-[#613EA3] font-semibold">TravelFlow</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
