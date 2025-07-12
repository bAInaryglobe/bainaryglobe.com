import AnimatedButton from "@/components/AnimatedButton";

export default function HeroSection() {
	return (
		<>
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
		</>
	);
}
