import React from "react";

const services = [
  "Risk Assessment",
  "Surveillance Installation",
  "Cybersecurity Planning",
  "Products maintenance",
  "Access Control Solutions",
  "Security Training",
];

export const Services = () => {
  return (
    <section id="services" className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 transform transition duration-300 hover:scale-105"
          >
            <h3 className="text-xl font-medium text-gray-800">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
