"use client";

import { useState } from "react";

interface PhotoCardProps {
  title: string;
  subtitle?: string;
  rotation?: number;
  tapeColor?: "yellow" | "pink" | "blue";
  children?: React.ReactNode;
  className?: string;
}

export default function PhotoCard({
  title,
  subtitle,
  rotation = 0,
  tapeColor = "yellow",
  children,
  className = "",
}: PhotoCardProps) {
  const [hovered, setHovered] = useState(false);

  const tapeClass =
    tapeColor === "pink" ? "tape tape-pink" :
    tapeColor === "blue" ? "tape tape-blue" : "tape";

  return (
    <div
      className={`photo-frame ${className}`}
      style={{
        transform: hovered
          ? `rotate(${rotation}deg) scale(1.04)`
          : `rotate(${rotation}deg)`,
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        boxShadow: hovered
          ? "8px 8px 28px rgba(0,0,0,0.22)"
          : "4px 4px 16px rgba(0,0,0,0.18)",
        cursor: "default",
        maxWidth: "220px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={tapeClass} />
      {children ? (
        children
      ) : (
        <div
          style={{
            background: "linear-gradient(135deg, #e8e0d5 0%, #d5cfc5 100%)",
            height: "140px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "48px",
            marginBottom: "8px",
          }}
        >
          📸
        </div>
      )}
      <p
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "11px",
          color: "#555",
          marginTop: "6px",
          textAlign: "center",
        }}
      >
        {title}
      </p>
      {subtitle && (
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "10px",
            color: "#888",
            textAlign: "center",
            marginTop: "2px",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
