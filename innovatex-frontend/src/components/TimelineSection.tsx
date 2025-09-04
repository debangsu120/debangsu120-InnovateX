import React from "react";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

export function TimelineSection() {
  const timelineData = [
    {
      day: "Day 1 - March 15, 2025",
      events: [
        {
          time: "9:00 AM",
          title: "Registration & Welcome Coffee",
          description: "Check-in, networking, and breakfast",
          location: "Main Lobby"
        },
        {
          time: "10:00 AM",
          title: "Opening Keynote",
          description: "The Future of AI and Machine Learning",
          location: "Main Auditorium"
        },
        {
          time: "11:30 AM",
          title: "Workshop: Web3 Development",
          description: "Hands-on blockchain programming",
          location: "Lab A"
        },
        {
          time: "1:00 PM",
          title: "Networking Lunch",
          description: "Connect with peers and speakers",
          location: "Campus Dining"
        },
        {
          time: "2:30 PM",
          title: "Panel: Startup Ecosystem",
          description: "From idea to IPO with industry leaders",
          location: "Conference Hall"
        },
        {
          time: "4:00 PM",
          title: "Hackathon Begins",
          description: "24-hour coding challenge starts",
          location: "Innovation Center"
        }
      ]
    },
    {
      day: "Day 2 - March 16, 2025",
      events: [
        {
          time: "9:00 AM",
          title: "Keynote: Quantum Computing",
          description: "Exploring the quantum frontier",
          location: "Main Auditorium"
        },
        {
          time: "10:30 AM",
          title: "Workshop: AI Ethics",
          description: "Responsible AI development",
          location: "Lab B"
        },
        {
          time: "12:00 PM",
          title: "Hackathon Presentations",
          description: "Teams present their solutions",
          location: "Innovation Center"
        },
        {
          time: "2:00 PM",
          title: "Awards Ceremony",
          description: "Recognizing excellence and innovation",
          location: "Main Auditorium"
        },
        {
          time: "3:30 PM",
          title: "Closing & Networking",
          description: "Final thoughts and connections",
          location: "Campus Courtyard"
        }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030213]">
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Event <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Two days packed with inspiring talks, hands-on workshops, and networking opportunities.
          </p>
        </div>
        
        {timelineData.map((day, dayIndex) => (
          <div key={day.day} className="mb-16 last:mb-0">
            <h3 className="text-2xl font-bold text-center text-white mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {day.day}
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
              
              <div className="space-y-12">
                {day.events.map((event, index) => (
                  <div 
                    key={index} 
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg z-10" />
                    
                    {/* Content Card */}
                    <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20">
                        <div className="flex items-start gap-3 mb-3">
                          <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                          <span className="text-blue-400 font-semibold">{event.time}</span>
                        </div>
                        
                        <h4 className="text-xl font-bold text-white mb-2">{event.title}</h4>
                        <p className="text-gray-300 mb-3">{event.description}</p>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}