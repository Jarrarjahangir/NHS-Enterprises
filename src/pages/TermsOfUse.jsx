import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";

export default function TermsOfUse() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="container" style={{ maxWidth: "860px" }}>
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Terms of Use" }]} />
          <span className="eyebrow">TERMS OF ENGAGEMENT</span>
          <h1 className="page-hero-title">Terms of Use</h1>
          <p className="page-hero-desc text-lead">
            Conditions governing access to and usage of the digital services of NHS Enterprises (NHS ENT Accounting & Tax Consultancy).
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ padding: "1.25rem", backgroundColor: "#FFF8E1", border: "1px solid #FFE082", marginBottom: "2.5rem", fontSize: "0.85rem", color: "#5D4037" }}>
            <strong>Legal Notice:</strong> These terms govern access to the digital presence of NHS Enterprises (NHS ENT Accounting & Tax Consultancy) located in Port Saeed, Deira, Dubai, United Arab Emirates.
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", fontSize: "1rem", lineHeight: 1.7, color: "var(--color-text-secondary)" }}>
            <div>
              <h2 style={{ fontSize: "1.45rem", color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
                1. Nature of Website Content
              </h2>
              <p>
                The materials, articles, and regulatory analyses published on this website are provided for informational purposes only and do not constitute formal accounting, tax, or legal opinions. Engagement as a formal client requires execution of a countersigned Letter of Engagement.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.45rem", color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
                2. Intellectual Property
              </h2>
              <p>
                All trademarks, logos, texts, service marks, and graphical compositions on this site are the intellectual property of NHS Enterprises (NHS ENT Accounting & Tax Consultancy) and may not be reproduced without written authorization.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: "1.45rem", color: "var(--color-text-primary)", marginBottom: "0.75rem" }}>
                3. Governing Law & Jurisdiction
              </h2>
              <p>
                These terms and any non-contractual obligations arising out of or in connection with them shall be governed by and construed in accordance with the laws of the Emirate of Dubai and applicable federal laws of the United Arab Emirates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
