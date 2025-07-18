import { Link } from "react-router-dom";
import { MapPin, Scissors, ArrowLeft } from "lucide-react";

export default function HairSalon() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                TravelFlow
              </span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-700 rounded-2xl flex items-center justify-center mx-auto mb-8 animate-float">
          <Scissors className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Hair <span className="text-pink-600">Salon</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Professional styling and beauty care by expert stylists using premium
          products and latest trends.
        </p>
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Coming Soon!
          </h2>
          <p className="text-gray-600 mb-6">
            We're partnering with top salons to bring you expert styling
            services. Check back soon for appointments with certified stylists.
          </p>
        </div>
        <Link
          to="/services"
          className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </Link>
      </div>
    </div>
  );
}
