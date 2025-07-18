import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Plane,
  Bike,
  Hotel,
  Coffee,
  Scissors,
  Heart,
  Stethoscope,
  Star,
  ArrowRight,
  MapPin,
  Calendar,
  Users,
} from "lucide-react";

const servicesData = [
  {
    icon: Plane,
    name: "Travel",
    description: "Discover amazing destinations worldwide",
    link: "/services/travel",
    color: "from-blue-400 to-blue-600",
    hoverColor: "hover:from-blue-500 hover:to-blue-700",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80",
    features: ["Custom Itineraries", "Expert Guides", "200+ Destinations"],
    popular: true,
  },
  {
    icon: Hotel,
    name: "Hotels",
    description: "Luxury accommodations at best prices",
    link: "/services/hotels",
    color: "from-purple-400 to-purple-600",
    hoverColor: "hover:from-purple-500 hover:to-purple-700",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
    features: ["5-Star Properties", "Instant Booking", "Best Rates"],
    popular: true,
  },
  {
    icon: Bike,
    name: "Bike Rides",
    description: "Adventure cycling tours and rentals",
    link: "/services/bike-rides",
    color: "from-green-400 to-green-600",
    hoverColor: "hover:from-green-500 hover:to-green-700",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    features: ["Guided Tours", "Premium Bikes", "All Skill Levels"],
    popular: false,
  },
  {
    icon: Coffee,
    name: "Food & Dining",
    description: "Gourmet experiences and local cuisines",
    link: "/services/food-&-dining",
    color: "from-orange-400 to-orange-600",
    hoverColor: "hover:from-orange-500 hover:to-orange-700",
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400&q=80",
    features: ["Fine Dining", "Local Cuisine", "Chef Specials"],
    popular: true,
  },
  {
    icon: Scissors,
    name: "Hair Salon",
    description: "Professional styling and beauty care",
    link: "/services/hair-salon",
    color: "from-pink-400 to-pink-600",
    hoverColor: "hover:from-pink-500 hover:to-pink-700",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80",
    features: ["Expert Stylists", "Premium Products", "Latest Trends"],
    popular: false,
  },
  {
    icon: Heart,
    name: "Women's Care",
    description: "Specialized wellness and beauty services",
    link: "/services/women's-care",
    color: "from-rose-400 to-rose-600",
    hoverColor: "hover:from-rose-500 hover:to-rose-700",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80",
    features: ["Spa Treatments", "Wellness Programs", "Beauty Services"],
    popular: false,
  },
  {
    icon: Stethoscope,
    name: "Medical",
    description: "Healthcare services and consultations",
    link: "/services/medical",
    color: "from-red-400 to-red-600",
    hoverColor: "hover:from-red-500 hover:to-red-700",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
    features: ["Certified Doctors", "Telemedicine", "Health Checkups"],
    popular: false,
  },
];

interface MegaMenuProps {
  isVisible: boolean;
  onClose: () => void;
}

export const MegaMenu: React.FC<MegaMenuProps> = ({ isVisible, onClose }) => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  if (!isVisible) return null;

  return (
    <div
      className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-40 animate-fade-in-up"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Our Services
          </h3>
          <p className="text-gray-600">
            Premium services to enhance your lifestyle and travel experiences
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredService === index;

            return (
              <Link
                key={service.name}
                to={service.link}
                className="group relative"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={onClose}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl ${
                    isHovered ? "animate-pulse" : ""
                  }`}
                >
                  {/* Background Image */}
                  <div className="aspect-video relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`}
                    ></div>

                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1 animate-bounce">
                        <Star className="w-3 h-3 fill-current" />
                        <span>Popular</span>
                      </div>
                    )}

                    {/* Service Icon */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h4 className="text-lg font-bold mb-1">{service.name}</h4>
                      <p className="text-sm text-white/90 mb-3 line-clamp-2">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-1 mb-3">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2 text-xs text-white/80"
                          >
                            <div className="w-1 h-1 bg-white rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-white/70">
                          Learn More
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Featured Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Stats */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                200+ Destinations
              </h4>
              <p className="text-gray-600 text-sm">
                Explore amazing places worldwide
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                50K+ Happy Customers
              </h4>
              <p className="text-gray-600 text-sm">
                Join our satisfied community
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                24/7 Support
              </h4>
              <p className="text-gray-600 text-sm">
                We're here when you need us
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 pt-6 border-t border-gray-200">
          <Link
            to="/services"
            onClick={onClose}
            className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 space-x-2"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
