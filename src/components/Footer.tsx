import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-gradient-to-r from-brown-700 via-yellow-200 to-green-200 text-brown-900 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="font-bold">BainaryGlobe © {new Date().getFullYear()}</span>
        <span className="text-sm">Ultra modular. Ultra scalable. Ultra global.</span>
      </div>
    </footer>
  );
}
