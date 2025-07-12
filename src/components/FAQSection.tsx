import {
	Box,
	Typography,
	Accordion,
	AccordionSummary,
	AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
		<Box>
			<Typography variant="h4" color="#6b3f19" fontWeight="bold" mb={2}>
				FAQ
			</Typography>
			{faqs.map((faq, idx) => (
				<Accordion key={idx} sx={{ mb: 2, bgcolor: "#f5e9d6" }}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography color="#6b3f19" fontWeight="bold">
							{faq.q}
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography color="#a67c52">{faq.a}</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</Box>
	);
}
