export type OAuthClient = {
  $id: string;
  clientId: string;
  name: string;
  redirectUris: string[];
  ourApp: boolean;
  ownerId: string;
  scopes?: string[];
  verificationSkipped?: boolean;
  createdAt: string;
  updatedAt?: string | null;
};
