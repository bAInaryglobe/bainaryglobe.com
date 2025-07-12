import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import type { Users, Products, Modules, Content } from "@/types/appwrite.d.ts";

export default function AdminDashboard() {
  // Example: Replace with Appwrite API data
  const users: Users[] = [];
  const products: Products[] = [];
  const modules: Modules[] = [];
  const contents: Content[] = [];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <PageTransition>
        <section className="max-w-6xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold text-brown-900 mb-8">Admin Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-yellow-100 rounded-xl shadow-3d p-6">
              <h2 className="text-xl font-semibold text-brown-900 mb-4">Users</h2>
              <ul>
                {users.map((user) => (
                  <li key={user.$id} className="mb-2">
                    <span className="font-bold">{user.name}</span> ({user.email}) - <span className="text-green-700">{user.role}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brown-100 rounded-xl shadow-3d p-6">
              <h2 className="text-xl font-semibold text-brown-900 mb-4">Products</h2>
              <ul>
                {products.map((prod) => (
                  <li key={prod.$id} className="mb-2">
                    <span className="font-bold">{prod.name}</span> - <span className="text-green-700">{prod.ourApp ? "Our App" : "Third Party"}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-100 rounded-xl shadow-3d p-6">
              <h2 className="text-xl font-semibold text-brown-900 mb-4">Modules</h2>
              <ul>
                {modules.map((mod) => (
                  <li key={mod.$id} className="mb-2">
                    <span className="font-bold">{mod.name}</span> ({mod.type})
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-50 rounded-xl shadow-3d p-6">
              <h2 className="text-xl font-semibold text-brown-900 mb-4">Content</h2>
              <ul>
                {contents.map((content) => (
                  <li key={content.$id} className="mb-2">
                    <span className="font-bold">{content.type}</span> - {content.data.slice(0, 40)}...
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </PageTransition>
      <Footer />
    </main>
  );
}
