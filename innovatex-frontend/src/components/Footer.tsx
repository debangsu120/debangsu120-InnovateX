import React from "react";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  ExternalLink
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: "About Event", href: "#about" },
    { label: "Speakers", href: "#speakers" },
    { label: "Schedule", href: "#timeline" },
    { label: "Register", href: "#register" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ];
  
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];
  
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "Tech University Campus\n123 Innovation Drive\nTech City, TC 12345"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@innovatex2025.com"
    },
    {
      icon: Calendar,
      title: "Event Dates",
      content: "March 15-16, 2025"
    }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030213]">
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed" />
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              {/* Brand Section */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      InnovateX
                    </span>
                    <span className="text-white block">2025</span>
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    The premier technology conference bringing together innovators, entrepreneurs, and tech enthusiasts to shape the future.
                  </p>
                </div>
                
                {/* Social Links */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 className="text-white font-semibold mb-6 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5" />
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact Information */}
              <div className="lg:col-span-2">
                <h4 className="text-white font-semibold mb-6">Contact Information</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-blue-300" />
                      </div>
                      <div>
                        <h5 className="text-white font-medium mb-1">{info.title}</h5>
                        <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* University Section */}
        <div className="border-t border-white/10">
          <div className="px-6 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold text-white mb-2">Tech University</h4>
                  <p className="text-gray-300">
                    Leading innovation in technology education and research since 1995
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#"
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/20 text-center"
                  >
                    Visit University Website
                  </a>
                  <a
                    href="#"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 hover:scale-105 text-center"
                  >
                    Academic Programs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10">
          <div className="px-6 py-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                <div className="text-center md:text-left">
                  <p>
                    © {currentYear} InnovateX 2025. All rights reserved. | Organized by Tech University
                  </p>
                </div>
                <div className="flex gap-6">
                  <a href="#" className="hover:text-white transition-colors duration-300">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-white transition-colors duration-300">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-white transition-colors duration-300">
                    Code of Conduct
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}