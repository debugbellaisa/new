"use client";

import { useState } from "react";

interface DeliverableButtonProps {
  label: string;
  href?: string;
  color?: string;
  textColor?: string;
  rotation?: number;
  icon?: string;
}

export default function DeliverableButton({
  label,
  href = "#",
  color = "#FFD166",
  textColor = "#1a1a1a",
  rotation = 0,
  icon = "📁",
}: DeliverableButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      className="inline-block no-underline"
      style={{
        transform: hovered
          ? `rotate(${rotation}deg) translateY(-4px)`
          : `rotate(${rotation}deg)`,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tab nub */}
      <div
        style={{
          background: color,
          borderRadius: "6px 6px 0 0",
          height: "10px",
          width: "60%",
          marginLeft: "10px",
          border: "2px solid rgba(0,0,0,0.12)",
          borderBottom: "none",
        }}
      />
      {/* Body */}
      <div
        style={{
          background: color,
          color: textColor,
          padding: "10px 18px 12px",
          fontFamily: "'Space Mono', monospace",
          fontSize: "12px",
          fontWeight: "700",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          borderRadius: "0 6px 6px 6px",
          border: "2px solid rgba(0,0,0,0.12)",
          boxShadow: hovered
            ? "4px 4px 16px rgba(0,0,0,0.2)"
            : "2px 3px 10px rgba(0,0,0,0.12)",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          whiteSpace: "nowrap",
        }}
      >
        <span>{icon}</span>
        {label}
      </div>
    </a>
  );
}
