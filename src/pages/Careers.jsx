import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Briefcase, Award, Users, BookOpen } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import CustomSelect from "../components/CustomSelect";

const DISCIPLINE_OPTIONS = [
  { value: "Chartered Financial Accounting (IFRS)", label: "Chartered Financial Accounting (IFRS)", subtext: "Statutory reporting, IFRS compliance & periodic closes" },
  { value: "UAE Corporate Tax & VAT Advisory", label: "UAE Corporate Tax & VAT Advisory", subtext: "Corporate tax provisioning, QFZP rules & VAT filing" },
  { value: "Statutory Audit & Assurance", label: "Statutory Audit & Assurance", subtext: "Statutory audit methodologies, ISA & RERA audits" },
  { value: "CFO Advisory & Financial Modeling", label: "CFO Advisory & Financial Modeling", subtext: "Executive stewardship, FP&A & M&A transaction support" }
];

export default function Careers() {
  const [cvSubmitted, setCvSubmitted] = useState(false);
  const [discipline, setDiscipline] = useState("Chartered Financial Accounting (IFRS)");

  return (
    <main id="main-content">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Careers" }]} />
          <span className="eyebrow">CAREERS AT NHS</span>
          <h1 className="page-hero-title">
            Build Your Career at the Intersection of Precision and Strategy
          </h1>
          <p className="page-hero-desc text-lead">
            We are cultivating a multidisciplinary team of chartered accountants, tax consultants, and financial advisors who thrive on complex challenges and institutional excellence.
          </p>
        </div>
      </section>

      {/* Life at NHS / Values */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div className="section-header-row">
            <div className="section-header-content">
              <span className="eyebrow">LIFE AT OUR FIRM</span>
              <h2 className="section-header-title">Our Culture & Professional Values</h2>
            </div>
            <div className="section-header-aside">
              <p className="section-header-desc">
                We foster an environment of continuous learning, intellectual rigor, and meritocratic growth.
              </p>
            </div>
          </div>

          <div className="why-nhs-grid">
            <div className="why-nhs-card">
              <div className="why-icon-box">
                <Award size={22} strokeWidth={1.5} />
              </div>
              <h3 className="why-card-title">Technical Mastery</h3>
              <p className="why-card-text">
                Continuous sponsorship for professional certifications including ACCA, CPA, CTA, and specialized UAE Corporate Tax diplomas.
              </p>
            </div>

            <div className="why-nhs-card">
              <div className="why-icon-box">
                <Users size={22} strokeWidth={1.5} />
              </div>
              <h3 className="why-card-title">Direct Partner Mentorship</h3>
              <p className="why-card-text">
                Work alongside seasoned partners on high-stakes client advisory, board presentations, and corporate restructuring.
              </p>
            </div>

            <div className="why-nhs-card">
              <div className="why-icon-box">
                <Briefcase size={22} strokeWidth={1.5} />
              </div>
              <h3 className="why-card-title">Diverse Sector Exposure</h3>
              <p className="why-card-text">
                Gain hands-on experience across real estate developers, e-commerce unicorns, industrial conglomerates, and tech ventures.
              </p>
            </div>

            <div className="why-nhs-card">
              <div className="why-icon-box">
                <BookOpen size={22} strokeWidth={1.5} />
              </div>
              <h3 className="why-card-title">Meritocratic Progression</h3>
              <p className="why-card-text">
                Clear, transparent milestones for career advancement based on client impact and technical excellence, not tenure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions State (Authentic "No current openings") */}
      <section className="section border-top" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="eyebrow">CURRENT VACANCIES</span>
            <h2>Active Career Opportunities</h2>
          </div>

          <div style={{ backgroundColor: "#FFFFFF", border: "1px solid var(--color-border)", padding: "3rem 2rem", textAlign: "center" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "var(--color-bg)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.25rem auto", color: "var(--color-accent)" }}>
              <Briefcase size={22} />
            </div>
            <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem" }}>No Active Vacancies at This Time</h3>
            <p style={{ maxWidth: "520px", margin: "0 auto 2rem auto", fontSize: "0.92rem", color: "var(--color-text-secondary)" }}>
              While our current advisory and accounting desks are fully staffed, we regularly review qualified chartered accountants, corporate tax specialists, and financial analysts for future recruitment cohorts.
            </p>

            {cvSubmitted ? (
              <div style={{ padding: "1.5rem", backgroundColor: "#F3F8F2", border: "1px solid #A5D6A7", color: "#2E7D32" }}>
                <CheckCircle2 size={24} style={{ margin: "0 auto 0.5rem auto" }} />
                <strong>Talent Profile Received:</strong> Thank you for your interest in NHS Enterprises. Your profile has been archived for our next hiring cycle.
              </div>
            ) : (
              <div style={{ maxWidth: "480px", margin: "0 auto", textAlign: "left" }}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setCvSubmitted(true);
                  }}
                >
                  <div className="form-group">
                    <label className="form-label" htmlFor="talent-name">Full Name</label>
                    <input id="talent-name" type="text" className="form-input" placeholder="e.g. Maya Haddad" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="talent-email">Email Address</label>
                    <input id="talent-email" type="email" className="form-input" placeholder="name@email.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="talent-discipline">Primary Discipline</label>
                    <CustomSelect
                      id="talent-discipline"
                      name="discipline"
                      value={discipline}
                      onChange={(e) => setDiscipline(e.target.value)}
                      options={DISCIPLINE_OPTIONS}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="talent-linkedin">LinkedIn Profile URL</label>
                    <input id="talent-linkedin" type="url" className="form-input" placeholder="https://linkedin.com/in/username" />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                    <span>Submit to Talent Pool</span>
                    <ArrowRight size={14} className="icon-arrow" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
