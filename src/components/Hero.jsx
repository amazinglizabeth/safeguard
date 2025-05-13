import React from "react";
import HeroImage from "../assets/images/hero.jpg";

export const Hero = () => {
  return (
    <section id="home" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Protect What Matters Most
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We provide professional security consulting services and top-tier
            security products to keep you safe.
          </p>
          <a
            href="#contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-black py-3 px-6 rounded-xl transition"
          >
            Get in Touch
          </a>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="Security"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
