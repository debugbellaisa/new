"use client";

import FloatingCard from "./components/FloatingCard";
import DeliverableButton from "./components/DeliverableButton";
import PhotoCard from "./components/PhotoCard";

const floatingCards = [
  { emoji: "📰", label: "Press Releases", rotation: -4, animationClass: "animate-float-slow", animationDelay: "0s", colorClass: "bg-white" },
  { emoji: "🎙️", label: "Media Relations", rotation: 3, animationClass: "animate-float-medium", animationDelay: "0.8s", colorClass: "bg-[#FFF3CD]" },
  { emoji: "📊", label: "Research", rotation: -2, animationClass: "animate-drift", animationDelay: "1.2s", colorClass: "bg-[#E8F4FF]" },
  { emoji: "🤝", label: "Stakeholder Engagement", rotation: 5, animationClass: "animate-float-slow", animationDelay: "0.4s", colorClass: "bg-[#FFE8F0]" },
  { emoji: "🌎", label: "International Affairs", rotation: -6, animationClass: "animate-float-medium", animationDelay: "1.8s", colorClass: "bg-[#E8FFE8]" },
  { emoji: "📱", label: "Content Strategy", rotation: 4, animationClass: "animate-wiggle", animationDelay: "0.6s", colorClass: "bg-[#F0E8FF]" },
];

const deliverables = [
  { label: "Reports", color: "#FFD166", icon: "📋", rotation: -2 },
  { label: "Press Notes", color: "#FF9EAA", icon: "📝", rotation: 1 },
  { label: "Media Monitoring", color: "#A8E6CF", icon: "📡", rotation: -3 },
  { label: "Writing Samples", color: "#C5B8FF", icon: "✍️", rotation: 2 },
  { label: "Certifications", color: "#FFB347", icon: "🏆", rotation: -1 },
  { label: "Resumen / CV", color: "#87CEEB", icon: "📄", rotation: 3 },
];

export default function Home() {
  return (
    <div style={{ background: "#f5f0e8", minHeight: "100vh" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "12px 32px",
        background: "rgba(245, 240, 232, 0.85)",
        backdropFilter: "blur(8px)",
        borderBottom: "1.5px solid rgba(0,0,0,0.08)",
      }}>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "22px", letterSpacing: "0.12em", color: "#1a1a1a" }}>
          ISABELLA ALEMÁN
        </span>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          {["About", "Work", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#1a1a1a",
                textDecoration: "none",
                borderBottom: "2px solid transparent",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = "#FF6B6B")}
              onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = "transparent")}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              background: "#1a1a1a",
              color: "#f5f0e8",
              padding: "8px 16px",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#FF6B6B")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#1a1a1a")}
          >
            LinkedIn ↗
          </a>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section
        id="about"
        style={{
          minHeight: "100vh",
          padding: "100px 40px 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative lines */}
        <div style={{
          position: "absolute", top: "120px", left: "0", right: "0", height: "1px",
          background: "repeating-linear-gradient(90deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 1px, transparent 1px, transparent 32px)",
          pointerEvents: "none",
        }} />

        {/* MAIN TITLE BLOCK */}
        <div style={{
          position: "relative",
          marginTop: "40px",
          marginLeft: "5vw",
          zIndex: 10,
          maxWidth: "700px",
        }}>
          <p style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: "12px",
          }}>
            ★ COMMUNICATIONS PROFESSIONAL ★ BASED IN PANAMA
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(52px, 8vw, 110px)",
            fontWeight: "900",
            lineHeight: "0.9",
            letterSpacing: "-0.02em",
            color: "#1a1a1a",
            marginBottom: "0",
          }}>
            A creative{" "}
            <span className="highlight-yellow" style={{ fontStyle: "italic" }}>guide</span>
            <br />
            <span style={{ fontStyle: "italic", color: "#444" }}>through</span>{" "}
            <span style={{ color: "#FF6B6B" }}>stories.</span>
          </h1>
          <div style={{ marginTop: "24px", display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "16px",
              color: "#555",
              maxWidth: "360px",
              lineHeight: "1.6",
            }}>
              Strategic communications specialist with expertise in{" "}
              <span className="scribble">media relations</span>,{" "}
              <span className="highlight-mint">international affairs</span>, and{" "}
              stakeholder engagement.
            </span>
          </div>
          <div style={{ marginTop: "28px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="#work"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                background: "#1a1a1a",
                color: "#f5f0e8",
                padding: "12px 24px",
                textDecoration: "none",
                borderRadius: "3px",
                display: "inline-block",
              }}
            >
              View My Work ↓
            </a>
            <a
              href="#"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                border: "2px solid #1a1a1a",
                color: "#1a1a1a",
                padding: "12px 24px",
                textDecoration: "none",
                borderRadius: "3px",
                display: "inline-block",
                background: "transparent",
              }}
            >
              Download CV 📄
            </a>
          </div>
        </div>

        {/* Decorative stamp */}
        <div style={{
          position: "absolute",
          top: "140px",
          right: "12vw",
          color: "#FF6B6B",
          zIndex: 5,
        }}>
          <div className="stamp" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "13px", letterSpacing: "0.2em" }}>
            Portfolio<br />2025
          </div>
        </div>

        {/* Photo cards – desktop floating, mobile stacked */}
        <div className="floating-card" style={{ position: "absolute", top: "160px", right: "4vw", zIndex: 8 }}>
          <PhotoCard title="Culture.jpg" rotation={-5} tapeColor="yellow">
            <div style={{
              width: "180px", height: "140px",
              background: "linear-gradient(135deg, #FFD166 0%, #FF9EAA 100%)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              fontSize: "36px", gap: "8px",
            }}>
              🌎<span style={{ fontFamily: "'Bebas Neue'", fontSize: "18px", color: "white", letterSpacing: "0.1em" }}>INTERNATIONAL</span>
            </div>
          </PhotoCard>
        </div>

        <div className="floating-card animate-float-medium" style={{ position: "absolute", top: "340px", right: "20vw", zIndex: 7 }}>
          <PhotoCard title="Details.jpg" rotation={4} tapeColor="pink">
            <div style={{
              width: "160px", height: "120px",
              background: "linear-gradient(135deg, #A8E6CF 0%, #C5B8FF 100%)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              fontSize: "32px",
            }}>
              📊
            </div>
          </PhotoCard>
        </div>

        {/* Sticky note */}
        <div className="floating-card animate-float-slow" style={{
          position: "absolute", bottom: "120px", right: "6vw",
          zIndex: 9, animationDelay: "1s",
        }}>
          <div className="sticky-note" style={{ maxWidth: "180px", transform: "rotate(3deg)" }}>
            <p style={{ fontSize: "12px", marginTop: "8px", lineHeight: "1.6" }}>
              &ldquo;Communications is not what you say — it&rsquo;s what people <strong>understand</strong>.&rdquo;
            </p>
          </div>
        </div>

        {/* Decorative scribble circle */}
        <svg
          style={{ position: "absolute", top: "180px", left: "42vw", opacity: 0.15, pointerEvents: "none" }}
          width="200" height="200" viewBox="0 0 200 200"
        >
          <ellipse cx="100" cy="100" rx="90" ry="70" fill="none" stroke="#1a1a1a" strokeWidth="2"
            strokeDasharray="8 4" />
        </svg>

        {/* Bottom border tape strip */}
        <div style={{
          position: "absolute", bottom: "0", left: "0", right: "0", height: "6px",
          background: "repeating-linear-gradient(90deg, #FFE135 0px, #FFE135 40px, transparent 40px, transparent 60px, #FF9EAA 60px, #FF9EAA 100px, transparent 100px, transparent 120px)",
          opacity: 0.6,
        }} />
      </section>

      {/* ── FLOATING CARDS / EXPERTISE SECTION ── */}
      <section
        id="expertise"
        style={{
          minHeight: "80vh",
          padding: "80px 40px",
          position: "relative",
          background: "linear-gradient(180deg, #f5f0e8 0%, #ede8df 100%)",
          overflow: "hidden",
        }}
      >
        <div style={{ marginBottom: "60px" }}>
          <p style={{
            fontFamily: "'Space Mono', monospace", fontSize: "10px",
            letterSpacing: "0.25em", textTransform: "uppercase", color: "#888", marginBottom: "8px",
          }}>
            ── AREAS OF EXPERTISE
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: "700" }}>
            What I <span className="highlight-pink">do</span>
          </h2>
        </div>

        {/* Desktop: absolute-positioned collage layout */}
        <div style={{ position: "relative", minHeight: "420px" }} className="hidden md:block">
          {floatingCards.map((card, i) => {
            const positions = [
              { left: "5%", top: "20px" },
              { left: "22%", top: "180px" },
              { left: "42%", top: "40px" },
              { left: "60%", top: "200px" },
              { left: "18%", top: "330px" },
              { left: "52%", top: "310px" },
            ];
            return (
              <div key={card.label} style={{ position: "absolute", ...positions[i], zIndex: 5 }}>
                <FloatingCard {...card} />
              </div>
            );
          })}
        </div>

        {/* Mobile: flex grid */}
        <div className="flex md:hidden flex-wrap gap-4 justify-center">
          {floatingCards.map((card) => (
            <FloatingCard key={card.label} {...card} />
          ))}
        </div>

        {/* Decorative large letter */}
        <div style={{
          position: "absolute", bottom: "-20px", right: "5vw",
          fontFamily: "'Bebas Neue', sans-serif", fontSize: "200px",
          color: "rgba(0,0,0,0.04)", lineHeight: "1", pointerEvents: "none", userSelect: "none",
          letterSpacing: "-0.02em",
        }}>
          COMMS
        </div>
      </section>

      {/* ── WORK / DELIVERABLES SECTION ── */}
      <section
        id="work"
        style={{
          padding: "80px 40px 100px",
          position: "relative",
          background: "#1a1a1a",
          overflow: "hidden",
        }}
      >
        <div style={{ marginBottom: "60px" }}>
          <p style={{
            fontFamily: "'Space Mono', monospace", fontSize: "10px",
            letterSpacing: "0.25em", textTransform: "uppercase", color: "#888", marginBottom: "8px",
          }}>
            ── MY WORK
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 5vw, 64px)", fontWeight: "700", color: "#f5f0e8",
          }}>
            Open a{" "}
            <span className="highlight-yellow">folder</span>
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif", fontSize: "15px", color: "#aaa",
            marginTop: "12px", maxWidth: "420px", lineHeight: "1.7",
          }}>
            Each tab holds real deliverables from my professional practice. Click to explore.
          </p>
        </div>

        {/* Folder tabs grid */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          alignItems: "flex-end",
        }}>
          {deliverables.map((d) => (
            <DeliverableButton key={d.label} {...d} />
          ))}
        </div>

        {/* Decorative dotted rule */}
        <div style={{
          marginTop: "80px",
          borderTop: "1.5px dashed rgba(255,255,255,0.1)",
          paddingTop: "40px",
          display: "flex",
          gap: "32px",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: "#666", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Available for freelance &amp; consulting
            </p>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#f5f0e8", marginTop: "6px", fontStyle: "italic" }}>
              Let&rsquo;s craft your narrative together.
            </p>
          </div>
          <a
            href="#contact"
            style={{
              fontFamily: "'Space Mono', monospace", fontSize: "12px", fontWeight: "700",
              letterSpacing: "0.08em", textTransform: "uppercase",
              background: "#FFE135", color: "#1a1a1a",
              padding: "14px 28px", textDecoration: "none", borderRadius: "3px",
              whiteSpace: "nowrap",
              transition: "transform 0.2s",
            }}
          >
            Get in Touch ✉️
          </a>
        </div>

        {/* Background watermark */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%) rotate(-15deg)",
          fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(80px, 15vw, 200px)",
          color: "rgba(255,255,255,0.02)", pointerEvents: "none", userSelect: "none",
          whiteSpace: "nowrap", letterSpacing: "0.05em",
        }}>
          STRATEGIC
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section
        id="contact"
        style={{
          padding: "80px 40px",
          position: "relative",
          background: "#f5f0e8",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: "700px", position: "relative", zIndex: 2 }}>
          <p style={{
            fontFamily: "'Space Mono', monospace", fontSize: "10px",
            letterSpacing: "0.25em", textTransform: "uppercase", color: "#888", marginBottom: "8px",
          }}>
            ── CONNECT
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 6vw, 80px)", fontWeight: "900", lineHeight: "0.95",
            letterSpacing: "-0.02em", marginBottom: "32px",
          }}>
            Say{" "}
            <span className="highlight-yellow" style={{ fontStyle: "italic" }}>hello</span>
            <br />
            <span style={{ color: "#555", fontStyle: "italic" }}>& let&rsquo;s talk.</span>
          </h2>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'Space Mono', monospace", fontSize: "12px", fontWeight: "700",
                letterSpacing: "0.06em", textTransform: "uppercase",
                background: "#0077B5", color: "white",
                padding: "12px 24px", textDecoration: "none", borderRadius: "3px",
                display: "inline-flex", alignItems: "center", gap: "8px",
              }}
            >
              💼 LinkedIn
            </a>
            <a
              href="mailto:placeholder@email.com"
              style={{
                fontFamily: "'Space Mono', monospace", fontSize: "12px", fontWeight: "700",
                letterSpacing: "0.06em", textTransform: "uppercase",
                border: "2px solid #1a1a1a", color: "#1a1a1a",
                padding: "12px 24px", textDecoration: "none", borderRadius: "3px",
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "transparent",
              }}
            >
              ✉️ Email Me
            </a>
          </div>
        </div>

        {/* Floating card decoration in contact section */}
        <div className="floating-card animate-float-slow" style={{
          position: "absolute", top: "60px", right: "8vw", zIndex: 5, animationDelay: "0.5s",
        }}>
          <div className="sticky-note" style={{ transform: "rotate(-4deg)", maxWidth: "200px" }}>
            <p style={{ fontSize: "11px", marginTop: "8px", lineHeight: "1.7" }}>
              📍 Panama City, Panama<br />
              🌐 Available Worldwide<br />
              🗣️ EN / ES
            </p>
          </div>
        </div>

        {/* Decorative shapes */}
        <svg
          style={{ position: "absolute", bottom: "20px", right: "20vw", opacity: 0.08, pointerEvents: "none" }}
          width="240" height="240" viewBox="0 0 240 240"
        >
          <circle cx="120" cy="120" r="100" fill="none" stroke="#1a1a1a" strokeWidth="3" />
          <circle cx="120" cy="120" r="70" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeDasharray="6 3" />
        </svg>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "#1a1a1a",
        padding: "20px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "12px",
      }}>
        <span style={{
          fontFamily: "'Bebas Neue', sans-serif", fontSize: "18px",
          letterSpacing: "0.1em", color: "#f5f0e8",
        }}>
          ISABELLA ALEMÁN © 2025
        </span>
        <span style={{
          fontFamily: "'Space Mono', monospace", fontSize: "10px",
          color: "#555", letterSpacing: "0.08em",
        }}>
          STRATEGIC COMMUNICATIONS · PANAMA
        </span>
      </footer>
    </div>
  );
}
