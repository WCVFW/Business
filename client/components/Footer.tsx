"use client";

import {
  MapPin,
  Phone,
  Mail,
  Globe,
  Heart,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
} from "lucide-react";

const currentYear = new Date().getFullYear();

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
              <a
                href="/"
                className="text-2xl font-extrabold text-[#613EA3] tracking-tight"
              >
                Femivio
              </a>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Femivio is your all-in-one lifestyle partner — from food and hotel
              bookings to ride-sharing, medicine delivery, and on-demand
              healthcare. Simplifying life, one service at a time.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#613EA3]" />
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#613EA3]" />
                <a href="mailto:support@femivio.com">support@femivio.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#613EA3]" />
                <a href="#">Serving Globally</a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#613EA3] uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/services/food", label: "Online Food Booking" },
                { href: "/services/hotel", label: "Hotel Room Reservations" },
                { href: "/services/ride", label: "Affordable Ride Services" },
                {
                  href: "/services/medicine",
                  label: "Prescription Medicine Delivery",
                },
                {
                  href: "/services/doctor",
                  label: "Doctor Consultation Services",
                },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-[#613EA3] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#613EA3] uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Connect with Us" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Use" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-[#613EA3] transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Do */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#613EA3] uppercase tracking-wide">
              What We Do
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/support/healthcare", label: "Healthcare Support" },
                { href: "/support/legal", label: "Legal Assistance" },
                { href: "/support/counseling", label: "Counseling Services" },
                {
                  href: "/support/skills",
                  label: "Skill Development Programs",
                },
                { href: "/support/emergency", label: "24/7 Emergency Help" },
              ].map(({ href, label }, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#613EA3]" />
                  <a
                    href={href}
                    className="hover:text-[#613EA3] transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#613EA3] uppercase tracking-wide">
              Stay Connected
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Join our newsletter to get the latest updates on services, offers,
              and innovations.
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#613EA3] text-sm shadow-sm"
              />
              <input
                type="submit"
                value="Subscribe"
                className="cursor-pointer bg-[#613EA3] text-white px-5 py-2 rounded-md hover:bg-[#4b2e82] transition shadow-md"
              />
            </form>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { icon: Facebook, url: "https://facebook.com" },
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Instagram, url: "https://instagram.com" },
                { icon: Linkedin, url: "https://linkedin.com" },
                { icon: Youtube, url: "https://youtube.com" },
                // { icon: Github, url: "https://github.com" },
              ].map(({ icon: Icon, url }, idx) => (
                <a
                  key={idx}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#F3F0FA] text-[#613EA3] hover:bg-[#613EA3] hover:text-white transition-colors shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 border-t pt-6 text-center text-sm text-gray-500">
          &copy; {currentYear}{" "}
          <span className="text-[#613EA3] font-semibold">Femivio</span>. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
