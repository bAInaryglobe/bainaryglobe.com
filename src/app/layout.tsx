import "@/app/globals.css";
import GradientBackground from "@/components/GradientBackground";
import ThreeScene from "@/components/ui/ThreeScene";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-immersive">
        <GradientBackground />
        <ThreeScene />
        {/* Main content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
