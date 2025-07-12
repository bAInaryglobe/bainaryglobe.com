"use client";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    return () => setVisible(false);
  }, []);

  return (
    <div
      className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
