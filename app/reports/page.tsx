"use client";
import Link from "next/link";

function PinkFolder({ size = 48 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="6" width="30" height="21" rx="3" fill="#f48fb1" />
      <path d="M1 6 Q1 4 3 4 L12 4 Q14 4 15 6 Z" fill="#f48fb1" />
      <rect x="1" y="8" width="30" height="19" rx="3" fill="#f8bbd9" />
      <ellipse cx="10" cy="13" rx="5" ry="2.5" fill="rgba(255,255,255,0.45)" transform="rotate(-15 10 13)" />
      <text x="17" y="20" fontSize="8" fill="white" opacity="0.9">✦</text>
      <text x="8" y="22" fontSize="5" fill="white" opacity="0.7">✦</text>
      <text x="22" y="14" fontSize="5" fill="white" opacity="0.6">✦</text>
    </svg>
  );
}

const reports = [
  {
    slug: "crumbl-vs-insomnia",
    title: "Crumbl vs. Insomnia",
    subtitle: "Strategic Brand Analysis",
    tag: "Brand Intelligence Brief",
    year: "2026",
    desc: "The battle for indulgent share-of-mind — one market, two inverted minds.",
    color: "#FFD166",
  },
];

export default function ReportsIndexPage() {
  return (
    <div style={{ background: "#f5f0e8", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>

      <nav style={{
        padding: "20px 48px", borderBottom: "1px solid rgba(0,0,0,0.08)",
        display: "flex", alignItems: "center", gap: "16px",
        background: "rgba(245,240,232,0.9)", backdropFilter: "blur(8px)",
        position: "sticky", top: 0, zIndex: 50,
      }}>
        <Link href="/#the-paper-trail" style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: "#888", textDecoration: "none", letterSpacing: "0.08em" }}>
          ← PAPER TRAIL
        </Link>
      </nav>

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 48px" }}>
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: "400", marginBottom: "48px", lineHeight: "1" }}>
          Reports
        </h1>

        <Link
          href="/reports/crumbl-vs-insomnia"
          style={{ textDecoration: "none", color: "inherit", display: "inline-flex", alignItems: "center", gap: "14px" }}
        >
          <PinkFolder size={52} />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "18px", fontWeight: "700", color: "#1a1a1a" }}>
            Crumbl vs. Insomnia 🍪
          </span>
        </Link>
      </main>
    </div>
  );
}
