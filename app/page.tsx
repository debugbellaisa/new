"use client";

import { useState } from "react";

/* ────────────────────────────────────────────────
   SUB-COMPONENTS (inline to keep file count low)
──────────────────────────────────────────────── */

function PhotoCard({
  emoji, label, width = 160, height = 120, rotation = 0,
  animClass = "anim-float", delay = "0s", bg = "linear-gradient(135deg,#dce8f5,#c5d8f0)",
}: {
  emoji: string; label: string; width?: number; height?: number;
  rotation?: number; animClass?: string; delay?: string; bg?: string;
}) {
  return (
    <div
      className={`photo-card ${animClass}`}
      style={{ "--r": `${rotation}deg`, animationDelay: delay, width } as React.CSSProperties}
    >
      <div style={{
        width: width - 16, height, background: bg,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "40px",
      }}>{emoji}</div>
      <span className="label">{label}</span>
    </div>
  );
}

function ExpertiseCard({
  emoji, label, rotation = 0, animClass = "anim-float", delay = "0s",
}: { emoji: string; label: string; rotation?: number; animClass?: string; delay?: string }) {
  return (
    <a
      href="#work"
      className={`expertise-card ${animClass}`}
      style={{ "--r": `${rotation}deg`, animationDelay: delay, transform: `rotate(${rotation}deg)` } as React.CSSProperties}
    >
      <span style={{ fontSize: "18px" }}>{emoji}</span>
      {label}
    </a>
  );
}

function FolderBtn({
  label, icon, color, textColor = "#1a1a1a", rotation = 0,
}: { label: string; icon: string; color: string; textColor?: string; rotation?: number }) {
  return (
    <a href="#" className="folder-wrap" style={{ transform: `rotate(${rotation}deg)`, display: "inline-block" }}>
      <div className="folder-tab-nub" style={{ background: color }} />
      <div className="folder-body" style={{ background: color, color: textColor }}>
        <span>{icon}</span>{label}
      </div>
    </a>
  );
}

/* ────────────────────────────────────────────────
   MAIN PAGE
──────────────────────────────────────────────── */

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = ["home", "insight index", "the paper trail", "the girl behind the metrics"];

  return (
    <div style={{ position: "relative", zIndex: 1 }}>

      {/* ══ PILL NAV ══ */}
      <nav style={{
        position: "fixed", top: "20px", left: 0, right: 0, zIndex: 100,
        display: "flex", justifyContent: "center", padding: "0 20px",
      }}>
        <div className="pill-nav">
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s.replace(/\s+/g, "-")}`}
              className={`pill ${activeSection === s ? "active" : ""}`}
              onClick={() => setActiveSection(s)}
            >
              {s}
            </a>
          ))}
        </div>
      </nav>

      {/* ══ HERO ══ */}
      <section id="home" style={{
        minHeight: "100vh", position: "relative", overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "80px 40px 60px",
      }}>

        {/* ── Scattered photo cards – desktop ── */}
        <div className="desktop-collage" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>

          {/* Left cluster */}
          <div style={{ position: "absolute", top: "14%", left: "3%", pointerEvents: "auto" }}>
            <PhotoCard emoji="🤍" label="slay.png" rotation={-5} animClass="anim-float" delay="0s"
              bg="linear-gradient(135deg,#f0e8e0,#e0d4c4)" width={150} height={110} />
          </div>
          <div style={{ position: "absolute", top: "38%", left: "5%", pointerEvents: "auto" }}>
            <PhotoCard emoji="🌿" label="Details.jpg" rotation={4} animClass="anim-drift" delay="0.6s"
              bg="linear-gradient(135deg,#d4e8d4,#b8d4b8)" width={130} height={100} />
          </div>
          <div style={{ position: "absolute", top: "62%", left: "2%", pointerEvents: "auto" }}>
            <PhotoCard emoji="☁️" label="Details.jpg" rotation={-3} animClass="anim-floatB" delay="1.2s"
              bg="linear-gradient(135deg,#dce8f5,#c8ddf0)" width={120} height={90} />
          </div>

          {/* Right cluster */}
          <div style={{ position: "absolute", top: "10%", right: "3%", pointerEvents: "auto" }}>
            <PhotoCard emoji="🌊" label="slay.png" rotation={5} animClass="anim-float" delay="0.4s"
              bg="linear-gradient(135deg,#b8d8f0,#90c0e8)" width={170} height={130} />
          </div>
          <div style={{ position: "absolute", top: "36%", right: "5%", pointerEvents: "auto" }}>
            <PhotoCard emoji="🎨" label="slay.png" rotation={-6} animClass="anim-drift" delay="1s"
              bg="linear-gradient(135deg,#f5d0d0,#f0b8b8)" width={140} height={170} />
          </div>
          <div style={{ position: "absolute", top: "26%", right: "18%", pointerEvents: "auto" }}>
            <PhotoCard emoji="📚" label="Details.jpg" rotation={3} animClass="anim-wiggle" delay="1.5s"
              bg="linear-gradient(135deg,#f0e0c8,#e8d0a8)" width={120} height={95} />
          </div>
        </div>

        {/* ── Centre hero text ── */}
        <div style={{ textAlign: "center", position: "relative", zIndex: 5, maxWidth: "600px" }}>
          <h1
            className="hero-title"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(64px, 10vw, 120px)",
              fontWeight: "400",
              lineHeight: "0.92",
              letterSpacing: "-0.02em",
              color: "#1a1a1a",
              marginBottom: "18px",
            }}
          >
            communications{" "}
            <span className="hl-yellow" style={{ fontStyle: "italic" }}>portfolio</span>
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "15px",
            color: "#444",
            lineHeight: "1.7",
            maxWidth: "380px",
            margin: "0 auto 28px",
          }}>
            how to go from <span className="wavy">scattered ideas</span>
            <br />to <strong>strategic storytelling</strong>
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#assess-damage" className="pill" style={{ background: "rgba(0,0,0,0.85)", color: "white", borderColor: "transparent" }}>
              explore my work ↓
            </a>
            <a href="#" className="pill">download cv 📄</a>
          </div>
        </div>

        {/* ── Mobile photo strip ── */}
        <div className="mobile-stack" style={{
          position: "absolute", bottom: "20px", left: 0, right: 0,
          gap: "12px", overflowX: "auto", padding: "0 20px", justifyContent: "flex-start",
          flexWrap: "nowrap",
        }}>
          {["🤍", "🌊", "🎨", "🌿"].map((e, i) => (
            <div key={i} className="photo-card" style={{ flexShrink: 0 }}>
              <div style={{ width: 90, height: 70, background: "linear-gradient(135deg,#dce8f5,#c8ddf0)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "28px" }}>{e}</div>
              <span className="label">slay.png</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ INSIGHT INDEX = EXPERTISE SECTION ══ */}
      <section id="insight-index" style={{
        minHeight: "90vh", padding: "80px 40px", position: "relative", overflow: "hidden",
        background: "linear-gradient(180deg, rgba(210,232,248,0) 0%, rgba(240,248,255,0.6) 100%)",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>

          {/* Left: image collage */}
          <div style={{ position: "relative", height: "480px" }}>
            <div style={{ position: "absolute", top: 0, left: 0 }}>
              <PhotoCard emoji="📰" label="press_release.jpg" rotation={-3} animClass="anim-float" delay="0s"
                bg="linear-gradient(135deg,#e8e0d8,#d4ccc0)" width={200} height={150} />
            </div>
            <div style={{ position: "absolute", top: "130px", left: "30px" }}>
              <PhotoCard emoji="📡" label="media_coverage.jpg" rotation={2} animClass="anim-drift" delay="0.7s"
                bg="linear-gradient(135deg,#d0e8d8,#b8d8c0)" width={200} height={150} />
            </div>
            <div style={{ position: "absolute", top: "260px", left: "10px" }}>
              <PhotoCard emoji="📊" label="research.jpg" rotation={-4} animClass="anim-floatB" delay="1.3s"
                bg="linear-gradient(135deg,#d8e8f8,#c0d8f0)" width={190} height={140} />
            </div>
          </div>

          {/* Right: text + expertise cards */}
          <div>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.2em", color: "#888", marginBottom: "12px", textTransform: "uppercase" }}>
              ── areas of expertise
            </p>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: "400", lineHeight: "1", marginBottom: "28px",
            }}>
              insight{" "}
              <span className="hl-yellow" style={{ fontStyle: "italic" }}>index</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#555", lineHeight: "1.8", marginBottom: "32px", maxWidth: "340px" }}>
              before we communicate, we must understand the landscape: the unaddressed story, the missed angle, the message that never landed.
            </p>

            {/* Expertise floating cards — stacked here, floating in hero */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
              {[
                { emoji: "📰", label: "Press Releases", delay: "0s" },
                { emoji: "🎙️", label: "Media Relations", delay: "0.3s" },
                { emoji: "📊", label: "Research", delay: "0.6s" },
                { emoji: "🤝", label: "Stakeholder Engagement", delay: "0.9s" },
                { emoji: "🌎", label: "International Affairs", delay: "1.2s" },
              ].map((c, i) => (
                <ExpertiseCard key={c.label} {...c} rotation={i % 2 === 0 ? -1 : 1} />
              ))}
            </div>
          </div>
        </div>

        {/* Sticky note */}
        <div className="anim-wiggle" style={{
          position: "absolute", bottom: "60px", right: "5%",
          "--r": "-3deg", transform: "rotate(-3deg)",
          maxWidth: "200px", zIndex: 5,
        } as React.CSSProperties}>
          <div className="sticky">
            <span style={{ background: "#f5e642", padding: "1px 4px", fontWeight: "600", fontSize: "12px" }}>affirmation</span>
            <p style={{ marginTop: "10px", fontSize: "12px" }}>
              you are not lost in the message. you are just in your strategy era. eras can always change xx
            </p>
          </div>
        </div>
      </section>

      {/* ══ THE PAPER TRAIL = DELIVERABLES ══ */}
      <section id="the-paper-trail" style={{
        minHeight: "80vh", padding: "80px 40px",
        background: "#1a1a1a", position: "relative", overflow: "hidden",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.2em", color: "#666", marginBottom: "12px", textTransform: "uppercase" }}>
            ── my deliverables
          </p>
          <h2 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: "400", color: "#f7f3ee", marginBottom: "16px", lineHeight: "1",
          }}>
            the{" "}
            <span className="hl-mint" style={{ fontStyle: "italic", color: "#1a1a1a" }}>paper trail</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#888", marginBottom: "52px", lineHeight: "1.7", maxWidth: "420px" }}>
            every story leaves evidence.<br />here&rsquo;s mine.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-end" }}>
            <FolderBtn label="Reports"         icon="📋" color="#FFD166" rotation={-2} />
            <FolderBtn label="Press Notes"     icon="📝" color="#FF9EAA" rotation={1} />
            <FolderBtn label="Media Monitoring" icon="📡" color="#A8E6CF" textColor="#1a1a1a" rotation={-3} />
            <FolderBtn label="Writing Samples" icon="✍️" color="#C5B8FF" rotation={2} />
            <FolderBtn label="Certifications"  icon="🏆" color="#FFB347" rotation={-1} />
            <FolderBtn label="Resumen / CV"    icon="📄" color="#87CEEB" rotation={3} />
          </div>

          {/* Decorative big text */}
          <div style={{
            marginTop: "80px",
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(60px, 12vw, 140px)",
            color: "rgba(255,255,255,0.03)",
            lineHeight: "1", userSelect: "none", pointerEvents: "none",
            letterSpacing: "-0.02em",
          }}>
            STRATEGIC
          </div>
        </div>
      </section>

      {/* ══ THE GIRL BEHIND THE METRICS = ABOUT ══ */}
      <section id="the-girl-behind-the-metrics" style={{
        minHeight: "70vh", padding: "80px 40px",
        background: "linear-gradient(180deg, #d0e5f5 0%, #c4ddf0 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.2em", color: "#888", marginBottom: "12px", textTransform: "uppercase" }}>
              ── about me
            </p>
            <h2 style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: "400", lineHeight: "1.05", marginBottom: "24px",
            }}>
              the girl behind{" "}
              <span className="hl-pink" style={{ fontStyle: "italic" }}>the metrics</span>
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#333", lineHeight: "1.8", marginBottom: "20px" }}>
              Strategic communications professional based in Panama City, with expertise spanning{" "}
              <span className="wavy">media relations</span>, international affairs, and stakeholder engagement.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#333", lineHeight: "1.8", marginBottom: "32px" }}>
              I craft narratives that move people — from press rooms to policy tables.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="pill" style={{ background: "#0077B5", color: "white", borderColor: "transparent" }}>
                💼 LinkedIn ↗
              </a>
              <a href="mailto:placeholder@email.com"
                className="pill" style={{ background: "rgba(255,255,255,0.7)" }}>
                ✉️ Email Me
              </a>
            </div>
          </div>

          {/* Right: scattered mini cards */}
          <div style={{ position: "relative", height: "320px" }}>
            <div className="anim-float" style={{ "--r": "-4deg", position: "absolute", top: 0, left: "10%" } as React.CSSProperties}>
              <PhotoCard emoji="🌎" label="international.jpg" rotation={-4} animClass="" delay="0s"
                bg="linear-gradient(135deg,#a8d8ea,#8ec8e0)" width={160} height={120} />
            </div>
            <div className="anim-drift" style={{ "--r": "5deg", position: "absolute", top: "140px", left: "30%" } as React.CSSProperties}>
              <PhotoCard emoji="🎙️" label="media.jpg" rotation={5} animClass="" delay="0s"
                bg="linear-gradient(135deg,#f5d0d8,#f0b8c4)" width={150} height={110} />
            </div>
          </div>
        </div>

        {/* Location sticky */}
        <div className="anim-float" style={{
          position: "absolute", bottom: "40px", right: "5%",
          "--r": "3deg", transform: "rotate(3deg)", zIndex: 5,
          animationDelay: "0.8s",
        } as React.CSSProperties}>
          <div className="sticky" style={{ maxWidth: "180px" }}>
            <p style={{ fontSize: "12px" }}>
              📍 Panama City<br />
              🌐 Available worldwide<br />
              🗣️ EN / ES
            </p>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{
        background: "#1a1a1a", padding: "16px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px",
      }}>
        <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: "18px", color: "#f7f3ee", fontStyle: "italic" }}>
          Isabella Alemán
        </span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: "#555", letterSpacing: "0.08em" }}>
          STRATEGIC COMMUNICATIONS · PANAMA · 2025
        </span>
      </footer>
    </div>
  );
}
