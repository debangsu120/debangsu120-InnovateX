import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import React, { useState } from "react";
import { HelpCircle } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "What is InnovateX 2025?",
      answer: "InnovateX 2025 is a premier technology conference bringing together students, professionals, and industry leaders for two days of learning, networking, and innovation. The event features keynote speakers, hands-on workshops, hackathons, and networking opportunities focused on cutting-edge technologies and future trends."
    },
    {
      question: "Who can attend the event?",
      answer: "InnovateX 2025 is open to students, technology professionals, entrepreneurs, researchers, and anyone passionate about innovation and technology. Whether you're a beginner or an expert, there's something for everyone at various skill levels."
    },
    {
      question: "What's included in the registration?",
      answer: "Your registration includes access to all keynote sessions, workshops, networking events, meals (breakfast, lunch, and coffee breaks), event materials, exclusive swag, and a certificate of participation. Hackathon participants also get access to special mentorship sessions."
    },
    {
      question: "Is there a dress code for the event?",
      answer: "We recommend business casual or smart casual attire. Comfortable clothing and shoes are advised as you'll be moving between different venues and may be standing for extended periods during networking sessions."
    },
    {
      question: "Will the sessions be recorded?",
      answer: "Yes, keynote sessions and selected workshops will be recorded and made available to registered attendees within 48 hours after the event. However, some hands-on workshops and networking sessions will not be recorded to encourage active participation."
    },
    {
      question: "What should I bring to the event?",
      answer: "Bring your laptop, charger, notebook, business cards, and an open mind! For hackathon participants, ensure your development environment is set up. We'll provide WiFi, power outlets, and basic stationery. A water bottle is also recommended."
    },
    {
      question: "Are meals provided during the event?",
      answer: "Yes, we provide breakfast, lunch, and refreshment breaks on both days. We accommodate various dietary restrictions including vegetarian, vegan, gluten-free, and other special dietary needs. Please mention your requirements during registration."
    },
    {
      question: "How do I get to the venue?",
      answer: "The event is held at Tech University Campus. Detailed directions, parking information, and public transportation options will be sent to all registered attendees via email one week before the event. Limited parking is available on campus."
    },
    {
      question: "Can I get a refund if I can't attend?",
      answer: "Full refunds are available up to 14 days before the event. Refunds are not available within 14 days of the event, but you can transfer your registration to another person or receive a credit for next year's event."
    },
    {
      question: "Will there be networking opportunities?",
      answer: "Absolutely! We have dedicated networking sessions, coffee breaks, lunch meetings, and evening social events. We also provide a digital attendee directory and networking app to help you connect with other participants before and during the event."
    }
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#030213]">
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-float-slow" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Frequently Asked <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Got questions? We've got answers! Find everything you need to know about InnovateX 2025.
          </p>
        </div>
        
        {/* FAQ Accordion */}
        <div className="relative">
          {/* Glassmorphism Container */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-white/20 rounded-2xl bg-white/10 backdrop-blur-sm overflow-hidden hover:bg-white/20 transition-all duration-300"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                    <span className="text-lg font-semibold text-white pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-50" />
        </div>
        
        {/* Contact Support */}
        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg p-6 inline-block">
            <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
            <p className="text-gray-300 mb-4">
              Can't find what you're looking for? Our support team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href="mailto:support@innovatex2025.com"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Email Support
              </a>
              <a 
                href="tel:+1234567890"
                className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/20"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}