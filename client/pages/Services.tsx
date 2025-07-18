import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/navigation/NavBar";
import { PhotoGallery, allServicePhotos } from "../components/ui/PhotoGallery";
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
  Menu,
  X,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    name: "Travel",
    description:
      "Discover amazing destinations worldwide with our expert travel planning",
    features: ["Custom Itineraries", "24/7 Support", "Best Price Guarantee"],
    color: "bg-gradient-to-br from-blue-400 to-blue-600",
    link: "/services/travel",
    image: "🌍",
  },
  {
    icon: Bike,
    name: "Bike Rides",
    description:
      "Adventure cycling tours and premium bike rentals for all skill levels",
    features: ["Guided Tours", "Equipment Included", "Scenic Routes"],
    color: "bg-gradient-to-br from-green-400 to-green-600",
    link: "/services/bike-rides",
    image: "🚴",
  },
  {
    icon: Hotel,
    name: "Hotels",
    description:
      "Luxury accommodations at the best prices with exclusive deals",
    features: ["Luxury Properties", "Instant Booking", "Member Discounts"],
    color: "bg-gradient-to-br from-purple-400 to-purple-600",
    link: "/services/hotels",
    image: "🏨",
  },
  {
    icon: Coffee,
    name: "Food & Dining",
    description: "Gourmet experiences and local cuisine recommendations",
    features: ["Fine Dining", "Local Cuisine", "Chef Specials"],
    color: "bg-gradient-to-br from-orange-400 to-orange-600",
    link: "/services/food-&-dining",
    image: "🍽️",
  },
  {
    icon: Scissors,
    name: "Hair Salon",
    description: "Professional styling and beauty care by expert stylists",
    features: ["Expert Stylists", "Premium Products", "Latest Trends"],
    color: "bg-gradient-to-br from-pink-400 to-pink-600",
    link: "/services/hair-salon",
    image: "💇",
  },
  {
    icon: Heart,
    name: "Women's Care",
    description: "Specialized wellness and beauty services for women",
    features: ["Spa Treatments", "Wellness Programs", "Beauty Services"],
    color: "bg-gradient-to-br from-rose-400 to-rose-600",
    link: "/services/women's-care",
    image: "💅",
  },
  {
    icon: Stethoscope,
    name: "Medical",
    description:
      "Healthcare services and medical consultations by certified professionals",
    features: ["Certified Doctors", "Telemedicine", "Health Checkups"],
    color: "bg-gradient-to-br from-red-400 to-red-600",
    link: "/services/medical",
    image: "⚕️",
  },
];

const features = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock support and service availability",
  },
  {
    icon: Shield,
    title: "Secure & Safe",
    description: "Your safety and security are our top priorities",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized for excellence in customer service",
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
      {/* Enhanced Navigation */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-blue-50 to-purple-50">
          <div
            className={
              'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-30'
            }
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Our
            <span className="bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Services
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            From travel adventures to personal care, we offer comprehensive
            services designed to enhance every aspect of your lifestyle.
          </p>

          {/* Features */}
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

      {/* Services Grid */}
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
                    {/* Service Header */}
                    <div className="text-center mb-6">
                      <div className="text-6xl mb-4">{service.image}</div>
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

                    {/* Service Features */}
                    <div className="flex-grow">
                      <div className="space-y-3 mb-6">
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
                    </div>

                    {/* Action Button */}
                    <div className="mt-auto">
                      <div className="flex items-center justify-between text-primary-600 group-hover:text-primary-700 transition-colors">
                        <span className="font-semibold">Learn More</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experience Our
              <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what makes our services exceptional through real experiences
              and beautiful moments captured by our customers.
            </p>
          </div>
          <PhotoGallery photos={allServicePhotos} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose TravelFlow?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another service provider. We're your trusted
              partner in creating extraordinary experiences.
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
                We partner only with the best providers to ensure exceptional
                quality in every service we offer.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Trusted & Secure
              </h3>
              <p className="text-gray-600">
                Your safety and security are paramount. All our services meet
                the highest safety standards.
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
                Every service is tailored to your specific needs and preferences
                for a truly personal experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Choose from our wide range of premium services and experience the
            TravelFlow difference today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Book a Service
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">TravelFlow</span>
              </Link>
              <p className="text-gray-300 mb-6 max-w-md">
                Your trusted partner for unforgettable travel experiences and
                premium lifestyle services.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link
                    to="/services/travel"
                    className="hover:text-white transition-colors"
                  >
                    Travel Planning
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/hotels"
                    className="hover:text-white transition-colors"
                  >
                    Hotel Booking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/bike-rides"
                    className="hover:text-white transition-colors"
                  >
                    Bike Tours
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/food-&-dining"
                    className="hover:text-white transition-colors"
                  >
                    Dining
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TravelFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
