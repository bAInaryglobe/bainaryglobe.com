import React from "react";

export default function GradientBackground() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: "linear-gradient(135deg, #f5e9d6 0%, #a67c52 60%, #e6c200 100%)",
        opacity: 0.85,
      }}
      aria-hidden="true"
    />
  );
}
