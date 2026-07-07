import { Link, useParams } from "react-router";
import { getCategoryBySlug, type Course } from "../data/categories";

const levelColor: Record<Course["level"], string> = {
  Básico: "bg-emerald-50 text-emerald-700",
  Intermedio: "bg-blue-50 text-blue-700",
  Avanzado: "bg-purple-50 text-purple-700",
};

export function CategoryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug ?? "");

  if (!category) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center gap-4 bg-white px-6">
        <p className="font-['Albert_Sans',sans-serif] text-[#5f5f5f] text-lg">
          Categoría no encontrada.
        </p>
        <Link
          to="/categories"
          className="font-['Albert_Sans',sans-serif] font-medium text-black underline underline-offset-4"
        >
          Ver todas las categorías
        </Link>
      </div>
    );
  }

  const { label, count, description, subcategories, director, courses } = category;

  return (
    <div className="w-full min-h-screen bg-white">
      {/* ── Sticky header ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-3 text-sm font-['Albert_Sans',sans-serif] text-[#5f5f5f]">
          <Link to="/" className="hover:text-black transition-colors">Inicio</Link>
          <span>/</span>
          <Link to="/categories" className="hover:text-black transition-colors">Categorías</Link>
          <span>/</span>
          <span className="text-black font-medium truncate">{label}</span>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="bg-white px-6 pt-14 pb-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col gap-5">
          <p
            className="font-['Albert_Sans',sans-serif] font-semibold text-[#5f5f5f]"
            style={{ fontSize: "13px", letterSpacing: "0.08em" }}
          >
            //CATEGORÍA
          </p>
          <div className="flex flex-wrap items-start gap-4">
            <h1
              className="font-['Albert_Sans',sans-serif] font-bold text-black flex-1"
              style={{ fontSize: "clamp(28px, 4vw, 52px)", lineHeight: "1.1" }}
            >
              {label}
            </h1>
            <span className="shrink-0 self-start mt-1 bg-[#75f5aa]/20 text-[#1a7a45] font-['Albert_Sans',sans-serif] font-semibold rounded-full px-4 py-1.5 text-sm">
              {count} cursos
            </span>
          </div>
          <p
            className="font-['Albert_Sans',sans-serif] text-[#5f5f5f] max-w-2xl"
            style={{ fontSize: "17px", lineHeight: "1.65" }}
          >
            {description}
          </p>

          {/* Subcategory pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {subcategories.map((sub) => (
              <span
                key={sub}
                className="bg-gray-50 border border-gray-200 text-[#5f5f5f] font-['Albert_Sans',sans-serif] rounded-full px-3 py-1 text-sm"
              >
                {sub}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <main className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Left: courses list (2/3) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <h2
            className="font-['Albert_Sans',sans-serif] font-bold text-black"
            style={{ fontSize: "22px" }}
          >
            Cursos incluidos
          </h2>
          <ul className="flex flex-col gap-4">
            {courses.map((course, i) => (
              <CourseRow key={i} course={course} />
            ))}
          </ul>
        </div>

        {/* Right: director card (1/3) */}
        <aside className="flex flex-col gap-6">
          <h2
            className="font-['Albert_Sans',sans-serif] font-bold text-black"
            style={{ fontSize: "22px" }}
          >
            Director de carrera
          </h2>
          <DirectorCard director={director} />
        </aside>
      </main>

      {/* ── CTA footer ── */}
      <section className="bg-[#0d0d0d] px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="font-['Albert_Sans',sans-serif] font-bold text-white mb-2"
              style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
            >
              ¿Listo para empezar?
            </h3>
            <p className="font-['Albert_Sans',sans-serif] text-white/60 text-base">
              Accede a todos los cursos de {label} con un solo plan.
            </p>
          </div>
          <button
            className="shrink-0 bg-[#75f5aa] text-black font-['Albert_Sans',sans-serif] font-medium rounded-[10px] px-6 py-3 hover:bg-[#5de89b] transition-colors cursor-pointer text-lg"
          >
            Comenzar gratis
          </button>
        </div>
      </section>
    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function CourseRow({ course }: { course: Course }) {
  return (
    <li className="group flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#75f5aa] hover:shadow-sm transition-all duration-200 cursor-pointer">
      {/* Icon */}
      <div className="shrink-0 w-10 h-10 rounded-lg bg-[#75f5aa]/15 flex items-center justify-center mt-0.5">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            d="M9 1.5L11.18 6.26L16.5 7.09L12.75 10.74L13.64 16.04L9 13.52L4.36 16.04L5.25 10.74L1.5 7.09L6.82 6.26L9 1.5Z"
            fill="#75f5aa"
            stroke="#3dcc7e"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-start gap-2 mb-1">
          <span
            className="font-['Albert_Sans',sans-serif] font-semibold text-black group-hover:text-black leading-snug"
            style={{ fontSize: "16px" }}
          >
            {course.title}
          </span>
          {course.tag && (
            <span className="shrink-0 bg-[#75f5aa] text-black font-['Albert_Sans',sans-serif] font-semibold rounded-full px-2 py-0.5 text-xs">
              {course.tag}
            </span>
          )}
        </div>
        <p className="font-['Albert_Sans',sans-serif] text-[#5f5f5f] text-sm mb-2">
          {course.instructor}
        </p>
        <div className="flex items-center gap-3">
          <span className="font-['Albert_Sans',sans-serif] text-[#5f5f5f] text-xs flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <circle cx="6" cy="6" r="5" stroke="#9ca3af" strokeWidth="1.2" />
              <path d="M6 3.5V6.5L8 8" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            {course.duration}
          </span>
          <span
            className={`font-['Albert_Sans',sans-serif] font-medium rounded-full px-2.5 py-0.5 text-xs ${levelColor[course.level]}`}
          >
            {course.level}
          </span>
        </div>
      </div>

      {/* Arrow */}
      <svg
        className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-[#75f5aa]"
        width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
      >
        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </li>
  );
}

function DirectorCard({ director }: { director: import("../data/categories").Director }) {
  return (
    <div className="rounded-2xl border border-gray-100 overflow-hidden">
      {/* Photo */}
      <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
        <img
          src={director.photo}
          alt={director.name}
          className="w-full h-full object-cover object-top"
        />
      </div>
      {/* Info */}
      <div className="p-5 flex flex-col gap-3">
        <div>
          <p
            className="font-['Albert_Sans',sans-serif] font-bold text-black"
            style={{ fontSize: "18px" }}
          >
            {director.name}
          </p>
          <p
            className="font-['Albert_Sans',sans-serif] text-[#75f5aa] font-medium"
            style={{ fontSize: "13px" }}
          >
            {director.role}
          </p>
        </div>
        <p
          className="font-['Albert_Sans',sans-serif] text-[#5f5f5f]"
          style={{ fontSize: "14px", lineHeight: "1.6" }}
        >
          {director.bio}
        </p>
      </div>
    </div>
  );
}
