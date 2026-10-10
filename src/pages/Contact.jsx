import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight, ExternalLink } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import CustomSelect from "../components/CustomSelect";

const SERVICE_OPTIONS = [
  { value: "Accounting", label: "Accounting (Statutory IFRS & Financial Reporting)", subtext: "IFRS compliance, periodic closing & management reporting" },
  { value: "Bookkeeping", label: "Bookkeeping (Ledger Maintenance & Daily Invoicing)", subtext: "Cloud ledgers & daily reconciliations" },
  { value: "Tax Consultancy", label: "Tax Consultancy (UAE Corporate Tax & VAT)", subtext: "Corporate tax registration & VAT compliance" },
  { value: "Audit & Assurance", label: "Audit & Assurance (Statutory, Internal & Escrow)", subtext: "Independent assurance & RERA escrow audits" },
  { value: "CFO Services", label: "CFO Services (Fractional & Strategic Leadership)", subtext: "Executive financial stewardship & cash planning" },
  { value: "Financial Advisory", label: "Financial Advisory (Valuations & M&A)", subtext: "Due diligence, financial models & valuations" },
  { value: "General Inquiry", label: "General Firm Inquiry", subtext: "General questions & corporate communications" }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Accounting",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <main id="main-content">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Contact Us" }]} />
          <span className="eyebrow">GET IN TOUCH</span>
          <h1 className="page-hero-title">
            Connect With NHS Enterprises
          </h1>
          <p className="page-hero-desc text-lead">
            Whether inquiring about statutory accounting engagements, corporate tax compliance, audit readiness, or bespoke financial advisory, our Dubai team is ready to assist.
          </p>
        </div>
      </section>

      {/* Main Split Section */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div className="about-split-grid">
            {/* Contact Details & Office Representation */}
            <div>
              <span className="eyebrow">HEADQUARTERS</span>
              <h2 style={{ marginBottom: "1.5rem" }}>Dubai Practice Office</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem", marginBottom: "2rem" }}>
                {/* Office Location */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div className="why-icon-box" style={{ width: "42px", height: "42px", flexShrink: 0, marginBottom: 0 }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.05rem", marginBottom: "0.25rem" }}>Office Location</h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                      Office 302-4, Al Babtain Building<br />
                      Port Saeed, Deira, Dubai<br />
                      United Arab Emirates<br />
                      <span style={{ fontSize: "0.82rem", color: "var(--color-text-muted)" }}>Postcode Reference: 282952</span>
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div className="why-icon-box" style={{ width: "42px", height: "42px", flexShrink: 0, marginBottom: 0 }}>
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.05rem", marginBottom: "0.25rem" }}>Telephone Inquiries</h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                      Office Landline:{" "}
                      <a href="tel:+97142543004" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                        +971 4 254 3004
                      </a>
                      <br />
                      Office Mobile:{" "}
                      <a href="tel:+971506913880" style={{ color: "var(--color-text-primary)", fontWeight: 600 }}>
                        +971 50 691 3880
                      </a>
                    </p>
                  </div>
                </div>

                {/* Electronic Inquiries */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div className="why-icon-box" style={{ width: "42px", height: "42px", flexShrink: 0, marginBottom: 0 }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.05rem", marginBottom: "0.25rem" }}>Electronic Inquiries</h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                      Official Domain: <strong>nhsenterprises.com</strong>
                      <br />
                      <span style={{ fontSize: "0.82rem", color: "var(--color-text-muted)" }}>
                        Corporate mailboxes are in final DNS activation. For immediate assistance, please call our direct office lines or complete the inquiry form.
                      </span>
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                  <div className="why-icon-box" style={{ width: "42px", height: "42px", flexShrink: 0, marginBottom: 0 }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.05rem", marginBottom: "0.25rem" }}>Operating Hours</h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                      Monday – Friday: 08:30 – 18:00 GST<br />
                      Saturday – Sunday: Closed (Executive Consultation On-Call)
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed & Directions Link */}
              <div style={{ border: "1px solid var(--color-border)", overflow: "hidden", backgroundColor: "var(--color-bg)" }}>
                <div style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--color-text-secondary)" }}>
                    Office Map • Port Saeed, Deira, Dubai
                  </span>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Al+Babtain+Building,+Port+Saeed,+Deira,+Dubai,+United+Arab+Emirates"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "0.8rem", color: "var(--color-accent)", display: "inline-flex", alignItems: "center", gap: "4px", fontWeight: 600 }}
                  >
                    <span>Get Directions</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
                <iframe
                  title="NHS Enterprises Office Map - Al Babtain Building, Port Saeed, Deira, Dubai"
                  src="https://maps.google.com/maps?q=Al+Babtain+Building,+Port+Saeed,+Deira,+Dubai,+United+Arab+Emirates&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="260"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Inquiry Form */}
            <div style={{ backgroundColor: "var(--color-bg)", padding: "2.5rem", border: "1px solid var(--color-border)" }}>
              <span className="eyebrow">DIRECT INQUIRY</span>
              <h3 style={{ fontSize: "1.45rem", marginBottom: "1.5rem" }}>Send a Direct Message</h3>

              {submitted ? (
                <div style={{ textAlign: "center", padding: "2.5rem 1.5rem", backgroundColor: "#FFFFFF", border: "1px solid var(--color-border)" }}>
                  <div style={{ color: "var(--color-accent)", display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                    <CheckCircle2 size={44} />
                  </div>
                  <h4 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>Inquiry Details Prepared</h4>
                  <p style={{ color: "var(--color-text-secondary)", fontSize: "0.88rem", lineHeight: 1.6, maxWidth: "460px", margin: "0 auto 1.5rem auto" }}>
                    Thank you, <strong>{formData.name}</strong>. Your message details regarding <strong>{formData.service}</strong> have been recorded. You can connect immediately with our advisory team via phone or open a pre-filled email draft:
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "340px", margin: "0 auto 1.5rem auto" }}>
                    <a href="tel:+97142543004" className="btn btn-primary" style={{ justifyContent: "center" }}>
                      <Phone size={14} />
                      <span>Call Landline: +971 4 254 3004</span>
                    </a>
                    <a href="tel:+971506913880" className="btn btn-outline" style={{ justifyContent: "center" }}>
                      <Phone size={14} />
                      <span>Call Mobile: +971 50 691 3880</span>
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    style={{ background: "none", border: "none", color: "var(--color-text-muted)", fontSize: "0.82rem", cursor: "pointer", textDecoration: "underline" }}
                  >
                    Edit details or submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">Full Name *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Tariq Al-Mansoor"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Business Email *</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="e.g. tariq@enterprise.ae"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-phone">Phone Number *</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      className="form-input"
                      placeholder="+971 50 000 0000"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-service">Service Required *</label>
                    <CustomSelect
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      options={SERVICE_OPTIONS}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">Message *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      className="form-textarea"
                      placeholder="Please describe your requirements, timelines, or business jurisdiction..."
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "0.95rem" }}>
                    <span>Send Inquiry</span>
                    <ArrowRight size={14} className="icon-arrow" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
