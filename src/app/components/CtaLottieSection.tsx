import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function CtaLottieSection() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left column — content */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <p
              className="font-['Albert_Sans',sans-serif] font-semibold text-[#5f5f5f]"
              style={{ fontSize: "14px", letterSpacing: "0.08em" }}
            >
              //EMPIEZA HOY
            </p>
            <h2
              className="font-['Albert_Sans',sans-serif] font-bold text-black"
              style={{ fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: "1.15" }}
            >
              Aprende a tu ritmo,<br />donde quieras
            </h2>
            <p
              className="font-['Albert_Sans',sans-serif] text-[#5f5f5f]"
              style={{ fontSize: "18px", lineHeight: "1.6" }}
            >
              Accede a más de 5,000 programas diseñados por expertos de la industria.
              Aprende con proyectos reales y obtén certificados que abren puertas.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {[
              "Clases en video de alta calidad",
              "Certificados reconocidos por empresas",
              "Comunidad activa de estudiantes",
              "Acceso de por vida al contenido",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span
                  className="shrink-0 w-5 h-5 rounded-full bg-[#75f5aa] flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="#000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span
                  className="font-['Albert_Sans',sans-serif] text-black"
                  style={{ fontSize: "16px" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <button
              className="bg-[#75f5aa] text-black font-['Albert_Sans',sans-serif] font-medium rounded-[10px] px-6 py-3 hover:bg-[#5de89b] transition-colors cursor-pointer"
              style={{ fontSize: "18px" }}
            >
              Comenzar gratis
            </button>
            <button
              className="bg-transparent text-black font-['Albert_Sans',sans-serif] font-medium rounded-[10px] px-6 py-3 border border-black hover:bg-gray-50 transition-colors cursor-pointer"
              style={{ fontSize: "18px" }}
            >
              Ver planes
            </button>
          </div>
        </div>

        {/* Right column — Lottie animation */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-[520px] aspect-square">
            <DotLottieReact
              src="https://lottie.host/e689a4b8-841f-4e4d-849d-c71babacf25c/7UItjk7W3F.lottie"
              loop
              autoplay
            />
          </div>
        </div>
      </div>
    </section>
  );
}
