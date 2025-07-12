"use client";
import { useState } from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function AnimatedButton({ children, ...props }: Props) {
  const [pressed, setPressed] = useState(false);

  return (
    <button
      {...props}
      className={`transition-all duration-150 ease-out px-6 py-2 rounded-lg shadow-lg bg-gradient-to-br from-yellow-200 via-yellow-400 to-brown-600 text-brown-900 font-bold hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400 ${
        pressed ? "shadow-inner bg-yellow-500" : ""
      }`}
      style={{
        boxShadow: pressed
          ? "0 2px 8px 0 rgba(165, 120, 82, 0.3)"
          : "0 4px 16px 0 rgba(165, 120, 82, 0.2)",
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
    >
      {children}
    </button>
  );
}
