import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { NavBar } from "../components/navigation/NavBar";
import {
  Calendar,
  MapPin,
  Clock,
  Star,
  TrendingUp,
  CreditCard,
  Bell,
  Settings,
  Download,
  Eye,
  Edit3,
  Trash2,
  Plus,
  Filter,
  Search,
  MoreVertical,
  CheckCircle,
  XCircle,
  AlertCircle,
  Plane,
  Hotel,
  Coffee,
  Bike,
  Heart,
  Stethoscope,
  Scissors,
} from "lucide-react";

interface Booking {
  id: string;
  serviceName: string;
  serviceType: string;
  serviceIcon: any;
  description: string;
  date: string;
  time: string;
  price: number;
  status: "confirmed" | "pending" | "completed" | "cancelled";
  location: string;
  duration: string;
  participants: number;
  image: string;
}

interface Stats {
  totalBookings: number;
  completedTrips: number;
  upcomingBookings: number;
  totalSpent: number;
  favoriteService: string;
  memberSince: string;
}

const serviceIcons: { [key: string]: React.ComponentType } = {
  travel: Plane,
  hotel: Hotel,
  food: Coffee,
  bike: Bike,
  beauty: Heart,
  medical: Stethoscope,
  salon: Scissors,
};

const mockBookings: Booking[] = [
  {
    id: "1",
    serviceName: "European Adventure",
    serviceType: "travel",
    serviceIcon: Plane,
    description: "14-day tour through 5 European countries",
    date: "2024-03-15",
    time: "09:00",
    price: 3299,
    status: "confirmed",
    location: "Paris, France",
    duration: "14 days",
    participants: 2,
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80",
  },
  {
    id: "2",
    serviceName: "Grand Hotel Suite",
    serviceType: "hotel",
    serviceIcon: Hotel,
    description: "Luxury suite with city views",
    date: "2024-02-20",
    time: "15:00",
    price: 450,
    status: "completed",
    location: "New York, USA",
    duration: "3 nights",
    participants: 2,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80",
  },
  {
    id: "3",
    serviceName: "Mountain Bike Adventure",
    serviceType: "bike",
    serviceIcon: Bike,
    description: "Guided mountain biking through scenic trails",
    date: "2024-04-10",
    time: "08:00",
    price: 89,
    status: "pending",
    location: "Colorado, USA",
    duration: "Full day",
    participants: 1,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
  },
  {
    id: "4",
    serviceName: "Spa & Wellness Package",
    serviceType: "beauty",
    serviceIcon: Heart,
    description: "Full day relaxation and beauty treatments",
    date: "2024-02-28",
    time: "10:00",
    price: 280,
    status: "confirmed",
    location: "Local Spa Center",
    duration: "6 hours",
    participants: 1,
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80",
  },
];

const mockStats: Stats = {
  totalBookings: 12,
  completedTrips: 8,
  upcomingBookings: 3,
  totalSpent: 8967,
  favoriteService: "Travel",
  memberSince: "January 2023",
};

export default function Dashboard() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>(mockBookings);
  const [stats, setStats] = useState<Stats>(mockStats);
  const [selectedTab, setSelectedTab] = useState<
    "overview" | "bookings" | "profile" | "settings"
  >("overview");
  const [filterStatus, setFilterStatus] = useState<
    "all" | "confirmed" | "pending" | "completed" | "cancelled"
  >("all");
  const [searchTerm, setSearchTerm] = useState("");

  if (!user) {
    return (
      <div className="min-h-screen bg-white">
        <NavBar />
        <div className="pt-24 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Please Sign In
            </h1>
            <p className="text-gray-600 mb-8">
              You need to be signed in to access your dashboard.
            </p>
            <Link
              to="/"
              className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const filteredBookings = bookings.filter((booking) => {
    const matchesStatus =
      filterStatus === "all" || booking.status === filterStatus;
    const matchesSearch =
      booking.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "pending":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case "completed":
        return <CheckCircle className="w-5 h-5 text-blue-500" />;
      case "cancelled":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    Welcome back, {user.name}!
                  </h1>
                  <p className="text-blue-100 text-lg">
                    Manage your bookings and explore new adventures
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <Calendar className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {[
                  { key: "overview", label: "Overview", icon: TrendingUp },
                  { key: "bookings", label: "My Bookings", icon: Calendar },
                  { key: "profile", label: "Profile", icon: Settings },
                ].map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setSelectedTab(key as any)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                      selectedTab === key
                        ? "border-primary-500 text-primary-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          {selectedTab === "overview" && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Total Bookings
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {stats.totalBookings}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>+12% from last month</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Completed
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {stats.completedTrips}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-green-600">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>Great experience rate</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Upcoming
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {stats.upcomingBookings}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-blue-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>Next: March 15</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        Total Spent
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        ${stats.totalSpent.toLocaleString()}
                      </p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-gray-600">
                    <Star className="w-4 h-4 mr-1" />
                    <span>Premium member</span>
                  </div>
                </div>
              </div>

              {/* Recent Bookings */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Recent Bookings
                    </h3>
                    <Link
                      to="#"
                      onClick={() => setSelectedTab("bookings")}
                      className="text-primary-600 hover:text-primary-700 font-medium text-sm"
                    >
                      View all
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {bookings.slice(0, 3).map((booking) => {
                      const IconComponent = booking.serviceIcon;
                      return (
                        <div
                          key={booking.id}
                          className="flex items-center space-x-4 p-4 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-200"
                        >
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-gray-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">
                              {booking.serviceName}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {booking.location} • {booking.date}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">
                              ${booking.price}
                            </p>
                            <div
                              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}
                            >
                              {booking.status}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedTab === "bookings" && (
            <div className="space-y-6">
              {/* Filters */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search bookings..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value as any)}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="all">All Status</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                  <Link
                    to="/services"
                    className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 space-x-2"
                  >
                    <Plus className="w-5 h-5" />
                    <span>New Booking</span>
                  </Link>
                </div>
              </div>

              {/* Bookings List */}
              <div className="space-y-4">
                {filteredBookings.map((booking) => {
                  const IconComponent = booking.serviceIcon;
                  return (
                    <div
                      key={booking.id}
                      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200"
                    >
                      <div className="md:flex">
                        <div className="md:w-48 h-48 md:h-auto">
                          <img
                            src={booking.image}
                            alt={booking.serviceName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 p-6">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center space-x-3 mb-2">
                                <IconComponent className="w-6 h-6 text-primary-600" />
                                <h3 className="text-xl font-bold text-gray-900">
                                  {booking.serviceName}
                                </h3>
                                <div
                                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}
                                >
                                  {getStatusIcon(booking.status)}
                                  <span className="ml-1 capitalize">
                                    {booking.status}
                                  </span>
                                </div>
                              </div>
                              <p className="text-gray-600 mb-4">
                                {booking.description}
                              </p>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div className="flex items-center space-x-2">
                                  <Calendar className="w-4 h-4 text-gray-400" />
                                  <span>{booking.date}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Clock className="w-4 h-4 text-gray-400" />
                                  <span>{booking.time}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <MapPin className="w-4 h-4 text-gray-400" />
                                  <span>{booking.location}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <span className="text-gray-400">
                                    Duration:
                                  </span>
                                  <span>{booking.duration}</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-2xl font-bold text-gray-900 mb-2">
                                ${booking.price}
                              </p>
                              <div className="flex items-center space-x-2">
                                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                                  <Eye className="w-5 h-5" />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                                  <Edit3 className="w-5 h-5" />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                                  <Trash2 className="w-5 h-5" />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                                  <MoreVertical className="w-5 h-5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredBookings.length === 0 && (
                <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100">
                  <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No bookings found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {searchTerm || filterStatus !== "all"
                      ? "Try adjusting your search or filter criteria"
                      : "You don't have any bookings yet. Start planning your next adventure!"}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-200 space-x-2"
                  >
                    <Plus className="w-5 h-5" />
                    <span>Browse Services</span>
                  </Link>
                </div>
              )}
            </div>
          )}

          {selectedTab === "profile" && (
            <div className="space-y-6">
              {/* Profile Settings */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Profile Settings
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {user.name[0]}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">
                          {user.name}
                        </h4>
                        <p className="text-gray-600">{user.email}</p>
                        <p className="text-sm text-gray-500">
                          Member since {stats.memberSince}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue={user.name}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          defaultValue={user.email}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-4">
                      Preferences
                    </h5>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Currency
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                          <option>USD - US Dollar</option>
                          <option>EUR - Euro</option>
                          <option>GBP - British Pound</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Language
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                          <option>English</option>
                          <option>Spanish</option>
                          <option>French</option>
                          <option>German</option>
                        </select>
                      </div>
                      <div>
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                          />
                          <span className="text-sm text-gray-700">
                            Email notifications
                          </span>
                        </label>
                      </div>
                      <div>
                        <label className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                          />
                          <span className="text-sm text-gray-700">
                            SMS notifications
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-end space-x-4">
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                  <button className="px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-lg hover:shadow-lg transition-all duration-200">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
