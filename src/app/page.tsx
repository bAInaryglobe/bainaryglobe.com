import ThreeScene from "@/components/ThreeScene";
import GradientBackground from "@/components/GradientBackground";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedButton from "@/components/AnimatedButton";
import ProductCard from "@/components/ProductCard";
import type { Products } from "@/types/appwrite.d.ts";

// Example products (replace with Appwrite data later)
const products: Products[] = [
	{
		name: "DeepMind",
		description: "AI research and solutions for the future.",
		standalone: false,
		ourApp: true,
	},
	{
		name: "MailSphere",
		description: "Global, secure, modular email platform.",
		standalone: true,
		ourApp: true,
	},
	{
		name: "ThirdPartyX",
		description: "External partner integration.",
		standalone: true,
		ourApp: false,
	},
];

export default function HomePage() {
	return (
		<main className="relative min-h-screen flex flex-col">
			<GradientBackground />
			<ThreeScene />
			<Navbar />
			<PageTransition>
				<section className="flex flex-col items-center justify-center flex-1 z-10 pt-24 pb-16">
					<h1 className="text-5xl font-extrabold text-brown-900 mb-6 drop-shadow-lg">
						BainaryGlobe
					</h1>
					<p className="text-xl text-brown-700 mb-8 max-w-2xl text-center">
						Ultra modular, ultra scalable SaaS conglomerate.
						<span className="text-green-700 font-bold">
							{" "}
							Immersive. Permissioned. Global.
						</span>
					</p>
					<AnimatedButton>Get Started</AnimatedButton>
					<div className="mt-12 w-full max-w-3xl">
						<h2 className="text-2xl font-bold text-brown-900 mb-4">
							Our Products
						</h2>
						{products.map((prod, idx) => (
							<ProductCard key={idx} {...prod} />
						))}
					</div>
				</section>
			</PageTransition>
			<Footer />
		</main>
	);
}
