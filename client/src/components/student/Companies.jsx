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
    <section className="pt-20">
      <p className="text-center text-lg text-gray-600 font-medium">
        Trusted by top educators from leading tech companies
      </p>

      {/* Fixed area centered */}
      <div className="mt-10 w-full flex justify-center">
        <div className="relative h-[200px] w-[80%] md:w-[50%] overflow-hidden">
          <div className="slider flex items-center gap-16 animate-slide">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo}
                className="w-20 md:w-28 sm:w-14 opacity-70 hover:opacity-100 hover:scale-110 transition-all duration-300"
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
