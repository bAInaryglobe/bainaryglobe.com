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

export default function FAQSection() {
	return (
		<div className="mt-16 w-full max-w-3xl">
			<h2 className="text-2xl font-bold text-brown-900 mb-4">FAQ</h2>
			<ul>
				{faqs.map((faq, idx) => (
					<li key={idx} className="mb-6">
						<div className="font-semibold text-brown-900">{faq.q}</div>
						<div className="text-brown-700">{faq.a}</div>
					</li>
				))}
			</ul>
		</div>
	);
}
