"use client";
import AnimatedButton from "@/components/AnimatedButton";
import PageTransition from "@/components/PageTransition";

export default function OAuthPage() {
  // Add Appwrite OAuth logic here

  return (
    <PageTransition>
      <section className="flex flex-col items-center justify-center min-h-screen bg-yellow-100">
        <h1 className="text-3xl font-bold text-brown-900 mb-8">Sign in with BainaryGlobe</h1>
        <div className="flex flex-col gap-6 w-full max-w-md">
          <AnimatedButton>
            Sign in with BainaryGlobe
          </AnimatedButton>
          <AnimatedButton>
            Sign in with Google
          </AnimatedButton>
          <AnimatedButton>
            Sign in with GitHub
          </AnimatedButton>
          {/* Add more providers as needed */}
        </div>
        <div className="mt-8 text-brown-700 text-center">
          Third-party apps can integrate with our OAuth system for seamless sign-in.
        </div>
      </section>
    </PageTransition>
  );
}
