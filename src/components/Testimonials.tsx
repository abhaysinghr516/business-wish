"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const MinimalCardTestimonial: React.FC = () => (
  <div className="py-12 bg-gray-50">
    <div className="mx-auto max-w-md px-4">
      <div className="rounded-2xl bg-white border border-gray-100">
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Client Feedback
          </h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            "The product has streamlined our workflow, saving us countless
            hours. It's an invaluable tool for our team."
          </p>
          <div className="flex items-center">
            <img
              src="/api/placeholder/48/48"
              alt="Avatar"
              className="mr-4 h-12 w-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">Alex Chen</p>
              <p className="text-sm text-gray-600">Product Manager, TechCorp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const TestimonialSectionwithGridlayout: React.FC = () => (
  <div className="bg-white py-16">
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
        What Our Clients Say
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            quote:
              "This solution has transformed our business operations. The efficiency gains are remarkable.",
            name: "Emma Watson",
            position: "COO, InnovateNow",
          },
          {
            quote:
              "The customer support is unparalleled. They've been incredibly responsive and helpful throughout our journey.",
            name: "Michael Chang",
            position: "Founder, StartUp Solutions",
          },
          {
            quote:
              "We've experienced a significant boost in team collaboration since adopting this platform.",
            name: "Olivia Martinez",
            position: "HR Director, GlobalTech",
          },
        ].map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:bg-gray-100"
          >
            <p className="mb-6 text-gray-700 italic text-lg leading-relaxed">
              "{testimonial.quote}"
            </p>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-600">{testimonial.position}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const FullWidthTestimonial: React.FC = () => (
  <div className="bg-gray-50 py-16">
    <div className="mx-auto max-w-5xl px-4">
      <div className="overflow-hidden rounded-3xl bg-white border border-gray-100">
        <div className="p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            A Game-Changing Experience
          </h3>
          <p className="mt-4 text-xl text-gray-700 leading-relaxed mb-8">
            "We've seen a 50% increase in productivity since implementing this
            solution. It's intuitive, powerful, and has become an essential part
            of our daily operations. The impact on our business has been nothing
            short of transformative."
          </p>
          <div className="flex items-center">
            <img
              src="/api/placeholder/64/64"
              alt="Avatar"
              className="mr-6 h-16 w-16 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900 text-lg">
                Sarah Johnson
              </p>
              <p className="text-gray-600">CTO, TechInnovate Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const SliderTestimonial: React.FC = () => {
  const testimonials = [
    {
      quote:
        "This product has revolutionized how we approach our projects. The intuitive interface and powerful features have made our team more efficient and creative. It's not just a tool; it's a catalyst for innovation.",
      name: "David Lee",
      position: "Lead Designer, CreativeTech",
    },
    {
      quote:
        "The level of customization and flexibility offered by this platform is unmatched. It has allowed us to tailor our workflows perfectly to our unique needs.",
      name: "Amanda Rodriguez",
      position: "Operations Manager, FlexiSolutions",
    },
    {
      quote:
        "From the moment we implemented this system, our productivity skyrocketed. The seamless integration with our existing tools made the transition smooth and the benefits immediate.",
      name: "Robert Chen",
      position: "CEO, InnovateCorp",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-100">
          <div className="px-8 py-12 md:px-12 md:py-16">
            <h3 className="mb-6 text-3xl font-bold text-gray-900">
              Transformative Impact
            </h3>
            <p className="mb-8 text-xl text-gray-700 italic leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex items-center">
              <img
                src="/api/placeholder/64/64"
                alt="Avatar"
                className="mr-6 h-16 w-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900 text-lg">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-gray-600">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={goToPrevious}
            className="rounded-full bg-gray-100 p-3 text-gray-800 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="rounded-full bg-gray-100 p-3 text-gray-800 hover:bg-gray-200 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
