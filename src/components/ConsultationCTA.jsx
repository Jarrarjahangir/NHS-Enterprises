import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ConsultationCTA() {
  return (
    <section className="consultation-cta-section" aria-labelledby="cta-heading">
      <img
        src="/images/cta-skyline.webp"
        alt="Dubai skyline at dusk"
        className="consultation-cta-bg"
        loading="lazy"
      />
      <div className="consultation-cta-overlay" />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="consultation-cta-content" data-reveal="fade-up">
          <div className="consultation-cta-copy">
            <span className="eyebrow eyebrow-dark">LET'S WORK TOGETHER</span>
            <h2 id="cta-heading" className="consultation-cta-title">
              Ready to Take the Next Step?
            </h2>
            <p className="consultation-cta-sub">
              Book a consultation with our senior advisory team and discover how NHS Enterprises can support your business compliance and strategic growth.
            </p>
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <Link to="/book-consultation" className="btn btn-white" style={{ padding: "1.1rem 2rem", fontSize: "0.95rem" }}>
              <span>Book a Consultation</span>
              <ArrowRight size={16} className="icon-arrow" />
            </Link>
            <a href="tel:+97142543004" className="btn btn-outline" style={{ color: "#FFFFFF", borderColor: "rgba(255,255,255,0.4)", padding: "1.1rem 1.75rem", fontSize: "0.95rem" }}>
              <span>Call +971 4 254 3004</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
