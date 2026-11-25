import { useEffect, useRef } from "react";
import { ArrowUpRight, BookOpen, Infinity as InfinityIcon, Sparkles } from "lucide-react";
import { Link } from "react-router";
import * as THREE from "three";
// Vanta does not publish TypeScript declarations for its effect bundles.
// @ts-ignore
import RINGS from "vanta/dist/vanta.rings.min";

const highlights = [
  { icon: BookOpen, label: "Rutas flexibles" },
  { icon: Sparkles, label: "Proyectos reales" },
  { icon: InfinityIcon, label: "Acceso continuo" },
];

export function RingsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const effectRef = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    if (!sectionRef.current || effectRef.current) return;

    try {
      effectRef.current = RINGS({
        el: sectionRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        backgroundAlpha: 1,
        backgroundColor: 0x202428,
        color: 0x88ff00,
      });
    } catch (error) {
      console.warn("Vanta RINGS could not be initialized.", error);
    }

    return () => {
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[680px] w-full items-end overflow-hidden bg-[#202428] px-6 py-14 sm:px-10 lg:min-h-[820px] lg:px-16 lg:py-20"
      aria-labelledby="rings-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#111513] via-[#202428]/30 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.16]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, transparent 20%, black 100%)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] items-end gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,.75fr)]">
        <div className="max-w-[780px]">
          <p className="mb-6 font-['Albert_Sans',sans-serif] text-sm font-semibold uppercase tracking-[0.18em] text-[#88ff00]">
            // UNA NUEVA FORMA DE AVANZAR
          </p>
          <h2
            id="rings-heading"
            className="max-w-[760px] font-['Albert_Sans',sans-serif] text-[clamp(3rem,7.2vw,7.25rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-white"
          >
            Aprende sin seguir una línea recta.
          </h2>
          <p className="mt-8 max-w-xl font-['Albert_Sans',sans-serif] text-base leading-relaxed text-white/65 sm:text-lg">
            Explora, conecta ideas y construye una ruta propia. Cada curso abre una
            posibilidad distinta para llevar tu carrera al siguiente nivel.
          </p>
        </div>

        <div className="border-t border-white/20 pt-7 lg:border-l lg:border-t-0 lg:pb-2 lg:pl-9 lg:pt-0">
          <p className="mb-6 font-['Albert_Sans',sans-serif] text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
            Diseñado para tu ritmo
          </p>
          <ul className="mb-8 flex flex-col" aria-label="Beneficios de aprendizaje">
            {highlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 border-b border-white/10 py-3.5 font-['Albert_Sans',sans-serif] text-sm text-white/80"
              >
                <Icon className="text-[#88ff00]" size={17} strokeWidth={1.8} aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
          <Link
            to="/categories"
            className="group inline-flex items-center gap-4 rounded-full bg-[#88ff00] px-6 py-3.5 font-['Albert_Sans',sans-serif] text-sm font-semibold text-[#111513] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#88ff00] focus-visible:ring-offset-4 focus-visible:ring-offset-[#202428]"
          >
            Explorar programas
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
