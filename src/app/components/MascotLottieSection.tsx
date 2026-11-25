import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import mascotAnimation from "../../imports/Cute_Mascot_Jumping_Character.json";

const mascotAnimationData = JSON.stringify(mascotAnimation);

export function MascotLottieSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#eff9fb] px-6 py-16 sm:py-20 lg:py-24"
      aria-labelledby="mascot-section-title"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#75f5aa]/35 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="mb-3 font-['Albert_Sans',sans-serif] text-sm font-semibold tracking-[0.12em] text-[#17667a]">
          // APRENDER TAMBIÉN ES DISFRUTAR
        </p>
        <h2
          id="mascot-section-title"
          className="max-w-2xl font-['Albert_Sans',sans-serif] text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.08] text-[#023047]"
        >
          Celebra cada paso de tu aprendizaje
        </h2>

        <div className="mt-4 flex w-full items-center justify-center sm:mt-6">
          <div className="aspect-square w-full max-w-[520px]">
            <DotLottieReact
              data={mascotAnimationData}
              loop
              autoplay
              className="h-full w-full"
              aria-label="Mascota animada saltando de alegría"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
