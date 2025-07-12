import { Container, Box, Typography, Button, Grid, Paper } from "@mui/material";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/home/HeroSection";
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
		<Container
			maxWidth="lg"
			sx={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				bgcolor: "#f5e9d6",
				p: 0,
			}}
		>
			<Navbar />
			<Box component="main" sx={{ flex: 1, pt: 10, pb: 8 }}>
				<HeroSection />
				<Box sx={{ mt: 8 }}>
					<Typography
						variant="h4"
						color="#6b3f19"
						fontWeight="bold"
						mb={2}
					>
						Our Products
					</Typography>
					<Grid container spacing={3}>
						{products.map((prod, idx) => (
							<Grid item xs={12} md={6} key={idx}>
								<ProductCard {...prod} />
							</Grid>
						))}
					</Grid>
				</Box>
				<Box sx={{ mt: 10 }}>
					<Typography
						variant="h4"
						color="#6b3f19"
						fontWeight="bold"
						mb={2}
					>
						Key Features
					</Typography>
					<Grid container spacing={3}>
						<Grid item xs={12} md={4}>
							<Paper elevation={3} sx={{ p: 3, bgcolor: "#f5e9d6" }}>
								<Typography
									variant="h6"
									color="#6b3f19"
									fontWeight="bold"
								>
									Modular Products
								</Typography>
								<Typography color="#a67c52" mt={1}>
									Each product is standalone or deeply integrated,
									managed live.
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={12} md={4}>
							<Paper elevation={3} sx={{ p: 3, bgcolor: "#a67c52" }}>
								<Typography
									variant="h6"
									color="#6b3f19"
									fontWeight="bold"
								>
									Live Admin Editing
								</Typography>
								<Typography color="#c8b08b" mt={1}>
									Admins and privileged users can update anything
									from the frontend.
								</Typography>
							</Paper>
						</Grid>
						<Grid item xs={12} md={4}>
							<Paper elevation={3} sx={{ p: 3, bgcolor: "#b2d8b2" }}>
								<Typography
									variant="h6"
									color="#6b3f19"
									fontWeight="bold"
								>
									Robust OAuth
								</Typography>
								<Typography color="#3a7d3a" mt={1}>
									'Sign in with BainaryGlobe' for all products and
									third-party apps.
								</Typography>
							</Paper>
						</Grid>
					</Grid>
				</Box>
				<Box sx={{ mt: 10 }}>
					<FAQSection />
				</Box>
			</Box>
			<Footer />
		</Container>
	);
}
