import type { Permissions, AccessLevel } from "@/types/appwrite.d.ts";

export function usePermissions(
  permissions: Permissions[] | null,
  productId?: string,
  moduleId?: string
) {
  if (!permissions) return { access: null };

  const filtered = permissions.filter(p =>
    (!productId || p.productId === productId) &&
    (!moduleId || p.moduleId === moduleId)
  );

  const access = filtered.length
    ? filtered.reduce<AccessLevel | null>((acc, p) => {
        if (p.accessLevel === "admin") return "admin";
        if (p.accessLevel === "write") return acc === "admin" ? "admin" : "write";
        if (p.accessLevel === "read") return acc || "read";
        return acc;
      }, null)
    : null;

  return { access };
}
