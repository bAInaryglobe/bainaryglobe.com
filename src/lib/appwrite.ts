import { Client, Account, Databases, Models } from "appwrite";

export const appwriteClient = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || "")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT || "");

export const appwriteAccount = new Account(appwriteClient);
export const appwriteDatabases = new Databases(appwriteClient);

// Example: get current user
export async function getCurrentUser(): Promise<Models.User<Models.Preferences> | null> {
  try {
    return await appwriteAccount.get();
  } catch {
    return null;
  }
}

// Example: generic fetch documents
export async function fetchDocuments(collectionId: string, databaseId = "bainaryglobe") {
  return await appwriteDatabases.listDocuments(databaseId, collectionId);
}
