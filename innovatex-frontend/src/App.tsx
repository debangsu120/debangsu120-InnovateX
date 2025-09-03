import React from "react";
import { Routes, Route } from "react-router-dom";

//import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { TimelineSection } from "./components/TimelineSection";
import { SpeakersSection } from "./components/SpeakersSection";
import { CountdownSection } from "./components/CountdownSection";
import { RegistrationSection } from "./components/RegistrationSection";
import { GallerySection } from "./components/GallerySection";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar always visible */}
      {/* <Navbar /> */}

      <main className="flex-1">
        <Routes>
          {/* Home Page - all sections stacked */}
          <Route
            path="/"
            element={
              <div>
                <HeroSection />
                <CountdownSection />
                <AboutSection />
                <TimelineSection />
                <SpeakersSection />
                <GallerySection />
                <RegistrationSection />
                <FAQSection />
                <Footer />
              </div>
            }
          />

          {/* Dedicated routes */}
          <Route path="/register" element={<RegistrationSection />} />
          <Route path="/schedule" element={<TimelineSection />} />
        </Routes>
      </main>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}
