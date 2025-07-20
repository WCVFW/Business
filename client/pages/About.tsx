import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/navigation/NavBar";
import Footer from "@/components/Footer";
import { HeartHandshake, ShieldCheck, Globe2 } from "lucide-react";
import {
  MapPin,
  Users,
  Award,
  Globe,
  Heart,
  Shield,
  Star,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const stats = [
  { number: "50K+", label: "Happy Customers", icon: Users },
  { number: "200+", label: "Destinations", icon: Globe },
  { number: "15+", label: "Years Experience", icon: Award },
  { number: "99%", label: "Satisfaction Rate", icon: Star },
];

const team = [
  {
    name: "Mr Pradeep",
    role: "Founder",
    bio: "Travel enthusiast with 20+ years in hospitality industry",
    avatar: "/images/pradeep.jpg",
  },
  {
    name: "Mr Shenbagavel.V",
    role: "Head of Director",
    bio: "Expert in logistics and customer experience optimization",
    avatar: "/images/shenbagavel.jpg",
  },
  {
    name: "Mr Prakash.V",
    role: "Co-Founder",
    bio: "World traveler who has visited 80+ countries",
    avatar: "/assets/images/Prakash.jpg",
  },
  {
    name: "Miss Santhiya.E",
    role: "Co-Founder",
    bio: "Dedicated to ensuring every customer has an amazing experience",
    avatar: "/images/santhiya.jpg",
  },
];

const values = [
  {
    icon: HeartHandshake,
    title: "Customer-Centered Service",
    description:
      "We focus on providing reliable, fast, and caring support across all services—from food delivery and hotel bookings to rides and medicine needs.",
  },
  {
    icon: ShieldCheck,
    title: "Trust, Safety & Quality",
    description:
      "Whether you're booking a ride, ordering meals, or receiving medical support, we ensure your safety and satisfaction with every interaction.",
  },
  {
    icon: Globe2,
    title: "All-in-One Access, Anywhere",
    description:
      "Our platform connects you to essential services like food, transport, stays, and healthcare — all under one trusted system, wherever you are.",
  },
];

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Enhanced Navigation */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-blue-50 to-purple-50">
          <div
            className={
              'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-30'
            }
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              About <span className="text-[#613EA3]">Femivio</span>
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              At Femivio, we’re redefining convenience by combining food
              delivery, hotel and dining bookings, rides, medicine, and doctor
              services into one powerful platform — making everyday living
              seamless and stress-free.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: "#613EA3" }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Text Content */}
            <div className="animate-fade-in-up">
              <h2 className="text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2025, <strong>Femivio</strong> was born out of a
                  simple yet powerful mission — to simplify everyday living by
                  unifying essential services into one seamless platform.
                </p>
                <p>
                  We recognized the growing demand for convenience in a
                  fast-paced world. People were juggling multiple apps just to
                  manage daily tasks — from ordering food and booking hotels to
                  arranging rides and accessing medical support. That’s where we
                  saw the gap — and the opportunity.
                </p>
                <p>
                  Femivio brings together <strong>food delivery</strong>,{" "}
                  <strong>hotel bookings</strong>,{" "}
                  <strong>dining reservations</strong>,{" "}
                  <strong>ride services</strong>,{" "}
                  <strong>medicine delivery</strong>, and{" "}
                  <strong>doctor access</strong> — all in one place. No
                  switching between apps, no scattered services — just one
                  smart, secure, and smooth experience.
                </p>
                <p>
                  Built by a passionate team in 2025, our vision is to empower
                  individuals and families with faster access to what they need
                  — anytime, anywhere.
                </p>
                <p>
                  From your next meal to your next medical appointment — Femivio
                  is your trusted partner in modern living.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center mt-10 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: "#613EA3" }}
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </div>

            {/* Visual Content */}
            <div className="animate-fade-in-up">
              <div className="relative group">
                <div className="absolute inset-0 rounded-3xl transform rotate-3 scale-95 bg-[#613EA3] opacity-20 group-hover:scale-100 transition-transform duration-500"></div>
                <div className="relative bg-white rounded-3xl p-6 shadow-2xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <Globe className="w-20 h-20 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 text-lg font-medium">
                        Travel Video Placeholder
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From food and hotel stays to ride bookings and medical needs — our
              values guide how we deliver convenience, safety, and quality in
              everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: "#613EA3" }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 ">
        {/* bg-[#F3EDFB] */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#613EA3] mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Everything you need — food, rides, rooms, and more — brought to
              you by one expert team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="relative bg-white shadow-xl rounded-2xl p-6 text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Avatar Image */}
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 mx-auto mb-4 rounded-full object-cover object-center shadow-md border border-[#613EA3] hover:scale-105 transition-transform duration-300"
                />
                {/* Member Info */}
                <h3 className="text-lg font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-[#613EA3] font-medium text-sm mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-snug">
                  {member.bio}
                </p>
                {/* Decorative ring on hover */}
                <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#613EA3] opacity-0 group-hover:opacity-100 transition duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-br from-gray-50 to-blue-50 ">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4b2e82] mb-4">
            Ready to explore smarter?
          </h2>
          <p className="text-xl text-[#4b2e82] mb-8 max-w-2xl mx-auto">
            Discover why users choose TravelFlow for safe, convenient, and
            all-in-one access to rides, meals, stays, medicine and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-[#4b2e82] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Discover More
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#4b2e82] text-[#4b2e82] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#4b2e82] hover:text-white transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
