import React from "react";
import { assets } from "../../assets/assets";

const Companies = () => {
  const logos = [
    assets.microsoft_logo,
    assets.walmart_logo,
    assets.paypal_logo,
    assets.adobe_logo,
    assets.accenture_logo,
  ];

  return (
    <section className="pt-20 px-4">
      <p className="text-center text-base md:text-lg text-gray-600 font-medium">
        Trusted by top educators from leading tech companies
      </p>

      <div className="mt-10 flex justify-center">
        <div className="relative h-[120px] sm:h-[150px] md:h-[180px] lg:h-[200px] w-full max-w-5xl overflow-hidden">
          <div className="slider flex items-center gap-10 sm:gap-14 md:gap-20 animate-slide">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                className="w-16 sm:w-20 md:w-28 opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300"
                alt="company logo"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
