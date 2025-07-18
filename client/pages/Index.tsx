import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { NavBar } from "../components/navigation/NavBar";
import {
  PhotoGallery,
  sampleTravelPhotos,
  allServicePhotos,
} from "../components/ui/PhotoGallery";
import {
  Plane,
  Bike,
  Hotel,
  Coffee,
  Scissors,
  Heart,
  Stethoscope,
  MapPin,
  Star,
  ArrowRight,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";
import HeroSection from "@/pages/HeroSection";
import Footer from "@/components/Footer";

const services = [
  // {
  //   icon: Plane,
  //   name: "Travel",
  //   description: "Discover amazing destinations worldwide",
  //   image:
  //     "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80",
  // },
  {
    icon: Bike,
    name: "Bike Rides",
    description: "Adventure cycling tours and rentals",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
  {
    icon: Hotel,
    name: "Hotels",
    description: "Luxury accommodations at best prices",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
  },
  {
    icon: Coffee,
    name: "Food & Dining",
    description: "Gourmet experiences and local cuisines",
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400&q=80",
  },
  {
    icon: Scissors,
    name: "Hair Salon",
    description: "Professional styling and beauty care",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80",
  },
  // {
  //   icon: Heart,
  //   name: "Women's Care",
  //   description: "Specialized wellness and beauty services",
  //   image:
  //     "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80",
  // },
  {
    icon: Stethoscope,
    name: "Medical",
    description: "Healthcare services and consultations",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
  },
];

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <main>
        <HeroSection />
      </main>

      {/* Services */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#613EA3] tracking-tight">
              Discover Our Premium Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We offer world-class services tailored to your needs — with comfort, convenience, and quality in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  to={`/services/${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                  key={service.name}
                  className="group relative bg-white/70 backdrop-blur-md border border-gray-200 rounded-3xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-[1.025] overflow-hidden"
                >
                  {/* Image with gradient overlay */}
                  <div className="relative h-44">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover rounded-t-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-3xl" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-[#F1EBFB] rounded-xl shadow-sm">
                        <Icon className="w-6 h-6 text-[#613EA3]" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {service.name}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="flex items-center text-[#613EA3] font-medium transition-all group-hover:underline">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-12 bg-[#F3EDFB]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#613EA3] mb-4">
            Empower Change. Start Today.
          </h2>
          <p className="text-lg text-[#613EA3] mb-8 max-w-2xl mx-auto">
            Be part of our mission to uplift communities and create lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-[#613EA3] text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-[#4b2e82] transition-all duration-300"
            >
              {isAuthenticated ? "Explore Services" : "Join the Movement"}
            </Link>
            <Link
              to="/contact"
              className="border-2 border-[#613EA3] text-[#613EA3] px-6 py-3 rounded-full text-base font-semibold hover:bg-[#613EA3] hover:text-white transition-all duration-300"
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
