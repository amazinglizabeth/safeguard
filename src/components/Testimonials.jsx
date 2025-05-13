import React from "react";

const testimonials = [
  {
    name: "Jane Doe",
    text: "Their security expertise saved our business. Professional and reliable.",
  },
  {
    name: "Michael Smith",
    text: "The products are top-notch and their consulting was insightful.",
  },
  {
    name: "Sarah Johnson",
    text: "I feel safe knowing their systems are protecting my home.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-10">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic mb-4">"{t.text}"</p>
            <h4 className="text-lg font-semibold text-gray-900">- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};
