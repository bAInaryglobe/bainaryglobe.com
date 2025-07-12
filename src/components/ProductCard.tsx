import { Paper, Typography, Box, Chip } from "@mui/material";

type Props = {
  name: string;
  description: string;
  standalone: boolean;
  ourApp: boolean;
};

export default function ProductCard({ name, description, standalone, ourApp }: Props) {
  return (
    <Paper elevation={4} sx={{ p: 3, mb: 2, borderRadius: 3, bgcolor: "#f5e9d6" }}>
      <Typography variant="h6" color="#6b3f19" fontWeight="bold">
        {name}
      </Typography>
      <Typography color="#a67c52" sx={{ mb: 1 }}>
        {description}
      </Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Chip label={standalone ? "Standalone" : "Integrated"} sx={{ bgcolor: "#a67c52", color: "#fff" }} />
        <Chip label={ourApp ? "Our App" : "Third Party"} sx={{ bgcolor: ourApp ? "#b2d8b2" : "#e6c200", color: "#6b3f19" }} />
      </Box>
    </Paper>
  );
}
