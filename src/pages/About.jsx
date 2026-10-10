import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, CheckCircle2, Compass, Landmark } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import WhyNHS from "../components/WhyNHS";
import ProcessSteps from "../components/ProcessSteps";
import ConsultationCTA from "../components/ConsultationCTA";

export default function About() {
  const principles = [
    {
      icon: <Shield size={22} strokeWidth={1.5} />,
      title: "Confidentiality & Discretion",
      desc: "Your financial affairs and strategic objectives are protected with enterprise-grade data security protocols and strict institutional non-disclosure agreements."
    },
    {
      icon: <CheckCircle2 size={22} strokeWidth={1.5} />,
      title: "Technical Precision",
      desc: "We adhere uncompromisingly to IFRS and UAE Federal Tax Authority statutes. Every calculation is documented, referenced, and audit-ready."
    },
    {
      icon: <Compass size={22} strokeWidth={1.5} />,
      title: "Commercial Pragmatism",
      desc: "Compliance should facilitate business velocity, not paralyze it. We translate intricate tax codes into straightforward, commercially actionable steps."
    },
    {
      icon: <Landmark size={22} strokeWidth={1.5} />,
      title: "UAE Market Rootedness",
      desc: "From mainland DED requirements to specialized free zone authorities like DMCC, DIFC, and JAFZA, our team possesses ground-level familiarity."
    }
  ];

  return (
    <main id="main-content">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container" data-reveal="fade-up">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "About Us" }]} />
          <span className="eyebrow">ABOUT NHS ENTERPRISES</span>
          <h1 className="page-hero-title">
            Financial Stewardship for the UAE's Most Ambitious Enterprises
          </h1>
          <p className="page-hero-desc text-lead">
            NHS Enterprises (NHS ENT Accounting & Tax Consultancy) is an independent advisory practice located in Port Saeed, Deira, Dubai. We partner with business leaders to build robust financial systems, ensure uncompromising regulatory compliance, and inform decisive strategic moves.
          </p>
        </div>
      </section>

      {/* Editorial Story Split */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div className="about-split-grid">
            <div data-reveal="fade-up">
              <span className="eyebrow">OUR ORIGIN & PURPOSE</span>
              <h2 style={{ marginBottom: "1.5rem" }}>
                Built on Precision, Designed for Partnership
              </h2>
              <p style={{ marginBottom: "1.25rem" }}>
                The United Arab Emirates is one of the world's most dynamic commercial ecosystems. Yet as regulatory frameworks mature—with the introduction of UAE Federal Corporate Tax, sophisticated transfer pricing guidelines, and stringent economic substance regulations—businesses require more than routine bookkeeping.
              </p>
              <p style={{ marginBottom: "1.25rem" }}>
                NHS Enterprises was founded to fill the critical gap between commoditized recordkeeping shops and the prohibitive cost of multinational accounting giants. We deliver senior-level advisory rigor, personalized partner access, and deep operational familiarity with UAE mainland and freezone regulations.
              </p>
              <p style={{ marginBottom: "2rem" }}>
                We believe that clear, auditable financial data is the prerequisite for entrepreneurial courage. When founders and directors understand their cash velocity, tax obligations, and unit margins, they make bolder, more successful business decisions.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link to="/services" className="btn btn-primary">
                  <span>Explore Our Services</span>
                  <ArrowRight size={14} className="icon-arrow" />
                </Link>
                <Link to="/book-consultation" className="btn btn-outline">
                  <span>Speak With a Partner</span>
                </Link>
              </div>
            </div>

            <div className="about-photo-wrapper" data-reveal="fade-up">
              <img
                src="/images/about-office.webp"
                alt="NHS Enterprises conference room in Dubai"
                loading="lazy"
              />
              <div className="about-photo-accent-frame" />
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="section border-top" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container">
          <div className="section-header-row" data-reveal="fade-up">
            <div className="section-header-content">
              <span className="eyebrow">OUR COMMITMENT</span>
              <h2 className="section-header-title">The Principles That Guide Every Mandate</h2>
            </div>
            <div className="section-header-aside">
              <p className="section-header-desc">
                We measure our value by the stability of your balance sheet and the clarity of your strategic path.
              </p>
            </div>
          </div>

          <div className="why-nhs-grid">
            {principles.map((p, idx) => (
              <div
                key={idx}
                className="why-nhs-card"
                data-reveal="fade-up"
                style={{ "--stagger-i": idx }}
              >
                <div className="why-icon-box">
                  {p.icon}
                </div>
                <h3 className="why-card-title">{p.title}</h3>
                <p className="why-card-text">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Why NHS */}
      <ProcessSteps />
      <WhyNHS />

      {/* CTA */}
      <ConsultationCTA />
    </main>
  );
}
