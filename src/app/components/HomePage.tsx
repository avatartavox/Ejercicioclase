import { HeroSection } from "./HeroSection";
import { CategoriesSection } from "./CategoriesSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { OrbitSection } from "./OrbitSection";
import RadialOrbitalTimeline from "./RadialOrbitalTimeline";

export function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <TestimonialsSection />
      <OrbitSection />
      <RadialOrbitalTimeline />
    </div>
  );
}
