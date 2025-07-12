export type Content = {
  $id: string;
  contentId: string;
  productId: string;
  moduleId: string;
  type: string;
  data: string;
  createdBy: string;
  createdAt: string;
  updatedAt?: string | null;
};
