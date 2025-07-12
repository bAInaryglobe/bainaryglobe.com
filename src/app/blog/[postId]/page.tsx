import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import type { Content } from "@/types/appwrite.d.ts";

// Example static post; replace with Appwrite fetch using postId param
const post: Content = {
  $id: "1",
  contentId: "1",
  productId: "main",
  moduleId: "blog",
  type: "blog",
  data: "Welcome to BainaryGlobe! Discover our modular SaaS ecosystem.",
  createdBy: "admin",
  createdAt: "2024-06-01T12:00:00Z",
  updatedAt: null,
};

export default function BlogPostPage() {
  // In real app, fetch post by postId param from Appwrite
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <PageTransition>
        <article className="max-w-3xl mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold text-brown-900 mb-6">
            {post.data.slice(0, 40)}...
          </h1>
          <div className="text-brown-700 text-sm mb-4">
            By {post.createdBy} on {new Date(post.createdAt).toLocaleDateString()}
          </div>
          <div className="text-brown-800 text-lg">{post.data}</div>
        </article>
      </PageTransition>
      <Footer />
    </main>
  );
}
