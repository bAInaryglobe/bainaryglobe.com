import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import FAQSection from "@/components/FAQSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <PageTransition>
        <section className="max-w-4xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold text-brown-900 mb-8">About BainaryGlobe</h1>
          <p className="text-xl text-brown-700 mb-8">
            BainaryGlobe is a global SaaS conglomerate, built for ultra modularity, scalability, and immersive app-like experiences. 
            Our platform enables privileged users to manage content, products, and permissions live, without touching code.
          </p>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-brown-900 mb-4">Our Mission</h2>
            <p className="text-brown-700">
              To empower organizations and developers worldwide with a robust, permission-based, modular SaaS ecosystem, 
              integrating seamless authentication and ultra-flexible CRUD capabilities.
            </p>
          </div>
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-brown-900 mb-4">Why BainaryGlobe?</h2>
            <ul className="list-disc pl-6 text-brown-700">
              <li>Ultra modular product architecture</li>
              <li>Live admin editing and management</li>
              <li>Permission-based CRUD for security and flexibility</li>
              <li>Immersive UI with Three.js, gradients, and 3D effects</li>
              <li>Robust OAuth for internal and third-party apps</li>
            </ul>
          </div>
          <FAQSection />
        </section>
      </PageTransition>
      <Footer />
    </main>
  );
}
