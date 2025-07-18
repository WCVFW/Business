import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  CreditCard,
  Check,
  AlertCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  Shield,
  Zap,
  Heart,
} from "lucide-react";

interface BookingWidgetProps {
  service: {
    id: string;
    name: string;
    type: string;
    description: string;
    price: number;
    image: string;
    duration: string;
    maxParticipants: number;
    location: string;
    rating: number;
    reviews: number;
    features: string[];
    cancellationPolicy: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

interface TimeSlot {
  time: string;
  available: boolean;
  price?: number;
}

interface BookingData {
  date: string;
  time: string;
  participants: number;
  totalPrice: number;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    specialRequests: string;
  };
  paymentMethod: string;
}

const generateTimeSlots = (date: string): TimeSlot[] => {
  const baseSlots = [
    { time: "09:00", available: true },
    { time: "10:00", available: true },
    { time: "11:00", available: false },
    { time: "12:00", available: true },
    { time: "13:00", available: true },
    { time: "14:00", available: true },
    { time: "15:00", available: false },
    { time: "16:00", available: true },
    { time: "17:00", available: true },
  ];

  return baseSlots.map((slot) => ({
    ...slot,
    available: Math.random() > 0.3, // Random availability for demo
  }));
};

export const BookingWidget: React.FC<BookingWidgetProps> = ({
  service,
  isOpen,
  onClose,
}) => {
  const { user, isAuthenticated } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [participants, setParticipants] = useState(1);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData>({
    date: "",
    time: "",
    participants: 1,
    totalPrice: 0,
    customerInfo: {
      name: user?.name || "",
      email: user?.email || "",
      phone: "",
      specialRequests: "",
    },
    paymentMethod: "card",
  });

  useEffect(() => {
    if (selectedDate) {
      setTimeSlots(generateTimeSlots(selectedDate));
    }
  }, [selectedDate]);

  useEffect(() => {
    const totalPrice = service.price * participants;
    setBookingData((prev) => ({
      ...prev,
      date: selectedDate,
      time: selectedTime,
      participants,
      totalPrice,
    }));
  }, [selectedDate, selectedTime, participants, service.price]);

  if (!isOpen) return null;

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime("");
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleBookingSubmit = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Success - show confirmation
      setCurrentStep(5);
    } catch (error) {
      console.error("Booking failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const generateCalendarDays = () => {
    const today = new Date();
    const days = [];

    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push({
        date: date.toISOString().split("T")[0],
        day: date.getDate(),
        month: date.toLocaleDateString("en-US", { month: "short" }),
        weekday: date.toLocaleDateString("en-US", { weekday: "short" }),
        available: Math.random() > 0.2, // Random availability for demo
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();

  const steps = [
    { number: 1, title: "Select Date", icon: Calendar },
    { number: 2, title: "Choose Time", icon: Clock },
    { number: 3, title: "Details", icon: Users },
    { number: 4, title: "Payment", icon: CreditCard },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Book {service.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {currentStep <= 4 && (
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = currentStep === step.number;
                const isCompleted = currentStep > step.number;

                return (
                  <React.Fragment key={step.number}>
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          isCompleted
                            ? "bg-green-500 text-white"
                            : isActive
                              ? "bg-white text-primary-600"
                              : "bg-white/20 text-white/60"
                        }`}
                      >
                        {isCompleted ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          step.number
                        )}
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          isActive ? "text-white" : "text-white/60"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flex-1 h-px bg-white/20"></div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {/* Step 1: Date Selection */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Select Your Preferred Date
                </h3>
                <p className="text-gray-600">
                  Choose from available dates for {service.name}
                </p>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {calendarDays.map((day) => (
                  <button
                    key={day.date}
                    onClick={() => day.available && handleDateSelect(day.date)}
                    disabled={!day.available}
                    className={`p-3 rounded-xl text-center transition-all duration-200 ${
                      selectedDate === day.date
                        ? "bg-primary-600 text-white shadow-lg"
                        : day.available
                          ? "bg-gray-50 hover:bg-primary-50 text-gray-900"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <div className="text-xs text-gray-500 mb-1">
                      {day.weekday}
                    </div>
                    <div className="font-semibold">{day.day}</div>
                    <div className="text-xs">{day.month}</div>
                  </button>
                ))}
              </div>

              {selectedDate && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-medium">
                      Date selected:{" "}
                      {new Date(selectedDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Time Selection */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Choose Your Time
                </h3>
                <p className="text-gray-600">
                  Available time slots for{" "}
                  {new Date(selectedDate).toLocaleDateString()}
                </p>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() =>
                      slot.available && handleTimeSelect(slot.time)
                    }
                    disabled={!slot.available}
                    className={`p-4 rounded-xl text-center transition-all duration-200 ${
                      selectedTime === slot.time
                        ? "bg-primary-600 text-white shadow-lg"
                        : slot.available
                          ? "bg-gray-50 hover:bg-primary-50 text-gray-900 border-2 border-transparent hover:border-primary-200"
                          : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    <div className="font-semibold">{slot.time}</div>
                    {slot.available ? (
                      <div className="text-xs text-green-600 mt-1">
                        Available
                      </div>
                    ) : (
                      <div className="text-xs text-red-600 mt-1">Booked</div>
                    )}
                  </button>
                ))}
              </div>

              {selectedTime && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-center space-x-2">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-medium">
                      Time selected: {selectedTime}
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Details */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Booking Details
                </h3>
                <p className="text-gray-600">Tell us more about your booking</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Participants
                  </label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() =>
                        participants > 1 && setParticipants(participants - 1)
                      }
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      -
                    </button>
                    <span className="w-12 text-center font-semibold text-lg">
                      {participants}
                    </span>
                    <button
                      onClick={() =>
                        participants < service.maxParticipants &&
                        setParticipants(participants + 1)
                      }
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Max {service.maxParticipants} participants
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={bookingData.customerInfo.name}
                    onChange={(e) =>
                      setBookingData((prev) => ({
                        ...prev,
                        customerInfo: {
                          ...prev.customerInfo,
                          name: e.target.value,
                        },
                      }))
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={bookingData.customerInfo.email}
                    onChange={(e) =>
                      setBookingData((prev) => ({
                        ...prev,
                        customerInfo: {
                          ...prev.customerInfo,
                          email: e.target.value,
                        },
                      }))
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={bookingData.customerInfo.phone}
                    onChange={(e) =>
                      setBookingData((prev) => ({
                        ...prev,
                        customerInfo: {
                          ...prev.customerInfo,
                          phone: e.target.value,
                        },
                      }))
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  value={bookingData.customerInfo.specialRequests}
                  onChange={(e) =>
                    setBookingData((prev) => ({
                      ...prev,
                      customerInfo: {
                        ...prev.customerInfo,
                        specialRequests: e.target.value,
                      },
                    }))
                  }
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder="Any special requirements or requests..."
                />
              </div>

              {/* Booking Summary */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Booking Summary
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <span className="font-medium">{service.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-medium">
                      {new Date(selectedDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Participants:</span>
                    <span className="font-medium">{participants}</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span>${bookingData.totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Payment */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Payment Details
                </h3>
                <p className="text-gray-600">Secure payment processing</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Order Summary
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h5 className="font-medium text-gray-900">
                          {service.name}
                        </h5>
                        <p className="text-sm text-gray-600">
                          {service.location}
                        </p>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">
                            {service.rating}
                          </span>
                          <span className="text-sm text-gray-500">
                            ({service.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-3 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Date & Time:</span>
                        <span>
                          {new Date(selectedDate).toLocaleDateString()} at{" "}
                          {selectedTime}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Participants:</span>
                        <span>{participants}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Price per person:</span>
                        <span>${service.price}</span>
                      </div>
                      <div className="flex justify-between font-semibold text-lg border-t pt-2">
                        <span>Total:</span>
                        <span>${bookingData.totalPrice}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-blue-900">
                          Secure Payment
                        </p>
                        <p className="text-blue-700">
                          Your payment information is encrypted and secure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-yellow-900">
                      Cancellation Policy
                    </p>
                    <p className="text-yellow-800">
                      {service.cancellationPolicy}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Confirmation */}
          {currentStep === 5 && (
            <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-12 h-12 text-green-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Booking Confirmed!
                </h3>
                <p className="text-xl text-gray-600">
                  Your booking for {service.name} has been confirmed.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-semibold text-green-900 mb-4">
                  Booking Details
                </h4>
                <div className="text-left space-y-2 text-sm text-green-800">
                  <div className="flex justify-between">
                    <span>Booking ID:</span>
                    <span className="font-mono">
                      TF-{Date.now().toString().slice(-6)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service:</span>
                    <span>{service.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date & Time:</span>
                    <span>
                      {new Date(selectedDate).toLocaleDateString()} at{" "}
                      {selectedTime}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Participants:</span>
                    <span>{participants}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Paid:</span>
                    <span className="font-semibold">
                      ${bookingData.totalPrice}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                A confirmation email has been sent to{" "}
                {bookingData.customerInfo.email}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        {currentStep <= 4 && (
          <div className="border-t p-6 bg-gray-50">
            <div className="flex items-center justify-between">
              <button
                onClick={handlePreviousStep}
                disabled={currentStep === 1}
                className={`flex items-center space-x-2 px-6 py-2 rounded-lg transition-colors ${
                  currentStep === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Previous</span>
              </button>

              <div className="text-center">
                {currentStep === 4 && (
                  <p className="text-lg font-bold text-gray-900">
                    Total: ${bookingData.totalPrice}
                  </p>
                )}
              </div>

              <button
                onClick={
                  currentStep === 4 ? handleBookingSubmit : handleNextStep
                }
                disabled={
                  (currentStep === 1 && !selectedDate) ||
                  (currentStep === 2 && !selectedTime) ||
                  (currentStep === 3 &&
                    (!bookingData.customerInfo.name ||
                      !bookingData.customerInfo.email)) ||
                  isLoading
                }
                className={`flex items-center space-x-2 px-6 py-2 rounded-lg transition-all duration-200 ${
                  (currentStep === 1 && !selectedDate) ||
                  (currentStep === 2 && !selectedTime) ||
                  (currentStep === 3 &&
                    (!bookingData.customerInfo.name ||
                      !bookingData.customerInfo.email)) ||
                  isLoading
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-primary-500 to-primary-700 text-white hover:shadow-lg"
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </>
                ) : currentStep === 4 ? (
                  <>
                    <span>Confirm Booking</span>
                    <CreditCard className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    <span>Next</span>
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {currentStep === 5 && (
          <div className="border-t p-6 bg-gray-50 text-center">
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-200"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
