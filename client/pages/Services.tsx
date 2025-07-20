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
    icon: Plane,
    name: "Travel Planning",
    description:
      "Explore tailored travel packages, customized itineraries, and expert planning for unforgettable adventures.",
    features: [
      "Custom Itineraries",
      "Worldwide Destinations",
      "24/7 Travel Support",
    ],
    color: "bg-gradient-to-br from-blue-400 to-blue-600",
    link: "/services/travel",
  },
  {
    icon: Bike,
    name: "Bike Tours",
    description:
      "Join thrilling bike tours guided by professionals across scenic and adventurous trails.",
    features: ["Expert Guides", "Safety Gear", "Scenic Routes"],
    color: "bg-gradient-to-br from-green-400 to-green-600",
    link: "/services/bike-rides",
  },
  {
    icon: Hotel,
    name: "Hotel Booking",
    description:
      "Find the best hotel deals globally, from luxury resorts to budget-friendly stays.",
    features: ["Verified Hotels", "Instant Booking", "Exclusive Discounts"],
    color: "bg-gradient-to-br from-purple-400 to-purple-600",
    link: "/services/hotels",
  },
  {
    icon: Coffee,
    name: "Dining & Cuisine",
    description:
      "Enjoy gourmet experiences and local delicacies at top-rated restaurants and cafes.",
    features: ["Gourmet Chefs", "Cultural Cuisine", "Diverse Menus"],
    color: "bg-gradient-to-br from-orange-400 to-orange-600",
    link: "/services/food-&-dining",
  },
  {
    icon: Scissors,
    name: "Salon Services",
    description:
      "Access premium hair and beauty services designed for style, comfort, and confidence.",
    features: ["Professional Stylists", "Modern Trends", "Quality Products"],
    color: "bg-gradient-to-br from-pink-400 to-pink-600",
    link: "/services/hair-salon",
  },
  {
    icon: Heart,
    name: "Wellness for Women",
    description:
      "Comprehensive wellness services focused on women’s health, beauty, and relaxation.",
    features: ["Spa Treatments", "Holistic Therapies", "Certified Experts"],
    color: "bg-gradient-to-br from-rose-400 to-rose-600",
    link: "/services/women's-care",
  },
  {
    icon: Stethoscope,
    name: "Medical Services",
    description:
      "Reliable healthcare solutions including virtual consultations and diagnostic services.",
    features: [
      "Trusted Practitioners",
      "Modern Equipment",
      "Flexible Appointments",
    ],
    color: "bg-gradient-to-br from-red-400 to-red-600",
    link: "/services/medical",
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

      <section className="py-20 bg-white">
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
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose TravelFlow?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              TravelFlow is your dedicated partner in crafting premium journeys
              and lifestyle services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                We ensure top-tier quality by partnering with the best service
                providers in the industry.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Secure & Trusted
              </h3>
              <p className="text-gray-600">
                Your privacy, security, and satisfaction are our highest
                priorities.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Personalized Care
              </h3>
              <p className="text-gray-600">
                Every service is tailored for your comfort, convenience, and
                lifestyle goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Book your next adventure or wellness service with TravelFlow and
            experience excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-700 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Book a Service
            </Link>
            <button className="border-2 px-8 py-4 rounded-full text-lg font-semibold hover:text-primary-700 transition-all duration-300">
              Get Quote
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
