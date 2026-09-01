import React, { useState, useEffect } from "react";
import logo from "../assets/technix-logo.jpg";
import ContactModal from "./ContactModal";
import {
  Code2,
  Database,
  BrainCircuit,
  FileCheck,
  Menu,
  X,
  ArrowRight,
  Mail,
  MapPin,
  CheckCircle2,
  Sparkles,
  GitBranch,
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

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "SDLC Process" },
  { href: "#why", label: "Why Us" },
];

export default function TechnixSite() {
  useFonts();
  const [navOpen, setNavOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="tx-root">
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
            From architecture analysis to continuous deployment, engineered using robust modern frameworks.
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
            <div className="tx-footer-contact"><Mail size={15} /> dev@technixit.com</div>
            <div className="tx-footer-contact"><MapPin size={15} /> Riga • Latvia</div>
          </div>
        </div>
        <div className="tx-footer-bottom">
          <span>© {new Date().getFullYear()} TECHNIX Software Solutions. All rights reserved.</span>
          <span>GDPR & EU AI Act Compliant Architecture</span>
        </div>
      </footer>

      {/* Render External Contact Modal */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}