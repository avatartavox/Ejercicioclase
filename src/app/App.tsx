import { HeroSection } from "./components/HeroSection";
import { CategoriesSection } from "./components/CategoriesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

export default function App() {
  return (
    <div className="w-full min-h-screen">
      {/* MARKER-MAKE-KIT-INVOKED */}
      <HeroSection />
      <CategoriesSection />
      <TestimonialsSection />
    </div>
  );
}
