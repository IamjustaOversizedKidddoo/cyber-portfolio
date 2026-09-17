import React, { useEffect, useRef } from "react";
import { gsap } from "../../lib/gsap";
import { DOSSIER_DATA } from "../../data/dossierData";
import { Briefcase, ShieldAlert, CheckCircle2, Crosshair, FileText, Wrench, ShieldCheck } from "lucide-react";
import "./experience.css";

export const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".exp-anim-hdr", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.from(".exp-anim-card", {
        scrollTrigger: {
          trigger: ".exp-container",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 25,
        duration: 0.5,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const experiences = DOSSIER_DATA.experiences;

  return (
    <section ref={sectionRef} id="experience" style={{ scrollMarginTop: "100px", position: "relative", overflow: "hidden" }}>
      {/* Chapter Watermark */}
      <div className="chapter-watermark" aria-hidden="true">04</div>

      {/* Chapter Tag Header */}
      <div
        className="exp-anim-hdr"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--space-3)",
          fontFamily: "var(--font-family-mono)",
          fontSize: "var(--font-size-xs)",
          color: "var(--color-threat)",
          fontWeight: "bold",
          letterSpacing: "0.08em",
          marginBottom: "var(--space-2)",
        }}
      >
        <Briefcase size={14} />
        <span>CH. 04 // OPERATIONAL ENGAGEMENTS</span>
        <span style={{ color: "var(--color-surface-border)" }}>|</span>
        <span style={{ color: "var(--color-text-muted)" }}>FIELD PENETRATION TESTING EXPERIENCE</span>
      </div>

      {/* Main Chapter Title & Subtitle */}
      <h2
        className="exp-anim-hdr"
        style={{
          fontFamily: "var(--font-family-display)",
          fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
          fontWeight: 900,
          color: "var(--color-text-primary)",
          letterSpacing: "-0.01em",
          marginBottom: "var(--space-2)",
        }}
      >
        INDUSTRIAL VAPT ENGAGEMENT.
      </h2>

      <p
        className="exp-anim-hdr"
        style={{
          fontFamily: "var(--font-family-mono)",
          fontSize: "var(--font-size-xs)",
          color: "var(--color-text-muted)",
          lineHeight: "1.6",
          maxWidth: "780px",
          marginBottom: "var(--space-6)",
        }}
      >
        "Hands-on professional security testing conducted against live targets. Uncovering critical authorization vulnerabilities, verifying exploit chains with custom PoCs, and authoring client remediation blueprints."
      </p>

      {/* Experience Cards */}
      <div className="exp-container">
        {experiences.map((exp) => (
          <article key={exp.id} className="exp-card exp-anim-card">
            {/* Top Bar Header */}
            <div className="exp-header">
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", flexWrap: "wrap", marginBottom: "var(--space-2)" }}>
                  <span className="exp-org-badge">
                    <ShieldAlert size={14} />
                    <span>{exp.organization}</span>
                  </span>
                  <span className="exp-period-badge">
                    <span>{exp.period}</span>
                    <span style={{ opacity: 0.6 }}>//</span>
                    <span>{exp.duration}</span>
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-family-mono)",
                      fontSize: "11px",
                      color: "var(--color-text-dim)",
                      padding: "2px 6px",
                      border: "1px solid var(--color-surface-border)",
                    }}
                  >
                    {exp.location}
                  </span>
                </div>

                <h3 className="exp-role-title">{exp.role}</h3>
                <div
                  style={{
                    fontFamily: "var(--font-family-mono)",
                    fontSize: "var(--font-size-xs)",
                    color: "var(--color-threat)",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  {exp.classification}
                </div>
              </div>

              {/* Verification Watermark */}
              {exp.verificationStamp && (
                <div className="exp-stamp-watermark">
                  <ShieldCheck size={14} />
                  <span>{exp.verificationStamp}</span>
                </div>
              )}
            </div>

            {/* Engagement Summary */}
            <p className="exp-summary-text">{exp.summary}</p>

            {/* Split Details Grid: Deliverables + Vectors/Tools */}
            <div className="exp-grid-details">
              {/* Left Column: Key Responsibilities & Deliverables */}
              <div className="exp-box-panel">
                <div className="exp-box-title">
                  <FileText size={14} />
                  <span>CORE RESPONSIBILITIES & DELIVERABLES</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="exp-responsibility-item">
                      <span className="exp-resp-bullet">&gt;</span>
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Methodologies */}
                <div style={{ marginTop: "var(--space-2)" }}>
                  <div style={{ fontFamily: "var(--font-family-mono)", fontSize: "10px", color: "var(--color-text-muted)", fontWeight: 700, marginBottom: "6px" }}>
                    STANDARDS & METHODOLOGIES APPLIED:
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {exp.methodologies.map((method, idx) => (
                      <span key={idx} className="exp-method-pill">
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Key Vulnerabilities & Tools Deployed */}
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                {/* Vulnerability Classes Audited */}
                <div className="exp-box-panel">
                  <div className="exp-box-title">
                    <Crosshair size={14} />
                    <span>AUDITED VULNERABILITY CLASSES</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {exp.keyVulnerabilities.map((vuln, idx) => (
                      <div key={idx} className="exp-vuln-pill">
                        <CheckCircle2 size={12} style={{ color: "var(--color-threat)", flexShrink: 0 }} />
                        <span>{vuln}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tactical Tools Deployed */}
                <div className="exp-box-panel">
                  <div className="exp-box-title">
                    <Wrench size={14} />
                    <span>TACTICAL TOOLSET DEPLOYED</span>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {exp.tools.map((tool, idx) => (
                      <span key={idx} className="exp-tool-tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
