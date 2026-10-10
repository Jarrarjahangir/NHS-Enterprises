import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";

export default function PrivacyPolicy() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="container" style={{ maxWidth: "860px" }}>
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Privacy Policy" }]} />
          <span className="eyebrow">LEGAL COMPLIANCE</span>
          <h1 className="page-hero-title">Privacy Policy</h1>
          <p className="page-hero-desc text-lead">
            NHS Enterprises (NHS ENT Accounting & Tax Consultancy) is committed to protecting the confidentiality and security of personal and commercial data entrusted to us.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ padding: "1.25rem", backgroundColor: "#FFF8E1", border: "1px solid #FFE082", marginBottom: "2.5rem", fontSize: "0.85rem", color: "#5D4037" }}>
            <strong>Regulatory Notice:</strong> This privacy documentation represents an institutional template aligned with UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection (PDPL) and requires ongoing review by the company's legal and compliance officers.
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "1rem", lineHeight: 1.7, color: "var(--color-text-secondary)" }}>
            <div>
              <h2 style={{ fontSize: "1.45rem", color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
                1. Data Controller Identification
              </h2>
              <p>
                The data controller for information processed through this website is <strong>NHS Enterprises</strong> (NHS ENT Accounting & Tax Consultancy), located at Office 302-4, Al Babtain Building, Port Saeed, Deira, Dubai, United Arab Emirates (Postcode: 282952).
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.45rem", color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
                2. Information We Collect
              </h2>
              <p>
                In the course of providing accounting, tax consultancy, and financial advisory services, we may collect:
              </p>
              <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
                <li>Contact identifiers (name, corporate email, telephone numbers, professional role).</li>
                <li>Company operational data submitted via consultation inquiries (business size, jurisdiction, turnover).</li>
                <li>Financial documents transmitted under strict non-disclosure agreements for scoping purposes.</li>
                <li>Technical server logs, IP addresses, and standard session cookies for security validation.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: "1.45rem", color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
                3. Purpose of Processing
              </h2>
              <p>
                We process your information exclusively to: deliver professional accounting and advisory services, fulfill statutory UAE anti-money laundering (AML) and know-your-customer (KYC) mandates, respond to consultation requests, and protect the security of our digital ledger systems.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.45rem", color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
                4. Data Security & Storage
              </h2>
              <p>
                All data is encrypted in transit using TLS 1.3 cryptographic protocols and stored in secure regional data repositories compliant with UAE national data residency standards.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.45rem", color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
                5. Contacting the Compliance Officer
              </h2>
              <p>
                Inquiries regarding your personal data rights may be directed to our compliance desk via our office landline at <a href="tel:+97142543004" style={{ color: "var(--color-accent)", fontWeight: 600 }}>+971 4 254 3004</a> or by visiting our office in Port Saeed, Deira, Dubai.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
