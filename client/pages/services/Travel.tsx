import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../../components/navigation/NavBar";
import Footer from "@/components/Footer";
import {
  PhotoGallery,
  sampleTravelPhotos,
} from "../../components/ui/PhotoGallery";
import { BookingWidget } from "../../components/booking/BookingWidget";
import {
  MapPin,
  Plane,
  Globe,
  Calendar,
  Users,
  Star,
  Shield,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const packages = [
  {
    title: "European Adventure",
    duration: "14 Days",
    countries: "5 Countries",
    price: "$3,299",
    image: "🏰",
    highlights: ["Paris & Rome", "Swiss Alps", "Mediterranean Coast"],
    rating: 4.9,
    reviews: 127,
  },
  {
    title: "Asian Discovery",
    duration: "21 Days",
    countries: "4 Countries",
    price: "$4,599",
    image: "🏯",
    highlights: ["Tokyo & Kyoto", "Thai Beaches", "Bali Paradise"],
    rating: 4.8,
    reviews: 89,
  },
  {
    title: "African Safari",
    duration: "10 Days",
    countries: "3 Countries",
    price: "$5,199",
    image: "🦁",
    highlights: ["Serengeti", "Victoria Falls", "Cape Town"],
    rating: 4.9,
    reviews: 156,
  },
];

export default function Travel() {
  const [scrollY, setScrollY] = useState(0);
  const [showBookingWidget, setShowBookingWidget] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  const handleBookNow = (pkg: any) => {
    const serviceData = {
      id: pkg.title.toLowerCase().replace(/\s+/g, "-"),
      name: pkg.title,
      type: "travel",
      description: pkg.description || "Amazing travel experience",
      price: parseInt(pkg.price.replace("$", "").replace(",", "")),
      image: pkg.image,
      duration: pkg.duration,
      maxParticipants: 20,
      location: pkg.highlights[0] || "Multiple Destinations",
      rating: pkg.rating,
      reviews: pkg.reviews,
      features: pkg.highlights,
      cancellationPolicy:
        "Free cancellation up to 30 days before departure. 50% refund for cancellations 7-30 days before.",
    };
    setSelectedPackage(serviceData);
    setShowBookingWidget(true);
  };

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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-primary-50 to-purple-50">
          <div
            className={
              'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-30'
            }
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-8 animate-float">
              <Plane className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Travel
              <span className="bg-gradient-to-r from-blue-600 via-primary-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Adventures
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              Discover amazing destinations worldwide with our expertly crafted
              travel packages and personalized itineraries.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                200+ Destinations
              </h3>
              <p className="text-gray-600">
                Explore the world's most beautiful places
              </p>
            </div>
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "500ms" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Expert Guides
              </h3>
              <p className="text-gray-600">
                Local expertise for authentic experiences
              </p>
            </div>
            <div
              className="text-center animate-fade-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Safety First
              </h3>
              <p className="text-gray-600">Your safety is our top priority</p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Popular Travel Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully curated travel packages, each designed
              to provide unforgettable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.title}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <span className="text-6xl">{pkg.image}</span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{pkg.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {pkg.title}
                  </h3>

                  <div className="flex items-center space-x-4 mb-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{pkg.countries}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {pkg.highlights.map((highlight, highlightIndex) => (
                      <div
                        key={highlightIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700 text-sm">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-primary-600">
                        {pkg.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        {pkg.reviews} reviews
                      </div>
                    </div>
                    <button
                      onClick={() => handleBookNow(pkg)}
                      className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Amazing
              <span className="bg-gradient-to-r from-blue-600 via-primary-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Destinations
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore breathtaking locations and unforgettable experiences from
              our curated travel destinations around the world.
            </p>
          </div>
          <PhotoGallery photos={sampleTravelPhotos} />
        </div>
      </section>

      {/* Why Choose Our Travel Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose TravelFlow?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make travel planning effortless with our comprehensive services
              and local expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Custom Itineraries
              </h3>
              <p className="text-gray-600">
                Personalized travel plans tailored to your interests, budget,
                and schedule.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Round-the-clock assistance during your travels for peace of
                mind.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Best Price Guarantee
              </h3>
              <p className="text-gray-600">
                We guarantee the best prices or we'll match any competitor's
                offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Let us plan your perfect trip. Contact our travel experts today and
            start your journey to amazing destinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Plan My Trip</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
              View All Packages
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Booking Widget */}
      {selectedPackage && (
        <BookingWidget
          service={selectedPackage}
          isOpen={showBookingWidget}
          onClose={() => setShowBookingWidget(false)}
        />
      )}
    </div>
  );
}
