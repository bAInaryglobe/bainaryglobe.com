import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import type { Content } from "@/types/appwrite.d.ts";

const blogPosts: Content[] = [
  // Example static data; replace with Appwrite fetch
  {
    $id: "1",
    contentId: "1",
    productId: "main",
    moduleId: "blog",
    type: "blog",
    data: "Welcome to BainaryGlobe! Discover our modular SaaS ecosystem.",
    createdBy: "admin",
    createdAt: "2024-06-01T12:00:00Z",
    updatedAt: null,
  },
  {
    $id: "2",
    contentId: "2",
    productId: "main",
    moduleId: "blog",
    type: "blog",
    data: "How our permission system powers global scalability.",
    createdBy: "admin",
    createdAt: "2024-06-02T12:00:00Z",
    updatedAt: null,
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <PageTransition>
        <section className="max-w-4xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold text-brown-900 mb-8">Blog</h1>
          <ul>
            {blogPosts.map((post) => (
              <li key={post.$id} className="mb-8 p-6 rounded-xl shadow-3d bg-yellow-100">
                <a href={`/blog/${post.contentId}`}>
                  <h2 className="text-2xl font-semibold text-brown-900 mb-2">
                    {post.data.slice(0, 40)}...
                  </h2>
                </a>
                <div className="text-brown-700 text-sm mb-2">
                  By {post.createdBy} on {new Date(post.createdAt).toLocaleDateString()}
                </div>
                <p className="text-brown-800">{post.data}</p>
              </li>
            ))}
          </ul>
        </section>
      </PageTransition>
      <Footer />
    </main>
  );
}
