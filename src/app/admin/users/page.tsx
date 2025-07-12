import PageTransition from "@/components/PageTransition";
import type { Users } from "@/types/appwrite.d.ts";

export default function AdminUsersPage() {
  // Example: Replace with Appwrite API data
  const users: Users[] = [];

  return (
    <PageTransition>
      <section className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-brown-900 mb-6">Manage Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user.$id} className="mb-4 p-4 rounded shadow bg-yellow-100">
              <div className="font-bold">{user.name}</div>
              <div>{user.email}</div>
              <div className="text-green-700">{user.role}</div>
            </li>
          ))}
        </ul>
      </section>
    </PageTransition>
  );
}
