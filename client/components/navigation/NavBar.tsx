import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MapPin, Menu, X, ChevronDown } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { AuthModal } from "../auth/AuthModal";
import { UserProfile } from "../auth/UserProfile";

export const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActivePage = (path: string) =>
    location.pathname === path || location.pathname.startsWith(`${path}/`);

  const services = [
    { name: "Affordable Ride Services", path: "/services/ride" },
    { name: "Online Food Booking", path: "/services/food" },
    { name: "Prescription Medicine Delivery", path: "/services/medicine" },
    { name: "Restaurant Table Booking", path: "/services/dining" },
    { name: "Hotel Room Reservations", path: "/services/hotel" },
    { name: "Doctor Consultation Services", path: "/services/doctor" },
    { name: "Professional Salon Services", path: "/services/salon" },
  ];

  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setShowServicesDropdown(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowServicesDropdown(false);
    }, 200);
    setHoverTimeout(timeout);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-white/90 backdrop-blur shadow-md"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#613EA3] rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-[#613EA3]">Femivio</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-6">
              {[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Contact", path: "/contact" }].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={scrollToTop}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    isActivePage(item.path)
                      ? "bg-[#ebe7f8] text-[#613EA3] font-semibold"
                      : "text-gray-700 hover:text-[#613EA3] hover:bg-[#f5f1ff]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="flex items-center px-4 py-2 rounded-lg cursor-pointer transition-all duration-200 text-gray-700 hover:text-[#613EA3] hover:bg-[#f5f1ff]">
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${showServicesDropdown ? "rotate-180" : ""}`} />
                </div>
                {showServicesDropdown && (
                  <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 shadow-lg rounded-lg p-4 z-50">
                    <div className="grid grid-cols-1 gap-2 text-sm text-gray-700">
                      {services.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={scrollToTop}
                          className="px-3 py-2 rounded-md hover:bg-[#ebe7f8] hover:text-[#613EA3] transition"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {isAuthenticated ? (
                <UserProfile />
              ) : (
                <div className="flex items-center gap-4 ml-4">
                  <button
                    onClick={() => {
                      setAuthMode("login");
                      setShowAuthModal(true);
                    }}
                    className="text-gray-700 hover:text-[#613EA3] font-semibold px-4 py-2 rounded-lg hover:bg-[#f5f1ff] transition"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      setAuthMode("register");
                      setShowAuthModal(true);
                    }}
                    className="bg-[#613EA3] text-white px-6 py-2 rounded-full hover:shadow-lg transition-transform hover:scale-105"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {[{ name: "Home", path: "/" }, { name: "About", path: "/about" }, { name: "Services", path: "/services" }, { name: "Contact", path: "/contact" }].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => {
                    scrollToTop();
                    setIsMenuOpen(false);
                  }}
                  className={`block px-4 py-3 rounded-lg transition ${
                    isActivePage(item.path)
                      ? "bg-[#613EA3]/10 text-[#613EA3] font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {isAuthenticated ? (
                <div className="pt-4 border-t border-gray-200">
                  <UserProfile />
                </div>
              ) : (
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      setAuthMode("login");
                      setShowAuthModal(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-gray-700 font-semibold rounded-lg hover:bg-gray-100"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      setAuthMode("register");
                      setShowAuthModal(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-[#613EA3] text-white py-3 rounded-full font-semibold hover:shadow-lg transition"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
    </>
  );
};
