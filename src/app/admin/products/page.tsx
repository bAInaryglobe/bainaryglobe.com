import PageTransition from "@/components/PageTransition";
import type { Products } from "@/types/appwrite.d.ts";

export default function AdminProductsPage() {
  // Example: Replace with Appwrite API data
  const products: Products[] = [];

  return (
    <PageTransition>
      <section className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-brown-900 mb-6">Manage Products</h1>
        <ul>
          {products.map((prod) => (
            <li key={prod.$id} className="mb-4 p-4 rounded shadow bg-brown-100">
              <div className="font-bold">{prod.name}</div>
              <div>{prod.description}</div>
              <div className="text-green-700">{prod.ourApp ? "Our App" : "Third Party"}</div>
            </li>
          ))}
        </ul>
      </section>
    </PageTransition>
  );
}
