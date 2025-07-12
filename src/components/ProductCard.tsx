import React from "react";

type Props = {
  name: string;
  description: string;
  standalone: boolean;
  ourApp: boolean;
};

export default function ProductCard({ name, description, standalone, ourApp }: Props) {
  return (
    <div className="rounded-xl shadow-2xl bg-gradient-to-br from-yellow-100 via-brown-200 to-green-100 p-6 mb-4 transition-transform hover:scale-105">
      <div className="font-bold text-lg text-brown-900">{name}</div>
      <div className="text-brown-700 mb-2">{description}</div>
      <div className="flex gap-2 text-xs">
        <span className={`px-2 py-1 rounded bg-brown-300 text-brown-900`}>
          {standalone ? "Standalone" : "Integrated"}
        </span>
        <span className={`px-2 py-1 rounded ${ourApp ? "bg-green-300 text-green-900" : "bg-yellow-300 text-yellow-900"}`}>
          {ourApp ? "Our App" : "Third Party"}
        </span>
      </div>
    </div>
  );
}
