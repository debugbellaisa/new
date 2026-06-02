"use client";

import { useState } from "react";

interface FloatingCardProps {
  emoji: string;
  label: string;
  href?: string;
  rotation?: number;
  animationClass?: string;
  animationDelay?: string;
  colorClass?: string;
  className?: string;
}

export default function FloatingCard({
  emoji,
  label,
  href = "#",
  rotation = 0,
  animationClass = "animate-float-slow",
  animationDelay = "0s",
  colorClass = "bg-white",
  className = "",
}: FloatingCardProps) {
  const [hovered, setHovered] = useState(false);

  const style: React.CSSProperties = {
    ["--rot" as string]: `${rotation}deg`,
    animationDelay,
    transform: hovered
      ? `rotate(${rotation}deg) scale(1.08)`
      : `rotate(${rotation}deg)`,
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    boxShadow: hovered
      ? "6px 6px 24px rgba(0,0,0,0.22)"
      : "3px 3px 12px rgba(0,0,0,0.14)",
  };

  return (
    <a
      href={href}
      className={`floating-card ${animationClass} ${colorClass} ${className} cursor-pointer select-none rounded-xl px-5 py-3 font-bold text-sm flex items-center gap-2 border-2 border-black/10 no-underline text-inherit`}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="text-xl">{emoji}</span>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "13px", letterSpacing: "0.02em" }}>
        {label}
      </span>
    </a>
  );
}
