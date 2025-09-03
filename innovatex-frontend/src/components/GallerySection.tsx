import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1560439514-4e9645039924?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMGV2ZW50JTIwbmV0d29ya2luZyUyMHN0dWRlbnRzfGVufDF8fHx8MTc1Njg0NDk1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Networking Sessions",
      description: "Connect with peers and industry professionals"
    },
    {
      src: "https://images.unsplash.com/photo-1565687981296-535f09db714e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwaGFja2F0aG9uJTIwcHJvZ3JhbW1pbmclMjBzdHVkZW50c3xlbnwxfHx8fDE3NTY4NDQ5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Hackathon Experience",
      description: "24-hour coding challenge and innovation"
    },
    {
      src: "https://images.unsplash.com/photo-1559146820-a75deba24b58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjB0ZWNoJTIwcHJlc2VudGF0aW9uJTIwYXVkaXRvcml1bXxlbnwxfHx8fDE3NTY4NDQ5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Keynote Presentations",
      description: "Inspiring talks from technology leaders"
    },
    {
      src: "https://images.unsplash.com/photo-1695891689981-0be360e84d3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwd29ya3Nob3AlMjBjb2RpbmclMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1Njg0NDk2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Hands-on Workshops",
      description: "Interactive learning and skill development"
    },
    {
      src: "https://images.unsplash.com/photo-1623121608226-ca93dec4d94e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG5ldHdvcmtpbmclMjBldmVudHxlbnwxfHx8fDE3NTY3OTc1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Startup Showcase",
      description: "Innovative startups presenting their solutions"
    },
    {
      src: "https://images.unsplash.com/photo-1618665276202-0b744599cf56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxpbm5vdmF0aW9uJTIwYXdhcmRzJTIwY2VyZW1vbnklMjB0ZWNofGVufDF8fHx8MTc1Njg0NDk2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Awards Ceremony",
      description: "Celebrating innovation and excellence"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const getVisibleImages = () => {
    const images = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % galleryImages.length;
      images.push({ ...galleryImages[index], index });
    }
    return images;
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-300/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-purple-300/10 rounded-full blur-2xl animate-float-delayed" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Past Event <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Highlights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Relive the excitement and innovation from previous InnovateX events. Join us to create new memories in 2025!
          </p>
        </div>
        
        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
          </button>
          
          {/* Image Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {getVisibleImages().map((image, displayIndex) => (
              <div 
                key={image.index}
                className={`group relative overflow-hidden rounded-3xl ${
                  displayIndex === 1 ? 'md:scale-110 md:z-10' : 'md:scale-95'
                } transition-all duration-500 hover:scale-105`}
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/70 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <ImageWithFallback
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* View Icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
                    <p className="text-gray-600">{image.description}</p>
                  </div>
                  
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Attendees" },
            { number: "50+", label: "Speakers" },
            { number: "20+", label: "Workshops" },
            { number: "48hr", label: "Hackathon" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}