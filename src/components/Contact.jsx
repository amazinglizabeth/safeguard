import React from "react";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa6";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-yellow-50 text-center">
      <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
      <p className="mb-6 text-gray-700">
        Reach us through any of our social platforms or send us an email.
      </p>
      <div className="flex justify-center gap-6 text-3xl">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-700"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://instagram.com/amazing_lizabeth"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-700"
        >
          <FaInstagram />
        </a>
        <a href="mailto:#" className="text-gray-700 hover:text-gray-900">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};
