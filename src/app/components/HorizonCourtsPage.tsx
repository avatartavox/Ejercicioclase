import { ShaderEffect } from "@figma/expressive-components"
import { Link } from "react-router"
import {
  manifest as horizonHeroShaderManifest,
  render as renderHorizonHeroShader,
  setup as setupHorizonHeroShader,
} from "../../lib/custom-effects/CodeComponentId_2759876dfdc3c44626a79ad9663dd2b6179ce58b_38647b9e5b804c3dc7da23558bbe8be90a49ec90"

const asset = (name: string) => `/assets/horizon/${name}`

const facts = [
  ["12 000+", "Hours of play annually"],
  ["89%", "Player Retention Rate"],
  ["1,200+", "Active Members"],
  ["125+", "Annual Tournaments"],
]

function CircleArrow() {
  return (
    <span
      aria-hidden="true"
      className="inline-block size-[15.671px] rounded-full bg-[#d9d9d9]"
    />
  )
}

export function HorizonCourtsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-black">
      <header className="px-5 py-[23.506px] font-['Inter:Regular',sans-serif]">
        <nav
          aria-label="Horizon Courts"
          className="mx-auto flex max-w-[1271px] items-center justify-between gap-6"
        >
          <Link
            to="/horizon-courts"
            className="shrink-0 text-[clamp(20px,1.65vw,26.118px)]"
          >
            Horizon Courts
          </Link>
          <div className="hidden h-[68.559px] items-center gap-[clamp(10px,2.2vw,35.259px)] lg:flex">
            <a
              href="#about"
              className="rounded-full border border-[#676767] px-5 py-1 text-[15.671px]"
            >
              About Us
            </a>
            <a
              href="#services"
              className="rounded-full px-5 py-1 text-[15.671px]"
            >
              Services
            </a>
            <a
              href="#coaches"
              className="rounded-full px-5 py-1 text-[15.671px]"
            >
              Coaches
            </a>
            <a
              href="#events"
              className="rounded-full px-5 py-1 text-[15.671px]"
            >
              Events
            </a>
            <a
              href="#contacts"
              className="rounded-full px-5 py-1 text-[15.671px]"
            >
              Contacts
            </a>
          </div>
          <a
            href="#services"
            className="flex h-[30.689px] w-[122.101px] shrink-0 items-center justify-center gap-[6.529px] rounded-full border border-[#616161] bg-[#0b1a2d] text-[15.671px] text-white"
          >
            Book now
            <CircleArrow />
          </a>
        </nav>
      </header>

      <ShaderEffect
        className="relative h-[min(776px,70vw)] min-h-[500px] w-full"
        shaders={[
          {
            setup: setupHorizonHeroShader,
            render: renderHorizonHeroShader,
            params: {
              feather: 0,
              radius: 119,
              blur: 4.800000190734863,
              grayscale: 1,
            },
            manifest: horizonHeroShaderManifest,
          },
        ]}
      >
        <section className="relative flex size-full items-center justify-center px-5 text-white">
          <img
            src="/assets/08002.png"
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
          <div className="relative flex max-w-3xl flex-col items-center gap-[13.059px] text-center font-['Inter:Regular',sans-serif]">
            <h1 className="text-[clamp(30px,2.35vw,37.218px)] leading-[normal]">
              Unleash Your Inner Champion Today.
              <br />
              All In One Place.
            </h1>
            <p className="text-[15.018px] leading-[normal]">
              Join the ultimate tennis experiencie - where passion meets
              performance,
              <br className="hidden sm:block" /> and every swing brings you
              closer to victory.
            </p>
            <a
              href="#about"
              className="flex h-[41.789px] w-[258.567px] items-center justify-center gap-[6.529px] rounded-full bg-[#0b1a2d] text-[15.671px]"
            >
              Start your own journey
              <CircleArrow />
            </a>
          </div>
        </section>
      </ShaderEffect>

      <div className="flex flex-col gap-[49px] px-5 pb-20 pt-[49px]">
        <section
          id="about"
          className="mx-auto flex w-full max-w-[1271px] flex-col justify-between gap-8 py-[30.036px] font-['Inter:Regular',sans-serif] md:flex-row md:items-center"
        >
          <span className="w-fit rounded-full border border-[#676767] px-4 py-2 text-[15.671px]">
            About Horizon
          </span>
          <p className="max-w-[620px] text-[20.894px] leading-[normal]">
            At Horizon, we don’t just play tennis - we live it. Since 2021,
            <br className="hidden md:block" /> our club has been a home for
            players of all levels, from eager
            <br className="hidden md:block" /> beginners to seasoned pros.
          </p>
        </section>

        <section
          id="coaches"
          className="mx-auto grid w-full max-w-[1271px] gap-[23.506px] lg:grid-cols-3"
        >
          <article className="flex min-h-[346px] flex-col justify-center gap-[19.588px] rounded-[18.935px] bg-[#0d1a2d] p-[31.341px] font-['Inter:Regular',sans-serif] text-white">
            <img src={asset("dbf61.svg")} alt="" />
            <p className="text-[clamp(24px,1.8vw,28.73px)] leading-[normal] tracking-[-0.8619px]">
              Professional hard courts{" "}
              <span className="text-[#4c5a6e]">
                with tournaments-grade lightning &amp; climate control - play in
              </span>{" "}
              perfect conditions, in any season.
            </p>
            <div className="flex items-center gap-[9.141px]">
              <img src={asset("45a81.svg")} alt="" />
              <span className="text-[20.894px] tracking-[-0.6268px] text-[#55667d]">
                Game Mode
              </span>
            </div>
          </article>

          <article className="relative min-h-[346px] overflow-hidden rounded-[32.647px]">
            <img
              src={asset("eeddc.png")}
              alt="Tennis coach holding a racket"
              className="size-full object-cover"
            />
            <span className="absolute left-1/2 top-[56%] -translate-x-1/2 rounded-full bg-gradient-to-r from-white/60 to-white/0 px-[13.059px] py-[6.529px] font-['Google_Sans:Regular','Inter:Regular',sans-serif] text-[13.059px] leading-[28.73px] whitespace-nowrap text-white">
              Private &amp; group lessons
            </span>
          </article>

          <article className="flex min-h-[346px] flex-col justify-center gap-[32.647px] rounded-[15.018px] border border-[#cfcfcf] px-[13.712px] py-[11.753px] font-['Urbanist:Regular',sans-serif]">
            <div>
              <p className="text-[55.501px] leading-[55.501px]">100+</p>
              <p className="text-[16.324px] leading-[28.73px]">Pro Coaches</p>
              <p className="max-w-[238px] text-[12.406px] leading-[14.365px] text-[#727272]">
                Certified professionals ready to boost your game from firt serve
                to tournament level.
              </p>
            </div>
            <div className="flex flex-col gap-[6.529px] p-[6.529px] text-[12.406px] leading-[14.365px]">
              {[
                ["Beginner", "f8d4c.svg"],
                ["Intermediate", "4b65c.svg"],
                ["Intermediate", "a1fe0.svg"],
              ].map(([label, chart]) => (
                <div
                  key={chart}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-1">
                    <span className="w-[88px]">{label}</span>
                    <img src={asset(chart)} alt="" />
                  </div>
                  <span>55</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section
          id="events"
          className="mx-auto flex w-full max-w-[1271px] flex-col items-center gap-[46.359px] font-['Urbanist:Regular',sans-serif]"
        >
          <h2 className="text-center text-[22.853px] leading-[28.73px]">
            A few more facts about us in numbers
          </h2>
          <div className="grid w-full grid-cols-2 gap-8 md:grid-cols-4">
            {facts.map(([number, label], index) => (
              <div
                key={number}
                className="flex flex-col items-center gap-[6.529px] text-center leading-[28.73px]"
              >
                <p
                  className={`text-[35.912px] ${
                    index === 0 ? "font-['Urbanist:Medium',sans-serif]" : ""
                  }`}
                >
                  {number}
                </p>
                <p className="text-[14.365px] text-[#727272]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="services"
          className="mx-auto grid w-full max-w-[1271px] items-center gap-12 font-['Urbanist:Regular',sans-serif] lg:grid-cols-[376px_1fr]"
        >
          <div className="flex flex-col items-start gap-[78.354px]">
            <div className="flex flex-col items-start gap-[24.159px]">
              <span className="rounded-full border border-[#c2c2c2] px-[8.488px] py-[3.918px] text-[14.365px]">
                Services
              </span>
              <p className="text-[22.853px] leading-[28.73px]">
                Explore our full range of coaching,
                <br /> training, and tennis experiences, From
                <br /> frist serve to march point - we’ve
                <br /> got the right program for you.
              </p>
            </div>
            <a
              href="#coaches"
              className="flex h-[32.647px] items-center gap-[6.529px] rounded-full bg-[#0a1121] px-4 text-[14.365px] text-white"
            >
              Explore More
              <img src={asset("8f691.svg")} alt="" />
            </a>
          </div>

          <div className="grid gap-[36.565px] md:grid-cols-[1.1fr_0.95fr]">
            <article className="relative flex min-h-[276px] flex-col justify-between overflow-hidden rounded-[31.341px] p-[18.935px] text-white">
              <img
                src={asset("22b06.png")}
                alt="Tennis training session"
                className="absolute inset-0 size-full object-cover"
              />
              <span className="relative w-fit rounded-full bg-gradient-to-r from-white/50 to-white/10 px-[14.365px] py-[5.877px] font-['Urbanist:Medium',sans-serif] text-[12.732px] leading-[19.588px]">
                Training Programs
              </span>
              <div className="relative flex items-end justify-between gap-4">
                <p className="font-['Urbanist:Medium',sans-serif] text-[15.671px] leading-[19.588px]">
                  Programs designed for
                  <br /> all ages and abilities
                </p>
                <span className="flex size-[33.953px] items-center justify-center rounded-full bg-black">
                  <img src={asset("bd27a.svg")} alt="" />
                </span>
              </div>
            </article>

            <div className="flex flex-col gap-[17.63px]">
              <article className="relative flex min-h-[161px] flex-col justify-between overflow-hidden rounded-[20.894px] p-[18.283px] text-white">
                <img
                  src={asset("c2822.png")}
                  alt="Tennis balls on a court"
                  className="absolute inset-0 size-full object-cover"
                />
                <span className="relative w-fit rounded-full bg-gradient-to-r from-white/50 to-white/10 px-[14.365px] py-[5.877px] font-['Urbanist:Medium',sans-serif] text-[12.732px] leading-[19.588px]">
                  Court Access
                </span>
                <p className="relative font-['Urbanist:Medium',sans-serif] text-[15.671px] leading-[19.588px]">
                  Hourly Court Rental
                </p>
              </article>
              <p className="font-['Urbanist:Medium',sans-serif] text-[15.671px] leading-[18.283px] text-[#3b3d41]">
                Step into a space built for
                <br /> players - to grow, compete,
                <br /> and thrive
              </p>
              <div id="contacts" className="flex gap-[12.406px]">
                {[
                  ["6a59f.svg", "Previous"],
                  ["571e6.svg", "Next"],
                ].map(([icon, label]) => (
                  <button
                    key={icon}
                    type="button"
                    aria-label={label}
                    className="flex size-[31.994px] items-center justify-center rounded-full border border-[#c2c2c2] bg-white"
                  >
                    <img src={asset(icon)} alt="" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
