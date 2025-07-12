import PageTransition from "@/components/PageTransition";
import type { OAuthClients } from "@/types/appwrite.d.ts";

export default function AdminOAuthPage() {
  // Example: Replace with Appwrite API data
  const clients: OAuthClients[] = [];

  return (
    <PageTransition>
      <section className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-brown-900 mb-6">Manage OAuth Clients</h1>
        <ul>
          {clients.map((client) => (
            <li key={client.$id} className="mb-4 p-4 rounded shadow bg-green-100">
              <div className="font-bold">{client.name}</div>
              <div>Redirect URIs: {client.redirectUris.join(", ")}</div>
              <div>{client.ourApp ? "Our App" : "Third Party"}</div>
              <div>Owner: {client.ownerId}</div>
            </li>
          ))}
        </ul>
      </section>
    </PageTransition>
  );
}
