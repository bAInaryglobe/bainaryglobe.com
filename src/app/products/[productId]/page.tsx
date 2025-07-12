import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import type { Products } from "@/types/appwrite.d.ts";

// Example static product; replace with Appwrite fetch using productId param
const product: Products = {
  $id: "1",
  productId: "deepmind",
  name: "DeepMind",
  description: "AI research and solutions for the future.",
  standalone: false,
  ourApp: true,
  owners: [],
  modules: [],
  oauthEnabled: true,
  createdAt: "2024-06-01T12:00:00Z",
  updatedAt: null,
};

export default function ProductDetailPage() {
  // In real app, fetch product by productId param from Appwrite
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <PageTransition>
        <section className="max-w-3xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold text-brown-900 mb-6">{product.name}</h1>
          <div className="text-brown-700 text-lg mb-4">{product.description}</div>
          <div className="mb-4">
            <span className="font-semibold">Standalone:</span>{" "}
            {product.standalone ? "Yes" : "No"}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Type:</span>{" "}
            {product.ourApp ? "Our App" : "Third Party"}
          </div>
          <div className="mb-4">
            <span className="font-semibold">OAuth Enabled:</span>{" "}
            {product.oauthEnabled ? "Yes" : "No"}
          </div>
          <div className="text-sm text-brown-400">
            Created: {new Date(product.createdAt).toLocaleDateString()}
          </div>
        </section>
      </PageTransition>
      <Footer />
    </main>
  );
}
