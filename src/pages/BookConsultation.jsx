import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Lock } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import CustomSelect from "../components/CustomSelect";
import TurnoverRangeSlider from "../components/TurnoverRangeSlider";

const PRACTICE_OPTIONS = [
  {
    value: "Accounting",
    label: "Accounting (Statutory IFRS & Financial Reporting)",
    subtext: "IFRS compliance, periodic closing, variance analysis & management packs"
  },
  {
    value: "Bookkeeping",
    label: "Bookkeeping (Ledger Maintenance & Daily Invoicing)",
    subtext: "Multi-currency bank feeds, digital receipt capture & AP/AR reconciliation"
  },
  {
    value: "Tax",
    label: "UAE Corporate Tax & VAT Consultancy",
    subtext: "Corporate tax registration, QFZP status & FTA VAT return filing"
  },
  {
    value: "Audit",
    label: "Audit & Assurance (Statutory, Internal & Escrow)",
    subtext: "Mainland, DMCC, DIFC, JAFZA and RERA escrow audit reporting"
  },
  {
    value: "CFO Services",
    label: "CFO Services (Fractional & Strategic Leadership)",
    subtext: "Cash runway optimization, bank facilities negotiation & board advisory"
  },
  {
    value: "Financial Advisory",
    label: "Financial Advisory (Valuations, M&A & Due Diligence)",
    subtext: "Transaction modeling, business valuation & buy-side/sell-side diligence"
  },
  {
    value: "Comprehensive",
    label: "Comprehensive Multi-Service Engagement",
    subtext: "Integrated corporate accounting, tax advisory, and assurance mandate"
  }
];

const JURISDICTION_OPTIONS = [
  { value: "Mainland (DED)", label: "UAE Mainland (DED License)", subtext: "Commercial or professional entity operating in mainland UAE" },
  { value: "Free Zone (DMCC / DIFC / JAFZA)", label: "Free Zone (DMCC, DIFC, JAFZA, etc.)", subtext: "Free zone establishment or branch entity eligible for QFZP review" },
  { value: "Multi-Jurisdiction / Holding", label: "Multi-Jurisdiction / Holding Group", subtext: "Diversified corporate group with multiple operating entities" },
  { value: "Foreign Entity entering UAE", label: "International Entity Entering UAE", subtext: "Foreign parent company establishing UAE operational presence" }
];

const TIME_OPTIONS = [
  { value: "Morning (09:00 - 12:00 GST)", label: "Morning (09:00 - 12:00 Gulf Standard Time)" },
  { value: "Afternoon (13:00 - 16:00 GST)", label: "Afternoon (13:00 - 16:00 Gulf Standard Time)" },
  { value: "Late Afternoon (16:00 - 18:00 GST)", label: "Late Afternoon (16:00 - 18:00 Gulf Standard Time)" }
];

export default function BookConsultation() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    serviceRequired: "Accounting",
    companySize: "AED 3M – 15M (Growth)",
    jurisdiction: "Mainland (DED)",
    preferredTime: "Morning (09:00 - 12:00 GST)",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      setErrorMsg("Please fill in your name, email address, and phone number.");
      return;
    }
    setErrorMsg("");
    setSubmitted(true);
  };

  return (
    <main id="main-content">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container" data-reveal="fade-up" style={{ maxWidth: "900px" }}>
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Book a Consultation" }]} />
          <span className="eyebrow">EXECUTIVE ENGAGEMENT</span>
          <h1 className="page-hero-title">
            Book an Advisory Consultation
          </h1>
          <p className="page-hero-desc text-lead">
            Schedule a discussion with a senior advisor at NHS Enterprises to evaluate your accounting, corporate tax, audit, or fractional CFO requirements in the UAE.
          </p>
          <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--color-text-muted)" }}>
            Need immediate advice? Call our Dubai practice directly at{" "}
            <a href="tel:+97142543004" style={{ color: "var(--color-accent)", fontWeight: 600 }}>+971 4 254 3004</a>
            {" or "}
            <a href="tel:+971506913880" style={{ color: "var(--color-accent)", fontWeight: 600 }}>+971 50 691 3880</a>.
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container" data-reveal="fade-up" style={{ maxWidth: "860px" }}>
          {submitted ? (
            <div className="form-feedback-success" style={{ padding: "3rem 2rem", textAlign: "center" }}>
              <div style={{ color: "#2E7D32", display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}>
                <CheckCircle2 size={52} />
              </div>
              <h2 style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>
                Consultation Request Prepared
              </h2>
              <p style={{ maxWidth: "540px", margin: "0 auto 1.5rem auto", fontSize: "0.95rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                Thank you, <strong>{formData.fullName}</strong>. Your consultation parameters for <strong>{formData.company || "your enterprise"}</strong> have been recorded. To confirm your consultation directly with our advisory desk, please call our office or submit via direct email:
              </p>
              <div style={{ padding: "1.25rem", backgroundColor: "#FFFFFF", border: "1px solid var(--color-border)", maxWidth: "480px", margin: "0 auto 1.5rem auto", textAlign: "left", fontSize: "0.85rem", lineHeight: 1.6 }}>
                <div><strong>Practice Area:</strong> {formData.serviceRequired}</div>
                <div><strong>Enterprise Scale:</strong> {formData.companySize}</div>
                <div><strong>Jurisdiction:</strong> {formData.jurisdiction}</div>
                <div><strong>Preferred Window:</strong> {formData.preferredTime}</div>
                <div><strong>Office:</strong> Office 302-4, Al Babtain Bldg, Port Saeed, Deira, Dubai</div>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                <a href="tel:+97142543004" className="btn btn-primary">
                  <span>Call Landline: +971 4 254 3004</span>
                </a>
                <a href="tel:+971506913880" className="btn btn-outline">
                  <span>Call Mobile: +971 50 691 3880</span>
                </a>
              </div>
              <Link to="/" style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", textDecoration: "underline" }}>
                Return to Homepage
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {errorMsg && (
                <div style={{ padding: "1rem", backgroundColor: "#FFEBEE", border: "1px solid #FFCDD2", color: "#C62828", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
                  {errorMsg}
                </div>
              )}

              {/* Step 1: Luxury Service Selection */}
              <div style={{ marginBottom: "2.5rem" }}>
                <label className="form-label" htmlFor="serviceRequired">
                  1. Primary Practice Area Required *
                </label>
                <CustomSelect
                  id="serviceRequired"
                  name="serviceRequired"
                  value={formData.serviceRequired}
                  onChange={handleChange}
                  options={PRACTICE_OPTIONS}
                  required
                />
              </div>

              {/* Step 2: Contact Information */}
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Tariq Al-Mansoor"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="company">
                    Company Name *
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="form-input"
                    placeholder="e.g. Apex Holdings LLC"
                    value={formData.company}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Corporate Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    placeholder="+971 50 000 0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Step 3: Company Scope — Luxury Turnover Slider & Jurisdiction */}
              <div style={{ marginTop: "1rem" }}>
                <label className="form-label" style={{ marginBottom: "0.75rem" }}>
                  2. Annual Turnover / Enterprise Scale
                </label>
                <TurnoverRangeSlider
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="jurisdiction">
                  3. UAE Commercial Jurisdiction
                </label>
                <CustomSelect
                  id="jurisdiction"
                  name="jurisdiction"
                  value={formData.jurisdiction}
                  onChange={handleChange}
                  options={JURISDICTION_OPTIONS}
                />
              </div>

              {/* Step 4: Preferred Time Window */}
              <div className="form-group">
                <label className="form-label" htmlFor="preferredTime">
                  4. Preferred Consultation Window
                </label>
                <CustomSelect
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  options={TIME_OPTIONS}
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Brief Overview of Requirements or Deadlines
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="form-textarea"
                  placeholder="Outline any immediate tax filings, upcoming audits, or specific accounting challenges..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {/* Confidentiality Notice */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", padding: "1rem", backgroundColor: "var(--color-bg)", border: "1px solid var(--color-border)", marginBottom: "2rem", fontSize: "0.82rem", color: "var(--color-text-secondary)" }}>
                <Lock size={16} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
                <span>
                  <strong>Strict Confidentiality:</strong> All shared details are protected by professional non-disclosure standards in accordance with UAE Federal privacy regulations.
                </span>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "1.1rem", fontSize: "0.95rem" }}>
                <span>Submit Consultation Request</span>
                <ArrowRight size={15} className="icon-arrow" />
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
