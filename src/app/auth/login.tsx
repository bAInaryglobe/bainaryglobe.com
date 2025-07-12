"use client";
import { useState } from "react";
import AnimatedButton from "@/components/AnimatedButton";
import PageTransition from "@/components/PageTransition";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Add Appwrite login logic here

  return (
    <PageTransition>
      <section className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
        <h1 className="text-3xl font-bold text-brown-900 mb-8">Sign In</h1>
        <form className="bg-white rounded-xl shadow-3d p-8 w-full max-w-md flex flex-col gap-6">
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
          <AnimatedButton type="submit">Login</AnimatedButton>
        </form>
        <div className="mt-4 text-brown-700">
          Don't have an account? <a href="/auth/register" className="text-green-700 font-bold underline">Register</a>
        </div>
      </section>
    </PageTransition>
  );
}
