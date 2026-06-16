import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import svgPaths from "../../imports/HeroSection/svg-aa8vh1nulc";
import imgBg from "../../imports/HeroSection/3c88878a4ea6801a4c658def2cdb614f412adf0e.png";
import imgLogo from "../../imports/HeroSection/8ffed22c8515c330303365bc08f39e282208d14b.png";

// Flat text for typewriter — 4 lines separated by \n
// Line 0: "Learn New Skills."   (white)
// Line 1: "Advance Your"        (white)
// Line 2: "Career. " + "Anytime"  (white + green)
// Line 3: "Anywhere"            (green)
const FULL = "Learn New Skills.\nAdvance Your\nCareer. Anytime\nAnywhere";
const CAREER_WHITE_LEN = 8; // chars before green starts on line 2

function useTypewriter(total: number, speed = 38) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= total) return;
    const t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [count, total, speed]);
  return count;
}

function useCursorBlink() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setVisible((v) => !v), 530);
    return () => clearInterval(t);
  }, []);
  return visible;
}

function Cursor({ show }: { show: boolean }) {
  const blink = useCursorBlink();
  if (!show) return null;
  return (
    <span
      aria-hidden="true"
      className="inline-block align-middle ml-[2px]"
      style={{
        width: "3px",
        height: "0.8em",
        backgroundColor: "white",
        opacity: blink ? 1 : 0,
        borderRadius: "1px",
      }}
    />
  );
}

export function HeroSection() {
  const count = useTypewriter(FULL.length);
  const isDone = count >= FULL.length;
  const shown = FULL.slice(0, count);
  const lines = shown.split("\n");

  const line0 = lines[0] ?? "";
  const line1 = lines[1] ?? "";
  const line2 = lines[2] ?? "";
  const line3 = lines[3] ?? "";
  const line2White = line2.slice(0, CAREER_WHITE_LEN);
  const line2Green = line2.slice(CAREER_WHITE_LEN);
  const cursorLine = lines.length - 1;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "clamp(480px, 58vw, 832px)" }}
      aria-label="Hero – Learn New Skills"
    >
      {/* Background image */}
      <img
        src={imgBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center gap-6 lg:gap-[26px] px-6 py-10 lg:py-0 lg:absolute lg:inset-0 lg:justify-center">
        {/* Logo */}
        <div style={{ height: "clamp(34px, 3.3vw, 48px)", width: "clamp(150px, 17.4vw, 250px)" }}>
          <img
            src={imgLogo}
            alt="FlexiAcademy"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Headline with typewriter — centered */}
        <div
          className="font-['Albert_Sans',sans-serif] font-semibold text-white text-center w-full"
          style={{ fontSize: "clamp(32px, 5.4vw, 77px)", lineHeight: "69.3px" }}
          aria-label="Learn New Skills. Advance Your Career. Anytime Anywhere"
        >
          <div aria-hidden="true" style={{ lineHeight: "clamp(29px, 4.8vw, 69.3px)" }}>
            <p style={{ minHeight: "1em" }}>{line0}<Cursor show={cursorLine === 0 && !isDone} /></p>
            <p style={{ minHeight: "1em" }}>
              {line1}
              <Cursor show={cursorLine === 1 && !isDone} />
            </p>
            <p style={{ minHeight: "1em" }}>{line2White}<span className="text-[#80f6b3]">{line2Green}</span><Cursor show={cursorLine === 2 && !isDone} /></p>
            <p className="text-[#80f6b3]" style={{ minHeight: "1em" }}>
              {line3}
              <Cursor show={cursorLine === 3 && !isDone} />
            </p>
          </div>
        </div>

        {/* Search bar */}
        <div className="flex items-center gap-3 bg-[rgba(174,174,174,0.46)] rounded-[30px] px-5 py-3 w-full max-w-[357px]">
          <label htmlFor="hero-search" className="sr-only">
            Search course
          </label>
          <input
            id="hero-search"
            type="search"
            placeholder="Search course"
            className="bg-transparent text-white placeholder-white/80 font-['Albert_Sans',sans-serif] outline-none flex-1 min-w-0"
            style={{ fontSize: "22px" }}
            aria-label="Search course"
          />
          {/* Search icon from design */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="shrink-0"
            aria-hidden="true"
          >
            <path
              d={svgPaths.p3a098740}
              stroke="#E4E4E4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.33333"
            />
            <path
              d="M24.5 24.5L19.4833 19.4833"
              stroke="#E4E4E4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.33333"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
