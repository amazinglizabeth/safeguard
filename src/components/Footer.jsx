import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p>
        &copy; {new Date().getFullYear()} SecureGuard Consulting. All rights
        reserved.
      </p>
    </footer>
  );
};
