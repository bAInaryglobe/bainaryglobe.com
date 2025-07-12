"use client";
import { useState } from "react";
import AnimatedButton from "@/components/AnimatedButton";
import PageTransition from "@/components/PageTransition";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Add Appwrite register logic here

  return (
    <PageTransition>
      <section className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
        <h1 className="text-3xl font-bold text-brown-900 mb-8">Create Account</h1>
        <form className="bg-white rounded-xl shadow-3d p-8 w-full max-w-md flex flex-col gap-6">
          <input
            type="text"
            placeholder="Name"
            className="px-4 py-2 rounded border border-brown-300 focus:outline-none"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded border border-brown-300 focus:outline-none"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded border border-brown-300 focus:outline-none"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <AnimatedButton type="submit">Register</AnimatedButton>
        </form>
        <div className="mt-4 text-brown-700">
          Already have an account? <a href="/auth/login" className="text-green-700 font-bold underline">Login</a>
        </div>
      </section>
    </PageTransition>
  );
}
