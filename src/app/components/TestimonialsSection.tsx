import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imgAvatarSarah from "../../imports/Desktop1/26b80fd21b26a4bf0372a5341932ce70924c3794.png";
import imgAvatarMike from "../../imports/Desktop1/89e515da27fea9c7712f3e35351e584b693aac3f.png";
import imgAvatarAnita from "../../imports/Desktop1/0665067e6c9843cba74861bbc2ceb24b69b9f503.png";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string | null;
  initials?: string;
  initialsColor?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      '"I was struggling to transition from print to digital design, but Tidemy Academy\'s courses helped me refine my UI/UX skills. Now, I\'m working with clients all over the world and loving the flexibility to learn at my own pace!"',
    name: "Sarah Viloid",
    role: "Freelance Graphic Designer",
    avatar: imgAvatarSarah,
  },
  {
    id: 2,
    quote:
      '"I work a full-time job and didn\'t think I\'d have time to learn coding. But the bite-sized lessons and flexible schedule at Tidemy Academy made it possible. Now, I can confidently build my own website and mange my team more effectively."',
    name: "Mike Tyson",
    role: "Marketing Manager",
    avatar: imgAvatarMike,
  },
  {
    id: 3,
    quote:
      '"What i loved about Fandir Academy was the hands-on approach. The courses were interactive, and i could apply what i was learning immediately in real projects."',
    name: "Anita Chan",
    role: "Aspiring Web Developer",
    avatar: imgAvatarAnita,
  },
  {
    id: 4,
    quote:
      '"Tidemy Academy completely changed my career path. The data analytics course was comprehensive, practical, and well-paced. Within three months of completing it, I landed my first role as a junior data analyst. The instructors are world-class!"',
    name: "James Rivera",
    role: "Junior Data Analyst",
    avatar: null,
    initials: "JR",
    initialsColor: "#2a4a7f",
  },
  {
    id: 5,
    quote:
      '"As a UX researcher, staying current with new methods is crucial. The courses at Tidemy Academy are always up to date and taught by real practitioners. I especially loved the user testing module — it transformed how I approach every project."',
    name: "Emma Thompson",
    role: "UX Researcher",
    avatar: null,
    initials: "ET",
    initialsColor: "#5a2a7f",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex flex-col gap-10 h-full rounded-2xl p-6 border border-transparent transition-all duration-300 ease-out cursor-default hover:border-black hover:shadow-lg hover:-translate-y-1" style={{ willChange: "transform" }}>
      {/* Quote */}
      <div className="flex flex-col font-['Inter',sans-serif] font-normal italic text-black">
        <span
          aria-hidden="true"
          className="text-[#65bd8f] leading-none select-none"
          style={{ fontSize: "50px", letterSpacing: "-1.5px", lineHeight: 1, marginBottom: "8px" }}
        >
          "
        </span>
        <p
          className="text-black"
          style={{ fontSize: "18px", letterSpacing: "-0.5px", lineHeight: 1.55 }}
        >
          {testimonial.quote}
        </p>
      </div>

      {/* Author */}
      <div className="flex gap-[11px] items-center not-italic">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-[38px] h-[38px] rounded-full object-cover shrink-0"
          />
        ) : (
          <div
            className="w-[38px] h-[38px] rounded-full shrink-0 flex items-center justify-center"
            style={{ backgroundColor: testimonial.initialsColor }}
            aria-hidden="true"
          >
            <span className="text-white text-xs font-bold font-['Inter',sans-serif]">
              {testimonial.initials}
            </span>
          </div>
        )}
        <div className="flex flex-col gap-[3px]">
          <p
            className="font-['Inter',sans-serif] font-bold text-black"
            style={{ fontSize: "18px", letterSpacing: "-0.54px", lineHeight: "21px" }}
          >
            {testimonial.name}
          </p>
          <p
            className="font-['Inter',sans-serif] font-normal text-black"
            style={{ fontSize: "13px", letterSpacing: "-0.39px", lineHeight: "21px" }}
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </article>
  );
}

function useSlideWidth() {
  const [width, setWidth] = useState("100%");
  useEffect(() => {
    function update() {
      if (window.innerWidth >= 1024) setWidth("33.333%");
      else if (window.innerWidth >= 640) setWidth("50%");
      else setWidth("100%");
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return width;
}

export function TestimonialsSection() {
  const slideWidth = useSlideWidth();
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section
      className="w-full bg-white py-16 lg:py-[100px] px-6"
      aria-labelledby="testimonials-heading"
    >
      {/* Title */}
      <div className="flex flex-col items-center gap-6 text-center mb-14 lg:mb-[80px]">
        <p
          className="font-['Inter',sans-serif] font-bold text-black"
          style={{ fontSize: "14px" }}
          aria-hidden="true"
        >
          //TESTIMONIALS
        </p>
        <h2
          id="testimonials-heading"
          className="font-['Inter',sans-serif] font-semibold text-black"
          style={{ fontSize: "clamp(30px, 3.1vw, 45px)", letterSpacing: "-1.35px", lineHeight: 1.1 }}
        >
          Hear From Our<br />Learners
        </h2>
      </div>

      {/* Carousel */}
      <div
        className="relative max-w-[1200px] mx-auto"
        aria-label="Testimonials carousel"
        role="region"
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-0">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="shrink-0 px-4 py-2"
                style={{
                  flex: `0 0 ${slideWidth}`,
                  minWidth: 0,
                }}
              >
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={scrollPrev}
          className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 bg-white border border-[#e0e0e0] rounded-full w-10 h-10 flex items-center justify-center shadow-sm hover:bg-[#f5f5f5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3dcc7e] cursor-pointer"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} className="text-black" aria-hidden="true" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 bg-white border border-[#e0e0e0] rounded-full w-10 h-10 flex items-center justify-center shadow-sm hover:bg-[#f5f5f5] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3dcc7e] cursor-pointer"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} className="text-black" aria-hidden="true" />
        </button>
      </div>

      {/* Dot indicators */}
      <div
        className="flex justify-center gap-2 mt-10"
        role="tablist"
        aria-label="Testimonial navigation"
      >
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            role="tab"
            aria-selected={index === selectedIndex}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`w-2 h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3dcc7e] cursor-pointer ${
              index === selectedIndex
                ? "bg-[#3dcc7e] w-6"
                : "bg-[#d0d0d0] hover:bg-[#a0a0a0]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
