import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import type { Modules } from "@/types/appwrite.d.ts";

// Example static module; replace with Appwrite fetch using moduleId param
const module: Modules = {
  $id: "1",
  moduleId: "blog",
  productId: "deepmind",
  name: "Blog",
  type: "blog",
  config: "{}",
  createdAt: "2024-06-01T12:00:00Z",
  updatedAt: null,
};

export default function ModuleDetailPage() {
  // In real app, fetch module by moduleId param from Appwrite
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <PageTransition>
        <section className="max-w-3xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold text-brown-900 mb-6">{module.name}</h1>
          <div className="text-brown-700 text-lg mb-4">Type: {module.type}</div>
          <div className="mb-4">
            <span className="font-semibold">Config:</span>{" "}
            <span className="text-brown-900">{module.config}</span>
          </div>
          <div className="text-sm text-brown-400">
            Created: {new Date(module.createdAt).toLocaleDateString()}
          </div>
        </section>
      </PageTransition>
      <Footer />
    </main>
  );
}
