import { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Building2,
  FlaskConical,
  CheckCircle2,
  FileText,
  Rocket,
} from "lucide-react";

const NODES = [
  {
    id: 0,
    label: "Génesis",
    Icon: Sparkles,
    color: "#fbbf24",
    glow: "rgba(251,191,36,0.4)",
    description: "El punto de partida. Define la visión, los objetivos y el alcance del proyecto.",
  },
  {
    id: 1,
    label: "Arquitectura",
    Icon: Building2,
    color: "#60a5fa",
    glow: "rgba(96,165,250,0.4)",
    description: "Diseña la estructura técnica. Toma decisiones sobre tecnología y patrones.",
  },
  {
    id: 2,
    label: "Prototipo",
    Icon: FlaskConical,
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.4)",
    description: "Construye una versión inicial. Valida hipótesis y recoge feedback temprano.",
  },
  {
    id: 3,
    label: "Pruebas",
    Icon: CheckCircle2,
    color: "#34d399",
    glow: "rgba(52,211,153,0.4)",
    description: "Verifica la calidad. Pruebas unitarias, integración y experiencia de usuario.",
  },
  {
    id: 4,
    label: "Documentación",
    Icon: FileText,
    color: "#f87171",
    glow: "rgba(248,113,113,0.4)",
    description: "Captura el conocimiento. Manuales, APIs y guías para equipo y usuarios.",
  },
  {
    id: 5,
    label: "Lanzamiento",
    Icon: Rocket,
    color: "#fb923c",
    glow: "rgba(251,146,60,0.4)",
    description: "El momento de verdad. Despliegue, monitoreo y celebración del logro.",
  },
];

const SPEED = 18; // degrees per second

function useOrbitAngle(paused: boolean) {
  const [angle, setAngle] = useState(0);
  const lastTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) {
      lastTimeRef.current = null;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }
    const tick = (ts: number) => {
      if (lastTimeRef.current !== null) {
        const delta = ts - lastTimeRef.current;
        setAngle((a) => (a + (SPEED * delta) / 1000) % 360);
      }
      lastTimeRef.current = ts;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [paused]);

  return angle;
}

function useRadius() {
  const [radius, setRadius] = useState(210);
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 480) setRadius(120);
      else if (w < 640) setRadius(155);
      else if (w < 1024) setRadius(180);
      else setRadius(210);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return radius;
}

export function OrbitSection() {
  const [paused, setPaused] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const angle = useOrbitAngle(paused);
  const radius = useRadius();

  const activeId = selected ?? hovered;
  const activeNode = activeId !== null ? NODES[activeId] : null;

  function handleEnter(id: number) {
    setHovered(id);
    setPaused(true);
  }
  function handleLeave() {
    setHovered(null);
    if (selected === null) setPaused(false);
  }
  function handleClick(id: number) {
    const next = selected === id ? null : id;
    setSelected(next);
    setPaused(next !== null);
  }

  return (
    <section
      className="relative w-full overflow-hidden bg-[#05050f] flex flex-col items-center"
      style={{ minHeight: "clamp(580px, 68vw, 880px)" }}
      aria-labelledby="orbit-heading"
    >
      {/* Dynamic radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: activeNode
            ? `radial-gradient(ellipse 55% 55% at 50% 55%, ${activeNode.glow.replace("0.4", "0.13")} 0%, transparent 68%)`
            : "radial-gradient(ellipse 50% 50% at 50% 55%, rgba(139,92,246,0.09) 0%, transparent 68%)",
          transition: "background 0.5s ease",
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex flex-col items-center gap-2 pt-14 pb-10 text-center">
        <h2
          id="orbit-heading"
          className="font-['Albert_Sans',sans-serif] font-bold text-white"
          style={{ fontSize: "clamp(22px, 2.8vw, 40px)" }}
        >
          Orbital Timeline
        </h2>
        <p
          className="font-mono text-white/35"
          style={{ fontSize: "12px", letterSpacing: "0.05em" }}
        >
          // auto-rotating
        </p>
      </div>

      {/* Orbit canvas */}
      <div
        className="relative flex items-center justify-center"
        style={{
          width: radius * 2 + 160,
          height: radius * 2 + 160,
        }}
      >
        {/* Ring */}
        <div
          aria-hidden="true"
          className="absolute rounded-full"
          style={{
            width: radius * 2,
            height: radius * 2,
            border: "1px solid rgba(255,255,255,0.07)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: "inset 0 0 60px rgba(139,92,246,0.04)",
          }}
        />

        {/* Nodes */}
        {NODES.map((node, i) => {
          const nodeAngle = (angle + (i / NODES.length) * 360) % 360;
          const rad = ((nodeAngle - 90) * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;
          const isSelected = selected === node.id;
          const isHovered = hovered === node.id;
          const isActive = isSelected || isHovered;

          return (
            <button
              key={node.id}
              className="absolute flex items-center gap-[6px] font-['Albert_Sans',sans-serif] font-medium cursor-pointer focus-visible:outline-none"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isSelected ? 1.12 : isHovered ? 1.06 : 1})`,
                fontSize: "clamp(10px, 1.1vw, 13px)",
                padding: "6px 14px",
                borderRadius: "999px",
                whiteSpace: "nowrap",
                backgroundColor: isActive ? node.color : "rgba(255,255,255,0.05)",
                color: isActive ? "#000" : "rgba(255,255,255,0.75)",
                border: `1px solid ${isActive ? node.color : "rgba(255,255,255,0.1)"}`,
                boxShadow: isActive
                  ? `0 0 18px ${node.glow}, 0 0 36px ${node.glow.replace("0.4", "0.18")}`
                  : "none",
                transition: "background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s, transform 0.2s",
                zIndex: isActive ? 20 : 10,
              }}
              onMouseEnter={() => handleEnter(node.id)}
              onMouseLeave={handleLeave}
              onClick={() => handleClick(node.id)}
              aria-label={`${node.label} — fase del proyecto`}
              aria-pressed={isSelected}
            >
              <node.Icon size={12} aria-hidden="true" />
              {node.label}
            </button>
          );
        })}

        {/* Center element */}
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center"
          style={{ width: 170, height: 170 }}
          aria-live="polite"
          aria-atomic="true"
        >
          {activeNode ? (
            <>
              <div
                className="rounded-full flex items-center justify-center mb-3 transition-all duration-300"
                style={{
                  width: 52,
                  height: 52,
                  backgroundColor: `${activeNode.color}22`,
                  border: `1px solid ${activeNode.color}66`,
                  boxShadow: `0 0 20px ${activeNode.glow.replace("0.4", "0.25")}`,
                }}
              >
                <activeNode.Icon
                  size={22}
                  style={{ color: activeNode.color }}
                  aria-hidden="true"
                />
              </div>
              <p
                className="font-['Albert_Sans',sans-serif] font-bold text-white"
                style={{ fontSize: "14px", marginBottom: "4px" }}
              >
                {activeNode.label}
              </p>
              <p
                className="font-['Albert_Sans',sans-serif] text-white/45 leading-snug px-3"
                style={{ fontSize: "10px" }}
              >
                {activeNode.description}
              </p>
            </>
          ) : (
            <div
              className="rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                width: 64,
                height: 64,
                background:
                  "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(59,130,246,0.25))",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 28px rgba(139,92,246,0.18)",
              }}
            >
              <span
                className="font-mono text-white/40"
                style={{ fontSize: "9px", letterSpacing: "0.12em" }}
              >
                HOVER
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
