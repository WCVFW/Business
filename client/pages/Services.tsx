import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/navigation/NavBar";
import { PhotoGallery, allServicePhotos } from "../components/ui/PhotoGallery";
import Footer from "@/components/Footer";
import {
  MapPin,
  Plane,
  Bike,
  Hotel,
  Coffee,
  Scissors,
  Heart,
  Stethoscope,
  Star,
  ArrowRight,
  Clock,
  Shield,
  Award,
} from "lucide-react";

const services = [
  {
    icon: Bike,
    name: "Affordable Ride Services",
    description:
      "Book reliable and affordable ride services with trained drivers and safe vehicles—ideal for daily commutes and local travel.",
    features: ["Trained Drivers", "Real-Time Tracking", "Affordable Fares"],
    color: "bg-gradient-to-br from-green-400 to-green-600",
    link: "/services/ride",
  },
  {
    icon: Hotel,
    name: "Hotel Room Reservations",
    description:
      "Reserve budget and premium hotel rooms instantly with verified listings and exclusive deals across top destinations.",
    features: ["Verified Hotels", "Instant Booking", "Member Discounts"],
    color: "bg-gradient-to-br from-purple-400 to-purple-600",
    link: "/services/hotel",
  },
  {
    icon: Coffee,
    name: "Restaurant Table Booking",
    description:
      "Secure tables at popular restaurants and experience top-rated cuisines with hassle-free dining reservations.",
    features: ["Easy Booking", "Fine Dining", "Top Restaurants"],
    color: "bg-gradient-to-br from-orange-400 to-orange-600",
    link: "/services/dining",
  },
  {
    icon: Scissors,
    name: "Professional Salon Services",
    description:
      "Experience premium salon treatments from skilled professionals using quality beauty and hair care products.",
    features: ["Expert Stylists", "Modern Techniques", "Safe Products"],
    color: "bg-gradient-to-br from-pink-400 to-pink-600",
    link: "/services/salon",
  },
  {
    icon: Stethoscope,
    name: "Doctor Consultation Services",
    description:
      "Book in-person or online doctor consultations with licensed healthcare providers for timely medical support.",
    features: [
      "Qualified Doctors",
      "Online & Offline Options",
      "Fast Appointments",
    ],
    color: "bg-gradient-to-br from-red-400 to-red-600",
    link: "/services/doctor",
  },
];

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Round-the-clock access to our services for complete convenience.",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description:
      "Every service is vetted for safety, reliability, and user protection.",
  },
  {
    icon: Award,
    title: "Top-Rated Quality",
    description: "Award-winning excellence across all offerings.",
  },
];

export default function Services() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <section className="relative pt-24 pb-20 bg-gradient-to-br from-primary-50 via-blue-50 to-purple-50">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            Discover our full suite of travel, wellness, and lifestyle services
            designed to enhance your experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="flex items-center justify-center space-x-4 animate-fade-in-up"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.name}
                  to={service.link}
                  className="group cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 h-full flex flex-col">
                    <div className="text-center mb-6">
                      <div
                        className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-float`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex-grow space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto flex items-center justify-between text-primary-600 group-hover:text-primary-700 transition-colors">
                      <span className="font-semibold">Learn More</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Discover{" "}
              <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Services in Action
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse real experiences and inspiring moments from our community.
            </p>
          </div>
          <PhotoGallery photos={allServicePhotos} />
        </div>
      </section> */}

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Femivio for Local & Lifestyle Services?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Femivio connects you with reliable, on-demand services — from
              travel to wellness — tailored for comfort, quality, and trust.
              Here’s what sets us apart.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Top-Quality Local Services
              </h3>
              <p className="text-gray-600">
                We partner with certified and verified professionals to deliver
                trusted services including transport, healthcare, food, and
                more.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Secure & Transparent Experience
              </h3>
              <p className="text-gray-600">
                Your data is protected, and every transaction is clear — so you
                can book with peace of mind.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Personalized Services for Every Need
              </h3>
              <p className="text-gray-600">
                Whether you're booking a ride or a doctor, we tailor services to
                suit your lifestyle and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-20"
        style={{ backgroundColor: "rgb(243, 237, 251)" }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book Trusted Local Services with Femivio
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-700">
            Discover and book reliable services like rides, food delivery,
            doctor consultations, hotel bookings, and more — all in one place
            with Femivio. Fast, secure, and hassle-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-700 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Book a Service Now
            </Link>
            <button className="border-2 border-primary-700 text-primary-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white transition-all duration-300">
              Get a Free Quote
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
