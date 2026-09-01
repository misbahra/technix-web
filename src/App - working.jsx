import React, { useState, useEffect } from "react";
import logo from "./assets/technix-logo.jpg";
import {
  Code2,
  Database,
  BrainCircuit,
  FileCheck,
  Menu,
  X,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Terminal,
  Activity,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  GitBranch,
  SeparatorHorizontal,
} from "lucide-react";

const FONT_LINK_ID = "technix-fonts";

function useFonts() {
  useEffect(() => {
    if (document.getElementById(FONT_LINK_ID)) return;
    const link = document.createElement("link");
    link.id = FONT_LINK_ID;
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap";
    document.head.appendChild(link);
  }, []);
}

const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    tech: "React • Angular • FastAPI • Django",
    copy: "Architecting high-performance web applications, API integrations, and scalable frontends built for enterprise throughput.",
  },
  {
    icon: BrainCircuit,
    title: "AI Models & Integration",
    tech: "Python • PyTorch • LLMs • RAG",
    copy: "Custom AI model fine-tuning, retrieval-augmented generation (RAG), and intelligent automation embedded into your core software.",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    tech: "Python • Pandas • PostgreSQL • ETL",
    copy: "Data transformation pipelines, complex schema architecture, analytical modeling, and real-time business intelligence processing.",
  },
  {
    icon: FileCheck,
    title: "EU AI & Data Compliance",
    tech: "GDPR • EU AI Act Risk Tiering",
    copy: "Building software that strictly adheres to EU data privacy standards, AI risk classification frameworks, and audit logging.",
  },
];

const process = [
  {
    n: "01",
    title: "Analysis & Scoping",
    copy: "Deep-dive business requirements, data architecture mapping, and EU regulatory risk classification before writing code.",
  },
  {
    n: "02",
    title: "System Architecture",
    copy: "Designing DB schemas, REST/gRPC API specifications (FastAPI/Django), and modern frontend component structures (React/Angular).",
  },
  {
    n: "03",
    title: "Agile Development",
    copy: "Sprint-based iterative builds with continuous integration, automated test suites, and transparent sprint demos.",
  },
  {
    n: "04",
    title: "Deployment & AI Ops",
    copy: "Production rollout with pipeline telemetry, automated model monitoring, and continuous data optimization.",
  },
];

const buildPipeline = [
  { label: "React / Angular UI Layer", status: "Compiled", build: "Latest", tone: "ok" },
  { label: "FastAPI / Django Backend", status: "Healthy", build: "REST/gRPC", tone: "ok" },
  { label: "Python Data Pipelines", status: "Streaming", build: "ETL Active", tone: "ok" },
  { label: "EU AI Act Compliance Guard", status: "Enforced", build: "Risk-Tier 1", tone: "ok" },
];

const stats = [
  { value: "100%", label: "EU GDPR Compliant" },
  { value: "FastAPI / Django", label: "Core Backend Stack" },
  { value: "React / Angular", label: "Frontend Frameworks" },
  { value: "Python / AI", label: "Data Transformation" },
];

const euRegs = [
  {
    title: "GDPR by Design",
    desc: "Strict data minimization, automated user deletion endpoints, and end-to-end encryption built directly into DB schemas.",
  },
  {
    title: "EU AI Act Governance",
    desc: "Risk assessments, model transparency tagging, and automated auditing logs for high-risk AI models.",
  },
  {
    title: "ISO 27001 Readiness",
    desc: "Codebase architecture prepared for enterprise security audits, vulnerability scans, and strict access controls.",
  },
];

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "SDLC Process" },
  { href: "#why", label: "Why Us" },
];

export default function TechnixSite() {
  useFonts();
  const [navOpen, setNavOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
    }, 2500);
  };

  return (
    <div className="tx-root">
      <style>{`
        :root {
          --bg-main: #f8fafc;
          --bg-card: #ffffff;
          --bg-subtle: #f1f5f9;
          --border: #e2e8f0;
          --border-dark: #cbd5e1;
          --brand: #2563eb;
          --brand-hover: #1d4ed8;
          --brand-soft: #eff6ff;
          --text-main: #0f172a;
          --text-muted: #475569;
          --text-dim: #64748b;
          --success: #10b981;
          --success-soft: #ecfdf5;
        }

        .tx-root {
          background: var(--bg-main);
          color: var(--text-main);
          font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
          line-height: 1.5;
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .tx-root * { box-sizing: border-box; }

        .tx-display {
          font-family: 'Space Grotesk', sans-serif;
          letter-spacing: -0.02em;
        }

        .tx-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(226, 232, 240, 0.6) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(226, 232, 240, 0.6) 1px, transparent 1px);
          background-size: 40px 40px;
          -webkit-mask-image: radial-gradient(ellipse 90% 60% at 50% 0%, black 40%, transparent 100%);
          mask-image: radial-gradient(ellipse 90% 60% at 50% 0%, black 40%, transparent 100%);
          opacity: 0.8;
          pointer-events: none;
        }

        .tx-shell {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 28px;
          position: relative;
        }

        /* Header */
        .tx-header {
          position: sticky;
          top: 0;
          z-index: 40;
          background: rgba(248, 250, 252, 0.88);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
        }
        .tx-header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 28px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .tx-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 19px;
          font-weight: 700;
          color: var(--text-main);
          text-decoration: none;
        }
        .tx-logo-mark {
          width: 26px;
          height: 26px;
          border-radius: 6px;
          background: var(--brand);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 13px;
        }
        .tx-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .tx-nav a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: color 0.15s ease;
        }
        .tx-nav a:hover { color: var(--brand); }
        .tx-nav-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-main);
          cursor: pointer;
        }
        .tx-mobile-nav {
          display: none;
          flex-direction: column;
          border-top: 1px solid var(--border);
          background: var(--bg-card);
        }
        .tx-mobile-nav.open { display: flex; }
        .tx-mobile-nav a {
          color: var(--text-muted);
          text-decoration: none;
          padding: 16px 28px;
          border-bottom: 1px solid var(--border);
          font-size: 14px;
          font-weight: 600;
        }

        /* Buttons */
        .tx-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 22px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          border: 1px solid transparent;
          transition: all 0.15s ease;
          border-radius: 8px;
        }
        .tx-btn-primary {
          background: var(--brand);
          color: #ffffff;
          box-shadow: 0 2px 4px rgba(37, 99, 235, 0.15);
        }
        .tx-btn-primary:hover { 
          background: var(--brand-hover); 
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
        }
        .tx-btn-ghost {
          background: var(--bg-card);
          border-color: var(--border-dark);
          color: var(--text-main);
        }
        .tx-btn-ghost:hover { 
          border-color: var(--brand); 
          color: var(--brand); 
          background: var(--brand-soft);
        }

        /* Hero */
        .tx-hero { padding: 80px 0 64px; }
        .tx-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: center;
        }
        .tx-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: var(--brand-soft);
          border: 1px solid rgba(37, 99, 235, 0.2);
          color: var(--brand);
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .tx-h1 {
          font-size: 50px;
          font-weight: 700;
          line-height: 1.1;
          margin: 0 0 20px;
          color: var(--text-main);
        }
        .tx-lead {
          font-size: 17px;
          color: var(--text-muted);
          max-width: 48ch;
          margin: 0 0 32px;
          font-weight: 400;
          line-height: 1.6;
        }
        .tx-cta-row {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* SDLC Build Card */
        .tx-panel {
          background: var(--bg-card);
          border: 1px solid var(--border-dark);
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
        }
        .tx-panel-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border);
        }
        .tx-panel-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-main);
          font-weight: 700;
        }
        .tx-panel-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--success);
          font-weight: 600;
          background: var(--success-soft);
          padding: 3px 10px;
          border-radius: 12px;
        }
        .tx-status-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid var(--border);
          font-size: 13.5px;
        }
        .tx-status-row:last-child { border-bottom: none; }
        .tx-status-row-label {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-muted);
          font-weight: 500;
        }
        .tx-status-row-value {
          color: var(--text-main);
          font-weight: 700;
          font-size: 12.5px;
          background: var(--bg-subtle);
          padding: 2px 8px;
          border-radius: 4px;
        }

        /* Stats Bar */
        .tx-stats {
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 36px 0;
          background: var(--bg-card);
        }
        .tx-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        .tx-stat-value {
          font-size: 26px;
          font-weight: 700;
          color: var(--brand);
        }
        .tx-stat-label {
          font-size: 13px;
          color: var(--text-dim);
          margin-top: 4px;
          font-weight: 500;
        }

        /* Shared Section Styles */
        .tx-section { padding: 96px 0; }
        .tx-section-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }
        .tx-h2 {
          font-size: 34px;
          font-weight: 700;
          margin: 0;
          color: var(--text-main);
        }
        .tx-section-sub {
          color: var(--text-muted);
          font-size: 15.5px;
          max-width: 44ch;
          margin: 0;
        }

        /* Services Grid */
        .tx-services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .tx-service {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 32px;
          transition: all 0.2s ease;
        }
        .tx-service:hover { 
          border-color: var(--brand);
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.08);
          transform: translateY(-2px);
        }
        .tx-service-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: var(--brand-soft);
          color: var(--brand);
          margin-bottom: 20px;
        }
        .tx-service h3 {
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 6px;
          color: var(--text-main);
        }
        .tx-service-tech {
          font-size: 12px;
          font-weight: 700;
          color: var(--brand);
          margin-bottom: 12px;
          font-family: 'Space Grotesk', sans-serif;
        }
        .tx-service p {
          color: var(--text-muted);
          font-size: 14.5px;
          margin: 0;
          line-height: 1.6;
        }

        /* EU Compliance Feature Box */
        .tx-eu-card {
          background: #0f172a;
          color: #ffffff;
          border-radius: 16px;
          padding: 48px;
          margin-top: 16px;
        }
        .tx-eu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 36px;
        }
        .tx-eu-item {
          border-top: 1px solid #334155;
          padding-top: 20px;
        }
        .tx-eu-item h4 {
          font-size: 17px;
          font-weight: 700;
          margin: 0 0 8px;
          color: #ffffff;
        }
        .tx-eu-item p {
          font-size: 14px;
          color: #94a3b8;
          margin: 0;
          line-height: 1.5;
        }

        /* Process Steps */
        .tx-process {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        .tx-step {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 24px;
        }
        .tx-step-n {
          font-size: 12px;
          color: var(--brand);
          font-weight: 800;
          margin-bottom: 12px;
          display: inline-block;
          padding: 3px 10px;
          background: var(--brand-soft);
          border-radius: 4px;
        }
        .tx-step h3 {
          font-size: 17px;
          font-weight: 700;
          margin: 0 0 8px;
        }
        .tx-step p {
          color: var(--text-muted);
          font-size: 13.5px;
          margin: 0;
          line-height: 1.5;
        }

        /* Why Us Section */
        .tx-why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .tx-why-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .tx-why-list li {
          padding: 18px 0;
          border-top: 1px solid var(--border);
          color: var(--text-muted);
          font-size: 14.5px;
        }
        .tx-why-list li:last-child { border-bottom: 1px solid var(--border); }
        .tx-why-list strong {
          color: var(--text-main);
          display: block;
          margin-bottom: 4px;
          font-weight: 700;
          font-size: 16px;
        }

        .tx-quote-panel {
          background: var(--bg-card);
          border: 1px solid var(--border-dark);
          border-left: 4px solid var(--brand);
          border-radius: 8px;
          padding: 32px;
        }
        .tx-quote {
          font-size: 18px;
          font-weight: 500;
          line-height: 1.5;
          margin: 0 0 16px;
          color: var(--text-main);
        }
        .tx-quote-attr {
          color: var(--brand);
          font-size: 13px;
          font-weight: 700;
        }

        /* CTA Banner */
        .tx-cta-section {
          background: var(--brand-soft);
          border-top: 1px solid rgba(37, 99, 235, 0.15);
          border-bottom: 1px solid rgba(37, 99, 235, 0.15);
          padding: 80px 0;
          text-align: center;
        }
        .tx-cta-section .tx-h2 { margin-bottom: 12px; }
        .tx-cta-section .tx-section-sub {
          margin: 0 auto 32px;
          text-align: center;
        }

        /* Contact Modal */
        .tx-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .tx-modal {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 12px;
          width: 100%;
          max-width: 520px;
          padding: 32px;
          position: relative;
          box-shadow: 0 20px 40px rgba(15, 23, 42, 0.15);
        }
        .tx-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: var(--text-dim);
          cursor: pointer;
        }
        .tx-modal-close:hover { color: var(--text-main); }
        .tx-form-group { margin-bottom: 16px; }
        .tx-label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 6px;
        }
        .tx-input, .tx-textarea {
          width: 100%;
          background: var(--bg-main);
          border: 1px solid var(--border-dark);
          border-radius: 6px;
          padding: 10px 14px;
          color: var(--text-main);
          font-family: inherit;
          font-size: 14px;
          outline: none;
        }
        .tx-input:focus, .tx-textarea:focus {
          border-color: var(--brand);
          background: #ffffff;
        }

        /* Footer */
        .tx-footer { padding: 64px 0 40px; }
        .tx-footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid var(--border);
        }
        .tx-footer h4 {
          font-size: 13px;
          color: var(--text-main);
          margin: 0 0 20px;
          font-weight: 700;
        }
        .tx-footer-links { list-style: none; padding: 0; margin: 0; }
        .tx-footer-links li { margin-bottom: 12px; }
        .tx-footer-links a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.15s ease;
        }
        .tx-footer-links a:hover { color: var(--brand); }
        .tx-footer-contact { display: flex; align-items: center; gap: 10px; color: var(--text-muted); font-size: 14px; margin-bottom: 12px; }
        .tx-footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 28px;
          color: var(--text-dim);
          font-size: 13px;
          flex-wrap: wrap;
          gap: 12px;
        }

        @media (max-width: 900px) {
          .tx-nav { display: none; }
          .tx-nav-toggle { display: block; }
          .tx-hero-grid { grid-template-columns: 1fr; }
          .tx-services-grid { grid-template-columns: 1fr; }
          .tx-eu-grid { grid-template-columns: 1fr; gap: 24px; }
          .tx-process { grid-template-columns: 1fr 1fr; }
          .tx-why-grid { grid-template-columns: 1fr; }
          .tx-footer-grid { grid-template-columns: 1fr; gap: 32px; }
          .tx-stats-grid { grid-template-columns: 1fr 1fr; }
          .tx-h1 { font-size: 38px; }
        }
      `}</style>

      <div className="tx-grid-bg" />

      {/* Header */}
      <header className="tx-header">
        <div className="tx-header-inner">
          <a href="#" className="tx-logo tx-display">
            
            <img 
                src={logo} 
                alt="TECHNIX Logo" 
                width="50" height="50" 
              />
            TECHNIX
          </a>
          <nav className="tx-nav">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
            <button onClick={() => setModalOpen(true)} className="tx-btn tx-btn-primary">
              Start Project
            </button>
          </nav>
          <button
            className="tx-nav-toggle"
            aria-label={navOpen ? "Close menu" : "Open menu"}
            onClick={() => setNavOpen((o) => !o)}
          >
            {navOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <div className={`tx-mobile-nav ${navOpen ? "open" : ""}`}>
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setNavOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => { setNavOpen(false); setModalOpen(true); }}>
            Start Project
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="tx-shell tx-hero" id="fullstack">
        <div className="tx-hero-grid">
          <div>
            <div className="tx-badge">
              <Sparkles size={14} /> Full-Stack Software & AI Engineering
            </div>
            <h1 className="tx-h1 tx-display">
              Enterprise React, Python & AI systems built to EU standards.
            </h1>
            <p className="tx-lead">
              We design, build, and deploy end-to-end software applications, FastAPI/Django backends, custom AI models, and data pipelines engineered for regulatory compliance.
            </p>
            <div className="tx-cta-row">
              <button onClick={() => setModalOpen(true)} className="tx-btn tx-btn-primary">
                Discuss Tech Scope <ArrowRight size={16} />
              </button>
              <a href="#services" className="tx-btn tx-btn-ghost">
                Explore Capabilities
              </a>
            </div>
          </div>

          <div className="tx-panel">
            <div className="tx-panel-head">
              <span className="tx-panel-title">
                <GitBranch size={16} color="var(--brand)" /> SDLC STACK ARCHITECTURE
              </span>
              <span className="tx-panel-status">
                <CheckCircle2 size={13} /> Active Pipeline
              </span>
            </div>
            {buildPipeline.map((row) => (
              <div className="tx-status-row" key={row.label}>
                <span className="tx-status-row-label">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> {row.label}
                </span>
                <span className="tx-status-row-value">{row.build}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="tx-stats">
        <div className="tx-shell">
          <div className="tx-stats-grid">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="tx-stat-value tx-display">{s.value}</div>
                <div className="tx-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      
      <section className="tx-shell tx-section" id="services">
        <hr className="separator" />
        <div className="tx-section-head">
          <div>
            
            <h2 className="tx-h2 tx-display" style={{ marginTop: 4 }}>Full-stack software engineering</h2>
          </div>
          <p className="tx-section-sub">
            From architecture analysis to continuous deployment — engineered using robust modern frameworks.
          </p>
        </div>
        <div className="tx-services-grid">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div className="tx-service" key={s.title}>
                <div className="tx-service-icon">
                  <Icon size={22} strokeWidth={2} />
                </div>
                <h3>{s.title}</h3>
                <div className="tx-service-tech">{s.tech}</div>
                <p>{s.copy}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* EU Compliance Banner */}
      {/* <section className="tx-shell" id="compliance" style={{ paddingBottom: 96 }}>
        <div className="tx-eu-card">
          <div className="flex items-center gap-3 mb-2" style={{ color: "var(--brand)" }}>
            <ShieldCheck size={24} />
            <span className="tx-display" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.05em" }}>REGULATORY FRAMEWORK</span>
          </div>
          <h3 className="tx-display" style={{ fontSize: 32, fontWeight: 700, margin: 0 }}>Built for European Market Regulations</h3>
          <p style={{ color: "#94a3b8", maxWidth: "60ch", marginTop: 8, fontSize: 15 }}>
            Software deployed in the EU requires more than clean code. We bake regulatory controls directly into data schemas and model architecture.
          </p>
          <div className="tx-eu-grid">
            {euRegs.map((reg) => (
              <div className="tx-eu-item" key={reg.title}>
                <h4>{reg.title}</h4>
                <p>{reg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Process */}
      <hr className="separator" />
      <section className="tx-shell tx-section" id="process" style={{ paddingTop: 0 }}>
        <div className="tx-section-head">
          <div>
            
            <h2 className="tx-h2 tx-display" style={{ marginTop: 4 }}>Software development</h2>
          </div>
          <p className="tx-section-sub">
            Structured 4-phase SDLC ensuring technical transparency and predictable release cycles.
          </p>
        </div>
        <div className="tx-process">
          {process.map((p) => (
            <div className="tx-step" key={p.n}>
              <div className="tx-step-n tx-display">{p.n}</div>
              <h3>{p.title}</h3>
              <p>{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Us */}
      <section className="tx-shell tx-section" id="why" style={{ paddingTop: 0 }}>
        <hr className="separator" />
        <div className="tx-why-grid">
          <div>
            <h2 className="tx-h2 tx-display" style={{ marginTop: 4, marginBottom: 24 }}>
              Why engineering teams partner with us
            </h2>
            <ul className="tx-why-list">
              <li>
                <strong>Senior Full-Stack & AI Engineers</strong>
                No offshore call centers or junior code. You work directly with engineers proficient in Python, FastAPI, Django, and React/Angular.
              </li>
              <li>
                <strong>Robust Data & Model Architecture</strong>
                We clean, transform, and index your data efficiently using custom Python ETL pipelines built for real-time analytics.
              </li>
              <li>
                <strong>Audit-Ready Codebases</strong>
                Every database migration, API endpoint, and AI integration is documented and aligned with EU privacy compliance standards.
              </li>
            </ul>
          </div>
          <div className="tx-quote-panel">
            <p className="tx-quote">
              "From complex database design and Python data transformation to custom AI model integration, we deliver end-to-end SDLC solutions with uncompromising code quality, system performance, and EU data privacy compliance."
            </p>
            {/* <p className="tx-quote-attr">
              — CTO, European HealthTech Enterprise
            </p> */}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tx-cta-section" id="contact">
        <div className="tx-shell">
          <h2 className="tx-h2 tx-display">Have a software or AI project in mind?</h2>
          <p className="tx-section-sub">
            Share your technical requirements and our engineering team will outline a clear architecture plan.
          </p>
          <button onClick={() => setModalOpen(true)} className="tx-btn tx-btn-primary">
            Schedule Architecture Review <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="tx-shell tx-footer">
        <div className="tx-footer-grid">
          <div>
            <a href="#" className="tx-logo tx-display" style={{ marginBottom: 16 }}>
              {/* <span className="tx-logo-mark">T</span> */}
              <img 
                src={logo} 
                alt="TECHNIX Logo" 
                width="50" height="50" 
              />
              TECHNIX
            </a>
            <p style={{ color: "var(--text-muted)", fontSize: 14, maxWidth: "34ch" }}>
              Full-stack application development, Python data engineering, and AI integration for EU enterprises.
            </p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul className="tx-footer-links">
              {navLinks.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            {/* <div className="tx-footer-contact"><Phone size={15} /> +32 2 555 0199</div> */}
            <div className="tx-footer-contact"><Mail size={15} /> dev@technixit.com</div>
            <div className="tx-footer-contact"><MapPin size={15} /> Riga • Latvia</div>
          </div>
        </div>
        <div className="tx-footer-bottom">
          <span>© {new Date().getFullYear()} TECHNIX Software Solutions. All rights reserved.</span>
          <span>GDPR & EU AI Act Compliant Architecture</span>
        </div>
      </footer>

      {/* Contact Modal */}
      {modalOpen && (
        <div className="tx-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="tx-modal" onClick={(e) => e.stopPropagation()}>
            <button className="tx-modal-close" onClick={() => setModalOpen(false)}>
              <X size={20} />
            </button>
            <div style={{ marginBottom: 20 }}>
              <h3 className="tx-h2 tx-display" style={{ fontSize: 22 }}>Schedule Tech Review</h3>
              <p style={{ color: "var(--text-muted)", fontSize: 13, margin: 0 }}>
                Fill in your project details to connect with a lead engineer.
              </p>
            </div>

            {submitted ? (
              <div style={{ padding: "20px 0", textAlign: "center", color: "var(--success)" }}>
                <CheckCircle2 size={36} style={{ margin: "0 auto 12px" }} />
                Project Details Submitted. An engineer will reach out within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="tx-form-group">
                  <label className="tx-label">FULL NAME</label>
                  <input type="text" required className="tx-input" placeholder="Jane Doe" />
                </div>
                <div className="tx-form-group">
                  <label className="tx-label">WORK EMAIL</label>
                  <input type="email" required className="tx-input" placeholder="jane@company.eu" />
                </div>
                <div className="tx-form-group">
                  <label className="tx-label">PROJECT SCOPE & TECH STACK</label>
                  <textarea rows="3" className="tx-textarea" placeholder="E.g. React frontend with FastAPI backend, AI model fine-tuning, PostgreSQL database setup..."></textarea>
                </div>
                <button type="submit" className="tx-btn tx-btn-primary" style={{ width: "100%", marginTop: 8 }}>
                  Submit Architecture Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}