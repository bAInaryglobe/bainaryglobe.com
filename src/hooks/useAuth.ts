import { useEffect, useState } from "react";
import { Account } from "appwrite";
import type { Users } from "@/types/appwrite.d.ts";
import { appwriteClient } from "@/lib/appwrite";

export function useAuth() {
  const [user, setUser] = useState<Users | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const account = new Account(appwriteClient);
    account.get()
      .then((res) => setUser(res as Users))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  return { user, loading };
}
