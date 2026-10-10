import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import ConsultationCTA from "../components/ConsultationCTA";
import { industriesData } from "../data/industriesData";
import { servicesData } from "../data/servicesData";

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = industriesData.find((i) => i.slug === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <main id="main-content">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: "Home", path: "/" },
              { label: "Industries", path: "/industries" },
              { label: industry.name }
            ]}
          />
          <span className="eyebrow">SECTOR FOCUS</span>
          <h1 className="page-hero-title">{industry.name}</h1>
          <p className="page-hero-desc text-lead">{industry.overview}</p>
        </div>
      </section>

      {/* Hero Visual & Challenges Split */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div className="about-split-grid">
            <div className="about-photo-wrapper">
              <img
                src={industry.image}
                alt={`${industry.name} in Dubai UAE`}
                loading="lazy"
              />
            </div>

            <div>
              <span className="eyebrow">INDUSTRY CHALLENGES</span>
              <h2 style={{ marginBottom: "1.5rem" }}>
                Navigating Complexity in {industry.shortName}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
                {industry.challenges.map((c, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
                    <div style={{ color: "#B33927", marginTop: "3px", flexShrink: 0 }}>
                      <AlertCircle size={18} />
                    </div>
                    <p style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)" }}>{c}</p>
                  </div>
                ))}
              </div>

              <Link to="/book-consultation" className="btn btn-primary">
                <span>Discuss Your Sector Needs</span>
                <ArrowRight size={14} className="icon-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NHS Tailored Solutions */}
      <section className="section border-top" style={{ backgroundColor: "var(--color-bg)" }}>
        <div className="container">
          <div className="section-header-row">
            <div className="section-header-content">
              <span className="eyebrow">HOW NHS ASSISTS</span>
              <h2 className="section-header-title">Tailored Financial Architecture</h2>
            </div>
            <div className="section-header-aside">
              <p className="section-header-desc">
                Specialized controls designed around the commercial realities of {industry.name}.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {industry.solutions.map((sol, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid var(--color-border)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ color: "var(--color-accent)", marginBottom: "1rem" }}>
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>Strategic Resolution 0{idx + 1}</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>{sol}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Core Services */}
      <section className="section border-top" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div className="section-header-row">
            <div className="section-header-content">
              <span className="eyebrow">RECOMMENDED PRACTICES</span>
              <h2 className="section-header-title">Core Services for This Industry</h2>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {servicesData.slice(0, 3).map((srv) => (
              <Link
                key={srv.slug}
                to={`/services/${srv.slug}`}
                style={{
                  padding: "1.75rem",
                  backgroundColor: "var(--color-bg)",
                  border: "1px solid var(--color-border)",
                  display: "block",
                  textDecoration: "none"
                }}
              >
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{srv.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--color-text-secondary)", marginBottom: "1rem" }}>{srv.shortDesc}</p>
                <span className="link-arrow">
                  <span>Explore Practice</span>
                  <ArrowRight size={13} className="icon-arrow" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ConsultationCTA />
    </main>
  );
}
