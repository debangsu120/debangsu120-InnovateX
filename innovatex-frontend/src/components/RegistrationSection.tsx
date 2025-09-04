import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { User, Mail, Phone, Sparkles } from "lucide-react";

export function RegistrationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  // Get API URL from environment variable with fallback for development
  const API_URL = (import.meta as any).env?.VITE_API_URL || 'http://localhost:5000';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Registration successful! Check your email for confirmation.");
        setFormData({ name: "", email: "", phone: "" });
      } else {
        toast.error(data.message || data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to connect to server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030213]">
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">
                Limited Spots Available
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Reserve Your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Spot
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join 500+ tech enthusiasts, students, and professionals for two
              days of innovation, learning, and networking at InnovateX 2025.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-gray-300">
                  Access to all sessions and workshops
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full" />
                <span className="text-gray-300">
                  Networking opportunities with industry leaders
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full" />
                <span className="text-gray-300">
                  Exclusive swag and event materials
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span className="text-gray-300">
                  Certificate of participation
                </span>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="relative">
            {/* Glassmorphism Card */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl opacity-50" />

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Register Now
                  </h3>
                  <p className="text-gray-300">
                    Secure your spot at InnovateX 2025
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <Label
                      htmlFor="name"
                      className="text-white mb-2 block"
                    >
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12 backdrop-blur-sm focus:bg-white/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Label
                      htmlFor="email"
                      className="text-white mb-2 block"
                    >
                      Email Address
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12 backdrop-blur-sm focus:bg-white/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Label
                      htmlFor="phone"
                      className="text-white mb-2 block"
                    >
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-xl h-12 backdrop-blur-sm focus:bg-white/20 transition-all duration-300"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
                  >
                    {loading
                      ? "Registering..."
                      : "Register for InnovateX 2025"}
                  </Button>
                </form>

                <p className="text-center text-gray-400 text-sm mt-6">
                  By registering, you agree to our terms and conditions. We'll
                  send you event updates and reminders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
