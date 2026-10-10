import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import IndustryCard from "../components/IndustryCard";
import ConsultationCTA from "../components/ConsultationCTA";
import { industriesData } from "../data/industriesData";

export default function IndustriesIndex() {
  return (
    <main id="main-content">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container" data-reveal="fade-up">
          <Breadcrumbs items={[{ label: "Home", path: "/" }, { label: "Industries" }]} />
          <span className="eyebrow">SECTOR EXPERTISE</span>
          <h1 className="page-hero-title">
            Sector Expertise That Drives Real Results
          </h1>
          <p className="page-hero-desc text-lead">
            Every UAE industry operates under distinct commercial customs, licensing constraints, and tax dynamics. NHS Enterprises provides specialized industry accounting and advisory teams tailored to your operating reality.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div className="industries-grid">
            {industriesData.map((ind, idx) => (
              <IndustryCard key={ind.slug} industry={ind} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Sector Advisory Note */}
      <section className="section border-top" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container">
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }} data-reveal="fade-up">
            <span className="eyebrow">SPECIALIZED MANDATES</span>
            <h2 style={{ marginBottom: "1rem" }}>Operating in an Unlisted Sector?</h2>
            <p className="text-lead" style={{ marginBottom: "2rem" }}>
              Our advisory partners have structured transactions and managed statutory accounting for joint ventures, special economic zone concessionaires, and multinational holding entities across diverse global niches.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ConsultationCTA />
    </main>
  );
}
