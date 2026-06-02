import Link from "next/link";

export default function ReportsPage() {
  return (
    <div style={{ background: "#f5f0e8", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>

      {/* ── Back nav ── */}
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
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", color: "#1a1a1a", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          Reports
        </span>
      </nav>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 48px" }}>

        {/* ── Report header ── */}
        <div style={{ marginBottom: "48px", paddingBottom: "32px", borderBottom: "2px solid #1a1a1a" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px", flexWrap: "wrap", gap: "8px" }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.2em", color: "#888", textTransform: "uppercase" }}>
              BRAND INTELLIGENCE BRIEF
            </span>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.2em", color: "#888", textTransform: "uppercase" }}>
              STRATEGY IN SWEET SPOTS · 2026
            </span>
          </div>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "0.18em", color: "#666", textTransform: "uppercase", marginBottom: "12px" }}>
            STRATEGIC BRAND ANALYSIS
          </p>
          <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(48px, 7vw, 96px)", fontWeight: "400", lineHeight: "0.95", letterSpacing: "-0.02em", marginBottom: "20px" }}>
            Crumbl <em style={{ fontSize: "0.55em", fontStyle: "italic" }}>vs.</em> Insomnia
          </h1>
          <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "18px", fontStyle: "italic", color: "#555", maxWidth: "560px" }}>
            The battle for indulgent share-of-mind — one market, two inverted minds.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>

          {/* LEFT COLUMN */}
          <div>

            {/* § 01 Executive Summary */}
            <Section num="01" title="EXECUTIVE SUMMARY">
              <p style={bodyText}>
                <strong>Crumbl</strong> — a discovery brand disguised as a cookie shop. It wins on <em>curiosity</em>, driving search to find what&rsquo;s new.
              </p>
              <p style={{ ...bodyText, marginTop: "12px" }}>
                <strong>Insomnia</strong> — a delivery system disguised as a cookie shop. It wins on <em>craving</em>, converting what&rsquo;s needed right now.
              </p>
              <p style={{ ...bodyText, marginTop: "12px" }}>
                A single axis divides them: <em>Anticipation vs. Urgency.</em>
              </p>
            </Section>

            {/* § 02 Core Inversion */}
            <Section num="02" title="THE CORE INVERSION">
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                <thead>
                  <tr>
                    {["DIMENSION", "CRUMBL", "INSOMNIA"].map((h) => (
                      <th key={h} style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.12em", color: "#888", textAlign: "left", paddingBottom: "8px", borderBottom: "1px solid #ccc" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Core trigger", "• Anticipation", "• Urgency"],
                    ["Wins on", "Curiosity", "Craving"],
                    ["Operating model", "Discovery brand", "Delivery system"],
                    ["Search intent", '"What\'s new?"', '"Near me, now."'],
                  ].map(([dim, c, i]) => (
                    <tr key={dim}>
                      <td style={{ padding: "10px 0", color: "#555", fontSize: "12px", borderBottom: "1px solid #eee" }}>{dim}</td>
                      <td style={{ padding: "10px 8px", fontWeight: "600", fontSize: "13px", borderBottom: "1px solid #eee" }}>{c}</td>
                      <td style={{ padding: "10px 8px", fontWeight: "600", fontSize: "13px", borderBottom: "1px solid #eee" }}>{i}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Section>

            {/* § 03 Market Footprint */}
            <Section num="03" title="MARKET FOOTPRINT">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div style={{ border: "1px solid #1a1a1a", padding: "20px" }}>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.1em", marginBottom: "12px", color: "#888" }}>CRUMBL COOKIES</p>
                  <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "48px", fontWeight: "400", lineHeight: "1", marginBottom: "4px" }}>1,100<span style={{ fontSize: "28px" }}>+</span></p>
                  <p style={{ fontSize: "12px", color: "#555", marginBottom: "12px" }}>U.S. locations</p>
                  <p style={{ fontSize: "11px", color: "#777", lineHeight: "1.6" }}>Mass brand-awareness leader · dominant top-of-funnel social traffic · founded 2017.</p>
                </div>
                <div style={{ border: "1px solid #1a1a1a", padding: "20px" }}>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.1em", marginBottom: "12px", color: "#888" }}>INSOMNIA COOKIES</p>
                  <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "48px", fontWeight: "400", lineHeight: "1", marginBottom: "4px" }}>350<span style={{ fontSize: "28px" }}>+</span></p>
                  <p style={{ fontSize: "12px", color: "#555", marginBottom: "12px" }}>global bakeries</p>
                  <p style={{ fontSize: "11px", color: "#777", lineHeight: "1.6" }}>75+ openings underway in 2026 · $350M enterprise value · PE-backed (Verlinvest & Mistral).</p>
                </div>
              </div>
            </Section>

            {/* § 04 Key Findings */}
            <Section num="04" title="KEY FINDINGS">
              {[
                { label: "Virality.", text: 'Crumbl owns top-of-funnel attention via structured weekly "drops."' },
                { label: "Occasion.", text: "Insomnia owns the late-night moment — open when rivals are closed." },
                { label: "Scale.", text: 'Crumbl grows fast through franchising and "near me" SEO.' },
                { label: "Delivery.", text: "Insomnia runs a native delivery tech layer, not just logistics." },
              ].map(({ label, text }) => (
                <div key={label} style={{ display: "flex", gap: "10px", marginBottom: "14px", alignItems: "flex-start" }}>
                  <span style={{ color: "#888", fontSize: "13px", flexShrink: 0 }}>✓</span>
                  <p style={bodyText}><strong>{label}</strong> {text}</p>
                </div>
              ))}
            </Section>
          </div>

          {/* RIGHT COLUMN */}
          <div>

            {/* § 05 Competitive Snapshot */}
            <Section num="05" title="COMPETITIVE SNAPSHOT">
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
                <thead>
                  <tr>
                    {["CAPABILITY", "CRUMBL", "INSOMNIA", "ADVANTAGE"].map((h) => (
                      <th key={h} style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.1em", color: "#888", textAlign: "left", paddingBottom: "8px", borderBottom: "1px solid #ccc" }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Top-of-Funnel Virality",  "●●●", "●○○", "CRUMBL"],
                    ["Occasion Isolation",      "●○○", "●●●", "INSOMNIA"],
                    ["Footprint Scalability",   "●●●", "●○○", "CRUMBL"],
                    ["Menu Adaptability",       "●●●", "●●●", "EVEN"],
                    ["Core Delivery Loyalty",   "●○○", "●●●", "INSOMNIA"],
                  ].map(([cap, c, i, adv]) => (
                    <tr key={cap}>
                      <td style={{ padding: "9px 0", borderBottom: "1px solid #eee", fontSize: "12px" }}>{cap}</td>
                      <td style={{ padding: "9px 8px", borderBottom: "1px solid #eee", letterSpacing: "2px", fontSize: "10px" }}>{c}</td>
                      <td style={{ padding: "9px 8px", borderBottom: "1px solid #eee", letterSpacing: "2px", fontSize: "10px" }}>{i}</td>
                      <td style={{ padding: "9px 0", borderBottom: "1px solid #eee", fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.08em", fontWeight: "700", color: adv === "CRUMBL" ? "#c0392b" : adv === "INSOMNIA" ? "#1a1a1a" : "#888" }}>{adv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ display: "flex", gap: "16px", marginTop: "10px" }}>
                <span style={{ fontSize: "10px", color: "#888", display: "flex", alignItems: "center", gap: "4px" }}><span style={{ width: 8, height: 8, background: "#1a1a1a", display: "inline-block" }} /> High capability</span>
                <span style={{ fontSize: "10px", color: "#888", display: "flex", alignItems: "center", gap: "4px" }}><span style={{ width: 8, height: 8, background: "#ddd", display: "inline-block" }} /> Latent / secondary</span>
              </div>
            </Section>

            {/* § 06 Brand Positioning */}
            <Section num="06" title="BRAND POSITIONING">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {[
                  { name: "The Digital Event", sub: "Crumbl — the weekly drop people wait to share.", stance: "A cultural release calendar: 6 fixed classics balanced by 4 rotating weekly flavors, stabilizing supply while feeding “drop culture.”", icons: ["Weekly rotation", "Shareable", "Drop ritual"] },
                  { name: "Infrastructure of Comfort", sub: "Insomnia — warm cookies, delivered when needed.", stance: "A functional use-case born in a UPenn dorm. It need not entertain weekly — only be awake, warm, and visible when the world sleeps.", icons: ["Late-night", "Campus culture", "Comfort"] },
                ].map((b) => (
                  <div key={b.name} style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "4px" }}>
                    <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "16px", fontStyle: "italic", marginBottom: "4px" }}>{b.name}</p>
                    <p style={{ fontSize: "11px", color: "#888", marginBottom: "12px" }}>{b.sub}</p>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.1em", color: "#aaa", marginBottom: "6px" }}>STANCE</p>
                    <p style={{ fontSize: "11px", color: "#555", lineHeight: "1.6", marginBottom: "12px" }}>{b.stance}</p>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {b.icons.map((ic) => (
                        <span key={ic} style={{ fontSize: "10px", color: "#888", border: "1px solid #eee", padding: "3px 7px", borderRadius: "2px" }}>{ic}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* § 07 Consumer Journey */}
            <Section num="07" title="CONSUMER JOURNEY">
              {[
                { brand: "CRUMBL DISCOVERY LOOP", steps: ["Weekly reveal", "Social hype", "FOMO / scarcity", "Destination buy"] },
                { brand: "INSOMNIA CONVERSION LOOP", steps: ["Late-night need", "App order", "Frictionless delivery", "Impulse comfort"] },
              ].map(({ brand, steps }) => (
                <div key={brand} style={{ marginBottom: "16px" }}>
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.12em", color: "#888", marginBottom: "8px" }}>{brand}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                    {steps.map((s, i) => (
                      <span key={s} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ fontSize: "12px", background: "#f5f0e8", padding: "4px 10px", borderRadius: "2px", border: "1px solid #ddd" }}>{s}</span>
                        {i < steps.length - 1 && <span style={{ color: "#ccc", fontSize: "12px" }}>→</span>}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </Section>

            {/* § 08 Strategic Gaps + § 09 Recommended Moves */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <Section num="08" title="STRATEGIC GAPS">
                {[
                  { co: "CRUMBL · NOVELTY FATIGUE", text: "Trimming weekly rotations optimizes labor across 1,100+ stores but raises the bar for each new drop." },
                  { co: "CRUMBL · LEADERSHIP SHIFT", text: "Founder transition underway as day-to-day roles change hands." },
                  { co: "INSOMNIA · THIN TOP-OF-FUNNEL", text: "Fewer weekly reasons to search limits mindshare beyond the late-night core." },
                ].map(({ co, text }) => (
                  <div key={co} style={{ background: "#f0ece4", padding: "12px", marginBottom: "10px", borderRadius: "2px" }}>
                    <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.1em", fontWeight: "700", color: "#c0392b", marginBottom: "6px" }}>{co}</p>
                    <p style={{ fontSize: "11px", color: "#555", lineHeight: "1.5" }}>{text}</p>
                  </div>
                ))}
              </Section>

              <Section num="09" title="RECOMMENDED MOVES">
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.1em", fontWeight: "700", marginBottom: "8px" }}>FOR CRUMBL</p>
                {['Engineer "evergreen" hits to offset novelty fatigue.', "Build a delivery & loyalty layer to defend late-night."].map((t) => (
                  <div key={t} style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "11px", color: "#888" }}>✓</span>
                    <p style={{ fontSize: "11px", color: "#555", lineHeight: "1.5" }}>{t}</p>
                  </div>
                ))}
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.1em", fontWeight: "700", margin: "12px 0 8px" }}>FOR INSOMNIA</p>
                {['Borrow "drop" mechanics for top-of-funnel buzz.', 'Deepen "near me" SEO around craving-trigger keywords.'].map((t) => (
                  <div key={t} style={{ display: "flex", gap: "8px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "11px", color: "#888" }}>✓</span>
                    <p style={{ fontSize: "11px", color: "#555", lineHeight: "1.5" }}>{t}</p>
                  </div>
                ))}
                <p style={{ fontSize: "10px", color: "#bbb", marginTop: "16px", fontStyle: "italic" }}>Recommended moves are analytical synthesis, not source claims.</p>
              </Section>
            </div>
          </div>
        </div>

        {/* ── Closing statement ── */}
        <div style={{ borderTop: "2px solid #1a1a1a", marginTop: "48px", paddingTop: "32px", textAlign: "center" }}>
          <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(28px, 4vw, 48px)", fontStyle: "italic", lineHeight: "1.2" }}>
            &ldquo;Crumbl <em>wins curiosity.</em><br />Insomnia <em>wins craving.</em>&rdquo;
          </p>
        </div>

        {/* ── Footer ── */}
        <div style={{ marginTop: "40px", paddingTop: "20px", borderTop: "1px solid #ddd", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <p style={{ fontSize: "10px", color: "#aaa", lineHeight: "1.6", maxWidth: "600px" }}>
            SOURCES: Company sites & media kits; PR Newswire & QSR Magazine (Nov 2025); NBC DFW, CT Insider & Delish (Jan 2026); QSR Magazine & Snack Bakery (2026); Forbes (2025); Business Wire (2024). Data state: 2026.
          </p>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: "#bbb" }}>CRUMBL VS. INSOMNIA &nbsp;&nbsp;&nbsp; 01</p>
        </div>
      </main>
    </div>
  );
}

/* ── Helpers ── */
const bodyText: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "13px",
  color: "#333",
  lineHeight: "1.7",
};

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "36px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px", borderBottom: "1px solid #ddd", paddingBottom: "8px" }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", color: "#aaa" }}>{num}</span>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.15em", color: "#666", textTransform: "uppercase" }}>{title}</span>
      </div>
      {children}
    </div>
  );
}
