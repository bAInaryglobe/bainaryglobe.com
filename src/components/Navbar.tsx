import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-gradient-to-r from-brown-800 via-yellow-300 to-green-100 shadow-xl flex items-center justify-between">
      <div className="font-extrabold text-xl text-brown-900">BainaryGlobe</div>
      <div className="flex gap-6">
        <Link href="/" className="hover:underline text-brown-900 font-semibold">Home</Link>
        <Link href="/about" className="hover:underline text-brown-900 font-semibold">About</Link>
        <Link href="/products" className="hover:underline text-brown-900 font-semibold">Products</Link>
        <Link href="/blog" className="hover:underline text-brown-900 font-semibold">Blog</Link>
        <Link href="/admin" className="hover:underline text-green-700 font-semibold">Admin</Link>
      </div>
    </nav>
  );
}
