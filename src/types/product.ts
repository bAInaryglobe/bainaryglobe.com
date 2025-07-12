export type Product = {
  $id: string;
  productId: string;
  name: string;
  description?: string;
  standalone: boolean;
  ourApp: boolean;
  owners?: string[];
  modules?: string[];
  oauthEnabled: boolean;
  createdAt: string;
  updatedAt?: string | null;
};
