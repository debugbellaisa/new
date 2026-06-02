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

      {/* Nav */}
      <nav style={{
        padding: "20px 48px", borderBottom: "1px solid rgba(0,0,0,0.08)",
        display: "flex", alignItems: "center", gap: "16px",
        background: "rgba(245,240,232,0.9)", backdropFilter: "blur(8px)",
        position: "sticky", top: 0, zIndex: 50,
      }}>
        <Link href="/#the-paper-trail" style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: "#888", textDecoration: "none", letterSpacing: "0.08em" }}>
          ← PAPER TRAIL
        </Link>
        <span style={{ color: "#ccc" }}>·</span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Reports
        </span>
      </nav>

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 48px" }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.2em", color: "#888", textTransform: "uppercase", marginBottom: "12px" }}>
          ── reports archive
        </p>
        <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(40px, 6vw, 72px)", fontWeight: "400", marginBottom: "48px", lineHeight: "1" }}>
          Reports
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {reports.map((r) => (
            <Link
              key={r.slug}
              href={`/reports/${r.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div style={{
                border: "1.5px solid rgba(0,0,0,0.1)",
                borderRadius: "6px",
                padding: "28px 32px",
                background: "white",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                gap: "24px", flexWrap: "wrap",
                transition: "box-shadow 0.2s, transform 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "4px 6px 20px rgba(0,0,0,0.12)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <PinkFolder size={52} />
                  <div>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.15em", color: "#aaa", textTransform: "uppercase", marginBottom: "6px" }}>
                      {r.tag} · {r.year}
                    </p>
                    <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "22px", fontWeight: "400", marginBottom: "6px" }}>
                      {r.title}
                    </p>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: "#888", marginBottom: "8px" }}>
                      {r.subtitle}
                    </p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#666", lineHeight: "1.6" }}>
                      {r.desc}
                    </p>
                  </div>
                </div>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", color: "#aaa", flexShrink: 0 }}>
                  READ →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
