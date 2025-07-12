export type User = {
  $id: string;
  userId: string;
  email: string;
  name: string;
  role: string;
  products?: string[];
  oauthProviders?: string[];
  createdAt: string;
  updatedAt?: string | null;
};
