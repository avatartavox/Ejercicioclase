import { Link } from "react-router";

const allCategories = [
  {
    label: "Design & Creativity",
    count: "639+",
    subcategories: ["UI/UX Design", "Graphic Design", "Motion Graphics", "3D Modeling", "Illustration", "Typography"],
  },
  {
    label: "Tech & Programming",
    count: "261+",
    subcategories: ["Web Development", "Mobile Apps", "Data Science", "Machine Learning", "DevOps", "Cybersecurity"],
  },
  {
    label: "Business & Marketing",
    count: "1,529+",
    subcategories: ["Digital Marketing", "SEO", "Social Media", "Entrepreneurship", "Finance", "Sales"],
  },
  {
    label: "Photography & Visual Arts",
    count: "975+",
    subcategories: ["Photography", "Video Editing", "Color Grading", "Documentary", "Portrait", "Product Photography"],
  },
  {
    label: "Personal Development",
    count: "820+",
    subcategories: ["Productivity", "Leadership", "Communication", "Mindfulness", "Public Speaking", "Time Management"],
  },
  {
    label: "Music & Audio",
    count: "412+",
    subcategories: ["Music Production", "Sound Design", "Mixing & Mastering", "Songwriting", "DJing", "Podcast"],
  },
  {
    label: "Health & Wellness",
    count: "340+",
    subcategories: ["Fitness", "Nutrition", "Yoga", "Mental Health", "Meditation", "Sports"],
  },
  {
    label: "Language & Communication",
    count: "198+",
    subcategories: ["English", "Spanish", "Portuguese", "French", "Writing", "Copywriting"],
  },
];

export function CategoriesPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-[#5f5f5f] hover:text-black transition-colors font-['Albert_Sans',sans-serif]"
            style={{ fontSize: "15px" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M10 13L5 8L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white px-6 pt-16 pb-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <p
            className="font-['Albert_Sans',sans-serif] font-semibold text-[#5f5f5f] mb-4"
            style={{ fontSize: "14px", letterSpacing: "0.08em" }}
          >
            //CATEGORIES
          </p>
          <h1
            className="font-['Albert_Sans',sans-serif] font-bold text-black mb-4"
            style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "1.1" }}
          >
            Todos los programas
          </h1>
          <p
            className="font-['Albert_Sans',sans-serif] text-[#5f5f5f] max-w-xl"
            style={{ fontSize: "18px" }}
          >
            Explora nuestra oferta completa de más de 5,000 programas en{" "}
            {allCategories.length} categorías.
          </p>
        </div>
      </section>

      {/* Categories grid */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCategories.map((cat) => (
            <CategoryCard key={cat.label} {...cat} />
          ))}
        </div>
      </main>

      {/* CTA footer */}
      <section className="bg-[#0d0d0d] px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="font-['Albert_Sans',sans-serif] font-bold text-white mb-4"
            style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
          >
            ¿No encuentras lo que buscas?
          </h2>
          <p
            className="font-['Albert_Sans',sans-serif] text-white/60 mb-8"
            style={{ fontSize: "16px" }}
          >
            Cuéntanos qué necesitas y lo añadimos a nuestra oferta.
          </p>
          <button
            className="bg-[#75f5aa] text-black font-['Albert_Sans',sans-serif] font-medium rounded-[10px] px-6 py-3 hover:bg-[#5de89b] transition-colors cursor-pointer"
            style={{ fontSize: "18px" }}
          >
            Sugerir un programa
          </button>
        </div>
      </section>
    </div>
  );
}

function CategoryCard({
  label,
  count,
  subcategories,
}: {
  label: string;
  count: string;
  subcategories: string[];
}) {
  return (
    <article className="group border border-gray-100 rounded-2xl p-6 hover:border-[#75f5aa] hover:shadow-lg transition-all duration-200 cursor-pointer">
      <div className="flex items-start justify-between mb-4">
        <h2
          className="font-['Albert_Sans',sans-serif] font-bold text-black group-hover:text-black"
          style={{ fontSize: "20px", lineHeight: "1.3" }}
        >
          {label}
        </h2>
        <span
          className="shrink-0 ml-4 bg-[#75f5aa]/20 text-[#1a7a45] font-['Albert_Sans',sans-serif] font-semibold rounded-full px-3 py-1"
          style={{ fontSize: "13px" }}
        >
          {count}
        </span>
      </div>
      <ul className="flex flex-col gap-2">
        {subcategories.map((sub) => (
          <li key={sub} className="flex items-center gap-2">
            <span className="shrink-0 w-[5px] h-[5px] rounded-full bg-[#75f5aa]" aria-hidden="true" />
            <span
              className="font-['Albert_Sans',sans-serif] text-[#5f5f5f]"
              style={{ fontSize: "14px" }}
            >
              {sub}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
