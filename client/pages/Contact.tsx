"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
// import axios from "axios";
import { Link } from "react-router-dom";
import { NavBar } from "../components/navigation/NavBar";
import Footer from "@/components/Footer";
const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      title: "Email",
      value: "email.com",
      icon: Mail,
    },
    {
      title: "Phone",
      value: "+91 9876543210",
      icon: Phone,
    },
    {
      title: "Address",
      value: "Chennai, Tamil Nadu, India",
      icon: MapPin,
    },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // await axios.post("/api/contact", formData);
      toast({ title: "Message sent successfully!" });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      toast({ title: "Failed to send message. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <><NavBar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Side - Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                Get in
                <span className="bg-gradient-to-r from-[#4b2e82] via-[#4b2e82] to-[#4b2e82] bg-clip-text text-transparent">
                  {" "}Touch
                </span>
              </h1>
              <p className="text-lg text-gray-700">
                We’re here to listen and support. Reach out to us for any inquiries,
                collaborations, or just to say hello. Your voice matters.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center"
                  >
                    <div className="w-16 h-16 bg-[#4b2e82] rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <Link
                  to="/services"
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-[#F3EDFB] to-[#e8ddf8] rounded-xl hover:shadow-md transition-all duration-200 group"
                >
                  <span className="font-semibold text-[#4b2e82]">
                    Explore Our Services
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#4b2e82] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-[#F3EDFB] to-[#e8ddf8] rounded-xl hover:shadow-md transition-all duration-200 group"
                >
                  <span className="font-semibold text-[#4b2e82]">About Us</span>
                  <ArrowRight className="w-5 h-5 text-[#4b2e82] group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-[#F3EDFB] to-[#e8ddf8] rounded-xl hover:shadow-md transition-all duration-200 group"
                >
                  <span className="font-semibold text-[#4b2e82]">Call Us Now</span>
                  <Phone className="w-5 h-5 text-[#4b2e82] group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl shadow-xl p-8 space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-[#4b2e82] to-[#4b2e82] hover:shadow-xl transform hover:scale-105"
                    } text-white`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );

};

export default ContactPage;
