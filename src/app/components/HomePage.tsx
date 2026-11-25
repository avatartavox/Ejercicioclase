import { HeroSection } from "./HeroSection";
import { CategoriesSection } from "./CategoriesSection";
import { TestimonialsSection } from "./TestimonialsSection";
import { OrbitSection } from "./OrbitSection";
import RadialOrbitalTimeline from "./RadialOrbitalTimeline";
import { CtaLottieSection } from "./CtaLottieSection";
import { RingsSection } from "./RingsSection";
import { MascotLottieSection } from "./MascotLottieSection";

export function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <CategoriesSection />
      <TestimonialsSection />
      <MascotLottieSection />
      <OrbitSection />
      <RadialOrbitalTimeline />
      <RingsSection />
      <CtaLottieSection />
    </div>
  );
}
