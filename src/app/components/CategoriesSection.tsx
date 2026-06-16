import { useEffect, useRef, useState } from "react";
import imgPhoto1 from "../../imports/Desktop1/78f8ec8b80dc4c4b994edacb5f25c5eb68545fa7.png";
import imgPhoto2 from "../../imports/Desktop1/ff79da098784c5cdbb576d0c21e394fc3ae706b1.png";
import imgPhoto3 from "../../imports/Desktop1/23f8a951897b494053d81205074981b6a5f9c57e.png";
import imgPhoto4 from "../../imports/Desktop1/ee34a454eac226094f319f9bf81f8c3de117dedc.png";

const categories = [
  { label: "Design & Creativity", count: "639+" },
  { label: "Tech & Programming", count: "261+" },
  { label: "Business & Marketing", count: "1,529+" },
  { label: "Photography & Visual Arts", count: "975+" },
  { label: "Personal Development", count: "820+" },
];

function CategoryItem({ label, count }: { label: string; count: string }) {
  return (
    <li className="flex gap-2 items-center justify-center">
      <span aria-hidden="true" className="shrink-0 w-[6px] h-[6px] rounded-full border border-[#5f5f5f]" />
      <span
        className="font-['Albert_Sans',sans-serif] font-medium text-[#5f5f5f] whitespace-nowrap"
        style={{ fontSize: "20px" }}
      >
        {label}
      </span>
      <span
        className="font-['Albert_Sans',sans-serif] font-medium text-[#5f5f5f] whitespace-nowrap"
        style={{ fontSize: "15px" }}
      >
        ({count})
      </span>
    </li>
  );
}

interface FloatingImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  parallaxOffset: number;
  className: string;
}

function FloatingImage({ src, alt, width, height, parallaxOffset, className }: FloatingImageProps) {
  return (
    <div
      className={`absolute hidden lg:block overflow-hidden rounded-[10px] shadow-md ${className}`}
      style={{
        width,
        height,
        transform: `translateY(${parallaxOffset}px)`,
        transition: "transform 0.1s linear",
        willChange: "transform",
      }}
      aria-hidden="true"
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

export function CategoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionProgress = rect.top + rect.height / 2 - window.innerHeight / 2;
      setScrollOffset(sectionProgress);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-white overflow-hidden"
      style={{ minHeight: "clamp(600px, 65.6vw, 944px)" }}
      aria-labelledby="categories-heading"
    >
      {/* Centered content column */}
      <div className="flex flex-col items-center justify-center min-h-full py-16 lg:py-[167px] px-6">
        <div className="flex flex-col items-center gap-[72px] w-full max-w-[410px] text-center">
          {/* Header */}
          <div className="flex flex-col gap-6 w-full">
            <p
              className="font-['Albert_Sans',sans-serif] font-semibold text-black"
              style={{ fontSize: "20px" }}
              aria-hidden="true"
            >
              //CATEGORIES
            </p>
            <h2
              id="categories-heading"
              className="font-['Albert_Sans',sans-serif] font-bold text-black"
              style={{ fontSize: "clamp(32px, 3.3vw, 48px)", lineHeight: "45px" }}
            >
              Find Courses That Fit Your Passion
            </h2>
          </div>

          {/* Category list */}
          <ul className="flex flex-col gap-[10px] w-full items-center" aria-label="Course categories">
            {categories.map((cat) => (
              <CategoryItem key={cat.label} label={cat.label} count={cat.count} />
            ))}
          </ul>

          {/* CTA Button */}
          <button
            className="bg-[#75f5aa] text-black font-['Albert_Sans',sans-serif] font-medium rounded-[10px] px-5 py-[10px] hover:bg-[#5de89b] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3dcc7e] cursor-pointer"
            style={{ fontSize: "20px" }}
            aria-label="View all course categories"
          >
            All Categories
          </button>
        </div>
      </div>

      {/* Floating parallax images (desktop only) */}
      {/* Top right */}
      <FloatingImage
        src={imgPhoto1}
        alt="Student learning online"
        width={174}
        height={174}
        parallaxOffset={scrollOffset * -0.22}
        className="right-[122px] top-[236px]"
      />
      {/* Left upper */}
      <FloatingImage
        src={imgPhoto2}
        alt="Creative professional at work"
        width={158}
        height={158}
        parallaxOffset={scrollOffset * 0.18}
        className="left-[155px] top-[211px]"
      />
      {/* Bottom left */}
      <FloatingImage
        src={imgPhoto3}
        alt="Team collaborating on a project"
        width={222}
        height={222}
        parallaxOffset={scrollOffset * -0.28}
        className="left-[-5px] bottom-[256px]"
      />
      {/* Bottom right */}
      <FloatingImage
        src={imgPhoto4}
        alt="Person working on laptop"
        width={206}
        height={206}
        parallaxOffset={scrollOffset * 0.20}
        className="right-[84px] bottom-[322px]"
      />
    </section>
  );
}
