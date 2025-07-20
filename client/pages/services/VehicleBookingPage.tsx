import { useState } from "react";
import {
  BikeIcon,
  CarIcon,
  MapPin,
  // ScooterIcon,
  CalendarClock,
  XCircle,
} from "lucide-react";

type Vehicle = {
  type: string;
  price: string;
  icon: JSX.Element;
  image: string;
  highlights: string[];
};

const vehicles: Vehicle[] = [
  {
    type: "Bike",
    price: "₹499/day",
    icon: <BikeIcon className="w-6 h-6" />,
    image: "🏍️",
    highlights: ["100cc - 200cc", "Fuel included", "Solo trips"],
  },
  {
    type: "Scooter",
    price: "₹399/day",
    icon: <BikeIcon className="w-6 h-6" />,
    image: "🛵",
    highlights: ["Electric & Petrol", "Helmet included", "Easy parking"],
  },
  {
    type: "Cab",
    price: "₹999/day",
    icon: <CarIcon className="w-6 h-6" />,
    image: "🚗",
    highlights: ["AC Sedan", "Driver included", "Outstation trips"],
  },
];

export default function VehicleBookingPage() {
  const [selected, setSelected] = useState<Vehicle | null>(null);
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [datetime, setDatetime] = useState("");
  const [duration, setDuration] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleBooking = () => {
    if (!pickup || !drop || !datetime || !duration) {
      alert("Please fill in all booking details.");
      return;
    }

    // Replace with API call later
    setSubmitted(true);

    setTimeout(() => {
      setPickup("");
      setDrop("");
      setDatetime("");
      setDuration("");
      setSubmitted(false);
      setSelected(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Vehicle Rentals</h1>
        <p className="text-gray-600">Choose your ride and book with ease.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {vehicles.map((v) => (
          <div
            key={v.type}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition cursor-pointer"
            onClick={() => setSelected(v)}
          >
            <div className="text-5xl text-center">{v.image}</div>
            <h3 className="text-xl font-bold mt-4 mb-2 text-center">{v.type}</h3>
            <p className="text-center text-green-600 font-semibold">{v.price}</p>
            <ul className="mt-4 text-sm text-gray-600 space-y-1">
              {v.highlights.map((h, i) => (
                <li key={i}>• {h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Booking Form Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-xl p-8 rounded-xl shadow-xl relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
            >
              <XCircle className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <div className="text-5xl mb-2">{selected.image}</div>
              <h2 className="text-2xl font-bold">Book a {selected.type}</h2>
              <p className="text-sm text-gray-500">{selected.price}</p>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Pickup Location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full border p-3 rounded-md"
              />
              <input
                type="text"
                placeholder="Drop Location"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                className="w-full border p-3 rounded-md"
              />
              <input
                type="datetime-local"
                value={datetime}
                onChange={(e) => setDatetime(e.target.value)}
                className="w-full border p-3 rounded-md"
              />
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full border p-3 rounded-md"
              >
                <option value="">Select Rental Duration</option>
                <option value="1 Hour">1 Hour</option>
                <option value="Half Day">Half Day</option>
                <option value="Full Day">Full Day</option>
                <option value="2 Days">2 Days</option>
              </select>

              <button
                onClick={handleBooking}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md flex items-center justify-center"
              >
                <CalendarClock className="w-5 h-5 mr-2" />
                Confirm Booking
              </button>

              {submitted && (
                <p className="text-green-600 text-center mt-4 font-semibold">
                  Booking Confirmed! Ride details will be sent shortly.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
