import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin, Twitter } from "lucide-react";

export function SpeakersSection() {
  const speakers = [
    {
      name: "Dr Archie Saikia",
      designation: "Chief AI Officer, TechCorp",
      bio: "Leading AI research and implementation across Fortune 500 companies",
      image: "https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRlY2glMjBleGVjdXRpdmV8ZW58MXx8fHwxNzU2ODQ0NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Joti Prakash Sharma",
      designation: "Founder & CEO, CloudScale",
      bio: "Serial entrepreneur with 3 successful exits in cloud infrastructure",
      image: "https://images.unsplash.com/photo-1601489865452-407a1b801dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzcyUyMHN1aXR8ZW58MXx8fHwxNzU2NzczODg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Rakesh Medhi",
      designation: "Lead Developer, OpenSource Foundation",
      bio: "Maintaining critical open-source projects used by millions of developers",
      image: "https://images.unsplash.com/photo-1638452033979-14fba9e17fbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMGRldmVsb3BlcnxlbnwxfHx8fDE3NTY4NDEyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Gourab Bhuyan",
      designation: "Quantum Computing Researcher, IBM",
      bio: "Pioneering quantum algorithms for practical applications",
      image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc1Njc5NDM4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-float-delayed" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Speakers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from industry leaders, innovators, and visionaries who are shaping the future of technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={speaker.name} 
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glassmorphism Card */}
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/15">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative z-10 text-center">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/40 transition-all duration-300">
                      <ImageWithFallback
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Floating Ring */}
                    <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-md group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{speaker.name}</h3>
                  <p className="text-blue-300 font-medium mb-3">{speaker.designation}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">{speaker.bio}</p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center gap-4">
                    <a 
                      href={speaker.linkedin}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a 
                      href={speaker.twitter}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <Twitter className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}