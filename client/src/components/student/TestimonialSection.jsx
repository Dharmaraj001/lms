import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const TestimonialSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-cyan-50 to-white py-20 px-6 overflow-hidden">
      {/* Decorative gradient or glow (optional flair) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-40 bg-cyan-100/50 blur-3xl rounded-full opacity-30"></div>

      <div className="relative max-w-6xl mx-auto md:px-8 lg:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center tracking-tight">
          What Our Learners Say
        </h2>
        <p className="text-gray-500 mt-4 text-center max-w-2xl mx-auto leading-relaxed md:text-base text-sm">
          Hear from our learners as they share their journeys of transformation,
          success, and how our <br className="hidden md:block" /> platform has
          changed their careers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {dummyTestimonial.map((testimonial, index) => (
            <div
              key={index}
              className="group border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 hover:bg-gradient-to-b hover:from-white hover:to-cyan-50/30"
            >
              {/* Top Section */}
              <div className="flex items-center gap-4 px-6 py-5 bg-gray-50 border-b border-gray-100">
                <img
                  className="h-14 w-14 rounded-full object-cover border-2 border-cyan-200 group-hover:scale-105 transition-transform duration-300"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Stars + Feedback */}
              <div className="px-6 py-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      className="h-5"
                      src={
                        i < Math.floor(testimonial.rating)
                          ? assets.star
                          : assets.star_blank
                      }
                      alt="star"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  “{testimonial.feedback}”
                </p>

                {/* Read More link */}
                <a
                  href="#"
                  className="inline-block mt-5 text-cyan-600 font-medium text-sm hover:text-cyan-700 transition-colors duration-200"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
