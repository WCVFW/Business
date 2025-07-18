import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/navigation/NavBar";
import Footer from "@/components/Footer";
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
    name: "Alex Rodriguez",
    role: "CEO & Founder",
    bio: "Travel enthusiast with 20+ years in hospitality industry",
    avatar: "AR",
  },
  {
    name: "Sarah Kim",
    role: "Head of Operations",
    bio: "Expert in logistics and customer experience optimization",
    avatar: "SK",
  },
  {
    name: "David Chen",
    role: "Travel Director",
    bio: "World traveler who has visited 80+ countries",
    avatar: "DC",
  },
  {
    name: "Emma Johnson",
    role: "Customer Success",
    bio: "Dedicated to ensuring every customer has an amazing experience",
    avatar: "EJ",
  },
];

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Every decision we make is centered around delivering exceptional customer experiences.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description:
      "Your safety and security are our top priorities in everything we do.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Connecting you to amazing experiences across the world with local expertise.",
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
              About
              <span className="text-[#613EA3]">
                {" "}
                TravelFlow
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              We're passionate about creating extraordinary travel experiences
              and connecting people with the world's most amazing destinations.
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  TravelFlow was born from a simple idea: travel should be
                  magical, not stressful. Founded in 2009 by a group of
                  passionate travelers, we set out to revolutionize how people
                  experience the world.
                </p>
                <p>
                  What started as a small travel agency has grown into a
                  comprehensive lifestyle platform, offering everything from
                  exotic travel packages to personal care services. We believe
                  that great experiences extend beyond travel – they encompass
                  every aspect of living well.
                </p>
                <p>
                  Today, we're proud to serve over 50,000 customers worldwide,
                  helping them discover new destinations, enjoy premium
                  services, and create memories that last a lifetime.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center mt-8 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: "#613EA3" }}
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl transform rotate-6" style={{ backgroundColor: "#613EA3" }}></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <Globe className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500">Travel Video Placeholder</p>
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we serve our
              customers.
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
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: "#613EA3" }}>
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 ">{/* bg-[#F3EDFB] */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#613EA3] mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              The passionate minds behind TravelFlow, committed to creating memorable journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="relative bg-white shadow-xl rounded-2xl p-6 text-center transform transition duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Avatar Bubble */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#613EA3] text-white flex items-center justify-center text-3xl font-bold shadow-md hover:scale-105 transition-transform duration-300">
                  {member.avatar}
                </div>
                {/* Member Info */}
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
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
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-[#4b2e82] mb-8 max-w-2xl mx-auto">
            Join our community of travelers and discover why TravelFlow is the
            trusted choice for extraordinary experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-[#4b2e82] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#4b2e82] text-[#4b2e82] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#4b2e82] hover:text-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
