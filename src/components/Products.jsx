import React from "react";
import SecurityCamera from "../assets/images/securityCamera.jpg";
import SmartLock from "../assets/images/smartLock.jpg";
import MotionDetector from "../assets/images/motionDetector.jpg";
import Alarm from "../assets/images/alarm.jpeg";
import Biometric from "../assets/images/biometric.jpg";
import SecurityLight from "../assets/images/securityLight.jpg";

const products = [
  { name: "HD Security Cameras", image: SecurityCamera },
  { name: "Smart Locks", image: SmartLock },
  { name: "Motion Detectors", image: MotionDetector },
  { name: "Security Light", image: SecurityLight },
  { name: "Security Alarms", image: Alarm },
  { name: "Biometric Scanners", image: Biometric },
];

export const Products = () => {
  return (
    <section id="products" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-10">Our Products</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg transform transition duration-300 hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-medium text-gray-800">
              {product.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};
