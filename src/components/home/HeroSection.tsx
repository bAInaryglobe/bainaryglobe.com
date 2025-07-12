import { Box, Typography, Button } from "@mui/material";

export default function HeroSection() {
	return (
		<Box sx={{ textAlign: "center", mb: 8, position: "relative" }}>
			<Box
				sx={{
					position: "absolute",
					top: -64,
					left: "50%",
					transform: "translateX(-50%)",
					width: 160,
					height: 160,
					borderRadius: "50%",
					background:
						"linear-gradient(135deg, #f5e9d6 0%, #a67c52 60%, #b2d8b2 100%)",
					opacity: 0.3,
					filter: "blur(32px)",
					zIndex: 0,
				}}
			/>
			<Typography
				variant="h2"
				fontWeight="bold"
				color="#6b3f19"
				sx={{ mb: 2, position: "relative", zIndex: 1 }}
			>
				BainaryGlobe
			</Typography>
			<Typography
				variant="h5"
				color="#a67c52"
				sx={{ mb: 2, position: "relative", zIndex: 1 }}
			>
				The global SaaS conglomerate for ultra modular, scalable, and immersive
				experiences.
			</Typography>
			<Typography
				variant="body1"
				color="#6b3f19"
				sx={{ mb: 4, position: "relative", zIndex: 1 }}
			>
				Empowering privileged users to manage, create, and scale products and
				content live—no code required. Permission-based, secure, and built for the
				future.
			</Typography>
			<Button
				variant="contained"
				size="large"
				sx={{
					bgcolor: "#e6c200",
					color: "#6b3f19",
					fontWeight: "bold",
					px: 4,
					py: 2,
					boxShadow: 3,
					"&:hover": { bgcolor: "#a67c52" },
				}}
			>
				Get Started
			</Button>
		</Box>
	);
}
