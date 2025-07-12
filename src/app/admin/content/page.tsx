import PageTransition from "@/components/PageTransition";
import type { Content } from "@/types/appwrite.d.ts";

export default function AdminContentPage() {
  // Example: Replace with Appwrite API data
  const contents: Content[] = [];

  return (
    <PageTransition>
      <section className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-brown-900 mb-6">Manage Content</h1>
        <ul>
          {contents.map((content) => (
            <li key={content.$id} className="mb-4 p-4 rounded shadow bg-yellow-50">
              <div className="font-bold">{content.type}</div>
              <div>{content.data.slice(0, 80)}...</div>
              <div>By: {content.createdBy}</div>
            </li>
          ))}
        </ul>
      </section>
    </PageTransition>
  );
}
