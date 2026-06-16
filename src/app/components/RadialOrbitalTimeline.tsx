import React, { useState, useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import {
  Rocket,
  Cpu,
  Globe,
  Zap,
  Shield,
  Star,
  X,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Status = "completed" | "in-progress" | "pending";

interface TimelineEvent {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: Status;
  energy: number;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const mockTimelineData: TimelineEvent[] = [
  {
    id: 1,
    title: "Project Genesis",
    date: "Jan 2024",
    content:
      "The foundational architecture was laid down. Core systems initialized and the first neural pathways established across the quantum network.",
    category: "Foundation",
    icon: Rocket,
    relatedIds: [2, 3],
    status: "completed",
    energy: 100,
  },
  {
    id: 2,
    title: "Core Systems Online",
    date: "Mar 2024",
    content:
      "Primary CPU clusters reached operational capacity. Data pipelines synchronized at 99.7% efficiency across all distributed nodes.",
    category: "Infrastructure",
    icon: Cpu,
    relatedIds: [1, 4, 5],
    status: "completed",
    energy: 87,
  },
  {
    id: 3,
    title: "Global Deployment",
    date: "Jun 2024",
    content:
      "Network expanded to 47 geographic regions. Latency reduced to sub-10ms globally. First live traffic successfully routed.",
    category: "Expansion",
    icon: Globe,
    relatedIds: [1, 6],
    status: "completed",
    energy: 92,
  },
  {
    id: 4,
    title: "Power Surge Protocol",
    date: "Sep 2024",
    content:
      "Energy output amplified by 340%. New reactor cores brought online. Quantum entanglement channels stabilized for real-time sync.",
    category: "Energy",
    icon: Zap,
    relatedIds: [2, 5],
    status: "in-progress",
    energy: 68,
  },
  {
    id: 5,
    title: "Defense Matrix",
    date: "Nov 2024",
    content:
      "Multi-layered security protocols deployed. AI-driven threat detection achieves 99.99% accuracy. Zero-knowledge proofs integrated.",
    category: "Security",
    icon: Shield,
    relatedIds: [2, 4, 6],
    status: "in-progress",
    energy: 54,
  },
  {
    id: 6,
    title: "Stellar Horizon",
    date: "Q1 2025",
    content:
      "Next-generation capabilities unlocked. Autonomous decision trees exceed human benchmark by 12x. Project enters transcendence phase.",
    category: "Evolution",
    icon: Star,
    relatedIds: [3, 5],
    status: "pending",
    energy: 23,
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<Status, { label: string; color: string; bg: string }> = {
  completed: {
    label: "Completado",
    color: "text-emerald-300",
    bg: "bg-emerald-500/20 border-emerald-500/40",
  },
  "in-progress": {
    label: "En Progreso",
    color: "text-amber-300",
    bg: "bg-amber-500/20 border-amber-500/40",
  },
  pending: {
    label: "Pendiente",
    color: "text-slate-400",
    bg: "bg-slate-500/20 border-slate-500/40",
  },
};

const NODE_COLORS: Record<number, { glow: string; ring: string; bg: string }> = {
  1: { glow: "shadow-purple-500/60", ring: "border-purple-400", bg: "bg-purple-500/20" },
  2: { glow: "shadow-cyan-500/60",   ring: "border-cyan-400",   bg: "bg-cyan-500/20"   },
  3: { glow: "shadow-blue-500/60",   ring: "border-blue-400",   bg: "bg-blue-500/20"   },
  4: { glow: "shadow-amber-500/60",  ring: "border-amber-400",  bg: "bg-amber-500/20"  },
  5: { glow: "shadow-rose-500/60",   ring: "border-rose-400",   bg: "bg-rose-500/20"   },
  6: { glow: "shadow-teal-500/60",   ring: "border-teal-400",   bg: "bg-teal-500/20"   },
};

// ─── Component ────────────────────────────────────────────────────────────────

function useVantaWaves(containerRef: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    let effect: { destroy: () => void } | null = null;
    import("vanta/dist/vanta.waves.min").then((mod) => {
      const VANTA = mod.default ?? mod;
      effect = VANTA({
        el: containerRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 400,
        minWidth: 400,
        scale: 1.0,
        scaleMobile: 1.0,
        waveHeight: 20.0,
        color: 0x50409a,
        waveSpeed: 0.5,
      });
    });
    return () => { effect?.destroy(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default function RadialOrbitalTimeline() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useVantaWaves(containerRef);

  const [baseAngle, setBaseAngle] = useState(0);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [targetAngle, setTargetAngle] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const animRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);

  const RADIUS = 200;
  const TOTAL = mockTimelineData.length;

  // Auto-rotation
  const startRotation = useCallback(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setBaseAngle((a) => (a + 0.3) % 360);
    }, 16);
  }, []);

  const stopRotation = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startRotation();
    return () => stopRotation();
  }, [startRotation, stopRotation]);

  // Smooth angle animation to target
  useEffect(() => {
    if (targetAngle === null) return;

    const animate = () => {
      setBaseAngle((current) => {
        let diff = targetAngle - current;
        while (diff > 180) diff -= 360;
        while (diff < -180) diff += 360;

        if (Math.abs(diff) < 0.5) {
          setTargetAngle(null);
          return targetAngle;
        }
        return current + diff * 0.08;
      });
      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [targetAngle]);

  const getNodePosition = (index: number, angle: number) => {
    const nodeAngle = ((index / TOTAL) * 360 + angle) % 360;
    const rad = (nodeAngle * Math.PI) / 180;
    const x = Math.cos(rad) * RADIUS;
    const y = Math.sin(rad) * RADIUS;
    const sinVal = Math.sin(rad);
    const depth = (sinVal + 1) / 2;
    return { x, y, depth, nodeAngle };
  };

  const handleNodeClick = (event: TimelineEvent, index: number) => {
    stopRotation();
    const desiredBase = (270 - (index / TOTAL) * 360 + 720) % 360;
    setTargetAngle(desiredBase);
    setActiveId(event.id);
  };

  const handleBackgroundClick = () => {
    setActiveId(null);
    setTargetAngle(null);
    startRotation();
  };

  const handleRelatedClick = (id: number) => {
    const idx = mockTimelineData.findIndex((e) => e.id === id);
    if (idx !== -1) handleNodeClick(mockTimelineData[idx], idx);
  };

  const activeEvent = mockTimelineData.find((e) => e.id === activeId) ?? null;
  const relatedIds = activeEvent?.relatedIds ?? [];

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center select-none"
      onClick={handleBackgroundClick}
    >
      {/* Starfield */}
      <Starfield />

      {/* Orbital rings */}
      <div
        className="absolute rounded-full border border-white/5"
        style={{ width: RADIUS * 2, height: RADIUS * 2 }}
      />
      <div
        className="absolute rounded-full border border-white/[0.03]"
        style={{ width: RADIUS * 2 - 20, height: RADIUS * 2 - 20 }}
      />

      {/* Nodes */}
      <div className="absolute" style={{ width: 0, height: 0 }}>
        {mockTimelineData.map((event, index) => {
          const { x, y, depth } = getNodePosition(index, baseAngle);
          const isActive = activeId === event.id;
          const isRelated = relatedIds.includes(event.id);
          const colors = NODE_COLORS[event.id] ?? NODE_COLORS[1];
          const Icon = event.icon;
          const zIndex = Math.round(depth * 40) + (isActive ? 60 : 0);
          const opacity = 0.3 + depth * 0.7;
          const scale = isActive ? 1.45 : depth * 0.25 + 0.75;

          return (
            <div
              key={event.id}
              className="absolute"
              style={{
                transform: `translate(${x - 24}px, ${y - 24}px)`,
                zIndex,
                transition: "transform 0.05s linear",
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleNodeClick(event, index);
              }}
            >
              <div
                className={`
                  relative w-12 h-12 rounded-full border-2 cursor-pointer
                  flex items-center justify-center
                  transition-all duration-300 ease-out
                  ${colors.bg} ${colors.ring}
                  ${isActive ? `shadow-lg ${colors.glow} shadow-[0_0_24px_6px]` : ""}
                  ${isRelated && !isActive ? "animate-pulse" : ""}
                `}
                style={{
                  opacity,
                  transform: `scale(${scale})`,
                }}
              >
                <Icon
                  className={`w-5 h-5 ${isActive ? "text-white" : "text-white/80"}`}
                />
                {isRelated && !isActive && (
                  <span className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
                )}
              </div>

              {(isActive || depth > 0.6) && (
                <div
                  className="absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-white/60 pointer-events-none"
                  style={{ opacity }}
                >
                  {event.title}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Central nucleus */}
      <div className="absolute z-50 pointer-events-none" onClick={(e) => e.stopPropagation()}>
        <NucleusCore />
      </div>

      {/* Detail card */}
      <AnimatePresence>
        {activeEvent && (
          <motion.div
            key={activeEvent.id}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[100] w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <DetailCard
              event={activeEvent}
              onClose={handleBackgroundClick}
              onRelatedClick={handleRelatedClick}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top label */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center pointer-events-none z-10">
        <p className="text-xs tracking-[0.3em] text-white/30 uppercase">
          Orbital Timeline
        </p>
      </div>
    </div>
  );
}

// ─── Nucleus ──────────────────────────────────────────────────────────────────

function NucleusCore() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 80, height: 80 }}>
      <span
        className="absolute inset-0 rounded-full bg-purple-600/10 animate-ping"
        style={{ animationDuration: "2.5s" }}
      />
      <div
        className="absolute rounded-full bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-teal-900/20 border border-purple-500/20"
        style={{ width: 80, height: 80 }}
      />
      <div
        className="absolute rounded-full bg-gradient-to-br from-purple-700/50 via-blue-600/40 to-cyan-600/30 border border-purple-400/30 animate-pulse"
        style={{ width: 56, height: 56 }}
      />
      <div
        className="absolute rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 opacity-90"
        style={{ width: 32, height: 32 }}
      />
      <div className="absolute rounded-full bg-white/80 blur-sm" style={{ width: 10, height: 10 }} />
      <div className="absolute rounded-full bg-white" style={{ width: 5, height: 5 }} />
    </div>
  );
}

// ─── Detail Card ──────────────────────────────────────────────────────────────

function DetailCard({
  event,
  onClose,
  onRelatedClick,
}: {
  event: TimelineEvent;
  onClose: () => void;
  onRelatedClick: (id: number) => void;
}) {
  const status = STATUS_CONFIG[event.status];
  const colors = NODE_COLORS[event.id] ?? NODE_COLORS[1];
  const Icon = event.icon;
  const related = mockTimelineData.filter((e) => event.relatedIds.includes(e.id));

  return (
    <div className="mx-4 rounded-2xl border border-white/10 bg-black/90 backdrop-blur-xl overflow-hidden shadow-2xl">
      <div className="h-0.5 w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400" />

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-xl ${colors.bg} border ${colors.ring} flex items-center justify-center shrink-0`}
            >
              <Icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <span
                className={`inline-flex items-center px-2 py-0.5 rounded-full border text-[10px] tracking-wide mb-1 ${status.bg} ${status.color}`}
              >
                {status.label}
              </span>
              <h3 className="text-white leading-tight">{event.title}</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/50 hover:text-white transition-colors shrink-0 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] tracking-widest text-white/30 uppercase">{event.category}</span>
          <span className="text-white/20">·</span>
          <span className="text-[10px] text-white/40">{event.date}</span>
        </div>

        {/* Content */}
        <p className="text-white/60 text-sm leading-relaxed mb-4">{event.content}</p>

        {/* Energy bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1.5">
            <span className="text-[10px] tracking-widest text-white/30 uppercase">Nivel de Energía</span>
            <span className="text-[10px] text-white/50">{event.energy}%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${event.energy}%` }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="h-full rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
            />
          </div>
        </div>

        {/* Related nodes */}
        {related.length > 0 && (
          <div>
            <p className="text-[10px] tracking-widest text-white/30 uppercase mb-2">Nodos Conectados</p>
            <div className="flex flex-wrap gap-2">
              {related.map((rel) => {
                const RelIcon = rel.icon;
                const relColors = NODE_COLORS[rel.id] ?? NODE_COLORS[1];
                return (
                  <button
                    key={rel.id}
                    onClick={() => onRelatedClick(rel.id)}
                    className={`
                      flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] text-white/70
                      hover:text-white hover:border-white/30 transition-all duration-200 group cursor-pointer
                      ${relColors.bg} ${relColors.ring}
                    `}
                  >
                    <RelIcon className="w-3 h-3" />
                    {rel.title}
                    <ChevronRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity -ml-0.5" />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Starfield ────────────────────────────────────────────────────────────────

function Starfield() {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: (i * 137.508) % 100,
    y: (i * 97.3) % 100,
    size: (i % 3) * 0.5 + 0.5,
    opacity: ((i % 5) + 1) * 0.08 + 0.1,
    delay: (i % 8) * 0.5,
    duration: 2 + (i % 3),
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
