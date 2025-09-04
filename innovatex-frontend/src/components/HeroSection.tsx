import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroSection() {
  useEffect(() => {
    // Load UnicornStudio script
    if (!(window as any).UnicornStudio) {
      (window as any).UnicornStudio = { isInitialized: false };
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js";
      script.onload = function() {
        if (!(window as any).UnicornStudio.isInitialized) {
          (window as any).UnicornStudio.init();
          (window as any).UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* UnicornStudio Background Animation */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          data-us-project="lp4z6zBl9MRXJfAmjGCm" 
          style={{
            width: '100%',
            height: '100%',
            minHeight: '100vh',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
          }}
        />
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <h1
          className="text-6xl md:text-8xl font-extrabold text-white mb-6 tracking-tight"
          style={{ fontFamily: 'Capella Bellatrix, serif', textShadow: '0 2px 10px rgba(0, 0, 0, 0.35)' }}
        >
          <span className="text-gray ">
            InnovateX
          </span>
          <span className="text-white block">2025</span>
        </h1>
        
        <p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          style={{ textShadow: '0 1px 6px rgba(0, 0, 0, 0.3)' }}
        >
          Shape the Future of Technology. Connect. Learn. Innovate.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-2 text-white">
            <Calendar className="w-5 h-5" />
            <span className="text-lg" style={{ textShadow: '0 1px 6px rgba(0, 0, 0, 0.3)' }}>September 15-16, 2025</span>
          </div>
          <div className="flex items-center gap-2 text-white">
            <MapPin className="w-5 h-5" />
            <span className="text-lg" style={{ textShadow: '0 1px 6px rgba(0, 0, 0, 0.3)' }}>Tech University Campus</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/register">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Register Now
            </Button>
          </Link>

          <Link to="/schedule">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-black px-12 py-4 text-lg rounded-2xl hover:bg-white hover:text-blue-700 transition-all duration-300"
            >
              View Schedule
            </Button>
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
