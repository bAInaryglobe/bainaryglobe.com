import GradientBackground from "@/components/GradientBackground";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedButton from "@/components/AnimatedButton";
import ProductCard from "@/components/ProductCard";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/home/HeroSection";
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

// Example FAQ
const faqs = [
	{
		q: "What makes BainaryGlobe different?",
		a: "Ultra modular, permission-based, and scalable SaaS conglomerate with immersive app-like experience.",
	},
	{
		q: "Can I use 'Sign in with BainaryGlobe' for my app?",
		a: "Yes, both internal and third-party apps can integrate with our robust OAuth system.",
	},
	{
		q: "How do admins manage content?",
		a: "Privileged users can edit, create, and manage all site content live from the frontend.",
	},
];

export default function HomePage() {
	return (
		<main className="relative min-h-screen flex flex-col">
			<GradientBackground />
			<Navbar />
			<PageTransition>
				<section className="flex flex-col items-center justify-center flex-1 z-10 pt-24 pb-16">
					<HeroSection />
					{/* Products Section */}
					<div className="mt-12 w-full max-w-3xl">
						<h2 className="text-2xl font-bold text-brown-900 mb-4">
							Our Products
						</h2>
						{products.map((prod, idx) => (
							<ProductCard key={idx} {...prod} />
						))}
					</div>
					{/* Features Section */}
					<div className="mt-16 w-full max-w-4xl">
						<h2 className="text-2xl font-bold text-brown-900 mb-4">
							Key Features
						</h2>
						<ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<li className="bg-yellow-200 rounded-xl shadow-3d p-6 text-brown-900 font-semibold">
								Modular Products
								<p className="text-brown-700 text-sm mt-2">
									Each product is standalone or deeply integrated, managed live.
								</p>
							</li>
							<li className="bg-brown-200 rounded-xl shadow-3d p-6 text-brown-900 font-semibold">
								Live Admin Editing
								<p className="text-brown-700 text-sm mt-2">
									Admins and privileged users can update anything from the frontend.
								</p>
							</li>
							<li className="bg-green-200 rounded-xl shadow-3d p-6 text-brown-900 font-semibold">
								Robust OAuth
								<p className="text-brown-700 text-sm mt-2">
									'Sign in with BainaryGlobe' for all products and third-party apps.
								</p>
							</li>
						</ul>
					</div>
					{/* FAQ Section */}
					<FAQSection />
				</section>
			</PageTransition>
			<Footer />
		</main>
	);
}
	