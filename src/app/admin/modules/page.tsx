import PageTransition from "@/components/PageTransition";
import type { Modules } from "@/types/appwrite.d.ts";

export default function AdminModulesPage() {
  // Example: Replace with Appwrite API data
  const modules: Modules[] = [];

  return (
    <PageTransition>
      <section className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-brown-900 mb-6">Manage Modules</h1>
        <ul>
          {modules.map((mod) => (
            <li key={mod.$id} className="mb-4 p-4 rounded shadow bg-green-100">
              <div className="font-bold">{mod.name}</div>
              <div>{mod.type}</div>
              <div>{mod.config}</div>
            </li>
          ))}
        </ul>
      </section>
    </PageTransition>
  );
}
