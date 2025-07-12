import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#f5e9d6", boxShadow: 3 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="#6b3f19" fontWeight="bold">
          BainaryGlobe
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button component={Link} href="/" sx={{ color: "#6b3f19", fontWeight: "bold" }}>
            Home
          </Button>
          <Button component={Link} href="/about" sx={{ color: "#6b3f19", fontWeight: "bold" }}>
            About
          </Button>
          <Button component={Link} href="/products" sx={{ color: "#6b3f19", fontWeight: "bold" }}>
            Products
          </Button>
          <Button component={Link} href="/blog" sx={{ color: "#6b3f19", fontWeight: "bold" }}>
            Blog
          </Button>
          <Button component={Link} href="/admin" sx={{ color: "#3a7d3a", fontWeight: "bold" }}>
            Admin
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
