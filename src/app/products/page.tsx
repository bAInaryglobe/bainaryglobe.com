import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ProductCard from "@/components/ProductCard";
import type { Products } from "@/types/appwrite.d.ts";

const products: Products[] = [
  // Example static data; replace with Appwrite fetch
  {
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
  },
  {
    $id: "2",
    productId: "mailsphere",
    name: "MailSphere",
    description: "Global, secure, modular email platform.",
    standalone: true,
    ourApp: true,
    owners: [],
    modules: [],
    oauthEnabled: true,
    createdAt: "2024-06-02T12:00:00Z",
    updatedAt: null,
  },
  {
    $id: "3",
    productId: "thirdpartyx",
    name: "ThirdPartyX",
    description: "External partner integration.",
    standalone: true,
    ourApp: false,
    owners: [],
    modules: [],
    oauthEnabled: false,
    createdAt: "2024-06-03T12:00:00Z",
    updatedAt: null,
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <PageTransition>
        <section className="max-w-4xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold text-brown-900 mb-8">Products</h1>
          <ul>
            {products.map((prod) => (
              <li key={prod.$id} className="mb-8">
                <ProductCard {...prod} />
              </li>
            ))}
          </ul>
        </section>
      </PageTransition>
      <Footer />
    </main>
  );
}
